import type { Localized } from "@/lib/i18n";
import type { NavLink, ScrubMedia } from "@/types";

/**
 * Central site configuration: business details, nav and scrub media.
 *
 * Text that a visitor reads is stored as `{ en, ar }` and resolved through
 * `useLanguage().t`. Anything technical (URLs, file paths, ratios) stays flat.
 */
export const siteConfig = {
  name: {
    en: "Coach Saif",
    ar: "كوتش سيف",
  } satisfies Localized<string>,
  tagline: {
    en: "Online Personal Training & Coaching",
    ar: "تدريب شخصي وإشراف رياضي عن بعد",
  } satisfies Localized<string>,
  /** Small line under the wordmark in the header. */
  wordmarkKicker: {
    en: "Online Coaching",
    ar: "تدريب عن بعد",
  } satisfies Localized<string>,
  coachName: {
    en: "Saif",
    ar: "سيف",
  } satisfies Localized<string>,
  location: {
    en: "Amman, Jordan",
    ar: "عمّان، الأردن",
  } satisfies Localized<string>,
  email: "saifolifts@gmail.com",
  /**
   * Transparent logo mark in /public, produced from images/logo.jpg by
   * scripts/logo-transparent.ps1. Set to null to fall back to the monogram.
   */
  logo: "/images/logo.png" as string | null,
  /**
   * Intrinsic pixel size of `logo`. Passed straight to next/image so the
   * declared ratio always matches the file's own ratio: mismatched values make
   * `next/image` warn that width or height was modified without the other.
   */
  logoWidth: 235,
  logoHeight: 139,
  /** Fallback badge shown when `logo` is null. */
  monogram: "CS",
  /** Instagram is the single contact channel: every CTA on the site opens it. */
  instagramHandle: "@saifolifts",
  instagramUrl: "https://www.instagram.com/direct/t/17848855125378481/",
  privacyUrl: "#",
  termsUrl: "#",
} as const;

export const navLinks: NavLink[] = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "#top" },
  { label: { en: "Coaching", ar: "طريقة العمل" }, href: "#coaching" },
  // { label: { en: "Results", ar: "النتائج" }, href: "#results" },
  { label: { en: "Plans", ar: "الباقات" }, href: "#plans" },
  { label: { en: "FAQ", ar: "الأسئلة الشائعة" }, href: "#faq" },
];

/**
 * Scroll-scrub media.
 *
 * Replace the files in /public/videos and /public/posters to change the
 * cinematic sections. `objectPosition` keeps the subject visible when the
 * clip is cropped on narrow screens.
 */
export const scrubMedia = {
  hero: {
    video: "/videos/fitness-hero.mp4",
    poster: "/posters/fitness-hero.webp",
    objectPosition: "50% 35%",
  },
  method: {
    video: "/videos/fitness-method.mp4",
    poster: "/posters/fitness-method.webp",
    objectPosition: "60% 45%",
    // Phones crop the 16:9 clip hard from the sides, and the desktop offset
    // pushed the subject off frame, so the clip is centred there instead.
    objectPositionMobile: "50% 50%",
  },
  results: {
    video: "/videos/fitness-results.mp4",
    poster: "/posters/fitness-results.webp",
    objectPosition: "50% 40%",
  },
} satisfies Record<string, ScrubMedia>;

/**
 * Pinned scroll distance per section, per breakpoint.
 *
 * The full clip is mapped onto this distance, so it doubles as the scrub speed
 * control: a longer distance means less video per pixel of scroll, and the text
 * steps hold on screen for longer. Increase these values to slow a section
 * down, decrease them to speed it up.
 *
 * The other half of the speed control is clip length: the clips are trimmed to
 * a short segment in scripts/optimize-videos.mjs, so less footage is spread
 * across the same distance.
 */
export const scrubScrollLengths = {
  hero: { desktop: "+=450%", mobile: "+=280%" },
  method: { desktop: "+=450%", mobile: "+=320%" },
  results: { desktop: "+=400%", mobile: "+=280%" },
} as const;
