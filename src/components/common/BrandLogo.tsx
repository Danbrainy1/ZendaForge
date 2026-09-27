import React, { useState } from "react";
import { motion } from "framer-motion";
import zendaforgeEmblemImg from "@/assets/zendaforge-emblem.png";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animated?: boolean;
  className?: string;
  variant?: "full" | "icon" | "minimal";
  darkTheme?: boolean;
}

// Crisp Vector SVG Component for Zendaforge Emblem (Instant zero-latency load, infinite scale, gold metallic palette)
export const SvgZendaforgeEmblem: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="zfEmblemGold1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2A3" />
        <stop offset="35%" stopColor="#F5B301" />
        <stop offset="70%" stopColor="#E59800" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="zfEmblemGold2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#F5B301" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <radialGradient id="zfEmblemAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F5B301" stopOpacity="0.35" />
        <stop offset="65%" stopColor="#D97706" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#070709" stopOpacity="0" />
      </radialGradient>
      <filter id="zfEmblemGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#F5B301" floodOpacity="0.5" />
      </filter>
    </defs>

    {/* Radial Aura */}
    <circle cx="256" cy="256" r="220" fill="url(#zfEmblemAura)" />

    {/* Stylized Z Monogram in Radiant Gold */}
    <g filter="url(#zfEmblemGlow)">
      {/* Top Geometric Prism */}
      <path
        d="M120 130 C120 118 130 108 142 108 L380 108 C396 108 406 122 400 136 L348 240 L240 240 L310 162 L150 162 C134 162 120 148 120 130 Z"
        fill="url(#zfEmblemGold1)"
      />

      {/* Central Dynamic Diagonal Facet */}
      <path
        d="M348 240 L212 404 C202 416 186 414 180 400 L140 310 L256 170 L348 240 Z"
        fill="url(#zfEmblemGold2)"
        opacity="0.95"
      />

      {/* Bottom Foundation Bar */}
      <path
        d="M132 404 L370 404 C386 404 398 392 398 376 L398 350 C398 334 384 322 368 322 L202 322 L158 376 C148 388 138 398 132 404 Z"
        fill="url(#zfEmblemGold1)"
      />

      {/* Core Radiant Spark */}
      <polygon points="256,220 286,256 256,292 226,256" fill="#FFFFFF" opacity="0.9" />
    </g>
  </svg>
);

// Backward compatibility alias
export const SvgEmblemVector = SvgZendaforgeEmblem;

export const ZendaforgeEmblemIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = "w-full h-full",
}) => {
  const [useImg, setUseImg] = useState(true);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {useImg ? (
        <img
          src={zendaforgeEmblemImg}
          alt="Zendaforge Official Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]"
          loading="eager"
          decoding="async"
          onError={() => setUseImg(false)}
        />
      ) : (
        <SvgZendaforgeEmblem className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]" />
      )}
    </div>
  );
};

// Backward-compatible alias
export const WebCraftEmblemIcon = ZendaforgeEmblemIcon;

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showTagline = true,
  animated = true,
  className = "",
  variant = "full",
}) => {
  const iconSizes = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-13 h-13 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
  };

  const titleSizes = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg",
    lg: "text-xl sm:text-2xl",
    xl: "text-2xl sm:text-3xl",
  };

  const subSizes = {
    sm: "text-[8px] sm:text-[9px]",
    md: "text-[9px] sm:text-[10px]",
    lg: "text-[11px] sm:text-xs",
    xl: "text-xs sm:text-sm",
  };

  const taglineSizes = {
    sm: "text-[7px] sm:text-[8px]",
    md: "text-[8px] sm:text-[9px]",
    lg: "text-[9px] sm:text-[10px]",
    xl: "text-[10px] sm:text-xs",
  };

  const iconElement = (
    <motion.div
      whileHover={animated ? { scale: 1.08, rotate: 2 } : undefined}
      whileTap={animated ? { scale: 0.96 } : undefined}
      className={`relative flex items-center justify-center flex-shrink-0 ${iconSizes[size]}`}
    >
      {/* Radiant Gold aura behind the emblem */}
      <div className="absolute inset-0 bg-[#F5B301]/25 rounded-full blur-md pointer-events-none scale-110" />

      {/* Crisp Emblem */}
      <div className="relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(245,179,1,0.45)]">
        <ZendaforgeEmblemIcon className="w-full h-full object-contain" />
      </div>
    </motion.div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{iconElement}</div>;
  }

  return (
    <motion.div
      whileHover={animated ? { scale: 1.02 } : undefined}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}
    >
      {iconElement}
      
      <div className="flex flex-col text-left justify-center leading-none">
        <div className={`font-black tracking-tight ${titleSizes[size]} text-zinc-950 dark:text-white flex items-center`}>
          <span>ZENDA</span>
          <span className="bg-gradient-to-r from-amber-400 via-[#F5B301] to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(245,179,1,0.4)]">
            FORGE
          </span>
        </div>
        
        <div className={`font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400 ${subSizes[size]} mt-0.5`}>
          DIGITAL SOLUTIONS
        </div>

        {showTagline && (
          <div className={`font-bold tracking-wider text-amber-600 dark:text-[#F5B301] ${taglineSizes[size]} mt-0.5 whitespace-nowrap hidden sm:inline`}>
            WE DESIGN. WE BUILD. WE EMPOWER.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BrandLogo;
