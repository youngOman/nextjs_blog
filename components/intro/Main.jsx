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
          <h1 className='py-4 text-black'>
            Hi, 我是 <span className='text-sky-500/100'> Young</span>
          </h1>
          <h1 className='py-2 text-black'>一個全端及系統維護工程師</h1>
          <p className='py-4 text-black sm:max-w-[70%] m-auto'>
            技術永遠學不完，而小弟我本身資質也不好，在成為自己夢想的人努力精進自己
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit bg-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillInstagram size={25}/>
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={25}/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineTwitter size={25}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
