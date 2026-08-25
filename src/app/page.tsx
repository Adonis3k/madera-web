import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { ProofVerticals } from "@/components/sections/ProofVerticals";
import { Approach } from "@/components/sections/Approach";
import { AiForward } from "@/components/sections/AiForward";
import { FinalCta } from "@/components/sections/FinalCta";

// Full home page scroll story — blueprint section 07, beats 01-08. Header
// and Footer wrap every route from the root layout, not just this page.
export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Problem />
      <Services />
      <ProofVerticals />
      <Approach />
      <AiForward />
      <FinalCta />
    </>
  );
}
