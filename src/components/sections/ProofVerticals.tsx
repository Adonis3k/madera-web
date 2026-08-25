"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { verticals } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 05 — objection: has this been done for someone
// like me? Two verticals, matched to the two primary audiences.
export function ProofVerticals() {
  return (
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Eyebrow className="text-accent">{verticals.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
          {verticals.heading}
        </h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {verticals.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
            className="rounded-md border border-border bg-surface p-6"
          >
            <h3 className="font-display text-base font-bold text-foreground text-balance">
              {item.name}
            </h3>
            <p className="mt-3 font-body text-sm text-muted">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
