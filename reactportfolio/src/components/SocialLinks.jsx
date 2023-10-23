import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
      target: '_blank'
    },
    {
      id: 2,
      child: (
        <>
          FaGithub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com',
      target: '_blank'

    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:keshirsahab@gmail.com',
      target: '_blank'

    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      target: '_blank',
      download: true  
    },

  ]
  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
      <u>
        {
          links.map(({ id, target, download, child, style, href }) => (
            <li key={id}
              className={'flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ' +""+ style }>
              <a className='flex justify-between gap-3 items-center w-full text-white font-bold'
                href={href} target='_blank' rel='noreferrer' download={download}><> {child} </></a>  
            </li>
          ))
        }


      </u>
    </div>
  )
}

export default SocialLinks