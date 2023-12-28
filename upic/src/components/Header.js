import React from 'react';
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

import * as Unicons from "@iconscout/react-unicons";

const Header = () => {
  return (
 
     <header  className="header">

         <div className="header">
            <div className="head_top">
               <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                       <div className="top-box">
                        <ul className="sociel_link">
                         <li><Unicons.UilFacebook style={{color:'#fff'}} /></li>
                         <li><Unicons.UilYoutube style={{color:'#fff'}} /></li>
                         <li><Unicons.UilInstagram style={{color:'#fff'}} /></li>
                     </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                       <div className="top-box">
                        <p><strong>Phone : 9886658489</strong> </p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo">
                             <a href="/">
                                <img src={logo} alt="green computer logo"/></a>
                              </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-9 col-lg-7 col-md-9 col-sm-9">
                  <div className="menu-area">
                     <div className="limit-box">
                        <nav className="main-menu">
                           <ul className="menu-area-main">
                           <li> <NavLink to="/">Home</NavLink></li>
                           <li> <NavLink to="/about-us">About Us</NavLink></li> 
                           <li> <NavLink to="/course">Course</NavLink></li>
                           <li> <NavLink to="/photo-gallery">Photo Gallery</NavLink></li>    
                           <li> <NavLink to="/contact-us">Contact Us</NavLink></li>                     
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </header> 

  );
}

export default Header;
