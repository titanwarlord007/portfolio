import React from "react";
import { FaEnvelope, FaHome, FaSuitcase, FaUser } from "react-icons/fa";


export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome/>,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaUser />,
  },
  {
    id: 3,
    url: "/portfolio",
    text: "portfolio",
    icon: <FaSuitcase />,
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
    icon: <FaEnvelope />,
  },
  //   {
  //     id: 5,
  //     url: "/documents",
  //     text: "documents",
  //     icon: ,
  //   },
];
