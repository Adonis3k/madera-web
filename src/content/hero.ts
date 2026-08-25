// Hero copy — blueprint sections 04 & 07 (Variant A, evidence-first control).
// Numbers are Adonis's personal operating record (current/prior roles), not
// Madera Web Services client history — see the provenance rule, blueprint
// section 04. Keep that attribution whenever this copy is edited.
export const hero = {
  eyebrow: "Madera Web Services — Cloud & DevOps",
  headline: "Enterprise uptime. Without the enterprise headcount.",
  subhead:
    "Cloud infrastructure and compliance-literate DevOps for funds and healthcare practices — 99.999% uptime maintained in current infrastructure work, one accountable engineer instead of a ticket queue.",
  primaryCta: { label: "Schedule a systems review", href: "/schedule" },
  secondaryCta: { label: "See the track record", href: "#proof" },
  status: [
    { label: "SYSTEM OPERATIONAL", value: "" },
    { label: "UPTIME", value: "99.999%" },
    { label: "SAVINGS TRACK RECORD", value: "$230K+/YR" },
  ],
};

// Proof strip — blueprint section 07, beat 03. Every number carries its
// attribution inline; never phrase these as Madera Web Services client
// results until that history actually exists.
export const proof = [
  { num: "99.999%", label: "Uptime maintained — current role, hedge fund infrastructure" },
  { num: "$230K+", label: "Saved annually — prior IT leadership role" },
  { num: "Zero", label: "Patient-care disruptions — prior healthcare operations role" },
];
