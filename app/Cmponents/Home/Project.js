"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="p-4">
      <p className="text-2xl md:text-3xl ml-6 p-3 font-serif border-b-1 border-black md:border-b-2 border-b-4 cursor-pointer"> project </p>
      <div className="md:flex md:p-6 mt-6 gap-4  md:gap-44 grid justify-center">

        <div className="relative shadow-md p-6 hover:transform transition-transform hover:scale-105">
          <a className="flex justify-center font-bold"> Shoe Store</a>
          <video src="Shoe store - Frontend .mov" className="h-44" />
          <p>hii</p>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {clicked ? (
              <a href="https://github.com/Adityanpx/shoe-store" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  Get the code
                </button>
              </a>
            ) : (
              <button onClick={handleClick} className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Get the code
              </button>
            )}
          </div>
        </div>

        {/* Add more project cards here */}
        
        <div className="relative shadow-md p-6 hover:transform transition-transform hover:scale-105">
          <a className="flex justify-center font-bold"> Car on Rental</a>
          <img src="car on rental.png" className="h-44" />
          <p>hii</p>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {clicked ? (
              <a href="https://github.com/Adityanpx/CarOnRent.web" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  Get the code
                </button>
              </a>
            ) : (
              <button onClick={handleClick} className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Get the code
              </button>
            )}
          </div>
        </div>

        <div className="relative shadow-md p-6 hover:transform transition-transform hover:scale-105">
          <a className="flex justify-center font-bold">UBER clone</a>
          <img src="https://i.postimg.cc/QMbWxtND/sf-yuxfqicoylacr4k7rq-1693-1696671965744-out-compressed.png" className="h-44" />
          <p>hii</p>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {clicked ? (
              <a href="https://github.com/Adityanpx/UBER-clone" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  Get the code
                </button>
              </a>
            ) : (
              <button onClick={handleClick} className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Get the code
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
