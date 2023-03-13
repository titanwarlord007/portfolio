import React from 'react'
import { skills, projects } from '../data'
import img from "../assets/images/zuri-registration-form_img.png";
import { Img } from "react-image";

function Projects() {
  return (
    <div className="container projects">
      <div className='project-item grid'>
        {projects.map((project, index) => {
          const {url,text, image,description,tools}=project
          return (
            <div key={index} className="item">
              <div className="overlay">
                <p>
                  <span className="accent">Description:</span> {description}
                </p><br />
                <div className="tools flex-wrap">
                  <span className="accent">Tools:</span>
                  {tools.map((tool,index) => {
                    return <p key={index} className='card'>{tool }</p>
                  })}
                </div>
              </div>
              <Img className="project-img card " src={image} />
              <p>{text}</p>
            </div>
          );
        })}
     </div>

    </div>
  )
}

export default Projects