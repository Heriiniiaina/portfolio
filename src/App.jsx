import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div>
        <Navbar/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
      </div>
    </>
  )
}

export default App
