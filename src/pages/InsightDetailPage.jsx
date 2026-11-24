import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import Icon from '../components/common/Icon';
import { INSIGHTS_DATA } from '../data/platformData';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const insight = INSIGHTS_DATA.find((item) => item.slug === slug) || INSIGHTS_DATA[0];

  const relatedInsights = INSIGHTS_DATA.filter((item) => item.slug !== insight.slug).slice(0, 2);

  // Helper to split markdown-like sections in content
  const renderContent = (content) => {
    if (!content) return null;
    const paragraphs = content.trim().split('\n\n');
    return paragraphs.map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-[22px] sm:text-[24px] font-headings font-medium text-white mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').filter(Boolean);
        return (
          <ul key={idx} className="space-y-2 my-4 pl-4">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#CBD5E1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2.5 shrink-0" />
                <span className="leading-relaxed">
                  {it.replace(/^[0-9]+\.\s*|-\s*/, '')}
                </span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <Layout>
      {/* Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-[13px] text-[#94A3B8] mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
          <span className="text-white/30">/</span>
          <span className="text-[#C9A227] font-semibold">{insight.category}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold">
            <span className="px-3 py-1 rounded-full bg-[#050505] text-[#C9A227] border border-[#C9A227]/30 uppercase tracking-wider">
              {insight.category}
            </span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#94A3B8]">{insight.date}</span>
            <span className="text-white/30">&bull;</span>
            <span className="text-[#C9A227]">{insight.readTime}</span>
          </div>

          <h1 className="text-[32px] sm:text-[46px] lg:text-[54px] font-headings font-medium tracking-tight text-white leading-[1.08]">
            {insight.title}
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[#CBD5E1] font-body leading-relaxed max-w-[840px] pt-2">
            {insight.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Article Body */}
        <article className="lg:col-span-8 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="border-b border-white/10 pb-6 mb-8 flex items-center justify-between text-[13px] text-[#94A3B8]">
            <span>Published by Black Markt Network Advisory</span>
            <span className="text-[#C9A227] font-semibold">London Desk</span>
          </div>

          <div className="prose-content">
            {renderContent(insight.content)}
          </div>

          <div className="border-t border-white/10 pt-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[14px] text-[#94A3B8] hover:text-white transition-colors"
            >
              <Icon name="ArrowLeft" className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
            <ActionButton href="/book-consultation" variant="primary" className="w-full sm:w-[200px]">
              Discuss This Topic
            </ActionButton>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Advisory Briefing Card */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B1320] border border-[#C9A227]/30 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              Strategic Advisory
            </span>
            <h3 className="text-[20px] font-headings font-medium text-white mb-3">
              Explore Transaction Opportunities
            </h3>
            <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-6">
              Our team assists institutional investors and project sponsors with capital structuring, market entry, and partnership advisory across African growth sectors.
            </p>
            <ActionButton href="/book-consultation" variant="primary" className="w-full">
              Book Consultation
            </ActionButton>
          </div>

          {/* Related Articles */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <span className="text-[11px] font-caption text-[#94A3B8] uppercase tracking-wider block mb-4 font-semibold">
              Related Analysis
            </span>
            <div className="space-y-4">
              {relatedInsights.map((rel) => (
                <div key={rel.slug} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-[11px] text-[#C9A227] font-semibold block mb-1">
                    {rel.category}
                  </span>
                  <Link
                    to={`/insights/${rel.slug}`}
                    className="text-[15px] font-medium text-white hover:text-[#C9A227] transition-colors leading-snug block mb-1"
                  >
                    {rel.title}
                  </Link>
                  <span className="text-[12px] text-[#64748B]">{rel.readTime}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
