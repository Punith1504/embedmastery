"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AntiGravityWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function AntiGravityWrapper({
  children,
  delay = 0,
  duration = 6,
  yOffset = 15,
}: AntiGravityWrapperProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
