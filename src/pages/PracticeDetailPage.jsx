import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { PRACTICES_DATA } from '../data/platformData';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PracticeDetailPage() {
  const { slug } = useParams();
  const practice = PRACTICES_DATA.find((p) => p.slug === slug) || PRACTICES_DATA[0];

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] mb-5 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <Link to="/services" className="hover:text-white transition-colors shrink-0">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <span className="text-[#C9A227] font-semibold truncate">{practice.title}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_4px_20px_rgba(201,162,39,0.15)] flex items-center justify-center text-[#C9A227]">
            <Icon name={practice.iconName} className="w-6 h-6 text-[#C9A227]" />
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            {practice.title}
          </h1>

          <p className="text-[18px] sm:text-[21px] text-[#CBD5E1] leading-relaxed max-w-[820px]">
            {practice.shortDesc}
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[13.5px] font-medium transition-all"
            >
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
        {/* Left Column: Full Description & Narrative */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-6">
          <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block">
            Advisory Scope &amp; Methodology
          </span>

          <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white leading-snug">
            Strategic alignment designed for sustainable commercial outcomes
          </h2>

          <div className="text-[16px] text-[#CBD5E1] leading-[1.7] space-y-4">
            <p>{practice.fullDesc}</p>
            <p>
              We combine deep commercial understanding, regional market insight and a trusted international network to provide clients with access to investors and partners capable of supporting complex transactions, expansion strategies and long-term value creation.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-white font-headings text-[20px] font-medium mb-4">
              Core Capabilities &amp; Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {practice.deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#050505]/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-[#CBD5E1]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Next Steps & Contact Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 shadow-xl space-y-5">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block">
              Direct Inquiry
            </span>
            <h3 className="text-white font-headings text-[22px] font-medium leading-snug">
              Discuss this advisory area with our partners
            </h3>
            <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
              We welcome confidential inquiries from project sponsors, businesses, and institutional capital providers.
            </p>
            <Link
              to="/book-consultation"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Other Services Navigation */}
          <div className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 space-y-4">
            <h4 className="text-white font-headings text-[18px] font-medium border-b border-white/10 pb-3">
              Other Advisory Services
            </h4>
            <div className="flex flex-col gap-2">
              {PRACTICES_DATA.filter((p) => p.slug !== practice.slug).slice(0, 5).map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="text-[13.5px] text-[#CBD5E1] hover:text-[#C9A227] transition-colors py-1.5 flex items-center justify-between group"
                >
                  <span className="truncate">{other.title}</span>
                  <span className="text-white/20 group-hover:text-[#C9A227] text-sm">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
