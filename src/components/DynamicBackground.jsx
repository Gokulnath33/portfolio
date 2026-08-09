import React, { useEffect, useRef, useState } from 'react';

/* ─── Section color palettes ─────────────────────────────────────────────── */
const SECTION_PALETTES = {
  home:         { orb1: '#06b6d4', orb2: '#6366f1', orb3: '#8b5cf6', star: '#a5f3fc' },
  about:        { orb1: '#f59e0b', orb2: '#ec4899', orb3: '#f97316', star: '#fde68a' },
  skills:       { orb1: '#10b981', orb2: '#06b6d4', orb3: '#3b82f6', star: '#6ee7b7' },
  projects:     { orb1: '#8b5cf6', orb2: '#ec4899', orb3: '#6366f1', star: '#ddd6fe' },
  experience:   { orb1: '#f97316', orb2: '#ef4444', orb3: '#f59e0b', star: '#fed7aa' },
  certificates: { orb1: '#06b6d4', orb2: '#10b981', orb3: '#3b82f6', star: '#99f6e4' },
  contact:      { orb1: '#ec4899', orb2: '#8b5cf6', orb3: '#6366f1', star: '#fbcfe8' },
};

const DEFAULT_PALETTE = SECTION_PALETTES.home;

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lerpColor(a, b, t) {
  const ca = hexToRgb(a), cb = hexToRgb(b);
  return {
    r: Math.round(ca.r + (cb.r - ca.r) * t),
    g: Math.round(ca.g + (cb.g - ca.g) * t),
    b: Math.round(ca.b + (cb.b - ca.b) * t),
  };
}

export default function DynamicBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const activePaletteRef = useRef(DEFAULT_PALETTE);
  const targetPaletteRef  = useRef(DEFAULT_PALETTE);
  const transitionRef      = useRef(1);

  /* ── section observer ─────────────────────────────────────────────────── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const next = SECTION_PALETTES[id] || DEFAULT_PALETTE;
            activePaletteRef.current = { ...targetPaletteRef.current };
            targetPaletteRef.current = next;
            transitionRef.current = 0;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* ── canvas engine ────────────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', onResize);

    /* ── mouse ─────────────────────────────────────────────────────────── */
    const mouse = { x: -9999, y: -9999 };
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    /* ── click burst ───────────────────────────────────────────────────── */
    const bursts = [];
    const onClick = e => {
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18;
        const speed = Math.random() * 4 + 2;
        bursts.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1, size: Math.random() * 4 + 2,
        });
      }
    };
    window.addEventListener('click', onClick);

    /* ── particles ──────────────────────────────────────────────────────── */
    let particles = [];
    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(W / 18), 90);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2.2 + 0.8,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          alpha: Math.random() * 0.55 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };
    initParticles();

    /* ── shooting stars ─────────────────────────────────────────────────── */
    const shooters = [];
    const spawnShooter = () => {
      shooters.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.5,
        len: Math.random() * 140 + 60,
        speed: Math.random() * 10 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        life: 1,
        width: Math.random() * 1.5 + 0.5,
      });
    };
    setInterval(spawnShooter, 1800);

    /* ── fireflies ──────────────────────────────────────────────────────── */
    const fireflies = [];
    for (let i = 0; i < 22; i++) {
      fireflies.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.004,
        orbitR: Math.random() * 60 + 20,
        cx: Math.random() * W,
        cy: Math.random() * H,
        drift: (Math.random() - 0.5) * 0.3,
      });
    }

    /* ── aurora waves ───────────────────────────────────────────────────── */
    let auroraT = 0;

    /* ── render ─────────────────────────────────────────────────────────── */
    const render = () => {
      raf = requestAnimationFrame(render);

      /* palette lerp */
      if (transitionRef.current < 1) transitionRef.current = Math.min(1, transitionRef.current + 0.008);
      const t  = transitionRef.current;
      const ap = activePaletteRef.current;
      const bp = targetPaletteRef.current;
      const lerp = (k) => {
        const c = lerpColor(ap[k], bp[k], t);
        return `rgb(${c.r},${c.g},${c.b})`;
      };
      const c1 = lerp('orb1'), c2 = lerp('orb2'), c3 = lerp('orb3');
      const cStar = lerp('star');

      ctx.clearRect(0, 0, W, H);

      /* ── aurora bands ──────────────────────────────────────────────────── */
      auroraT += 0.003;
      for (let band = 0; band < 3; band++) {
        const bandY = H * (0.25 + band * 0.25) + Math.sin(auroraT + band * 2.1) * 80;
        const grad = ctx.createLinearGradient(0, bandY - 120, 0, bandY + 120);
        const col = band === 0 ? c1 : band === 1 ? c2 : c3;
        const rgb = hexToRgb(bp[band === 0 ? 'orb1' : band === 1 ? 'orb2' : 'orb3']);
        grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        grad.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},0.06)`);
        grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, bandY);
        for (let x = 0; x <= W; x += 6) {
          const waveY = bandY + Math.sin((x / W) * Math.PI * 4 + auroraT * 2 + band) * 35;
          ctx.lineTo(x, waveY);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      /* ── fireflies ──────────────────────────────────────────────────────── */
      const starRgb = hexToRgb(bp.star);
      fireflies.forEach(f => {
        f.phase += f.speed;
        f.cx += f.drift;
        f.cy += f.drift * 0.5;
        if (f.cx < 0 || f.cx > W) f.drift *= -1;
        if (f.cy < 0 || f.cy > H) f.drift *= -0.5;
        f.x = f.cx + Math.cos(f.phase) * f.orbitR;
        f.y = f.cy + Math.sin(f.phase * 1.3) * f.orbitR;

        const pulse = 0.45 + Math.sin(f.phase * 3) * 0.35;
        const grd = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 5);
        grd.addColorStop(0, `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${pulse})`);
        grd.addColorStop(1, `rgba(${starRgb.r},${starRgb.g},${starRgb.b},0)`);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${pulse * 0.9})`;
        ctx.fill();
      });

      /* ── particles ──────────────────────────────────────────────────────── */
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.twinkle += 0.03;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        /* mouse repel */
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.vx += (dx / dist) * force * 0.4;
          p.vy += (dy / dist) * force * 0.4;
        }
        /* drag */
        p.vx *= 0.995; p.vy *= 0.995;

        const alpha = p.alpha * (0.6 + Math.sin(p.twinkle) * 0.4);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${alpha})`;
        ctx.fill();

        /* connect nearby particles */
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x, ey = p.y - q.y;
          const d = Math.sqrt(ex * ex + ey * ey);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${(1 - d / 110) * 0.12})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        /* mouse beam */
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${(1 - dist / 180) * 0.25})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      /* ── shooting stars ─────────────────────────────────────────────────── */
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= 0.018;
        if (s.life <= 0) { shooters.splice(i, 1); continue; }

        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${s.life * 0.85})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.stroke();
      }

      /* ── click bursts ───────────────────────────────────────────────────── */
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.x += b.vx; b.y += b.vy; b.life -= 0.04;
        b.vx *= 0.94; b.vy *= 0.94;
        if (b.life <= 0) { bursts.splice(i, 1); continue; }
        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size * 3);
        grd.addColorStop(0, `rgba(${starRgb.r},${starRgb.g},${starRgb.b},${b.life})`);
        grd.addColorStop(1, `rgba(${starRgb.r},${starRgb.g},${starRgb.b},0)`);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('click', onClick);
    };
  }, [theme]);

  return (
    <div className="bg-container fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* ── Massive animated gradient orbs ─────────────────────────────────── */}
      <div className="section-orb orb-1" />
      <div className="section-orb orb-2" />
      <div className="section-orb orb-3" />
      <div className="section-orb orb-4" />

      {/* ── Radial vignette overlay ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Canvas for particles / stars / beams ───────────────────────────── */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.85 }}
      />
    </div>
  );
}
