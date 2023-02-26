import React from 'react'
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/portfolio",
    text: "portfolio",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];
