import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../common/Icon';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Investors', path: '/investors' },
    { label: 'Transactions', path: '/transactions' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#C9A227]/25 shadow-[0_12px_32px_rgba(0,0,0,0.7)] py-2 sm:py-2.5'
            : 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3.5'
        }`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo ONLY: Bold, Prominent, Highly Visible */}
          <Link
            to="/"
            className="group select-none inline-flex items-center shrink-0 py-0.5 transition-transform duration-200 hover:scale-105"
            aria-label="Black Markt Network Consultancy Home"
          >
            <img
              src="/images/logos/bmn-logo.png"
              alt="Black Markt Network Logo"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain filter drop-shadow-[0_2px_18px_rgba(201,162,39,0.45)] transition-all"
            />
          </Link>

          {/* Desktop Navigation Links (Pill Capsule for >= 1150px) */}
          <nav
            className="hidden xl:flex items-center gap-1 bg-[#0B1320]/90 border border-[#C9A227]/25 rounded-full px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-[#C9A227] bg-[#C9A227]/15 font-semibold shadow-xs'
                      : 'text-[#CBD5E1] hover:text-[#C9A227] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button */}
            <Link
              to="/book-consultation"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] tracking-tight transition-all duration-200 shadow-[0_4px_20px_rgba(201,162,39,0.35)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              aria-label="Book Consultation"
            >
              <span>Book Consultation</span>
              <Icon name="ArrowRight" className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile / Tablet Consultation Shortcut Button */}
            <Link
              to="/book-consultation"
              className="lg:hidden inline-flex items-center px-3 sm:px-4 py-2 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[12px] sm:text-[13px] tracking-tight transition-colors whitespace-nowrap shrink-0"
              aria-label="Consultation"
            >
              Consultation
            </Link>

            {/* Hamburger Button (< 1280px) */}
            <button
              type="button"
              className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:text-[#C9A227] hover:border-[#C9A227]/40 transition-all cursor-pointer shrink-0"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Slide-Over Drawer Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel */}
          <div
            className="relative w-full max-w-[380px] h-full bg-[#070D18] border-l border-[#C9A227]/30 shadow-[0_0_60px_rgba(0,0,0,0.95)] z-50 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-fadeIn"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div>
              {/* Drawer Header: Logo ONLY + Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src="/images/logos/bmn-logo.png"
                    alt="Black Markt Logo"
                    className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(201,162,39,0.4)]"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/5 border border-white/15 text-white hover:text-[#C9A227] hover:border-[#C9A227] transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5 py-6" aria-label="Mobile navigation">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`py-3 px-4 rounded-xl text-[17px] font-headings font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? 'text-[#C9A227] bg-[#C9A227]/15 font-semibold'
                          : 'text-white hover:text-[#C9A227] hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <Icon name="ArrowRight" className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Drawer CTA & Office Info */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                to="/book-consultation"
                onClick={() => setMenuOpen(false)}
                className="w-full h-12 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition-all"
              >
                <span>Book Advisory Consultation</span>
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Link>

              <div className="text-center text-[12px] text-[#94A3B8]">
                <span>London Headquarters &bull; 124 City Road, EC1V 2NX</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
