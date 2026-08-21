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
import WelcomeSplash from './components/WelcomeSplash';
import ScrollProgress from './components/ScrollProgress';
import GlobalTilt from './components/GlobalTilt';
import ClickConfetti from './components/ClickConfetti';
import BackToTop from './components/BackToTop';
import VideoFrameFX from './components/VideoFrameFX';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gokulnath_portfolio_theme') || 'dark';
  });
  const [showSplash, setShowSplash] = useState(() => {
    // Show the welcome splash once per browser session
    return !sessionStorage.getItem('gokulnath_splash_shown');
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('gokulnath_splash_shown', 'true');
    setShowSplash(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gokulnath_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Welcome Splash Greeting */}
      {showSplash && <WelcomeSplash onComplete={handleSplashComplete} />}

      {/* Colorful Interactive Background */}
      <DynamicBackground theme={theme} />

      {/* Cursor Fire Trail Effect */}
      <CursorFireTrail />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Global 3D Tilt on cards */}
      <GlobalTilt />

      {/* Click Confetti Bursts */}
      <ClickConfetti />

      {/* Back To Top Button */}
      <BackToTop />

      {/* Video Frame Effects (4 corners + traveling edges) */}
      <VideoFrameFX />

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
