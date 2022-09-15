// 首頁
import { PostCard,Categories,LatestPost } from '../components'; // 不指定=index
import { FeaturedPost } from '../sections';
import React,{ useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
// API
import { getPosts } from '../services'

export default function Home ({posts}) {

  const router = useRouter();
  if (router.isFallback) { // 載入中狀態
    return <Loader />;
  }

  const [pageNumber, setPageNumber] = useState(0); 

  const postsPerPage = 2;
  const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數
  const currentPost = posts.slice(pagesVisited,pagesVisited+postsPerPage); // 目前這頁所顯示的Data = .slice(總筆數,總筆數+每頁筆數)
  const pageCount = Math.ceil(posts.length / postsPerPage); // 總頁數

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto px-10 mb-8 ">
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
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export async function getStaticProps(){ // 只在run build跑一次

  const posts =  await ( getPosts() || []); // 若無資料就回傳空陣列

  return {
    props : { posts },
  }
  
}
