import React from 'react';
import ServiceImg from "../assets/images/service.png";
import PageTopBanner from '../components/PageTopBanner';

const Course = () => {
   return (
      <>
         <PageTopBanner pageTitle={"Course Details"} />
         <section>
            <div className="container">
               <div className="row">
                  <div className="col-md-12 text-center">
                     <h2 className='page-head'>Courses</h2>
                     <p>Welcome to the Course Page of Uday Pratap Inter College, where academic excellence meets holistic education. 
                     Explore our diverse range of courses designed to nurture intellectual curiosity, 
                     foster critical thinking, and empower students with the knowledge and skills necessary for a dynamic future.
                     </p>
                  </div>

               </div>
               <div className="row mt-5">
                  <div className="col-md-6 ">
                     <div className="about_box mt-5">
                        <figure><img src={ServiceImg} alt="About Us" className='img-shadow' /></figure>
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
         </section>
      </>
   )
}

export default Course;
