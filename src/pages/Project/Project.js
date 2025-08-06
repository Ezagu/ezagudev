import React from 'react';
import { Link, useParams } from 'react-router';
import projects from '../../data/projects';
import './Project.css';

export const Project = () => {
  
  const {projectId} = useParams();
  const matchingProject = projects.find((project) => (project.id === projectId));
  
  return (
    <div className='project-page'>
      <Link to='/projects' className='back-link'>&lt; Projects</Link>
      
      <div className='project-img'>
        <img src={`../${matchingProject.img}`}/>
      </div>

      <div className='tecs-container'>
        {
          matchingProject.tecs.map((tec,i) => (
            <div key={i} className='tec'>{tec}</div>
          ))
        }
      </div>

      <div className='buttons-container'>
        {
          matchingProject.git &&
          <a 
              className='button'
              href={matchingProject.git}
              rel='noreferrer'
          >
            Github &gt;
          </a>
        }
        {
          matchingProject.url &&
          <a 
            className='button'
            href={matchingProject.url}
            rel='noreferrer'
          >
            Link &gt;
          </a>
        }
      </div>

      <h1 className='title'>{matchingProject.nombre}</h1>
      
      <p className='desc'>{matchingProject.desc}</p>
    </div>
  )
}
