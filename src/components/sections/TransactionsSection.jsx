import React from 'react';
import { Link } from 'react-router-dom';

const LIFECYCLE_STEPS = [
  { step: '01', title: 'Opportunity Assessment', desc: 'Commercial feasibility analysis, financial audit, and initial investment thesis formulation.' },
  { step: '02', title: 'Capital Structuring', desc: 'Bespoke debt/equity packaging, risk-allocation design, and term sheet preparation.' },
  { step: '03', title: 'Investor Engagement', desc: 'Confidential bilateral roadshows targeting pre-aligned institutional capital allocators.' },
  { step: '04', title: 'Negotiation & Diligence', desc: 'Data room management, commercial due diligence support, and shareholder agreement alignment.' },
  { step: '05', title: 'Execution & Closing', desc: 'Definitive documentation, regulatory cross-border clearing, and financial close.' },
];

const TRANSACTION_SCOPES = [
  'Growth Capital Raising',
  'Project Finance & Infrastructure',
  'Strategic Cross-Border Investments',
  'International Joint Ventures',
  'Mergers & Corporate Acquisitions',
  'Public-Private Partnerships (PPP)',
  'Multi-Jurisdiction Market Expansion',
];

export default function TransactionsSection() {
  return (
    <section
      id="transactions"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      aria-labelledby="transactions-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Advisory Lifecycle
              </span>
            </div>
            <h2
              id="transactions-heading"
              className="font-headings text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.08] text-white tracking-[-0.02em]"
            >
              Strategic Transactions. Sustainable Outcomes.
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[420px] text-[14.5px] leading-relaxed">
            We support clients throughout the entire transaction lifecycle, from initial opportunity assessment through investor engagement, negotiation and execution.
          </p>
        </div>

        {/* Transaction Capabilities Pills */}
        <div className="flex flex-wrap gap-2.5 pt-10 pb-14">
          {TRANSACTION_SCOPES.map((scope, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-[#121E33] border border-white/10 text-[13px] text-[#CBD5E1] font-sans hover:border-[#C9A227]/40 hover:text-white transition-colors"
            >
              &bull; {scope}
            </span>
          ))}
        </div>

        {/* 5-Stage Transaction Lifecycle Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-6">
          {LIFECYCLE_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="p-6 rounded-[14px] bg-[#050505]/70 border border-white/10 flex flex-col justify-between hover:border-[#C9A227]/40 transition-colors group relative"
            >
              <div className="mb-8">
                <span className="font-headings text-[32px] font-bold text-[#C9A227]/60 group-hover:text-[#C9A227] transition-colors block mb-3">
                  {item.step}
                </span>
                <h4 className="text-white font-headings text-[18px] font-medium mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] text-[12.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-full h-[2px] bg-white/10 group-hover:bg-[#C9A227] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
