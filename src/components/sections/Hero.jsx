import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../common/Counter';
import AnimatedCityBackground from '../hero/AnimatedCityBackground';
import api from '../../services/api';

export default function Hero() {
  const heroRef = useRef(null);
  const ctaWrapRef = useRef(null);
  const chipsRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [cmsHero, setCmsHero] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    let isCurrent = true;

    // Dynamically hydrate from Blackmarkt CMS
    api.getPage('home')
      .then((page) => {
        if (isCurrent && page?.data?.sections?.hero) {
          setCmsHero(page.data.sections.hero);
        }
      })
      .catch(() => {});

    return () => {
      clearTimeout(timer);
      isCurrent = false;
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero page-shell__card max-lg:relative lg:sticky top-[var(--section-gap,16px)] z-0 w-full max-w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#050505] border border-[#C9A227]/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
      aria-labelledby="hero-title"
      data-mounted={mounted ? "true" : "false"}
    >
      {/* Dynamic Animated Background: 8 Global Financial Capitals Continuous Loop */}
      <AnimatedCityBackground />

      {/* Editorial Content (Left side on desktop, full width flex container on mobile) */}
      <div className="hero__content relative z-10 h-full w-full max-w-full lg:w-[60%] lg:max-w-[780px] 2xl:max-w-[860px] px-4 sm:px-8 md:px-14 flex flex-col justify-center items-start pt-3 sm:pt-5 lg:pt-4 pb-20 sm:pb-24 gap-2 sm:gap-2.5 lg:gap-3.5 2xl:gap-5 overflow-hidden">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 max-w-full">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9A227] animate-pulse shrink-0" />
          <p className="hero__eyebrow text-caption text-[#C9A227] text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11.5px] 2xl:text-[13px] font-sans font-semibold tracking-[0.05em] min-[360px]:tracking-[0.08em] sm:tracking-[0.14em] uppercase whitespace-nowrap m-0">
            {cmsHero?.eyebrow || 'Strategic Capital Advisory • Africa Growth Markets'}
          </p>
        </div>

        {/* Client's Official Headline in Playfair / Cormorant Garamond */}
        <h1
          id="hero-title"
          className="hero__title font-headings text-[clamp(18px,5.2vw,28px)] md:text-[clamp(28px,2.2vw+1.8vh,56px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#F8F9FA] m-0"
        >
          <span className="hero__title-line block whitespace-nowrap">
            {cmsHero?.headline_line1 ? (
              cmsHero.headline_line1
            ) : (
              <>Connecting African <span className="text-[#C9A227]">Opportunity</span></>
            )}
          </span>
          <span className="hero__title-line block">
            {cmsHero?.headline_line2 || 'With Global Capital'}
          </span>
        </h1>

        {/* Client's Official Value Proposition Body */}
        <p className="hero__subhead font-body text-[12px] sm:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] leading-[1.38] 2xl:leading-[1.46] text-[#CBD5E1] line-clamp-3 sm:line-clamp-none max-w-[540px] xl:max-w-[640px] m-0">
          {cmsHero?.subhead || 'Black Markt Network Consultancy is an independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with institutional capital, expertise and transformative partnerships.'}
        </p>

        {/* Action Button CTAs */}
        <div ref={ctaWrapRef} className="hero__cta-wrap flex items-center gap-2.5 sm:gap-3.5 2xl:gap-4 w-full sm:w-auto pt-0.5 sm:pt-1 2xl:pt-2">
          {/* Primary CTA */}
          <Link
            to={cmsHero?.cta_primary_url || '/book-consultation'}
            className="action-button group/action flex-1 sm:flex-initial inline-flex items-center justify-between gap-2.5 border-0 select-none cursor-pointer no-underline rounded-[var(--normal-8)] font-body text-[12px] sm:text-[13px] 2xl:text-[14px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-[42px] sm:h-[46px] 2xl:h-[50px] px-3.5 sm:px-5 2xl:px-6 bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)]"
            aria-label={cmsHero?.cta_primary_label || 'Request a Strategic Consultation'}
          >
            <span className="action-button__label transition-transform duration-[450ms] group-hover/action:translate-x-1">
              {cmsHero?.cta_primary_label || 'Request a Strategic Consultation'}
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
            className="action-button group/action inline-flex items-center justify-center gap-1 select-none cursor-pointer no-underline rounded-[var(--normal-8)] font-body text-[12px] sm:text-[13px] 2xl:text-[14px] font-medium tracking-[-0.01em] leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-[42px] sm:h-[46px] 2xl:h-[50px] px-3 sm:px-4 2xl:px-5 bg-white/5 text-[#F8F9FA] border border-white/15 hover:bg-white/10 hover:border-[#C9A227]/40 shrink-0"
            aria-label="Explore Advisory Services"
          >
            <span>Services</span>
            <span className="text-[#C9A227] ml-0.5">&darr;</span>
          </a>
        </div>

        {/* Fiduciary Discretion Assurance Badge with Generous Breathing Space */}
        <div className="mt-2 sm:mt-2.5 2xl:mt-3 mb-1 sm:mb-1.5 text-[10.5px] sm:text-[11.5px] 2xl:text-[12.5px] text-[#94A3B8] font-sans flex items-center gap-1.5 sm:gap-2">
          <svg className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-[#C9A227] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate">Strict Fiduciary Discretion &bull; Sovereign Grade Governance</span>
        </div>

        {/* Mobile & Tablet Streamlined 3-Pillar Glass Telemetry Ribbon */}
        <div className="lg:hidden w-full max-w-[500px] pt-1">
          <div className="grid grid-cols-3 divide-x divide-white/10 rounded-xl bg-[#0B1320]/80 border border-[#C9A227]/25 p-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <div className="px-1 text-center">
              <span className="text-[9px] sm:text-[9.5px] text-[#94A3B8] font-sans block uppercase tracking-wider">Pipeline</span>
              <span className="text-[13px] sm:text-[15px] font-bold text-[#F8F9FA]">
                <Counter target={4.2} duration={1.2} format={(v) => `$${v.toFixed(1)}B+`} trigger={mounted} />
              </span>
            </div>
            <div className="px-1 text-center">
              <span className="text-[9px] sm:text-[9.5px] text-[#94A3B8] font-sans block uppercase tracking-wider">Network</span>
              <span className="text-[13px] sm:text-[15px] font-bold text-[#F8F9FA]">
                <Counter target={70} duration={1.4} format={(v) => `${Math.round(v)}+`} trigger={mounted} />
              </span>
            </div>
            <div className="px-1 text-center">
              <span className="text-[9px] sm:text-[9.5px] text-[#94A3B8] font-sans block uppercase tracking-wider">Presence</span>
              <span className="text-[11.5px] sm:text-[13px] font-semibold text-[#C9A227] block truncate">
                LON + 8 Hubs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Floating Telemetry Chips (Docked on desktop with client metrics) */}
      <div
        ref={chipsRef}
        className="hero__chips !hidden lg:!flex flex-col gap-2 xl:gap-2.5 lg:absolute lg:right-8 xl:right-12 z-20"
        data-mounted={mounted ? "true" : "false"}
      >
        {/* Chip 1: MANDATE PIPELINE */}
        <div className="hero__chip-parallax">
          <div className="hero__chip !bg-[#0B1320]/85 !border-[#C9A227]/30 shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl" role="img" aria-label="Mandate volume 4.2 billion dollars">
            <div className="hero__chip-head">
              <div className="hero__chip-meta">
                <span className="hero__chip-label !text-[#94A3B8] text-[11px] 2xl:text-[12px] font-sans tracking-wider">MANDATE PIPELINE</span>
                <span className="hero__chip-value !text-[#F8F9FA] text-[14px] 2xl:text-[16px] font-semibold">
                  <Counter target={4.2} duration={1.2} format={(v) => `$${v.toFixed(1)}B+`} trigger={mounted} />
                </span>
                <span className="hero__chip-pulse-wrap" aria-hidden="true">
                  <svg className="hero__chip-pulse !text-[#C9A227]" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M0 5 L3 5 L4.2 1.5 L6.2 8.5 L8 3 L9.4 5 L14 5" />
                  </svg>
                </span>
              </div>
              <span className="hero__chip-pill !border-[#C9A227]/40 !text-[#C9A227] text-[10px] 2xl:text-[11px]" data-accent="positive">
                GLOBAL
              </span>
            </div>
            <div className="text-[11px] 2xl:text-[12.5px] text-[#94A3B8]">
              Cross-border capital facilitation across Africa &amp; international markets
            </div>
          </div>
        </div>

        {/* Chip 2: INSTITUTIONAL INVESTORS */}
        <div className="hero__chip-parallax">
          <div className="hero__chip !bg-[#0B1320]/85 !border-[#C9A227]/30 shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl" role="img" aria-label="35 plus institutional partners">
            <div className="hero__chip-head">
              <div className="hero__chip-meta">
                <span className="hero__chip-label !text-[#94A3B8] text-[11px] 2xl:text-[12px] font-sans tracking-wider">CAPITAL NETWORK</span>
                <span className="hero__chip-value !text-[#F8F9FA] text-[14px] 2xl:text-[16px] font-semibold">
                  <Counter target={70} duration={1.4} format={(v) => `${Math.round(v)}+`} trigger={mounted} />
                </span>
              </div>
              <span className="hero__chip-pill !border-white/20 !text-white text-[10px] 2xl:text-[11px]">
                INSTITUTIONAL
              </span>
            </div>
            <div className="text-[11px] 2xl:text-[12.5px] text-[#94A3B8]">
              SWFs, Family Offices, Private Equity, Commercial Banks &amp; DFIs
            </div>
          </div>
        </div>

        {/* Chip 3: REGIONAL GROWTH HUBS */}
        <div className="hero__chip-parallax">
          <div className="hero__chip !bg-[#0B1320]/85 !border-[#C9A227]/30 shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl" role="img" aria-label="London HQ and 8 African Hubs">
            <div className="hero__chip-head">
              <div className="hero__chip-meta">
                <span className="hero__chip-label !text-[#94A3B8] text-[11px] 2xl:text-[12px] font-sans tracking-wider">PRESENCE</span>
                <span className="hero__chip-value !text-[#C9A227] text-[13px] 2xl:text-[15px] font-semibold">
                  London &bull; 8 African Hubs
                </span>
              </div>
            </div>
            <div className="text-[11px] 2xl:text-[12.5px] text-[#94A3B8]">
              Lagos &bull; Nairobi &bull; Johannesburg &bull; Cairo &bull; Accra &bull; Kigali
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
