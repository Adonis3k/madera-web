"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

// Hoisted to module scope — creating this inside the component would reset
// its internal state (and the motion/gesture bindings) on every render.
const MotionLink = motion(Link);

// Button hover/press spec — blueprint section 08:
// hover: background shift + 1-2px lift, ease-out, 150ms
// press: lift resets, background steps darker, linear, 80ms
export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 font-body text-sm font-semibold";

  const styles =
    variant === "primary"
      ? "bg-ignition text-ignition-text border border-ignition"
      : "bg-transparent text-cover-text border border-cover-border hover:border-cover-text-muted hover:text-white";

  return (
    <MotionLink
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className={`${base} ${styles}`}
      whileHover={{ y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
      whileTap={{ y: 0, scale: 0.99, transition: { duration: 0.08, ease: "linear" } }}
    >
      {children}
    </MotionLink>
  );
}
