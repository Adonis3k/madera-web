"use client";

import { motion } from "framer-motion";

// The hero's supporting image (blueprint section 04) — an abstracted
// infrastructure topology, not a photograph. One node breathes continuously
// (the status-pulse motif). Roughly every 7s a small signal travels one
// connection outward from it and rests — a sparse event, not a decorative
// loop (blueprint section 08, conflict #9).
//
// Below 640px this collapses to a single vertical line of nodes (section 09
// mobile simplification) — same pulse/signal behavior, cheaper to render.

const travelTimes = [0, 0.03, 0.11, 0.15, 1];

function useSignalTravel(from: [number, number], to: [number, number]) {
  return {
    cx: [from[0], from[0], to[0], to[0], from[0]],
    cy: [from[1], from[1], to[1], to[1], from[1]],
    opacity: [0, 1, 1, 0, 0],
  };
}

export function SignalMap() {
  const desktopTravel = useSignalTravel([150, 110], [240, 130]);
  const mobileTravel = useSignalTravel([60, 110], [60, 150]);

  return (
    <div className="w-full">
      {/* Desktop / tablet — branching topology */}
      <svg
        viewBox="0 0 300 220"
        role="img"
        aria-label="Abstracted infrastructure status map"
        className="hidden sm:block w-full h-auto overflow-visible"
      >
        <g stroke="var(--cover-border)" strokeWidth={1}>
          <line x1={40} y1={40} x2={150} y2={30} />
          <line x1={150} y1={30} x2={245} y2={55} />
          <line x1={40} y1={40} x2={60} y2={120} />
          <line x1={150} y1={30} x2={150} y2={110} />
          <line x1={245} y1={55} x2={240} y2={130} />
          <line x1={60} y1={120} x2={150} y2={110} />
          <line x1={150} y1={110} x2={240} y2={130} />
          <line x1={60} y1={120} x2={90} y2={185} />
          <line x1={150} y1={110} x2={170} y2={185} />
          <line x1={240} y1={130} x2={220} y2={185} />
        </g>
        <g fill="var(--cover-primary)">
          <circle cx={40} cy={40} r={5} />
          <circle cx={150} cy={30} r={5} />
          <circle cx={245} cy={55} r={5} />
          <circle cx={60} cy={120} r={5} />
          <circle cx={240} cy={130} r={5} />
          <circle cx={90} cy={185} r={5} />
          <circle cx={170} cy={185} r={5} />
          <circle cx={220} cy={185} r={5} />
        </g>
        <motion.circle
          cx={150}
          cy={110}
          r={6.5}
          fill="var(--cover-accent)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.circle
          r={4}
          fill="var(--cover-accent)"
          animate={desktopTravel}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, times: travelTimes }}
        />
      </svg>

      {/* Mobile — single vertical line, same pulse + signal-travel behavior */}
      <svg
        viewBox="0 0 120 260"
        role="img"
        aria-label="Abstracted infrastructure status map"
        className="sm:hidden w-full h-auto overflow-visible"
      >
        <g stroke="var(--cover-border)" strokeWidth={1}>
          <line x1={60} y1={20} x2={60} y2={70} />
          <line x1={60} y1={70} x2={60} y2={110} />
          <line x1={60} y1={110} x2={60} y2={150} />
          <line x1={60} y1={150} x2={60} y2={190} />
          <line x1={60} y1={190} x2={60} y2={230} />
        </g>
        <g fill="var(--cover-primary)">
          <circle cx={60} cy={20} r={5} />
          <circle cx={60} cy={70} r={5} />
          <circle cx={60} cy={190} r={5} />
          <circle cx={60} cy={230} r={5} />
        </g>
        <motion.circle
          cx={60}
          cy={110}
          r={6.5}
          fill="var(--cover-accent)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.circle
          r={4}
          fill="var(--cover-accent)"
          animate={mobileTravel}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, times: travelTimes }}
        />
      </svg>
    </div>
  );
}
