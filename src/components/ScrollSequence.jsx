import React from 'react';
import { useEffect, useRef } from 'react';

const ScrollSequence = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Glowing orbs
    const orbs = [
      { x: 0.15, y: 0.2, r: 350, color: 'rgba(74, 222, 128, 0.04)' },
      { x: 0.8, y: 0.3, r: 400, color: 'rgba(34, 211, 238, 0.035)' },
      { x: 0.5, y: 0.8, r: 300, color: 'rgba(168, 85, 247, 0.03)' },
    ];

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time + i * 2) * 40;
        const offsetY = Math.cos(time + i * 1.5) * 30;
        const cx = orb.x * canvas.width + offsetX;
        const cy = orb.y * canvas.height + offsetY;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none bg-[#f3f1ec] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full" 
      />
    </div>
  );
};

export default ScrollSequence;
