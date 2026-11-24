import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { PRACTICES_DATA, TRANSACTIONS_DATA } from '../data/platformData';

export default function PracticeDetailPage() {
  const { slug } = useParams();
  const practice = PRACTICES_DATA.find((p) => p.slug === slug) || PRACTICES_DATA[0];

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-caption text-[#94A3B8] mb-4 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="shrink-0 text-white/30">/</span>
          <Link to="/services" className="hover:text-white transition-colors shrink-0">Practices</Link>
          <span className="shrink-0 text-white/30">/</span>
          <span className="text-[#C9A227] font-semibold truncate max-w-[180px] sm:max-w-none">{practice.title}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-caption text-[#C9A227] uppercase tracking-wider font-semibold">
            <span>{practice.eyebrow}</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-white/80">MANDATE SCOPE {practice.dealSize}</span>
          </div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            {practice.title}
          </h1>

          <p className="text-[20px] sm:text-[23px] text-[#CBD5E1] leading-relaxed max-w-[820px]">
            {practice.shortDesc}
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[210px]">
              Initiate Practice Scoping
            </ActionButton>
            <ActionButton href="/request-proposal" variant="on-dark" className="w-[190px]">
              Submit RFP Brief
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        {(practice.keyMetrics || []).map((m, idx) => (
          <div key={idx} className="p-6 sm:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
            <p className="text-caption text-[#94A3B8] mb-2">{m.label.toUpperCase()}</p>
            <div className="text-[40px] sm:text-[50px] font-headings font-bold text-white">
              {m.value}
            </div>
            <span className="text-[12px] font-caption text-[#C9A227] font-semibold">Verified Metric</span>
          </div>
        ))}
      </section>

      {/* Full Overview & Capabilities Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
        {/* Left Column: Comprehensive Strategy Overview */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
          <div>
            <p className="text-caption text-[#C9A227] mb-3 font-semibold uppercase tracking-wider">PRACTICE METHODOLOGY</p>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium tracking-tight text-white mb-6 leading-snug">
              Forensic analysis backed by capital markets acumen
            </h2>
            {practice.html ? (
              <div 
                className="prose prose-invert max-w-none space-y-4 text-[16px] sm:text-[18px] text-[#CBD5E1] leading-relaxed [&>h3]:text-[22px] [&>h3]:font-headings [&>h3]:font-medium [&>h3]:text-white [&>h3]:mb-3 [&>p]:mb-4"
                dangerouslySetInnerHTML={{ __html: practice.html }}
              />
            ) : (
              <div className="space-y-4 text-[16px] sm:text-[18px] text-[#CBD5E1] leading-relaxed">
                <p>{practice.fullDesc}</p>
                <p>
                  Our Senior Managing Directors maintain active clearance across multiple sovereign jurisdictions, ensuring every recommendation complies with banking secrecy laws, foreign direct investment screening, and cross-border regulatory frameworks.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-[16px] font-headings font-semibold text-white mb-3">
              Standard Client Deliverables
            </h3>
            <ul className="space-y-2 text-[14px] text-[#CBD5E1]">
              {(practice.deliverables || []).map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Key Technical Capabilities List */}
        <div className="lg:col-span-5 p-8 sm:p-12 rounded-[24px] bg-[#070D18] border border-white/10 flex flex-col justify-between">
          <div>
            <p className="text-caption text-[#C9A227] mb-3 font-semibold uppercase tracking-wider">CORE COMPETENCIES</p>
            <h2 className="text-[24px] sm:text-[30px] font-headings font-medium tracking-tight text-white mb-6">
              Specialized Mandate Capabilities
            </h2>
            <div className="space-y-3">
              {practice.capabilities.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0B1320] border border-white/10 shadow-sm flex items-start gap-3 hover:border-[#C9A227]/30 transition-colors">
                  <span className="text-[14px] font-mono text-[#C9A227] font-bold mt-0.5">0{i + 1}</span>
                  <p className="text-[14.5px] text-white font-medium leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#050505] border border-[#C9A227]/30 text-white shadow-xl">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
              Confidential Scoping
            </span>
            <p className="text-[13px] text-white/80 mb-4">
              Need custom terms or private client scoping for an imminent transaction?
            </p>
            <ActionButton href="/book-consultation" className="w-full h-11 text-[13px]">
              Engage Practice Lead
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Relevant Mandates Section */}
      <section className="rounded-[24px] bg-[#050505] border border-white/10 p-8 sm:p-12 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-caption text-[#C9A227] mb-1 font-semibold uppercase tracking-wider">PROVEN TRACK RECORD</p>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium tracking-tight text-white">
              Landmark transactions in this practice
            </h2>
          </div>
          <Link to="/transactions" className="text-[13px] font-caption text-[#C9A227] font-semibold hover:underline">
            View All Transactions &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRANSACTIONS_DATA.slice(0, 2).map((t) => (
            <div key={t.slug} className="p-6 rounded-2xl bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between text-[12px] font-caption text-[#94A3B8] mb-2">
                <span>{t.sector.toUpperCase()}</span>
                <span>{t.location}</span>
              </div>
              <h3 className="text-[20px] font-headings font-medium text-white mb-2">
                <Link to={`/transactions/${t.slug}`} className="hover:text-[#C9A227] transition-colors">
                  {t.title}
                </Link>
              </h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-4">{t.scope}</p>
              <div className="text-[12px] font-caption text-[#C9A227] font-semibold">
                IMPACT: {t.impact}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
