// 首頁
import { PostCard,Categories,LatestPost,Pagination } from '../components'; // 不指定=index
import { FeaturedPost } from '../sections';
import React,{ useState,useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
// API
import { getPosts } from '../services'
import { title } from 'process';
import ReactPaginate from 'react-paginate';

export default function Home ({posts}) {

  // console.log(posts)
  const [Posts, setPosts] = useState(posts);
  // const [postTitles , setPostTitles]= useState(posts.map((post)=>post.node.title.toLowerCase())); // 
  const [filteredPosts,setFilteredPost] = useState(posts) // 篩選過後的貼文
  const [SearchQuery,setSearchQuery] = useState("")
  const [filterCompleted, setFilterCompleted] = useState("");
  // console.log(...postTitles)

  // 載入中狀態
  const router = useRouter();
  if (router.isFallback) { 
    return <Loader />;
  }
  // 分頁功能
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPosts,setTotalPosts] = useState(0)
  const postsPerPage = 2;
  const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數
  // Ex:設每頁10筆 目前在第4頁 資料區間=40->50
  const currentPost = posts.slice(pagesVisited,pagesVisited+postsPerPage); // 目前這頁顯示的posts = .slice(總筆數,總筆數+每頁筆數)

  const changePage = ({ selected }) => { // selected = 下一個要移動到的頁數
    setPageNumber(selected);
  }
  // 重置 Condition
  const resetFilter = () => { 
    setSearchQuery("");
    setFilterCompleted("");
    setPageNumber(0);
  }

  const postsData = useMemo(()=>{    

    let StateDatas = Posts

    if(SearchQuery){
      StateDatas = StateDatas.filter((post) =>post.node.title.toLowerCase().includes(SearchQuery.toLowerCase()));
    };

    if (filterCompleted === "true") {
      StateDatas = StateDatas.filter(
        (post) => filterCompleted === "true" && post.completed === true
      );
    }

    if (filterCompleted === "false") {
      StateDatas = StateDatas.filter(
        (post) => filterCompleted === "false" && post.completed === false
      );
    }
    
    setTotalPosts(StateDatas.length);

    return StateDatas.slice(pagesVisited,pagesVisited+postsPerPage);

  },[filterCompleted,SearchQuery,pageNumber,posts])
  
  // useEffect(()=>{
  //   const filteredPostTitles = [...postTitles].filter((title) => title.indexOf(SearchQuery.trim().toLowerCase())!==-1) // 將所有title去除前後空白解構給filteredPostTitles這個變數
  //   const refilteredPosts = [...posts].filter((post)=> filteredPostTitles.includes(post.node.title.toLowerCase())) // 條件符合
  //   setFilteredPost(refilteredPosts);
  //   // const currentPage = filteredPosts.slice(pagesVisited,pagesVisited+postsPerPage);
  // },[SearchQuery,postTitles,posts]);


  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Young's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 搜尋 */}
      <div className="relative"> 
        <button type='submit' className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </button>
        <input 
        type="text" 
        id="search" 
        placeholder="Search"
        value={SearchQuery}
        onChange={(e)=>{
          setSearchQuery(e.target.value);
          setPageNumber(0);
        }}
        className="border pl-10 p-3 border-gray-600 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block " 
        required
        />
        {SearchQuery}      
        <div className="mb-3">
          <button type="button" className="bg-red-600"  onClick={resetFilter} >
            Reset Filters
          </button>
        </div>

    </div>
      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          
          {postsData.length > 0 ? postsData.map((post,index)=>(
            <PostCard post={post.node} key={index} />
          )):<div className='text-5xl'>0則貼文இдஇ...</div>}

          {/* {postsData.length > 0 ? postsData.map((post,index)=>(
            <PostCard post={post.node} key={index} />
          )):<div className='text-5xl'>0則貼文இдஇ...</div>} */}

        </div>
        <div className='lg:col-span-4 col-span-1' >
          <div className='lg:sticky relative top-8'>{/*sticky=滾動頁面時不會跟著滾*/}
              <LatestPost />
              <Categories />
          </div>
        </div>
      </div>
      <Pagination posts={posts} postsPerPage={postsPerPage} changePage={changePage} />
    </div>
  )
}

export async function getStaticProps(){ // 只在run build跑一次

  const posts =  await ( getPosts() || []); // 若無資料就回傳空陣列

  return {
    props : { posts },
  }
  
}
