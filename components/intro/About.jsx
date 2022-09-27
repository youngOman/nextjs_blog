import React,{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg'



const ReadMore = ({children,sliceNums,str}) =>{

  const text = children

  const [readMore,setReadMore] = useState(true)

  const toggleReadMore = () => { // 返回顯示更多前的狀態
    setReadMore(!readMore)
  }

  return (
    <p className='py-2'>
        {readMore ? text.slice(0,sliceNums) : text}

        <span onClick={toggleReadMore} className='text-slate-700 cursor-pointer hover:underline'>
          {readMore ? str : ' 顯示更少'}
        </span>

    </p>
  );
};

const About = () => {
  // [...px] 可以是任意值 不用照tailwind的class 


  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 font-serif text-xl'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase mb-8 text-5xl font-bold tracking-widest text-[#5651e5]'>
            About ME
          </p>
          <h2 className='py-4 text-3xl'>I Guess I'm An Otaku</h2>
          <p className='py-2'>
            我在各個領域都不算頂尖人才，只是個努力讓自己能稍微接近人才的微不足道的工程師
          </p>
          <ReadMore sliceNums={36} str="終於怎樣?!">
            在文學院渡過了五年，從懵懵懂懂到不斷汲取知識直到畢業那刻終於!!!...認知到我的軟體工程師之路勢必會走的比別人還要艱辛許多....
          </ReadMore>
          <ReadMore sliceNums={78} str="又怎樣啦?*@!$!@(U">
          一個從裡到外都是標準文科生的人跳到資訊領域，在之後要付出的代價絕對是我當時想像不到的，
          當時大部份的人得知我以前是文科生都確切表現出對我的不安感，但其實...不用操心，我對自己的懷疑跟否定絕對大家多XD我比社會上的很多人都還要遜就是個事實
          </ReadMore>
          <p className='py-4'>
          第一次接觸程式是在五專四年級的暑假，完全不知道自己再寫啥怪力亂神的亂碼，一開始也
          對於"框架"沒什麼概念，就只是直觀的把哪時候該做什麼的邏輯全部混在一起寫&emsp;<span className='text-gray-500  text-base'>(現在回頭看完全是地獄,根本就是無意間寫出的燒機測試軟體)</span>
          </p>
          <p className='py-2'>
            對於能憑一己之力能寫出"高品質&高效率&高彈性"的程式碼有非常大的憧憬，也開始獨自從最後端的資料庫到後端邏輯到中繼層API到前端
            乃至主機架設跟伺服器部署都自己做，<h2 className='text-2xl font-bold'>沒錯！我全都要！</h2>，而每個部份要理解跟學"會"是真的需要犧牲非常大量的時間，
            這要在細講基本上能講的比星期六休閒公園的婆婆媽媽們還要久XD，後端可以參考看看 <Link href={`post/backendroadmap`}><span className='text-blue-700 font-bold cursor-pointer border-b-2 border-blue-600'>Backend Web Development Roadmap的參考圖的貼文</span></Link>，也開始熟悉
            <span className='font-serif	'>"Architecture Patterns","Design Patterns","Idioms"...等，leetcode就...偶爾刷A-A，</span>
            當初也自己跟自己在3台不同裝置版控XD<span className='text-gray-500 text-sm'>{`(`}還跟自己衝突很多次....{`)`}</span>，而最終目的都是為了習慣開發龐大專案的情境
          </p>

          <Link href='/intro#projects'>
            <p className='mt-16 underline cursor-pointer'>
             查看我的Projects
            </p>
          </Link>
          <p className='py-6 underline cursor-pointer'>
            <a href='https://twitter.com/siiteiebahiro' target='blank' className='py-2 underline cursor-pointer'>
              作者推特:https://twitter.com/siiteiebahiro
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
