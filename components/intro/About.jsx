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
            在我苦練的鐵步杉，可以讓子彈擊中我時！...比一般人多擋幾微秒的入彈時間。
          </ReadMore>
          <ReadMore sliceNums={85} str="又怎樣?#!@(">
            這觀點我不敢苟同，我個人認為義大利麵就應該拌42號混凝土，因為這個螺絲釘的長度很容易直接影響到挖掘機的扭矩。
            你往裡砸的時候，一瞬間他就會產生大量的高蛋白，俗稱UFO，會嚴重影響經濟的發展，以至於對整個太平洋，和充電器的核污染
          </ReadMore>
          <p className="py-4">
          再者說透過勾股定理很容易推斷出人工飼養的東條英機，他是可以捕獲野生的三角函數。
            <span className="text-gray-500 text-base">
              (關於這個事，我簡單說兩句，你明白就行)
            </span>
          </p>
          <p className="py-2">
          總而言之，這個事呢，現在就是這個情況，具體的呢，大家也都看得到，也得出來說那麼幾句，可能，你聽的不是很明白
            乃至主機架設跟伺服器部署，<span className="text-2xl font-bold text-indigo-600">沒錯！我全都要！</span>
            ， 但是意思就<Link href={`post/backendroadmap`}><span className="text-blue-700 font-bold cursor-pointer border-b-2 border-blue-600">
            Backend Web Development Roadmap 參考</span></Link>&ensp;，
            知道的你也不用去猜，這種事情見得多了，我只想說懂得都懂，不懂的我也不多解釋，畢竟自己知道就好，細細品吧。你們也別來問我怎麼了，
            <span className="font-serif	">
            利益牽扯太大，說了對你我都沒好處，當不知道就行了，其餘的我只能說這裡面水很深，牽扯到很多東西。
            </span>
            詳細情況你們自己是很難找的，所以我只能說懂得都懂。懂的人已經基本都獲利上岸什麼的了<span className="text-gray-500 text-sm">{`(`}不懂的人永遠不懂....{`)`}</span>
            ，所以大家最好是不懂就不要去了解，懂太多不好。
          </p>

          <Link href="/intro#projects">
            <p className="mt-16 underline cursor-pointer">My Projects</p>
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
