"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { finalCta, CONTACT_EMAIL } from "@/content/sections";

const EASE = [0.16, 1, 0.3, 1] as const;

// Blueprint section 07, beat 08 — closes the page the same way the hero
// opened it, on purpose (same dark cover ground, same headline register).
// The primary button routes to /schedule — that page holds the actual
// Calendly embed — rather than duplicating it here.
export function FinalCta() {
  return (
    <section className="bg-cover-bg py-20 sm:py-28">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Eyebrow className="text-cover-text-muted">{finalCta.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-white text-balance sm:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] font-body text-base text-cover-text-muted">
            {finalCta.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={finalCta.primaryCta.href} variant="primary">
              {finalCta.primaryCta.label}
            </Button>
          </div>
          <p className="mt-4 font-body text-sm text-cover-text-muted">
            Or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cover-text underline hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-8 max-w-[60ch] rounded-md border border-cover-border bg-cover-surface p-5 text-left"
        >
          <Eyebrow className="text-cover-text-muted">{finalCta.notSure.eyebrow}</Eyebrow>
          <p className="mt-2 font-body text-sm text-cover-text-muted">{finalCta.notSure.body}</p>
        </motion.div>
      </Container>
    </section>
  );
}
