import React, { useState, useRef, useEffect } from 'react';

export default function LuxurySelect({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select option...',
  className = '',
  required = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const selectedOption = options.find((opt) =>
    typeof opt === 'string' ? opt === value : opt.value === value
  );

  const displayLabel = selectedOption
    ? typeof selectedOption === 'string'
      ? selectedOption
      : selectedOption.label
    : value || placeholder;

  const handleSelect = (opt) => {
    const val = typeof opt === 'string' ? opt : opt.value;
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
          {label} {required && <span className="text-[#C9A227]">*</span>}
        </label>
      )}

      {/* Select Trigger Button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-4 rounded-lg bg-[#070D18] border transition-all duration-200 flex items-center justify-between text-left cursor-pointer select-none text-[14px] ${
          isOpen
            ? 'border-[#C9A227] ring-1 ring-[#C9A227] shadow-[0_0_15px_rgba(201,162,39,0.2)]'
            : 'border-white/15 hover:border-[#C9A227]/60'
        }`}
      >
        <span className={`truncate font-medium ${selectedOption ? 'text-[#F8F9FA]' : 'text-[#64748B]'}`}>
          {displayLabel}
        </span>

        {/* Custom Gold Chevron */}
        <span
          className={`shrink-0 ml-2 transition-transform duration-200 text-[#C9A227] ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Custom Luxury Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-64 overflow-y-auto rounded-xl bg-[#070D18] border border-[#C9A227]/40 shadow-[0_16px_40px_rgba(0,0,0,0.95)] backdrop-blur-xl py-1.5 scrollbar-thin divide-y divide-white/5 animate-fadeIn"
        >
          {options.map((opt, idx) => {
            const optVal = typeof opt === 'string' ? opt : opt.value;
            const optLabel = typeof opt === 'string' ? opt : opt.label;
            const isSelected = optVal === value;

            return (
              <div
                key={idx}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt)}
                className={`px-4 py-2.5 text-[13.5px] cursor-pointer transition-colors flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#C9A227]/20 text-[#C9A227] font-semibold'
                    : 'text-[#CBD5E1] hover:bg-[#C9A227]/10 hover:text-white'
                }`}
              >
                <span className="truncate">{optLabel}</span>
                {isSelected && (
                  <span className="text-[#C9A227] shrink-0 ml-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
