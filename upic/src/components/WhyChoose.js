import React from 'react';
import DataRecovery from "../assets/icon/1.png";
import ComputerRepair from "../assets/icon/2.png";
import MobileService from "../assets/icon/3.png";
import NetworkSolutions from "../assets/icon/4.png";
const WhyChoose = () => {
   return (
      <>
         <div className="whyschose">
            <div className="container">

               <div className="row">
                  <div className="col-md-7 offset-md-3">
                     <div className="title">
                        <h2>OUR <strong className="black">FACULTIES</strong></h2>
                        <span>
                           At Uday Pratap Inter College, our faculty is the cornerstone of academic excellence and holistic development. Comprising a team of dedicated and experienced educators, our faculty members bring passion and expertise to the classroom, fostering an environment where students can thrive academically and personally.
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="choose_bg">
            <div className="container">
               <div className="white_bg">
                  <div className="row">
                     <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="for_box">
                           <i><img src={DataRecovery} alt="Data Recovery" /></i>
                           <h3>Data recovery</h3>
                           <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                        </div>
                     </dir>
                     <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="for_box">
                           <i><img src={ComputerRepair} alt="Computer repair" /></i>
                           <h3>Computer repair</h3>
                           <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                        </div>
                     </dir>
                     <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="for_box">
                           <i><img src={MobileService} alt="Mobile service" /></i>
                           <h3>Anti Virus</h3>
                           <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                        </div>
                     </dir>
                     <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="for_box">
                           <i><img src={NetworkSolutions} alt="Network solutions" /></i>
                           <h3>Network solutions</h3>
                           <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                        </div>
                     </dir>
                     <div className="col-md-12">
                        <a className="read-more" href='/about-us/'>Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default WhyChoose;
