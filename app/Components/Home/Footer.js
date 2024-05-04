import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl text-center font-bold">Aditya Gavali</h2>
            <p className="text-sm">Fullstach Developer | Designer</p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Projects</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>

        <hr className="my-4 border-gray-700" />

        <div className="text-center text-sm">
          <p> | &copy; Adityanpx 2024 Portfolio. All rights reserved. |</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
