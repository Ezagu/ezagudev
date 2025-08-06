import React from 'react'

export const Project = ({nombre, img, desc, tecs, i}) => {
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
      <button className='button project-button'>Conoce más &gt;</button>
    </article>
  )
}
