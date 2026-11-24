import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { INSIGHTS_DATA } from '../data/platformData';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const insight = INSIGHTS_DATA.find((item) => item.slug === slug) || INSIGHTS_DATA[0];

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-caption text-[#94A3B8] mb-4 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="shrink-0 text-white/30">/</span>
          <Link to="/insights" className="hover:text-white transition-colors shrink-0">Intelligence</Link>
          <span className="shrink-0 text-white/30">/</span>
          <span className="text-[#C9A227] font-semibold truncate max-w-[180px] sm:max-w-none">{insight.category}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#94A3B8]">
            <span className="font-semibold uppercase tracking-wider text-[#C9A227]">{insight.category}</span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <span>{insight.date}</span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">{insight.readTime}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            {insight.title}
          </h1>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center font-bold text-[14px]">
              {insight.author.charAt(0)}
            </div>
            <div>
              <span className="text-[14px] font-semibold text-white block">{insight.author}</span>
              <span className="text-[12px] text-[#94A3B8]">Black Markt Strategic Intelligence Council</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Body */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
        {/* Left Column: Full Briefing */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-8">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              EXECUTIVE BRIEFING
            </span>
            <p className="text-[18px] sm:text-[20px] font-headings font-medium text-white leading-relaxed">
              {insight.excerpt}
            </p>
          </div>

          {insight.summary && (
            <div className="border-t border-white/10 pt-6 text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed">
              <p>{insight.summary}</p>
            </div>
          )}

          {insight.html ? (
            <div 
              className="prose prose-invert max-w-none border-t border-white/10 pt-6 space-y-4 text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed [&>h3]:text-[22px] [&>h3]:font-headings [&>h3]:font-medium [&>h3]:text-white [&>h3]:mb-3 [&>p]:mb-4 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:bg-[#050505] [&>pre]:text-white [&>pre]:border [&>pre]:border-white/10 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
              dangerouslySetInnerHTML={{ __html: insight.html }}
            />
          ) : (
            <div className="border-t border-white/10 pt-6 space-y-4 text-[16px] sm:text-[17px] text-[#CBD5E1] leading-relaxed">
              <p>
                In our advisory mandates across Europe and North America, we consistently observe that traditional financial modeling fails to capture the true drag of legacy software architectures. When interest rates hovered near zero, sponsors could overcome technical friction through multiple arbitrage and aggressive leverage. In today’s normalized capital environment, sustainable EBITDA expansion requires immediate, structural eradication of architecture debt.
              </p>
              <p>
                Furthermore, sovereign wealth funds and institutional investors are subjected to unprecedented scrutiny under national security investment review bodies. Data localization mandates, such as the revised Swiss Federal Act on Data Protection (FADP) and the European Union’s Digital Operational Resilience Act (DORA), transform technical architecture into a primary regulatory exposure.
              </p>
            </div>
          )}

          {/* Key Strategic Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-[20px] bg-[#070D18] border border-white/10 shadow-xs">
            <span className="text-[12px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-4">
              KEY STRATEGIC TAKEAWAYS FOR BOARDS &amp; SPONSORS
            </span>
            <ul className="space-y-3">
              {(insight.takeaways || []).map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-[#CBD5E1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 shrink-0" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Author Bio & Mandate Scoping */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-3 font-semibold">
              AUTHORED BY
            </span>
            <h3 className="text-[20px] font-headings font-medium text-white mb-2">
              {insight.author}
            </h3>
            <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-4">
              Advising global corporate boards, private equity investment committees, and sovereign authorities on high-stakes capital structuring and digital sovereignty.
            </p>
            <Link
              to="/leadership"
              className="text-[13px] font-semibold text-[#C9A227] hover:text-[#DFBA42] transition-colors"
            >
              View Council Profile &rarr;
            </Link>
          </div>

          <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-b from-[#0B1320] to-[#070D18] border border-[#C9A227]/30 text-white shadow-xl">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              ENGAGE THE AUTHOR
            </span>
            <h3 className="text-[20px] font-headings font-medium text-white mb-3">
              Request a confidential briefing
            </h3>
            <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-6">
              Our Senior Managing Directors are available for executive board briefings on this topic.
            </p>
            <ActionButton href="/book-consultation" variant="primary" className="w-full">
              Request Briefing
            </ActionButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
