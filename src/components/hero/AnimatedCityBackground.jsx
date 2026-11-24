import React, { useState, useEffect, useRef } from 'react';

export const CITIES = [
  {
    id: 'london',
    name: 'London',
    image: '/images/cities/london.jpg',
  },
  {
    id: 'newyork',
    name: 'New York',
    image: '/images/cities/newyork.jpg',
  },
  {
    id: 'lagos',
    name: 'Lagos',
    image: '/images/cities/lagos.jpg',
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    image: '/images/cities/nairobi.jpg',
  },
  {
    id: 'johannesburg',
    name: 'Johannesburg',
    image: '/images/cities/johannesburg.jpg',
  },
  {
    id: 'cairo',
    name: 'Cairo',
    image: '/images/cities/cairo.jpg',
  },
  {
    id: 'accra',
    name: 'Accra',
    image: '/images/cities/accra.jpg',
  },
  {
    id: 'kigali',
    name: 'Kigali',
    image: '/images/cities/kigali.jpg',
  },
];

const LOOP_INTERVAL_MS = 7500; // 7.5 seconds per city

export default function AnimatedCityBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isCrossFading, setIsCrossFading] = useState(false);
  const canvasRef = useRef(null);

  const activeCity = CITIES[activeIndex];

  // Continuous auto-rotation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setIsCrossFading(true);
      setActiveIndex((prev) => (prev + 1) % CITIES.length);

      setTimeout(() => {
        setIsCrossFading(false);
      }, 1600);
    }, LOOP_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Dynamic Canvas traffic / pulse particles representing kinetic city activity
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Light trail particles moving along arterial vectors
    const numParticles = 26;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: 0.45 * (canvas.height || 800) + Math.random() * 0.45 * (canvas.height || 800),
      speed: 0.8 + Math.random() * 2.0,
      length: 20 + Math.random() * 45,
      opacity: 0.15 + Math.random() * 0.4,
      color: Math.random() > 0.4 ? 'rgba(201, 162, 39, ' : 'rgba(255, 255, 255, ',
      angle: 0.06 + (Math.random() - 0.5) * 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speed;
        p.y += p.speed * p.angle;

        if (p.x > canvas.width + 50) {
          p.x = -50;
          p.y = 0.45 * canvas.height + Math.random() * 0.45 * canvas.height;
        }

        const gradient = ctx.createLinearGradient(p.x - p.length, p.y, p.x, p.y);
        gradient.addColorStop(0, `${p.color}0)`);
        gradient.addColorStop(0.7, `${p.color}${p.opacity * 0.6})`);
        gradient.addColorStop(1, `${p.color}${p.opacity})`);

        ctx.beginPath();
        ctx.moveTo(p.x - p.length, p.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}0.9)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-[#050505]">
      {/* 1. Underlying Previous Image during crossfade */}
      {prevIndex !== null && isCrossFading && (
        <div className="absolute inset-0 z-0">
          <img
            src={CITIES[prevIndex].image}
            alt={CITIES[prevIndex].name}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] transform scale-[1.04]"
          />
        </div>
      )}

      {/* 2. Active City Image with Ken Burns drift */}
      <div
        key={activeCity.id}
        className={`absolute inset-0 z-[1] transition-opacity duration-[1600ms] ease-in-out ${
          isCrossFading ? 'opacity-100 animate-fadeIn' : 'opacity-100'
        }`}
      >
        <img
          src={activeCity.image}
          alt={`${activeCity.name} skyline`}
          className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.10] animate-kenBurnsDrift"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* 3. Kinetic Canvas Light Stream Overlay (Traffic Artery Light Trails) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] w-full h-full opacity-60 pointer-events-none"
      />

      {/* 4. Luxury Vignette Gradients: Obsidian Black & Deep Midnight Navy */}
      {/* Left heavy gradient protecting text readability */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            'linear-gradient(105deg, rgba(5, 5, 5, 0.94) 0%, rgba(11, 19, 32, 0.86) 50%, rgba(5, 5, 5, 0.65) 100%)',
        }}
      />

      {/* Radial Gold Ambient Glow */}
      <div
        className="absolute inset-0 z-[3] opacity-35"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(201, 162, 39, 0.16) 0%, transparent 60%)',
        }}
      />

      {/* Top Navbar Ground Scrim */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505]/90 to-transparent z-[3]" />

      {/* Bottom Ground Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-[3]" />
    </div>
  );
}
