import React from 'react'
import './Projects.css'

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
        <article className='project'>
          <div className='project-img'>
            <img src='/images/projects/mechanography.png' alt=''/>
          </div>
          <h3 className='project-title'>Mechanography</h3>
          <p className='project-desc'>Test de cuan rápido escribes</p>
          <div className='project-tec'>
            <div className='tec'>html</div>
            <div className='tec'>css</div>
            <div className='tec'>javascript</div>
          </div>
          <button className='button project-button'>Conoce más &gt;</button>
        </article>

        <article className='project'>
          <div className='project-img'>
            <img src='/images/projects/mechanography.png' alt=''/>
          </div>
          <h3 className='project-title'>Mechanography</h3>
          <p className='project-desc'>Test de cuan rápido escribes</p>
          <div className='project-tec'>
            <div className='tec'>html</div>
            <div className='tec'>css</div>
            <div className='tec'>javascript</div>
          </div>
          <button className='button project-button'>Conoce más &gt;</button>
        </article>

        <article className='project'>
          <div className='project-img'>
            <img src='/images/projects/mechanography.png' alt=''/>
          </div>
          <h3 className='project-title'>Mechanography</h3>
          <p className='project-desc'>Test de cuan rápido escribes</p>
          <div className='project-tec'>
            <div className='tec'>html</div>
            <div className='tec'>css</div>
            <div className='tec'>javascript</div>
          </div>
          <button className='button project-button'>Conoce más &gt;</button>
        </article>

        <article className='project'>
          <div className='project-img'>
            <img src='/images/projects/mechanography.png' alt=''/>
          </div>
          <h3 className='project-title'>Mechanography</h3>
          <p className='project-desc'>Test de cuan rápido escribes</p>
          <div className='project-tec'>
            <div className='tec'>html</div>
            <div className='tec'>css</div>
            <div className='tec'>javascript</div>
          </div>
          <button className='button project-button'>Conoce más &gt;</button>
        </article>
      </section>
    </div>
  )
}
