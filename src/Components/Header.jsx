import React from "react";
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <header>
             <div className='Navbar'>
                <Link to="/" className="logo">#VANLIFE</Link>
                <nav>
                 <Link to="/about">About</Link>
                 <Link to="/Vans">Vans</Link>
                 </nav>
            </div>
        </header> 
    )
}