"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { proof } from "@/content/hero";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 03 — "The numbers, plainly." Reveals once on
// first scroll into view (whileInView + viewport once:true), matching the
// section-reveal spec: 400ms, 12px rise, 60ms stagger between items.
//
// v1 note: numbers render as static text rather than a true count-up tween.
// The formats here ("99.999%", "$230K+", "Zero") don't share a numeric
// shape, so a generic count-up needs a small per-item parser — worth adding
// in a follow-up pass, not blocking the quiet-launch page on it.
export function ProofStrip() {
  return (
    <section id="proof" className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[920px] px-6">
        <Eyebrow className="text-muted">The numbers, plainly</Eyebrow>
        <p className="mt-2 max-w-[60ch] font-body text-sm text-muted">
          Not projections, and not yet Madera Web Services client results: the operating record
          behind those results, run in production, in the roles that built it.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {proof.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
            >
              <div className="font-data text-2xl font-semibold tabular-nums text-primary sm:text-3xl">
                {item.num}
              </div>
              <div className="mt-1 text-sm text-muted">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
