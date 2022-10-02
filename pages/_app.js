import '../styles/globals.scss';
import React from 'react';
import { Layout } from '../components';
import Head from 'next/head';

// _app.js Next.js的進入點

function MyApp({ Component, pageProps }) {
  return (    

    <Layout>
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
