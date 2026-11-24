import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../common/Icon';
import { INVESTOR_NETWORK } from '../../data/platformData';

export default function InvestorsSection() {
  return (
    <section
      id="investors"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-4"
      aria-labelledby="investors-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Scope */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                  Investor Network
                </span>
              </div>
              <h2
                id="investors-heading"
                className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em] mb-6"
              >
                Access African Growth Opportunities
              </h2>
              <p className="text-[#CBD5E1] text-[15.5px] leading-[1.65] mb-5">
                Black Markt Network Consultancy works with investors seeking exposure to high-potential African businesses and projects.
              </p>
              <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mb-6">
                Through our international network, we connect investors with verified opportunities across Infrastructure, Energy, Renewable resources, Technology, Agriculture, Healthcare, Manufacturing, Mining, and Real estate.
              </p>
              <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mb-8">
                We identify opportunities, facilitate relationships and support strategic investment partnerships from initial introduction through to execution.
              </p>
            </div>

            <div className="p-6 rounded-[16px] bg-[#0B1320] border border-[#C9A227]/30">
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5">
                Institutional Discretion
              </span>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-4">
                All engagements and transaction pipelines are shared with strict confidentiality under bilateral non-disclosure agreements.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#C9A227] hover:text-[#DFBA42] transition-colors"
              >
                <span>Request an Investor Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Investor Network Categories */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-1 font-semibold">
              Our International Network Spans:
            </span>
            {INVESTOR_NETWORK.map((cat, index) => (
              <div
                key={index}
                className="p-5 rounded-[14px] bg-[#0B1320] border border-white/5 hover:border-[#C9A227]/40 flex items-start sm:items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_2px_12px_rgba(201,162,39,0.12)] flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227] transition-all">
                  <Icon name={cat.iconName} className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-headings text-[18px] sm:text-[19px] font-medium group-hover:text-[#C9A227] transition-colors leading-snug">
                    {cat.type}
                  </h3>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
