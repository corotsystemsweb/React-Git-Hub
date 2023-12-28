import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../assets/css/style.css";
// Import your images
import PrimaryImg from "../assets/images/primary-image.jpg";
import JuniorImg from "../assets/images/junior-image.jpg";
import HighSchoolImg from "../assets/images/high-school image.jpg";
import IntermediateImg from "../assets/images/intermediate-image.jpg";

const Testimonial = () => {
  const courseData = [
    {
      image: PrimaryImg,
      title: 'Ravi',
      description: 'Discover comprehensive primary section courses at Uday Pratap Inter College, for academic journey.',
    },
    {
      image: JuniorImg,
      title: 'Shruti',
      description: 'Unlock a world of knowledge and skills through Uday Pratap Inter College\'s junior section courses.',
    },
    {
      image: HighSchoolImg,
      title: 'Shreya',
      description: 'Empower your academic journey at Uday Pratap Inter College\'s high school section with diverse courses.',
    },
    {
      image: IntermediateImg,
      title: 'Aniket',
      description: 'Elevate your educational experience with Uday Pratap Inter College\'s intermediate courses.',
    },
    {
        image: JuniorImg,
        title: 'Abhay',
        description: 'Unlock a world of knowledge and skills through Uday Pratap Inter College\'s junior section courses.',
      },
      {
        image: PrimaryImg,
        title: 'Surya',
        description: 'Discover comprehensive primary section courses at Uday Pratap Inter College, for academic journey.',
      },
  ];

  // Custom Previous Arrow component
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  // Custom Next Arrow component
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className='pt-3 pb-5 bg-alice'>
      <div className='container'>
        <div className='row mt-5 mb-5'>
          <div className='col-md-12 text-center'>
            <p>
              <span className='span-head'>Our</span>
              <h2 className='page-head'>Testimonial</h2>
            </p>
            <p>
              My time at Uday Pratap Inter College has been truly transformative. The institution's unwavering commitment to academic excellence, coupled with a nurturing environment, has provided me with a solid foundation for my educational journey. The dedicated faculty goes above and beyond to ensure holistic development, fostering not only intellectual growth but also encouraging creativity and critical thinking. Uday Pratap Inter College stands as more than an educational institution; it is a community that inspires a love for learning and equips students with the skills needed to navigate a dynamic and ever-evolving world. I am proud to be part of this esteemed institution, where each day brings new opportunities for personal and academic growth.
            </p>
          </div>
        </div>
        {/* courses Section */}
        <div className="row align-items-start course-section">
          <div className="col text-center" id='testinomial_slider'>
            <Slider {...settings}>
              {courseData.map((course, index) => (
                <div key={index} className="course-card">
                  <img src={course.image} alt={course.title} className="rounded-circle course-image ml-65" />
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
