import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { TRANSACTION_SCOPES, LIFECYCLE_STEPS } from '../../data/platformData';

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
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Transaction Advisory
              </span>
            </div>
            <h2
              id="transactions-heading"
              className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
            >
              Strategic Transactions. Sustainable Outcomes.
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[440px] text-[14.5px] leading-relaxed">
            We support clients throughout the transaction lifecycle, from opportunity assessment and capital strategy through investor engagement, negotiation and execution.
          </p>
        </div>

        {/* Transaction Capabilities Pills */}
        <div className="pt-8 pb-10">
          <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-3 font-semibold">
            Our Advisory Capabilities Span:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {TRANSACTION_SCOPES.map((scope, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#050505] border border-white/10 text-[13px] text-[#CBD5E1] font-sans hover:border-[#C9A227]/40 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>{scope}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 5-Stage Transaction Lifecycle */}
        <div className="pt-4">
          <span className="text-[#94A3B8] text-[11.5px] font-sans uppercase tracking-widest block mb-4 font-semibold">
            Transaction Execution Lifecycle:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {LIFECYCLE_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-[16px] bg-[#050505]/70 border border-white/10 flex flex-col justify-between hover:border-[#C9A227]/40 transition-colors group relative"
              >
                <div>
                  <span className="font-headings text-[28px] font-bold text-[#C9A227] block mb-2">
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

        {/* Link to Transactions page */}
        <div className="pt-10 flex justify-center">
          <Link
            to="/transactions"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#C9A227] hover:text-[#DFBA42] transition-colors"
          >
            <span>View transaction case studies &amp; advisory credentials</span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
