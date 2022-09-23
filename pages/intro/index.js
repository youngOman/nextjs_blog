import React from 'react'
import About  from '../../components/intro/About'
import Main from '../../components/intro/Main'
import Skillbar from '../../components/intro/Skillbar'
import Contact from '../../components/intro/Contact'
import Link from 'next/link'
const index = () => {
  return (
    <div>
      <Main/>
      <About/>
      <Skillbar/>
      <Contact/>
      <aside class="w-50 fixed right-0 rounded-lg top-40 h-auto p-10 bg-slate-400 cursor-pointer align-middle text-gray-900 text-lg font-bold transition duration-500 ease hover:-translate-x-5">
        <Link href="/intro/#home"> 
          <span className='flex items-center p-2 dark:text-dark hover:bg-gray-100 border-b border-white'>關於我</span>
        </Link>
        <Link href="/intro/#about"> 
          <span className='flex items-center p-2 dark:text-dark hover:bg-gray-100 border-b border-white'>我哪根蔥</span>
        </Link>
        <Link href="/intro/#Skill"> 
          <span className='flex items-center p-2 dark:text-dark hover:bg-gray-100 border-b border-white'>技能樹</span>
        </Link>
        <Link href="/intro/#contact"> 
          <span className='flex items-center p-2 dark:text-dark hover:bg-gray-100 border-b border-white'>聯絡我</span>
        </Link>

      </aside>
    </div>
  )
}

export default index