import React from 'react'
import { Link } from 'react-router'

export const ProjectCard = ({nombre, img, desc, tecs, id}) => {
  return (
    <article className='project-card'>
      <div className='project-card-img'>
        <img src={img} alt={nombre + 'screenshot'}/>
      </div>
      <h2 className='project-card-title'>{nombre}</h2>
      <p className='project-card-desc'>{desc}</p>
      <div className='project-card-tec-container'>
        {
          tecs.map((tec, j) => (
            <div className='tec' key={j}>{tec}</div>
          ))
        }
      </div>
      <Link
        className='button'
        to={`/projects/${id}`}
      >
        Conoce más &gt;
      </Link>
    </article>
  )
}
