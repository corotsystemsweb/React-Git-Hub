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
            <div className="col-md-4 ">
                  <div className="contact">
                     <h3>Uday Pratap Inter College</h3>
                     <span> </span>
                  </div>
               </div>
               <div className="col-md-4 ">
                  <div className="contact">
                     <h3>Conatct Us</h3>
                     <span><br />
                      <br />
                        <br />
                       <br />
                        Phone - 9886658489 
                        </span>
                  </div>
               </div>
                 <div className="col-md-4 ">
                  <div className="contact">
                     <h3>Useful Links</h3>
                     <ul className="lik">
                           <li> <a href="/about-us">About Us</a></li> 
                           <li> <a href="/course">Course</a></li>
                           <li> <a href="/photo-gallery">Photo Gallery</a></li>    
                           <li> <a href="/contact-us">Contact Us</a></li> 
                     </ul>
                  </div>
               </div>
                
                
            </div>
         </div>
            <div className="copyright">
               <p>© 2023 Uday Pratap Inter College. All Right Reserved. Designed and Developed By <a href='https://www.corotsystems.com/' target='_blanck'>Corot Systems.</a></p>
            </div>
         
      </div>
      </footer>
  )
}

export default Footer;
