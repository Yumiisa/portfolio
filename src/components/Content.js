import "./Content.css"
import React from 'react'
import { Link } from "react-router-dom"
import myPdf  from "../assets/resume.pdf"
import cert  from "../assets/sd.pdf"
import m5  from "../assets/m1.jpeg"

const Content = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={m5} alt="me"/>
            <h1>Who Am I?</h1>
            <p>I'm react front-end developer, I create responsive secure website</p>
            <p>I'm rails back-end developer</p>
            <a href={myPdf} download>download Resume</a>
              <a href={cert} download> down certificate</a>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <a href={myPdf} download className="btn bt">download Resume</a>
              <a href={cert} download className="btn bt"> down certificate</a>
        </div>
      
    </div>
  )
}

export default Content
