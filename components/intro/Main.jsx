import Link from 'next/link';
import React from 'react';
import { AiOutlineMail,AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center font-bold text-xl'>
        <div>
          <p className='uppercase tracking-widest text-black text-3xl'>
            不是在挫折中，就是在遇到挫折的路上
          </p>
          <h1 className='p-4 text-black'>
            Hi, 我的名字是 <span className='text-sky-500/100'> Young</span>
          </h1>
          <h1 className='py-2 text-black'>只是一個微不足道全端及系統維護工程師</h1>
          <span className='p-4 text-black sm:max-w-[70%] m-auto' >
            資訊的技術永遠學不完，日復一日的鑽研新技術直到學完的那刻又有新版本釋出...
          </span>
          <p>(╯°Д°)╯ ┻━┻</p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit bg-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillInstagram size={25}/>
              </div>
            </a>
            <a
              href='https://www.youtube.com/watch?v=6aI4l2oWEH8&ab_channel=BassPunch'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25}/>
              </div>
            </a>
            <Link href="/intro/#contact"> 
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={25}/>
              </div>
            </Link>
            <a
              href='https://twitter.com/Lirseven/status/1573595349901783040/photo/1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
