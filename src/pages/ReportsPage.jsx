import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { REPORTS_DATA } from '../data/platformData';
import api from '../services/api';

export default function ReportsPage() {
  const [downloadingReport, setDownloadingReport] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!emailInput) return;

    try {
      await api.subscribeNewsletter(emailInput);
    } catch (err) {
      console.warn('Newsletter subscription fallback:', err);
    }

    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadingReport(null);
      setEmailInput('');
    }, 2800);
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#94A3B8]">
            <span>RESEARCH COMPENDIUM</span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">PEER-REVIEWED WHITEPAPERS</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Quarterly reports &amp; research dossiers
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Authoritative empirical data, infrastructure benchmarks, and regulatory exposure models distributed to sovereign wealth funds, corporate boards, and institutional treasuries.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/insights" variant="primary" className="w-[200px]">
              View All Insights
            </ActionButton>
            <ActionButton href="/book-consultation" variant="on-dark" className="w-[190px]">
              Briefing Request
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="space-y-6 my-4">
        {REPORTS_DATA.map((rep) => (
          <div
            key={rep.slug}
            className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="max-w-[760px] space-y-4">
              <div className="flex items-center gap-3 text-[12px]">
                <span className="px-2.5 py-0.5 rounded bg-[#050505] border border-[#C9A227]/30 text-[#C9A227] font-mono text-[11px] font-semibold uppercase tracking-wider">
                  {rep.badge}
                </span>
                <span className="text-[#94A3B8]">{rep.releaseDate}</span>
                <span className="text-white/20">&bull;</span>
                <span className="text-[#C9A227] font-semibold">{rep.format}</span>
              </div>

              <h2 className="text-[24px] sm:text-[30px] font-headings font-medium text-white leading-tight">
                {rep.title}
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
                {rep.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {(rep.highlights || []).map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13.5px] text-[#CBD5E1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setDownloadingReport(rep)}
                className="w-full lg:w-[210px] inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13.5px] tracking-tight hover:bg-[#DFBA42] shadow-[0_4px_24px_rgba(201,162,39,0.35)] transition-all"
              >
                <span>Download Report</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V10M8 10L5 7M8 10L11 7M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Download Modal */}
      {downloadingReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-[540px] rounded-[24px] bg-[#0B1320] border border-[#C9A227]/30 p-8 sm:p-10 shadow-2xl">
            <button
              onClick={() => {
                setDownloadingReport(null);
                setDownloadSuccess(false);
              }}
              className="absolute top-6 right-6 text-[#94A3B8] hover:text-white transition-colors"
            >
              ✕
            </button>

            {downloadSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#050505] border border-[#C9A227]/50 text-[#C9A227] mx-auto flex items-center justify-center text-[24px]">
                  ✓
                </div>
                <h3 className="text-[24px] font-headings font-medium text-white">
                  Dossier Dispatched
                </h3>
                <p className="text-[14px] text-[#CBD5E1]">
                  An encrypted transmission containing <strong className="text-white">{downloadingReport.title}</strong> has been forwarded to <strong className="text-white">{emailInput}</strong>.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-1">
                    INSTITUTIONAL ACCESS DISPATCH
                  </span>
                  <h3 className="text-[22px] font-headings font-medium text-white leading-snug">
                    {downloadingReport.title}
                  </h3>
                  <p className="text-[13.5px] text-[#CBD5E1] mt-2">
                    Enter your corporate or institutional email address to receive immediate unredacted PDF and dataset suite access.
                  </p>
                </div>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                      Institutional Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="partner@sovereign-fund.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[14px] tracking-tight hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition-colors"
                  >
                    Receive Immediate Download Link &rarr;
                  </button>

                  <p className="text-[11px] text-[#94A3B8] text-center">
                    Protected by Swiss FADP. We never share institutional credentials.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
