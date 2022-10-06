import '../styles/prism.css';
import '../styles/globals.scss';
import React,{ useEffect, useState } from 'react';
import { Layout } from '../components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'

// _app.js Next.js的進入點


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress,setProgress] = useState(0)
  
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  })

  return (    

    <Layout>
       <div>
        <LoadingBar
          color='#5C08F9'
          height={6}
          waitingTime={400}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
      <Head>
        <title>Young's Blog</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Component {...pageProps} />  
    </Layout>

  )
}

export default MyApp
