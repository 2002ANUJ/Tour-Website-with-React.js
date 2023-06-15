import "./Tripstyle.css"
import TripData from "./TripData"
import React from 'react'
import Trip1 from"../assets/5.jpg";
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/7.jpg"
function Trip() {
  return (
    <>
    <div className="trip">
        <h1>Recent trips</h1>
        <p>The world is a book and those who do not travel read only one page
        </p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading ="Trip in indonesia"
            text="Indonesia offers stunning beaches, rich culture, delicious food, and diverse wildlife, making it a must-visit destination for any traveler."
            />

            <TripData
            image={Trip2}
            heading ="Trip in Dubai"
            text="Dubai is a dazzling metropolis of towering skyscrapers, luxury shopping, and thrilling desert adventures. With world-class dining, entertainment, 
                  and beaches, it's a truly unforgettable destination."
            />

            <TripData
            image={Trip3}
            heading ="Trip in Italy"
            text="Italy is a feast for the senses, with ancient ruins, magnificent art, picturesque villages, and delectable cuisine. From Rome to Florence to Venice, 
                  there's always something to discover."
            />
        </div>

    </div>
    </>
  )
}

export default Trip
