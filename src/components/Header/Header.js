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
              <NavLink 
                to='/home' 
                className={({isActive}) => isActive ? 'active' : ''}
              >Home</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink 
                to='/projects'
                className={({isActive}) => isActive ? 'active' : ''}
              >Projects</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink
                to='/skills'
                className={({isActive}) => isActive ? 'active' : ''}
              >Skills</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink 
                to='/curriculum'
                className={({isActive}) => isActive ? 'active' : ''}
              >Curriculum</NavLink>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <NavLink 
                to='/contact'
                className={({isActive}) => isActive ? 'active' : ''}
              >Contact</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
