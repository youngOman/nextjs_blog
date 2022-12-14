import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';


const PostCard = ({post}) => {
  // console.log(post.id);
  return (
    <div className='bg-white/50 hover:bg-white ease duration-500 drop-shadow-2xl rounded-lg p-0 lg:p-8 pb-6 mb-8'>
      {/* thumbnail圖片 */}
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'> 
        <Image 
          src={post.thumbnail.url}
          alt={post.title}
          priority={true}
          unoptimized
          layout='fill'
          className='object-top absolute object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      {/* 標題 */}
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-gray-600 text-3xl font-semibold'>
        <Link href={`post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      {/*作者頭貼*/}
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <Link href={`intro/`}> 
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img 
                  alt={post.author.name}
                  src={post.author.photo.url}
                  height='40px'
                  width='40px'
                  className='align-middle rounded-full'
                />       
                <p className='inline align-middle text-gray-700 ml-2 mt-1 font-medium text-lg'>{post.author.name}</p>

          </div>
        </Link>
        {/*時間*/}
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('YYYY-MM-DD HH:mm')}</span>
        </div>
      </div>
      {/*摘要*/}
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px:20 mb-8'>{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>  
          <span className="transition duration-500 ease transform hover:scale-110 hover:bg-zinc-500 inline-block bg-slate-700 text-lg font-semibold rounded-full text-white px-8 py-3 cursor-pointer">看全文~</span>
        </Link>
      </div>
      {/*貼文上的分類標籤*/}
      <div className='text-right mt-8 mr-2'>
        {post.categories.map((category,index)=>{ 
          return ( 
              <Link href={`/category/${category.slug}`} key={index} >  
                <span className="relative duration-500 hover:bg-sky-500 inline-block bg-slate-700 text-white font-semibold rounded-full cursor-pointer mx-1 my-1 py-2 md:px-5 px-2 md:text-sm text-xs">
                  {category.name}
                </span>
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PostCard