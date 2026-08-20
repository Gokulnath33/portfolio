import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  ChevronDown,
  FileText
} from 'lucide-react';
import { Linkedin, Github, TwitterX, LeetCode, HackerRank } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import GokulLogo from './GokulLogo';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing effect for taglines
  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText === currentTagline) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="badge badge-cyan flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-ping" />
                Available for Roles & Internships
              </div>
              <div className="glass-pill text-[var(--accent-violet)]">
                <GraduationCap className="w-4 h-4 text-[var(--accent-violet)]" />
                <span>Mepco Schlenk Engineering College</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-[var(--text-muted)] font-mono mb-2">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-4">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="text-2xl sm:text-3xl font-bold h-12 flex items-center text-[var(--text-main)]">
                <span className="text-[var(--accent-cyan)] mr-2">&gt;</span>
                <span className="vibrant-text border-r-2 border-[var(--accent-pink)] pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
              Ambitious 3rd-year B.Tech AI & Data Science student (<span className="text-[var(--accent-cyan)] font-semibold">8.3 CGPA</span>) specializing in machine learning, full-stack web engineering, and intuitive UI/UX design. Eager to solve complex challenges with data-driven code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#resume" className="btn-secondary text-[var(--accent-cyan)] border-[rgba(6,182,212,0.3)] hover:bg-[rgba(6,182,212,0.1)]">
                <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>View Resume</span>
              </a>

              <a href="#certificates" className="btn-secondary text-[var(--accent-amber)] border-[rgba(245,158,11,0.3)] hover:bg-[rgba(245,158,11,0.1)]">
                <Download className="w-4 h-4 text-[var(--accent-amber)]" />
                <span>Certificates & Bundle</span>
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail className="w-4 h-4 text-[var(--accent-pink)]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Coding Platform Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-color)] w-full">
              <span className="text-xs text-[var(--text-dim)] uppercase tracking-wider font-mono font-bold">
                Profiles:
              </span>

              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:scale-110 transition-all duration-300 shadow-md"
                  title="LinkedIn (gokulnathm33)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-violet)] hover:border-[var(--accent-violet)] hover:scale-110 transition-all duration-300 shadow-md"
                  title="GitHub (Gokulnath33)"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-amber-400 hover:border-amber-400 hover:scale-110 transition-all duration-300 shadow-md"
                  title="LeetCode Profile"
                >
                  <LeetCode className="w-5 h-5 text-amber-400" />
                </a>

                <a
                  href={personalInfo.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-emerald-400 hover:border-emerald-400 hover:scale-110 transition-all duration-300 shadow-md"
                  title="HackerRank Profile"
                >
                  <HackerRank className="w-5 h-5 text-emerald-400" />
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-sky-400 hover:border-sky-400 hover:scale-110 transition-all duration-300 shadow-md"
                  title="X / Twitter (@Gokulnath2006mg)"
                >
                  <TwitterX className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono ml-auto">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span>Paramakudi, TN</span>
              </div>
            </div>

          </div>

          {/* Right Hero Graphic & Profile Highlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glowing Border Frame */}
              <div 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-pink)] opacity-60 blur-xl animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              {/* Glass Hero Card */}
              <div className="relative glass-card p-8 rounded-3xl border border-[var(--border-glow)] overflow-hidden flex flex-col items-center text-center">
                
                {/* Glowing Avatar Shield */}
                <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)] via-amber-500 to-[var(--accent-pink)] p-1 animate-spin" style={{ animationDuration: '16s' }} />
                  <div className="relative z-10 w-[94%] h-[94%] rounded-full overflow-hidden flex items-center justify-center">
                    <GokulLogo className="w-full h-full" size={150} showGlow={false} />
                  </div>
                  
                  {/* Floating Micro Badge */}
                  <div className="absolute -bottom-1 -right-1 z-20 bg-[var(--accent-emerald)] text-black p-2 rounded-full shadow-lg border-2 border-[var(--bg-primary)]">
                    <Sparkles className="w-4 h-4 animate-bounce" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-1 text-[var(--text-main)]">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-[var(--accent-cyan)] mb-4 uppercase tracking-wider">
                  B.Tech AI & Data Science
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-3 w-full my-4">
                  <div className="p-3 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)]">
                    <div className="text-xl font-extrabold text-[var(--accent-cyan)] font-mono">8.3</div>
                    <div className="text-[10px] text-[var(--text-muted)] font-medium uppercase">CGPA</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)]">
                    <div className="text-xl font-extrabold text-[var(--accent-violet)] font-mono">50+</div>
                    <div className="text-[10px] text-[var(--text-muted)] font-medium uppercase">Certs & Badges</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)]">
                    <div className="text-xl font-extrabold text-[var(--accent-pink)] font-mono">2 Mon</div>
                    <div className="text-[10px] text-[var(--text-muted)] font-medium uppercase">Internship</div>
                  </div>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <span className="badge badge-cyan text-[11px]">Python & Java</span>
                  <span className="badge badge-violet text-[11px]">Machine Learning</span>
                  <span className="badge badge-emerald text-[11px]">UI/UX Design</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors group cursor-pointer"
      >
        <span className="font-mono">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[var(--accent-cyan)]" />
      </a>
    </section>
  );
}
