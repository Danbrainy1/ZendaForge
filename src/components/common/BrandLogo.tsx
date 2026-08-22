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

  const fullLogoHeights = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
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
      className={`inline-flex items-center select-none ${className}`}
    >
      {/* Dark theme logo (White text + Gold emblem from WEBCRAFT-LOGO) */}
      <img
        src="/webcraft-logo-dark.png"
        alt="Web-Craft Projects"
        className={`hidden dark:block w-auto ${fullLogoHeights[size]} object-contain filter drop-shadow-[0_0_10px_rgba(245,179,1,0.3)]`}
        loading="eager"
      />
      {/* Light theme logo (Dark text + Gold emblem from WEBCRAFT-LOGO) */}
      <img
        src="/webcraft-full-logo.png"
        alt="Web-Craft Projects"
        className={`block dark:hidden w-auto ${fullLogoHeights[size]} object-contain filter drop-shadow-[0_0_8px_rgba(245,179,1,0.25)]`}
        loading="eager"
      />
    </motion.div>
  );
};
