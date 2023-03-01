import React, { useEffect, useState } from 'react'
import HamBtn from './components/HamBtn'
import {NavLink} from 'react-router-dom'
import { links } from './data';

export default function Navbar() {
// console.clear()
  return (
    <nav className="nav">
      <HamBtn />
      <ul id="hidden-tab" className="nav-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="link-container" key={id}>
              <NavLink className="link" to={url}>
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
