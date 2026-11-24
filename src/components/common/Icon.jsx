import React from 'react';

// Bespoke, elite SVG icons crafted for Black Markt Network Strategic Capital Advisory
const ICON_REGISTRY = {
  // Services & Strategy
  Compass: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  TrendingUp: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
      <circle cx="22" cy="7" r="1.5" fill="currentColor" />
    </svg>
  ),
  Building: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="1.5" />
      <path d="M9 22v-4h6v4" />
      <line x1="8" y1="6" x2="8.01" y2="6" strokeWidth="2.5" />
      <line x1="12" y1="6" x2="12.01" y2="6" strokeWidth="2.5" />
      <line x1="16" y1="6" x2="16.01" y2="6" strokeWidth="2.5" />
      <line x1="8" y1="10" x2="8.01" y2="10" strokeWidth="2.5" />
      <line x1="12" y1="10" x2="12.01" y2="10" strokeWidth="2.5" />
      <line x1="16" y1="10" x2="16.01" y2="10" strokeWidth="2.5" />
      <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth="2.5" />
      <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="2.5" />
      <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth="2.5" />
    </svg>
  ),
  Handshake: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 17l-5-5a3 3 0 0 1 4.24-4.24L12 9.5l1.76-1.76a3 3 0 0 1 4.24 4.24l-5 5a2.12 2.12 0 0 1-3 0z" fill="currentColor" fillOpacity="0.15" />
      <path d="M18.5 5.5l2 2a2.83 2.83 0 0 1 0 4l-4 4" />
      <path d="M5.5 18.5l-2-2a2.83 2.83 0 0 1 0-4l4-4" />
    </svg>
  ),
  CheckCircle: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 12.5l2.8 2.8L16.5 9" />
    </svg>
  ),
  ShieldCheck: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.5L4 6v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6l-8-3.5z" fill="currentColor" fillOpacity="0.12" />
      <path d="M9 12l2 2 4.5-4.5" />
    </svg>
  ),
  Layers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.15" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  ),
  LineChart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="20" x2="21" y2="20" />
      <polyline points="3 16 9 10 14 15 21 6" />
      <polyline points="17 6 21 6 21 10" />
    </svg>
  ),
  Briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v2" strokeWidth="2" />
      <path d="M2 12h20" />
    </svg>
  ),
  Landmark: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="22" x2="21" y2="22" strokeWidth="2" />
      <line x1="6" y1="18" x2="6" y2="10" strokeWidth="1.8" />
      <line x1="10" y1="18" x2="10" y2="10" strokeWidth="1.8" />
      <line x1="14" y1="18" x2="14" y2="10" strokeWidth="1.8" />
      <line x1="18" y1="18" x2="18" y2="10" strokeWidth="1.8" />
      <polygon points="12 2 20 7 4 7 12 2" fill="currentColor" fillOpacity="0.15" />
      <rect x="4" y="7" width="16" height="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="4" y="18" width="16" height="3" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),

  // Industries
  Truck: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="1" y="4" width="14" height="12" rx="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M15 8h4.5l3.5 4.5V16h-8V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="18.5" cy="18.5" r="2.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  Zap: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.18" />
    </svg>
  ),
  Home: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10.5L12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9.5z" fill="currentColor" fillOpacity="0.12" />
      <polyline points="9 22 9 13 15 13 15 22" />
    </svg>
  ),
  Activity: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  Cpu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.3" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  ),
  Factory: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 20h20M5 20V9l5 4V9l5 4V4h5v16" fill="currentColor" fillOpacity="0.12" />
      <circle cx="17.5" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  Wheat: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 22l10-10" />
      <path d="M16 8a4 4 0 0 0-4-4c0 2.2 1.8 4 4 4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 12a4 4 0 0 0-4-4c0 2.2 1.8 4 4 4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 12a4 4 0 0 0-4-4c0 2.2 1.8 4 4 4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 16a4 4 0 0 0-4-4c0 2.2 1.8 4 4 4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 4a4 4 0 0 0-4-4c0 2.2 1.8 4 4 4z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  Gem: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" fill="currentColor" fillOpacity="0.15" />
      <path d="M11 3L8 9l4 12 4-12-3-6" />
      <line x1="2" y1="9" x2="22" y2="9" />
    </svg>
  ),
  Hotel: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" fill="currentColor" fillOpacity="0.1" />
      <path d="M10 9h4M10 13h4M10 17h4" />
      <path d="M12 3v2" strokeWidth="2" />
    </svg>
  ),

  // Values & Governance
  Scale: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.8" />
      <polyline points="4 7 12 5 20 7" />
      <path d="M4 7l-2 6h8l-2-6" fill="currentColor" fillOpacity="0.12" />
      <path d="M20 7l-2 6h8l-2-6" fill="currentColor" fillOpacity="0.12" />
      <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
    </svg>
  ),
  Lock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="10" width="16" height="12" rx="2" fill="currentColor" fillOpacity="0.15" />
      <path d="M7 10V6a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
      <line x1="12" y1="17" x2="12" y2="19" strokeWidth="2" />
    </svg>
  ),
  Award: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8.5" r="6" fill="currentColor" fillOpacity="0.15" />
      <polyline points="8.21 13.89 7 22 12 18.5 17 22 15.79 13.88" />
      <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
    </svg>
  ),
  Globe2: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 2.5a15.3 15.3 0 0 1 4 9.5 15.3 15.3 0 0 1-4 9.5 15.3 15.3 0 0 1-4-9.5 15.3 15.3 0 0 1 4-9.5z" fill="currentColor" fillOpacity="0.12" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.5L4 6v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6l-8-3.5z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 5.5v14" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  ),
  Crown: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 18h18l-2-12-5 6-4-8-4 8-5-6-2 12z" fill="currentColor" fillOpacity="0.15" />
      <line x1="4" y1="21" x2="20" y2="21" strokeWidth="2" />
      <circle cx="12" cy="3.5" r="1" fill="currentColor" />
    </svg>
  ),
  CreditCard: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" fillOpacity="0.1" />
      <line x1="2" y1="9" x2="22" y2="9" strokeWidth="1.8" />
      <line x1="6" y1="15" x2="10" y2="15" strokeWidth="2" />
      <line x1="14" y1="15" x2="16" y2="15" strokeWidth="2" />
    </svg>
  ),
  FileText: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity="0.1" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  ArrowRight: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  ),
  ArrowLeft: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="20" y1="12" x2="5" y2="12" />
      <polyline points="11 18 5 12 11 6" />
    </svg>
  ),
  Check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  MapPin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
  ),
  Mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" fillOpacity="0.1" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  ),
  User: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
};

export default function Icon({ name, className = 'w-5 h-5', style, ...props }) {
  const IconComponent = ICON_REGISTRY[name];
  if (!IconComponent) {
    // Elegant fallback icon
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={style} {...props}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    );
  }
  return <IconComponent className={className} style={style} {...props} />;
}
