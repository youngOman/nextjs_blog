import React from 'react'
import { Header } from './'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Header />
        {children} {/* 顯示調用的那個Components */}
    </React.Fragment>
  )
}

export default Layout