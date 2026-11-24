import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { INDUSTRIES_DATA } from '../data/platformData';

export default function IndustriesPage() {
  return (
    <Layout>
      {/* Industries Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">SOVEREIGN MARKETS &amp; SECTORS</span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">GLOBAL COVERAGE</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Sovereign &amp; industrial sectors
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Deep domain fluency across high-barrier industries where regulatory compliance, sovereign security, and capital concentration converge.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[210px]">
              Sector Consultation
            </ActionButton>
            <ActionButton href="/transactions" variant="on-dark" className="w-[190px]">
              View Transactions
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {INDUSTRIES_DATA.map((ind, index) => (
          <div
            key={ind.slug}
            className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <span className="text-[11px] font-caption text-[#94A3B8] font-semibold tracking-wider uppercase block mb-3">
                {ind.eyebrow}
              </span>

              <h2 className="text-[24px] font-headings font-medium text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                <Link to={`/industries/${ind.slug}`}>{ind.name}</Link>
              </h2>

              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                {ind.desc}
              </p>

              {/* Stat Metric Card */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[22px] font-headings font-bold text-white block">
                    {ind.statMetric}
                  </span>
                  <span className="text-[11px] font-caption text-[#94A3B8]">
                    {ind.statLabel}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[18px] font-headings font-semibold text-[#C9A227] block">
                    {ind.secondaryStat}
                  </span>
                  <span className="text-[11px] font-caption text-[#94A3B8]">
                    {ind.secondaryStatLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                to={`/industries/${ind.slug}`}
                className="text-[13px] font-caption text-[#F8F9FA] font-semibold hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
              >
                <span>Sector Mandates</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="text-[12px] font-mono text-[#94A3B8]">0{index + 1} / 06</span>
            </div>
          </div>
        ))}
      </section>

      {/* Cross-Sector Advisory Guarantee */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase block mb-2 font-semibold">
            CROSS-BORDER SYNDICATION
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Cross-jurisdictional counsel for sovereign and private capital
          </h2>
          <p className="mt-3 text-[16px] text-[#94A3B8] leading-relaxed">
            Our sector leads collaborate across five global advisory hubs to eliminate regulatory arbitrage risk and accelerate transaction closings.
          </p>
        </div>
        <div className="shrink-0">
          <ActionButton href="/book-consultation" className="w-[210px]">
            Schedule Sector Scoping
          </ActionButton>
        </div>
      </section>
    </Layout>
  );
}
