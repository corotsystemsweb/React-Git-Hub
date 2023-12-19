import React from 'react';
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav className="main-menu">
    <ul className="menu-area-main">
       <li> <NavLink to="/index/">Home</NavLink></li>
       <li> <NavLink to="/about/">About</NavLink></li>
       <li> <NavLink to="/services/">Services</NavLink></li>
    </ul>
 </nav>
  )
}

export default TopNavBar;
