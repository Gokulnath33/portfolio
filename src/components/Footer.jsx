import React from 'react';
import { Mail, Phone, ArrowUp, Archive } from 'lucide-react';
import { Linkedin, Github, TwitterX, LeetCode, HackerRank } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import GokulLogo from './GokulLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", colorClass: "hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]" },
    { href: personalInfo.github, icon: Github, label: "GitHub", colorClass: "hover:text-[var(--accent-violet)] hover:border-[var(--accent-violet)]" },
    { href: personalInfo.twitter, icon: TwitterX, label: "X / Twitter", colorClass: "hover:text-sky-400 hover:border-sky-400" },
    { href: personalInfo.leetcode, icon: LeetCode, label: "LeetCode", colorClass: "hover:text-amber-400 hover:border-amber-400" },
    { href: personalInfo.hackerrank, icon: HackerRank, label: "HackerRank", colorClass: "hover:text-emerald-400 hover:border-emerald-400" },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", colorClass: "hover:text-[var(--accent-pink)] hover:border-[var(--accent-pink)]" },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-12 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] overflow-hidden">
      {/* Top Colorful Animated Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] via-[var(--accent-pink)] to-[var(--accent-emerald)] animate-pulse" />

      {/* Decorative background orbs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--accent-cyan)] opacity-5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[var(--accent-pink)] opacity-5 blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Top Row: Brand + Quick Nav + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pb-10 border-b border-[var(--border-color)]">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <GokulLogo className="w-12 h-12" size={48} />
              <div>
                <span className="font-extrabold text-xl font-heading tracking-wide text-[var(--text-main)] block leading-none">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] font-mono text-[var(--accent-cyan)] tracking-widest uppercase">
                  AI & Data Science Engineer
                </span>
              </div>
            </a>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              B.Tech AI & Data Science @ Mepco Schlenk Engineering College. Building intelligent, impactful, and beautiful digital solutions.
            </p>

            {/* Certificate Bundle Download */}
            <a
              href={personalInfo.zipBundleUrl}
              download="Gokulnath_M_Certificates_Bundle.zip"
              className="glass-pill !py-2.5 !px-4 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] transition-all w-fit group mt-1"
            >
              <Archive className="w-3.5 h-3.5 text-amber-400 group-hover:animate-bounce" />
              <span className="text-xs">Download All Certificates</span>
            </a>
          </div>

          {/* Quick Nav Links Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-1">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors font-medium flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-1">Get In Touch</h4>
            <a href={`mailto:${personalInfo.email}`} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-2 font-medium">
              <Mail className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phoneRaw}`} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors flex items-center gap-2 font-medium">
              <Phone className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" />
              <span>{personalInfo.phone}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              {socialLinks.map(({ href, icon: Icon, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`w-9 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] ${colorClass} hover:scale-110 transition-all duration-300 shadow-md`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[var(--text-dim)] text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-[var(--text-muted)]">{personalInfo.name}</span>. All rights reserved. Built with <span className="text-rose-500">❤️</span> React, TailwindCSS & EmailJS.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors group"
            title="Back to Top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-cyan)] group-hover:bg-[rgba(6,182,212,0.1)] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
