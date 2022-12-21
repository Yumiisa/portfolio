import "./Hero.css"
import React from 'react'
import Pic from "../assets/me.jpeg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={Pic} alt="Pic" className="intro"/>
        </div>
        <div className="content">
            <p>Hello I'm a software developer</p>
            <h1>React developer</h1>
            <div>
                <Link to="/project" className="btn">Projects </Link>
            <Link to="/contact" className="btn btn-light">Contact </Link>
            </div>
            
        </div>
      
    </div>
  )
}

export default Hero
