import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bmn_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bmn_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bmn_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-[460px] z-50 p-5 rounded-2xl bg-[#0B1320]/95 border border-[#C9A227]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl text-white animate-fadeIn"
    >
      <div className="flex items-start gap-3.5 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h4 className="font-headings text-[16px] font-medium text-white">
            Cookie &amp; Privacy Preferences
          </h4>
          <p className="text-[12.5px] text-[#94A3B8] leading-relaxed mt-1">
            We use essential cookies to maintain secure site operation and anonymous analytics to improve your experience in compliance with UK GDPR and international data standards.
          </p>
        </div>
        <button
          onClick={handleDecline}
          className="text-[#94A3B8] hover:text-white p-1 rounded-md transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10">
        <Link
          to="/cookies"
          className="text-[11.5px] text-[#C9A227] hover:underline"
        >
          Cookie Policy
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDecline}
            className="px-3.5 py-1.5 rounded-lg border border-white/15 text-[11.5px] text-[#CBD5E1] hover:text-white hover:border-white/30 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[11.5px] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
