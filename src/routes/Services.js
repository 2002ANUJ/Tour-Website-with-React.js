import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Services() {
  return (
    <>
     <Navbar />
   <Hero 
   cName= "hero-mid"
   heroimg = "https://images.unsplash.com/photo-1522273987129-4ca3c41871e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=977&q=80"
   title ="Services"
   
 
   
  
   />
   <Trip />
   <Footer />
    </>
  )
}

export default Services
