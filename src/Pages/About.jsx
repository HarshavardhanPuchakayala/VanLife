import React from "react";

export default function About(){
    return(
        <>
         <img src="./assets/hero-2.png" className="About-img"/>
        <div className="About-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="About-paragraph-1">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
            <p className="About-paragraph-2">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        
            <div className="About-Typography">
                <h1>Your destination is waiting.<br/>Your van is ready.</h1>
                <button>Explore our vans</button>
            </div>
        </div>
        </>
    )
}