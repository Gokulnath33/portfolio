import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function WelcomeSplash({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=hidden, 1=particles, 2=name, 3=tagline, 4=exit
  const [progress, setProgress] = useState(0); // cinematic loading %
  const canvasRef = useRef(null);
  const finishedRef = useRef(false);

  // Time-of-day special greeting
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 5) return 'Burning the Midnight Oil?';
    if (h < 12) return 'Good Morning!';
    if (h < 17) return 'Good Afternoon!';
    if (h < 21) return 'Good Evening!';
    return 'Good Night!';
  };

  // Cinematic intro loading bar — fills like a video buffering to 100%
  useEffect(() => {
    const t0 = performance.now();
    const duration = 3200;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 2);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Allow clicking anywhere to skip the intro
  const handleSkip = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setPhase(4);
    setTimeout(onComplete, 500);
  };

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => setPhase(4), 3200);
    const t5 = setTimeout(() => { finishedRef.current = true; onComplete(); }, 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  // Canvas particle burst
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#00f0ff', '#6366f1', '#a855f7', '#ff0080', '#00ff88', '#ffdd00', '#ff6600'];

    // Create explosion particles
    for (let i = 0; i < 120; i++) {
      const angle = (Math.PI * 2 * i) / 120 + Math.random() * 0.3;
      const speed = Math.random() * 6 + 2;
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: Math.random() * 0.012 + 0.006,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let raf;
    const render = () => {
      raf = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= p.decay;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grd.addColorStop(0, p.color + Math.floor(p.life * 100).toString(16).padStart(2, '0'));
        grd.addColorStop(1, p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      if (particles.length === 0) cancelAnimationFrame(raf);
    };
    render();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[10000] flex items-center justify-center cursor-pointer transition-all duration-700 ${phase >= 4 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
      style={{ background: 'radial-gradient(ellipse at center, #0c1230 0%, #020617 70%)' }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated rings */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[500px] h-[500px] rounded-full border-2 border-[rgba(0,240,255,0.3)] animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-[rgba(168,85,247,0.3)] animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-[rgba(255,0,128,0.3)] animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Greeting */}
        <div className={`transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl sm:text-2xl font-mono text-[var(--accent-cyan)] mb-4 tracking-wider">
            ✨ {getGreeting()} Welcome to my Universe ✨
          </p>
        </div>

        {/* Name */}
        <div className={`transition-all duration-1000 ${phase >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading mb-4"
            style={{
              background: 'linear-gradient(135deg, #00f0ff 0%, #6366f1 30%, #a855f7 60%, #ff0080 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.5))',
            }}
          >
            {personalInfo.name}
          </h1>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-700 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] font-mono">
            {personalInfo.taglines[0]}
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-violet)] text-sm font-mono uppercase tracking-widest">
              AI & Data Science Engineer
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-pink)]" />
          </div>
        </div>
      </div>

      {/* Cinematic intro progress bar — video-style loading with % */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-[70vw] max-w-md pointer-events-none transition-opacity duration-500 ${phase >= 1 && phase < 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[var(--text-dim)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-ping" />
            Loading Experience
          </span>
          <span className="text-sm font-mono font-bold text-[var(--accent-cyan)] tabular-nums">
            {progress}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] border border-[var(--border-color)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%`, boxShadow: '0 0 14px rgba(99,102,241,0.8)' }}
          />
        </div>
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-[var(--accent-cyan)] transition-all duration-1000 ${phase >= 1 ? 'opacity-60' : 'opacity-0'}`} />
      <div className={`absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-[var(--accent-violet)] transition-all duration-1000 ${phase >= 1 ? 'opacity-60' : 'opacity-0'}`} />
      <div className={`absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-[var(--accent-pink)] transition-all duration-1000 ${phase >= 1 ? 'opacity-60' : 'opacity-0'}`} />
      <div className={`absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-[var(--accent-emerald)] transition-all duration-1000 ${phase >= 1 ? 'opacity-60' : 'opacity-0'}`} />
    </div>
  );
}
