import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { CodeBlock,dracula } from "react-code-blocks";
import { list } from 'postcss';

const PostDetail = ({post}) => {

  const getContentFragment = (index, text, obj, type) => {

    let modifiedText = text;

    console.log(modifiedText)
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-six':
        return <h6 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'a':
        return <a key={index} href={obj.href} className="mb-8">{obj.href}</a>;
      case 'code-block':
        return <div>{
          modifiedText.map((item,i)=> 
          <React.Fragment key={i}>
            <CodeBlock
              text={item}
              language="javascript"
              showLineNumbers={true}
              theme={dracula}
            />
          </React.Fragment>
          )}
        </div>
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
        {console.log(post.content.raw)}
        {post.content.raw.children.map((typeObj,index)=>{ //https://www.notion.so/Next-js-fdb2be60a14647079085d476d2e1fb7a
          // console.log("tpyeobj"+typeObj);
          const children = typeObj.children.map((item,itemIndex)=>{ // 取出每個type內的所有children
            // console.log("Item:"+item)
            return getContentFragment(itemIndex,item.text,item)
          })
          // console.log("children"+children)
          // console.log("typeObj"+typeObj)
          return getContentFragment(index,children,typeObj,typeObj.type);
        })}

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