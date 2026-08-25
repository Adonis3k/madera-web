"use client";

import { motion } from "framer-motion";

// The one continuously-looping element on the page (blueprint section 08) —
// breathes because the system it represents never stops. 2.2s ease-in-out.
// Global prefers-reduced-motion override (globals.css) collapses this to a
// static dot automatically; no extra handling needed here.
export function StatusPulse({ className = "" }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block h-2 w-2 rounded-full bg-cover-accent ${className}`}
      animate={{ opacity: [1, 0.45, 1] }}
      transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    />
  );
}
