import { motion } from "framer-motion";

interface Floating3DShapesProps {
  className?: string;
}

export const Floating3DShapes = ({ className = "" }: Floating3DShapesProps) => {
  const shapes = [
    { type: "cube", size: 60, x: "10%", y: "20%", delay: 0 },
    { type: "pyramid", size: 50, x: "85%", y: "15%", delay: 1 },
    { type: "sphere", size: 40, x: "75%", y: "70%", delay: 2 },
    { type: "cube", size: 45, x: "15%", y: "75%", delay: 1.5 },
    { type: "ring", size: 55, x: "90%", y: "45%", delay: 0.5 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.9, 1.1, 0.9],
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12 + index * 2,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            transformStyle: "preserve-3d",
          }}
        >
          {shape.type === "cube" && (
            <div
              className="w-full h-full border-2 border-primary/30"
              style={{
                transform: "rotateX(45deg) rotateZ(45deg)",
                background: "linear-gradient(135deg, hsla(43, 96%, 56%, 0.1), transparent)",
              }}
            />
          )}
          {shape.type === "pyramid" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid hsla(43, 96%, 56%, 0.2)`,
              }}
            />
          )}
          {shape.type === "sphere" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, hsla(43, 96%, 56%, 0.3), transparent 70%)",
                boxShadow: "inset 0 0 20px hsla(43, 96%, 56%, 0.2)",
              }}
            />
          )}
          {shape.type === "ring" && (
            <div
              className="w-full h-full rounded-full border-4 border-primary/20"
              style={{
                transform: "rotateX(70deg)",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
