// Official "//MW" mark — paths traced from the brand asset
// (public/brand/mw-logo-currentcolor.svg), not hand-approximated. fill
//="currentColor" so it inherits whatever text color the caller sets
// (header, footer, and the large hero lockup all use the site's teal
// accent). height:1em + the source's own 368x121 viewBox means it drops
// into running text at any size and scales like a glyph would.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 368 121"
      role="img"
      aria-label="//MW"
      fill="currentColor"
      className={className}
      style={{ height: "1em", width: "auto", display: "inline-block", verticalAlign: "text-bottom" }}
    >
      <title>Madera Web</title>
      <g id="mw-logo">
        <g id="slashes">
          <path id="slash-1" d="M61,8 L47,9 L12,113 L25,113 Z" />
          <path id="slash-2" d="M95,8 L82,8 L47,113 L60,113 Z" />
        </g>
        <g id="wordmark">
          <path
            id="letter-M"
            d="M107,9 L108,114 L129,113 L128,39 L155,113 L170,114 L198,37 L197,114 L218,114 L218,9 L190,9 L163,84 L136,10 Z"
          />
          <path
            id="letter-W"
            d="M231,9 L254,113 L276,113 L293,45 L310,113 L332,114 L355,9 L334,9 L320,82 L302,9 L284,9 L267,81 L252,9 Z"
          />
        </g>
      </g>
    </svg>
  );
}
