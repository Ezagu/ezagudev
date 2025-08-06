import React, { useState } from 'react';
import './Projects.css';
import projects from '../../data/projects.js';
import { ProjectCard } from '../../components/ProjectCard.js';

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
      const newFilters = filtersActive.filter((f) => (f !== filter));
      setFiltersActive(newFilters);
    } else {
      setFiltersActive(prev => ([...prev, filter]));
    }
  };

  return (
    <div className='projects-page'>

      <h1 className='page-title'>Projects</h1>

      <p className='page-desc'>Algunos de los proyectos en los que estuve trabajando. Desde pequeñas ideas hasta desafíos más complejos, cada uno fue una oportunidad para aprender y crecer como desarrollador.</p>

      <div className='projects-filter'>
        {
          filters.map((filter) => (
            <button 
              className={`tec projects-filter-item ${filtersActive.includes(filter) ? 'projects-filter-item-active' : ''}`}
              onClick={() => {toggleFilter(filter)}}
              key={filter}
            > 
              {filter}
            </button>
          ))
        }
      </div>

      <section className='projects-container'>
        {
          projectsFiltered.map((project, i) => (
            <ProjectCard
              nombre={project.nombre}
              img={project.img}
              desc={project.desc_short}
              tecs={project.tecs}
              id={project.id}
              key={i}
            />
          ))
        }
      </section>
      
    </div>
  )
}
