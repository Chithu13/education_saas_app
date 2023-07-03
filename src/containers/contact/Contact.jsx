import React from "react"; 
import './contact.css';


export default function Contact() {
  

  return (
  <>


<div className="contactheading" style={{height:"40vh",marginTop:"4%"}}>




</div>
<h4>Want to work with us?</h4>
<h6>Let’s help you create something awesome for your business today.</h6>


  <div className = "contact"style={{backgroundColor: "lightgrey",height:"80vh"}}>
   
  
    <form style={{marginTop:"1%"}}>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    <input type="submit" value="Submit"></input>
    </form>

    

  </div>

  </>





    

  
    
  );
}

  
