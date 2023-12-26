import React from 'react';
import PageTopBanner from '../components/PageTopBanner';
const Contact = () => {
   return (
      <>

         <PageTopBanner pageTitle={"Contact Us"} />
         <section className='pt-5'>

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
                     <div className="row pt-5 pb-5">
                        <div className="col-md-6 ">
                      <div className='contact-'>
                      <div className='contact-info'>
                              <div class="ms-3">
                                 <h3>Address</h3>
                                 <p>Uday Pratap Inter College,<br />
                                 Gorakhpur, Uttar Pradesh, <br />
                                 India - 273006 </p>
                              </div>
                              <div class="ms-3">
                                 <h3>Mobile</h3>
                                 <p>+91 9886658489 </p>
                              </div>
                              <div class="ms-3">
                                 <h3>E-mail</h3>
                                 <p>test@test.com </p>
                              </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 ">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227993.39284559633!2d83.23910056642623!3d26.763619843503722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703249349203!5m2!1sen!2sin"
                              width="532" height="430" allowfullscreen="" loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      </>
   )
}

export default Contact;
