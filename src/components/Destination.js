import React from 'react'
import './Destinationstyle.css'
import DestinationData from './DestinationData'
function Destination() {
  return (
    <>
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Travel makes one modest. You see what a tiny place you occupy in the world.</p>

       <DestinationData 
       cname="first-des"
       heading="Leh-Ladakh"
       text="Leh-Ladakh is a high-altitude region in the Indian Himalayas, known for its stunning landscapes and unique culture. A tour of Leh-Ladakh typically involves visiting monasteries, 
            trekking through scenic valleys, and experiencing the local way of life. Popular attractions include Pangong Lake, Nubra Valley, and Khardung La Pass. The region is also known for its adventure sports, such as white-water rafting and mountain biking. "
       img1 ="https://plus.unsplash.com/premium_photo-1661941770505-9fe5c1c5002e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       img2 ="https://images.unsplash.com/photo-1559186820-3e8201de3879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
       />

      <DestinationData
      cname="first-des-reverse" 
       heading="Manali"
       text="Manali is a popular hill station in the Indian state of Himachal Pradesh, known for its scenic beauty and adventure activities. A tour of Manali would typically 
            involve visiting landmarks such as the Hadimba Temple, Solang Valley, and Rohtang Pass. The town is also known for its adventure sports, such as skiing, paragliding, and trekking. Local markets offer a variety of handicrafts and traditional food for visitors to enjoy."
       img1 ="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
       img2 ="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       />
    </div>
    </>
  )
}

export default Destination
