import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { COMPANY_INFO, PRACTICES_DATA } from '../../data/platformData';

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

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#050505] text-[#F8F9FA] pt-20 pb-12 px-6 sm:px-12 overflow-hidden rounded-[24px] mt-16 border-t border-[#C9A227]/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      aria-labelledby="footer-brand"
    >
      {/* Background Subtle Gradient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.12) 0%, rgba(11, 19, 32, 0.4) 60%, transparent 100%)',
        }}
      />

      <div className="relative max-w-[1408px] mx-auto">
        {/* Top 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10 text-[14px]">
          {/* Col 1: Brand & Identity (Bold, High-Visibility Prominent Logo) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="group select-none inline-block py-1" aria-label="Black Markt Network Consultancy">
              <img
                src="/images/logos/bmn-logo.png"
                alt="Black Markt Network Consultancy"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(201,162,39,0.45)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-[#94A3B8] text-[13.5px] leading-relaxed max-w-[380px]">
              Independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with global institutional capital, expertise and strategic partnerships.
            </p>

            <div className="text-[12px] font-sans text-[#C9A227] tracking-wider uppercase mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] inline-block animate-pulse" />
              Strategic Capital Advisory &bull; London &bull; Africa
            </div>
          </div>

          {/* Col 2: Advisory Services (Opens Specific Service Pages) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="font-headings text-[17px] text-white font-medium tracking-wide">
                Advisory Services
              </h4>
              <Link to="/services" className="text-[11px] font-sans uppercase tracking-wider text-[#C9A227] hover:underline">
                All Services
              </Link>
            </div>
            <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2">
              {PRACTICES_DATA.map((practice) => (
                <li key={practice.slug}>
                  <Link
                    to={`/services/${practice.slug}`}
                    className="hover:text-[#C9A227] transition-colors line-clamp-1 block"
                  >
                    {practice.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Governance (Opens Specific Page Sections) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-headings text-[17px] text-white font-medium tracking-wide mb-1">
              Company
            </h4>
            <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2">
              <li>
                <Link to="/about#executive-overview" className="hover:text-[#C9A227] transition-colors">
                  Executive Overview
                </Link>
              </li>
              <li>
                <Link to="/about#who-we-advise" className="hover:text-[#C9A227] transition-colors">
                  Who We Advise
                </Link>
              </li>
              <li>
                <Link to="/about#operating-approach" className="hover:text-[#C9A227] transition-colors">
                  Our Operating Approach
                </Link>
              </li>
              <li>
                <Link to="/about#values" className="hover:text-[#C9A227] transition-colors">
                  Core Fiduciary Values
                </Link>
              </li>
              <li>
                <Link to="/investors#capital-pools" className="hover:text-[#C9A227] transition-colors">
                  Institutional Capital Pools
                </Link>
              </li>
              <li>
                <Link to="/investors#alignment-matrix" className="hover:text-[#C9A227] transition-colors">
                  Mandate Alignment Matrix
                </Link>
              </li>
              <li>
                <Link to="/transactions#lifecycle" className="hover:text-[#C9A227] transition-colors">
                  4-Stage Advisory Lifecycle
                </Link>
              </li>
              <li>
                <Link to="/transactions#mandate-profiles" className="hover:text-[#C9A227] transition-colors">
                  Selected Mandate Profiles
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#C9A227] transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link to="/contact#engagement-desks" className="hover:text-[#C9A227] transition-colors">
                  Direct Engagement Desks
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-[#C9A227] transition-colors">
                  Compliance &amp; Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Desks & Confidential Inquiries */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-headings text-[17px] text-white font-medium tracking-wide mb-1">
              Confidential Communications
            </h4>

            <div className="flex flex-col gap-2.5 text-[13px] text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <Icon name="MapPin" className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.registeredAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="Phone" className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#C9A227] transition-colors font-mono font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="Mail" className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails.advisory}`} className="hover:text-[#C9A227] transition-colors">
                  {COMPANY_INFO.emails.advisory}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="Mail" className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails.clientService}`} className="hover:text-[#C9A227] transition-colors">
                  {COMPANY_INFO.emails.clientService}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.2)]"
              >
                <span>Request Consultation</span>
                <Icon name="ArrowRight" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Grand Mouse-Following Brand Logo Watermark Display (Displayed Beneath the Footer) */}
        <div className="relative max-w-[1408px] mx-auto py-16 sm:py-24 flex justify-center items-center overflow-hidden border-b border-white/10">
          <div
            className="w-full max-w-[900px] flex justify-center items-center select-none pointer-events-none transition-transform duration-700 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePos.y - 50) * -0.06}deg) rotateY(${(mousePos.x - 50) * 0.06}deg)`,
            }}
          >
            <img
              src="/images/logos/bmn-logo.png"
              alt="Black Markt Network"
              className="w-full max-w-[650px] sm:max-w-[780px] md:max-w-[880px] h-auto object-contain opacity-75 filter drop-shadow-[0_12px_45px_rgba(201,162,39,0.35)]"
            />
          </div>
        </div>

        {/* Bottom Legal, IP & Policy Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <span>Reg: {COMPANY_INFO.registrationNumber} &bull; VAT: {COMPANY_INFO.vatNumber}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[#94A3B8]">
            <Link to="/privacy-policy" className="hover:text-[#C9A227] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#C9A227] transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/compliance" className="hover:text-[#C9A227] transition-colors">
              Fiduciary &amp; Regulatory Standards
            </Link>
            <Link to="/legal" className="hover:text-[#C9A227] transition-colors">
              Legal Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
