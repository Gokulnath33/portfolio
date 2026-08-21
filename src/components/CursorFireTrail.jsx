import React, { useEffect, useRef } from 'react';

export default function CursorFireTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: -9999, y: -9999, active: false, lastX: -9999, lastY: -9999, speed: 0 };
    const particles = [];
    const trail = [];

    // Neon sparkle colors mixed with fire
    const SPARKLE_COLORS = ['#00f0ff', '#00ff88', '#ffdd00', '#a855f7', '#ff0080', '#ffffff', '#ff6600'];

    const spawnParticles = (x, y, count) => {
      for (let i = 0; i < count; i++) {
        const isSparkle = Math.random() < 0.3;
        particles.push({
          x: x + (Math.random() - 0.5) * 16,
          y: y + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 2.2,
          vy: -(Math.random() * 3.2 + 0.9),
          life: 1,
          decay: Math.random() * 0.03 + 0.015,
          size: Math.random() * 6 + 2,
          hue: Math.random() * 45 + 8, // orange-red range
          type: isSparkle ? 'sparkle' : 'fire',
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          spin: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const onMouseMove = (e) => {
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Speed-based particle count: more fire when moving fast
      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      // More fire particles (5-9 depending on speed)
      const count = Math.min(9, Math.max(5, Math.floor(mouse.speed / 3) + 5));
      spawnParticles(mouse.x, mouse.y, count);

      // Record trail points for the ribbon
      trail.push({ x: mouse.x, y: mouse.y, life: 1 });
      if (trail.length > 40) trail.shift();
    };

    const onMouseLeave = () => { mouse.active = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      raf = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ── Glowing ribbon trail following the cursor ─────────────────────── */
      if (trail.length > 2) {
        for (let i = 1; i < trail.length; i++) {
          const t0 = trail[i - 1];
          const t1 = trail[i];
          const alpha = t0.life * 0.35;
          const grad = ctx.createLinearGradient(t0.x, t0.y, t1.x, t1.y);
          grad.addColorStop(0, `hsla(25, 100%, 60%, ${alpha})`);
          grad.addColorStop(0.5, `hsla(300, 100%, 60%, ${alpha * 0.6})`);
          grad.addColorStop(1, `hsla(190, 100%, 60%, ${alpha * 0.3})`);
          ctx.beginPath();
          ctx.moveTo(t0.x, t0.y);
          ctx.lineTo(t1.x, t1.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = t0.life * 6;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        // Fade trail over time
        trail.forEach(t => { t.life -= 0.06; });
        while (trail.length && trail[0].life <= 0) trail.shift();
      }

      /* ── Fire + sparkle particles ──────────────────────────────────────── */
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.035; // slight upward acceleration
        p.vx *= 0.985;
        p.life -= p.decay;
        p.size *= 0.965;
        p.spin += p.spinSpeed;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * 0.85;

        if (p.type === 'sparkle') {
          // Four-point twinkling star sparkle
          const s = p.size * (1 + (1 - p.life) * 1.2);
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.spin);
          const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 2.5);
          grd.addColorStop(0, p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
          grd.addColorStop(1, p.color + '00');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(0, 0, s * 2.5, 0, Math.PI * 2);
          ctx.fill();
          // Star cross
          ctx.fillStyle = p.color + Math.floor(alpha * 230).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(s * 0.25, -s * 0.25, s, 0);
          ctx.quadraticCurveTo(s * 0.25, s * 0.25, 0, s);
          ctx.quadraticCurveTo(-s * 0.25, s * 0.25, -s, 0);
          ctx.quadraticCurveTo(-s * 0.25, -s * 0.25, 0, -s);
          ctx.fill();
          ctx.restore();
        } else {
          // Fire particle with layered gradient
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.4);
          gradient.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${alpha})`);
          gradient.addColorStop(0.35, `hsla(${p.hue + 10}, 100%, 60%, ${alpha * 0.7})`);
          gradient.addColorStop(0.7, `hsla(${p.hue + 25}, 100%, 45%, ${alpha * 0.35})`);
          gradient.addColorStop(1, 'hsla(20, 100%, 30%, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      /* ── Glowing core orb that follows the cursor ──────────────────────── */
      if (mouse.active) {
        const core = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 34);
        core.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
        core.addColorStop(0.25, 'rgba(255, 200, 80, 0.35)');
        core.addColorStop(0.6, 'rgba(255, 80, 40, 0.12)');
        core.addColorStop(1, 'rgba(255, 60, 30, 0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 34, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
      }

      // Keep particle count manageable
      if (particles.length > 600) {
        particles.splice(0, particles.length - 600);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
