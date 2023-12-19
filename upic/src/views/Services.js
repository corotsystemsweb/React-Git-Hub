import React from 'react';
import ServiceImg from "../assets/images/service.png";
import PageTopBanner from '../components/PageTopBanner';

const Services = () => {
  return (
   <>
   <PageTopBanner pageTitle={"Sales & Services"} />
   <div class="about">
  <div class="container">
     <div class="row">
        <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <div class="about_box">
              <figure><img src={ ServiceImg } alt="About Green Computers" /></figure>
           </div>
        </dir>
         <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <div class="about_box">
              <h3>Sale & Services</h3>
              
              <p> We provide guaranteed service levels in a single point of contact for your entire IT distributed products. </p>

              <p> Having serviced over 15,000 Indusial & Corporate customers over the past and having worked with multiple brands and models of Laptop, Desktop, Printers, and our broad range of services will fit your needs. </p>
              <ul className='sale'>
              <li>AMC (Annual Maintenance Contract)</li>
              <li>Components Level Repairing </li>
               <li>Set up wireless & wired networking.</li>
              <li>Data Recovery</li>
               </ul>      
               <p>Our customers always prefer to stay with us because of the quality we offer and that too 
               at unbeaten prices.</p>

           </div>
        </dir> 
     </div>
  </div>
</div>
</>
  )
}

export default Services;
