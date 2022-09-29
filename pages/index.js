// 首頁
import { PostCard,Categories,LatestPost,Pagination } from '../components'; // 不指定=index
import { FeaturedPost } from '../sections';
import React,{ useState,useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'
// API
import { getPosts } from '../services'

export default function Home ({posts}) {
  // console.log(posts)

  // const postTitles  = posts.map((post)=>post.node.title.toLowerCase());

  // const [filteredPosts,setFilteredPost] = useState(posts); // 篩選前&後的 State

  const [SearchQuery,setSearchQuery] = useState("");
  const [FilterfeaturedPost, setFilterfeaturedPost] = useState(""); // 下拉式選單
  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPosts,setTotalPosts] = useState(0);
  const postsPerPage = 2;

  // console.log(...postTitles)

  const router = useRouter();
  if (router.isFallback) { 
    return <Loader />;
  }

  const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數

  const pageCount = Math.ceil( totalPosts / postsPerPage); // 總頁數
  // Ex:設每頁10筆 目前在第4頁 資料區間=40->50，目前這頁顯示的posts = .slice(總筆數,總筆數+每頁筆數)
  // const currentPost = posts.slice(pagesVisited,pagesVisited+postsPerPage); 

  const changePage = ({ selected }) => { // selected = 下一個要移動到的頁數
    setPageNumber(selected);
  }

  const postsData = useMemo(()=>{    

    let CalculateDatas = posts;

    if(SearchQuery){
      CalculateDatas = CalculateDatas.filter((post)=> {
      return post.node.title.toLowerCase().includes(SearchQuery.trim().toLowerCase())||
            post.node.excerpt.toLowerCase().includes(SearchQuery.trim().toLowerCase());
      });
      // const filteredPostTitles = [...postTitles].filter((title) => title.indexOf(SearchQuery.trim().toLowerCase())!==-1) // 將所有title去除前後空白解構給filteredPostTitles這個變數
      // CalculateDatas = [...posts].filter((post)=> filteredPostTitles.includes(post.node.title.toLowerCase())) // 條件符合
    };

    if (FilterfeaturedPost === "true") {
      CalculateDatas = CalculateDatas.filter(
        (post) => FilterfeaturedPost === "true" && post.node.featuredPost == true
      );
    }

    if (FilterfeaturedPost === "false") {
      CalculateDatas = CalculateDatas.filter(
        (post) => FilterfeaturedPost === "false" && post.node.featuredPost == false
      );
    }
    
    // console.log(CalculateDatas);

    setTotalPosts(CalculateDatas.length);

    return CalculateDatas.slice(pagesVisited,pagesVisited+postsPerPage);

  },[FilterfeaturedPost,SearchQuery,pageNumber,posts])
  
  // useEffect(()=>{
  // indexOf 如果没有找到匹配的字符串返回-1。
  //   const filteredPostTitles = [...postTitles].filter((title) => title.indexOf(SearchQuery.trim().toLowerCase())!==-1) // 將所有title去除前後空白解構給filteredPostTitles這個變數
  //   const refilteredPosts = [...posts].filter((post)=> filteredPostTitles.includes(post.node.title.toLowerCase())) // 條件符合
  //   setFilteredPost(refilteredPosts);
  //   // const currentPage = filteredPosts.slice(pagesVisited,pagesVisited+postsPerPage);

  // },[SearchQuery,postTitles,posts]);
  
  // 重置 Condition
  const resetFilter = () => { 
    setSearchQuery("");
    setFilterfeaturedPost("");
    setPageNumber(0);
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Young's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 搜尋 */}
      <div className="md:relative flex justify-center mb-8 p-2 "> 
        <select 
          value={FilterfeaturedPost}
          onChange={(e) => {
            setFilterfeaturedPost(e.target.value);
            setPageNumber(0);
          }}
          className="w-1/6 md:w-auto  font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
            <option defaultValue="" className='font-semibold'>廢文過濾器</option>
            <option value="true" className='font-semibold'>只看正經的</option>
            <option value="false" className='font-semibold'>我全都看!</option>
        </select>

        <button type='submit' className="relative inset-y--1 left-8 items-center ">
          <AiOutlineSearch size={20}/>
        </button>

          <input type="text"  id="search" placeholder="超高速核能電磁演算搜尋引擎..." required
            className="md:w-full shadow-teal-200 shadow-xl pl-10 p-3 border border-gray-600 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block " 
            value={SearchQuery}
            onChange={(e)=>{
              setSearchQuery(e.target.value);
              setPageNumber(0);
            }}
          />
        <button type="button" className="hidden md:flex text-sm rounded-lg ml-2 px-3 py-4 font-semibold bg-emerald-500 hover:bg-emerald-200 " onClick={resetFilter}>Reset</button>    
        {/* {SearchQuery} */}        
      </div>

      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className='lg:col-span-8 col-span-1'>
          {postsData.length > 0 ? postsData.map((post,index)=>(
            <PostCard post={post.node} key={index} />
          )):<div className='text-5xl'>找不到相關貼文...இдஇ</div>}
        </div>

        <div className='lg:col-span-4 col-span-1' >
          <div className='lg:sticky relative top-8'>{/*sticky=滾動頁面不會跟著滾*/}
              <LatestPost />
              <Categories />
          </div>
        </div>

      </div>
      <Pagination pageCount={pageCount} changePage={changePage} />
    </div>
  )
}

export async function getStaticProps(){ // 只在run build跑一次

  const posts =  await ( getPosts() || []); // 無資料就回傳空陣列

  return {
    props : { posts },
  }
  
}
