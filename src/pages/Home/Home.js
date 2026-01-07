import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className='home-content' id='home'>
      <h1 className='home-title'>Hola! soy Agustín Calpe 👋</h1>

      <p className='home-desc'>
        <span>Desarrollador web fullstack</span> en formación. Estudio Licenciatura en Informática mientras continúo ampliando mis conocimientos con diversos cursos. Me encuentro en <span>búsqueda activa</span> de mi primer empleo IT, con <span>total disponibilidad</span> y muchas ganas de seguir aprendiendo, crecer profesionalmente y aportar en proyectos reales.
      </p>

      <div className='info'>
        <div className='location'>
          <div className='img-mask'>
            <img src='images/home/icon-location.svg' alt='location' />
          </div>
          <p className='location-text'>Buenos Aires, Argentina</p>
        </div>

        <div className='state'>
          <div className='dot'></div>
          <p className='state-text'>Open to work</p>
        </div>
      </div>
    
      <div className='home-buttons-container'>
        <a 
          href='https://www.github.com/Ezagu' 
          target='_blank' 
          rel='noreferrer'
          className='button'
        >
            Github &gt;
        </a>
        <a 
          href='https://www.linkedin.com/in/agustin-calpe/' 
          target='_blank' 
          rel='noreferrer'
          className='button'
        >
          Linkedin &gt;
        </a>
      </div>
      
      <div className='personal-img-mask'>
        <img src='images/home/agustin-calpe.webp' alt='Agustín Calpe' />
      </div>
    </div>
  )
}
