"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusPulse } from "@/components/ui/StatusPulse";
import { BrandMark } from "@/components/motion/BrandMark";
import { hero } from "@/content/hero";

// Entry sequence — blueprint section 08:
// headline: on load, 550ms, cubic-bezier(.16,1,.3,1)
// subhead + CTA: +180ms after headline, 500ms, same easing
// status line: +150ms after subhead, 400ms, fade only (no movement)
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="bg-cover-bg border-b border-cover-border relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--cover-primary) 14%, transparent), transparent 40%), radial-gradient(circle at 82% 78%, color-mix(in srgb, var(--cover-accent) 12%, transparent), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Eyebrow className="text-cover-text-muted">{hero.eyebrow}</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
            className="mt-6 max-w-[46ch] font-body text-base text-cover-text-muted"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.43 }}
            className="mt-8 flex w-fit flex-wrap items-center gap-3 rounded-md border border-cover-border bg-cover-surface px-4 py-3"
          >
            <StatusPulse />
            <span className="font-data text-[12.5px] text-cover-text-muted">
              <b className="text-cover-text">{hero.status[0].label}</b>
            </span>
            <span className="h-3.5 w-px bg-cover-border" aria-hidden="true" />
            <span className="font-data text-[12.5px] text-cover-text-muted">
              {hero.status[1].label} <b className="text-cover-text">{hero.status[1].value}</b>
            </span>
            <span className="h-3.5 w-px bg-cover-border" aria-hidden="true" />
            <span className="font-data text-[12.5px] text-cover-text-muted">
              {hero.status[2].label} <b className="text-cover-text">{hero.status[2].value}</b>
            </span>
          </motion.div>
        </div>

        <BrandMark />
      </div>
    </section>
  );
}
