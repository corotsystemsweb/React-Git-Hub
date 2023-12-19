import React from 'react';
import HomeSlider from '../components/HomeSlider';
import OurProducts from '../components/OurProducts';
import RequestAFreeQuote from '../components/RequestAFreeQuote';
import ServivesProcess from '../components/ServivesProcess';
import WhatClientSay from '../components/WhatClientSay';
import WhyChoose from '../components/WhyChoose';


const Default = () => {
  return (
    <>
      <HomeSlider />
      <OurProducts />
      <WhyChoose />
      <ServivesProcess />
      <WhatClientSay />
      <RequestAFreeQuote />
    </>
  )
}

export default Default;
