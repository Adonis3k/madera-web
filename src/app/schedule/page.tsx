import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CalendlyWidget } from "@/components/CalendlyWidget";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/content/sections";

export const metadata: Metadata = {
  title: "Schedule a systems review | Madera Web Services",
  description:
    "A systems review, not a sales pitch. Twenty minutes, no deck.",
};

// Blueprint section 07, beat 08 — the final CTA, and Phase 0 on the build
// order ("meeting scheduling link live as a standalone page"). Live on
// Calendly (calendly.com/adonis-maderaweb/30min) rather than the Cal.com
// placeholder the original blueprint called for.
//
// Brand colors are passed through Calendly's own embed customization query
// params (background_color / text_color / primary_color) since the widget
// renders inside an iframe Calendly controls, not our CSS — set from the
// "Add to website" panel in the Calendly dashboard, not hand-guessed here.
// Values mirror the dark "cover" tokens in globals.css (--cover-bg,
// --cover-text) and Signal Teal for the button/link color — not Ignition,
// which the brand guide reserves for this page's own primary CTA button
// only (see "On Ignition" in brand-style-guide.md).
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?background_color=0f0e24&text_color=f1f1f8&primary_color=00b496`;

export default function SchedulePage() {
  return (
    <section className="bg-cover-bg py-24 sm:py-28">
      <Container className="text-center">
        <Eyebrow className="text-cover-text-muted">Madera Web Services: Schedule</Eyebrow>
        <h1 className="mt-4 font-display text-3xl font-bold text-white text-balance sm:text-4xl">
          One call. Twenty minutes. No deck.
        </h1>
        <p className="mx-auto mt-4 max-w-[52ch] font-body text-base text-cover-text-muted">
          A systems review, not a sales pitch: walk through what&apos;s running today, where the
          exposure actually is, and whether it&apos;s worth continuing the conversation. If it&apos;s
          not a fit, you&apos;ll know within twenty minutes, and you&apos;ll still have gotten
          something useful out of it.
        </p>
        <p className="mt-4 font-body text-sm text-cover-text-muted">
          Or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-cover-text underline hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </p>

        {/* Book a Call — live Calendly inline widget, brand-colored via the URL params above */}
        <CalendlyWidget
          url={CALENDLY_EMBED_URL}
          className="mx-auto mt-10 max-w-[560px] overflow-hidden rounded-md border border-cover-border"
        />

        <div className="mx-auto mt-8 max-w-[60ch] rounded-md border border-cover-border bg-cover-surface p-5 text-left">
          <Eyebrow className="text-cover-text-muted">For the visitor who isn&apos;t sure yet</Eyebrow>
          <p className="mt-2 font-body text-sm text-cover-text-muted">
            Not sure any of this is the right fit, or even what to call the problem? That&apos;s
            fine. Nothing above requires diagnosing it first. A slow site, a climbing AWS bill, a
            vendor who&apos;s gone quiet, a nagging sense nobody&apos;s actually watching the
            infrastructure: say what&apos;s happening at {CONTACT_EMAIL}. This is just permission
            to use it before you&apos;re certain.
          </p>
        </div>
      </Container>
    </section>
  );
}
