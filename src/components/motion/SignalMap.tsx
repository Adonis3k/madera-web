"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Desktop: the real Secure AI Deployment topology (the production AWS/Bedrock
// architecture behind the Architecture, Security & Cost Model section) —
// a static asset (public/architecture/secure-ai-topology.svg), not an
// animated abstraction. It's dense by design: this is evidence, not
// decoration, and it's the same diagram used in the GitHub repo and the
// adonismadera.com case study for this project.
//
// Mobile keeps the original simplified five-concept flow (firewall → load
// balancer → origin → primary DB → read replica) — the full topology isn't
// legible at phone width, so this stays as a lighter, generic stand-in
// below 640px rather than trying to cram the real diagram down that small.

const travelTimes = [0, 0.03, 0.11, 0.15, 1];
const LABEL = "font-data uppercase tracking-[0.08em]";

function useSignalTravel(from: [number, number], to: [number, number]) {
  return {
    // Framer Motion claims cx/cy once they appear in `animate` and manages
    // them as its own motion values from then on — a plain cx/cy prop on
    // the element gets overwritten (as "undefined") rather than used as
    // the starting point, so the first keyframe has to be passed via
    // `initial` for the circle to have a valid position before it animates.
    initial: { cx: from[0], cy: from[1], opacity: 0 },
    animate: {
      cx: [from[0], from[0], to[0], to[0], from[0]],
      cy: [from[1], from[1], to[1], to[1], from[1]],
      opacity: [0, 1, 1, 0, 0],
    },
  };
}

export function SignalMap() {
  const mobileTravel = useSignalTravel([60, 110], [60, 150]);

  return (
    <div className="w-full">
      {/* Desktop / tablet — the real deployment topology, static */}
      <div className="hidden sm:block">
        <div className="overflow-hidden rounded-lg border border-cover-border">
          <Image
            src="/architecture/secure-ai-topology.svg"
            alt="Secure AI deployment topology on AWS: request flow from users through Route 53, a multi-AZ application VPC with firewall, ALB, ECS and private-endpoint subnets, into Bedrock and SageMaker, wrapped by organization guardrails and a CDK delivery pipeline with responsible-AI evaluation."
            width={2180}
            height={1320}
            className="h-auto w-full"
            unoptimized
          />
        </div>
        <p className="mt-4 font-body text-sm leading-relaxed text-cover-text-muted">
          Cyan traces the live request path — Route 53 to the ALB to ECS Fargate to Bedrock,
          entirely through interface VPC endpoints. Violet marks controls attached to that
          path (Cognito, Guardrails). Slate is governance and telemetry running continuously
          across the account (CloudTrail, GuardDuty, CloudWatch). Green is the CDK delivery
          path, gated by a Responsible AI evaluation and a human approval before anything
          reaches the VPC.
        </p>
      </div>

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
          initial={mobileTravel.initial}
          animate={mobileTravel.animate}
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
