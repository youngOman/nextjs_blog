import React,{ useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLogo from '../public/assets/navlogo.png'
import { AiOutlineMail,AiFillInstagram,AiOutlineTwitter,AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
// import { getCategories } from '../services'



const Header = () => {

    const [showNav,setShowNav] = useState(false);

    // const [categories,setCategories] = useState([])
    const changeNav = () => {
        setShowNav(!showNav);
    };

    useEffect(()=>{
        // getCategories()
        // .then(response=> setCategories(response))
    },[]);
    
    return (
        <div className='md:mx-auto px-10 mb-8 w-full shadow-xl items-center'>
            <div className='flex justify-between items-center 2xl:px-16 border-b-2 border-blue-400 py-8'>
                {/* LOGO */}
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
                {/* Right col */}    
                <div className='px-10 font-semibold text-black ml-4 cursor-pointer align-middle '> 
                    <ul className='hidden md:flex'>
                        <li className='ml-10 uppercase hover:border-b-4 ease-in duration-200 border-blue-800'>
                            <Link href='/intro/#main'>自我介紹</Link>
                        </li>
                        <li className='ml-10 uppercase hover:border-b-4 ease-in duration-200 border-blue-800'>
                            <Link href='/intro/#about'>關於我</Link>
                        </li>
                        <li className='ml-10 uppercase hover:border-b-4 ease-in duration-200 border-blue-800'>
                            <Link href='/intro/#skills'>技能樹</Link>
                        </li>
                        <li className='ml-10 uppercase hover:border-b-4 ease-in duration-200 border-blue-800'>
                            <Link href='/intro/#projects'>專案</Link>
                        </li>
                        <li className='ml-10 uppercase hover:border-b-4 ease-in duration-200 border-blue-800'>
                            <Link href='/intro/#contact'>聯絡我</Link>
                        </li>
                    </ul>
                    {/* {categories.map((category)=>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))} */}
                </div>
                    {/* Mobile Icon */}
                    <div onClick={changeNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            
                {/* Mobile Menu */}
                <div className={ showNav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 z-10' : ''} >
                    {/* Side Drawer Menu */}
                    <div className={ showNav
                        ? ' fixed right-0 top-0 w-[70%] sm:w-[50%] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed right-[-160%] top-0 p-10 ease-in duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <a>
                            <Image
                                src={NavLogo}
                                width='50'
                                height='50'
                                alt='navlogo'
                            />
                            </a>
                        </Link>
                        <div onClick={changeNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-2'>
                            本不打算做手機版RWD的...( ͡o ͜ʖ ͡o)
                        </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <ul className='uppercase '>
                            <Link href='/'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                回到文章列表
                                </li>
                            </Link>
                            <Link href='/intro/#main'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                自我介紹
                                </li>
                            </Link>
                            <Link href='/intro/#about'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                關於我
                                </li>
                            </Link>
                            <Link href='/intro/#skills'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                技能樹
                                </li>
                            </Link>
                            <Link href='/intro/#projects'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                專案
                                </li>
                            </Link>
                            <Link href='/intro/#contact'>
                                <li onClick={() => setShowNav(false)} className='py-3 border-b border-cyan-500 hover:bg-slate-300'>
                                聯絡我
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-10'>
                            <p className='sm:uppercase tracking-widest text-[#283fed]'>
                                Social
                            </p>
                            <div className='flex items-center justify-between mt-2 w-full sm:w-[100%]'>
                                <a  href='https://www.instagram.com/lo.young/' target='_blank' rel='noreferrer' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 mx-1 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                                    <AiFillInstagram/>
                                </div>
                                </a>

                                <a href='https://github.com/youngOman/ReactNextJSBlog' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 mx-1 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-slate-400'>
                                    <FaGithub />
                                </div>
                                </a>

                                <Link href='/intro/#contact'>
                                <div onClick={() => setShowNav(!showNav)} className='rounded-full shadow-lg shadow-gray-400 p-3 mx-1 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-slate-400'>
                                    <AiOutlineMail/>
                                </div>
                                </Link>

                                <a href='https://twitter.com/khester824_/status/1572554606923902977/photo/1' target='_blank' rel='noreferrer' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 mx-1 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                                    <AiOutlineTwitter/>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


        </div>
    )
}

export default Header
