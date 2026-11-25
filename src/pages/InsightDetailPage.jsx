import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { INSIGHTS_DATA } from '../data/platformData';
import { ArrowRight, ArrowLeft, Bookmark, Clock, Calendar, Share2, Check, ChevronRight } from 'lucide-react';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const insight = INSIGHTS_DATA.find((item) => item.slug === slug) || INSIGHTS_DATA[0];
  const relatedInsights = INSIGHTS_DATA.filter((item) => item.slug !== insight.slug).slice(0, 3);

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Helper to format inline bold, italics and code
  const formatInline = (text) => {
    if (!text) return '';
    // Split by bold (**text**)
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  // Comprehensive Rich Content Parser
  const renderContent = (content) => {
    if (!content) return null;
    const paragraphs = content.trim().split(/\n\s*\n/);

    return paragraphs.map((block, idx) => {
      const trimmed = block.trim();

      // Heading 2 (## Heading)
      if (trimmed.startsWith('## ')) {
        const text = trimmed.replace('## ', '');
        return (
          <div key={idx} className="mt-12 mb-5 pt-4 border-t border-white/10 first:mt-0 first:pt-0 first:border-t-0">
            <h2 className="text-[22px] sm:text-[26px] font-headings font-medium text-white flex items-center gap-2.5 leading-snug">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
              <span>{text}</span>
            </h2>
          </div>
        );
      }

      // Heading 3 (### Heading)
      if (trimmed.startsWith('### ')) {
        const text = trimmed.replace('### ', '');
        return (
          <h3 key={idx} className="text-[19px] sm:text-[21px] font-headings font-medium text-[#DFBA42] mt-8 mb-3 leading-snug">
            {text}
          </h3>
        );
      }

      // Heading 4 (#### Heading)
      if (trimmed.startsWith('#### ')) {
        const text = trimmed.replace('#### ', '');
        return (
          <h4 key={idx} className="text-[17px] font-headings font-medium text-white mt-6 mb-2 leading-snug">
            {text}
          </h4>
        );
      }

      // Blockquote (> Quote)
      if (trimmed.startsWith('>')) {
        const quoteText = trimmed.replace(/^>\s*"?|"$/g, '').trim();
        return (
          <blockquote
            key={idx}
            className="my-8 p-6 sm:p-7 rounded-[18px] bg-[#050505] border-l-4 border-[#C9A227] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <p className="text-[16px] sm:text-[18px] italic text-[#E2E8F0] leading-relaxed font-serif">
              "{quoteText}"
            </p>
            <span className="block mt-3 text-[11.5px] font-sans uppercase tracking-wider text-[#C9A227] font-semibold">
              Black Markt Network &bull; Strategic Research Advisory
            </span>
          </blockquote>
        );
      }

      // Unordered or Ordered List (- Item or 1. Item)
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed)) {
        const lines = trimmed.split('\n').filter(Boolean);
        return (
          <ul key={idx} className="space-y-3.5 my-6 pl-2 sm:pl-4">
            {lines.map((line, lIdx) => {
              const cleanLine = line.replace(/^[-*]\s*|^\d+\.\s*/, '').trim();
              return (
                <li key={lIdx} className="flex items-start gap-3.5 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-[1.7]">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(201,162,39,0.5)]" />
                  <div className="flex-1">
                    {formatInline(cleanLine)}
                  </div>
                </li>
              );
            })}
          </ul>
        );
      }

      // Standard Paragraph
      return (
        <p key={idx} className="text-[16px] sm:text-[17px] text-[#CBD5E1] leading-[1.8] mb-5 font-body">
          {formatInline(trimmed)}
        </p>
      );
    });
  };

  return (
    <Layout>
      {/* Breadcrumb & Article Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] mb-6 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
          <Link to="/insights" className="hover:text-white transition-colors shrink-0">Market Intelligence</Link>
          <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
          <span className="text-[#C9A227] font-semibold truncate">{insight.category}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold">
            <span className="px-3 py-1 rounded-md bg-[#050505] text-[#C9A227] border border-[#C9A227]/30 uppercase tracking-wider">
              {insight.category}
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{insight.date}</span>
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="flex items-center gap-1.5 text-[#CBD5E1]">
              <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{insight.readTime}</span>
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] lg:text-[58px] font-headings font-medium tracking-tight text-white leading-[1.06]">
            {insight.title}
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#CBD5E1] font-body leading-relaxed max-w-[840px] pt-1">
            {insight.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#050505] border border-white/15 hover:border-[#C9A227]/40 text-[#CBD5E1] hover:text-white text-[12.5px] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Share Briefing</span>
                </>
              )}
            </button>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] text-[12.5px] font-semibold transition-all shadow-[0_2px_12px_rgba(201,162,39,0.2)]"
            >
              <span>Discuss Mandate Implications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Article Body */}
        <article className="lg:col-span-8 p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          {/* Metadata Byline */}
          <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-[#94A3B8]">
            <div>
              <span className="text-white block font-medium">Black Markt Research &amp; Commentary Practice</span>
              <span className="text-[#64748B] text-[12px]">London Desk &bull; Quantitative &amp; Cross-Border Financial Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 font-mono text-[11px] uppercase tracking-wider">Institutional Briefing</span>
            </div>
          </div>

          {/* Formatted Article Content */}
          <div className="article-body">
            {renderContent(insight.content)}
          </div>

          {/* Article Footer Navigation */}
          <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[14px] text-[#94A3B8] hover:text-[#C9A227] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-md"
            >
              <span>Request Advisory Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Strategic Advisory Desk Card */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 shadow-xl">
            <span className="text-[11px] font-sans text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              Strategic Advisory Desk
            </span>
            <h3 className="text-[20px] font-headings font-medium text-white mb-3">
              Mandate-Aligned Solutions
            </h3>
            <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-6">
              We assist institutional investors, project developers, and corporations in turning macro opportunities into bankable, de-risked transaction architectures.
            </p>
            <Link
              to="/book-consultation"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Research Articles */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <span className="text-[11px] font-sans text-[#CBD5E1] uppercase tracking-wider block mb-4 font-semibold">
              Related Research Briefings
            </span>
            <div className="space-y-4">
              {relatedInsights.map((rel) => (
                <div key={rel.slug} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-[11px] text-[#C9A227] font-semibold uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <Link
                    to={`/insights/${rel.slug}`}
                    className="text-[14.5px] font-medium text-white hover:text-[#C9A227] transition-colors leading-snug block mb-1"
                  >
                    {rel.title}
                  </Link>
                  <div className="flex items-center gap-2 text-[12px] text-[#64748B]">
                    <span>{rel.date}</span>
                    <span>&bull;</span>
                    <span>{rel.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
