"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// The hero's supporting image, replacing the network diagram (which now
// lives in the Approach section instead) — a large //MW lockup, in the
// spirit of the reference Adonis liked: bold wordmark, quiet diagonal
// texture, nothing that competes with the headline for attention.
export function BrandMark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
      className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border border-cover-border"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--cover-text) 0px, var(--cover-text) 1px, transparent 1px, transparent 18px)",
        }}
        aria-hidden="true"
      />
      <div className="relative text-center">
        <div className="font-display text-6xl font-bold tracking-tight text-cover-accent sm:text-7xl">
          {"//MW"}
        </div>
        <div className="mt-3 font-display text-base font-semibold uppercase tracking-[0.35em] text-white">
          Madera Web
        </div>
      </div>
    </motion.div>
  );
}
