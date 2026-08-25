# Madera Web Services — site

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion, built from the
[blueprint](https://claude.ai/code/artifact/e22ecfc8-571e-4ab3-b016-adf13ab8c29d) — every color
token, font, copy string, and motion timing in this repo traces back to a specific decision in
that document. Comments in the source point back to the relevant section.

## What's here (Phase 1 — "quiet launch")

Home page: hero (headline, subhead, CTAs, the animated infrastructure "signal map," the status
line) and the proof strip. A standalone `/schedule` page for the Cal.com booking flow (Phase 0).
That's it — Services, Proof, Approach, About, and Field Notes are Phase 2+ per the build order in
the blueprint (section 10).

## Before this goes live

- **Cal.com link**: `src/app/schedule/page.tsx` has a placeholder `CAL_COM_LINK` constant and a
  placeholder embed `<div>` — swap in the real Cal.com username and the actual embed once that
  account exists.
- **Fonts need network access to build.** `next/font/google` fetches Space Grotesk, Inter, and
  IBM Plex Mono from Google Fonts at build time. That failed in the sandbox this was built in
  (no egress to `fonts.googleapis.com`) — confirmed to be an environment restriction, not a code
  issue, by temporarily stubbing the fonts and getting a clean build otherwise. It will build
  normally on a real machine, in CI, or on Vercel. If it ever doesn't, self-host the three fonts
  with `next/font/local` instead.
- **Favicon / OG image**: not yet added — placeholders only.
- **Email address**: hardcoded as `adonisdmadera@gmail.com` in two places (`Hero`'s secondary CTA
  target lives on `/schedule`, and the schedule page itself) — update if that should be a
  different address before launch.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/
  app/                 routes (page.tsx per route, App Router)
  components/
    ui/                Button, Container, Section, Eyebrow, StatusPulse — no business copy
    sections/           Hero, ProofStrip — page-level sections, pull from content/
    motion/             SignalMap — isolated on purpose (blueprint section 09: removing a
                         signature component shouldn't destabilize the rest of the app)
  content/             hero.ts — copy as data, not hardcoded in JSX (services.ts / projects.ts
                       follow the same pattern once those sections get built)
```

## Deploying / pushing to GitHub

This wasn't pushed anywhere from here — no GitHub connection available in that session. To get
it onto `github.com/adonis3k`:

```bash
cd madera-web
git add -A
git commit -m "Phase 1: hero, proof strip, schedule page"
gh repo create adonis3k/madera-web --private --source=. --push
# or, without gh:
git remote add origin git@github.com:adonis3k/madera-web.git
git push -u origin main
```
