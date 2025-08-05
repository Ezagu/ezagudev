import React from 'react'
import { Routes, Route } from 'react-router';
import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { Home } from '../pages/Home/Home.js';
import { Projects } from '../pages/Projects/Projects.js';
import { Skills } from '../pages/Skills/Skills.js';
import { Curriculum } from '../pages/Curriculum/Curriculum.js';
import { Contact } from '../pages/Contact/Contact.js';

export const Rutas = () => {
  return (
    <>
      <Header />

      <section className='content-container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>
      
      <Footer />
    </>
  )
}
