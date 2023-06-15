import "./Contactformstyle.css"

import React from 'react'

function Contactform() {
  const handleClick = () => {
    alert('Thanks for connecting! we will reach to you soon ');
  }

  return (
    <div className="form-container">
        <h1>Send a message to us</h1>
        <input  placeholder="Name" type="text" /><br />
        <input  placeholder="Email" type="text" /><br />
        <input  placeholder="Subject" type="text" /><br />
        <input  placeholder="Message" rows="4" type="text" /><br />
        <button onClick={handleClick}>
             Send
        </button>
    </div>
  )
}

export default Contactform
