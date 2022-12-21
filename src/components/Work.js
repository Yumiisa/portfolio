import "./Work.css"
import React from 'react'
import proj from "../assets/m3.png"
import proj1 from "../assets/m4.png"
import myProj from "../assets/m8.png"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        <div className="project-card">
          <img src={proj} alt="project"/>    
                
                <h2 className="project-title">Local shop</h2>
                <div className="pro-details">
                    <p>The project that involved inventory management systems </p>
                    <div className="pro-btns">
                        <a href="https://inventory-management-chi.vercel.app/" className="btn">view</a>
                       <a href="https://github.com/Group1-Local-Shop/sms-frontend" className="btn">source</a>
                       
                    </div>

                </div>
            </div>
            <div className="project-card">
          <img src={proj1} alt="project"/>    
                
                <h2 className="project-title">Online shop</h2>
                <div className="pro-details">
                    <p>Online furniture collection where we can orderr different furnitures at different prices</p>
                    <div className="pro-btns">
                        <a href="https://yumiisa.github.io/shopOnline/" className="btn">view</a>
                       <a href="https://github.com/Yumiisa/shopOnline" className="btn">source</a>
                       
                    </div>

                </div>
                
            </div>
            <div className="project-card">
          <img src={myProj} alt="project"/>    
                
                <h2 className="project-title">Meal ingredient app</h2>
                <div className="pro-details">
                    <p>This is fast food ingredient app that allow everyone to search the ingredient for the food of their choice</p>
                    <div className="pro-btns">
                        <a href="https://yumiisa.github.io/MoringaProject/" className="btn">view</a>
                       <a href="https://github.com/Yumiisa/MoringaProject" className="btn">source</a>
                       
                    </div>

                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Work
