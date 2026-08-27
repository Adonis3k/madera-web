// Copy for the home page sections built after Phase 1 — blueprint section 07,
// beats 02, 04, 05, 06, 07, 08 — plus nav/footer copy. Numbers keep the same
// provenance rule as content/hero.ts: personal operating record, not yet
// Madera Web Services client history.

// Shared across the header CTA, the homepage Final CTA, and /schedule —
// keep in sync with the CALENDLY_EMBED_URL customization params in
// src/app/schedule/page.tsx if the base link ever changes.
export const CALENDLY_URL = "https://calendly.com/adonis-maderaweb/30min";

export const CONTACT_EMAIL = "Adonis@maderaweb.net";

export const nav = {
  mark: "//MW",
  name: "Web Services",
  links: [
    { label: "Services", href: "#services" },
    { label: "Proof", href: "#proof" },
    { label: "Approach", href: "#approach" },
  ],
  cta: { label: "Schedule a systems review", href: "/schedule" },
};

// Beat 02 — objection: do they actually understand my risk?
export const problem = {
  eyebrow: "The failure that doesn't show up until the audit does",
  heading: "Nothing above shows up on a status page. Until it does.",
  body: [
    "An unpatched instance nobody remembers spinning up. A failover that's never actually been tested. A vendor who goes quiet the week your compliance officer asks for documentation.",
    "None of it shows up on a status page. It shows up in a due-diligence questionnaire, or an incident report, at the worst possible time. That's the risk being carried every day by a fund too lean to justify a full-time DevOps hire, or a practice running patient systems on whatever the last vendor left behind.",
  ],
};

// Beat 03.5 — the operating model, stated once. Sits directly under the
// proof numbers: the record above is the "why trust this", A.D.A.P.T. is
// the "how every engagement actually runs". Five phases, same order every
// time; the four disciplines below run through all of them.
export const method = {
  eyebrow: "The Madera Method",
  acronym: "A.D.A.P.T.",
  tagline: "A disciplined approach to building and operating secure cloud infrastructure.",
  body: "Every engagement follows the same operating model: align the business need, design the right architecture, automate what should be repeatable, prove it works, then transition it into an environment that can be operated and improved.",
  phases: [
    {
      letter: "A",
      name: "Align",
      lead: "Start with the outcome.",
      body: "Requirements, stakeholders, constraints, risk and what success actually means.",
    },
    {
      letter: "D",
      name: "Design",
      lead: "Engineer before deploying.",
      body: "Architecture, security, resilience, recovery, cost and operational requirements.",
    },
    {
      letter: "A",
      name: "Automate",
      lead: "Make it reproducible.",
      body: "Infrastructure as code, version control, CI/CD and AI-assisted workflows where they add value.",
    },
    {
      letter: "P",
      name: "Prove",
      lead: "Trust evidence, not assumptions.",
      body: "Validate security, monitoring, backups, recovery, performance and expected behavior.",
    },
    {
      letter: "T",
      name: "Transition",
      lead: "Leave it operable.",
      body: "Documentation, runbooks, ownership, monitoring and a clear path for continuous improvement.",
    },
  ],
  disciplines: ["Security", "Observability", "Resilience", "Cost control"],
  disciplinesNote: "Built into every phase.",
};

// Beat 04 — objection: what exactly am I buying?
export const services = {
  eyebrow: "What exactly am I buying",
  heading: "Three ways to bring in enterprise infrastructure discipline, sized to what you need",
  body: "Engagement model, not service category: for this buyer, how you commit matters more than a checklist of domains. A fund or a healthcare practice evaluating a vendor asks about scope, SLA, and exit terms before anything else.",
  tiers: [
    {
      num: "TIER 01",
      name: "Managed",
      heading: "The DevOps hire you don't have to make",
      body: "Ongoing management: monitoring and alerting, IAM/RBAC administration, automated backup and disaster recovery, CI/CD upkeep, incident response. Scoped and priced like a fractional hire, not a break-fix vendor.",
    },
    {
      num: "TIER 02",
      name: "Project",
      heading: "Audit, harden, document, hand off",
      body: "A fixed-scope engagement built around a specific deadline: a fundraise, an audit, a migration. Infrastructure hardening, disaster-recovery build-out, cloud migration, compliance documentation and SOPs, delivered on a set timeline with a clean handoff.",
    },
    {
      num: "TIER 03",
      name: "Advisory",
      heading: "A second set of eyes, before you commit to either",
      body: "Architecture review, vendor and MSP evaluation, pre-audit readiness check. For teams not ready for an ongoing or project engagement yet, or who want an outside read before a bigger decision.",
    },
  ],
};

// Beat 05 — objection: has this been done for someone like me?
export const verticals = {
  eyebrow: "Has this been done for someone like me",
  heading: "Proof, by vertical",
  items: [
    {
      name: "For business that require regulatory compliance and can't afford downtime",
      body: "Currently responsible for production Linux and Windows infrastructure supporting medium to small business and hedge fund clients across AWS and Azure: 99.999% uptime, IAM and Azure RBAC hardened for least-privilege access, and automated AMI/EBS-snapshot disaster recovery built specifically to cut recovery time.",
    },
    {
      name: "For practices where downtime means a canceled visit, not a Slack message",
      body: "Led facility operations for a multi-site healthcare organization: HIPAA, ADA, and OSHA compliance, MSP and vendor coordination, and IT upgrades executed with zero disruption to patient care.",
    },
  ],
};

// Beat 06 — objection: can one person actually own this?
export const approach = {
  eyebrow: "Can one person actually own this",
  heading: "One accountable engineer. Not a ticket number.",
  body: "Every engagement runs on documented runbooks and incident-response procedures (not tribal knowledge held in one person's head) plus infrastructure as code, so the environment is reproducible without you. That discipline isn't new here: it's the same SOP-writing and system-monitoring process already built and run in production at a 365-day operation.",
};

// Beat 07 — objection: is the AI part just hype?
export const aiForward = {
  eyebrow: "Is the AI part just hype",
  heading: "Where this is already heading",
  body: "The same infrastructure discipline extends to the automated, AI-assisted workflows funds and practices are starting to ask about: reasoning, memory, and code execution, built on Amazon Bedrock and Claude. Not the reason to start this conversation. The reason it doesn't have to be the last one.",
};

// Beat 08 — final CTA. Primary button routes to the real /schedule page
// (the Calendly embed lives there) rather than an on-page anchor.
export const finalCta = {
  eyebrow: "Madera Web Services: Schedule",
  headline: "One call. Thirty minutes.",
  body: "A systems review, not a sales pitch: walk through what's running today, where the exposure actually is, and whether it's worth continuing the conversation. If it's not a fit, you'll know within twenty minutes, and you'll still have gotten something useful out of it.",
  primaryCta: { label: "Schedule a systems review", href: "/schedule" },
  notSure: {
    eyebrow: "For the visitor who isn't sure yet",
    body: `Not sure any of this is the right fit, or even what to call the problem? That's fine. Nothing above requires diagnosing it first. A slow site, a climbing AWS bill, a vendor who's gone quiet, a nagging sense nobody's actually watching the infrastructure: say what's happening at ${CONTACT_EMAIL}. This is just permission to use it before you're certain.`,
  },
};

// Footer — blueprint section 06 signature detail: the Systems Status strip
// repeats on every page, not just the homepage.
export const footer = {
  status: [
    { label: "SYSTEM OPERATIONAL", value: "" },
    { label: "UPTIME", value: "99.999%" },
  ],
  email: "adonis@maderaweb.net",
  copyright: `© ${new Date().getFullYear()} Madera Web Services`,
};
