"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <nav className="bg-transparent shadow-lg p-4 md:p-4">
      {/* Desktop layout */}
      <div className="flex justify-between">
        <div className="hidden md:flex gap-1">
          <img src="eagle 2.jpeg" className="h-16" alt="Logo" />
          <h1 className="mt-4 text-3xl font-serif">Adityanpx</h1>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-end gap-8 items-end mr-24">
          <div className="flex mt-7 justify-gap-16 rounded-md h-10">
            <button className="text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500 font-semibold rounded-lg w-28 hover:bg-orange-400">
              {" "}
              Resume
            </button>
            <button className="text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500 font-semibold rounded-lg w-28 hover:bg-orange-400">
              {" "}
              Hire Me
            </button>
            <button className="text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500 font-semibold rounded-lg w-28 hover:bg-orange-400">
              {" "}
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between">
        <div className="flex gap-1">
          <img src="eagle 2.jpeg" className="h-16" alt="Logo" />
          <h1 className="mt-4 text-2xl font-serif">Adityanpx</h1>
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
            <path strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
            className="md:hidden absolute top-0 right-0 h-full bg-white w-64 z-50"
          >
            <ul className="py-4 px-8">
              <li className="mb-4">
                <a href="#" className="text-gray-800 hover:text-orange-400">
                  Download Resume
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-800 hover:text-orange-400">
                  About Me
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-800 hover:text-orange-400">
                  Why Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
