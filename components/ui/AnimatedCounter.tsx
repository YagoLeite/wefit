"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  className = "",
}: AnimatedCounterProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
