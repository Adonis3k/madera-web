"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type WheelEvent as ReactWheelEvent } from "react";

// Desktop: the real Secure AI Deployment topology (the production AWS/Bedrock
// architecture behind the Architecture, Security & Cost Model section) —
// a static asset (public/architecture/secure-ai-topology.svg), not an
// animated abstraction. It's dense by design: this is evidence, not
// decoration, and it's the same diagram used in the GitHub repo and the
// adonismadera.com case study for this project. A click opens it full-size
// in a scroll/drag-zoomable lightbox — the thumbnail alone isn't legible at
// the density this diagram carries.
//
// Mobile keeps the original simplified five-concept flow (firewall → load
// balancer → origin → primary DB → read replica) — the full topology isn't
// legible at phone width, so this stays as a lighter, generic stand-in
// below 640px rather than trying to cram the real diagram down that small.

const travelTimes = [0, 0.03, 0.11, 0.15, 1];
const LABEL = "font-data uppercase tracking-[0.08em]";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

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

  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const openZoom = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    setIsZoomOpen(true);
  }, []);

  const closeZoom = useCallback(() => {
    setIsZoomOpen(false);
  }, []);

  // Lock background scroll and wire Escape-to-close while the lightbox is open.
  useEffect(() => {
    if (!isZoomOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isZoomOpen, closeZoom]);

  const zoomBy = useCallback((delta: number) => {
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === MIN_SCALE) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleWheel = useCallback(
    (e: ReactWheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      zoomBy(e.deltaY > 0 ? -ZOOM_STEP / 2 : ZOOM_STEP / 2);
    },
    [zoomBy],
  );

  const startDrag = useCallback(
    (x: number, y: number) => {
      if (scale === MIN_SCALE) return;
      dragState.current = { startX: x, startY: y, originX: pan.x, originY: pan.y };
      setIsDragging(true);
    },
    [scale, pan],
  );

  const moveDrag = useCallback((x: number, y: number) => {
    if (!dragState.current) return;
    const dx = x - dragState.current.startX;
    const dy = y - dragState.current.startY;
    setPan({ x: dragState.current.originX + dx, y: dragState.current.originY + dy });
  }, []);

  const endDrag = useCallback(() => {
    dragState.current = null;
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full">
      {/* Desktop / tablet — the real deployment topology, static, click-to-zoom */}
      <div className="hidden sm:block">
        <button
          type="button"
          onClick={openZoom}
          className="group relative block w-full overflow-hidden rounded-lg border border-cover-border text-left"
          aria-label="Open a full-size, zoomable view of the Secure AI deployment topology diagram"
        >
          <Image
            src="/architecture/secure-ai-topology.svg"
            alt="Secure AI deployment topology on AWS: request flow from users through Route 53, a multi-AZ application VPC with firewall, ALB, ECS and private-endpoint subnets, into Bedrock and SageMaker, wrapped by organization guardrails and a CDK delivery pipeline with responsible-AI evaluation."
            width={2180}
            height={1320}
            className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
            unoptimized
          />
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-cover-border bg-cover-surface/90 px-2.5 py-1.5 font-data text-[11px] uppercase tracking-[0.08em] text-cover-text-muted backdrop-blur-sm transition-colors group-hover:text-cover-accent">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Click to enlarge
          </span>
        </button>
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

      {/* Full-size lightbox — portaled to <body> so it isn't clipped by the
          motion.div ancestor in Approach.tsx (framer-motion's applied
          `transform` turns that div into a containing block for anything
          position:fixed inside it, which would otherwise break this). */}
      {isZoomOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Secure AI deployment topology, full size"
            onClick={closeZoom}
          >
            <div className="absolute right-4 top-4 flex gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomBy(-ZOOM_STEP);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black/40 font-data text-lg leading-none text-white/90 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomBy(ZOOM_STEP);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black/40 font-data text-lg leading-none text-white/90 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setScale(1);
                  setPan({ x: 0, y: 0 });
                }}
                className="flex h-9 items-center justify-center rounded-md border border-white/20 bg-black/40 px-3 font-data text-xs uppercase tracking-[0.08em] text-white/90 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Reset zoom"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeZoom();
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black/40 text-lg leading-none text-white/90 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
              onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                if (touch) startDrag(touch.clientX, touch.clientY);
              }}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                if (touch) moveDrag(touch.clientX, touch.clientY);
              }}
              onTouchEnd={endDrag}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- needs manual scale/pan transforms next/image's layout model doesn't support */}
              <img
                src="/architecture/secure-ai-topology.svg"
                alt="Secure AI deployment topology on AWS, full size"
                draggable={false}
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
                className={`max-h-[88vh] max-w-[92vw] select-none transition-transform ${
                  isDragging ? "cursor-grabbing duration-0" : scale > MIN_SCALE ? "cursor-grab duration-100" : "cursor-zoom-in duration-100"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (scale === MIN_SCALE) zoomBy(ZOOM_STEP);
                }}
              />
            </div>

            <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-data text-[11px] uppercase tracking-[0.08em] text-white/50">
              Scroll or +/− to zoom · drag to pan · Esc to close
            </p>
          </div>,
          document.body,
        )}
    </div>
  );
}
