import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = false,
  size = "md",
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-10 h-10",
  };

  const iconSizes = {
    sm: 15,
    md: 17,
    lg: 20,
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-xl border transition-all duration-300 ${
        isDark
          ? "bg-zinc-900/90 border-zinc-800 text-[#F5B301] hover:bg-zinc-800 hover:border-[#F5B301]/50 shadow-[0_0_15px_rgba(245,179,1,0.15)]"
          : "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-400 shadow-sm"
      } ${sizeClasses[size]} ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={iconSizes[size]} className="text-[#F5B301]" />
        ) : (
          <Moon size={iconSizes[size]} className="text-amber-700" />
        )}
      </motion.div>

      {showLabel && (
        <span className="ml-2 text-xs font-bold uppercase tracking-wider">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
};
