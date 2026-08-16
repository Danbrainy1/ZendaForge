import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export const GlowingOrb = ({
  size = 200,
  color = "hsl(43 96% 56%)",
  blur = 100,
  opacity = 0.3,
  className = "",
  animate = true,
}: GlowingOrbProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [opacity * 0.7, opacity, opacity * 0.7],
      } : { scale: 1, opacity }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};
