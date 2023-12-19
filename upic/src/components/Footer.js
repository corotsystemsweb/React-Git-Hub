import React from 'react';
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <ul className="sociel">
                         <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                         <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                         <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                         <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                     </ul>
                  </div>
            </div>
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="contact">
                     <h3>conatct us</h3>
                     <span>#18, ATR Complex,<br />
                       2nd Main, Old Airport Road,<br />
                        MurgeshPalya, <br />
                        Bengaluru - 560017<br />
                        Phone - 9886658489 
                        </span>
                  </div>
               </div>
                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="contact">
                     <h3>ADDITIONAL LINKS</h3>
                     <ul className="lik">
                           <li> <a href="/about-us">About Us</a></li> 
                           <li> <a href="/services">Sales & Services</a></li>
                           <li> <a href="/rent-a-computer">Rent a Computer</a></li>    
                           <li> <a href="/contact-us">Contact Us</a></li> 
                     </ul>
                  </div>
               </div>
                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="contact">
                     <h3>service</h3>
                      <ul className="lik">
                        <li> <a href="#"> Data recovery</a></li>
                         <li> <a href="#">Computer repair</a></li>
                         <li> <a href="#">Network solutions</a></li>
                          <li> <a href="#">Technical support</a></li>
                        </ul>
                  </div>
               </div>
                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="contact">
                     <h3>Return & Warranty</h3>
                     <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, <a href="#">read more</a> </span>
                  </div>
               </div>
            </div>
         </div>
            <div className="copyright">
               <p>Copyright 2022, All Right Reserved.</p>
            </div>
         
      </div>
      </footer>
  )
}

export default Footer;
