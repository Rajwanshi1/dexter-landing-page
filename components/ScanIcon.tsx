import React from 'react';

interface ScanIconProps {
  className?: string;
  size?: number;
}

export function ScanIcon({ className = "", size = 32 }: ScanIconProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clip path for scanning line - extended bounds */}
        <defs>
          <clipPath id="scanBounds">
            <rect x="4" y="2" width="24" height="28" rx="6" />
          </clipPath>
        </defs>
        
        {/* Top pill bar */}
        <rect
          x="6"
          y="8"
          width="20"
          height="6"
          rx="3"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
        />
        
        {/* Bottom pill bar */}
        <rect
          x="6"
          y="18"
          width="20"
          height="6"
          rx="3"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
        />
        
        {/* Animated scanning line - extended beyond bars */}
        <g clipPath="url(#scanBounds)">
          <line
            x1="8"
            y1="2"
            x2="8"
            y2="30"
            stroke="#000000"
            strokeWidth="2"
            strokeOpacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 16 0; 0 0"
              dur="2.4s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.8; 1; 0.8"
              dur="2.4s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              keyTimes="0; 0.5; 1"
            />
          </line>
        </g>
      </svg>
    </div>
  );
}