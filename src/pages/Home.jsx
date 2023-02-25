import React from "react";
import profileImg from "../images/profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io5";
function Home() {
  return (
    <div className="xl-container">
      <div
        id="hidden-tab"
        className="profile flex-col text-center no-white-space capitalize"
      >
        <div className="profile-photo">
          <img src={profileImg} alt="profileimage" />
        </div>
        <br />
        <h2 style={{ fontSize: "3rem" }}>chisom okereke</h2>
        <h4>frontend developer</h4>
        <br />
        <div className="icon-container">
          <a href="">
            <IoLogoLinkedin className="icon linkedin" />
          </a>
          <a href="">
            <FaTwitter className="icon twitter" />
          </a>
          <a href="">
            <FaFacebookSquare className="icon facebook" />
          </a>
        </div>
      </div>

      <div className="container capitalize text-center center ">
        <h1>chisom okereke</h1>
        <h3>frontend developer</h3>
        <div className="icon-container">
          <FaHtml5 className="icon html5" />
          <FaCss3Alt className="icon css3" />
          <IoLogoJavascript className="icon js" />
          <FaReact className="icon react" />
        </div>
      </div>
    </div>
  );
}

export default Home;
