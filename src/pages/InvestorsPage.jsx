import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import InvestorsSection from '../components/sections/InvestorsSection';
import StrategicConsultationForm from '../components/sections/StrategicConsultationForm';
import { INDUSTRIES_DATA } from '../data/platformData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InvestorsPage() {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              INVESTOR NETWORK
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            Access African Growth Opportunities
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Black Markt Network Consultancy connects institutional investors, family offices, sovereign funds, and DFIs with verified, high-potential African businesses and projects.
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
              <span>Advisory Capabilities</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Investor Network Component */}
      <InvestorsSection />

      {/* Supported Sectors for Investors */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="max-w-[700px] mb-10">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
              Sectors of Exposure
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white leading-tight">
              Opportunities Across Foundational Growth Sectors
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-2">
              We connect international capital with opportunities across the core sectors driving African economic development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.slug}
                className="p-5 rounded-[16px] bg-[#050505]/60 border border-white/5 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_2px_10px_rgba(201,162,39,0.12)] flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                  <Icon name={ind.iconName} className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-white font-headings text-[17px] font-medium leading-snug">
                    {ind.name}
                  </h3>
                  <p className="text-[#94A3B8] text-[12.5px] leading-relaxed mt-1">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Consultation Anchor */}
      <StrategicConsultationForm />
    </Layout>
  );
}
