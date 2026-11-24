import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { TRANSACTIONS_DATA, TRANSACTION_SCOPES, LIFECYCLE_STEPS } from '../data/platformData';
import { ArrowRight, MapPin } from 'lucide-react';

export default function TransactionsPage() {
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', ...new Set(TRANSACTIONS_DATA.map((t) => t.sector))];

  const filtered = selectedSector === 'All'
    ? TRANSACTIONS_DATA
    : TRANSACTIONS_DATA.filter((t) => t.sector === selectedSector);

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              TRANSACTION ADVISORY
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            Strategic Transactions. Sustainable Outcomes.
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            We support clients throughout the transaction lifecycle, from initial opportunity assessment and capital strategy through investor engagement, negotiation and execution.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Discuss a Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advisory Capabilities Overview */}
      <section className="p-8 sm:p-10 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-3">
          Core Transaction Scopes
        </span>
        <div className="flex flex-wrap gap-2.5">
          {TRANSACTION_SCOPES.map((scope, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-[#0B1320] border border-white/10 text-[13px] text-[#CBD5E1]"
            >
              {scope}
            </span>
          ))}
        </div>
      </section>

      {/* Sector Filter Chips */}
      <section className="flex items-center gap-2 overflow-x-auto py-2 my-2 no-scrollbar">
        <span className="text-[12px] text-[#94A3B8] font-semibold uppercase tracking-wider mr-2">Filter:</span>
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

      {/* Transaction Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {filtered.map((tx) => (
          <div
            key={tx.slug}
            className="p-8 rounded-[20px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11.5px] font-sans text-[#C9A227] font-semibold tracking-wider uppercase">
                  {tx.sector}
                </span>
                <span className="flex items-center gap-1 text-[11.5px] text-[#94A3B8]">
                  <MapPin className="w-3 h-3 text-[#C9A227]" />
                  <span>{tx.location}</span>
                </span>
              </div>

              <h2 className="text-[20px] sm:text-[22px] font-headings font-medium text-white mb-2.5 group-hover:text-[#C9A227] transition-colors leading-snug">
                <Link to={`/transactions/${tx.slug}`}>{tx.title}</Link>
              </h2>

              <span className="inline-block text-[12px] font-sans font-semibold text-[#CBD5E1] bg-[#050505] border border-white/10 px-3 py-1 rounded-md mb-4">
                {tx.scope}
              </span>

              <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-6">
                {tx.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                to={`/transactions/${tx.slug}`}
                className="text-[13px] font-semibold text-[#CBD5E1] group-hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
              >
                <span>Transaction Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* 5-Stage Lifecycle Section */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="max-w-[700px] mb-10">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
              Execution Rigor
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white leading-tight">
              Our 5-Stage Advisory Lifecycle
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-2">
              Structured methodology designed to ensure deal clarity, risk mitigation, and successful financial closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {LIFECYCLE_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-[16px] bg-[#0B1320] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-headings text-[26px] font-bold text-[#C9A227] block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-white font-headings text-[17px] font-medium mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
