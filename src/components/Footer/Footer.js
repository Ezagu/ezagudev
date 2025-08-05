import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} - Hecho con 💖 por Ezagu - <a href="https://github.com/Ezagu" target="_blank" rel="noreferrer">github page</a></p>
    </footer>
  )
}
