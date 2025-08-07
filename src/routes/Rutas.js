import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router';
import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { Home } from '../pages/Home/Home.js';
import { Projects } from '../pages/Projects/Projects.js';
import { Project } from '../pages/Project/Project.js'
import { Skills } from '../pages/Skills/Skills.js';
import { Contact } from '../pages/Contact/Contact.js';
import App from '../App.js';

export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/projects/:projectId' element={<Project />} />
        </Routes>   
      </BrowserRouter>   
    </>
  )
}
