"use client";

import { motion } from "framer-motion";

// A labeled infrastructure topology, not a photograph or an abstract blob —
// per Adonis's request, the diagram should read as a real 3-tier AWS-style
// architecture: an edge tier (firewall, load balancer, NAT gateway) sitting
// in the VPC's public subnet, a compute tier (app servers, one of them the
// live "origin" instance) and a data tier (primary DB, read replica, backup
// snapshot) inside a NACL-guarded private subnet.
//
// The live/pulsing node is the origin app server — the system that never
// stops (blueprint section 08's one continuously-looping element). Roughly
// every 7s a small signal travels from origin to a neighboring app server —
// a health-check/failover path, not decoration (section 08, conflict #9).
//
// This now lives in the Approach section, not the hero — the hero's right
// column carries the //MW brand lockup instead (BrandMark.tsx).
//
// Below 640px this collapses to a single vertical line — same five-concept
// flow (firewall → load balancer → origin → primary DB → read replica),
// boundary/NACL detail dropped for a cheaper, simpler mobile render.

const travelTimes = [0, 0.03, 0.11, 0.15, 1];
const LABEL = "font-data uppercase tracking-[0.08em]";

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
        aria-label="Infrastructure topology diagram: a firewall, load balancer, and NAT gateway at the edge; three app servers with an active origin instance; a primary database with a read replica and backup snapshot — all inside a VPC with a NACL-guarded private subnet"
        className="hidden sm:block w-full h-auto overflow-visible"
      >
        {/* Boundaries */}
        <rect
          x={15}
          y={10}
          width={270}
          height={195}
          rx={8}
          fill="none"
          stroke="var(--cover-border)"
          strokeWidth={1}
          strokeDasharray="3 3"
          opacity={0.7}
        />
        <text x={20} y={21} fill="var(--cover-text-muted)" className={LABEL} fontSize={6.5}>
          VPC
        </text>
        <rect
          x={40}
          y={94}
          width={220}
          height={112}
          rx={6}
          fill="none"
          stroke="var(--cover-border)"
          strokeWidth={1}
          strokeDasharray="2 3"
          opacity={0.5}
        />
        <text x={44} y={91} fill="var(--cover-text-muted)" className={LABEL} fontSize={6}>
          NACL
        </text>

        {/* Connections */}
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

        {/* Nodes */}
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

        {/* Labels */}
        <g fill="var(--cover-text-muted)" fontSize={6}>
          <text x={44} y={31} className={LABEL}>Firewall</text>
          <text x={150} y={20} textAnchor="middle" className={LABEL}>Load Balancer</text>
          <text x={250} y={52} className={LABEL}>NAT GW</text>
          <text x={54} y={124} textAnchor="end" className={LABEL}>App Server</text>
          <text x={157} y={101} fill="var(--cover-accent)" className={LABEL}>Origin</text>
          <text x={246} y={133} className={LABEL}>App Server</text>
          <text x={90} y={200} textAnchor="middle" className={LABEL}>Primary DB</text>
          <text x={170} y={200} textAnchor="middle" className={LABEL}>Read Replica</text>
          <text x={220} y={200} textAnchor="middle" className={LABEL}>Backup</text>
        </g>
      </svg>

      {/* Mobile — single vertical line, same five-concept flow */}
      <svg
        viewBox="0 0 160 260"
        role="img"
        aria-label="Infrastructure topology diagram: firewall, load balancer, an active origin server, primary database, and read replica"
        className="sm:hidden w-full h-auto overflow-visible"
      >
        <g stroke="var(--cover-border)" strokeWidth={1}>
          <line x1={60} y1={20} x2={60} y2={70} />
          <line x1={60} y1={70} x2={60} y2={110} />
          <line x1={60} y1={110} x2={60} y2={190} />
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
        <g fill="var(--cover-text-muted)" fontSize={7}>
          <text x={70} y={23} className={LABEL}>Firewall</text>
          <text x={70} y={73} className={LABEL}>Load Balancer</text>
          <text x={70} y={113} fill="var(--cover-accent)" className={LABEL}>Origin</text>
          <text x={70} y={193} className={LABEL}>Primary DB</text>
          <text x={70} y={233} className={LABEL}>Read Replica</text>
        </g>
      </svg>
    </div>
  );
}
