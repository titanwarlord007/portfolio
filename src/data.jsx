import React from "react";
import { FaEnvelope, FaHome, FaSuitcase, FaUser } from "react-icons/fa";


export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome/>,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <FaUser />,
  },
  {
    id: 3,
    url: "/portfolio",
    text: "Portfolio",
    icon: <FaSuitcase />,
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
    icon: <FaEnvelope />,
  },
  //   {
  //     id: 5,
  //     url: "/documents",
  //     text: "documents",
  //     icon: ,
  //   },
];
