import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import InvestorsSection from '../components/sections/InvestorsSection';
import StrategicConsultationForm from '../components/sections/StrategicConsultationForm';
import { INDUSTRIES_DATA, MANDATE_ALIGNMENT_MATRIX } from '../data/platformData';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function InvestorsPage() {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              INVESTOR NETWORK & CAPITAL PARTNERSHIPS
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            Connecting Global Capital to African Market Expansion
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#CBD5E1] leading-relaxed max-w-[820px] font-body">
            Black Markt Network Consultancy bridges the structural divide between international capital providers and high-quality, growth-stage enterprises and infrastructure projects across the African continent. We provide curated, proprietary deal flow, comprehensive transaction diligence, and bespoke co-investment structuring tailored to distinct risk-return mandates.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Request Investor Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/transactions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[13.5px] font-medium transition-all"
            >
              <span>View Mandate Profiles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Investor Network Component (Pools & De-Risking Advantage) */}
      <InvestorsSection />

      {/* Mandate Alignment Matrix Section */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
              Strategic Portfolio Fit
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white leading-tight">
              Mandate Alignment Matrix
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-2">
              How Black Markt maps global institutional capital pools against tailored African transaction structures and return profiles.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="overflow-x-auto rounded-[16px] border border-white/10 bg-[#050505]/70">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#080E18]">
                  <th className="py-4 px-6 text-[#C9A227] text-[12px] font-sans font-semibold uppercase tracking-wider w-[28%]">
                    Investor Category
                  </th>
                  <th className="py-4 px-6 text-[#C9A227] text-[12px] font-sans font-semibold uppercase tracking-wider w-[40%]">
                    Investment Focus & Return Profiles
                  </th>
                  <th className="py-4 px-6 text-[#C9A227] text-[12px] font-sans font-semibold uppercase tracking-wider w-[32%]">
                    Preferred Transaction Instruments
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[13.5px]">
                {MANDATE_ALIGNMENT_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 font-headings text-white font-medium align-top">
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span>{row.category}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#CBD5E1] leading-relaxed align-top">
                      {row.focus}
                    </td>
                    <td className="py-5 px-6 text-[#94A3B8] leading-relaxed align-top">
                      <span className="inline-block px-3 py-1.5 rounded-lg bg-[#0B1320] border border-[#C9A227]/20 text-[#DFBA42] text-[12.5px] font-medium">
                        {row.preferredInstruments}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Sectors for Investors */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-[700px]">
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
                Sectors of Exposure
              </span>
              <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white leading-tight">
                High-Conviction Investment Themes
              </h2>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-2">
                We originate and diligence opportunities across 9 foundational growth sectors aligned with AfCFTA integration and structural macro tailwinds.
              </p>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#C9A227] hover:text-[#DFBA42] shrink-0"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="p-5 rounded-[16px] bg-[#0B1320] border border-white/5 hover:border-[#C9A227]/40 flex items-start gap-3.5 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_2px_10px_rgba(201,162,39,0.12)] flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5 group-hover:border-[#C9A227] transition-all">
                  <Icon name={ind.iconName} className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-white font-headings text-[17px] font-medium leading-snug group-hover:text-[#C9A227] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-[#94A3B8] text-[12.5px] leading-relaxed mt-1 line-clamp-2">
                    {ind.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Consultation Anchor */}
      <StrategicConsultationForm />
    </Layout>
  );
}
