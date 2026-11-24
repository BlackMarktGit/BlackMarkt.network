import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { TRANSACTIONS_DATA } from '../data/platformData';

export default function TransactionsPage() {
  const [selectedSector, setSelectedSector] = useState('All');
  const sectors = ['All', 'Financial Institutions', 'Telecommunications & Energy', 'Private Equity / Logistics', 'Capital Markets'];

  const filteredTransactions = selectedSector === 'All'
    ? TRANSACTIONS_DATA
    : TRANSACTIONS_DATA.filter((tx) => tx.sector === selectedSector);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">VERIFIED MANDATES</span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">$50B+ CUMULATIVE ADVISORY VALUE</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Landmark transactions &amp; case studies
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Fiduciary discretion shields our counterparty identities, but our measurable outcomes stand as sovereign benchmarks. Discover how we protect value in high-stakes corporate and infrastructure transactions.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[210px]">
              Discuss Your Mandate
            </ActionButton>
            <ActionButton href="/request-proposal" variant="on-dark" className="w-[190px]">
              Submit RFP Brief
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Aggregate Transaction Impact Telemetry */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
        <div className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-1">Total Advised Value</span>
          <span className="text-[34px] sm:text-[44px] font-headings font-bold text-white block">$50B+</span>
          <span className="text-[12px] font-caption text-[#C9A227] font-semibold">Across 4 Continents</span>
        </div>
        <div className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-1">Liabilities Shielded</span>
          <span className="text-[34px] sm:text-[44px] font-headings font-bold text-white block">$2.8B+</span>
          <span className="text-[12px] font-caption text-[#C9A227] font-semibold">Pre-Close Identified</span>
        </div>
        <div className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-1">Execution Accuracy</span>
          <span className="text-[34px] sm:text-[44px] font-headings font-bold text-white block">100%</span>
          <span className="text-[12px] font-caption text-[#C9A227] font-semibold">Day-1 TSA Exits</span>
        </div>
        <div className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-1">Clearing Latency</span>
          <span className="text-[34px] sm:text-[44px] font-headings font-bold text-white block">&lt; 1ms</span>
          <span className="text-[12px] font-caption text-[#C9A227] font-semibold">Core Transaction Engine</span>
        </div>
      </section>

      {/* Sector Filter Chips */}
      <section className="flex items-center gap-2 overflow-x-auto py-4 my-2 no-scrollbar">
        <span className="text-[12px] font-caption text-[#94A3B8] font-semibold uppercase tracking-wider mr-2">Filter by Sector:</span>
        {sectors.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSector(sec)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              selectedSector === sec
                ? 'bg-[#C9A227] text-black font-semibold shadow-md'
                : 'bg-[#0B1320] text-[#CBD5E1] hover:text-white border border-white/10 hover:border-[#C9A227]/30'
            }`}
          >
            {sec}
          </button>
        ))}
      </section>

      {/* Transactions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
        {filteredTransactions.map((tx, idx) => (
          <div
            key={tx.slug}
            className="p-8 sm:p-10 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-caption text-[#C9A227] font-semibold tracking-wider uppercase">
                  {tx.location} &bull; {tx.sector}
                </span>
                <span className="text-[11px] font-mono text-[#94A3B8]">MANDATE 0{idx + 1}</span>
              </div>

              <h2 className="text-[24px] sm:text-[28px] font-headings font-medium text-white mb-4 group-hover:text-[#C9A227] transition-colors leading-snug">
                <Link to={`/transactions/${tx.slug}`}>{tx.title}</Link>
              </h2>

              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                {tx.scope}
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 mb-6">
                {tx.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[18px] font-headings font-bold text-white block">{s.value}</span>
                    <span className="text-[10.5px] font-caption text-[#94A3B8] block">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Client Quote Highlight */}
              {tx.quote && (
                <blockquote className="border-l-2 border-[#C9A227] pl-4 italic text-[13.5px] text-[#CBD5E1] mb-6 leading-relaxed">
                  "{tx.quote.text}"
                  <span className="block not-italic text-[11px] text-[#94A3B8] font-semibold mt-1">
                    &mdash; {tx.quote.author}, {tx.quote.org}
                  </span>
                </blockquote>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <Link
                to={`/transactions/${tx.slug}`}
                className="text-[13px] font-caption text-[#F8F9FA] font-semibold hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Mandate Dossier</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="text-[12px] font-caption text-[#C9A227] font-semibold">{tx.impact}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Institutional Inquiry Banner */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase block mb-2 font-semibold">
            STRICT FIDUCIARY PRIVACY
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-headings font-medium text-white mb-4 leading-tight">
            Schedule a confidential transaction briefing
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#94A3B8] leading-relaxed">
            Detailed case files, technical debt forensic audit logs, and carve-out playbooks are available for review under reciprocal NDA at our London or Zurich offices.
          </p>
        </div>
        <ActionButton href="/book-consultation" className="w-[210px] shrink-0">
          Initiate Briefing
        </ActionButton>
      </section>
    </Layout>
  );
}
