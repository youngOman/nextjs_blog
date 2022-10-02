import Link from 'next/link';
import React from 'react';
import Typed from 'react-typed';
import { AiOutlineMail,AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center font-serif font-semibold '>
        <div className='text-xl'>
          <Typed 
            className='uppercase tracking-widest text-blue-600 md:text-3xl text-2xl'
            strings={['做自己喜歡的事，不代表一直都能樂在其中','越是拼命投入，失敗時的反作用力越大','明日小路我婆']} 
            typeSpeed={120}
            backSpeed={120}
            loop
          />
          <h1 className='p-4 text-black'>
            Hi, 我叫 <span className='text-sky-500/100 md:text-3xl text-2xl'> Young</span>
          </h1>
          <h1 className='py-2 text-black'>是個微不足道的全端&系統工程師</h1>
          <span className='p-4 text-black sm:max-w-[70%] m-auto' >
            學習的速度永遠跟不上資訊進步的速度，日復一日的鑽研新技術直到精通那刻又有新版本釋出...
          </span>
          <p>(╯°Д°)╯ ┻━┻</p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                <AiFillInstagram size={25}/>
              </div>
            </a>
            <a
              href='https://github.com/youngOman/ReactNextJSBlog'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                <FaGithub size={25}/>
              </div>
            </a>
            <Link href="/intro/#contact"> 
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                <AiOutlineMail size={25}/>
              </div>
            </Link>
            <a
              href='https://twitter.com/khester824_/status/1572554606923902977/photo/1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-slate-400'>
                <AiOutlineTwitter size={25}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
