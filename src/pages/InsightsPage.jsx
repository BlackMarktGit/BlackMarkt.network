import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import Icon from '../components/common/Icon';
import { INSIGHTS_DATA } from '../data/platformData';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    'Energy & Infrastructure',
    'Infrastructure',
    'Agriculture',
    'Technology',
    'Capital Markets',
  ];

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Market Intelligence &amp; Perspectives
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Industry Insights &amp; Market Intelligence
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Factual research, strategic perspectives, and sector analyses examining capital allocation, infrastructure development, and commercial growth across African markets.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" variant="primary" className="w-[200px]">
              Book Consultation
            </ActionButton>
            <ActionButton href="/contact" variant="on-dark" className="w-[180px]">
              Contact Us
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto py-6 my-2 no-scrollbar">
        <span className="text-[12px] font-caption text-[#94A3B8] font-semibold uppercase tracking-wider mr-2 shrink-0">
          Topics:
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

      {/* Insights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {filteredInsights.map((art) => (
          <article
            key={art.slug}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/50 shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center justify-between text-[12px] text-[#94A3B8] mb-4 pb-3 border-b border-white/10">
                <span className="px-2.5 py-1 rounded bg-[#050505] text-[#C9A227] font-semibold border border-[#C9A227]/30">
                  {art.category}
                </span>
                <span>{art.readTime}</span>
              </div>

              <h2 className="text-[20px] sm:text-[22px] font-headings font-medium text-white group-hover:text-[#C9A227] transition-colors leading-snug mb-3">
                <Link to={`/insights/${art.slug}`}>{art.title}</Link>
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed line-clamp-3 mb-6">
                {art.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[13px]">
              <span className="text-[#64748B]">{art.date}</span>
              <Link
                to={`/insights/${art.slug}`}
                className="inline-flex items-center gap-1.5 text-[#C9A227] font-semibold group-hover:text-[#DFBA42] transition-colors"
              >
                <span>Read Article</span>
                <Icon name="ArrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Advisory Consultation Banner */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
            Bespoke Research &amp; Advisory
          </span>
          <h3 className="text-[24px] sm:text-[30px] font-headings font-medium text-white">
            Need tailored intelligence for your transaction?
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#94A3B8] mt-1 max-w-[600px]">
            We provide custom feasibility studies, market entry roadmaps, and capital structuring insights for institutional investors and corporate clients.
          </p>
        </div>
        <ActionButton href="/book-consultation" variant="primary" className="shrink-0 w-full sm:w-[200px]">
          Book Consultation
        </ActionButton>
      </section>
    </Layout>
  );
}
