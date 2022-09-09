import React,{useState,useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts,getSimilarPosts } from '../services';
import { title } from 'process';

// 在首頁的話這兩個props為undefined
const LatestPost = ({categories,slug}) => {
 
  const [recentPost,setRecentPost] = useState([]);

  useEffect(()=>{
    if(slug){  // 有slug代表現在是在post_detail裡面所以側欄顯示類似文章
      getSimilarPosts(categories,slug)
        .then(response => (
          setRecentPost(response)
        ))
    }else { // 代表還在首頁，顯示最新文章
      getRecentPosts(categories,slug)
        .then(response=>(
          setRecentPost(recentPost=response) // 因為只有一個state可以不指定 直接把response丟給recentPost
        ))
    }

  },[])
// console.log(slug) 
// console.log(recentPost)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      RecentPost
      <h3 className='text-xl mb-8 font-semibold border-b border-violet-500 pb-4'>
        {/* 若slug存在 顯示related post 否則 recent post*/}
        {slug ? '你可能還會想看..' : '最近貼文'}
      </h3>
      {recentPost.map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-4'>
          {/* 縮圖 */}
          <div className='w-16 flex-none'>
            <img 
              key={post.id} 
      
              alt={post.title}
              src={post.thumbnail.url}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
            />   
          </div>
          {/* 時間 */}
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format("YYYY-MM-DD HH:mm")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>

        </div>

      ))}
    </div>
  )

}

export default LatestPost