"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-we-green text-white";
      case "error":
        return "bg-red-500 text-white";
      case "info":
      default:
        return "bg-we-blue text-white";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed bottom-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg max-w-sm ${getTypeStyles()}`}
      >
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-2 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar toast"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
