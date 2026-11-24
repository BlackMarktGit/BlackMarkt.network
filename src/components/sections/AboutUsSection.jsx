import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Globe2, ShieldCheck } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden my-4"
      aria-labelledby="about-heading"
    >
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1408px] mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
            About The Firm
          </span>
        </div>

        {/* Section Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-14 border-b border-white/10">
          <div className="lg:col-span-6">
            <h2
              id="about-heading"
              className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
            >
              Building Bridges Between African Opportunities and Global Investment
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A227] mt-6" />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-5 text-[#CBD5E1] font-body text-[15px] sm:text-[16.5px] leading-[1.65]">
            <p>
              Black Markt Network Consultancy exists to connect Africa’s emerging opportunities with global sources of capital and strategic expertise.
            </p>
            <p>
              We work with ambitious African businesses, project sponsors, governments and institutions seeking growth capital, strategic partnerships and international expansion opportunities.
            </p>
            <p>
              By combining deep commercial understanding, regional market insight and a trusted international network, we provide clients with access to investors and partners capable of supporting complex transactions, expansion strategies and long-term value creation.
            </p>
            <p className="text-white font-medium italic border-l-2 border-[#C9A227] pl-4 my-1">
              &ldquo;We believe Africa’s growth potential requires more than capital alone. It requires strategic relationships, industry expertise and partnerships built for sustainable impact.&rdquo;
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {/* Pillar 1 */}
          <div className="p-7 rounded-[18px] bg-[#050505]/60 border border-white/10 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center text-[#C9A227] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-white font-headings text-[20px] font-medium mb-2.5">
                Commercial &amp; Strategic Insight
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                Combining commercial understanding and regional market insight to structure transactions aligned with long-term business objectives.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-[18px] bg-[#050505]/60 border border-white/10 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center text-[#C9A227] mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-white font-headings text-[20px] font-medium mb-2.5">
                International Capital Network
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                Direct access to institutional investors, sovereign wealth funds, family offices, commercial banks, and development finance institutions.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-[18px] bg-[#050505]/60 border border-white/10 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center text-[#C9A227] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-white font-headings text-[20px] font-medium mb-2.5">
                Discretion &amp; Integrity
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                Every client engagement is conducted with strict confidentiality, fiduciary discipline, and an uncompromising standard of professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Link */}
        <div className="pt-10 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#C9A227] hover:text-[#DFBA42] transition-colors"
          >
            <span>Read more about our value proposition, mission &amp; vision</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
