import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICES_DATA = [
  {
    id: 'capital-advisory',
    number: '01',
    title: 'Strategic Capital Advisory',
    description: 'Developing customised funding strategies that align businesses and projects with the right capital partners and investment opportunities.',
    highlights: ['Tailored funding architectures', 'Capital structure optimization', 'Bespoke investor matching'],
  },
  {
    id: 'capital-raising',
    number: '02',
    title: 'Equity & Debt Capital Raising',
    description: 'Supporting companies and project sponsors in accessing institutional capital across the entire capital stack.',
    highlights: ['Growth & Private Equity', 'Venture & Institutional Capital', 'Family Office & Commercial Lending', 'Structured & Development Finance (DFIs)'],
  },
  {
    id: 'project-finance',
    number: '03',
    title: 'Project Finance & Infrastructure',
    description: 'Supporting large-scale, transformative development opportunities across Africa.',
    highlights: ['Renewable Energy & Power', 'Transport, Ports & Logistics', 'Real Estate Developments', 'Industrial & Public Infrastructure'],
  },
  {
    id: 'partnerships-jv',
    number: '04',
    title: 'Strategic Partnerships & Joint Ventures',
    description: 'Connecting businesses with strategic partners that provide catalytic operational and commercial expansion.',
    highlights: ['Regional Market Access', 'Technical & Technology Transfer', 'Distribution Networks & Off-takers', 'Operational Capability Scaling'],
  },
  {
    id: 'investment-readiness',
    number: '05',
    title: 'Investment Readiness & Due Diligence',
    description: 'Preparing organisations to meet Tier-1 international investment and underwriting standards.',
    highlights: ['Business Strategy Refinement', 'Comprehensive Financial Analysis', 'Information Memorandums (IM)', 'Due Diligence Preparation & Governance'],
  },
  {
    id: 'ma-advisory',
    number: '06',
    title: 'Mergers & Acquisitions Advisory',
    description: 'Guiding corporate combinations, carveouts, and strategic cross-border investments with precision.',
    highlights: ['Buy-side & Sell-side Acquisitions', 'Corporate Strategic Partnerships', 'Business Combinations', 'Cross-Border Transactions'],
  },
  {
    id: 'investor-relations',
    number: '07',
    title: 'Investor Relations & Capital Strategy',
    description: 'Helping businesses develop enduring, value-accretive relationships with global investors.',
    highlights: ['Institutional Investor Positioning', 'Multi-Year Capital Planning', 'Key Stakeholder Engagement', 'Strategic Financial Communications'],
  },
  {
    id: 'cross-border',
    number: '08',
    title: 'Cross-Border Market Entry',
    description: 'Supporting international capital seeking African opportunities and African champions expanding globally.',
    highlights: ['Inbound Africa Market Entry', 'Outbound Global Expansion', 'Regulatory & Compliance Guidance', 'Local Joint Venture Alignment'],
  },
  {
    id: 'government-ppp',
    number: '09',
    title: 'Government & PPP Advisory',
    description: 'Advising sovereign governments, ministries, and private partners on collaborative investment models.',
    highlights: ['Public-Private Partnership (PPP) Models', 'National Economic Infrastructure', 'Concession Structuring', 'Sovereign Investment Vehicles'],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Advisory Capabilities
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-headings text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.08] text-white tracking-[-0.02em]"
            >
              Strategic Capital Advisory Services
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[420px] text-[14.5px] leading-relaxed">
            Our role extends beyond traditional fundraising. We develop tailored capital strategies, structure investment opportunities, and enhance investment readiness.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 p-8 rounded-[16px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A227]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C9A227]/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[12px] font-semibold text-[#C9A227] tracking-widest">
                    {service.number}
                  </span>
                  <span className="w-6 h-[1px] bg-white/15 group-hover:w-10 group-hover:bg-[#C9A227] transition-all" />
                </div>

                <h3 className="font-headings text-[22px] sm:text-[24px] text-white font-medium mb-3 group-hover:text-[#C9A227] transition-colors leading-[1.2]">
                  {service.title}
                </h3>

                <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-white/5">
                <ul className="flex flex-col gap-2">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="text-[12.5px] text-[#CBD5E1] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-[18px] bg-[#121E33]/70 border border-[#C9A227]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1">
              Custom Advisory Mandates
            </span>
            <h4 className="font-headings text-[22px] sm:text-[26px] text-white font-medium">
              Have an active capital raising or infrastructure mandate?
            </h4>
          </div>
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold px-6 py-3.5 rounded-[8px] text-[13.5px] transition-all shadow-[0_0_20px_rgba(201,162,39,0.3)] shrink-0"
          >
            <span>Request a Strategic Consultation</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
