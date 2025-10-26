import React from 'react'

const logoStyles = `
  @keyframes pourCoffee {
    0% {
      opacity: 0;
      transform: translateY(-20px) scaleY(0.8);
    }
    20% {
      opacity: 1;
    }
    50% {
      transform: translateY(0) scaleY(1);
    }
    100% {
      transform: translateY(0) scaleY(1);
    }
  }

  @keyframes swayLeft {
    0%, 100% {
      transform: rotateZ(-1.5deg);
    }
    50% {
      transform: rotateZ(1.5deg);
    }
  }

  @keyframes swayRight {
    0%, 100% {
      transform: rotateZ(1.5deg);
    }
    50% {
      transform: rotateZ(-1.5deg);
    }
  }

  @keyframes cupBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  @keyframes coffeeFlow {
    0% {
      opacity: 0;
      transform: translateY(-15px) scaleX(0.6);
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(8px) scaleX(1);
    }
  }

  .kopi-logo-container {
    animation: cupBounce 2.5s ease-in-out infinite;
  }

  .kopi-logo-container:hover {
    animation: cupBounce 1.2s ease-in-out infinite;
  }

  .kopi-coffee-surface {
    animation: pourCoffee 2s ease-out infinite;
  }

  .kopi-handle {
    animation: swayRight 3s ease-in-out infinite;
    transform-origin: 182px 95px;
  }

  .kopi-text {
    animation: swayLeft 3s ease-in-out infinite;
    transform-origin: 100px 92px;
  }

  .kopi-pour-stream {
    animation: coffeeFlow 1.5s ease-in-out infinite;
    transform-origin: 100px 30px;
  }
`

export default function Logo({ size = 64, className = '' }) {
  const width = 240
  const height = 160
  const aspect = height / width
  const renderedHeight = Math.round(size * aspect)

  return (
    <>
      <style>{logoStyles}</style>
      <svg
        className={`kopi-logo-container ${className}`}
        width={size}
        height={renderedHeight}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo KopiItem"
      >
      <defs>
        {/* Gradient untuk cup body */}
        <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="100%" stopColor="#FEF3E2" />
        </linearGradient>

        {/* Gradient untuk coffee */}
        <radialGradient id="coffeeGradient" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="100%" stopColor="#5A3A20" />
        </radialGradient>

        {/* Shadow filter */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Saucer/base */}
      <ellipse cx="100" cy="138" rx="75" ry="14" fill="#E7C79A" opacity="0.5" />
      <ellipse cx="100" cy="136" rx="75" ry="12" fill="#F0D9B5" opacity="0.6" />

      {/* Cup body - main container */}
      <g filter="url(#shadow)">
        <path
          d="M 25 50 Q 20 60 20 75 L 20 110 Q 20 125 35 130 L 165 130 Q 180 125 180 110 L 180 75 Q 180 60 175 50 Z"
          fill="url(#cupGradient)"
          stroke="#7A4F2B"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      {/* Cup rim highlight */}
      <ellipse cx="100" cy="50" rx="78" ry="8" fill="#FFFFFF" opacity="0.4" />

      {/* Coffee stream pouring in */}
      <g className="kopi-pour-stream">
        <path
          d="M 95 25 Q 93 35 92 45"
          fill="none"
          stroke="#8B5A2B"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 105 25 Q 107 35 108 45"
          fill="none"
          stroke="#8B5A2B"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="95" cy="20" r="4" fill="#8B5A2B" opacity="0.7" />
        <circle cx="105" cy="20" r="4" fill="#8B5A2B" opacity="0.7" />
      </g>

      {/* Coffee surface with gradient */}
      <ellipse className="kopi-coffee-surface" cx="100" cy="62" rx="70" ry="11" fill="url(#coffeeGradient)" />

      {/* Coffee surface shine */}
      <ellipse cx="100" cy="60" rx="65" ry="8" fill="#6B4423" opacity="0.4" />

      {/* Handle - elegant curve */}
      <g className="kopi-handle" filter="url(#shadow)">
        <path
          d="M 182 70 Q 210 70 210 95 Q 210 120 182 120"
          fill="none"
          stroke="#FEF3E2"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 182 70 Q 210 70 210 95 Q 210 120 182 120"
          fill="none"
          stroke="#7A4F2B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </g>

      {/* Inner cup shadow for depth */}
      <path
        d="M 30 65 Q 35 95 40 115"
        fill="none"
        stroke="#7A4F2B"
        strokeWidth="1.5"
        opacity="0.15"
      />

      {/* Text inside cup - KopiItem */}
      <text
        className="kopi-text"
        x="100"
        y="92"
        textAnchor="middle"
        fontFamily="'Poppins', 'Inter', ui-sans-serif, system-ui"
        fontSize="26"
        fontWeight="900"
        letterSpacing="-0.8"
        fill="#3C2615"
        textRendering="optimizeLegibility"
      >
        KopiItem
      </text>

      {/* Cutting line - more refined */}
      <g>
        {/* Line shadow */}
        <line x1="35" y1="90" x2="165" y2="90" stroke="#000000" strokeWidth="5" strokeLinecap="round" opacity="0.08" />
        {/* Main line */}
        <line x1="35" y1="88" x2="165" y2="88" stroke="#7A4F2B" strokeWidth="4" strokeLinecap="round" />
        {/* Line highlight */}
        <line x1="35" y1="87" x2="165" y2="87" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* Top rim shadow */}
      <ellipse cx="100" cy="50" rx="78" ry="6" fill="#7A4F2B" opacity="0.08" />
      </svg>
    </>
  )
}
