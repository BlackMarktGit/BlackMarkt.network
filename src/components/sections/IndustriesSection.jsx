import React from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES_DATA = [
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Supporting development opportunities across transportation, logistics, ports, utilities and public infrastructure.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19h16M4 15h16M4 11h16M9 11v8M15 11v8M12 3v8" />
      </svg>
    ),
  },
  {
    id: 'energy',
    title: 'Energy & Renewable Resources',
    description: 'Supporting energy transition and investment opportunities across solar, wind, hydro and conventional energy projects.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Supporting property development, commercial towers, logistics hubs, residential projects and strategic property investments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Supporting healthcare infrastructure, diagnostic networks, pharmaceutical manufacturing, and specialized medical innovation.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Supporting technology-driven businesses, fintech networks, digital infrastructure, telecommunications, and innovation platforms.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Supporting industrial development, automated production expansion, import substitution, and global competitiveness.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V8l5 4V8l5 4V4h5v16" />
      </svg>
    ),
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Supporting commercial agri-business, food security initiatives, cold-chain logistics, and end-to-end value-chain development.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" />
        <path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" />
      </svg>
    ),
  },
  {
    id: 'mining',
    title: 'Mining & Natural Resources',
    description: 'Supporting responsible, sustainable investment in critical mineral resources and beneficiation development across Africa.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Supporting business tourism, prime hotel developments, international conference infrastructure, and resort investments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Growth Sectors We Support
              </span>
            </div>
            <h2
              id="industries-heading"
              className="font-headings text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.08] text-white tracking-[-0.02em]"
            >
              Key Economic Sectors Driving African Expansion
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#94A3B8] text-[15px] leading-relaxed">
            Our multi-disciplinary advisory team pairs deep sector-specific underwriting capabilities with cross-border investor appetite across the continent's most resilient growth industries.
          </div>
        </div>

        {/* Feature Hero Anchor Visual */}
        <div className="relative mt-12 rounded-[18px] overflow-hidden border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.8)]">
          <img
            src="/images/sections/infrastructure-energy.jpg"
            alt="African large-scale transport infrastructure and renewable energy solar development"
            className="w-full aspect-[21/9] sm:aspect-[24/9] object-cover object-center filter brightness-[0.8] contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end max-w-[620px]">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase mb-2">
              Sector Showcase &bull; Clean Transition &bull; Modern Logistics
            </span>
            <h3 className="font-headings text-[24px] sm:text-[32px] text-white font-medium leading-tight mb-3">
              Catalyzing Transformative Infrastructure &amp; Clean Energy Projects
            </h3>
            <p className="text-[#CBD5E1] text-[14px] leading-relaxed hidden sm:block">
              From utility-scale solar microgrids to cross-border logistics corridors, we structure the debt and equity instruments that bring landmark infrastructure to financial close.
            </p>
          </div>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#121E33]/50 border border-white/5 hover:border-[#C9A227]/30 p-7 rounded-[14px] flex flex-col justify-between transition-all duration-300 hover:bg-[#121E33]/80 group"
            >
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-[#050505] border border-white/10 text-[#C9A227] flex items-center justify-center mb-5 group-hover:border-[#C9A227]/50 group-hover:scale-105 transition-all">
                  {ind.icon}
                </div>
                <h4 className="font-headings text-[21px] text-white font-medium mb-2.5 group-hover:text-[#C9A227] transition-colors">
                  {ind.title}
                </h4>
                <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[12px] text-[#C9A227]">
                <span className="font-sans font-semibold tracking-wider uppercase">Strategic Scope</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
