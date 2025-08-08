import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <a href='#home' className='header-title'>&lt;Ezagu /&gt;</a>
        <nav className='header-nav'>
          <ul className='nav-list'>
            <li>
              <a 
                href='#home' 
                className='link'
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href='#projects'
                className='link'
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href='#skills'
                className='link'
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href='#contact'
                className='link'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
