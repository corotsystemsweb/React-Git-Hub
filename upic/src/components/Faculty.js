import React from 'react';
import Faculty1 from "../assets/images/faculty.jpg";
import Monitor from "../assets/images/p2.png";
import CPU from "../assets/images/p3.png";
import Printer from "../assets/images/p4.png";
import Faculty2 from "../assets/images/faculty1.jpg";
import Faculty3 from "../assets/images/faculty2.jpg";
import Faculty4 from "../assets/images/faculty3.jpg"
const Faculty = () => {
   return (
      <>
         <div className="product">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="title">
                        <h2>Our <strong className="black">Faculties</strong></h2>
                        <span>"Uday Pratap Inter College" A hub of academic excellence, fostering holistic development and empowering students for a brighter future through quality education and dedicated mentorship."
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="faculty-bg">
            <div className="product-bg-white">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty1} alt="Faculty" /></i>
                           <h3>Miss Amisha</h3>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty2} alt="Faculty2" /></i>
                           <h3>Mr Aman</h3>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="product-box">
                           <i><img src={Faculty3} alt="Faculty3" /></i>
                           <h3>Miss Shachi</h3>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty4} alt="Faculty4" /></i>
                           <h3>Ms. Arpita</h3>
                           <span> Teacher</span>
                        </div>
                     </div>



                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default Faculty;