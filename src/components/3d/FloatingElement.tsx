import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  rotation?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  delay = 0,
  duration = 6,
  yOffset = 20,
  xOffset = 10,
  rotation = 5,
  className = "",
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        x: [-xOffset, xOffset, -xOffset],
        rotateZ: [-rotation, rotation, -rotation],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
