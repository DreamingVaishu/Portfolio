import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <ScrollProgress />
      <Navbar />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;