'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percent = (scrollY / (docHeight - winHeight)) * 100;
      setWidth(Math.min(100, Math.max(0, percent)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] w-full h-[2px]">
      <div
        className="h-full"
        style={{
          width: `${width}%`,
          background: 'linear-gradient(90deg, #D97706, #9B1C1C, #5B21B6)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
