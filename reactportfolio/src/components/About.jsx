import React from 'react'

const About = () => {
  return (
    <div name="about"
        className=  'w-full  bg-[#112233]'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div className='pb-8'   >
                <p className='text-center text-[#00E5FF] mx-auto text-6xl font-bold inline border-b-4 border-gray-600'>About</p>
            </div>
            
            <div >
                <p className='text-white text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum odit magnam fugit necessitatibus in porro vero ipsum facere. Quos consectetur repellat itaque! Voluptate, provident fuga fugiat, ab numquam laborum ex aut reprehenderit facere id enim officiis, molestias laboriosam dolor debitis. Dolore, tenetur praesentium. Laborum aut fugiat deleniti eos dolorum!
                </p>
                <br />
                <p className='text-white text-xl '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste, aspernatur modi ab eveniet accusantium quo nam animi necessitatibus eos aliquam hic quos voluptatum! Illum fuga sapiente vero cumque fugit unde voluptatem vitae ad! Sequi veritatis architecto aspernatur ratione vero eaque consequatur et totam eveniet? Quasi et perferendis iure quam!
                </p>
            </div>
        </div>
    </div>
  )
}

export default About