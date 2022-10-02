import React,{ useState,useMemo,useEffect } from 'react'
import { Categories,PostCard,Loading,Pagination,LatestPost } from '../../components';
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
// API 
import { getCategoryPost,getCategories } from '../../services';

const CategoryRelatedPost = ({categoryPosts}) => {

    const router = useRouter();

    if(router.isFallback){
      return <Loading />
    }

    const [SearchQuery,setSearchQuery] = useState("");
    const [FilterfeaturedPost, setFilterfeaturedPost] = useState(""); // 下拉式選單
    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPosts,setTotalPosts] = useState(0);
    const postsPerPage = 5;
  

    const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數
    const pageCount = Math.ceil( totalPosts / postsPerPage); // 總頁數
    // Ex:設每頁10筆 目前在第4頁 資料區間=40->50，目前這頁顯示的posts = .slice(總筆數,總筆數+每頁筆數)
    // const currentPost = posts.slice(pagesVisited,pagesVisited+postsPerPage); 
    const changePage = ({ selected }) => { // selected = 下一個要移動到的頁數
      setPageNumber(selected);
    }
    // console.log(categoryPosts)
    const CategoryPostsData = useMemo(()=>{    

        let CalculateDatas = categoryPosts;
    
        if(SearchQuery){
          CalculateDatas = CalculateDatas.filter((categorie)=> {
          return categorie.node.title.toLowerCase().includes(SearchQuery.trim().toLowerCase())||
                categorie.node.excerpt.toLowerCase().includes(SearchQuery.trim().toLowerCase());
          });   
        };
        if (FilterfeaturedPost === "true") {
          CalculateDatas = CalculateDatas.filter(
            (categorie) => FilterfeaturedPost === "true" && categorie.node.featuredPost == true
          );
        }
    
        if (FilterfeaturedPost === "all") {
          CalculateDatas = CalculateDatas.filter(
            (categorie) => FilterfeaturedPost === "all" && categorie.node.featuredPost == false || categorie.node.featuredPost == true
          );
        }
        // console.log(CalculateDatas);
        setTotalPosts(CalculateDatas.length);
        return CalculateDatas.slice(pagesVisited,pagesVisited+postsPerPage);
    },[FilterfeaturedPost,SearchQuery,pageNumber,categoryPosts])

    const resetFilter = () => { 
      setSearchQuery("");
      setFilterfeaturedPost("");
      setPageNumber(0);
    }
    // console.log(FilterfeaturedPost)
    return  (
    <div className="container mx-auto px-10 mb-8">
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
            <option value="all" className='font-semibold'>我全都看!</option>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
              {CategoryPostsData.length > 0 ? CategoryPostsData.map((post, index) => (
              <PostCard key={index} post={post.node} />
              )):<div className='text-5xl'> 目前這個分類還沒有貼文QQ.. 或請回到首頁找</div>}
          </div>

          <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
              <LatestPost />
              <Categories />
              </div>
          </div>
        </div>

        <Pagination pageCount={pageCount} changePage={changePage} />
        <div className='flex justify-center py-12'>
          <Link href='/#search'>
            <a>
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:-translate-y-2 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
              </div>
            </a>
          </Link>
        </div>
    </div>
    )
}

export default CategoryRelatedPost

export async function getStaticProps({params}){

    const categoryPosts = await (getCategoryPost(params.slug) || []); //若無資料就回傳空陣列
    return{
        props: {categoryPosts},
    }

}

export async function getStaticPaths(){

    const categories = await getCategories();

    return {
        paths: categories.map(({slug})=>({params:{slug}})),
        fallback:true,
    }
}
