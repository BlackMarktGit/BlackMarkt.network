import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { INDUSTRIES_DATA, TRANSACTIONS_DATA } from '../data/platformData';

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug) || INDUSTRIES_DATA[0];
  const relatedTransactions = TRANSACTIONS_DATA.slice(0, 2);

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-caption text-[#94A3B8] mb-4 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="shrink-0 text-white/30">/</span>
          <Link to="/industries" className="hover:text-white transition-colors shrink-0">Industries</Link>
          <span className="shrink-0 text-white/30">/</span>
          <span className="text-[#C9A227] font-semibold truncate max-w-[180px] sm:max-w-none">{industry.name}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#C9A227]">
            <span className="font-semibold uppercase tracking-wider">{industry.eyebrow}</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-white/80">SECTOR SPECIALIZATION</span>
          </div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            {industry.name}
          </h1>

          <p className="text-[20px] sm:text-[23px] text-[#CBD5E1] leading-relaxed max-w-[820px]">
            {industry.desc}
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[220px]">
              Sector Consultation
            </ActionButton>
            <ActionButton href="/request-proposal" variant="on-dark" className="w-[190px]">
              Submit Sector RFP
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Sector Performance Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <p className="text-caption text-[#94A3B8] mb-2 font-semibold uppercase tracking-wider">PRIMARY BENCHMARK</p>
          <div className="text-[40px] sm:text-[50px] font-headings font-bold text-white">
            {industry.statMetric}
          </div>
          <span className="text-[12px] font-caption text-[#CBD5E1]">{industry.statLabel}</span>
        </div>

        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
          <p className="text-caption text-[#94A3B8] mb-2 font-semibold uppercase tracking-wider">EXECUTION STANDARD</p>
          <div className="text-[40px] sm:text-[50px] font-headings font-bold text-[#C9A227]">
            {industry.secondaryStat}
          </div>
          <span className="text-[12px] font-caption text-[#CBD5E1]">{industry.secondaryStatLabel}</span>
        </div>

        <div className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center transition-all duration-300">
          <p className="text-caption text-[#94A3B8] mb-2 font-semibold uppercase tracking-wider">SECURITY RATING</p>
          <div className="text-[24px] sm:text-[28px] font-headings font-bold text-white">
            Tier-IV Sovereign
          </div>
          <span className="text-[12px] font-caption text-[#C9A227] font-semibold mt-1">Swiss FADP &amp; ISO 27001</span>
        </div>
      </section>

      {/* Structural Challenges & Engineering Solutions */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
        {/* Left: Sector Headwinds & Vulnerabilities */}
        <div className="lg:col-span-6 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-3 font-semibold">
              STRUCTURAL HEADWINDS
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white mb-6 leading-tight">
              Critical vulnerabilities demanding partner intervention
            </h2>
            <div className="space-y-6">
              {(industry.challenges || []).map((ch, i) => (
                <div key={i} className="p-5 rounded-[16px] bg-[#050505] border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-white/10 text-[#C9A227] text-[11px] font-mono flex items-center justify-center font-bold">
                      0{i + 1}
                    </span>
                    <span className="text-[14px] font-semibold text-white">Systemic Challenge</span>
                  </div>
                  <p className="text-[14.5px] text-[#94A3B8] leading-relaxed pl-9">
                    {ch}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Black Markt Proprietary Interventions */}
        <div className="lg:col-span-6 p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-3 font-semibold">
              PROPRIETARY INTERVENTIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white mb-6 leading-tight">
              High-integrity architectures engineered for fault tolerance
            </h2>
            <div className="space-y-6">
              {(industry.solutions || []).map((sol, i) => (
                <div key={i} className="p-5 rounded-[16px] bg-[#0B1320] border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#C9A227] text-[#050505] text-[11px] font-mono flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <span className="text-[14px] font-semibold text-white">Advisory Architecture</span>
                  </div>
                  <p className="text-[14.5px] text-[#CBD5E1] leading-relaxed pl-9">
                    {sol}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework Compliance Standards */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-2">
        <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
          GOVERNANCE &amp; DISCLOSURE
        </span>
        <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white mb-6">
          Regulatory compliance regimes supported in this sector
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(industry.regulations || [
            'Basel IV Capital Buffers',
            'EU Digital Operational Resilience Act (DORA)',
            'Swiss Federal Act on Data Protection (FADP)',
            'ISO 27001 Tier-IV Security'
          ]).map((reg, idx) => (
            <div key={idx} className="p-5 rounded-[16px] bg-[#050505] border border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider font-semibold">Accreditation</span>
              </div>
              <p className="text-[15px] font-headings font-semibold text-white">{reg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Landmark Mandates */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
              VERIFIED TRACK RECORD
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white">
              Landmark transactions in this domain
            </h2>
          </div>
          <ActionButton href="/transactions" variant="on-dark" className="w-[180px]">
            All Case Studies
          </ActionButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedTransactions.map((tx) => (
            <div key={tx.slug} className="p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-sm flex flex-col justify-between transition-all duration-300">
              <div>
                <span className="text-[11px] font-caption text-[#C9A227] font-semibold tracking-wider uppercase block mb-2">
                  {tx.location} &bull; {tx.sector}
                </span>
                <h3 className="text-[20px] font-headings font-medium text-white mb-3">
                  <Link to={`/transactions/${tx.slug}`} className="hover:text-[#C9A227] transition-colors">
                    {tx.title}
                  </Link>
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-6">
                  {tx.scope}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px]">
                <span className="font-caption text-white font-semibold">{tx.impact}</span>
                <Link to={`/transactions/${tx.slug}`} className="text-[#C9A227] font-semibold hover:underline">
                  Dossier &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase block mb-2 font-semibold">
            CONFIDENTIAL ENGAGEMENT
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-headings font-medium text-white mb-4 leading-tight">
            Retain our specialized industry counsel
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#94A3B8] leading-relaxed">
            Our Sector Managing Directors are available under reciprocal Non-Disclosure Agreements for institutional sponsors, boards, and sovereign treasuries.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <ActionButton href="/book-consultation" className="w-[210px]">
            Initiate Mandate
          </ActionButton>
        </div>
      </section>
    </Layout>
  );
}
