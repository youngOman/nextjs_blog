import React,{ useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLogo from '../public/assets/navlogo.png'
// import { getCategories } from '../services'

const Header = () => {

    // const [categories,setCategories] = useState([])
    
    useEffect(()=>{
        // getCategories()
        // .then(response=> setCategories(response))

    },[]);

    return (
        <div className='mx-auto px-10 mb-8 w-full shadow-xl items-center'>
            {/* Header LOGO */}
            <div className='flex justify-between items-center 2xl:px-16 border-b-2 border-blue-400 py-8'>
                <div className='md:float-left block '>
                    <Link href="/">
                        <a>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='50'
                            height='50'
                            className='cursor-pointer hover:scale-125'
                        />
                        </a>
                    </Link>
                </div>
                {/* 分類列表 */}
                <div className='px-10 font-semibold text-black ml-4 cursor-pointer align-middle'> 
                    <Link href="/intro/#home"> 
                        <span className='mt-2 text-black ml-6'>
                            自我介紹
                        </span>
                    </Link>
                    <Link href="/intro/#about"> 
                        <span className='mt-2 text-black ml-6'>
                            關於我
                        </span>
                    </Link>
                    <Link href="/intro/#Skill"> 
                        <span className='mt-2 text-black ml-6 '>
                            技能樹
                        </span>
                    </Link>
                    <Link href="/intro/#projects"> 
                        <span className='mt-2 text-black ml-6 '>
                            專案
                        </span>
                    </Link>
                    <Link href="/intro/#contact"> 
                        <span className='mt-2 text-black ml-6 '>
                            聯絡我 
                        </span>
                    </Link>
                    {/* {categories.map((category)=>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))} */}
                </div>
            </div>
            {/*mobile*/}
        </div>
    )
}

export default Header