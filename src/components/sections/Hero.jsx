import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCityBackground from '../hero/AnimatedCityBackground';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="hero page-shell__card max-lg:relative lg:sticky top-[var(--section-gap,16px)] z-0 w-full max-w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#050505] border border-[#C9A227]/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-center"
      aria-labelledby="hero-title"
      data-mounted={mounted ? "true" : "false"}
    >
      {/* Dynamic Animated Background: Global Capitals Continuous Loop */}
      <AnimatedCityBackground />

      {/* Editorial Content (Left side on desktop, full width flex container on mobile) */}
      <div className="hero__content relative z-10 h-full w-full max-w-full lg:w-[65%] lg:max-w-[820px] 2xl:max-w-[900px] px-6 sm:px-10 md:px-16 flex flex-col justify-center items-start py-12 sm:py-16 lg:py-20 gap-3.5 sm:gap-4 lg:gap-5 overflow-hidden">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 max-w-full">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9A227] animate-pulse shrink-0" />
          <p className="hero__eyebrow text-caption text-[#C9A227] text-[10px] sm:text-[11.5px] 2xl:text-[13px] font-sans font-semibold tracking-[0.14em] uppercase whitespace-nowrap m-0">
            Strategic Capital Advisory &bull; Africa Growth Markets
          </p>
        </div>

        {/* Client's Official Headline */}
        <h1
          id="hero-title"
          className="hero__title font-headings text-[clamp(24px,5.5vw,44px)] lg:text-[clamp(34px,2.4vw+2vh,58px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#F8F9FA] m-0 break-words"
        >
          <span className="hero__title-line block">
            Connecting African <span className="text-[#C9A227]">Opportunity</span>
          </span>
          <span className="hero__title-line block">
            With Global Capital
          </span>
        </h1>

        {/* Client's Official Value Proposition Body */}
        <p className="hero__subhead font-body text-[13.5px] sm:text-[15px] xl:text-[16.5px] 2xl:text-[18px] leading-[1.5] text-[#CBD5E1] max-w-[620px] xl:max-w-[720px] m-0">
          Black Markt Network Consultancy is an independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with institutional capital, expertise and transformative partnerships.
        </p>

        {/* Action Button CTAs */}
        <div className="hero__cta-wrap flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
          {/* Primary CTA */}
          <Link
            to="/book-consultation"
            className="action-button group/action inline-flex items-center justify-between gap-3 border-0 select-none cursor-pointer no-underline rounded-xl font-body text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-[44px] sm:h-[48px] px-5 sm:px-6 bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)] w-full sm:w-auto"
            aria-label="Request a Strategic Consultation"
          >
            <span className="action-button__label transition-transform duration-[450ms] group-hover/action:translate-x-1">
              Request a Strategic Consultation
            </span>
            <svg
              className="action-button__chevron shrink-0"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7.5 13.5L12 9L7.5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="action-button group/action inline-flex items-center justify-center gap-1.5 select-none cursor-pointer no-underline rounded-xl font-body text-[13px] sm:text-[14px] font-medium tracking-[-0.01em] leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-[44px] sm:h-[48px] px-4 sm:px-5 bg-white/5 text-[#F8F9FA] border border-white/15 hover:bg-white/10 hover:border-[#C9A227]/40 w-full sm:w-auto"
            aria-label="Explore Advisory Services"
          >
            <span>Our Services</span>
            <span className="text-[#C9A227] ml-0.5">&darr;</span>
          </a>
        </div>

        {/* Fiduciary Discretion Assurance Badge */}
        <div className="mt-2 text-[11px] sm:text-[12.5px] text-[#94A3B8] font-sans flex items-center gap-2">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Strict Professional Discretion &bull; Fiduciary Independence</span>
        </div>
      </div>
    </section>
  );
}
