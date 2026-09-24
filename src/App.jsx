import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="editorial-portfolio-app">
      <Navbar />
      <main>
        {/* 1. INTRODUCTION */}
        <Hero />
        {/* 2. ABOUT ME */}
        <About />
        {/* 3. ACADEMICS */}
        <Academics />
        {/* 4. SKILLS & TECHNOLOGIES */}
        <Skills />
        {/* 5. FEATURED PROJECTS & MORE WORK */}
        <Projects />
        {/* 6. HACKATHONS & ACHIEVEMENTS */}
        <Journey />
        {/* 7. CERTIFICATIONS & LEARNING */}
        <Certifications />
        {/* 8. INTERESTS & SPECIALIZATIONS */}
        <Interests />
        {/* 9. GET IN TOUCH / CONTACT */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
