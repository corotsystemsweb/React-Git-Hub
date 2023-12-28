import React, { useEffect } from 'react';
import HomeSlider from '../components/HomeSlider';
import Welcome from '../components/Welcome';
import Faculty from '../components/Faculty';
import Courses  from '../components/Courses';
import Testinomial from '../components/Testinomial';

const Default = () => {
  useEffect(() => {
document.title = "Welcome to Uday Pratap Inter College, Gorakhpur"
  },[])
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