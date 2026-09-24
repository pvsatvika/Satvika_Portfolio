import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="editorial-portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
