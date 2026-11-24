import React from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { LEADERSHIP_DATA } from '../data/platformData';

export default function LeadershipPage() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#94A3B8]">
            <span>GOVERNANCE &amp; PARTNERSHIP</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">THE LEADERSHIP COUNCIL</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            The Leadership Council
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            A partnership of former sovereign investment officers, Tier-1 buyout technologists, and distributed systems authorities dedicated exclusively to institutional mandates.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" variant="primary" className="w-[210px]">
              Engage the Council
            </ActionButton>
            <ActionButton href="/careers" variant="on-dark" className="w-[190px]">
              Join the Partnership
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Fiduciary Partnership Charter */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
          <span className="text-[11px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-2">01 / DISCRETION</span>
          <h3 className="text-[18px] font-headings font-semibold text-white mb-2">Partner-Led Mandates</h3>
          <p className="text-[14px] text-[#94A3B8] leading-relaxed">
            Every engagement is led directly by a Senior Managing Director. We do not delegate client relationships to junior associates.
          </p>
        </div>
        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
          <span className="text-[11px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-2">02 / INDEPENDENCE</span>
          <h3 className="text-[18px] font-headings font-semibold text-white mb-2">Zero Software Kickbacks</h3>
          <p className="text-[14px] text-[#94A3B8] leading-relaxed">
            We accept zero vendor commissions or resale markups. Our advisory opinions are purely fiduciary and objective.
          </p>
        </div>
        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
          <span className="text-[11px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-2">03 / SECURITY</span>
          <h3 className="text-[18px] font-headings font-semibold text-white mb-2">Sovereign Clearance</h3>
          <p className="text-[14px] text-[#94A3B8] leading-relaxed">
            Our Senior Managing Directors hold verified institutional clearances across Swiss, UK, and European regulatory jurisdictions.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="space-y-6 my-4">
        {LEADERSHIP_DATA.map((leader, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-start gap-8 hover:border-[#C9A227]/40 transition-all duration-300"
          >
            {/* Avatar / Monogram */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] flex flex-col items-center justify-center font-headings font-bold text-[32px] sm:text-[38px] shrink-0 shadow-md">
              <span>{leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
              <span className="text-[10px] font-mono tracking-widest text-[#CBD5E1]/60 uppercase mt-0.5">COUNCIL</span>
            </div>

            {/* Profile Content */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1">
                  <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white">
                    {leader.name}
                  </h2>
                  <span className="text-[12px] font-mono text-[#C9A227] font-semibold">
                    {leader.location}
                  </span>
                </div>
                <p className="text-[15px] font-semibold text-[#CBD5E1]">
                  {leader.role}
                </p>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#94A3B8] leading-relaxed">
                {leader.bio}
              </p>

              {/* Credentials Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(leader.credentials || []).map((cred, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-caption text-[#CBD5E1] font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Council Inquiry Banner */}
      <section className="rounded-[24px] bg-gradient-to-r from-[#0B1320] via-[#070D18] to-[#0B1320] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase block mb-2 font-semibold">
            DIRECT COUNCIL ACCESS
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-headings font-medium text-white mb-4 leading-tight">
            Schedule a bilateral discussion with a Managing Director
          </h2>
          <p className="text-[16px] text-[#CBD5E1] leading-relaxed">
            All discussions are conducted under reciprocal non-disclosure agreements with immediate partner availability in London, New York, or Zurich.
          </p>
        </div>
        <ActionButton href="/book-consultation" variant="primary" className="w-[210px] shrink-0">
          Book Consultation
        </ActionButton>
      </section>
    </Layout>
  );
}
