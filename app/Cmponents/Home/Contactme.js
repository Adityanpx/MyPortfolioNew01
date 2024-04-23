import React from 'react';

function ContactMe() {
  return (
    <div>
      <p className='text-2xl md:text-3xl ml-6 p-3 font-serif border-b-1 border-black md:border-b-2 border-b-4 cursor-pointer'> Let's Connect </p>

      <div className="max-w-md mx-auto mt-5 mb-6 p-6 bg-white shadow-lg   rounded-lg">
        <form className='p-6'>
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" required placeholder='Ex. Aditya Gavali'
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder='Ex. aditya0911@mai.com' required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea id="description" name="description" rows="4" placeholder=' Any message / About Yourself' required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Connect</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
