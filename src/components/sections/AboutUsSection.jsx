import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function AboutUsSection() {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    api.getPage('home')
      .then(page => {
        if (isCurrent && page?.data?.sections?.about_us) {
          setAboutContent(page.data.sections.about_us);
        }
      })
      .catch(() => {});
    return () => { isCurrent = false; };
  }, []);
  return (
    <section
      id="about"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
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
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
            {aboutContent?.eyebrow || 'About Black Markt'}
          </span>
        </div>

        {/* Section Heading & Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <h2
              id="about-heading"
              className="font-headings text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.08] text-white tracking-[-0.02em]"
            >
              {aboutContent?.headline || 'Building Bridges Between African Opportunities and Global Investment'}
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A227] mt-6" />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 text-[#CBD5E1] font-body text-[16px] sm:text-[17px] leading-[1.65]">
            <p>
              Black Markt Network Consultancy exists to connect Africa's emerging opportunities with global sources of capital and strategic expertise.
            </p>
            <p>
              We work with ambitious African businesses, project sponsors, governments and institutions seeking growth capital, strategic partnerships and international expansion opportunities.
            </p>
            <p>
              By combining deep commercial understanding, regional market insight and a trusted international network, we provide clients with access to investors and partners capable of supporting complex transactions, expansion strategies and long-term value creation.
            </p>
            <p className="text-white font-medium italic border-l-2 border-[#C9A227] pl-4 my-2">
              &ldquo;We believe Africa's growth potential requires more than capital alone. It requires strategic relationships, industry expertise and partnerships built for sustainable impact.&rdquo;
            </p>
            <div className="pt-3 border-t border-white/10 text-[12.5px] text-[#94A3B8] leading-relaxed">
              <span className="text-[#C9A227] font-semibold block mb-0.5">Corporate Entity &amp; Registration:</span>
              Black Markt Network Consultancy a subsidiary of LSTC, registered in England and Wales under registration number 11124243. The registered address 124 City Road London, EC1V 2NX, England. Registered VAT Number 477993219.
            </div>
          </div>
        </div>

        {/* Image & Key Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 items-center">
          {/* Executive Boardroom Visual */}
          <div className="lg:col-span-5 relative rounded-[16px] overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
            <img
              src="/images/sections/executive-boardroom.jpg"
              alt="High-stakes international advisory boardroom in London"
              className="w-full aspect-[4/3] object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <span className="text-[#C9A227] text-[10.5px] font-sans font-semibold tracking-wider uppercase block">
                London Strategic Office &bull; Global Capital Desks
              </span>
              <span className="text-white font-headings text-[18px] font-medium mt-1 block">
                Fiduciary Excellence &bull; Confidential Mandate Handling
              </span>
            </div>
          </div>

          {/* 3 Strategic Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-[#121E33]/60 border border-white/5 p-6 rounded-[14px] flex flex-col justify-between hover:border-[#C9A227]/30 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-headings text-[19px] font-medium mb-2">Deep Commercial Insight</h3>
                <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
                  Decades of collective experience structuring complex transactions across Sub-Saharan and North African growth economies.
                </p>
              </div>
            </div>

            <div className="bg-[#121E33]/60 border border-white/5 p-6 rounded-[14px] flex flex-col justify-between hover:border-[#C9A227]/30 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-headings text-[19px] font-medium mb-2">Global Investor Access</h3>
                <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
                  Direct relationships with sovereign wealth funds, Tier-1 private equity, family offices, and development finance institutions.
                </p>
              </div>
            </div>

            <div className="bg-[#121E33]/60 border border-white/5 p-6 rounded-[14px] flex flex-col justify-between hover:border-[#C9A227]/30 transition-colors">
              <div className="w-10 h-10 rounded-[8px] bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-headings text-[19px] font-medium mb-2">Discretion &amp; Rigour</h3>
                <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
                  Every mandate is executed under air-gapped confidentiality standards, strict institutional due diligence, and sovereign integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
