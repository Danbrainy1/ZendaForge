import React, { useState } from "react";
import { motion } from "framer-motion";
import webcraftEmblemImg from "@/assets/webcraft-emblem.png";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animated?: boolean;
  className?: string;
  variant?: "full" | "icon" | "minimal";
  darkTheme?: boolean;
}

// Crisp Vector SVG Fallback Component for Emblem
export const SvgEmblemVector: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="160 160 396 396" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="blGoldGrad" x1="160" y1="160" x2="556" y2="556" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF5C2" />
        <stop offset="25%" stopColor="#FFD426" />
        <stop offset="65%" stopColor="#F5B301" />
        <stop offset="100%" stopColor="#B87700" />
      </linearGradient>
      <radialGradient id="blGoldGlow" cx="358" cy="358" r="190" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5B301" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#F5B301" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="358" cy="358" r="185" fill="url(#blGoldGlow)" />
    <path
      d="M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z"
      fill="url(#blGoldGrad)"
    />
  </svg>
);

export const WebCraftEmblemIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = "w-full h-full",
}) => {
  const [useImg, setUseImg] = useState(true);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {useImg ? (
        <img
          src={webcraftEmblemImg}
          alt="Web-Craft Projects Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]"
          loading="eager"
          decoding="async"
          onError={() => setUseImg(false)}
        />
      ) : (
        <SvgEmblemVector className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]" />
      )}
    </div>
  );
};

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
    <motion.div
      whileHover={animated ? { scale: 1.02 } : undefined}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}
    >
      {iconElement}
      
      <div className="flex flex-col text-left justify-center leading-none">
        <div className={`font-black tracking-tight ${titleSizes[size]} text-zinc-950 dark:text-white flex items-center`}>
          <span>WEB-</span>
          <span className="text-[#F5B301] drop-shadow-[0_0_8px_rgba(245,179,1,0.4)]">CRAFT</span>
        </div>
        
        <div className={`font-black uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400 ${subSizes[size]} mt-0.5`}>
          PROJECTS
        </div>

        {showTagline && (
          <div className={`font-bold tracking-wider text-amber-700 dark:text-[#F5B301] ${taglineSizes[size]} mt-0.5 whitespace-nowrap hidden sm:inline`}>
            WE DESIGN. WE BUILD. WE EMPOWER.
          </div>
        )}
      </div>
    </motion.div>
  );
};
