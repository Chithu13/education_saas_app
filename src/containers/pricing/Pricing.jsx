import React from "react";
import './pricing.css';;

export const Pricing = () => {
  return (
     <div className = "pricing"style={{backgroundColor: "white",height:"90vh",marginTop:"5%"}}> 
      <h2 style={{textAlign:"center",marginLeft:"10%",marginRight:"10%"}}>PRICING PLANS</h2>
      <p style={{marginLeft:"40%"}}>Choose the right price plan for your best </p>

<div class="columns">
  <ul class="price">
    <li class="header">Basic Plan</li>
    <li class="grey">$ 9.99 / year</li>
    <li>Website Integration</li>
    <li>Saas</li>
    <li>Web Development</li>
    <li>MicroServices</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header" >Advanced Plan</li>
    <li class="grey">$ 24.99 / year</li>
    <li>Saas Integration</li>
    <li>Website Development</li>
    <li>Integration</li>
    <li>API</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header">Professional Plan</li>
    <li class="grey">$ 49.99 / year</li>
    <li>Website</li>
    <li>API</li>
    <li>SAAS</li>
    <li>Integration</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>
     

     </div>
  )
}



export default Pricing;
