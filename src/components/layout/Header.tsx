import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { nav } from "@/content/sections";

// Sticky nav, always on the dark cover tokens regardless of what section is
// scrolled beneath it — blueprint section 09 calls for a bookended feel
// (hero and footer share the same dark ground); running the header on that
// same ground keeps one consistent anchor color as the page scrolls instead
// of a nav that has to swap light/dark per section.
//
// v1 simplification: middle nav links collapse on mobile rather than moving
// into a hamburger menu — the mark and the Schedule button (the one action
// that matters) stay visible at every width. A real menu is a fast follow,
// not a blocker.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cover-border bg-cover-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-base font-bold tracking-tight text-white"
        >
          <Wordmark className="text-cover-accent" />
          <span className="hidden sm:inline">{nav.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-cover-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={nav.cta.href}
          variant="secondary"
          className="whitespace-nowrap px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="sm:hidden">Schedule</span>
          <span className="hidden sm:inline">{nav.cta.label}</span>
        </Button>
      </div>
    </header>
  );
}
