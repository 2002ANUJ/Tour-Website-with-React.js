import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'


function Contact() {
  return (
   <>
    <Navbar />
   <Hero 
   cName= "hero-mid"
   heroimg = "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   title ="Contact"
   
 
   
   
   />
   <Contactform />
   <Footer />
   </>
  )
}

export default Contact
