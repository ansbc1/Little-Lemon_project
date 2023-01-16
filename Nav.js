import React from 'react'
import {link} from 'react-router-dom'

const Nav =() => {
    return(
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/specials">Specials</Link></li>
         <li><Link to="/customerssay">Customers Say</Link></li>
             <li><Link to="/chicago">Chicago</Link></li>
            </ul>
        </nav>
    );
};


export default Nav;