import React from 'react';
import CourseImg from "../assets/images/courses.jpeg";
import PageTopBanner from '../components/PageTopBanner';

const Course = () => {
   return (
      <>
         <PageTopBanner pageTitle={"Course Details"} />
         <section className='mt-5 mb-5'>
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
                        <figure><img src={CourseImg} alt="About Us" className='img-shadow' /></figure>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <p>Welcome to the Courses page of Uday Pratap Inter College, where we offer a diverse range of academic 
                     programs designed to nurture the holistic development of our students. Our institution is committed to providing 
                     high-quality education that empowers students with knowledge, critical thinking skills, and a passion for learning. From science and mathematics to humanities and arts, our comprehensive curriculum caters to a wide spectrum of interests. Our experienced and dedicated faculty members create an engaging learning environment, fostering intellectual curiosity and a thirst for knowledge. At Uday Pratap Inter College, we prioritize innovation and technology integration, ensuring that our students are well-equipped for the challenges of the modern world. Explore our courses to discover a wealth of opportunities for academic excellence, personal growth, and future success. Whether it's preparing for competitive exams or pursuing creative endeavors, our courses lay the foundation for a bright and promising future. Join us on this educational journey where every 
                     course is a stepping stone towards a well-rounded and fulfilling academic experience at Uday Pratap Inter College.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Course;
