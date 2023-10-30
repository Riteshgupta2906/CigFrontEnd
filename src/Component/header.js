import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Brand from "./logo-temp.svg";
import "./header.css";
import HomePage from "./HomePage";
import Blog from "./BlogPost/blog";
import Event from "./Events/blog";
import FooterC from "./Footer/container/footer";
import About from "./About/newAbout";
import Resources from "./Resources/Resources";
import Contact from "./contact/contact";
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx'
import Right from "./contact/right";

const Navbar = () => {
  const [visible,setVisible]=useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
         
          {/* <div className="logo">
           
          </div> */}
          <div className="nav-elements">
          <img src={Brand} alt="logo-cig" id="pic" />
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/event">Events</NavLink>
              </li>
              <li>
                <NavLink to="/resource">Resources</NavLink>
              </li>
              <li id="blg">
                <NavLink to="https://medium.com/@cig_59196">Blog</NavLink>
              </li>
              </ul>
              <span id="cont">
              <NavLink to="/contact">Contact</NavLink>
              </span>
             <div className="hamburger" onClick={()=>setVisible(true)}> <RxHamburgerMenu size={22}/></div>
          </div>
          {
            visible?(<div className="mobilenav">
          <div className="cross" onClick={()=>setVisible(false)}><RxCross2 size={22}/></div>
          <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/event">Events</NavLink>
              </li>
              <li>
                <NavLink to="/resource">Resources</NavLink>
              </li>
              <li id="blg">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
              <NavLink to="/contact">Contact</NavLink>
              </li>
              </ul>  
              
          </div>):<></>
          }
          
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/blog" element={<Blog />} /> */}
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/resource" element={<Resources />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/collaborate" element={<Right />} />
        {/* yaha pe Event ko import krke blog ki jgh event likhna bs and folder alag bananna */}
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
     
      <FooterC />
    </>
  );
};

export default Navbar;
