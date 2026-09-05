"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SignalMap } from "@/components/motion/SignalMap";
import { approach } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 06 — originally the "can one person actually
// own this" objection; repositioned (2026-09) as the Architecture, Security
// & Cost Model section, evidenced by the real Secure AI Deployment topology
// diagram rather than a generic labeled infrastructure sketch. Stacked
// full-width instead of the original side-by-side grid: the real diagram
// is dense and needs the full ~872px container width to read, not a
// ~445px half-column.
export function Approach() {
  return (
    <section id="approach" className="border-t border-cover-border bg-cover-bg py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="max-w-[65ch]"
        >
          <Eyebrow className="text-cover-accent">{approach.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-bold text-white text-balance sm:text-3xl">
            {approach.heading}
          </h2>
          <p className="mt-5 font-body text-base text-cover-text-muted">
            {approach.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
        >
          <SignalMap />
        </motion.div>
      </Container>
    </section>
  );
}
