import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Award,
  Download,
  Eye,
  X,
  ChevronRight,
  Filter,
  ExternalLink,
  FileText,
  Sparkles,
  Trophy,
  Building2,
  Star,
  ArrowDownToLine,
  Search,
  GraduationCap
} from 'lucide-react';
import { Linkedin, Github, TwitterX, LeetCode, HackerRank } from './BrandIcons';
import { certificationsData, personalInfo } from '../data/portfolioData';

/* ───────── issuer color map ───────── */
const ISSUER_COLORS = {
  'Infosys Springboard': {
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.35)',
    text: '#60a5fa',
    glow: '0 0 25px rgba(59,130,246,0.3)'
  },
  'TCS iON': {
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.35)',
    text: '#a78bfa',
    glow: '0 0 25px rgba(139,92,246,0.3)'
  },
  'Google': {
    gradient: 'linear-gradient(135deg, #f59e0b, #ea580c, #ef4444, #22c55e, #3b82f6)',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.35)',
    text: '#fbbf24',
    glow: '0 0 25px rgba(245,158,11,0.3)'
  },
  'Microsoft & LinkedIn': {
    gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.35)',
    text: '#22d3ee',
    glow: '0 0 25px rgba(6,182,212,0.3)'
  },
  'Simplilearn': {
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    bg: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.35)',
    text: '#f472b6',
    glow: '0 0 25px rgba(236,72,153,0.3)'
  },
  'NPTEL & Academics': {
    gradient: 'linear-gradient(135deg, #10b981, #047857)',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.35)',
    text: '#34d399',
    glow: '0 0 25px rgba(16,185,129,0.3)'
  },
  'IEEE': {
    gradient: 'linear-gradient(135deg, #f97316, #c2410c)',
    bg: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.35)',
    text: '#fb923c',
    glow: '0 0 25px rgba(249,115,22,0.3)'
  },
  'IIT Bombay': {
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    bg: 'rgba(234,179,8,0.12)',
    border: 'rgba(234,179,8,0.35)',
    text: '#facc15',
    glow: '0 0 25px rgba(234,179,8,0.3)'
  }
};

/* ───────── Animated counter hook ───────── */
function useCounter(target, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

/* ───────── Main Component ───────── */
export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewerCert, setViewerCert] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const cardRefs = useRef({});

  // Build categories with counts
  const categories = useMemo(() => {
    const catMap = {};
    certificationsData.forEach(c => {
      catMap[c.category] = (catMap[c.category] || 0) + 1;
    });
    return [
      { name: 'All', count: certificationsData.length },
      ...Object.entries(catMap).map(([name, count]) => ({ name, count }))
    ];
  }, []);

  // Filter certificates
  const filteredCerts = useMemo(() => {
    return certificationsData.filter(c => {
      const matchCategory = activeCategory === 'All' || c.category === activeCategory;
      const matchSearch = !searchQuery ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Stats
  const uniqueProviders = useMemo(() => {
    return new Set(certificationsData.map(c => c.category)).size;
  }, []);
  const eliteCount = useMemo(() => {
    return certificationsData.filter(c =>
      c.score.toLowerCase().includes('elite') ||
      c.score.toLowerCase().includes('distinction') ||
      c.score.toLowerCase().includes('professional')
    ).length;
  }, []);

  const totalCount = useCounter(certificationsData.length, 1800, statsVisible);
  const providerCount = useCounter(uniqueProviders, 1400, statsVisible);
  const eliteAnimated = useCounter(eliteCount, 1600, statsVisible);

  // IntersectionObserver for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.certId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(cardRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredCerts]);

  // 3D tilt handler
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardEl.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return;
    cardEl.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const getColor = (category) => ISSUER_COLORS[category] || ISSUER_COLORS['IEEE'];

  return (
    <section id="certificates" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Floating accent particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', top: '10%', left: '-5%', animationDuration: '6s' }} />
        <div className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #ec4899, transparent)', bottom: '5%', right: '-8%', animationDuration: '8s' }} />
        <div className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', top: '50%', left: '40%', animationDuration: '7s' }} />
      </div>

      <div className="container relative z-10">

        {/* ═══ Section Header ═══ */}
        <div className="text-center mb-12">
          <div className="section-subtitle">
            <Award className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Professional Credentials & Achievements</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-description !mb-6">
            A curated collection of {certificationsData.length}+ verified certifications from world-class institutions and industry leaders, showcasing expertise across AI, Cloud, Full-Stack, and Engineering domains.
          </p>

          {/* Animated total badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[rgba(99,102,241,0.15)] to-[rgba(236,72,153,0.15)] border border-[rgba(99,102,241,0.3)] shadow-lg">
            <Trophy className="w-5 h-5 text-amber-400 animate-bounce" style={{ animationDuration: '2s' }} />
            <span className="text-lg font-extrabold font-mono gradient-text">{certificationsData.length}+</span>
            <span className="text-sm font-semibold text-[var(--text-muted)]">Verified Certificates</span>
          </div>
        </div>

        {/* ═══ Stats Ribbon ═══ */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Certificates', value: totalCount, suffix: '+', color: 'var(--accent-cyan)', icon: <Award className="w-5 h-5" /> },
            { label: 'Providers', value: providerCount, suffix: '', color: 'var(--accent-violet)', icon: <Building2 className="w-5 h-5" /> },
            { label: 'Elite & Distinction', value: eliteAnimated, suffix: '', color: 'var(--accent-pink)', icon: <Star className="w-5 h-5" /> },
            { label: 'Categories', value: useCounter(categories.length - 1, 1200, statsVisible), suffix: '', color: 'var(--accent-emerald)', icon: <GraduationCap className="w-5 h-5" /> }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 sm:p-5 rounded-2xl border border-[var(--border-color)] text-center group hover:border-[var(--border-glow)] transition-all duration-500">
              <div className="flex items-center justify-center gap-2 mb-2 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors">
                <span style={{ color: stat.color }}>{stat.icon}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono" style={{ color: stat.color }}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-[var(--text-dim)] font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ═══ Search Bar ═══ */}
        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certificates by title, issuer, or topic..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors text-sm backdrop-blur-md"
          />
        </div>

        {/* ═══ Category Filter Bar ═══ */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 scrollbar-hide">
          <Filter className="w-4 h-4 text-[var(--text-dim)] shrink-0" />
          {categories.map(cat => {
            const isActive = activeCategory === cat.name;
            const color = cat.name === 'All' ? null : getColor(cat.name);
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border whitespace-nowrap"
                style={isActive ? {
                  background: color?.gradient || 'var(--gradient-brand)',
                  color: '#fff',
                  borderColor: 'transparent',
                  boxShadow: color?.glow || 'var(--shadow-glow)'
                } : {
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--text-muted)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <span>{cat.name}</span>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                    color: isActive ? '#fff' : 'var(--text-dim)'
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ═══ Certificate Grid ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert, index) => {
            const color = getColor(cert.category);
            const isVisible = visibleCards.has(cert.id);

            return (
              <div
                key={cert.id}
                data-cert-id={cert.id}
                ref={el => { cardRefs.current[cert.id] = el; }}
                className="cert-card group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
                    : 'perspective(800px) translateY(40px) scale(0.95)',
                  transitionDelay: `${(index % 9) * 80}ms`,
                  willChange: 'transform, opacity'
                }}
                onMouseMove={(e) => handleMouseMove(e, cardRefs.current[cert.id])}
                onMouseLeave={() => handleMouseLeave(cardRefs.current[cert.id])}
                onClick={() => setViewerCert(cert)}
              >
                {/* Top gradient stripe */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: color.gradient }}
                />

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: `inset 0 0 40px ${color.bg}, ${color.glow}`,
                    borderColor: color.border
                  }}
                />

                <div className="p-5 relative z-10">
                  {/* Header row: tag + score */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        background: color.bg,
                        color: color.text,
                        borderColor: color.border
                      }}
                    >
                      {cert.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[var(--text-dim)] bg-[rgba(255,255,255,0.06)] px-2 py-1 rounded-lg">
                      {cert.score}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold font-heading text-[var(--text-main)] mb-2 leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold border shrink-0"
                      style={{
                        background: color.bg,
                        color: color.text,
                        borderColor: color.border
                      }}
                    >
                      {cert.issuer.charAt(0)}
                    </div>
                    <span className="text-xs text-[var(--text-muted)] font-medium truncate">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[var(--text-dim)] leading-relaxed mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Action button */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: color.text }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Shimmer overlay on hover */}
                <div className="cert-shimmer" />
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-[var(--text-dim)] mx-auto mb-4 opacity-40" />
            <p className="text-[var(--text-muted)] text-lg font-medium">No certificates found</p>
            <p className="text-[var(--text-dim)] text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        {/* ═══ Download All + Social Links ═══ */}
        <div className="mt-14 flex flex-col items-center gap-6">
          <a
            href="/certificates.zip"
            download
            className="btn-primary group !px-8 !py-4 text-base font-bold shadow-2xl relative overflow-hidden"
          >
            <ArrowDownToLine className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download All {certificationsData.length} Certificates</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>

          {/* Social profiles */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-[var(--text-dim)] uppercase tracking-wider font-mono font-bold mr-1">
              Connect:
            </span>
            {[
              { href: personalInfo.linkedin, icon: <Linkedin className="w-5 h-5" />, hoverColor: '#06b6d4', title: 'LinkedIn' },
              { href: personalInfo.github, icon: <Github className="w-5 h-5" />, hoverColor: '#8b5cf6', title: 'GitHub' },
              { href: personalInfo.twitter, icon: <TwitterX className="w-4 h-4" />, hoverColor: '#38bdf8', title: 'X / Twitter' },
              { href: personalInfo.leetcode, icon: <LeetCode className="w-5 h-5" />, hoverColor: '#f59e0b', title: 'LeetCode' },
              { href: personalInfo.hackerrank, icon: <HackerRank className="w-5 h-5" />, hoverColor: '#10b981', title: 'HackerRank' }
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:scale-110 transition-all duration-300 shadow-md"
                style={{ '--hover-c': s.hoverColor }}
                title={s.title}
                onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.borderColor = s.hoverColor; }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Fullscreen PDF Viewer Modal ═══ */}
      {viewerCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setViewerCert(null)}
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
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold border shrink-0"
                  style={{
                    background: getColor(viewerCert.category).bg,
                    color: getColor(viewerCert.category).text,
                    borderColor: getColor(viewerCert.category).border
                  }}
                >
                  {viewerCert.issuer.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-main)] truncate">
                    {viewerCert.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--text-muted)] truncate">
                    {viewerCert.issuer} • {viewerCert.score}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={viewerCert.fileUrl}
                  download
                  className="p-2.5 rounded-xl bg-[rgba(6,182,212,0.15)] text-[var(--accent-cyan)] border border-[rgba(6,182,212,0.3)] hover:bg-[rgba(6,182,212,0.25)] transition-colors"
                  title="Download PDF"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href={viewerCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[rgba(139,92,246,0.15)] text-[var(--accent-violet)] border border-[rgba(139,92,246,0.3)] hover:bg-[rgba(139,92,246,0.25)] transition-colors"
                  title="Open in New Tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setViewerCert(null)}
                  className="p-2.5 rounded-xl bg-[rgba(239,68,68,0.15)] text-rose-400 border border-[rgba(239,68,68,0.3)] hover:bg-[rgba(239,68,68,0.25)] transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 relative bg-[#1a1a2e]">
              <iframe
                src={viewerCert.fileUrl}
                className="w-full h-full border-none"
                title={viewerCert.title}
              />
              {/* Fallback text if iframe can't render */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-pill text-xs text-[var(--text-dim)] opacity-60">
                <FileText className="w-3 h-3" />
                <span>If PDF doesn't load, use the download or open buttons above</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
