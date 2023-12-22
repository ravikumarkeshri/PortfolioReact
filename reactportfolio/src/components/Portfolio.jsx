import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: Project1
        },
        {
            id: 2,
            src: Project2
        },
        {
            id: 3,
            src: Project3
        },
        {
            id: 4,
            src: Project4
        },
        {
            id: 5,
            src: Project1
        },
        {
            id: 6,
            src: Project2
        },
    ]
    return (
        <div name="portfolio" className='bg-[#112233] w-full text-white  ' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center  w-full '>
                <div className='pb-8 flex flex-col justify-center items-center ' >
                    <p className='font-bold inline mx-auto text-[#00E5FF] border-b-4 border-gray-500 text-6xl '>Portfoio</p>
                    <p className='py-6 text-xl'>Check out some of my works right here </p>
                </div>
                <div className='grid  sm:grid-cols-3 md:grid-col-4 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src }) => (

                            <div key={id} className=' shadow-md shadow-[#38BDF8] rounded-lg hover:scale-105 duration-200'>
                                <img src={src}
                                    className=' rounded-md h-52 w-full ' />
                                <div className='flex items-center justify-evenly my-4'>
                                    <button type="button" className="hover:scale-105 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Demo</button>
                                    <button className="hover:scale-105 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            <code>Code</code>
                                        </span>
                                    </button>
                                </div>
                            </div>


                        ))
                    }
                </div>


            </div>
        </div>

    )
}

export default Portfolio