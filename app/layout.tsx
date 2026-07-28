import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import { siteConfig } from "@/config/site";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

/**
 * Font Awesome normally injects its own <style> tag at runtime, which flashes
 * oversized icons on first paint. The stylesheet is imported above instead, so
 * the runtime injection is turned off.
 */
config.autoAddCss = false;

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  /**
   * `preload: false` on purpose.
   *
   * The default preload emits `<link rel="preload" as="font">` for the latin
   * subset. The matching `@font-face` ships in the same critical stylesheet, so
   * the browser starts the same request a few milliseconds later anyway, and the
   * unused preload is what triggers Chrome's "preloaded using link preload but
   * not used" warning. `display: swap` plus the size-adjusted local fallback
   * Next generates keeps text visible and the layout stable while it loads.
   */
  preload: false,
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description:
    "Online personal training and coaching. Personalised programmes, practical nutrition guidance and weekly accountability, delivered remotely.",
};

export const viewport: Viewport = {
  themeColor: "#080a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  );
}
