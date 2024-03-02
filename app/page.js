import React from 'react'
import Navbar from './Cmponents/Navbar'
import Hero from './Cmponents/Home/Hero'
import Project from './Cmponents/Home/Project'
import Aboutme from './Cmponents/Home/Aboutme'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS



function index() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Aboutme/>
    </div>
  )
}

export default index