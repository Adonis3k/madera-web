import type { ReactNode } from "react";

// Blueprint section 09: content never exceeds ~920px so body copy keeps a
// comfortable reading measure even at desktop width.
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[920px] px-6 ${className}`}>{children}</div>;
}
