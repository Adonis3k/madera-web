import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Display — headings, the hero, the "//MW" lockup. Weights kept to what's
// actually used (blueprint section 01 type scale) to keep the font payload small.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Body — reading copy.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Data / labels / mono — metrics, eyebrows, uppercase captions.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madera Web Services — Enterprise uptime, without the enterprise headcount",
  description:
    "Cloud infrastructure and compliance-literate DevOps for funds and healthcare practices — 99.999% uptime maintained in current infrastructure work, one accountable engineer instead of a ticket queue.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
