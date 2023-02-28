import React, { useEffect, useState } from 'react'
import HamBtn from './components/HamBtn'
import { links } from './data';

export default function Navbar() {
// console.clear()
  return (
    <nav className='nav'>
      <HamBtn />
      <ul className="nav-links">
        {links.map(link => {
          const {id,url,text,icon}=link
         return <li key={id}>{icon}</li>
        })}
      </ul>
    </nav>
  );
}
