import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { INSIGHTS_DATA, REPORTS_DATA } from '../data/platformData';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'M&A & CAPITAL MARKETS', 'DIGITAL INFRASTRUCTURE', 'PRIVATE EQUITY DUE DILIGENCE', 'MARKET INTELLIGENCE'];

  const filteredInsights = selectedCategory === 'All'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">MARKET INTELLIGENCE &amp; RESEARCH</span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">Q1 2026 OUTLOOK</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Strategic intelligence &amp; fiduciary research
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Rigorous macroeconomic analysis, empirical technology debt benchmarks, and sovereign digital governance briefs produced by our Senior Managing Directors.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/reports" className="w-[210px]">
              Browse Research Reports
            </ActionButton>
            <ActionButton href="/book-consultation" variant="on-dark" className="w-[190px]">
              Briefing Request
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Featured Research Banner */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded bg-[#C9A227] text-black font-mono text-[11px] font-bold uppercase tracking-wider">
              FLAGSHIP WHITEPAPER
            </span>
            <span className="text-[12px] text-white/50">&bull; 84 Pages &bull; Free Institutional Access</span>
          </div>
          <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white mb-4 leading-tight">
            2026 Sovereign Data Center &amp; Hyperscale Infrastructure Index
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#94A3B8] leading-relaxed mb-6">
            A comprehensive benchmark analyzing power grid capacity, subsea landing choke points, and Swiss FADP compliance across 24 sovereign jurisdictions.
          </p>
          <div className="flex gap-4">
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#C9A227] text-black font-semibold text-[13px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-colors"
            >
              <span>Download Executive Summary</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="p-6 rounded-[20px] bg-[#0B1320] border border-white/10 text-center w-full lg:w-[280px] shrink-0">
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">Global Coverage</span>
          <span className="text-[36px] font-headings font-bold text-white block">24</span>
          <span className="text-[12px] text-[#94A3B8]">Sovereign Nations Evaluated</span>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto py-4 my-2 no-scrollbar">
        <span className="text-[12px] font-caption text-[#94A3B8] font-semibold uppercase tracking-wider mr-2">Filter Topics:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-[#C9A227] text-black font-semibold shadow-md'
                : 'bg-[#0B1320] text-[#CBD5E1] hover:text-white border border-white/10 hover:border-[#C9A227]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Intelligence Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
        {filteredInsights.map((art) => (
          <article
            key={art.slug}
            className="p-8 sm:p-10 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 text-[12px]">
                <span className="font-caption text-[#C9A227] font-semibold uppercase tracking-wider">
                  {art.category}
                </span>
                <span className="text-[#94A3B8]">{art.readTime}</span>
              </div>

              <h2 className="text-[22px] sm:text-[26px] font-headings font-medium text-white mb-3 group-hover:text-[#C9A227] transition-colors leading-snug">
                <Link to={`/insights/${art.slug}`}>{art.title}</Link>
              </h2>

              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px]">
              <div>
                <span className="text-white font-semibold block">{art.author}</span>
                <span className="text-[11px] text-[#94A3B8]">{art.date}</span>
              </div>
              <Link
                to={`/insights/${art.slug}`}
                className="text-[#F8F9FA] font-semibold hover:text-[#C9A227] transition-colors flex items-center gap-1"
              >
                <span>Read Analysis</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Quarterly Reports Link Strip */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
            RESEARCH COMPENDIUM
          </span>
          <h3 className="text-[24px] font-headings font-medium text-white">
            Looking for complete whitepapers and data suites?
          </h3>
          <p className="text-[15px] text-[#94A3B8] mt-1">
            Access our full library of quarterly whitepapers, technical due diligence indexes, and regulatory frameworks.
          </p>
        </div>
        <ActionButton href="/reports" className="w-[190px] shrink-0">
          View All Reports
        </ActionButton>
      </section>
    </Layout>
  );
}
