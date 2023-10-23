import React from 'react'
import Html from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Tailwind from '../assets/Tailwind.png'
import Javascript from '../assets/Javascript.svg'
import react from '../assets/react.svg'
import Redux from '../assets/Redux.svg'
import NextJsCircle from '../assets/NextJsCircle.png'
import NodeJs from '../assets/NodeJs.svg'
import Express from '../assets/Express.png'
import MongoDB from '../assets/MongoDB.svg'
import java from '../assets/java.png'
import xml from '../assets/xml.png'
import php from '../assets/php.svg'
import mysql from '../assets/mysql.svg'

const Experience = () => {
    const webTech = [
        {
            id: 1,
            image: Html,
            title: "HTML"
        },
        {
            id: 2,
            image: Tailwind,
            title: "Tailwind"
        },
        {
            id: 3,
            image: CSS,
            title: "CSS"
        },
        {
            id: 4,
            image: Javascript,
            title: "Javascript"
        },
        {
            id: 5,
            image: react,
            title: "react"
        },
        {
            id: 6,
            image: Redux,
            title: "Redux-Toolkit"
        },
        {
            id: 7,
            image: NodeJs,
            title: "NodeJs"
        },
        {
            id: 8,
            image: Express,
            title: "Express"
        },
        {
            id: 9,
            image: NextJsCircle,
            title: "NextJs"
        },
        {
            id: 10,
            image: MongoDB,
            title: "MongoDB"
        },

    ]
    const androidTech = [
        {
            id: 1,
            image: java,
            title: "java"
        },
        {
            id: 2,
            image: xml,
            title: "xml"
        },
        {
            id: 3,
            image: php,
            title: "php"
        },
        {
            id: 4,
            image: mysql,
            title: "mysql"
        },
    ]
    return (
        <div name="experience"
            className='bg-[#112233]   w-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white'>
                <div className='flex flex-col justify-center items-center mt-28 '>
                    <p className='text-6xl font-bold border-b-4 text-[#00E5FF] border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6 text-xl'>These are the technologies I have worked with...</p>
                </div>
                <fieldset className='border-t-2  '>
                    <legend className='p-2'>Web Development</legend>
                    <div className='w-full grid sm:grid-col-3 md:grid-cols-5  gap-8 text-center py-8 px-12 sm:px-0'>



                        {
                            webTech.map(({ id, image, title }) => (
                                <div key={id} className='shadow-md shadow-[#38BDF8] hover:scale-105 duration-500 pyp-2 rounded-lg'>
                                    <img className='w-20  mx-auto'
                                        src={image} />
                                    <p className='mt-4' >{title}</p>
                                </div>
                            ))
                        }




                    </div>
                </fieldset>


                <fieldset className='border-t-2  '>
                    <legend className='p-2'>Android  Development</legend>
                    <div className='w-full grid sm:grid-col-3 md:grid-cols-5  gap-8 text-center py-8 px-12 sm:px-0'>



                        {
                            androidTech.map(({ id, image, title }) => (
                                <div key={id} className='shadow-md shadow-[#38BDF8] hover:scale-105 duration-500 pyp-2 rounded-lg'>
                                    <img className='w-20  mx-auto'
                                        src={image} />
                                    <p className='mt-4' >{title}</p>
                                </div>
                            ))
                        }



                    </div>
                </fieldset>


            </div>
        </div >
    )
}

export default Experience