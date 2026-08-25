import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Schedule a systems review — Madera Web Services",
  description:
    "A systems review, not a sales pitch — twenty minutes, no deck.",
};

// Blueprint section 07, beat 08 — the final CTA, and Phase 0 on the build
// order ("Cal.com scheduling link live as a standalone page"). The embed
// itself is a placeholder: swap CAL_COM_LINK for the real Cal.com username
// once that account exists, then replace the placeholder <div> below with
// the Cal.com inline embed (`@calcom/embed-react`, or the plain <iframe>
// snippet from the Cal.com dashboard).
const CAL_COM_LINK = "https://cal.com/REPLACE-WITH-REAL-USERNAME/systems-review";

export default function SchedulePage() {
  return (
    <section className="bg-cover-bg py-24 sm:py-28">
      <Container className="text-center">
        <Eyebrow className="text-cover-text-muted">Madera Web Services — Schedule</Eyebrow>
        <h1 className="mt-4 font-display text-3xl font-bold text-white text-balance sm:text-4xl">
          One call. Twenty minutes. No deck.
        </h1>
        <p className="mx-auto mt-4 max-w-[52ch] font-body text-base text-cover-text-muted">
          A systems review, not a sales pitch — walk through what&apos;s running today, where the
          exposure actually is, and whether it&apos;s worth continuing the conversation. If it&apos;s
          not a fit, you&apos;ll know within twenty minutes, and you&apos;ll still have gotten
          something useful out of it.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={CAL_COM_LINK} variant="primary" external>
            Confirm my systems review
          </Button>
          <Button href="mailto:adonisdmadera@gmail.com" variant="secondary">
            Email instead
          </Button>
        </div>

        {/* TODO: replace with the real Cal.com inline embed once CAL_COM_LINK is live */}
        <div className="mx-auto mt-10 max-w-[560px] rounded-md border border-dashed border-cover-border p-6 text-left font-data text-xs text-cover-text-muted">
          [ Cal.com inline embed goes here — placeholder until the real booking link exists ]
        </div>

        <div className="mx-auto mt-8 max-w-[60ch] rounded-md border border-cover-border bg-cover-surface p-5 text-left">
          <Eyebrow className="text-cover-text-muted">For the visitor who isn&apos;t sure yet</Eyebrow>
          <p className="mt-2 font-body text-sm text-cover-text-muted">
            Not sure any of this is the right fit, or even what to call the problem? That&apos;s
            fine — nothing above requires diagnosing it first. A slow site, a climbing AWS bill, a
            vendor who&apos;s gone quiet, a nagging sense nobody&apos;s actually watching the
            infrastructure: say what&apos;s happening. &ldquo;Email instead,&rdquo; above, goes to
            the same inbox — this is just permission to use it before you&apos;re certain.
          </p>
        </div>
      </Container>
    </section>
  );
}
