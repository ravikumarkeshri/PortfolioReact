import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import RLogo from '../assets/RLogo.jpg'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (

        <div className="shadow-md shadow-[#38BDF8]  h-20 flex justify-between items-center text-2xl  font-signature w- full px-4 bg-[#112233] text-white">

            <div className="ml-8 mt-2 flex justify-center gap-4 items-center">
                <img className="rounded-full w-[80px] h-[80px] "
                    src={RLogo} />
                <h1 className="text-[#00E5FF] border-b-2 border-gray-500">Ravi Kumar</h1>
            </div>

            <ul className="hidden md:flex">
                {
                    links.map(({ id, link }) => (
                        <li key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 hover:text-gray-100"
                        >
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>

                    ))
                }
            </ul>
            <div onClick={() => setNav(!nav)}
                className="cursor-pointer capitalize font-medium text-gray-300 z-10 md:hidden">
                {
                    nav ? (<FaTimes size={30} />) : (<FaBars size={30} />)
                }
            </div>
            {
                nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-500 px-4  capitalize font-medium text-gray-300  ">
                    {
                        links.map(({id, link}) => (
                            <li key={id}
                                className="px-4  capitalize font-medium text-gray-300  "
                            ><Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            }




        </div>
    )
}

export default Navbar