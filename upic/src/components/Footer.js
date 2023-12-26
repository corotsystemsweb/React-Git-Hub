import React from 'react';
import { NavLink } from "react-router-dom";
const Footer = () => {
   return (
      <footer>
         <div className="footer ">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 ">
                     <div className="contact">
                        <h4>Uday Pratap Inter College</h4>
                        <span> Uday Pratap Inter College, a beacon of knowledge and excellence in education.Nestled in the heart of our vibrant community, we take pride in nurturing young minds.</span>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="contact ml-5">
                        <h4>Useful Links</h4>
                        <ul className="lik">
                           <li> <a href="/about-us">About Us</a></li>
                           <li> <a href="/course">Course</a></li>
                           <li> <a href="/photo-gallery">Photo Gallery</a></li>
                           <li> <a href="/contact-us">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-4 ">
                     <div className="contact">
                        <h4>Conatct Us</h4>
                        <span>Uday Pratap Inter College,<br />Gorakhpur, Uttar Pradesh, <br />India - 273006 <br />      Phone - 9886658489
                     </span>

                  </div>

               </div>
               <div className='col-md-12 text-center'>
                  <p className="copyright">© 2023 Uday Pratap Inter College. All Right Reserved. Designed and Developed By <a href='https://www.corotsystems.com/' target='_blanck'>Corot Systems.</a></p>

               </div>



            </div>
         </div>
         {/* <div className="copyright">
               <p className="copyright">© 2023 Uday Pratap Inter College. All Right Reserved. Designed and Developed By <a href='https://www.corotsystems.com/' target='_blanck'>Corot Systems.</a></p>
            </div> */}

      </div>
      </footer >
   )
}

export default Footer;
