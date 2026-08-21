import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-[90] group flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl text-[var(--accent-cyan)] shadow-lg transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-50 pointer-events-none'
      } hover:border-[var(--accent-cyan)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-110`}
    >
      {/* Pulsing glow ring on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
      <ArrowUp className="relative z-10 w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
