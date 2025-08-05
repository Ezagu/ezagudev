import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <h2 className='header-title'> &lt;Ezagu /&gt; </h2>
      <nav>
        <ul className='nav-list'>
          <li>
            <button className='nav-button'>Projects</button>
          </li>
          <li>
            <button className='nav-button'>Skills</button>
          </li>
          <li>
            <button className='nav-button'>Curriculum</button>
          </li>
          <li>
            <button className='nav-button'>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
