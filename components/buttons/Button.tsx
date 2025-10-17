"use client";
import { ReactNode, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "default" | "success";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const circleVariants = {
  initial: { scale: 1 },
  animate: {
    scale: 50,
    transition: {
      duration: 0.2,
      type: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.2,
      type: "easeIn",
    },
  },
};

export default function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  const baseClasses =
    "relative overflow-hidden w-full h-[40px] px-2 py-2 rounded-[4px] flex items-center justify-center gap-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed box-border";

  const variantClasses = {
    default: "bg-we-blue text-white hover:bg-we-blue/90",
    success: "bg-we-green text-white hover:bg-we-green/90",
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            variants={circleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "absolute",
              left: `${mousePosition.x - 7.5}px`,
              top: `${mousePosition.y - 7.5}px`,
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: variant === "success" ? "#4caf50" : "#42a5f5",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 flex items-center gap-3 flex">
        {children}
      </span>
    </motion.button>
  );
}
