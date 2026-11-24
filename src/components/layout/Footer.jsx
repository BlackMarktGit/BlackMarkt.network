import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/platformData';

export default function Footer() {
  return (
    <footer
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10 text-[14px]">
          {/* Col 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="group select-none inline-block" aria-label="Black Markt Network Consultancy">
              <img
                src="/images/logos/bmn-logo.png"
                alt="Black Markt Network Consultancy Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/public/images/logos/BMN Black Markt Network Logo.png';
                }}
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

          {/* Col 2: Services (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-headings text-[17px] text-white font-medium tracking-wide mb-1">
              Advisory Services
            </h4>
            <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2.5">
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
                  Investment Readiness &amp; Due Diligence
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                  Mergers &amp; Acquisitions Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Sectors & Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-headings text-[17px] text-white font-medium tracking-wide mb-1">
              Company
            </h4>
            <ul className="text-[#94A3B8] text-[13px] flex flex-col gap-2.5">
              <li>
                <Link to="/about" className="hover:text-[#C9A227] transition-colors">
                  About The Firm
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#C9A227] transition-colors">
                  Growth Industries
                </Link>
              </li>
              <li>
                <Link to="/investors" className="hover:text-[#C9A227] transition-colors">
                  Investor Network
                </Link>
              </li>
              <li>
                <Link to="/transactions" className="hover:text-[#C9A227] transition-colors">
                  Transactions
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#C9A227] transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A227] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Desks & Confidential Inquiries (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-headings text-[17px] text-white font-medium tracking-wide mb-1">
              Confidential Communications
            </h4>

            <div className="flex flex-col gap-2 text-[13px] text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>
                  124 City Road, London, EC1V 2NX, England
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:advisory@blackmarkt.network" className="hover:text-[#C9A227] transition-colors">
                  advisory@blackmarkt.network
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:Clientservice@blackmarkt.network" className="hover:text-[#C9A227] transition-colors">
                  Clientservice@blackmarkt.network
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.2)]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Entity & Registration Notice */}
        <div className="pt-8 pb-6 border-b border-white/5 text-[12px] text-[#94A3B8] leading-relaxed">
          <p>
            <strong className="text-white font-medium">Corporate Registration &amp; Legal Notice:</strong>{' '}
            Black Markt Network Consultancy is a subsidiary of LSTC, registered in England and Wales under company registration number 11124243. Registered office address: 124 City Road, London, EC1V 2NX, England. Registered VAT Number: 477993219. All confidential engagements are governed under the laws of England and Wales.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} Black Markt Network Consultancy. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#C9A227] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#C9A227] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/cookies" className="hover:text-[#C9A227] transition-colors">
              Cookie Policy
            </Link>
            <Link to="/compliance" className="hover:text-[#C9A227] transition-colors">
              Compliance &amp; Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
