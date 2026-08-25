import type { ReactNode } from "react";

// Caption / eyebrow — Inter 500 (or mono for data-flavored labels), uppercase, tracked.
// Blueprint section 01 type scale: 13px / 1.5.
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`font-data text-[12.5px] font-semibold uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </div>
  );
}
