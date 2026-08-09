import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles, Send, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-color)] shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[var(--gradient-brand)] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none font-heading tracking-wide group-hover:text-[var(--accent-cyan)] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[var(--accent-cyan)] font-mono font-medium">
              B.Tech AI & Data Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-card)] backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeSection === link.id
                  ? 'text-white bg-[var(--gradient-brand)] shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-300"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <a
            href="#contact"
            className="btn-primary text-sm !py-2.5 !px-5"
          >
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--accent-cyan)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-[var(--gradient-brand)] text-white font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--border-color)] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center text-center"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
