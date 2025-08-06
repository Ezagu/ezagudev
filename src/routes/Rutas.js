import React from 'react'
import { Routes, Route } from 'react-router';
import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { Home } from '../pages/Home/Home.js';
import { Projects } from '../pages/Projects/Projects.js';
import { Project } from '../pages/Project/Project.js'
import { Skills } from '../pages/Skills/Skills.js';
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
          <Route path='/projects/:projectId' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>
      
      <Footer />
    </>
  )
}
