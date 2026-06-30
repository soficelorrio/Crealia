import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  color?: string;
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', size = '100%', color = 'currentColor', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    // Return just the iconic hand-drawn star as a compact accent
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height="auto"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
      >
        <path
          d="M 50 15 L 56 32 L 74 30 L 60 42 L 66 60 L 50 50 L 34 60 L 40 42 L 26 30 L 44 32 Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 200"
      width={size}
      height="auto"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      {/* Top hand-drawn sketchy arc */}
      <path
        d="M 130 62 C 160 58, 195 62, 225 76"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      
      {/* Bottom hand-drawn sketchy arc */}
      <path
        d="M 190 138 C 160 142, 125 138, 95 124"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      
      {/* Top Left Star - Hand-drawn style */}
      <path
        d="M 105 52 L 109 63 L 121 61 L 112 69 L 116 80 L 105 73 L 94 80 L 98 69 L 89 61 L 101 63 Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bottom Right Star - Hand-drawn style */}
      <path
        d="M 215 120 L 219 131 L 231 129 L 222 137 L 226 148 L 215 141 L 204 148 L 208 137 L 199 129 L 211 131 Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Brand Text CREALIA */}
      <text
        x="160"
        y="110"
        fontFamily="var(--font-sans)"
        fontSize="32"
        fontWeight="700"
        letterSpacing="0.08em"
        textAnchor="middle"
        fill="currentColor"
      >
        CREALIA
      </text>
    </svg>
  );
}
