import React from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import InvestorsSection from '../components/sections/InvestorsSection';
import StrategicConsultationForm from '../components/sections/StrategicConsultationForm';
import { Shield, Globe, Award, TrendingUp, Lock } from 'lucide-react';

export default function InvestorsPage() {
  return (
    <Layout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 px-6 lg:px-8 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/60 via-[#050505] to-[#050505] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-xs font-mono tracking-widest uppercase">
              <Globe className="w-3.5 h-3.5" />
              Global Investor Relations &amp; Syndication
            </div>

            <h1 className="font-headings text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
              Connecting Global Capital With <br />
              <span className="italic font-serif text-[#C9A227]">High-Yield African Corridors</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              We structure bankable, de-risked investment vehicles for sovereign wealth funds, development finance institutions, private equity sponsors, and global family offices seeking alpha across Africa’s most transformative sectors.
            </p>

            <div className="subpage-cta-wrap pt-4 flex flex-wrap justify-center gap-4">
              <ActionButton href="#consultation" variant="primary" className="w-[230px]">
                Request Investor Briefing
              </ActionButton>
              <ActionButton href="/transactions" variant="on-dark" className="w-[230px]">
                Track Record &amp; Pipeline
              </ActionButton>
            </div>
          </div>
        </section>

        {/* Global Investor Criteria & Allocation Pillars */}
        <section className="py-20 px-6 lg:px-8 border-b border-white/10 bg-[#070A0F]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#0B1320]/60 border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227]">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-headings text-xl text-white">De-Risked Deal Structures</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Bespoke political risk mitigation, FX currency hedging, sovereign guarantees, and multilateral credit enhancement facilities.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1320]/60 border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-headings text-xl text-white">Institutional Diligence</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Forensic audit standards, ESG compliance frameworks, and on-the-ground intelligence across key African metropolitan hubs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1320]/60 border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-headings text-xl text-white">Proprietary Pipeline</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Exclusive access to pre-cleared, non-auction mandates in infrastructure, renewable energy, and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 7 Investor Types & Network Section */}
        <InvestorsSection />

        {/* Consultation Form Anchor */}
        <StrategicConsultationForm />
      </div>
    </Layout>
  );
}
