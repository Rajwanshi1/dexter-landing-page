import React from 'react';

interface ScoreIconProps {
  className?: string;
  size?: number;
}

export function ScoreIcon({ className = "", size = 32 }: ScoreIconProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bar 1 (Left) - Grows then shrinks */}
        <rect
          x="6"
          y="18"
          width="4"
          height="8"
          rx="2"
          fill="#111111"
        >
          <animate
            attributeName="height"
            values="8; 18; 8"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.4; 1"
          />
          <animate
            attributeName="y"
            values="18; 8; 18"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.4; 1"
          />
        </rect>
        
        {/* Bar 2 (Middle) - Shrinks then grows */}
        <rect
          x="14"
          y="11"
          width="4"
          height="15"
          rx="2"
          fill="#111111"
        >
          <animate
            attributeName="height"
            values="15; 8; 15"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.6; 1"
          />
          <animate
            attributeName="y"
            values="11; 18; 11"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.6; 1"
          />
        </rect>
        
        {/* Bar 3 (Right) - Pulsing medium height */}
        <rect
          x="22"
          y="13"
          width="4"
          height="13"
          rx="2"
          fill="#111111"
        >
          <animate
            attributeName="height"
            values="13; 10; 13"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.5; 1"
          />
          <animate
            attributeName="y"
            values="13; 16; 13"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.5; 1"
          />
          <animate
            attributeName="fill-opacity"
            values="1; 0.7; 1"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.5; 1"
          />
        </rect>
      </svg>
    </div>
  );
}