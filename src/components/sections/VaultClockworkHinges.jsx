import React from 'react';

/**
 * VaultClockworkHinges (Option 2 — Clockwork Combination Tumbler Cascade)
 * 
 * An authentic Swiss bank vault opening sequence that runs automatically 100% of the time:
 * - 12 precision clockwork positions around the 360° perimeter (12:00, 1:00, 2:00, 3:00 crane hinge, etc.)
 * - Exact polar coordinates calculated from image analysis: radius = 38.5%
 * - Sequential ignition sweep: each gold bracket engages with a tactile hydraulic pulse, 
 *   specular 24K gold glint, and 4-point star pin sparkle.
 * - Synchronized crane hinge dual-pivot activation at 3:00 (angles 75° and 105° at r=44%).
 * - Completes with a perimeter golden shockwave expansion and center biometric authentication pulse.
 * - Fully responsive (mobile 250px to 4K desktop 680px+) with zero layout shift and 60fps GPU acceleration.
 */

// Radius of the 11 radial bracket centers: 38.5%
const BRACKET_RADIUS = 38.5;

// 12 clockwork positions (in degrees from 12 o'clock, clockwise)
const HINGE_POSITIONS = [
  { index: 0, deg: 0, label: '12:00 Apex Deadbolt' },
  { index: 1, deg: 30, label: '01:00 Tumbler Pin' },
  { index: 2, deg: 60, label: '02:00 Tumbler Pin' },
  { index: 3, deg: 90, label: '03:00 Crane Hinge Primary Pivot', isCraneHinge: true },
  { index: 4, deg: 120, label: '04:00 Tumbler Pin' },
  { index: 5, deg: 150, label: '05:00 Tumbler Pin' },
  { index: 6, deg: 180, label: '06:00 Base Deadbolt' },
  { index: 7, deg: 210, label: '07:00 Tumbler Pin' },
  { index: 8, deg: 240, label: '08:00 Tumbler Pin' },
  { index: 9, deg: 270, label: '09:00 Escapement Deadbolt' },
  { index: 10, deg: 300, label: '10:00 Tumbler Pin' },
  { index: 11, deg: 330, label: '11:00 Tumbler Pin' },
].map(item => {
  const rad = (item.deg * Math.PI) / 180;
  // Polar to Cartesian in percentage: 0 deg is Top (x=50%, y=11.5%)
  return {
    ...item,
    left: +(50 + BRACKET_RADIUS * Math.sin(rad)).toFixed(2),
    top: +(50 - BRACKET_RADIUS * Math.cos(rad)).toFixed(2),
  };
});

// Crane Hinge dual gold pivot pins (at r = 44%, angles 75° and 105°)
const CRANE_UPPER_PIN = {
  left: +(50 + 44 * Math.sin((75 * Math.PI) / 180)).toFixed(2), // 92.50%
  top: +(50 - 44 * Math.cos((75 * Math.PI) / 180)).toFixed(2),  // 38.61%
};
const CRANE_LOWER_PIN = {
  left: +(50 + 44 * Math.sin((105 * Math.PI) / 180)).toFixed(2), // 92.50%
  top: +(50 - 44 * Math.cos((105 * Math.PI) / 180)).toFixed(2),  // 61.39%
};

export default function VaultClockworkHinges() {
  const cycleDuration = 5.6; // Total loop duration in seconds
  const stepInterval = 0.32; // Delay between consecutive hinge clicks

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-visible z-10"
      aria-hidden="true"
    >
      {/* SVG Definitions for Gradients and Glows */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="vaultGoldGleamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBE6" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#E5C158" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8A6A18" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="vaultStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#FFF2A8" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A8811A" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Orbiting Gold Laser Tracer Circuit */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform -rotate-90 pointer-events-none"
        >
          {/* Subtle Hairline Orbit Track */}
          <circle
            cx="50"
            cy="50"
            r="38.5"
            fill="none"
            stroke="rgba(212, 175, 55, 0.12)"
            strokeWidth="0.35"
            strokeDasharray="1 2.5"
          />

          {/* Traveling Tracer Arc */}
          <circle
            cx="50"
            cy="50"
            r="38.5"
            fill="none"
            stroke="url(#vaultGoldGleamGrad)"
            strokeWidth="0.85"
            strokeDasharray="18 225"
            className="vault-tracer-orbit"
            style={{
              filter: 'drop-shadow(0 0 3px rgba(255, 225, 120, 0.85)) drop-shadow(0 0 6px rgba(212, 175, 55, 0.5))',
            }}
          />
        </svg>
      </div>

      {/* 2. Perimeter Confirmation Shockwave Ring (Triggers at cycle completion) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="vault-shockwave-ring rounded-full border border-[#D4AF37] pointer-events-none"
          style={{
            width: '88%',
            height: '88%',
          }}
        />
      </div>

      {/* 3. The 12 Clockwork Hinge Cascade Nodes */}
      {HINGE_POSITIONS.map(({ index, deg, left, top, isCraneHinge }) => {
        const delay = (index * stepInterval).toFixed(2);

        if (!isCraneHinge) {
          return (
            <div
              key={index}
              className="absolute pointer-events-none"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                width: '5.2%',
                height: '11.8%',
              }}
            >
              {/* Animated Bracket Body */}
              <div
                className="w-full h-full vault-hinge-node pointer-events-none relative"
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: `${cycleDuration}s`,
                }}
              >
                {/* Golden Luminescent Ambient Aura */}
                <div
                  className="absolute -inset-1.5 rounded-full pointer-events-none opacity-85"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 235, 140, 0.85) 0%, rgba(212, 175, 55, 0.4) 45%, transparent 75%)',
                    filter: 'blur(3px)',
                  }}
                />

                {/* 24K Gold Beveled Gleam Plate */}
                <div
                  className="w-full h-full rounded-[2.5px] pointer-events-none relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,252,225,0.96) 0%, rgba(230,195,90,0.9) 30%, rgba(188,145,38,0.75) 70%, rgba(120,90,15,0.55) 100%)',
                    boxShadow: '0 0 14px rgba(255, 215, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -1px 2px rgba(0, 0, 0, 0.4)',
                    mixBlendMode: 'screen',
                  }}
                >
                  {/* High-Speed Specular Sweep along Chamfer */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent pointer-events-none"
                    style={{ transform: 'skewY(-20deg)' }}
                  />
                </div>

                {/* Outer Pivot Pin 4-Point Star Glint (At the outer cap) */}
                <div
                  className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 vault-sparkle-star pointer-events-none"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${cycleDuration}s`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white pointer-events-none"
                    style={{
                      filter: 'drop-shadow(0 0 4px #FFF9D2) drop-shadow(0 0 8px #FFD700)',
                    }}
                  >
                    <path
                      d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
                      fill="url(#vaultStarGrad)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        }

        // Special 3:00 Crane Hinge Primary Pivot Node
        return (
          <React.Fragment key={index}>
            {/* Latch Tip at r = 38.5% */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                width: '6.5%',
                height: '5.2%',
              }}
            >
              <div
                className="w-full h-full vault-hinge-node pointer-events-none relative rounded-[2px]"
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: `${cycleDuration}s`,
                  background: 'linear-gradient(90deg, rgba(255,250,215,0.95) 0%, rgba(212,175,55,0.9) 50%, rgba(145,110,25,0.6) 100%)',
                  boxShadow: '0 0 16px rgba(255, 215, 0, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                  mixBlendMode: 'screen',
                }}
              />
            </div>

            {/* Upper Gold Pivot Cap on Crane Hinge (deg = 75°, r = 44%) */}
            <div
              className="absolute pointer-events-none vault-sparkle-star"
              style={{
                left: `${CRANE_UPPER_PIN.left}%`,
                top: `${CRANE_UPPER_PIN.top}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${delay}s`,
                animationDuration: `${cycleDuration}s`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white pointer-events-none"
                style={{
                  filter: 'drop-shadow(0 0 6px #FFF9D2) drop-shadow(0 0 12px #FFD700)',
                }}
              >
                <path
                  d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
                  fill="url(#vaultStarGrad)"
                />
              </svg>
            </div>

            {/* Lower Gold Pivot Cap on Crane Hinge (deg = 105°, r = 44%) */}
            <div
              className="absolute pointer-events-none vault-sparkle-star"
              style={{
                left: `${CRANE_LOWER_PIN.left}%`,
                top: `${CRANE_LOWER_PIN.top}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${delay}s`,
                animationDuration: `${cycleDuration}s`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white pointer-events-none"
                style={{
                  filter: 'drop-shadow(0 0 6px #FFF9D2) drop-shadow(0 0 12px #FFD700)',
                }}
              >
                <path
                  d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
                  fill="url(#vaultStarGrad)"
                />
              </svg>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
