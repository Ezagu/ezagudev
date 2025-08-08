import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router';
import { Project } from '../pages/Project/Project.js'
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
