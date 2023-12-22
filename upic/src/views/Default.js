import React from 'react';
import HomeSlider from '../components/HomeSlider';
import OurProducts from '../components/OurProducts';
import RequestAFreeQuote from '../components/RequestAFreeQuote';
import ServivesProcess from '../components/ServivesProcess';
import WhatClientSay from '../components/WhatClientSay';
import WhyChoose from '../components/WhyChoose';
import Welcome from '../components/Welcome';
import Faculty from '../components/Faculty';
import Courses  from '../components/Courses';
import Testinomial from '../components/Testinomial';



const Default = () => {
  return (
    <>
      <HomeSlider />
      <Welcome />
      <Courses />
      <Faculty />
      <Testinomial/>
     
      {/* <OurProducts />
      <WhyChoose />
      <ServivesProcess />
      <WhatClientSay />
      <RequestAFreeQuote /> */}
    </>
  )
}
export default Default;
