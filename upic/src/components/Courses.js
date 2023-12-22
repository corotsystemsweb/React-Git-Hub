import React from 'react';
import "../assets/css/style.css";

// Import your images
import PrimaryImg from "../assets/images/primary-image.jpg";
import JuniorImg from "../assets/images/junior-image.jpg";
import HighSchoolImg from "../assets/images/high-school image.jpg";
import IntermediateImg from "../assets/images/intermediate-image.jpg";

const Courses = () => {
  return (
    <section>
      <div className='container'>
        <div className='row mt-5 mb-5'>
          <div className='col-md-12 text-center'>
            <p>
              <span className='span-head'>Our</span>
              <h2 className='page-head'>Courses</h2>
              <p>
                At Uday Pratap Inter College, we offer a comprehensive range
                of courses spanning from the primary to intermediate levels,
                providing students with a rich and nurturing educational
                environment. In our primary section, foundational courses aim to
                instill a love for learning, fostering curiosity and creativity.
                Moving to the junior and high school sections, our diverse
                curriculum focuses on holistic development, empowering students
                with both knowledge and critical thinking skills. In the
                intermediate section, our courses are designed to guide students
                towards academic excellence and personal growth. Our dedicated
                faculty and well-rounded educational approach ensure that
                students receive a robust foundation for future success,
                equipping them with the skills and knowledge necessary for a
                dynamic and ever-evolving world.
              </p>
            </p>
          </div>
        </div>
        {/* courses Section */}
        <div className="row align-items-start course-section">
          <div className="col text-center">
            <div className="course-card">
              <img src={PrimaryImg} alt="Primary" className="rounded-circle course-image" />
              <h3>Primary</h3>
              <p>
                Discover comprehensive  primary section courses at
                Uday Pratap Inter College,for academic journey.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <div className="course-card">
              <img src={JuniorImg} alt="Junior" className="rounded-circle course-image" />
              <h3>Junior</h3>
              <p>
                Unlock a world of knowledge and skills through Uday Pratap
                Inter College's junior section courses.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <div className="course-card">
              <img src={HighSchoolImg} alt="High School" className="rounded-circle course-image" />
              <h3>High-School</h3>
              <p>
                Empower your academic journey at Uday Pratap Inter College's
                high school section with diverse courses.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <div className="course-card">
              <img src={IntermediateImg} alt="Intermediate" className="rounded-circle course-image" />
              <h3>Intermediate</h3>
              <p>
                Elevate your educational experience with Uday Pratap Inter
                College's intermediate courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
