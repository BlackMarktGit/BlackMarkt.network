import React from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { PRACTICES_DATA } from '../data/platformData';

export default function PracticesPage() {
  return (
    <Layout>
      {/* Practices Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">CORE ADVISORY CAPABILITIES</span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">7 SPECIALIZED PRACTICES</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Pillars of institutional excellence
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Rigorous methodologies designed to navigate complex regulatory environments, allocate capital with forensic precision, and build fault-tolerant digital architectures.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[200px]">
              Initiate Scoping
            </ActionButton>
            <ActionButton href="/assessment" variant="on-dark" className="w-[220px]">
              Launch Scorecard
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Practices Detailed Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {PRACTICES_DATA.map((practice, index) => (
          <div
            key={practice.slug}
            className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-caption text-[#94A3B8] font-semibold tracking-wider uppercase">
                  {practice.eyebrow}
                </span>
                <span className="text-[13px] font-caption text-[#C9A227] font-bold">
                  {practice.dealSize}
                </span>
              </div>

              <h2 className="text-[24px] font-headings font-medium text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                <a href={`/services/${practice.slug}`}>{practice.title}</a>
              </h2>

              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                {practice.shortDesc}
              </p>

              {/* Key Metrics Mini-Strip */}
              <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 mb-6 text-center">
                {practice.keyMetrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[16px] font-headings font-bold text-white">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-caption text-[#94A3B8] truncate">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Capabilities Preview */}
              <div className="space-y-2 mb-6">
                <p className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider font-semibold">
                  Key Capabilities
                </p>
                <ul className="text-[13px] text-white/90 space-y-1.5">
                  {(practice.capabilities || []).slice(0, 3).map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C9A227] text-[14px] leading-none">&bull;</span>
                      <span className="leading-tight text-[#CBD5E1]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={`/services/${practice.slug}`}
                className="text-[13px] font-caption text-[#F8F9FA] font-semibold hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
              >
                <span>Practice Dossier</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-[12px] font-mono text-[#94A3B8]">0{index + 1} / {PRACTICES_DATA.length.toString().padStart(2, '0')}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Diagnostic Callout Card */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 p-8 sm:p-12 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <span className="text-caption text-[#C9A227] block mb-2 font-semibold">PROPRIETARY BENCHMARK</span>
          <h2 className="text-[28px] sm:text-[38px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Unsure which advisory practice aligns with your mandate?
          </h2>
          <p className="mt-3 text-[16px] text-[#94A3B8]">
            Benchmark your enterprise across capital allocation, architectural debt, and sovereign governance using our 4-domain interactive readiness scorecard.
          </p>
        </div>
        <div className="shrink-0">
          <ActionButton href="/assessment" className="w-[200px]">
            Launch Scorecard
          </ActionButton>
        </div>
      </section>
    </Layout>
  );
}
