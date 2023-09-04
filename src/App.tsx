import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/Project/Projects';
import { Contact } from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className=''>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
