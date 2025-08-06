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
            <NavLink 
              to='/home' 
              className={({isActive}) => isActive ? 'link active' : 'link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/projects'
              className={({isActive}) => isActive ? 'link active' : 'link'}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/skills'
              className={({isActive}) => isActive ? 'link active' : 'link'}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/contact'
              className={({isActive}) => isActive ? 'link active' : 'link'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
