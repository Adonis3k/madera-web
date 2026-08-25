"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SignalMap } from "@/components/motion/SignalMap";
import { approach } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 06 — objection: can one person actually own
// this? The claim is "documented runbooks, infrastructure as code, a
// reproducible environment" — so this is the section that gets the
// labeled infrastructure diagram as its evidence, mirroring the hero's
// original text+diagram layout.
export function Approach() {
  return (
    <section id="approach" className="border-t border-cover-border bg-cover-bg py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Eyebrow className="text-cover-accent">{approach.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-bold text-white text-balance sm:text-3xl">
            {approach.heading}
          </h2>
          <p className="mt-5 max-w-[52ch] font-body text-base text-cover-text-muted">
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
