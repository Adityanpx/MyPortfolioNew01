"use client"
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { motion } from 'framer-motion'; 


function Navbar() {
  return (
    <nav className="bg-transparent shadow-lg p-4 md:p-4 md:bg-">
      {/* Desktop layout */}
      <div className="flex justify-between ">
        <div className=" hidden md:flex gap-1 ">
          
          <img src="eagle 2.jpeg" className="h-16   " />
          
          <h1 className="mt-4 text-3xl font-serif">Adityanpx </h1>
          
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-end   gap-8  items-end mr-24">
          <div className=" flex mt-7 justify- gap-16 rounded-md h-10   ">
            <button className=" transition ease-in-out delay-250  text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500  font-semibold  rounded-lg  w-28 hover:bg-orange-400  ">
              {" "}
              Resume
            </button>
            <button className="transition ease-in-out delay-250  text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500  font-semibold  rounded-lg  w-28 hover:bg-orange-400 ">
              {" "}
              Hire Me
            </button>
            <button className="transition ease-in-out delay-250  text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500  font-semibold  rounded-lg  w-28 hover:bg-orange-400 ">
              {" "}
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between ">
        <div className="flex gap-1 ">
          <img src="eagle 2.jpeg" className="h-16   " />
          
          <h1 className="mt-4 text-2xl font-serif">Adityanpx </h1>
        </div>
        {/* Add a button to toggle the mobile menu */}
        <button  className="text-black  ">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* You can use conditional rendering to show/hide components */}
        {/* For simplicity, I'm using placeholders; replace them with your components */}
        <div className="flex flex-col items-end"></div>
      </div>
    </nav>
  );
}

export default Navbar;
