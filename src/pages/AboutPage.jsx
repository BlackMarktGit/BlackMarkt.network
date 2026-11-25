import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { CORE_VALUES, COMPANY_INFO } from '../data/platformData';
import { ArrowRight, Compass, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Top Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[1000px] flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              ABOUT THE FIRM
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            Building Bridges Between African Opportunities and Global Investment
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[820px] font-body">
            Black Markt Network Consultancy is an independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with the capital, expertise and strategic partnerships required to accelerate sustainable growth.
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
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Role & Who We Are */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#050505] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-12 border-b border-white/10">
            <div className="lg:col-span-5">
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-2">
                Our Value Proposition
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-headings font-medium text-white leading-tight">
                Connecting African Opportunity With Global Capital
              </h2>
              <div className="w-14 h-[2px] bg-[#C9A227] mt-5" />
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#CBD5E1] text-[16px] leading-[1.7]">
              <p>
                Black Markt Network Consultancy connects exceptional businesses, projects and investment opportunities with exceptional capital and strategic partners.
              </p>
              <p>
                By combining deep commercial understanding, regional market insight and a trusted international network, we provide clients with access to investors and partners capable of supporting complex transactions, expansion strategies and long-term value creation.
              </p>
              <p>
                We believe Africa's growth potential requires more than capital alone. It requires strategic relationships, industry expertise and partnerships built for sustainable impact.
              </p>
              <p className="text-white font-medium italic border-l-2 border-[#C9A227] pl-4 pt-1">
                &ldquo;Our role extends beyond traditional fundraising. We develop tailored capital strategies, structure investment opportunities, enhance investment readiness and facilitate high-value partnerships that enable businesses and projects to scale across African and international markets.&rdquo;
              </p>
            </div>
          </div>

          {/* Mission & Vision Full Width Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-8 sm:p-10 rounded-[20px] bg-[#0B1320] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                  OUR MISSION
                </span>
                <h3 className="font-headings text-[24px] sm:text-[28px] text-white font-medium mb-4 leading-snug">
                  Empowering African Businesses, Institutions &amp; Projects
                </h3>
                <p className="text-[#CBD5E1] text-[15.5px] leading-relaxed">
                  To empower African businesses, institutions and projects by connecting them with the capital, partnerships and strategic expertise required to achieve sustainable growth, economic development and global competitiveness.
                </p>
              </div>
              <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
            </div>

            <div className="p-8 sm:p-10 rounded-[20px] bg-[#0B1320] border border-[#C9A227]/30 flex flex-col justify-between">
              <div>
                <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                  OUR VISION
                </span>
                <h3 className="font-headings text-[24px] sm:text-[28px] text-white font-medium mb-4 leading-snug">
                  The World's Trusted Independent Advisory Firm
                </h3>
                <p className="text-[#CBD5E1] text-[15.5px] leading-relaxed">
                  To become one of the world's most trusted independent strategic capital advisory firms focused on connecting African opportunities with global investment, delivering transformative transactions and building enduring partnerships across markets.
                </p>
              </div>
              <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 shadow-[0_16px_40px_rgba(0,0,0,0.7)] my-4">
        <div className="max-w-[1408px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-2">
              FOUNDATIONAL STANDARDS
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-headings font-medium text-white leading-tight">
              Our Core Values
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed mt-3">
              Every client engagement is guided by these principles, ensuring consistent commercial excellence and unwavering confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[18px] bg-[#050505]/70 border border-white/5 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_2px_12px_rgba(201,162,39,0.15)] flex items-center justify-center text-[#C9A227] mb-5 group-hover:border-[#C9A227] transition-all">
                    <Icon name={val.iconName} className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h3 className="font-headings text-[20px] text-white font-medium mb-2 group-hover:text-[#C9A227] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Registration & Factual Details */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-white/10 my-4 text-[#CBD5E1]">
        <div className="max-w-[960px] mx-auto space-y-4">
          <h3 className="text-white font-headings text-[22px] font-medium">
            Corporate Status &amp; Legal Registration
          </h3>
          <p className="text-[14.5px] leading-relaxed text-[#94A3B8]">
            {COMPANY_INFO.legalName} is registered in England and Wales under Company Registration Number {COMPANY_INFO.registrationNumber}. The firm's registered office is situated at {COMPANY_INFO.registeredAddress}. Registered VAT Number: {COMPANY_INFO.vatNumber}.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-[13px] text-[#C9A227]">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline flex items-center gap-1.5 font-mono font-medium">
              <Icon name="Phone" className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <Link to="/contact" className="hover:underline flex items-center gap-1.5">
              <span>Contact London Advisory Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/compliance" className="hover:underline flex items-center gap-1.5">
              <span>Compliance &amp; Governance Information</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
