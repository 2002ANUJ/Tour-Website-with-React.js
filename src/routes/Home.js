import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
   <>
   <Navbar />
   <Hero 
   cName= "hero"
   heroimg = "https://images.unsplash.com/photo-1607526163467-d7c344a83f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   title ="Your journey your story"
   text = "choose your favorite destination"
   btntext = "Travel plan"
   url = "src\routes\Travelplan.js"
   btnclass = "show"
   />
   <Destination/>
   <Trip />
   <Footer/>

  
   </>
  )
}

export default Home
