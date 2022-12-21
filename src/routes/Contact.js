import React from 'react'

import Footer from '../components/Footer'
import Hero1 from '../components/Hero1'

import Navbar from '../components/Navbar'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero1 heading="Contact" text="Let us have chat"/>
        <Form/>
        <Footer/>
        
    </div>
  )
}

export default Contact