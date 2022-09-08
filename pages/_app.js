import '../styles/globals.scss'
import React,{ useState,useEffect } from 'react'
import { Layout } from '../components'
// _app.js Next.js的進入點

function MyApp({ Component, pageProps }) {
  return (    

    <Layout> 
      <Component {...pageProps} />  
    </Layout>

  )
}

export default MyApp
