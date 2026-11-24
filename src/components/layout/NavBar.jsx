import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [isReopened, setIsReopened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      if (current > lastScrollY.current && current > 200 && !isReopened && !menuOpen) {
        setNavHidden(true); // scrolling down
      } else {
        setNavHidden(false); // scrolling up
      }

      if (current < 100) {
        setIsReopened(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReopened, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const isScrolled = scrollY > 160 && !isReopened;

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
        className="sensiq-nav"
        data-scrolled={scrollY > 40 ? 'true' : 'false'}
        data-reopened={isReopened ? 'true' : 'false'}
        data-menu-open={menuOpen ? 'true' : 'false'}
        data-nav-hidden={navHidden ? 'true' : 'false'}
        role="banner"
        style={{
          '--nav-ease-entrance': 'cubic-bezier(0.16, 1, 0.3, 1)',
          '--nav-ease-exit': 'cubic-bezier(0.7, 0, 0.84, 0)',
          '--nav-ease-fluid': 'cubic-bezier(0.32, 0.72, 0, 1)',
          '--nav-ease-cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
          '--nav-duration-micro': '240ms',
          '--nav-duration-short': '360ms',
          '--nav-duration-base': '600ms',
          '--nav-duration-cinematic': '500ms',
          '--nav-duration-panel': '900ms',
          '--nav-stagger-tight': '80ms',
        }}
      >
        {/* Desktop Island Wrapper: Transitions into a floating frosted capsule on scroll */}
        <div
          className={`sensiq-nav__desktop-island ${isScrolled ? 'sensiq-nav__desktop-island--scrolled' : ''}`}
        >
          {/* Brand Logo: Prominent, Clearly Legible Emblem & Wordmark */}
          <Link
            to="/"
            className="sensiq-nav__brand group select-none flex items-center gap-2 sm:gap-3 py-1 min-w-0"
            aria-label="Black Markt Network Consultancy"
          >
            <img
              src="/images/logos/bmn-logo.png"
              alt="Black Markt Network Logo"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(201,162,39,0.3)] transition-transform duration-200 group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-headings font-bold text-[16px] min-[360px]:text-[18px] sm:text-[21px] 2xl:text-[23px] tracking-[0.03em] leading-none text-[#F8F9FA] transition-colors group-hover:text-white truncate">
                BLACK MARKT
              </span>
              <span className="text-[#C9A227] text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.16em] uppercase mt-1 truncate hidden min-[380px]:inline">
                Network Consultancy
              </span>
            </div>
          </Link>

          {/* Center / Right Links Panel */}
          <div className="sensiq-nav__panel ml-auto !flex-initial !w-auto">
            <div className="sensiq-nav__pill-wrap !flex-initial !w-auto">
              <div
                className="sensiq-nav__card !bg-[#0B1320]/95 !border !border-[#C9A227]/20 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md"
                style={{
                  width: isScrolled ? '4rem' : 'auto',
                  padding: isScrolled ? '0' : '0 160px 0 20px',
                  justifyContent: isScrolled ? 'center' : 'flex-start',
                }}
              >
                {/* Desktop Nav Links */}
                <nav
                  className="sensiq-nav__links gap-2 xl:gap-3 2xl:gap-4.5"
                  aria-label="Main navigation"
                  style={{
                    opacity: isScrolled ? 0 : 1,
                    pointerEvents: isScrolled ? 'none' : 'auto',
                    transform: isScrolled ? 'translateY(1rem)' : 'translateY(0)',
                  }}
                >
                  {navLinks.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        className={`sensiq-nav__link text-[13px] 2xl:text-[14px] font-medium transition-colors whitespace-nowrap px-1.5 py-1 ${
                          isActive
                            ? 'text-[#C9A227] font-semibold'
                            : 'text-[#CBD5E1] hover:text-[#C9A227]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Scrolled State Desktop Hamburger Button */}
                <button
                  type="button"
                  className="sensiq-nav__hamburger sensiq-nav__hamburger--desktop"
                  aria-label="Expand navigation menu"
                  onClick={() => setIsReopened(true)}
                  style={{
                    opacity: isScrolled ? 1 : 0,
                    pointerEvents: isScrolled ? 'auto' : 'none',
                  }}
                >
                  <svg
                    className="sensiq-nav__hamburger-icon text-white"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 6H17" />
                    <path d="M3 10H17" />
                    <path d="M3 14H17" />
                  </svg>
                </button>

                {/* Embedded Primary CTA in Pill */}
                <Link
                  to="/book-consultation"
                  className="action-button sensiq-nav__cta !bg-[#C9A227] !text-[#050505] hover:!bg-[#DFBA42] shadow-[0_2px_12px_rgba(201,162,39,0.3)] !px-4 !py-2 !rounded-[6px] !text-[12.5px] 2xl:!text-[13px] font-semibold tracking-[-0.01em]"
                  aria-label="Strategic Consultation"
                  style={{
                    opacity: isScrolled ? 0 : 1,
                    pointerEvents: isScrolled ? 'none' : 'auto',
                    transform: isScrolled ? 'translateX(100%)' : 'translateX(0)',
                  }}
                >
                  <span>Book Consultation</span>
                  <svg
                    className="w-3.5 h-3.5 ml-1 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 12L10 8L6 4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Right Cluster */}
        <div className="sensiq-nav__mobile-right">
          <Link
            to="/book-consultation"
            className="text-[11.5px] min-[360px]:text-[12px] font-semibold tracking-tight bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] px-2.5 sm:px-3 py-1.5 rounded-[6px] font-sans mr-1.5 transition-colors shrink-0"
            aria-label="Consultation"
          >
            Consultation
          </Link>

          <button
            type="button"
            className="sensiq-nav__hamburger sensiq-nav__hamburger--mobile !text-white !border-white/15"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="sensiq-nav__hamburger-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 6H17" />
              <path d="M3 10H17" />
              <path d="M3 14H17" />
            </svg>
          </button>
        </div>

        {/* Mobile Slide-out Menu Panel */}
        <div
          id="sensiq-mobile-menu"
          className="sensiq-nav__mobile-panel !bg-[#0B1320] !border !border-[#C9A227]/30 text-white shadow-[0_24px_60px_rgba(0,0,0,0.85)] max-w-[90vw] sm:max-w-[420px]"
          data-open={menuOpen ? 'true' : 'false'}
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logos/bmn-logo.png"
                alt="Black Markt Logo"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="font-headings font-bold text-[17px] text-white tracking-wide block">
                  BLACK MARKT
                </span>
                <span className="text-[#C9A227] text-[9.5px] tracking-wider uppercase">
                  Network Consultancy
                </span>
              </div>
            </div>
            <button
              type="button"
              className="sensiq-nav__close !bg-white/10 !text-white hover:!bg-white/20 p-2 rounded-lg"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4L12 12" />
                <path d="M12 4L4 12" />
              </svg>
            </button>
          </div>

          <nav className="sensiq-nav__mobile-links !mt-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="sensiq-nav__mobile-link !text-[18px] !text-[#F8F9FA] hover:!text-[#C9A227] !py-2.5 border-b border-white/5 block font-headings"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 mt-2">
            <Link
              to="/book-consultation"
              onClick={() => setMenuOpen(false)}
              className="action-button group/action inline-flex items-center justify-between gap-1.5 w-full border-0 select-none cursor-pointer no-underline rounded-lg font-body text-[14px] font-semibold h-12 px-5 bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_0_20px_rgba(201,162,39,0.3)]"
            >
              <span>Book an Advisory Consultation</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="sensiq-nav__overlay !bg-black/70 backdrop-blur-sm fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
