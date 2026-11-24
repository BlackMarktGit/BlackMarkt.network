import React from 'react';
import { Link } from 'react-router-dom';

export default function ActionButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'on-dark'
  className = '',
  style = {},
  ariaLabel,
}) {
  const isDark = variant === 'on-dark';

  const baseStyles = `
    group/action inline-flex items-center justify-between gap-1 border-0 select-none cursor-pointer
    no-underline rounded-[8px] font-body text-[14px] font-semibold tracking-[-0.02em] leading-none
    whitespace-nowrap transition-all duration-200 focus-visible:outline-none h-[52px] px-4
    ${variant === 'on-dark' || variant === 'secondary'
      ? 'bg-white/10 text-[#F8F9FA] border border-white/20 hover:bg-white/15 hover:border-[#C9A227]/40 focus-visible:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]'
      : variant === 'outline'
      ? 'bg-transparent text-[#F8F9FA] border border-white/20 hover:border-[#C9A227] hover:text-[#C9A227] focus-visible:shadow-[0_0_0_4px_rgba(201,162,39,0.25)]'
      : 'bg-[#C9A227] text-[#050505] hover:bg-[#DFBA42] shadow-[0_4px_24px_rgba(201,162,39,0.35)] focus-visible:shadow-[0_0_0_4px_rgba(201,162,39,0.35)]'
    }
    ${className}
  `;

  const content = (
    <>
      <span className="transition-transform duration-[450ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] group-hover/action:translate-x-1.5 group-focus-visible/action:translate-x-1.5">
        {children}
      </span>
      <svg
        className="shrink-0 transition-transform duration-[450ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] group-hover/action:translate-x-1"
        width="18"
        height="18"
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
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link to={href} className={baseStyles} style={style} aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={baseStyles} style={style} aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} style={style} aria-label={ariaLabel || children}>
      {content}
    </button>
  );
}
