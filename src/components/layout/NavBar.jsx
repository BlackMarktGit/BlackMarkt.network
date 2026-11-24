import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

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
        setNavHidden(true);
      } else {
        setNavHidden(false);
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

  const isScrolled = scrollY > 120 && !isReopened;

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
      >
        {/* Desktop Island Wrapper: Transitions into a floating frosted capsule on scroll */}
        <div
          className={`sensiq-nav__desktop-island ${isScrolled ? 'sensiq-nav__desktop-island--scrolled' : ''} !max-w-[1408px] !mx-auto !px-4 sm:!px-8`}
        >
          {/* Official Company Logo */}
          <Link
            to="/"
            className="sensiq-nav__brand group select-none flex items-center gap-3 py-1"
            aria-label="Black Markt Network Consultancy"
          >
            <img
              src="/images/logos/bmn-logo.png"
              alt="Black Markt Network Consultancy"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/public/images/logos/BMN Black Markt Network Logo.png';
              }}
            />
          </Link>

          {/* Desktop Navigation Links Pill */}
          <div className="sensiq-nav__panel ml-auto !flex-initial !w-auto">
            <div className="sensiq-nav__pill-wrap !flex-initial !w-auto">
              <nav
                className="sensiq-nav__card !bg-[#0B1320]/90 !border !border-[#C9A227]/25 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-md"
                aria-label="Main navigation"
              >
                <ul className="sensiq-nav__links gap-1.5 lg:gap-2.5 xl:gap-3.5 2xl:gap-4.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                    return (
                      <li key={link.path} className="sensiq-nav__item">
                        <Link
                          to={link.path}
                          className={`sensiq-nav__link !text-[12.5px] xl:!text-[13px] tracking-[-0.01em] transition-colors py-1.5 px-2 rounded-md ${
                            isActive
                              ? '!text-[#C9A227] font-semibold bg-[#C9A227]/10'
                              : '!text-[#CBD5E1] hover:!text-white font-medium hover:bg-white/5'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 ml-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] text-[12.5px] font-semibold tracking-[-0.01em] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)] whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden ml-auto flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-[#0B1320] border border-[#C9A227]/30 text-white hover:text-[#C9A227] transition-colors"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6 text-[#C9A227]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 top-[68px] z-50 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto lg:hidden animate-fadeIn"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#C9A227] text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase mb-2">
                Navigation
              </span>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-[18px] py-3 px-3 rounded-lg border-b border-white/5 transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#C9A227] font-semibold bg-[#C9A227]/10' : 'text-[#F8F9FA] hover:text-[#C9A227]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-white/30 text-sm">&rarr;</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <Link
                to="/book-consultation"
                className="w-full py-3.5 px-4 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-center text-[14px] shadow-lg shadow-[#C9A227]/20 flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-[12px] text-[#94A3B8]">
                <span>London Desk: </span>
                <a href="mailto:advisory@blackmarkt.network" className="text-[#C9A227] underline">
                  advisory@blackmarkt.network
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
