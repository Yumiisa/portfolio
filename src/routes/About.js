import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Hero1 from '../components/Hero1'

import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero1 heading="About" text="I'm friendly fullstack developer of react and rails"/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default About
