import React from 'react';
import './Projects.css';
import projects from '../../data/projects.js';

console.log(projects);

export const Projects = () => {
  return (
    <div className='project-page'>
      <h1 className='page-title'>Projects</h1>
      <p className='page-desc'>Algunos de los proyectos que realicé</p>
      <div className='filter'>
        <button className='filter-item filter-item-active'>Javascript</button>
        <button className='filter-item'>Html</button>
        <button className='filter-item'>Css</button>
        <button className='filter-item'>React</button>
      </div>
      <section className='projects'>
        {
          projects.map((project, i) => (
            <article className='project' key={i}>
              <div className='project-img'>
                <img src={project.img} alt={project.nombre + 'screenshot'}/>
              </div>
              <h3 className='project-title'>{project.nombre}</h3>
              <p className='project-desc'>{project.desc_short}</p>
              <div className='project-tec'>
                {
                  project.tecs.map((tec) => (
                    <div className='tec'>{tec}</div>
                  ))
                }
              </div>
              <button className='button project-button'>Conoce más &gt;</button>
            </article>
          ))
        }
      </section>
    </div>
  )
}
