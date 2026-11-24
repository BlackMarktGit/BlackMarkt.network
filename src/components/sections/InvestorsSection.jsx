import React from 'react';
import { Link } from 'react-router-dom';

const INVESTOR_CATEGORIES = [
  { name: 'Sovereign Wealth Funds', desc: 'Direct allocation into national infrastructure, energy grids, and sovereign strategic assets.' },
  { name: 'Family Offices', desc: 'Private capital syndications seeking generational risk-adjusted growth and direct private equity investments.' },
  { name: 'Institutional Investors', desc: 'Pension funds, insurance asset managers, and global capital allocators seeking African market exposure.' },
  { name: 'Private Equity Firms', desc: 'Growth equity, buyout financing, and cross-border carveouts across high-margin market leaders.' },
  { name: 'Commercial Banks', desc: 'Senior debt structuring, syndicated lending facilities, and export credit agency (ECA) support.' },
  { name: 'Development Finance Institutions', desc: 'DFIs providing concessionary capital, blended finance, and multilateral risk guarantees.' },
  { name: 'Multinational Corporations', desc: 'Strategic corporate investors seeking direct joint ventures, market entry, and supply chain security.' },
];

export default function InvestorsSection() {
  return (
    <section
      id="investors"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
      aria-labelledby="investors-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Investor Value Prop */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                  Institutional Capital Network
                </span>
              </div>
              <h2
                id="investors-heading"
                className="font-headings text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.08] text-white tracking-[-0.02em] mb-6"
              >
                Access High-Potential African Growth Opportunities
              </h2>
              <p className="text-[#CBD5E1] text-[16px] leading-[1.65] mb-6">
                Black Markt Network Consultancy works with investors seeking exposure to vetted, high-potential African businesses and projects.
              </p>
              <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mb-8">
                We identify opportunities, facilitate confidential relationships, structure risk-mitigated investment instruments, and support strategic cross-border partnerships from initial screening through to closing.
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[#0B1320] border border-[#C9A227]/30">
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-2">
                Mandate Confidentiality
              </span>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-4">
                Institutional investors access our curated pipeline through confidential, bilateral discussions under mutual non-disclosure agreements.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#C9A227] hover:text-[#DFBA42] transition-colors"
              >
                <span>Request Investor Briefing</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Investor Categories Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[#94A3B8] text-[12px] font-sans uppercase tracking-widest block mb-1">
              Our International Capital Network Spans:
            </span>
            {INVESTOR_CATEGORIES.map((cat, index) => (
              <div
                key={index}
                className="p-5 rounded-[12px] bg-[#0B1320]/80 border border-white/5 hover:border-[#C9A227]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group"
              >
                <div>
                  <h4 className="text-white font-headings text-[18px] sm:text-[20px] font-medium group-hover:text-[#C9A227] transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed mt-1">
                    {cat.desc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#121E33] border border-white/10 flex items-center justify-center text-[#C9A227] shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
