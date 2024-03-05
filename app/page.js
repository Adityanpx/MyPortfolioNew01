import React from 'react'
import Navbar from './Cmponents/Navbar'
import Hero from './Cmponents/Home/Hero'
import Project from './Cmponents/Home/Project'
import Aboutme from './Cmponents/Home/Aboutme'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contactme from './Cmponents/Home/Contactme'
import Footer from './Cmponents/Home/Footer'
import Contactadd from './Cmponents/Contactadd'


// Initialize AOS



function index() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Aboutme/>
      <Contactme/>
      <Contactadd/>
      <Footer/>
    </div>
  )
}

export default index