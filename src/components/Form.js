import "./Form.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your name</label>
            <input type="text"/>
            <label>Email</label>
             <input type="email"/>
             <label>Subject</label>
             <input type="text"/>
             <label>Message</label>
           <textarea rows="6" placeholder="please enter the message"/>
           <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
