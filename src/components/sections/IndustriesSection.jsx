import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../common/Icon';
import { INDUSTRIES_DATA } from '../../data/platformData';

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full bg-[#0B1320] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-[#C9A227]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden my-4"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Growth Sectors
              </span>
            </div>
            <h2
              id="industries-heading"
              className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
            >
              Key Sectors Driving African Expansion
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[440px] text-[14.5px] leading-relaxed">
            We support ambitious organisations and high-impact projects across transformative growth sectors that underpin sustainable economic development.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.slug}
              className="group bg-[#050505]/70 border border-white/10 hover:border-[#C9A227]/40 p-7 sm:p-8 rounded-[18px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1 relative"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B1320] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-5 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]/10 transition-all">
                  <Icon name={industry.iconName} className="w-6 h-6 text-[#C9A227]" />
                </div>

                <h3 className="font-headings text-[20px] sm:text-[22px] text-white font-medium mb-3 group-hover:text-[#C9A227] transition-colors leading-[1.2]">
                  {industry.name}
                </h3>

                <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-6">
                  {industry.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#CBD5E1] group-hover:text-[#C9A227] transition-colors"
                >
                  <span>Sector Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="pt-10 flex justify-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#C9A227] hover:text-[#DFBA42] transition-colors"
          >
            <span>Explore all supported industries &amp; transaction focus areas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
