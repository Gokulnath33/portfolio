import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-1 pointer-events-none">
      <div
        className="h-full rounded-r-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00f0ff, #6366f1, #a855f7, #ff0080, #ffdd00)',
          boxShadow: '0 0 12px rgba(0,240,255,0.8), 0 0 24px rgba(168,85,247,0.5)',
        }}
      />
    </div>
  );
}
