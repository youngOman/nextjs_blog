import React,{useContext,useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {

    const [categories,setCategories] = useState([])
    
    useEffect(()=>{
        getCategories()
        .then(response=> setCategories(response))

    },[]);

  return (
    <div className='container mx-auto px-10 mb-8'>
        {/*  Header LOGO */}
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Young's BLOG
                    </span>
                </Link>
            </div>
            {/* 分類列表 */}
            <div className='hidden md:float-left md:contents'>  {/* 分類列表 */}
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        
                        </span>
                    </Link>
                ))}

            </div>
          
        </div>
    </div>
  )
}

export default Header