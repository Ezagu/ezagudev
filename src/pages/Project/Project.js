import React from 'react';
import { Link, useParams } from 'react-router';
import projects from '../../data/projects';
import './Project.css';

export const Project = () => {
  
  const {projectId} = useParams();
  const matchingProject = projects.find((project) => (project.id === projectId));
  
  return (
    <div className='project-page'>
      <Link 
        to='/#projects' 
        className='back-link'
      >&lt; Projects</Link>
      
      <div className='project-img'>
        <img 
          src={`../${matchingProject.img}`}
          alt={`${matchingProject.nombre} screenshot`}
        />
      </div>

      <h1 className='project-title'>{matchingProject.nombre}</h1>

      <p className='project-desc'>{matchingProject.desc}</p>

      <div className='project-tecs-container'>
        {
          matchingProject.tecs.map((tec,i) => (
            <div key={i} className='tec'>{tec}</div>
          ))
        }
      </div>

      <div className='project-buttons-container'>
        {
          matchingProject.git &&
          <a 
            className='button'
            href={matchingProject.git}
            rel='noreferrer'
            target='_blank'
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
            target='_blank'
          >
            Link &gt;
          </a>
        }
      </div>
      
      
    </div>
  )
}
