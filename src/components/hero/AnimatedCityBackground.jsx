import React, { useState, useEffect, useRef } from 'react';
import { Globe, Clock, TrendingUp } from 'lucide-react';

export const CITIES = [
  {
    id: 'london',
    name: 'London',
    tag: 'LON',
    hub: 'Bank & City Financial District',
    market: 'LSE / FTSE 100',
    timeZone: 'Europe/London',
    tzAbbr: 'GMT/BST',
    focus: 'Global Advisory & Sovereign Capital Structuring HQ',
    atmosphere: 'Daylight High Finance & Thames Maritime Traffic',
    image: '/images/cities/london.jpg',
    panKeyframe: 'pan-subtle-right'
  },
  {
    id: 'newyork',
    name: 'New York',
    tag: 'NYC',
    hub: 'Wall Street & Lower Manhattan',
    market: 'NYSE / NASDAQ',
    timeZone: 'America/New_York',
    tzAbbr: 'EDT',
    focus: 'Transatlantic Private Equity & Institutional Syndication',
    atmosphere: 'Golden Hour Wall Street & FDR Highway Streams',
    image: '/images/cities/newyork.jpg',
    panKeyframe: 'pan-subtle-zoom'
  },
  {
    id: 'lagos',
    name: 'Lagos',
    tag: 'LOS',
    hub: 'Lekki Bridge & Victoria Island Corridor',
    market: 'NGX / Eko Atlantic',
    timeZone: 'Africa/Lagos',
    tzAbbr: 'WAT',
    focus: 'West African Infrastructure, FinTech & Trade Expansion',
    atmosphere: 'Midday Commercial Powerhouse & Lagoon Traffic',
    image: '/images/cities/lagos.jpg',
    panKeyframe: 'pan-subtle-left'
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    tag: 'NBO',
    hub: 'Upper Hill & Silicon Savannah',
    market: 'NSE 20 / Kenya Central',
    timeZone: 'Africa/Nairobi',
    tzAbbr: 'EAT',
    focus: 'East African Energy Grid & Digital Infrastructure',
    atmosphere: 'Dusk Expressway Artery & Tech Metropolis',
    image: '/images/cities/nairobi.jpg',
    panKeyframe: 'pan-subtle-zoom-out'
  },
  {
    id: 'johannesburg',
    name: 'Johannesburg',
    tag: 'JNB',
    hub: 'Sandton Financial Center ("Richest Square Mile")',
    market: 'JSE Africa / Sandton',
    timeZone: 'Africa/Johannesburg',
    tzAbbr: 'SAST',
    focus: 'Southern African Mining, Metals & Banking Syndication',
    atmosphere: 'Midday High-Yield Banking & Highway Interchange',
    image: '/images/cities/johannesburg.jpg',
    panKeyframe: 'pan-subtle-right'
  },
  {
    id: 'cairo',
    name: 'Cairo',
    tag: 'CAI',
    hub: 'Nile Corniche & Sovereign Financial District',
    market: 'EGX 30 / New Capital',
    timeZone: 'Africa/Cairo',
    tzAbbr: 'EET',
    focus: 'North African Sovereign Debt, Maritime & PPP Advisory',
    atmosphere: 'Sunset Nile Bridge Streams & Modern Towers',
    image: '/images/cities/cairo.jpg',
    panKeyframe: 'pan-subtle-zoom'
  },
  {
    id: 'accra',
    name: 'Accra',
    tag: 'ACC',
    hub: 'Airport City & Ridge Financial District',
    market: 'GSE Composite / Ridge',
    timeZone: 'Africa/Accra',
    tzAbbr: 'GMT',
    focus: 'West African Cross-Border Trade & Institutional Wealth',
    atmosphere: 'Tropical Aviation & Banking Boulevard Movement',
    image: '/images/cities/accra.jpg',
    panKeyframe: 'pan-subtle-left'
  },
  {
    id: 'kigali',
    name: 'Kigali',
    tag: 'KGL',
    hub: 'Kigali International Financial Centre & KICC',
    market: 'KIFC / RSE',
    timeZone: 'Africa/Kigali',
    tzAbbr: 'CAT',
    focus: 'Pan-African Green Finance, Innovation & PPP Infrastructure',
    atmosphere: 'Twilight Geodesic Dome Glow & Tech Corridors',
    image: '/images/cities/kigali.jpg',
    panKeyframe: 'pan-subtle-zoom-out'
  }
];

const LOOP_INTERVAL_MS = 7500; // 7.5 seconds per city

export default function AnimatedCityBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isCrossFading, setIsCrossFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const canvasRef = useRef(null);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const activeCity = CITIES[activeIndex];

  // Helper to format live local time in the active city's timezone
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: activeCity.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setCurrentTimeStr(`${formatter.format(now)} ${activeCity.tzAbbr}`);
      } catch {
        setCurrentTimeStr(`${activeCity.tzAbbr}`);
      }
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, [activeCity]);

  // Continuous auto-rotation loop
  useEffect(() => {
    setProgress(0);
    const stepMs = 50;
    const progressIncrement = (stepMs / LOOP_INTERVAL_MS) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => Math.min(prev + progressIncrement, 100));
    }, stepMs);

    timerRef.current = setTimeout(() => {
      setPrevIndex(activeIndex);
      setIsCrossFading(true);
      setActiveIndex((activeIndex + 1) % CITIES.length);

      // Reset crossfade lock after transition completes (1.6s)
      setTimeout(() => {
        setIsCrossFading(false);
      }, 1600);
    }, LOOP_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [activeIndex]);

  // Handle manual city click (keeps loop continuous, resets progress)
  const handleCitySelect = (index) => {
    if (index === activeIndex) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setPrevIndex(activeIndex);
    setIsCrossFading(true);
    setActiveIndex(index);
    setProgress(0);

    setTimeout(() => {
      setIsCrossFading(false);
    }, 1600);
  };

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
    const numParticles = 28;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: 0.5 * (canvas.height || 800) + (Math.random() * 0.45 * (canvas.height || 800)),
      speed: 0.8 + Math.random() * 2.2,
      length: 18 + Math.random() * 45,
      opacity: 0.15 + Math.random() * 0.45,
      color: Math.random() > 0.4 ? 'rgba(201, 162, 39, ' : 'rgba(255, 255, 255, ', // Gold and white headlight streams
      angle: 0.08 + (Math.random() - 0.5) * 0.12
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speed;
        p.y += p.speed * p.angle;

        if (p.x > canvas.width + 50) {
          p.x = -50;
          p.y = 0.5 * canvas.height + (Math.random() * 0.45 * canvas.height);
        }

        // Draw light streak
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

        // Small glowing front photon
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
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-[#050505]">
      {/* 1. Underlying Previous Image during crossfade */}
      {prevIndex !== null && isCrossFading && (
        <div className="absolute inset-0 z-0">
          <img
            src={CITIES[prevIndex].image}
            alt={CITIES[prevIndex].name}
            className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.08] transform scale-[1.04]"
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
          alt={`${activeCity.name} skyline - ${activeCity.atmosphere}`}
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.10] animate-kenBurnsDrift"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* 3. Kinetic Canvas Light Stream Overlay (Traffic Artery Light Trails) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] w-full h-full opacity-65 pointer-events-none"
      />

      {/* 4. Luxury Vignette Gradients: Obsidian Black & Deep Midnight Navy */}
      {/* Left heavy gradient to protect white headlines & copy */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: 'linear-gradient(105deg, rgba(5, 5, 5, 0.94) 0%, rgba(11, 19, 32, 0.84) 48%, rgba(5, 5, 5, 0.62) 100%)',
        }}
      />

      {/* Radial Gold Ambient Glow */}
      <div
        className="absolute inset-0 z-[3] opacity-35"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(201, 162, 39, 0.16) 0%, transparent 60%)',
        }}
      />

      {/* Top Navbar Ground Scrim */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505]/90 to-transparent z-[3]" />

      {/* Bottom Ground Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent z-[3]" />

      {/* 5. City Telemetry HUD & Interactive Strip (Bottom of Hero) */}
      <div className="absolute inset-x-0 bottom-2.5 sm:bottom-3.5 md:bottom-4 px-3 sm:px-8 md:px-14 z-30 pointer-events-auto flex flex-col gap-1 sm:gap-1.5 max-w-full pb-0.5">
        {/* Top line of HUD: Active Hub & Synchronized Live Clock */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-3 text-[10.5px] sm:text-[11.5px] font-mono tracking-wider text-gray-300 max-w-full">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A227]"></span>
            </span>
            <span className="text-[#C9A227] font-semibold uppercase">{activeCity.name}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300 hidden md:inline">{activeCity.hub}</span>
            <span className="text-gray-500 hidden md:inline">•</span>
            <span className="text-gray-400 font-sans hidden lg:inline italic">{activeCity.atmosphere}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-1.5 text-gray-400">
              <Clock className="w-3 h-3 text-[#C9A227]" />
              <span className="text-white font-mono text-[10px] sm:text-[11px]">{currentTimeStr}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[9.5px] text-[#C9A227] border border-[#C9A227]/30 px-1.5 py-0.5 rounded bg-[#C9A227]/10">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>{activeCity.market}</span>
            </div>
          </div>
        </div>

        {/* Bottom line: Interactive City Selector Pills with Continuous Progress Bar */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 pt-0.5 sm:pt-1 border-t border-white/10 w-full min-w-0 max-w-full overflow-hidden">
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto overscroll-x-contain no-scrollbar py-0.5 w-full sm:w-auto min-w-0 max-w-full">
            {CITIES.map((city, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(idx)}
                  className={`group relative px-2 sm:px-2.5 py-1 sm:py-1.5 min-h-[26px] sm:min-h-[30px] flex items-center rounded text-[10px] sm:text-[10.5px] font-mono tracking-wider transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/40 shadow-sm'
                      : 'bg-black/30 text-gray-400 border border-white/10 hover:text-white hover:border-white/25'
                  }`}
                  title={`${city.name}: ${city.hub}`}
                >
                  <span className="relative z-10 font-medium">
                    {`0${idx + 1} `}
                    <span className="font-semibold">{city.tag}</span>
                  </span>

                  {/* Gold Continuous Loop Progress Line beneath active city */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#C9A227] transition-all duration-75 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2 text-[10px] text-gray-500 font-mono tracking-widest uppercase shrink-0">
            <Globe className="w-3 h-3 text-[#C9A227]" />
            <span>8 Global Capitals • Infinite Continuous Loop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
