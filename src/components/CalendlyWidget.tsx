"use client";

import { useEffect, useRef, useState } from "react";

// Renders and initializes the Calendly inline widget itself, rather than
// relying on Calendly's own widget.js to auto-scan the page for
// .calendly-inline-widget divs on script load. That auto-scan only ever
// runs once per browser session — fine on a hard page load, but the
// header/Final CTA buttons route here via client-side navigation, so on a
// second visit the script is already loaded and never re-scans, leaving
// this div empty. Calling window.Calendly.initInlineWidget explicitly in
// an effect means it (re)initializes on every mount, full reload or not.
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_ORIGIN = "https://calendly.com";

export function CalendlyWidget({
  url,
  className,
  minHeight = 700,
}: {
  url: string;
  className?: string;
  minHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Calendly's real content height shifts with the timezone selector, how
  // many days are visible, etc. A fixed height clipped that content (the
  // timezone row was getting cut off) — Calendly reports its actual height
  // via postMessage, so we track it instead of guessing a static number.
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => {
      container.innerHTML = "";
      window.Calendly?.initInlineWidget({ url, parentElement: container });
    };

    let script: HTMLScriptElement | null = null;
    if (window.Calendly) {
      init();
    } else {
      script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", init);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== CALENDLY_ORIGIN) return;
      if (event.data?.event !== "calendly.page_height") return;
      const reportedHeight = Number(event.data.payload?.height);
      if (!Number.isFinite(reportedHeight)) return;
      setHeight(Math.max(minHeight, Math.ceil(reportedHeight)));
    };
    window.addEventListener("message", handleMessage);

    return () => {
      script?.removeEventListener("load", init);
      window.removeEventListener("message", handleMessage);
    };
  }, [url, minHeight]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: "320px", height }}
    />
  );
}
