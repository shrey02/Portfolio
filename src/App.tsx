import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/Project/Projects';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';


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
    <ScrollToTop/>
    </div>
  );
}

export default App;
