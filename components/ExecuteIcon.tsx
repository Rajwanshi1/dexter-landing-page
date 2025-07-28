import React from 'react';

interface ExecuteIconProps {
  className?: string;
  size?: number;
}

export function ExecuteIcon({ className = "", size = 32 }: ExecuteIconProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          // Ensure consistent rendering across platforms
          shapeRendering: 'geometricPrecision',
          textRendering: 'optimizeLegibility',
          // Force hardware acceleration for smooth mobile animations
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <defs>
          {/* Mask for the arrow path */}
          <mask id={`arrowMask-${size}`}>
            <rect width="32" height="32" fill="black" />
            <path
              d="M16 6 C 21.523 6 26 10.477 26 16 C 26 21.523 21.523 26 16 26 C 10.477 26 6 21.523 6 16 C 6 12.8 7.2 9.9 9.2 7.8"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Better positioned arrow head */}
            <path
              d="M7 10.5 L9.2 7.8 L11.5 9.8"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="rotate(30 9.2 7.8)"
            />
          </mask>
        </defs>
        
        {/* Background circular arrow (static) */}
        <path
          d="M16 6 C 21.523 6 26 10.477 26 16 C 26 21.523 21.523 26 16 26 C 10.477 26 6 21.523 6 16 C 6 12.8 7.2 9.9 9.2 7.8"
          stroke="#111111"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Arrow head (static background) */}
        <path
          d="M7 10.5 L9.2 7.8 L11.5 9.8"
          stroke="#111111"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
          transform="rotate(30 9.2 7.8)"
        />
        
        {/* Animated progress fill */}
        <g mask={`url(#arrowMask-${size})`}>
          <circle
            cx="16"
            cy="16"
            r="12"
            fill="#111111"
            opacity="0.8"
          >
            <animate
              attributeName="r"
              values="0; 12; 12; 0"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.4; 0.7; 1"
              begin="0s"
            />
            <animate
              attributeName="opacity"
              values="0; 0.8; 0.8; 0"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.4; 0.7; 1"
              begin="0s"
            />
          </circle>
        </g>
        
        {/* Primary circular arrow (animated stroke) */}
        <path
          d="M16 6 C 21.523 6 26 10.477 26 16 C 26 21.523 21.523 26 16 26 C 10.477 26 6 21.523 6 16 C 6 12.8 7.2 9.9 9.2 7.8"
          stroke="#111111"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="69.1"
          strokeDashoffset="69.1"
          style={{
            // Ensure consistent stroke rendering on mobile
            vectorEffect: 'non-scaling-stroke'
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            values="69.1; 0; 0; 69.1"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.4; 0.7; 1"
            begin="0s"
          />
        </path>
        
        {/* Arrow head (animated) */}
        <path
          d="M7 10.5 L9.2 7.8 L11.5 9.8"
          stroke="#111111"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          transform="rotate(30 9.2 7.8)"
          style={{
            // Ensure consistent stroke rendering on mobile
            vectorEffect: 'non-scaling-stroke'
          }}
        >
          <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.3; 0.4; 0.7; 1"
            begin="0s"
          />
        </path>
        
        {/* Center tick mark */}
        <g opacity="0.6">
          <path
            d="M12.5 16 L15 18.5 L20 13.5"
            stroke="#111111"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="12"
            strokeDashoffset="12"
            style={{
              // Ensure consistent stroke rendering on mobile
              vectorEffect: 'non-scaling-stroke'
            }}
          >
            <animate
              attributeName="stroke-dashoffset"
              values="12; 0; 0; 12"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.4; 0.7; 1"
              begin="0s"
            />
            <animate
              attributeName="opacity"
              values="0.6; 1; 1; 0.6"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.4; 0.7; 1"
              begin="0s"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}