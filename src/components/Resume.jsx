import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Download,
  Eye,
  X,
  ExternalLink,
  FileCheck,
  Layers,
  Sparkles,
  ArrowDownToLine,
  BookOpen
} from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolioData';

/* ───────── Resume card accent map ───────── */
const CARD_ACCENTS = [
  {
    gradient: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.35)',
    text: '#06b6d4',
    glow: '0 0 32px rgba(6,182,212,0.3)',
    icon: <Layers className="w-6 h-6" />
  },
  {
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.35)',
    text: '#8b5cf6',
    glow: '0 0 32px rgba(139,92,246,0.3)',
    icon: <FileCheck className="w-6 h-6" />
  }
];

export default function Resume() {
  const [viewerResume, setViewerResume] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef({});

  // IntersectionObserver for card entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.resumeId]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    Object.values(cardRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3D tilt handler
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardEl.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return;
    cardEl.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Floating accent particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', top: '5%', right: '-5%', animationDuration: '7s' }} />
        <div className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', bottom: '10%', left: '-5%', animationDuration: '9s' }} />
      </div>

      <div className="container relative z-10">

        {/* ═══ Section Header ═══ */}
        <div className="text-center mb-12">
          <div className="section-subtitle">
            <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Professional Resume</span>
          </div>
          <h2 className="section-title">
            My <span className="vibrant-text">Resume</span>
          </h2>
          <span className="section-title-bar" />
          <p className="section-description">
            Download my resume to explore my qualifications, technical skills, project experience, and professional achievements.
          </p>
        </div>

        {/* ═══ Resume Cards ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeData.map((resume, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            const isVisible = visibleCards.has(resume.id);

            return (
              <div
                key={resume.id}
                data-resume-id={resume.id}
                ref={el => { cardRefs.current[resume.id] = el; }}
                className="group relative rounded-3xl overflow-hidden border transition-all duration-500"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
                    : 'perspective(800px) translateY(40px) scale(0.95)',
                  transitionDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity'
                }}
                onMouseMove={(e) => handleMouseMove(e, cardRefs.current[resume.id])}
                onMouseLeave={() => handleMouseLeave(cardRefs.current[resume.id])}
              >
                {/* Top gradient stripe */}
                <div className="h-1.5 w-full" style={{ background: accent.gradient }} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    boxShadow: `inset 0 0 40px ${accent.bg}, ${accent.glow}`,
                    borderColor: accent.border
                  }}
                />

                <div className="p-6 sm:p-8 relative z-10 flex flex-col h-full">
                  {/* Icon + Format Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                      style={{
                        background: accent.bg,
                        color: accent.text,
                        borderColor: accent.border
                      }}
                    >
                      {accent.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                        style={{
                          background: accent.bg,
                          color: accent.text,
                          borderColor: accent.border
                        }}>
                        {resume.format}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[var(--text-dim)] bg-[rgba(255,255,255,0.06)] px-2.5 py-1 rounded-lg">
                        {resume.pages}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-main)] mb-1 group-hover:text-white transition-colors">
                    {resume.title}
                  </h3>
                  <p className="text-xs font-mono mb-3" style={{ color: accent.text }}>
                    {resume.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {resume.description}
                  </p>

                  {/* File info */}
                  <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)]">
                    <FileText className="w-4 h-4 text-[var(--text-dim)] shrink-0" />
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                        {resume.pages}
                      </span>
                      <span className="text-[var(--text-dim)]">•</span>
                      <span>{resume.fileSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--border-color)]">
                    <button
                      onClick={() => setViewerResume(resume)}
                      className="btn-primary text-xs !py-2.5 !px-4 flex-1 justify-center"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Resume</span>
                    </button>
                    <a
                      href={resume.fileUrl}
                      download
                      className="p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2"
                      style={{
                        background: accent.bg,
                        color: accent.text,
                        borderColor: accent.border
                      }}
                      title="Download Resume"
                      onMouseEnter={e => { e.currentTarget.style.background = accent.text; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = accent.bg; e.currentTarget.style.color = accent.text; }}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══ Download All Button ═══ */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href={resumeData[0].fileUrl}
            download
            className="btn-primary group !px-8 !py-4 text-base font-bold shadow-2xl relative overflow-hidden"
          >
            <ArrowDownToLine className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>
          <p className="text-xs text-[var(--text-dim)] font-mono">
            Prefer the {resumeData[0].pages.toLowerCase()} version for detailed overview
          </p>
        </div>
      </div>

      {/* ═══ Fullscreen PDF Viewer Modal ═══ */}
      {viewerResume && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setViewerResume(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden border border-[var(--border-glow)] shadow-2xl flex flex-col"
            style={{ background: 'var(--bg-secondary)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-xl shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm border shrink-0"
                  style={{
                    background: CARD_ACCENTS[resumeData.findIndex(r => r.id === viewerResume.id) % 2].bg,
                    color: CARD_ACCENTS[resumeData.findIndex(r => r.id === viewerResume.id) % 2].text,
                    borderColor: CARD_ACCENTS[resumeData.findIndex(r => r.id === viewerResume.id) % 2].border
                  }}
                >
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-main)] truncate">
                    {viewerResume.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--text-muted)] truncate">
                    {viewerResume.subtitle} • {viewerResume.pages}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={viewerResume.fileUrl}
                  download
                  className="p-2.5 rounded-xl bg-[rgba(6,182,212,0.15)] text-[var(--accent-cyan)] border border-[rgba(6,182,212,0.3)] hover:bg-[rgba(6,182,212,0.25)] transition-colors"
                  title="Download PDF"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href={viewerResume.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[rgba(139,92,246,0.15)] text-[var(--accent-violet)] border border-[rgba(139,92,246,0.3)] hover:bg-[rgba(139,92,246,0.25)] transition-colors"
                  title="Open in New Tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setViewerResume(null)}
                  className="p-2.5 rounded-xl bg-[rgba(239,68,68,0.15)] text-rose-400 border border-[rgba(239,68,68,0.3)] hover:bg-[rgba(239,68,68,0.25)] transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF content viewer */}
            <div className="flex-1 relative bg-[#0f0f1d] flex items-center justify-center overflow-auto p-4">
              <iframe
                src={viewerResume.fileUrl}
                className="w-full h-full border-none rounded-b-2xl"
                title={viewerResume.title}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-pill text-xs text-[var(--text-dim)] opacity-60">
                <FileText className="w-3 h-3" />
                <span>If document preview doesn't load, use download or open buttons above</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
