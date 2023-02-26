import React from "react";
import profileImg from "../images/profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTwitter,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io5";
function Home() {
  return (
    <div className="xl-container">
      <div
        id="hidden-tab"
        className="profile fade-in flex-col text-center no-white-space capitalize">
        <div className="profile-photo">
          <img src={profileImg} alt="profileimage" />
        </div>
        <br />
        <h2 style={{ fontSize: "3rem" }}>chisom okereke</h2>
        <h4>frontend developer</h4>
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
        <div className="tel-no">
          <FaPhoneAlt /> : +234 701 438 5856
        </div>
        <div className="email lowercase">
          <FaEnvelope /> :{" "}
          <a href="mailto:chisomwebdev@outlook.com">chisomwebdev@outlook</a>
        </div>
      </div>

      <div className="home container capitalize text-center center ">
        <div>
          <h1 className="typed typed-1">chisom okereke</h1>
          <h3 className="typed typed-2">frontend developer</h3>
          <br />
          <div className="icon-container fade-in">
            <div className="flex-col">
              <FaHtml5 className="icon html5" />
              <p>html</p>
            </div>
            <div className="flex-col">
              <FaCss3Alt className="icon css3" />
              <p>css</p>
            </div>
            <div className="flex-col">
              <IoLogoJavascript className="icon js" />
              <p>javascript</p>
            </div>
            <div className="flex-col">
              <FaReact className="icon react" />
              <p>react</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
