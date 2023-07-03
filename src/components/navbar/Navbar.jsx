import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './navbar.css';



const Navbar = () => {
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 header ">
        <div className="container-fluid">
          <Link className="header-title" to="/">
            EDW SAAS
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item" style={{marginLeft:"40%"}}>
                <Link className="header-subtitle" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/integration">
                  Integration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/contact">
                  Contact
                </Link>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;




// import React, { useState } from "react"
// import './navbar.css'
// import { nav } from "../Data/Data";
// import { Link } from "react-router-dom"

// const Navbar = () => {
//   const [navList, setNavList] = useState(false)

//   return (
//     <>
//       <header>
//         <div className='container'>
//           <div className='logo'>
//             <h1>EDW SAAS</h1>
//           </div>
//           <div className='nav'>
//             <ul className={navList ? "small" : "flex"}>
//               {nav.map((list, index) => (
//                 <li key={index}>
//                   <Link to={list.path}>{list.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='button flex'>
//             <h4>
//               <span>2</span> My List
//             </h4>
//             <button className='btn1'>
//               <i className='fa fa-sign-out'></i> Sign In
//             </button>
//           </div>

//           <div className='toggle'>
//             <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import './navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <h2>EDW SASS</h2>
//         </div>
//         <div className="gpt3__navbar-links_container">
//           <p><a href="#home">Home</a></p>
//           <p><a href="#wgpt3">About</a></p>
//           <p><a href="#features">Services</a></p>
//           <p><a href="#integration">Integration</a></p>
//           <p><a href="#pricing">Pricing</a></p>
//           <p><a href="#blog">Blog</a></p>
//           <p><a href="#contact">Contact Us</a></p>
//         </div>
//       </div>
//       <div className="gpt3__navbar-sign">
//         <p>Sign in</p>
//         <button type="button">Sign up</button>
//       </div>
//       <div className="gpt3__navbar-menu">
//         {toggleMenu
//           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
//           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
//         {toggleMenu && (
//         <div className="gpt3__navbar-menu_container scale-up-center">
//           <div className="gpt3__navbar-menu_container-links">
//           <p><a href="#home">Home</a></p>
//           <p><a href="#wgpt3">About</a></p>
//           <p><a href="#features">Services</a></p>
//           <p><a href="#integration">Integration</a></p>
//           <p><a href="#pricing">Pricing</a></p>
//           <p><a href="#blog">Blog</a></p>
//           <p><a href="#contact">Contact Us</a></p>
//           </div>
//           <div className="gpt3__navbar-menu_container-links-sign">
//             <p>Sign in</p>
//             <button type="button">Sign up</button>
//           </div>
//         </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;