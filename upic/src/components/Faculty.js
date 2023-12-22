import React from 'react';
import "../assets/css/style.css";
import Faculty1 from "../assets/images/faculty.jpg";
import Faculty2 from "../assets/images/faculty1.jpg";
import Faculty3 from "../assets/images/faculty2.jpg";
import Faculty4 from "../assets/images/faculty3.jpg"
const Faculty = () => {
   return (
      <><section className='mt-5'>

         <div className="container mt-5">
            <div className="row">
               <div className='col-md-12 text-center'>
                  <p>
                     <span className='span-head'>Our</span>
                     <h2 className='page-head'>Faculties</h2>
                     <p> Uday Pratap Inter College is a hub of academic excellence, fostering holistic development and empowering students for a brighter future through quality education and dedicated mentorship.
                     Uday Pratap Inter College stands as more than an educational institution. It is a community that inspires a love for learning and equips students with the skills needed to navigate a dynamic and ever-evolving world.
                     </p>
                  </p>
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
                           <h4>Miss Amisha</h4>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty2} alt="Faculty2" /></i>
                           <h4>Mr Aman</h4>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty3} alt="Faculty3" /></i>
                           <h4>Miss Shachi</h4>
                           <span> Teacher</span>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="faculty-box">
                           <i><img src={Faculty4} alt="Faculty4" /></i>
                           <h4>Ms. Arpita</h4>
                           <span> Teacher</span>
                        </div>
                     </div>



                  </div>
               </div>
            </div>

         </div>
      </section>
      </>
   )
}

export default Faculty;