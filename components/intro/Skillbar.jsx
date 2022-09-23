import React from 'react';
import { languages } from '../../data';
import { Tools } from '../../data';


const Skillbar = () => {

    // console.log(languages)
    // const barWidth = `${languages.level}%`;

    return (
        <div id='Skill' className='w-full lg:h-screen p-2 '>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                    <p className='flex mb-10 text-5xl items-center justify-center tracking-widest uppercase font-mono text-[#633cbd]'>
                    Skills
                    </p>
                    
                    <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                    <div className='mb-8'>
                    {languages.map((language, i) => {
                        return (
                        <>
                        <div className="my-2 text-white bg-gray-300 rounded-full">
                            <div
                            key={i}
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${language.level}%`,}}>  
                            <language.Icon className="mr-3" /> {language.name}
                            </div>
                        </div>
                        </>
                        )
                    })}
                    </div>
                    
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className='mb-8'>
                    {Tools.map((Tool, i) => {
                        return (
                        <>
                        <div className="my-2 text-white bg-gray-300 rounded-full">
                            <div
                            key={i}
                            className="flex items-center px-4 py-1 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-105 transition duration-300 ease"
                            style={{width: `${Tool.level}%`,}}>
                            <Tool.Icon className="mr-3" /> {Tool.name}
                            </div>
                        </div>

                        </>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}

export default Skillbar