import React from 'react';
import ContactImg from "../assets/images/contact.png";
import PageTopBanner from '../components/PageTopBanner';
const Contact = () => {
  return (
    <>
    <PageTopBanner pageTitle={"Contact Us"} />
    
    <div class="about">
   <div class="container">
      <div class="row">
         <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="about_box">
               <figure><img src={ ContactImg } alt="Contact to Green Computers" /></figure>
            </div>
         </dir>
          <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="about_box">
               <h3>Any Queries? Pleae talk to us</h3>
               <hr />
               <p>#18, ATR Complex,<br />
                  2nd Main, Old Airport Road,<br />
                  MurgeshPalya,<br />
                  Bengaluru - 560017</p>
                 
                  <hr />
                  <p> Phone - 9886658489</p>
                  <hr />
                  <p> Email: greencomp.in@gmail.com</p>
                  <hr />
                  <p>Time : Monday to Saturday<br />
                     9 AM - 7PM<br />
                     Sunday - Holiday
                  </p>
            </div>
         </dir> 
      </div>
   </div>
</div>
</>
  )
}

export default Contact;
