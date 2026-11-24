import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedCityBackground from '../hero/AnimatedCityBackground';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero page-shell__card relative z-0 w-full max-w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#050505] border border-[#C9A227]/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Dynamic Cinematic Skyline Backdrop */}
      <AnimatedCityBackground />

      {/* Hero Editorial Content */}
      <div className="relative z-10 w-full max-w-[1408px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
        <div className="max-w-[820px] flex flex-col items-start gap-5 sm:gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1320]/80 border border-[#C9A227]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.15em] uppercase">
              Strategic Capital Advisory &bull; Africa Growth Markets
            </span>
          </div>

          {/* Official Company Headline */}
          <h1
            id="hero-title"
            className="font-headings text-[clamp(32px,5.2vw,64px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#F8F9FA] m-0"
          >
            Connecting African Opportunity{' '}
            <span className="text-[#C9A227]">With Global Capital</span>
          </h1>

          {/* Value Proposition Body */}
          <p className="font-body text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.6] text-[#CBD5E1] max-w-[720px] m-0">
            Black Markt Network Consultancy is an independent strategic capital advisory firm specialising in connecting ambitious African businesses, project sponsors, governments and institutions with the capital, expertise and strategic partnerships required to accelerate sustainable growth.
          </p>

          {/* Direct, Meaningful CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] sm:text-[14.5px] tracking-[-0.01em] transition-all shadow-[0_4px_20px_rgba(201,162,39,0.35)]"
              aria-label="Request a Strategic Consultation"
            >
              <span>Request a Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#C9A227]/40 text-[13.5px] sm:text-[14.5px] font-medium transition-all"
            >
              <span>Our Services</span>
              <ChevronDown className="w-4 h-4 text-[#C9A227]" />
            </a>
          </div>

          {/* Clean Assurance Note */}
          <div className="pt-4 border-t border-white/10 w-full max-w-[720px] text-[12px] sm:text-[13px] text-[#94A3B8] flex flex-wrap items-center gap-y-2 gap-x-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Independent Strategic Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Extensive International Network</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Discretion &amp; Commercial Integrity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
