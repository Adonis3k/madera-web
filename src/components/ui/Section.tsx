import type { ReactNode } from "react";
import { Container } from "./Container";

// Section wrapper — blueprint section 09 spacing: generous vertical rhythm,
// border-top dashes between sections (site chrome, not the blueprint doc's
// own styling — kept plain here since content/tokens are what's shared).
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-t border-border py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
