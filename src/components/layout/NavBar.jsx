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

      // If user scrolls back near top, reset reopened
      if (current < 100) {
        setIsReopened(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReopened, menuOpen]);

  useEffect(() => {
    // Close mobile menu on route change
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Close on Escape key press
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
        data-scrolled={scrollY > 40 ? "true" : "false"}
        data-reopened={isReopened ? "true" : "false"}
        data-menu-open={menuOpen ? "true" : "false"}
        data-nav-hidden={navHidden ? "true" : "false"}
        role="banner"
        style={{
          "--nav-ease-entrance": "cubic-bezier(0.16, 1, 0.3, 1)",
          "--nav-ease-exit": "cubic-bezier(0.7, 0, 0.84, 0)",
          "--nav-ease-fluid": "cubic-bezier(0.32, 0.72, 0, 1)",
          "--nav-ease-cinematic": "cubic-bezier(0.22, 1, 0.36, 1)",
          "--nav-duration-micro": "240ms",
          "--nav-duration-short": "360ms",
          "--nav-duration-base": "600ms",
          "--nav-duration-cinematic": "500ms",
          "--nav-duration-panel": "900ms",
          "--nav-stagger-tight": "80ms",
        }}
      >
        {/* Desktop Island Wrapper: Transitions into a floating frosted capsule on scroll */}
        <div
          className={`sensiq-nav__desktop-island ${isScrolled ? 'sensiq-nav__desktop-island--scrolled' : ''}`}
        >
          {/* Brand Logo: Elegant Sovereign Typography */}
          <Link to="/" className="sensiq-nav__brand group select-none flex flex-col justify-center" aria-label="Black Markt Network Consultancy">
            <span className="font-headings font-bold text-[20px] sm:text-[23px] tracking-[-0.02em] leading-none inline-flex items-baseline transition-opacity duration-200 group-hover:opacity-90">
              <span className="text-[#F8F9FA] tracking-[0.04em]">BLACK MARKT</span>
            </span>
            <span className="text-[#C9A227] text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase mt-0.5">
              Network Consultancy &bull; London
            </span>
          </Link>

          {/* Center Panel */}
          <div className="sensiq-nav__panel ml-auto !flex-initial !w-auto">
            {/* Pill Wrap */}
            <div className="sensiq-nav__pill-wrap !flex-initial !w-auto">
              {/* Dark Luxury Card: Links + Desktop Hamburger */}
              <div
                className="sensiq-nav__card !bg-[#0B1320]/95 !border !border-[#C9A227]/20 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md"
                style={{
                  width: isScrolled ? "4rem" : "auto",
                  padding: isScrolled ? "0" : "0 156px 0 20px",
                  justifyContent: isScrolled ? "center" : "flex-start",
                }}
              >
                <nav
                  className="sensiq-nav__links gap-2 xl:gap-3 2xl:gap-4.5"
                  aria-label="Main navigation"
                  style={{
                    opacity: isScrolled ? 0 : 1,
                    pointerEvents: isScrolled ? "none" : "auto",
                    transform: isScrolled ? "translateY(1rem)" : "translateY(0)",
                  }}
                >
                  {navLinks.map((item, index) => {
                    const isActive =
                      item.path === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(item.path);

                    return (
                      <React.Fragment key={item.label}>
                        <Link
                          to={item.path}
                          className={`sensiq-nav__link !text-[12px] xl:!text-[12.5px] 2xl:!text-[13px] tracking-[-0.01em] transition-colors ${
                            isActive
                              ? '!text-[#C9A227] font-semibold'
                              : '!text-[#E2E8F0]/85 hover:!text-white'
                          }`}
                        >
                          {item.label}
                        </Link>
                        {index < navLinks.length - 1 && (
                          <span className="sensiq-nav__divider !bg-white/10" aria-hidden="true" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </nav>

                {/* Desktop Hamburger button inside card */}
                <button
                  type="button"
                  className="sensiq-nav__hamburger sensiq-nav__hamburger--desktop !text-white hover:!text-[#C9A227]"
                  aria-label="Open menu"
                  aria-expanded={isReopened}
                  onClick={() => setIsReopened(!isReopened)}
                  style={{
                    opacity: isScrolled ? 1 : 0,
                    pointerEvents: isScrolled ? "auto" : "none",
                  }}
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

              {/* Right Cluster: Consultation ActionButton inside pill-wrap */}
              <div
                className="sensiq-nav__right-cluster"
                style={{
                  opacity: isScrolled ? 0 : 1,
                  pointerEvents: isScrolled ? "none" : "auto",
                  transform: isScrolled ? "translateX(1rem)" : "translateX(0)",
                }}
              >
                <Link
                  to="/book-consultation"
                  className="action-button group/action inline-flex items-center justify-between gap-1.5 border-0 select-none cursor-pointer no-underline rounded-[var(--normal-8)] font-body text-[12px] xl:text-[12.5px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-10 w-[130px] px-3.5 bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_0_15px_rgba(201,162,39,0.3)]"
                  aria-label="Request a Consultation"
                >
                  <span className="action-button__label transition-transform duration-[450ms] group-hover/action:translate-x-1">
                    Consultation
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
            className="text-[12px] sm:text-[12.5px] font-semibold tracking-tight bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] px-2.5 sm:px-3 py-1.5 rounded-[6px] font-sans mr-1.5 transition-colors"
            aria-label="Consultation"
          >
            <span className="hidden sm:inline">Strategic </span>Consultation
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
          className="sensiq-nav__mobile-panel !bg-[#0B1320] !border !border-[#C9A227]/30 text-white shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
          data-open={menuOpen ? "true" : "false"}
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="font-headings font-bold text-[18px] text-white tracking-wide block">
                BLACK MARKT
              </span>
              <span className="text-[#C9A227] text-[10px] tracking-wider uppercase">
                Network Consultancy &bull; London
              </span>
            </div>
            <button
              type="button"
              className="sensiq-nav__close !bg-white/10 !text-white hover:!bg-white/20"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="sensiq-nav__close-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4 4L12 12" />
                <path d="M12 4L4 12" />
              </svg>
            </button>
          </div>

          <nav className="sensiq-nav__mobile-links !mt-4" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="sensiq-nav__mobile-link !text-[20px] !text-[#F8F9FA] hover:!text-[#C9A227] !py-2.5 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 mt-2">
            <Link
              to="/book-consultation"
              onClick={() => setMenuOpen(false)}
              className="action-button group/action inline-flex items-center justify-between gap-1.5 w-full border-0 select-none cursor-pointer no-underline rounded-[var(--normal-8)] font-body text-[14px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap h-12 px-4 bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_0_15px_rgba(201,162,39,0.3)]"
              aria-label="Request a Strategic Consultation"
            >
              <span>Request a Strategic Consultation</span>
              <svg className="action-button__chevron shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.5 13.5L12 9L7.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="sensiq-nav__overlay !bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
