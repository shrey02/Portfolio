import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/Projects';


function App() {
  return (
    <div className=''>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <Projects/>
    </div>
  );
}

export default App;
