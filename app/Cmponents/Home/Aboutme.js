import React from 'react'

function Aboutme() {
  return (
    <div className='mt-4'>
        <p className='text-2xl md:text-3xl ml-6 p-3 font-serif border-b-1 border-black
        md:border-b-2 border-b-4 cursor-pointer'> About Me </p>
        <div className='p-8 ml-10 md:ml-40 md:mr-36 '>
            <p className='md:text-lg '>Hello, I'm Aditya, a passionate learner in the realm of full stack development since 2023. My journey has been marked by a fervent dedication to hands-on projects, where I've honed practical skills and embraced innovative problem-solving.</p>
            <div className='mt-4 md:flex md:px-28  '>
                <div>
                <p className='text-xl p-2 font-serif border-b-0 text-center border-black'> Education</p> 
                
                <div className='md:mx-10 px-7 border-2   border-red-400 rounded shadow-md'>
                    <h1 className='text-xl mt-2 font-semibold animate-pulse '>Bachelor in Data Science</h1>
                    <h2 className='text-sm'>Symbiosis skiils and professional university , pune</h2>
                    <h3 className=' mb-3 font-bold text-yellow-500'> Year 2022 - Year 2025 </h3>
                </div>
                </div>
               <div>
                <p className='text-xl  p-2 font-serif border-b-0 text-center border-black'> Experience</p>
                <div className='md:mx-10 px-7 border-2   border-red-400 rounded shadow-md'>
                    <h1 className='text-xl mt-2 font-semibold '>Fullstach developer intern</h1>
                    <h2 className='text-sm'> A3M NextGen , Pune </h2>
                    <h3 className=' mb-3 font-bold text-yellow-500'> june 2023 - Aug 2023  </h3>
                </div>
                </div>
                


                
    
            
            </div>

        </div>
    </div>
  )
}

export default Aboutme