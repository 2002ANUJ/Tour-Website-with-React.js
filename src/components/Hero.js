import React from 'react'
import './Herostyle.css';
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img src={props.heroimg} alt="herpimg" />
    </div>

    <div className="hero-text">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <Link to = "src\routes\Travelplan.js" className={props.btnclass}>
      {props.btntext}
    </Link>
   </div>
    </>
  )
}

export default Hero
