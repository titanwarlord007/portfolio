import React from 'react'
import { links, projects } from '../data'
import img from "../assets/images/zuri-registration-form_img.png";
import { Img } from "react-image";

function Portfolio() {
  return (
    <div className="container portfolio">
      <ul className='projects grid'>
        {projects.map((project, index) => {
          const {url,text, image}=project
          return (
            <li key={index} className="">
              <Img className="project-img card " src={image} />
            </li>
          );
        })}
     </ul>

    </div>
  )
}

export default Portfolio