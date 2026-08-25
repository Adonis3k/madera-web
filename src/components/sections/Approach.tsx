"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { approach } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 06 — objection: can one person actually own
// this? Deliberately plain — the answer is process, not persuasion.
export function Approach() {
  return (
    <Section id="approach" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="max-w-[62ch]"
      >
        <Eyebrow className="text-accent">{approach.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-foreground text-balance sm:text-3xl">
          {approach.heading}
        </h2>
        <p className="mt-5 font-body text-base text-muted">{approach.body}</p>
      </motion.div>
    </Section>
  );
}
