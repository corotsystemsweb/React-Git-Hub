import React from 'react';
import HomeSlider from '../components/HomeSlider';
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
    </>
  )
}
export default Default;
