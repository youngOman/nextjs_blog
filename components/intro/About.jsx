import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg'

const About = () => {
  // [...px] 可以是任意值 不用照tailwind的class 
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 font-sans font-bold text-xl'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase mb-8 text-5xl tracking-widest text-[#5651e5]'>
            About ME
          </p>
          <h2 className='py-4'>我算老幾</h2>
          <p className='py-2 text-gray-600'>
            我在各個領域都不算頂尖人才
          </p>
          <p className='py-2 text-gray-600'>
            在文藻渡過了五年，畢業那刻...我已經發現我的命運勢必
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            <a href='https://twitter.com/siiteiebahiro' target='blank'>
              作者Credits:https://twitter.com/siiteiebahiro
            </a>
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
