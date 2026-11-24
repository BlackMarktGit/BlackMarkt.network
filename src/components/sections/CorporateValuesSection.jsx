import React from 'react';
import Icon from '../common/Icon';
import { CORE_VALUES } from '../../data/platformData';

export default function CorporateValuesSection() {
  return (
    <section
      id="values"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-4"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 border-b border-white/10">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-[20px] bg-[#0B1320] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                OUR MISSION
              </span>
              <h3 className="font-headings text-[23px] sm:text-[27px] text-white font-medium mb-4 leading-snug">
                Empowering African Enterprise Through Global Strategic Capital
              </h3>
              <p className="text-[#CBD5E1] text-[15px] sm:text-[16px] leading-relaxed">
                To empower African businesses, institutions and projects by connecting them with the capital, partnerships and strategic expertise required to achieve sustainable growth, economic development and global competitiveness.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-[20px] bg-[#0B1320] border border-[#C9A227]/30 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                OUR VISION
              </span>
              <h3 className="font-headings text-[23px] sm:text-[27px] text-white font-medium mb-4 leading-snug">
                The World's Trusted Independent Advisory Conduit
              </h3>
              <p className="text-[#CBD5E1] text-[15px] sm:text-[16px] leading-relaxed">
                To become one of the world's most trusted independent strategic capital advisory firms focused on connecting African opportunities with global investment, delivering transformative transactions and building enduring partnerships across markets.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
          </div>
        </div>

        {/* Section Header: Our Core Values */}
        <div className="pt-16 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Principles of Conduct
            </span>
          </div>
          <h2
            id="values-heading"
            className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
          >
            Our Core Values
          </h2>
          <p className="text-[#94A3B8] max-w-[560px] text-[14.5px] leading-relaxed mt-2">
            Every engagement is guided by discretion, integrity and a commitment to creating sustainable commercial outcomes for our clients, investors and strategic partners.
          </p>
        </div>

        {/* 6 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[18px] bg-[#0B1320]/80 border border-white/5 hover:border-[#C9A227]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_4px_16px_rgba(201,162,39,0.15)] flex items-center justify-center text-[#C9A227] mb-5 group-hover:border-[#C9A227] transition-all">
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
  );
}
