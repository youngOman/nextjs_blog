import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
{/* Detail下的自介欄位 */}
const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <Link href={`/intro/`}> 
        <div className='absolute left-0 right-0 -top-14 cursor-pointer hover:scale-110 ease-in duration-300'>
        <Image
          height="100px"
          width="100px"
          src={author.photo.url}
          alt={author.name}
          className='align-middle rounded-full'
          unoptimized
        />
        </div>
      </Link>
      <h3 className="text-black mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-black text-ls">{author.bio}</p>
    </div>
  )
}

export default Author