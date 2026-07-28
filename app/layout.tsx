import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Cairo, Manrope } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ScrollTriggerRefresh } from "@/components/shared/ScrollTriggerRefresh";
import { siteConfig } from "@/config/site";
import {
  LANGUAGE_COOKIE,
  languageDirection,
  toLanguage,
  type Language,
} from "@/lib/i18n";

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

/**
 * Arabic face. Manrope has no Arabic coverage, so without this the Arabic
 * version falls back to a system font and loses the display weights the
 * headings rely on. Applied through `dir="rtl"` in globals.css.
 */
const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
  preload: false,
});

/** The language for this request, from the cookie the toggle writes. */
async function getLanguage(): Promise<Language> {
  const store = await cookies();

  return toLanguage(store.get(LANGUAGE_COOKIE)?.value);
}

export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguage();

  const description = {
    en: "Online personal training and coaching. Personalised programs, practical nutrition guidance and weekly accountability, delivered remotely.",
    ar: "تدريب شخصي وإشراف رياضي عن بُعد. برامج مخصّصة، إرشاد غذائي عملي ومتابعة أسبوعية، تُقدّم عن بُعد.",
  } as const;

  return {
    title: `${siteConfig.name[language]} | ${siteConfig.tagline[language]}`,
    description: description[language],
  };
}

export const viewport: Viewport = {
  themeColor: "#080a0c",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const language = await getLanguage();

  return (
    <html
      lang={language}
      dir={languageDirection[language]}
      className={`${manrope.variable} ${cairo.variable}`}
    >
      <body className="min-h-svh antialiased">
        <LanguageProvider initialLanguage={language}>
          <ScrollTriggerRefresh />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
