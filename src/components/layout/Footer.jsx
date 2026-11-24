import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleTouchMove = (e) => {
    if (!footerRef.current || !e.touches || !e.touches[0]) return;
    const rect = footerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative w-full bg-[#050505] text-[#F8F9FA] pt-20 pb-12 px-6 sm:px-12 overflow-hidden rounded-[24px] mt-12 border-t border-[#C9A227]/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      aria-labelledby="footer-brand"
    >
      {/* Background Subtle Gradient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.15) 0%, rgba(11, 19, 32, 0.4) 60%, transparent 100%)',
        }}
      />

      {/* Top 4-Column Navigation Grid */}
      <div className="relative max-w-[1408px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10 text-[14px]">
        {/* Col 1: Firm Overview & London HQ */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="group select-none inline-flex flex-col" aria-label="Black Markt Network Consultancy">
            <span className="font-headings font-bold text-[24px] sm:text-[26px] tracking-wide leading-none inline-flex items-baseline transition-opacity duration-200 group-hover:opacity-90">
              <span className="text-[#F8F9FA] tracking-[0.03em]">BLACK MARKT</span>
            </span>
            <span className="text-[#C9A227] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase mt-1">
              Network Consultancy
            </span>
          </Link>
          <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
            Independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with global investment and strategic partnerships.
          </p>
          <div className="text-[12px] font-sans text-[#C9A227] tracking-wider uppercase mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] inline-block animate-pulse" />
            London HQ &bull; Global Capital Corridors
          </div>
        </div>

        {/* Col 2: Services Suite */}
        <div className="flex flex-col gap-3">
          <p className="font-headings text-[17px] text-white font-medium tracking-wide">
            Advisory Services
          </p>
          <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2">
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Strategic Capital Advisory
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Equity &amp; Debt Capital Raising
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Project Finance &amp; Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Strategic Partnerships &amp; Joint Ventures
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Mergers &amp; Acquisitions Advisory
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                Government &amp; PPP Advisory
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Growth Sectors */}
        <div className="flex flex-col gap-3">
          <p className="font-headings text-[17px] text-white font-medium tracking-wide">
            Growth Industries
          </p>
          <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2">
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Infrastructure &amp; Logistics
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Energy &amp; Renewable Resources
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Technology &amp; Digital Innovation
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Agriculture &amp; Value Chains
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Healthcare Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                Mining &amp; Natural Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: International Desks & Consultation */}
        <div className="flex flex-col gap-3">
          <p className="font-headings text-[17px] text-white font-medium tracking-wide">
            Strategic Presence
          </p>
          <div className="text-[#94A3B8] text-[13px] flex flex-col gap-2">
            <div>
              <span className="text-[#C9A227] font-semibold block">Headquarters:</span>
              124 City Road London, EC1V 2NX, England
            </div>
            <div>
              <span className="text-[#C9A227] font-semibold block">African Corridors:</span>
              Lagos &bull; Nairobi &bull; Johannesburg &bull; Cairo &bull; Accra &bull; Kigali
            </div>
            <div className="pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#050505] bg-[#C9A227] hover:bg-[#DFBA42] px-3.5 py-2 rounded-[6px] transition-all"
              >
                <span>Request a Consultation</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Discretion & Integrity Banner */}
      <div className="relative max-w-[1408px] mx-auto py-8 text-center text-[#94A3B8] text-[12.5px] border-b border-white/5">
        <p className="max-w-[850px] mx-auto leading-relaxed">
          &ldquo;Every engagement is guided by discretion, integrity and a commitment to creating sustainable commercial outcomes for our clients, investors and strategic partners.&rdquo;
        </p>
      </div>

      {/* Giant Mouse-Following Brand Wordmark */}
      <div className="relative max-w-[1408px] mx-auto py-12 flex justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${mousePos.x}% ${mousePos.y}%, rgba(201, 162, 39, 0.18), transparent 70%)`,
          }}
        />
        <h2
          id="footer-brand"
          className="font-headings font-bold text-[clamp(44px,9.5vw,138px)] tracking-[0.04em] text-white/10 uppercase select-none text-center transition-colors duration-300"
          style={{
            textShadow: '0 0 40px rgba(201, 162, 39, 0.08)',
          }}
        >
          BLACK MARKT
        </h2>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="relative max-w-[1408px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
        <div className="text-center sm:text-left leading-relaxed">
          &copy; {new Date().getFullYear()} Black Markt Network Consultancy (a subsidiary of LSTC, Reg No. 11124243, VAT 477993219, 124 City Road, London, EC1V 2NX). All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link>
          <Link to="/compliance" className="hover:text-white transition-colors">Compliance &amp; Due Diligence</Link>
        </div>
      </div>
    </footer>
  );
}
