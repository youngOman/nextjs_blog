// 檔名=pathname/[] 動態
import React from 'react'
import { getPostDetails,getPosts } from '../../services'
import { PostDetail,PostCard,Categories,LatestPost,Author,Comments,CommentsForm } from '../../components'

const PostDetails = ({post}) => {

  // console.log(post)

  return (
    <div className='container mx-auto px-8 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          Dynamic route
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm />
          <Comments/>


        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            相似貼文
            <LatestPost slug={post.slug} categories={post.categories.map((category)=>category.slug)} />
            <Categories/>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default PostDetails 

export async function getStaticProps({params}){
  const data =  await getPostDetails(params.slug); 
  return {
    props : { post : data }
  }
}

export async function getStaticPaths(){ // 將所有可能的路徑都能被static render
  const posts =  await getPosts(); // GraphQL API
  return {
    paths: posts.map(({node:{slug}})=>({params:{slug}})), // pre-render all the paths specified by getStaticPaths.
    fallback: false,
  }
}