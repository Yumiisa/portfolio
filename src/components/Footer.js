import "./Footer.css";
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>Nairobi</p>
                <p>Kenya</p>
            </div>
        </div>
        <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            0759456839
            </h4>
           
        </div>
        <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            gaudencia.wany@gmail.com
            </h4>
           
        </div>
        </div>
        <div className="right">
            <h4>About Gaudencia</h4>
            <p>I'm Wanyama Gaudencia from Kenya. <br/>A graduate of Moringa school of  software development.<br/> Currently I'm fourth year
                 student at Nairobi university. <br/>bachelor of commerce specialiazing in business information systems.<br/> I enjoy developing new project</p>
            <div className="social">
                <a href="https://github.com/Yumiisa">
                   <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </a>
                <a href="https://github.com/Yumiisa">
                   <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </a>

                <a href="https://www.linkedin.com/in/gaudencia-wanyama-ba3289236/"><FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/></a>
              
             
              
           
           
           
           
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
