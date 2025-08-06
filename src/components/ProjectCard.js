import React from 'react'
import { Link } from 'react-router'

export const ProjectCard = ({nombre, img, desc, tecs, id}) => {
  return (
    <article className='project'>
      <div className='project-img'>
        <img src={img} alt={nombre + 'screenshot'}/>
      </div>
      <h3 className='project-title'>{nombre}</h3>
      <p className='project-desc'>{desc}</p>
      <div className='project-tec'>
        {
          tecs.map((tec, j) => (
            <div className='tec' key={j}>{tec}</div>
          ))
        }
      </div>
      <Link
        className='button project-button'
        to={`/projects/${id}`}
      >
        Conoce más &gt;
      </Link>
    </article>
  )
}
