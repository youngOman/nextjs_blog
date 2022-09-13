
import Head from 'next/head';
import { PostCard,Categories,LatestPost } from '../components'; // 不指定就是index

import { getPosts } from '../services'

export default function Home ({posts}) {
  // console.log(posts)
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Young's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'> 
            {posts.length >0 ? posts.map((post,index)=>(
              <PostCard post={post.node} key={index} />
            )):<div className='text-5xl'>0則貼文 QQ...</div>}
        </div>
        <div className='lg:col-span-4 col-span-1' >
          
          <div className='lg:sticky relative top-8'>{/*sticky=滾動頁面時不會跟著滾*/}
              <LatestPost />
              <Categories />
          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){

  const posts =  await ( getPosts() || []); // 若無資料就回傳空陣列
  return {
    props : { posts }
  }
  
}
