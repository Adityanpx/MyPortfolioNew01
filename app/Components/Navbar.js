"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";


function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !mobileMenuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleDownloadResume = () => {
    // Construct the URL to the resume file
    const resumeUrl = "/Resume1.pdf"; // Update this with the correct path

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume1.pdf"; // Set the filename for download
    link.click();
  };

  return (
    <nav className=" md:mt-4 shadow-lg md:h-28 p-4 md:p-4">
      {/* Desktop layout */}
      <div className="flex justify-between">
        <div className="hidden    md:flex gap-1">
          
          <h1 className="mt-4 md:ml-4 text-4xl font-bold font-serif">Aditya Gavali </h1>
          <h1 className="  mt-7 ml-4 border-b-2 border-black  text-xl  font-serif"> fullstack developer </h1>

        </div>
        <div className=" hidden md:flex gap-8 mr-8 gap- mt-3 ">
          {/* Attach the download resume function to the button */}
          <Button variant="ghost" onClick={handleDownloadResume}>
            Download Resume
          </Button>
          <Button variant="ghost">About Me</Button>
          <Button variant="ghost">Projects</Button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden h-18 flex justify-between">
        
      <div className="gap-1 ml-16 ">
  <div className="grid">
    <h1 className="mt-2 text-3xl font-bold font-serif">Aditya Gavali</h1>
    <h1 className="text-xl ml-4 border-b-2 border-black font-serif">Fullstack Developer</h1>
  </div>
</div>

        {/* Add a button to toggle the mobile menu */}
        <button
          ref={toggleButtonRef}
          className="text-black"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="md:hidden absolute top-0 right-0 h-full bg-white w-8/12 z-50"
          >
            <ul className="py-4 px-8">
              <li className="mb-4">
                {/* Attach the download resume function to the menu item */}
                <Button variant="ghost" onClick={handleDownloadResume}>
                  Download Resume
                </Button>
              </li>
              <Button variant="ghost">About Me</Button>

              <li className="mt-4">
              <Button variant="ghost">Why me</Button>

              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
