import React,{ useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';
import { CodeBlock,dracula } from "react-code-blocks";
import { list } from 'postcss';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';





const PostDetail = ({post}) => {

  // const references = [
  //   {
  //     id:post.id,
  //     title: post.title,
  //     slug:post.s,
  //   },
  // ];
  // console.log(node)
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
          references={post.content.references}
          renderers={{
            code_block:({ children }) => 
            <pre className="line-numbers language-javascript">
              <code>{children}</code>
            </pre>,
            code: ({ children }) => <span><code className="bg-gray-200 p-2 rounded-lg ">{children}</code></span>,
            p: ({ children }) => <p className="mb-4">{children}</p>,
            h1: ({ children }) => <h1 className="text-6xl font-semibold mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-5xl font-semibold mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-3xl font-semibold mb-4">{children}</h3>,
            h4: ({ children }) => <h4 className="text-2xl font-semibold mb-4">{children}</h4>,
            h5: ({ children }) => <h5 className="text-xl font-semibold mb-4">{children}</h5>,
            h6: ({ children }) => <h6 className="text-lg font-semibold mb-4">{children}</h6>,
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <em>{children}</em>,
            ul: ({ children }) => <ul className='list-disc m-3 px-6'>{children}</ul>,
            ol: ({ children }) => <ol className='list-decimal m-3 px-6'>{children}</ol>,
            li: ({ children }) => <li className=' px-2 py-2 text-xl font-bold'>{children}</li>,
            blockquote: ({ children }) => <blockquote className='p-2 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote mb-4'>
              <p>{children}</p>
            </blockquote>,
            a: ({ children, openInNewTab, href, rel, ...rest }) => {
              if (href.match(/^https?:\/\/|^\/\//i)) {
                return (
                  <a
                    className=' text-cyan-400 font-semibold italic underline underline-offset-4'
                    href={href}
                    target={openInNewTab ? '_blank' : '_self'}
                    rel={rel || 'noopener noreferrer'}
                    {...rest}
                  >
                    {children}
                  </a>
                );
              }
            },
            // img: ({ src, altText, height, width }) => (
            //   <Image
            //     src={src}
            //     alt={altText}
            //     height={height}
            //     width={width}
            //     objectFit="cover"
            //   />
            // ),
            link: {
              Post: ({ slug,children }) => {
                return <Link href={`/post/${slug}`}><p className='text-blue-700 mt-4 cursor-pointer underline underline-offset-4 italic'>{children}</p></Link>;
              },
            },
            embed: {
              Post : ({ title,slug,thumbnail,excerpt }) => {
                return (
                  <div className="bg-slate-300 flex items-center w-[80%] mb-4 rounded-lg cursor-pointer transition duration-300 ease hover:scale-105 hover:bg-emerald-400">
                    <Link href={`/post/${slug}`}>
                      <>
                      <div className="w-20 flex-none "> 
                          <Image 
                          src={thumbnail.url}
                          alt={title}
                          width={50}
                          height={50}
                          unoptimized
                          priority={true}
                          layout='responsive'
                          className='align-middle rounded-full '
                          />
                      </div>
                    
                    <div className='flex-grow ml-4'>
                      <p className='font-bold text-xl mb-1'>
                      {title}
                      </p>
                      {excerpt}
                      
                    </div>
                    </>
                    </Link>
                  </div>
                );
              },
            },
            Asset: { /* Embed的Image */
              image: ({url}) => 
              <div className='mb-4'>
                <Image src={url} width={500} height={300} className='align-middle rounded-lg'  unoptimized priority={true} />
              </div>,
              // video: () => <div>custom VIDEO</div>,
              // 'video/mp4': () => {
              //   return <div>custom video/mp4 renderer</div>;
              // },
            },

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