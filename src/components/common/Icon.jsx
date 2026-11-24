import React from 'react';
import * as Icons from 'lucide-react';

/**
 * Premium Icon Component
 * Renders Lucide icons with consistent luxury styling and fallback
 */
export default function Icon({ name, className = 'w-5 h-5 text-[#C9A227]', size, strokeWidth = 1.75, ...props }) {
  const LucideIcon = Icons[name] || Icons.CircleDot;
  return (
    <LucideIcon
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
    />
  );
}
