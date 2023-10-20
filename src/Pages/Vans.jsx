import React from "react";
export default function Vans(){
    return(
        <div className="Vans-Van">
            <p className="UnderLine">Back to all Vans</p>
            <img src="./assets/ModestExplorer.png" className="vans-img"/>
            <p className="btn">Simple</p>
            <h1>Modest Explorer</h1>
            <p className="price">$60<span>/day</span></p>
            <p className="Vans-Text">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            <button>Rent this van</button>
        </div>
    )
}