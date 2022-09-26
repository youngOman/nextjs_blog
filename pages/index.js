// 首頁
import { PostCard,Categories,LatestPost,Pagination } from '../components'; // 不指定=index
import { FeaturedPost } from '../sections';
import React,{ useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
// API
import { getPosts } from '../services'

export default function Home ({posts}) {

  // 載入中狀態
  const router = useRouter();
  if (router.isFallback) { 
    return <Loader />;
  }
  // 分頁功能
  const [pageNumber, setPageNumber] = useState(0); 
  const postsPerPage = 5;
  const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數
  // Ex:設每頁10筆 目前在第4頁 資料區間=40->50
  const currentPost = posts.slice(pagesVisited,pagesVisited+postsPerPage); // 目前這頁顯示的posts = .slice(總筆數,總筆數+每頁筆數)

  const changePage = ({ selected }) => { // selected = 下一個要移動到的頁數
    setPageNumber(selected); 

};
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Young's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'> 
            {currentPost.length > 0 ? currentPost.map((post,index)=>(
              <PostCard post={post.node} key={index} />
            )):<div className='text-5xl'>0則貼文 QQ...</div>}
        </div>
        <div className='lg:col-span-4 col-span-1' >
          <div className='lg:sticky relative top-8'>{/*sticky=滾動頁面時不會跟著滾*/}
              <LatestPost />
              <Categories />
          </div>
        </div>
      </div>
      <Pagination posts={posts} postsPerPage={postsPerPage}  changePage={changePage} />
    </div>
  )
}

export async function getStaticProps(){ // 只在run build跑一次

  const posts =  await ( getPosts() || []); // 若無資料就回傳空陣列

  return {
    props : { posts },
  }
  
}
