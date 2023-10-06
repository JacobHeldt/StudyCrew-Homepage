import React from 'react'
import './Project.css';
import project_image from '../../assets/project-image.jpg';

const Project = () => {
  return (
    <div className='project-main-div'>
        <div className='project-left-column'>
            <div className='project-text'>
                <h3 className='mission-header white-text-color'>OUR PROJECT</h3>
                <h2 className='mission-header white-text-color slogan'>Transforming Education Together.</h2>
                <p className='mission-text white-text-color'>
                Dedicated to transforming the educational landscape, our platform prioritizes accessibility, collaboration, and engagement. 
                We are committed to ensure quality education is in everyone’s reach. Together, we’re constructing a platform that emphasizes collaborative learning. 
                Embracing the spirit of collective knowledge and democratizing learning, our project is open-source, ensuring continuous innovation and community-driven enhancements.
                </p>
            </div>
        </div>
        <div className='project-right-column'>
            <img src={project_image} className='project-image'>
            </img>
            <div className="project-image-subtitle">
              <div>
              “Every student deserves a dynamic and engaging educational experience. Let's build it together.”
              </div>
              <div className='project-subtitle-name'>
                - Jacob, Founder of StudyCrew
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project