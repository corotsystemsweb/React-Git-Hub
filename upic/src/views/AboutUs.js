import React from 'react';
import AboutImg from "../assets/images/about.png";
import PageTopBanner from '../components/PageTopBanner';
const AboutUs = () => {
  return (
   <>
     <PageTopBanner pageTitle={"About Us"} />
    <div class="about">
    <div class="container">
       <div class="row">
          <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                <figure><img src={ AboutImg } alt="About Uday Pal Inter Colleage" /></figure>
             </div>
          </dir>
           <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                <h3>About Us</h3>
                   <p><strong>Green Computers</strong>, We are the leading hardware & upgrade service provider for users of Laptops, Desktops, Printers and Servers.</p>

                 <p> Incorporating deep industry and technology expertise, our reliable Products & services covers every aspect of Entire IT distributed Products, infrastructure- from user based to helpdesk support and infrastructure development and on going management.</p> 

                  <p><strong>Our Goal</strong> Is to provide New, Small to Medium-size Businesses and branch office locations of large corporations with an Efficient Computer Technology System so it will allow them to concentrate on what they do best, (Companies with 100 Computers or less). We apply our Big Business knowledge to provide your business with the best solution within your budget. </p>
                  
             </div>
          </dir> 
       </div>
    </div>
 </div>
 </>
  )
}

export default AboutUs;
