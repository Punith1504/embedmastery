"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function TorchCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement slightly
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(
          circle ${isClicking ? '400px' : '250px'} at ${springX.get()}px ${springY.get()}px,
          rgba(255, 218, 185, 0.15) 0%,
          rgba(152, 255, 152, 0.05) 40%,
          transparent 80%
        )`,
        mixBlendMode: "screen",
      }}
      animate={{
        background: `radial-gradient(
          circle ${isClicking ? '500px' : '300px'} at ${springX.get()}px ${springY.get()}px,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 218, 185, 0.1) 40%,
          transparent 80%
        )`,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
    />
  );
}
