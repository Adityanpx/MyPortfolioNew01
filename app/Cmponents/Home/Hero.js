import React from 'react';
import { FaGithub,FaTwitter,FaLinkedin,FaArrowDown  } from "react-icons/fa";
function Hero() {
    return (
        <div>
            {/* for mobile */}
            <div className=' bg-gradient-to-tr from-green-500 via-violet-400 to-red-400 p-6 flex justify-center items-center'>
                <div className=" p-6 rounded-lg shadow-lg w-80 md:w-auto  ">
                <img src='https://i.postimg.cc/QMbWxtND/sf-yuxfqicoylacr4k7rq-1693-1696671965744-out-compressed.png'
                          className='md:hidden'
                        />

                    {/* Card Content */}
                    
                    <p className='font-serif text-xl font-bold mt-5'> Aditya Gavali </p>
                    <p className="text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, libero ut facilisis fermentum.</p>
                    <div className="mt-4 ">
                        <div className='flex justify-center gap-6 text-white'>
                        <a href='https://github.com/Adityanpx'
                        className="  text-3xl hover:scale-125 ">
                             <FaGithub/>
                        </a>
                        <a href='https://twitter.com/search?q=fullstach%20developers&src=typed_query&f=user'
                        className="  text-3xl hover:scale-125 ">
                             <FaTwitter/>
                        </a>
                        <a href='https://www.linkedin.com/in/aditya-gavali-b79b4525a/'
                        className="  text-3xl hover:scale-125 ">
                             <FaLinkedin/>
                        </a>
                        <a href='https://github.com/Adityanpx'
                        className="  text-3xl hover:scale-125 ">
                             <FaGithub/>
                        </a>

                    
                        </div>
                        <button className="  text-white mt-6 px-4 flex py-2 rounded-md">Scroll down <FaArrowDown 
                        className='ml-2 mt-1.5 text-sm'/> </button>

                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
