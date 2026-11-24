import React from 'react';

const VALUES_DATA = [
  {
    title: 'Integrity',
    desc: 'We operate with honesty, transparency and professionalism in every engagement.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Confidentiality',
    desc: 'We protect client information and maintain the highest standards of discretion throughout every mandate.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'We deliver exceptional advisory services through expertise, discipline and attention to detail.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Strategic Thinking',
    desc: 'We develop innovative solutions that align capital, partnerships and long-term business objectives.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Global Collaboration',
    desc: 'We build bridges between businesses, investors and institutions across continents.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Value Creation',
    desc: 'We focus on sustainable growth, meaningful partnerships and outcomes that create lasting economic impact.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

export default function CorporateValuesSection() {
  return (
    <section
      id="values"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-24 sm:py-32 px-6 sm:px-12 md:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 border-b border-white/10">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-[18px] bg-[#0B1320] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                OUR MISSION
              </span>
              <h3 className="font-headings text-[24px] sm:text-[28px] text-white font-medium mb-4 leading-snug">
                Empowering African Enterprise Through Global Strategic Capital
              </h3>
              <p className="text-[#CBD5E1] text-[15.5px] leading-relaxed">
                To empower African businesses, institutions and projects by connecting them with the capital, partnerships and strategic expertise required to achieve sustainable growth, economic development and global competitiveness.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-[18px] bg-[#0B1320] border border-[#C9A227]/30 flex flex-col justify-between">
            <div>
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-widest uppercase block mb-3">
                OUR VISION
              </span>
              <h3 className="font-headings text-[24px] sm:text-[28px] text-white font-medium mb-4 leading-snug">
                The World's Trusted Sovereign Advisory Conduit
              </h3>
              <p className="text-[#CBD5E1] text-[15.5px] leading-relaxed">
                To become one of the world's most trusted independent strategic capital advisory firms focused on connecting African opportunities with global investment, delivering transformative transactions and building enduring partnerships across markets.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#C9A227] mt-8" />
          </div>
        </div>

        {/* 6 Core Values Header */}
        <div className="pt-16 pb-12 text-center max-w-[700px] mx-auto">
          <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase block mb-3">
            GUIDING PRINCIPLES
          </span>
          <h2
            id="values-heading"
            className="font-headings text-[clamp(28px,3.2vw,46px)] font-medium text-white tracking-[-0.02em]"
          >
            Our Core Fiduciary Values
          </h2>
        </div>

        {/* 6 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES_DATA.map((val, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[14px] bg-[#0B1320]/70 border border-white/5 hover:border-[#C9A227]/40 flex flex-col gap-3 transition-colors group"
            >
              <div className="w-10 h-10 rounded-[8px] bg-[#121E33] border border-white/10 text-[#C9A227] flex items-center justify-center group-hover:scale-105 transition-transform">
                {val.icon}
              </div>
              <h4 className="text-white font-headings text-[20px] font-medium group-hover:text-[#C9A227] transition-colors mt-1">
                {val.title}
              </h4>
              <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
