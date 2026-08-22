import React from "react";
import { motion } from "framer-motion";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animated?: boolean;
  className?: string;
  variant?: "full" | "icon" | "minimal";
  darkTheme?: boolean;
}

export const WebCraftEmblemIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = "w-full h-full",
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img
      src="/webcraft-emblem.png"
      alt="Web-Craft Projects Emblem"
      className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]"
      loading="eager"
    />
  </div>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showTagline = true,
  animated = true,
  className = "",
  variant = "full",
}) => {
  const iconSizes = {
    sm: "w-9 h-9 sm:w-10 sm:h-10",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
    xl: "w-20 h-20 sm:w-24 sm:h-24",
  };

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-4xl sm:text-5xl",
  };

  const subtitleSizes = {
    sm: "text-[8px] sm:text-[9px] tracking-[0.26em]",
    md: "text-[9px] sm:text-[11px] tracking-[0.32em]",
    lg: "text-[11px] sm:text-xs tracking-[0.38em]",
    xl: "text-sm sm:text-base tracking-[0.42em]",
  };

  const taglineSizes = {
    sm: "text-[7px] tracking-[0.15em]",
    md: "text-[8px] sm:text-[9px] tracking-[0.2em]",
    lg: "text-[10px] sm:text-xs tracking-[0.24em]",
    xl: "text-xs sm:text-sm tracking-[0.28em]",
  };

  const iconElement = (
    <motion.div
      whileHover={animated ? { scale: 1.08, rotate: 2 } : undefined}
      whileTap={animated ? { scale: 0.96 } : undefined}
      className={`relative flex items-center justify-center flex-shrink-0 ${iconSizes[size]}`}
    >
      {/* Subtle Golden Glow aura behind the emblem */}
      <div className="absolute inset-0 bg-[#F5B301]/25 rounded-full blur-md pointer-events-none scale-110" />

      {/* Crisp Vector Emblem */}
      <div className="relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]">
        <WebCraftEmblemIcon className="w-full h-full object-contain" />
      </div>
    </motion.div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{iconElement}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {iconElement}

      <div className="flex flex-col justify-center text-left">
        {/* Main Title: WEB-CRAFT */}
        <div className={`font-black leading-tight tracking-tight flex items-baseline gap-0.5 ${titleSizes[size]}`}>
          <span className="text-zinc-900 dark:text-white transition-colors duration-300">WEB-</span>
          <span className="text-[#F5B301] drop-shadow-[0_0_12px_rgba(245,179,1,0.4)]">CRAFT</span>
        </div>

        {/* Subtitle: P R O J E C T S */}
        <div
          className={`font-extrabold uppercase mt-0.5 text-zinc-600 dark:text-zinc-300 transition-colors duration-300 ${subtitleSizes[size]}`}
        >
          PROJECTS
        </div>

        {/* Tagline: WE DESIGN. WE BUILD. WE EMPOWER. */}
        {showTagline && size !== "sm" && (
          <div className="flex items-center gap-1.5 mt-1 opacity-95">
            <div className="h-[1.5px] w-2 sm:w-3 bg-[#F5B301] rounded-full" />
            <span
              className={`font-bold text-amber-700 dark:text-[#F5B301] uppercase whitespace-nowrap transition-colors duration-300 ${taglineSizes[size]}`}
            >
              WE DESIGN. WE BUILD. WE EMPOWER.
            </span>
            <div className="h-[1.5px] w-2 sm:w-3 bg-[#F5B301] rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};
