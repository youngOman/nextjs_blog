import React,{ useState,useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {

  const [categories,setCategories] = useState([])

  useEffect(()=>{
    getCategories()
      .then((response)=> setCategories(response))

  },[]);

  // console.log(categories)
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pd-12'>
      <h3 className='text-xl mb-8 font-semibold border-b border-violet-500 pb-4'>
        文章分類
      </h3>
      {categories.map((category,index)=>(
        <Link href={`/category/${category.slug}`} key={index} >
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link > 
      ))}  
    </div>
  )
}

export default Categories