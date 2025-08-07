import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-page' id='contact'>
      <h1 className='page-title'>Contact</h1>
      <p className='page-desc'>Querés trabajar conmigo? Estoy abierto a nuevas oportunidades laborales o colaboraciones. No dudes en escribirme!</p>

      <div className='contact-content'>
        <div className='info-contact'>
          <h2 className='contact-area-title'>Información</h2>
          <div className='info-body'>

            <h3 className='contact-label-item'>
              Email
            </h3>
            <div className='info-item'>
              agustincalpedm@gmail.com
            </div>

            <h3 className='contact-label-item'>
              Telefono
            </h3>
            <div className='info-item'>
              +54 11 2587-5034
            </div>

            <h3 className='contact-label-item'>
              Ubicacion
            </h3>
            <div className='info-item'>
              Merlo, Buenos Aires, Argentina
            </div>

            <a 
              href='https://www.github.com/Ezagu' 
              target='_blank' 
              rel='noreferrer'
              className='button info-button'
            >
              Github &gt;
            </a>

            <a
              href='https://www.linkedin.com/in/agustin-calpe/' 
              target='_blank' 
              rel='noreferrer'
              className='button info-button'
            >
              Linkedin &gt;
            </a>
          </div>
        </div>
        <form className='form'>
          <h2 className='contact-area-title'>Envíame un mensaje</h2>

          <label className='contact-label-item'>Nombre
            <input type='text' className='input'/>
          </label>

          <label className='contact-label-item'>Email
            <input type='email' className='input'/>
          </label>

          <label className='contact-label-item'>Asunto
            <input type='text' className='input'/>
          </label>

          <label className='contact-label-item'>Mensaje
            <textarea className='input'></textarea>
          </label>

          <input 
            type='submit' 
            value='ENVIAR' 
            className='input button form-submit'/>
        </form>
      </div>
    </div>
  )
}
