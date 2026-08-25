import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";

// Phase 1 — "quiet launch" (blueprint section 10): hero, proof strip,
// schedule CTA. The remaining six pages and beats 04-08 build on top of
// this once it's live.
export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
    </>
  );
}
