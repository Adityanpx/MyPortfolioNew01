import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Home/Hero'
import Project from './Components/Home/Project'
import Aboutme from './Components/Home/Aboutme'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contactme from './Components/Home/Contactme'
import Footer from './Components/Home/Footer'


// Initialize AOS



function index() {
  return (
    
    <div >
      
      <Navbar/>
      <Hero/>
      <Project/>
      <Aboutme/>
      <Contactme/>
      
      <Footer/>
    </div>
  )
}

export default index