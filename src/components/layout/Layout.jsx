import React, { useEffect } from 'react';
import Lenis from 'lenis';
import NavBar from './NavBar';
import Footer from './Footer';
import CookieConsent from '../common/CookieConsent';

export default function Layout({ children, fullBleed = false, className = '' }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#050505] text-white flex flex-col justify-between selection:bg-[#C9A227] selection:text-black">
      {/* Top Navbar */}
      <NavBar />

      {/* Main Page Content */}
      <main className={`w-full max-w-full overflow-x-hidden flex-1 ${fullBleed ? 'flex flex-col' : 'max-w-[1408px] mx-auto px-4 sm:px-6 md:px-8 pb-12 flex flex-col gap-6 w-full'} ${className}`}>
        {children}
      </main>

      {/* Cookie Consent Manager */}
      <CookieConsent />

      {/* Footer */}
      <Footer />
    </div>
  );
}
