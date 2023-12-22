import React from 'react'
import { FaArrowRight} from 'react-icons/fa'
import myImage from '../assets/ravi.jpg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div
            name="home"
            className='h-screen w-full bg-[#112233] ' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full  '>
                    <h2 className='text-[#00E5FF] text-2xl sm:text-6xl font-bold'>I'm an Android App & Mern Stack Developer</h2>
                    <p className='py-4 text-white max-w-md'>
                        As a Freelancer, I have an ecperience of 3 years building and designing Android Applications,
                        Currently, I love to work on Web Applications.
                    </p>
                    {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}


                    <div>
                        <Link to="portfolio" smooth duration={500} className= 'w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center gap-2 ' >
                            PortFolio <span className='group-hover:rotate-90 duration-200'> {<FaArrowRight />}</span>
                        </Link>
                    </div>
                </div>
                <div
                   >
                    <img src={myImage}
                        className='rounded-2xl mx-auto   w-[400px] h-[300px] -rotate-90'
                        alt="Image Missing" />
                </div>
            </div>
        </div>
    )
}

export default Home