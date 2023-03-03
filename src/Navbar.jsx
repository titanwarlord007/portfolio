import React, { useEffect, useState,useRef } from "react";
import HamBtn from "./components/HamBtn";
import { NavLink } from "react-router-dom";
import { links } from "./data";
import profileImg from "../src/images/profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTwitter,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useGlobalContext } from "./components/Context";

export default function Navbar() {
    const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const[ height,setHeight]=useState(null)
  const { isOpen } = useGlobalContext()
  
//     useEffect(() => {
//       const linksHeight = linksRef.current.getBoundingClientRect().height;
//       // if (showLinks) {
//       //   linksContainerRef.current.style.height = `${linksHeight}px`;
//       // } else {
//       //   linksContainerRef.current.style.height = "0px";
//       // }
// setHeight(linksHeight)
//       console.log(height)
//     }, [height]);
  
  return (
    <nav className="nav">
      <HamBtn />
      <div id="hidden-desktop"  className={`ham-menu ${isOpen&&'show'}`}>
        <div className="ham-profile">
        <div className="profile-photo">
          <img src={profileImg} alt="profileimage" />
        </div>
        <h2 style={{ fontSize: "3rem" }}>chisom okereke</h2>
        <h4>frontend developer</h4>
        <div className="tel-no">
          <FaPhoneAlt /> : +234 701 438 5856
        </div>
        <div className="email lowercase">
          <FaEnvelope /> :{" "}
          <a href="mailto:chisomwebdev@outlook.com">chisomwebdev@outlook</a>
        </div>

        </div>
        <ul className="ham-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return <li key={id}><NavLink  to={url}>{ text}</NavLink></li>;
          })}
        </ul>
      </div>
      {/* <div className="nav-link-container">

      </div> */}
      <ul id="hidden-tab" className="nav-links " ref={linksRef}>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="link-container" key={id}>
              <NavLink className="link fade-in" to={url}>
                {icon}
              </NavLink>
              <p className="link-text">{text}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
