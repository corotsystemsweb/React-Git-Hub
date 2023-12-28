import React, { useEffect } from 'react';
import PageTopBanner from '../components/PageTopBanner';
const Contact = () => {
   useEffect(() => {
      document.title = "Contact to Uday Pratap Inter College"
   }, [])
   return (
      <>
         <PageTopBanner pageTitle={"Contact Us"} />
         <section className='mt5'>
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
                     <div className="row pt5 pb-5">
                        <div className="col-md-6 ">
                           <div className='contact-'>
                              <div className='contact-info'>
                                 <div>
                                    <h3>Address</h3>
                                    <p> Uday Pratap Inter College,<br />Gopalganj, Siddharthnagar,<br /> Uttar Pradesh, India - 273006 <br />      Phone - 9886658489
                                    </p>
                                 </div>
                                 
                                 <div>
                                    <h3>Mobile</h3>
                                    <p>+91 9886658489 </p>
                                 </div>
                                 {/* <div class="ms-3">
                                    <h3>E-mail</h3>
                                    <p>test@test.com </p>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908038.7506604068!2d82.20614180287002!3d27.24970231032047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996c4ae6af210c9%3A0x9983449db5a00573!2sSiddharthnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703748076169!5m2!1sen!2sin"
                                 width="532" height="430" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;
