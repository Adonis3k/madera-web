import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusPulse } from "@/components/ui/StatusPulse";
import { nav, footer } from "@/content/sections";

// Blueprint section 06, signature detail: the same live-feeling status line
// from the hero belongs in the footer on every page — it turns an abstract
// uptime claim into something that looks checkable. Runs on the dark cover
// tokens so the page opens and closes on the same ground (Header does the
// same for the same reason).
export function Footer() {
  return (
    <footer className="border-t border-cover-border bg-cover-bg">
      <div className="mx-auto w-full max-w-[1080px] px-6 py-12">
        <div className="flex flex-wrap items-center gap-3 rounded-md border border-cover-border bg-cover-surface px-4 py-3">
          <StatusPulse />
          <span className="font-data text-[12.5px] text-cover-text-muted">
            <b className="text-cover-text">{footer.status[0].label}</b>
          </span>
          <span className="h-3.5 w-px bg-cover-border" aria-hidden="true" />
          <span className="font-data text-[12.5px] text-cover-text-muted">
            {footer.status[1].label}{" "}
            <b className="text-cover-text">{footer.status[1].value}</b>
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-sm font-bold text-white">
              <span className="text-cover-accent">{nav.mark}</span> {nav.name}
            </div>
            <Eyebrow className="mt-2 text-cover-text-muted">{footer.copyright}</Eyebrow>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cover-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${footer.email}`}
              className="font-body text-sm text-cover-text-muted transition-colors hover:text-white"
            >
              {footer.email}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
