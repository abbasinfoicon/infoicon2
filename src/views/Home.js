import React from 'react'
import About from '../components/templates/home/About'
import OurCaseStudy from '../components/templates/home/OurCaseStudy'
import OurService from '../components/templates/home/OurService'
import WeMake from '../components/templates/home/WeMake'
import WhyChoose from '../components/templates/home/WhyChoose'
import Slider from '../components/templates/Slider'

const Home = () => {
  return (
    <>
      <Slider />

      <About />
      <OurService />
      <OurCaseStudy />
      <WhyChoose />
      <WeMake />
    </>
  )
}

export default Home