import React from 'react';
import AboutImg from "../assets/images/about.png";
import About2 from "../assets/images/banner.jpeg";
import PageTopBanner from '../components/PageTopBanner';
import "../assets/css/style.css";


const AboutUs = () => {
  return (
   <>
     <PageTopBanner pageTitle={"About Us"} />
    <div class="about">
    <div class="container">
       <div class="row">
          <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                <figure><img src={ AboutImg } alt="About Uday Pal Inter College" /></figure>
             </div>
          </dir>
           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                <h3>About Us</h3>
                   <p><strong>Green Computers</strong>, We are the leading hardware & upgrade service provider for users of Laptops, Desktops, Printers and Servers.</p>

               </div>
               <div className="row mt-5">
                  <div className="col-md-6 ">
                     <div className="about_box mt-5">
                        <figure><img src={About2} alt="About Us" className='img-shadow'/></figure>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <p>
                        Welcome to Uday Pratap Inter College, a beacon of excellence in education and character development.
                        Established with a vision to nurture young minds and foster holistic growth, Uday Pratap Inter College stands as a
                        testament to educational innovation and commitment. Our dedicated team of educators strives to provide a dynamic
                        learning environment that encourages curiosity, critical thinking, and creativity. Rooted in values and tradition
                        , our institution not only imparts knowledge but also instills a sense of responsibility, discipline, and compassion
                        in our students. At Uday Pratap Inter College, we believe in empowering every student to discover their unique
                        potential, equipping them with the skills needed to navigate an ever-changing world. Our commitment to academic
                        excellence is complemented by a rich tapestry of co-curricular activities, ensuring a well-rounded educational
                        experience. 
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="faculty">
            <div className="container mb-5">
               <div className="row mt-5">
                  <div className="col-md-6">
                     <p>
                         Our experienced faculty members are committed to guiding students on
                         their educational journey, cultivating a positive and enriching environment.
                        At Uday Pratap Inter College, we believe in nurturing well-rounded individuals, emphasizing both academic prowess and extracurricular achievements. Our state-of-the-art facilities, coupled with a diverse range of programs, create an atmosphere where students can explore their talents and interests. As we celebrate a rich heritage of educational excellence, we continuously strive to adapt and evolve, ensuring our students are well-prepared for the challenges of the modern world. Join us at Uday Pratap Inter College,
                         where education goes beyond textbooks, and every student is empowered to reach their full potential.
                     </p>
                  </div>
                  <div className="col-md-6 ">
                     <div className="about_box mt-5">
                        <figure><img src={About2} alt="About Us" className='img-shadow'/></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default AboutUs;
