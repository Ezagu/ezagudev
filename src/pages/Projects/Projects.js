import React, { useState } from 'react';
import './Projects.css';
import projects from '../../data/projects.js';
import { Project } from '../../components/Project.js';

export const Projects = () => {
  let filters = new Set();
  projects.forEach(project => {
    project.tecs.forEach((tec) => {
      filters.add(tec);
    });
  });
  filters = Array.from(filters);

  const [filtersActive, setFiltersActive] = useState([]);

  const projectsFiltered = filtersActive.length === 0
  ? projects
  : projects.filter((project) =>(
    project.tecs.some((tec) => (filtersActive.includes(tec)))
  ));

  
  const toggleFilter = (filter) => {
    if (filtersActive.includes(filter)) {
      const newFilters = filtersActive.filter((f) => (f != filter));
      setFiltersActive(newFilters);
    } else {
      setFiltersActive(prev => ([...prev, filter]));
    }
  };

  return (
    <div className='project-page'>
      <h1 className='page-title'>Projects</h1>
      <p className='page-desc'>Algunos de los proyectos que realicé</p>
      <div className='filter'>
        {
          filters.map((filter) => (
            <button 
              className={`filter-item ${filtersActive.includes(filter) ? 'filter-item-active' : ''}`}
              onClick={() => {toggleFilter(filter)}}
              key={filter}
            > 
              {filter}
            </button>
          ))
        }
      </div>
      <section className='projects'>
        {
          projectsFiltered.map((project, i) => (
            <Project 
              nombre={project.nombre}
              img={project.img}
              desc={project.desc_short}
              tecs={project.tecs}
              key={i}
            />
          ))
        }
      </section>
    </div>
  )
}
