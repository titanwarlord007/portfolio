import React, { useEffect, useState } from "react";
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

export default function Navbar() {
  // console.clear()
  return (
    <nav className="nav">
      <HamBtn />
      <div className="ham-menu flex-col">
        <div className="profile-photo">
          <img src={profileImg} alt="profileimage" />
        </div>
        <h2 style={{ fontSize: "3rem" }}>chisom okereke</h2>
        <h4>frontend developer</h4>
        <ul className="ham-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return <li key={id}><NavLink to={url}>{ text}</NavLink></li>;
          })}
        </ul>
        <div className="tel-no">
          <FaPhoneAlt /> : +234 701 438 5856
        </div>
        <div className="email lowercase">
          <FaEnvelope /> :{" "}
          <a href="mailto:chisomwebdev@outlook.com">chisomwebdev@outlook</a>
        </div>
      </div>
      <ul id="hidden-tab" className="nav-links ">
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
