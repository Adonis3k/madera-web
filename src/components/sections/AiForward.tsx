"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aiForward } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 07 — objection: is the AI part just hype?
// Deliberately set apart in a muted card rather than a full-width section —
// "not the reason to start this conversation," so it shouldn't compete
// visually with the sections that carry the actual sales weight.
export function AiForward() {
  return (
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="rounded-md border border-dashed border-border bg-surface-muted p-6 sm:p-8"
      >
        <Eyebrow className="text-muted">{aiForward.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[36ch] font-display text-xl font-bold text-foreground text-balance sm:text-2xl">
          {aiForward.heading}
        </h2>
        <p className="mt-4 max-w-[62ch] font-body text-sm text-muted">{aiForward.body}</p>
      </motion.div>
    </Section>
  );
}
