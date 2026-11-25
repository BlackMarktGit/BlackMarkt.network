import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { TRANSACTION_MANDATES, LIFECYCLE_STEPS, TRANSACTIONS_DATA } from '../../data/platformData';
import { ArrowRight, MapPin } from 'lucide-react';

export default function TransactionsSection() {
  return (
    <section
      id="transactions"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden my-4"
      aria-labelledby="transactions-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Transaction Advisory & Execution
              </span>
            </div>
            <h2
              id="transactions-heading"
              className="font-headings text-[clamp(28px,3.8vw,50px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
            >
              Strategic Transactions. Sustainable Outcomes.
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[460px] text-[14.5px] leading-relaxed">
            We advise clients across the full arc of complex transactions — combining rigorous quantitative analysis with on-the-ground execution capabilities across London and key African markets.
          </p>
        </div>

        {/* Transaction Capabilities Pills */}
        <div className="pt-8 pb-10">
          <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-3 font-semibold">
            Transaction Mandate Types:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {TRANSACTION_MANDATES.map((mandate, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#050505] border border-white/10 text-[13px] text-[#CBD5E1] font-sans hover:border-[#C9A227]/40 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>{mandate}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 4-Stage Transaction Lifecycle */}
        <div className="pt-4 pb-12">
          <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-4 font-semibold">
            4-Stage Execution Methodology:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LIFECYCLE_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-[16px] bg-[#050505]/70 border border-white/10 flex flex-col justify-between hover:border-[#C9A227]/40 transition-colors group relative"
              >
                <div>
                  <span className="font-headings text-[26px] font-bold text-[#C9A227] block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-white font-headings text-[17px] font-medium mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-full h-[2px] bg-white/10 group-hover:bg-[#C9A227] transition-colors mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Mandate Profiles Preview */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest font-semibold">
              Selected Mandate Profiles:
            </span>
            <Link
              to="/transactions"
              className="text-[#C9A227] hover:text-[#DFBA42] text-[13px] font-medium flex items-center gap-1.5"
            >
              <span>View All Mandates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRANSACTIONS_DATA.slice(0, 2).map((tx) => (
              <div
                key={tx.slug}
                className="p-6 rounded-[16px] bg-[#050505]/60 border border-white/5 hover:border-[#C9A227]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11.5px]">
                    <span className="text-[#C9A227] font-semibold uppercase tracking-wider">{tx.sector}</span>
                    <span className="text-[#94A3B8] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C9A227]" />
                      <span>{tx.location}</span>
                    </span>
                  </div>
                  <h3 className="text-white font-headings text-[18px] font-medium group-hover:text-[#C9A227] transition-colors mb-2 leading-snug">
                    <Link to={`/transactions/${tx.slug}`}>{tx.title}</Link>
                  </h3>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {tx.overview}
                  </p>
                </div>
                <Link
                  to={`/transactions/${tx.slug}`}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#CBD5E1] group-hover:text-[#C9A227] transition-colors"
                >
                  <span>Mandate Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
