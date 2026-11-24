import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { TRANSACTIONS_DATA } from '../data/platformData';

export default function TransactionDetailPage() {
  const { slug } = useParams();
  const tx = TRANSACTIONS_DATA.find((item) => item.slug === slug) || TRANSACTIONS_DATA[0];

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-caption text-[#94A3B8] mb-4 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="shrink-0 text-white/30">/</span>
          <Link to="/transactions" className="hover:text-white transition-colors shrink-0">Transactions</Link>
          <span className="shrink-0 text-white/30">/</span>
          <span className="text-[#C9A227] font-semibold truncate max-w-[180px] sm:max-w-none">Mandate Dossier</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#C9A227]">
            <span className="font-semibold uppercase tracking-wider">{tx.sector}</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">{tx.location}</span>
          </div>

          <h1 className="text-[36px] sm:text-[54px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            {tx.title}
          </h1>

          <p className="text-[20px] sm:text-[23px] text-[#CBD5E1] leading-relaxed max-w-[820px]">
            {tx.scope}
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" className="w-[220px]">
              Engage Lead Partner
            </ActionButton>
            <ActionButton href="/request-proposal" variant="on-dark" className="w-[190px]">
              Submit Similar RFP
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Mandate Key Statistics */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-2">
        {(tx.stats || []).map((s, idx) => (
          <div key={idx} className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center transition-all duration-300">
            <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-2">{s.label}</span>
            <span className="text-[32px] sm:text-[40px] font-headings font-bold text-white block">{s.value}</span>
            <span className="text-[11px] font-caption text-[#C9A227] font-semibold">Verified Metric</span>
          </div>
        ))}
      </section>

      {/* Forensic Mandate Analysis: Challenge vs Intervention */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
        {/* Left: Pre-Close Vulnerabilities & Friction */}
        <div className="lg:col-span-6 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-3 font-semibold">
              PRE-ENGAGEMENT LANDSCAPE
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white mb-6 leading-tight">
              Pre-Close Systemic Challenges
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed mb-6">
              {tx.challenge || tx.scope}
            </p>
            <div className="p-5 rounded-[16px] bg-[#050505] border border-white/10">
              <span className="text-[12px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-2">
                Fiduciary Counterparty:
              </span>
              <p className="text-[14px] text-white/90">{tx.client}</p>
            </div>
          </div>
        </div>

        {/* Right: Black Markt Strategic Intervention */}
        <div className="lg:col-span-6 p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-3 font-semibold">
              ARCHITECTURAL EXECUTION
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white mb-6 leading-tight">
              Black Markt Forensic Intervention
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed mb-6">
              {tx.intervention || tx.impact}
            </p>
            <div className="p-5 rounded-[16px] bg-[#0B1320] border border-[#C9A227]/30">
              <span className="text-[12px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-2">
                Verified Outcome:
              </span>
              <p className="text-[14px] text-white">{tx.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Executive Mandate Overview (from Markdown CMS) */}
      {tx.html && (
        <section className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-2">
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
            MANDATE DOSSIER OVERVIEW
          </span>
          <div 
            className="prose prose-invert max-w-none text-[#CBD5E1] leading-relaxed [&>h3]:text-[22px] [&>h3]:font-headings [&>h3]:font-medium [&>h3]:text-white [&>h3]:mb-3 [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: tx.html }}
          />
        </section>
      )}

      {/* Measurable Deliverables & Fiduciary Verification */}
      {tx.outcomes && tx.outcomes.length > 0 && (
        <section className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-2">
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
            DELIVERABLES &amp; IMPACT METRICS
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white mb-6">
            Quantified operational and financial results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tx.outcomes.map((out, idx) => (
              <div key={idx} className="p-5 rounded-[16px] bg-[#050505] border border-white/10 flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#C9A227] text-black text-[12px] font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <div className="flex-1">
                  {typeof out === 'object' ? (
                    <>
                      <h4 className="text-[15px] text-white font-semibold leading-snug">
                        {out.title}
                      </h4>
                      <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mt-1">
                        {out.desc}
                      </p>
                    </>
                  ) : (
                    <p className="text-[15px] text-white font-medium leading-relaxed">
                      {out}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Board Testimonial Callout */}
      {tx.quote && (
        <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
          <blockquote className="max-w-[880px] mx-auto text-center space-y-4">
            <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase font-semibold">
              FIDUCIARY COMMITTEE ENDORSEMENT
            </span>
            <p className="text-[20px] sm:text-[26px] font-headings font-medium text-white italic leading-relaxed">
              "{tx.quote.text}"
            </p>
            <footer className="text-[14px] text-[#94A3B8]">
              <span className="font-semibold text-white">{tx.quote.author}</span> &bull; {tx.quote.org}
            </footer>
          </blockquote>
        </section>
      )}

      {/* Back to Hub / Next Steps */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <h2 className="text-[30px] sm:text-[38px] font-headings font-medium text-white mb-3">
            Commission a mandate with our advisory team
          </h2>
          <p className="text-[16px] text-[#94A3B8] leading-relaxed">
            Our Senior Managing Directors conduct discrete initial feasibility reviews within 48 hours of mandate submission.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <ActionButton href="/book-consultation" className="w-[210px]">
            Book Consultation
          </ActionButton>
        </div>
      </section>
    </Layout>
  );
}
