import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa";

function Hero() {
  // Function to handle resume download
  
  return (
    <div>
      {/* for mobile */}
      <div className="p-6 flex justify-center items-center md:justify-center ">
        <div className="bg-blue-200 p-6 md:p-16 rounded-lg shadow-lg w-80 md:w-auto md:h-98">
          {/* Card Content */}
          <p className="font-serif md:text-4xl text-xl font-bold mt-5">
            {" "}
            Hello!{" "}
          </p>
          <p className="font-serif md:text-4xl text-xl font-bold md:mt-2 ">
            {" "}
            I'm Aditya Gavali{" "}
          </p>
          <p className="mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="mt-4 ">
            <div className="flex transition delay-300 duration-700 ease-in-out justify-center md:justify-start gap-6 text-black">
              <a
                href="https://github.com/Adityanpx"
                className="text-3xl hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/search?q=fullstach%20developers&src=typed_query&f=user"
                className="text-3xl hover:scale-125"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-gavali-b79b4525a/"
                className="text-3xl hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Adityanpx"
                className="text-3xl hover:scale-125"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex mt-7 gap-4 rounded-md h-10">
              {/* Use onClick event handler to trigger the download function */}
              <button className="transition ease-in-out delay-250 text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500 font-semibold rounded-lg w-28 hover:bg-orange-400">
                Resume
              </button>
              <button className="transition ease-in-out delay-250 text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500 font-semibold rounded-lg w-28 hover:bg-orange-400 ">
                {" "}
                Hire Me
              </button>
            </div>

            <button className="animate-bounce text- mt-6 px-4 flex py-2 rounded-md">
              Scroll down <FaArrowDown className="ml-2 mt-1.5 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
