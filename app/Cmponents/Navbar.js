import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';


function Navbar() {
  return (
    <nav className="bg-slate shadow-lg p-4 md:p-8 md:bg-">
        
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-end gap-8  items-end">
        <About/>
        <Contact/>
        <Project/>
      
        
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between ">
        <h1 className=''> Adityanpx</h1>
        {/* Add a button to toggle the mobile menu */}
        <button className="text-black  ">
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
        <div className="flex flex-col items-end">
            <About/>
            <Project/>
            <Contact/>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
