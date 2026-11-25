import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Icon from '../common/Icon';
import { INVESTOR_POOLS, ORIGINATION_ADVANTAGES } from '../../data/platformData';

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
                  Institutional Capital Network
                </span>
              </div>
              <h2
                id="investors-heading"
                className="font-headings text-[clamp(28px,3.8vw,50px)] font-medium leading-[1.12] text-white tracking-[-0.02em] mb-6"
              >
                Connecting Global Capital to African Market Expansion
              </h2>
              <p className="text-[#CBD5E1] text-[15.5px] leading-[1.65] mb-5">
                Black Markt Network Consultancy bridges the structural divide between international capital providers and high-quality, growth-stage enterprises and infrastructure projects across the African continent.
              </p>
              <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mb-6">
                We provide institutional investors with curated, proprietary deal flow, comprehensive transaction diligence, and bespoke co-investment structuring tailored to distinct risk-return mandates.
              </p>
              <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mb-8">
                Operating between London and key African commercial hubs, our team combines international transaction standards with deeply rooted regional market intelligence.
              </p>
            </div>

            <div className="p-6 rounded-[16px] bg-[#0B1320] border border-[#C9A227]/30 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase">
                  Institutional Discretion & Non-Disclosure
                </span>
              </div>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-4">
                All engagements and transaction pipelines are shared with strict confidentiality under bilateral non-disclosure agreements.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#C9A227] hover:text-[#DFBA42] transition-colors"
              >
                <span>Request an Institutional Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Investor Network Categories */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-1 font-semibold">
              Tailored Engagement for Global Capital Pools:
            </span>
            {INVESTOR_POOLS.map((pool, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-[16px] bg-[#0B1320] border border-white/5 hover:border-[#C9A227]/40 flex items-start gap-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_2px_12px_rgba(201,162,39,0.12)] flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227] transition-all mt-0.5">
                  <Icon name={pool.iconName} className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-headings text-[18px] sm:text-[19px] font-medium group-hover:text-[#C9A227] transition-colors leading-snug">
                    {pool.title || pool.category}
                  </h3>
                  <p className="text-[#94A3B8] text-[13.5px] leading-relaxed mt-1">
                    {pool.description || pool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Black Markt Origination & De-Risking Advantage */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
          <div className="max-w-[760px] mb-10">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
              Value Proposition for Capital Providers
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-headings font-medium text-white leading-tight">
              The Black Markt Origination & De-Risking Advantage
            </h3>
            <p className="text-[#94A3B8] text-[14.5px] leading-relaxed mt-2">
              Our advisory model provides rigorous end-to-end de-risking mechanisms to safeguard institutional commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ORIGINATION_ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[16px] bg-[#0B1320] border border-white/5 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-3.5">
                    <Icon name={adv.iconName} className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <h4 className="text-white font-headings text-[17px] font-medium leading-snug mb-2">
                    {adv.title}
                  </h4>
                  <p className="text-[#94A3B8] text-[12.5px] leading-relaxed">
                    {adv.desc}
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
