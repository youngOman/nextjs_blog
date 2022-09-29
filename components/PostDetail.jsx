import React,{useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { CodeBlock,dracula } from "react-code-blocks";
import { list } from 'postcss';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const PostDetail = ({post}) => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden'>
        <img
          key={post.slug} 
          src={post.thumbnail.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex flex-row-reverse mb-8 w-full'>
          {/*時間*/}
          <div className="font-medium text-gray-700 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 mb-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('YYYY-MM-DD HH:mm')}</span>
          </div>
          {/*頭像*/}
        <Link href={`/intro/`}> 
          <div className='flex mb-4 lg:mb-0 w-full lg:w-auto mr-4 mt-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <img 
              key={post.slug} 
              alt={post.author.name}
              src={post.author.photo.url}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 font-medium mt-1'>{post.author.name}</p>
          </div>
        </Link>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>

        {/*內文*/}
        {/* {console.log(post.content.raw)} */}
        <RichText 
          content={post.content.raw.children}
          renderers={{
            code_block:({ children }) => 
            <pre className="line-numbers language-javascript">
              <code>{children}</code>
            </pre>,
            p: ({ children }) => <p className="mb-8">{children}</p>,
            h1: ({ children }) => <h1 className="text-6xl font-semibold mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-5xl font-semibold mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-3xl font-semibold mb-4">{children}</h3>,
            h4: ({ children }) => <h4 className="text-2xl font-semibold mb-4">{children}</h4>,
            h5: ({ children }) => <h5 className="text-xl font-semibold mb-4">{children}</h5>,
            h6: ({ children }) => <h6 className="text-lg font-semibold mb-4">{children}</h6>,
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <em>{children}</em>,

            
          }}  
        >
        </RichText>
      </div>
            {/*貼文上的分類標籤*/}
            <div className='text-right mt-8 mr-2'>
        {post.categories.map((category,index)=>{ 
          return ( 
              <Link href={`/category/${category.slug}`} key={index} >  
                <span className="relative hover:bg-sky-700 inline-block bg-slate-700 text-sm text-white font-semibold rounded-full px-5 py-1 mx-1 cursor-pointer">
                  {category.name}
                </span>
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PostDetail