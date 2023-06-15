import "./Footerstyle.css"

import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="top">
            <div>
                <h1>SAFAR</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <a href="/"></a>
                <i className="fa-brands fa-facebook-square"></i>

                <a href="/"></a>
                <i className="fa-brands fa-instagram-square"></i>

                <a href="/"></a>
                <i className="fa-brands fa-twitter-square"></i>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">changeLog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>

          
            <div>
                <h4>Community</h4>
                <a href="/">Git hub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">TroubleShooting</a>
                <a href="/">contact us</a>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
