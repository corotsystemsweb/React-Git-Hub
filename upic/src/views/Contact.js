import React from 'react';
import ContactImg from "../assets/images/about-2.jpeg";
import PageTopBanner from '../components/PageTopBanner';
const Contact = () => {
   return (
      <>
         <PageTopBanner pageTitle={"Contact Us"} />

         <div class="about">
            <div class="container">
               <div class="row">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12 text-center">
                           <h2 className='page-head'>Contact Us</h2>
                           <p>Welcome to Uday Pratap Inter College, where academic excellence meets holistic development.
                              Our institution is committed to nurturing young minds, fostering a love for learning, and empowering
                              students with the knowledge and skills to navigate a dynamic world.</p>
                        </div>

                     </div>
                     <div className="row mt-5">
                        <div className="col-md-6 ">
                           <div className="about_box mt-5">
                              {/* <figure><img src={ContactImg} alt="About Us" className='img-shadow'/></figure> */}
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227993.39284559633!2d83.23910056642623!3d26.763619843503722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703249349203!5m2!1sen!2sin"
                               width="400" height="450" allowfullscreen="" loading="lazy" 
                               referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className='contact-info'>
                             <div className='col-md-2'>

                             </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact;
