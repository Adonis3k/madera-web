"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { method } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 03.5 — sits directly under the proof numbers.
// The record above answers "why trust this"; A.D.A.P.T. answers "how every
// engagement actually runs". Dark cover treatment (matching Approach and
// FinalCta) gives the operating model its own visual weight and separates
// the two light sections on either side.
export function Method() {
  return (
    <section
      id="method"
      className="border-t border-cover-border bg-cover-bg py-16 sm:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Eyebrow className="text-cover-accent">{method.eyebrow}</Eyebrow>
          <div className="mt-3 font-display text-4xl font-bold tracking-[0.12em] text-white sm:text-5xl">
            {method.acronym}
          </div>
          <p className="mt-4 max-w-[48ch] font-body text-base font-medium text-white text-balance sm:text-lg">
            {method.tagline}
          </p>
          <p className="mt-4 max-w-[62ch] font-body text-base text-cover-text-muted">
            {method.body}
          </p>
        </motion.div>

        <ol className="mt-12 space-y-px overflow-hidden rounded-md border border-cover-border">
          {method.phases.map((phase, i) => (
            <motion.li
              key={phase.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 bg-cover-surface p-5 sm:grid-cols-[7rem_1fr] sm:p-6"
            >
              <div className="font-data text-[12.5px] font-semibold uppercase tracking-[0.14em] text-cover-accent">
                <span className="text-white">{phase.letter}</span>
                <span className="mx-1.5 text-cover-border">|</span>
                {phase.name}
              </div>
              <div className="font-display text-lg font-bold text-white">{phase.lead}</div>
              <div className="hidden sm:block" />
              <p className="max-w-[54ch] font-body text-sm text-cover-text-muted">{phase.body}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
          className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="font-data text-[12.5px] font-semibold uppercase tracking-[0.14em] text-cover-accent">
            {method.disciplines.join(" · ")}
          </div>
          <div className="font-body text-sm text-cover-text-muted">{method.disciplinesNote}</div>
        </motion.div>
      </Container>
    </section>
  );
}
