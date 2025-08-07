import React from 'react'
import './Skills.css'
import skills from '../../data/skills.js'

export const Skills = () => {
  return (
    <div className='skills-page' id='skills'>

      <h1 className='page-title'>Skills</h1>

      <p className='page-desc'>Estas son algunas de las tecnologías y herramientas que manejo. Siempre estoy explorando nuevas formas de mejorar y mantenerme actualizado en el mundo del desarrollo.</p>

      <section className='skills-content'>
        {
          skills.map((area, i) => (
            <article className='skills-area' key={i}>
              <h2 className='skills-area-title'>{area.area}</h2>
              <div className='skill-container'>
                {
                  area.items.map((skill) => (
                    <div className='skill' key={skill.id}>
                      <img 
                        className='skill-icon'
                        src={skill.img}
                        alt={`${skill.nombre} icon`}
                      />
                      <h3 className='skill-name'>{skill.nombre}</h3>
                    </div>
                  ))
                }
              </div>
            </article>
          ))
        }
      </section>
    </div>
  )
}
