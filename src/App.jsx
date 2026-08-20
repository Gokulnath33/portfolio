import React, { useState, useEffect } from 'react';
import DynamicBackground from './components/DynamicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import CursorFireTrail from './components/CursorFireTrail';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gokulnath_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gokulnath_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Colorful Interactive Background */}
      <DynamicBackground theme={theme} />

      {/* Cursor Fire Trail Effect */}
      <CursorFireTrail />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackgroundMusic />
      </div>
    </div>
  );
}
