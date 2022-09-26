import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail,AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/contact.jpg'

const Contact = () => {

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='flex mb-10 text-5xl tracking-widest uppercase font-mono text-[#633cbd]'>
          Contact
        </p>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* 卡片介紹 */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-4 text-3xl	'>Young Lo</h2>
                <p className='font-bold'>A rookie in Full-Stack and System Dev</p>
                <p className='py-4'>
                 歡迎聊聊或一起技術交流，或是有啥好看的新番跟...也能推薦給我
                 („ಡωಡ„)
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect Info</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.youtube.com/watch?v=1_-IMuD4mc0&t=443s&ab_channel=VillenTheDragon'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className='rounded-full shadow-lg bg-inherit bg-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-white'>
                    <AiFillInstagram size={25}/>
                  </div>
                  </a>
                  <a
                    href='https://imgur.com/uCQkEXo'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-white'>
                      <FaGithub size={25}/>
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-white'>
                    <AiOutlineMail size={25}  />
                  </div>

                    <a
                      href='https://twitter.com/Lirseven/status/1573595349901783040/photo/1'
                      target='_blank'
                      rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg bg-inherit p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-white'>
                      <AiOutlineTwitter size={25}/>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* 表單 */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 font-bold font-size'>
              <form
                action='https://getform.io/f/35200ddb-16af-4955-af7b-435ce5afe0ce'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>姓名</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>電話</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>主旨</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>內容</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full rounded-full p-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 ease-in duration-200 hover:from-sky-300 hover:to-slate-200 hover:scale-105'>
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:-translate-y-2 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
