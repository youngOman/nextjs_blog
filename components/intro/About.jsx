import React,{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg'



const ReadMore = ({children}) =>{

  const text = children

  const [readMore,setReadMore] = useState(true)

  const toggleReadMore = () => { // 返回顯示更多前的狀態
    setReadMore(!readMore)
  }

  return (
    <p className='py-2'>
        {readMore ? text.slice(0,34) : text}

        <span onClick={toggleReadMore} className='text-slate-600 cursor-pointer hover:underline'>
          {readMore ? "(clickme)終於怎樣?!" : ' 顯示更少'}
        </span>

    </p>
  );
};

// ReadMore.body = (props) => <p className='py-6'>{props.children}</p>

const About = () => {
  // [...px] 可以是任意值 不用照tailwind的class 


  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 font-sans font-bold text-xl'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase mb-8 text-5xl tracking-widest text-[#5651e5]'>
            About ME
          </p>
          <h2 className='py-4'>我是誰</h2>
          <p className='py-2'>
            我在各個領域都不算頂尖人才，只是個想努力讓自己能稍微接近人才的微不足道的工程師
          </p>
          <ReadMore>
            在文藻渡過了五年，從懵懵懂懂到不斷地進步到畢業那刻我終於!!!...認知到我的軟體工程師之路勢必會走的比別人還要艱辛許多....

          </ReadMore>
          <p className='py-4'>
            當時是個確確實實的文科生而跳到了資訊科，也能確切感受到老師對我是否能待的住的的不安感XD
            從最一開始寫PHP時，對於"框架"實在沒什麼概念，就只是純真的把所有功能做出來而已
            對於能憑著一己之力寫出高品質的程式碼有著特別的憧憬，常常看到許多大神在自己的頻道或是repo上不靠stackoverflow就
            寫出很多很乾淨的程式碼
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer'>
             查看我的Projects
            </p>
          </Link>
          <p className='py-2 underline cursor-pointer'>
            <a href='https://twitter.com/siiteiebahiro' target='blank'>
              作者:https://twitter.com/siiteiebahiro
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
