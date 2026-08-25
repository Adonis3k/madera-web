"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { problem } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 02 — objection: do they actually understand my
// risk? First section after the numbers; still evidence-toned, no ask yet.
export function Problem() {
  return (
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Eyebrow className="text-accent">{problem.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[24ch] font-display text-2xl font-bold text-foreground text-balance sm:text-3xl">
          {problem.heading}
        </h2>
        <div className="mt-5 max-w-[62ch] space-y-4 font-body text-base text-muted">
          {problem.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
