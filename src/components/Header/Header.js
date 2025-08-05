import React from 'react';
import { NavLink, Link } from 'react-router';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <h2 className='header-title'><Link to='/home'>&lt;Ezagu /&gt;</Link></h2>
      <nav>
        <ul className='nav-list'>
          <li>
            <button className='nav-button'>
              <NavLink to='/home'>Home</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink to='/projects'>Projects</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink to='/skills'>Skills</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink to='/curriculum'>Curriculum</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink to='/contact'>Contact</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
