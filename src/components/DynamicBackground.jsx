import React, { useEffect, useRef } from 'react';

export default function DynamicBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes setup
    const particleCount = Math.min(Math.floor(width / 25), 65);
    const particles = [];

    const colors = theme === 'dark' 
      ? ['rgba(6, 182, 212, ', 'rgba(99, 102, 241, ', 'rgba(139, 92, 246, ', 'rgba(236, 72, 153, ']
      : ['rgba(14, 165, 233, ', 'rgba(99, 102, 241, ', 'rgba(168, 85, 247, ', 'rgba(236, 72, 153, '];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }

    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.colorPrefix}${p1.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `${p1.colorPrefix}${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse attraction lines
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = (1 - mdist / 160) * 0.3;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="bg-container fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Glowing Gradient Ambient Orbs */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #6366f1 100%)',
          animation: 'orbFloat1 18s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, #8b5cf6 100%)',
          animation: 'orbFloat2 22s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full blur-[110px] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, #06b6d4 100%)',
          animation: 'orbFloat1 25s ease-in-out infinite reverse'
        }}
      />

      {/* Interactive Node Canvas overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-70" />
    </div>
  );
}
