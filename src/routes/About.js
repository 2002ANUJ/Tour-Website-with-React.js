import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

function About() {
  return (
    <>
    <Navbar />
   <Hero 
   cName= "hero-mid"
   heroimg = "https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80s"
   title ="About"

  
   />
   <Aboutus />
   <Footer />
  </>
  )
}

export default About
