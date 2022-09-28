import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  // console.log(post.id);
  return (
    <div className='bg-white/50 hover:bg-white ease duration-500 drop-shadow-2xl rounded-lg p-0 lg:p-8 pb-6 mb-8'>
      {/* thumbnail圖片 */}
      {/* 標題 */}
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-gray-600 text-3xl font-semibold'>
        <Link href={`post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
    </div>
  )
}

export default PostCard