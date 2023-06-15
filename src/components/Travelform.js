import "./Contactformstyle.css"

import React from 'react'

function Travelform() {
  return (
    <div className="form-container">
        <h1>Send a message to us</h1>
        <input  placeholder="Name" type="text" />
        <input  placeholder="Email" type="text" />
        <input  placeholder="Subject" type="text" />
        <input  placeholder="Message" rows="4" type="text" />
        
    </div>
  )
}

export default Travelform
