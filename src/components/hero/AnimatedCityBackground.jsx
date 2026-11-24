import React, { useState, useEffect } from 'react';

export const CITIES = [
  {
    id: 'london',
    name: 'London',
    image: '/images/cities/london.jpg',
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
];

export default function AnimatedCityBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CITIES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-[#050505]">
      {/* Background Images with Slow Fade */}
      {CITIES.map((city, idx) => (
        <div
          key={city.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            transition: 'opacity 1500ms ease-in-out, transform 12000ms ease-out',
          }}
        >
          <img
            src={city.image}
            alt={`${city.name} skyline`}
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10]"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Deep Obsidian & Midnight Navy Vignettes */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(105deg, rgba(5, 5, 5, 0.95) 0%, rgba(11, 19, 32, 0.88) 45%, rgba(5, 5, 5, 0.70) 100%)',
        }}
      />

      {/* Subtle Gold Ambient Radial Glow */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(201, 162, 39, 0.18) 0%, transparent 65%)',
        }}
      />

      {/* Top and Bottom Edge Fades */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </div>
  );
}
