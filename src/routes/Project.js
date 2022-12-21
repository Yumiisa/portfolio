import React from 'react'
import Footer from '../components/Footer'
import Hero1 from '../components/Hero1'

import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero1 heading="PROJECTS" text="some of my recent work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
