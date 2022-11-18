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

        <span onClick={toggleReadMore} className='text-slate-500 cursor-pointer hover:underline'>
          {readMore ? str : ' 顯示更少'}
        </span>

    </p>
  );
};

const About = () => {
  // [...px] 可以是任意值 不用照tailwind的class 


  return (
    <div
      id="about"
      className="md:h-screen p-2 flex items-center py-16 px-10 font-serif font-semibold"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-base md:text-lg">
          <p className="uppercase mb-8 text-5xl font-bold tracking-widest text-[#5651e5]">
            About ME
          </p>
          <h2 className="py-4 text-3xl">I Guess I'm An Otaku</h2>

          <ReadMore sliceNums={26} str="終於怎樣?!">
            在文學院待了五年，不斷精進自己直到畢業那刻終於...認知到我的軟體工程師之路勢必會走的比別人還要艱辛許多....
          </ReadMore>
          <ReadMore sliceNums={85} str="又怎樣?#!@(">
            一個從裡到外都是標準文科生的人跳到資訊領域，在之後付出的代價絕對是我當時想像不到的，
            當然我也早已有心裡準備，很早就開始強迫自己習慣一整天坐在電腦前凌遲我的腦袋，但...我認為我的實力還是遠遠不足矣
          </ReadMore>
          <p className="py-4">
            首次接觸程式是在五專四年級暑假，一開始對於"框架"沒什麼概念，就只是直觀的把功能全部混在一起寫，
            <span className="text-gray-500 text-base">
              (現在回頭看完全是地獄,根本就是無意間寫出的燒機測試軟體)
            </span>
          </p>
          <p className="py-2">
            對於能憑一己之力能寫出"高品質&高效率&高彈性..."的程式碼有非常大的憧憬，開始嘗試獨自從最深層資料庫到後端邏輯到中繼層API到前端
            乃至主機架設跟伺服器部署，<span className="text-2xl font-bold text-indigo-600">沒錯！我全都要！</span>
            ， 當初看到<Link href={`post/backendroadmap`}><span className="text-blue-700 font-bold cursor-pointer border-b-2 border-blue-600">
            Backend Web Development Roadmap 參考</span></Link>&ensp;，
            也是挫折感很重，覺得自己絕對不夠格，但不知不覺也學了一大半，當然絕對不敢說自己樣樣都精通，和大多數人一樣我也持續再不斷學習中，也是到後來才開始熟悉
            <span className="font-serif	">
              "Architecture Patterns","Design
              Patterns","Idioms"...等，才逐漸建構出一個完整的概念，
            </span>
            也自己跟自己在3台不同裝置版玩版控模擬開發多人專案<span className="text-gray-500 text-sm">{`(`}還跟自己衝突很多次....{`)`}</span>
            ，最終目的都是為了習慣開發龐大專案的情境
          </p>

          <Link href="/intro#projects">
            <p className="mt-16 underline cursor-pointer">我的Projects</p>
          </Link>
          <p className="py-6 underline cursor-pointer">
            <a
              href="https://twitter.com/siiteiebahiro"
              target="blank"
              className="py-2 underline cursor-pointer"
            >
              作者推特:https://twitter.com/siiteiebahiro
            </a>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
