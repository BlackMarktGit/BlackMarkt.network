import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { INSIGHTS_DATA, RESEARCH_PILLARS } from '../data/platformData';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(INSIGHTS_DATA.map((item) => item.category))];

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              MARKET INTELLIGENCE &amp; RESEARCH
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Industry Insights &amp; Market Intelligence
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[820px] font-body">
            Factual research, strategic perspectives, and sector analyses examining capital allocation, infrastructure development, and commercial growth across African markets.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Request Bespoke Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[13.5px] font-medium transition-all"
            >
              <span>Contact Editorial Desk</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Pillars Overview */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
              Research Practice Scope
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-headings font-medium text-white leading-tight">
              Four Core Research &amp; Commentary Pillars
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-2">
              Our commentary provides rigorous, institutional-grade analysis for capital allocators, corporate executives, and policy leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[16px] bg-[#0B1320] border border-white/5 hover:border-[#C9A227]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-3.5">
                    <BookOpen className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <h3 className="text-white font-headings text-[18px] font-medium leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[13px] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto py-4 my-2 no-scrollbar">
        <span className="text-[12px] font-sans text-[#94A3B8] font-semibold uppercase tracking-wider mr-2 shrink-0">
          Filter By Theme:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#C9A227] text-black font-semibold shadow-md'
                : 'bg-[#0B1320] text-[#CBD5E1] hover:text-white border border-white/10 hover:border-[#C9A227]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Flagship Insights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
        {filteredInsights.map((art) => (
          <article
            key={art.slug}
            className="flex flex-col justify-between p-8 rounded-[24px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/50 shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center justify-between text-[12px] text-[#94A3B8] mb-4 pb-3 border-b border-white/10">
                <span className="px-3 py-1 rounded-md bg-[#050505] text-[#C9A227] font-semibold border border-[#C9A227]/30">
                  {art.category}
                </span>
                <span>{art.readTime}</span>
              </div>

              <h2 className="text-[22px] sm:text-[25px] font-headings font-medium text-white group-hover:text-[#C9A227] transition-colors leading-snug mb-3">
                <Link to={`/insights/${art.slug}`}>{art.title}</Link>
              </h2>

              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed mb-6">
                {art.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[13px]">
              <span className="text-[#64748B]">{art.date}</span>
              <Link
                to={`/insights/${art.slug}`}
                className="inline-flex items-center gap-1.5 text-[#C9A227] font-semibold group-hover:text-[#DFBA42] transition-colors"
              >
                <span>Read Full Briefing</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Advisory Consultation Banner */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-sans text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
            Bespoke Research &amp; Advisory
          </span>
          <h3 className="text-[24px] sm:text-[30px] font-headings font-medium text-white">
            Need tailored intelligence for your transaction?
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#94A3B8] mt-1 max-w-[620px]">
            We provide custom feasibility studies, market entry roadmaps, and capital structuring insights for institutional investors and corporate clients.
          </p>
        </div>
        <Link
          to="/book-consultation"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shrink-0 w-full sm:w-auto"
        >
          <span>Book Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </Layout>
  );
}
