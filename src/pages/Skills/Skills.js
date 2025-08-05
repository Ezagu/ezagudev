import React from 'react'
import './Skills.css'

export const Skills = () => {
  return (
    <div className='skill-page'>
      <h1 className='page-title'>Skills</h1>
      <p className='page-desc'>Las habilidades, herramientas y tecnologías en las que soy bueno</p>
      <section className='skill-content'>
        <article className='skill-area'>
          <h2 className='area-title'>Frontend</h2>
          <div className='skill-container'>
            <div className='skill'>
              <img className='skill-icon' src='images/skills/html.svg'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
          </div>
        </article>

        <article className='skill-area'>
          <h2 className='area-title'>Backend</h2>
          <div className='skill-container'>
            <div className='skill'>
              <img className='skill-icon' src='images/skills/html.svg'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
          </div>
        </article>

        <article className='skill-area'>
          <h2 className='area-title'>Herramientas</h2>
          <div className='skill-container'>
            <div className='skill'>
              <img className='skill-icon' src='images/skills/html.svg'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
            <div className='skill'>
              <img className='skill-icon'/>
              <h3 className='skill-name'>HTML</h3>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
