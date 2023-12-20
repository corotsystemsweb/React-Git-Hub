import React from 'react';
import Faculty1 from "../assets/images/faculty.jpg";
import Monitor from "../assets/images/p2.png";
import CPU from "../assets/images/p3.png";
import Printer from "../assets/images/p4.png";

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
                           <h3>Laptop</h3>
                           <span>&#8377; 25000</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Monitor} alt="Faculty1" /></i>
                           <h3>Monitor</h3>
                           <span>&#8377; 25000</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="product-box">
                           <i><img src={CPU} alt="Faculty2" /></i>
                           <h3>CPU</h3>
                           <span>&#8377; 25000</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Printer} alt="Faculty3" /></i>
                           <h3>Printer</h3>
                           <span>&#8377; 25000</span>
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