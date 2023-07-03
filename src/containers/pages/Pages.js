import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Navbar } from "../../components"
import Blog from "../blog/Blog"
import Home from "../home/Home"
import Integration from "../integration/Integration"
import Pricing from "../pricing/Pricing"
import Services from "../services/Services"
import WhatGPT3 from "../whatGPT3/WhatGPT3"
import Footer from "../footer/Footer"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<WhatGPT3/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/integration' element={<Integration/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>


    </>
  )
}

export default Pages;