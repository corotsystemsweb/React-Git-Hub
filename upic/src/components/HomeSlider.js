import React from 'react';
import "../assets/css/style.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SliderImg1 from "../assets/images/banner-01.jpg";
import SliderImg2 from "../assets/images/banner-02.jpg";
import SliderImg3 from "../assets/images/banner-03.jpg";

const HomeSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Set the duration to 30 seconds
    customPaging: function (i) {
      return (
        <button
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid #fff',
            outline: 'none',
            margin: '0 5px',
          }}
        />
      );
    },
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src={SliderImg1} alt="Slide 1" />
      </div>
      <div>
        <img src={SliderImg2} alt="Slide 2" />
      </div>
      <div>
        <img src={SliderImg3} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default HomeSlider;
