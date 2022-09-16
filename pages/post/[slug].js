// 檔名=pathname/[] 動態
import React from 'react'
import { useRouter } from 'next/router'
import { getPostDetails,getPosts } from '../../services'
import { PostDetail,PostCard,Categories,LatestPost,Author,Comments,CommentsForm } from '../../components'
import { AdjacentPosts } from '../../sections';

const PostDetails = ({post}) => {

  // console.log(post)

  const router = useRouter();

  if (router.isFallback) { // 載入中狀態
    return <Loader />;
  }

  return (
    <div className='container mx-auto px-8 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />

          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          <CommentsForm />
          <Comments/>


        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <LatestPost slug={post.slug} categories={post.categories.map((category)=>category.slug)} />
            <Categories/>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default PostDetails 


// Fetch data at build time
export async function getStaticProps({params}){ //params ??
  
  const data =  await getPostDetails(params.slug);  // 單個post
  return {
    props : { post : data } // post = 這頁的props
  }

}
// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths(){ // 將所有可能的路徑都能被static render
  const posts =  await getPosts(); // GraphQL API 全部的post
  return {
    paths: posts.map(({node:{slug}})=>({params:{slug}})), // 讓Next.js知道所有可能出現的路徑
    fallback: false,
  }
}