import React from 'react';
import Image from 'next/image';
import { languages,Tools,OS,WebFrameWork } from '../../data';


const Skillbar = () => {

    // console.log(languages)
    // const barWidth = `${languages.level}%`;

    return (
        <div id='Skill' className='w-full lg:h-50 p-2 '>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                    <p className='flex mb-10 text-5xl items-center justify-center tracking-widest uppercase font-mono text-[#633cbd]'>
                    Skills
                    </p>
                    
                    <h5 className="my-3 text-2xl font-bold">Language</h5>
                    <div className='mb-8'>
                    {languages.map((language, i) => {
                        return (
                        <div className="my-2 text-white bg-gray-300 rounded-full" key={i}>
                            <div
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${language.level}%`,}}>  
                            <Image
                                src={language.Image}
                                width='20px'
                                height='20px'    
                            >
                            </Image>
                            &nbsp;
                            &nbsp;
                            {language.name}
                            </div>
                        </div>
                        )
                    })}
                    </div>

                    <h5 className="my-3 text-2xl font-bold">Framework</h5>
                    <div className='mb-8'>
                    {WebFrameWork.map((framework, i) => {
                        return (
                        <div className="my-2 text-white bg-gray-300 rounded-full" key={i}>
                            <div
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${framework.level}%`,}}>  
                            <Image
                                src={framework.Image}
                                width='20px'
                                height='20px'    
                            >
                            </Image>&nbsp;&nbsp;{framework.name}
                            </div>
                        </div>
                        )
                    })}
                    </div>
                    
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className='mb-8'>
                    {Tools.map((Tool, i) => {
                        return (
                        <div className="my-2 text-white bg-gray-300 rounded-full" key={i}>
                            <div
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${Tool.level}%`,}}>
                            <Image
                                src={Tool.Image}
                                width='20px'
                                height='20px'    
                            >
                            </Image> &nbsp;{Tool.name}
                            </div>
                        </div>
                        )
                    })}
                    </div>

                    <h5 className="my-3 text-2xl font-bold">OS</h5>
                    <div className='mb-8'>
                    {OS.map((os, i) => {
                        return (
                        <div className="my-2 text-white bg-gray-300 rounded-full" key={i}>
                            <div
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${os.level}%`,}}>
                            <os.Icon className="mr-3" /> {os.name}
                            </div>
                        </div>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}

export default Skillbar