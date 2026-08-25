"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 04 — objection: what exactly am I buying?
// Engagement model as the primary axis (confirmed), not a service checklist.
export function Services() {
  return (
    <Section id="services" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Eyebrow className="text-accent">{services.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[28ch] font-display text-2xl font-bold text-foreground text-balance sm:text-3xl">
          {services.heading}
        </h2>
        <p className="mt-5 max-w-[62ch] font-body text-base text-muted">{services.body}</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {services.tiers.map((tier, i) => (
          <motion.div
            key={tier.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
            className="flex flex-col rounded-md border border-border bg-background p-6"
          >
            <div className="font-data text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
              {tier.num} — {tier.name}
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">{tier.heading}</h3>
            <p className="mt-3 font-body text-sm text-muted">{tier.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
