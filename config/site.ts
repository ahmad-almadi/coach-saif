import type { NavLink, ScrubMedia } from "@/types";

/** Central site configuration: business details, nav and scrub media. */
export const siteConfig = {
  name: "Coach Saif",
  tagline: "Online Personal Training & Coaching",
  coachName: "Saif",
  location: "Amman, Jordan",
  email: "saifolifts@gmail.com",
  /**
   * Transparent logo mark in /public, produced from images/logo.jpg by
   * scripts/logo-transparent.ps1. Set to null to fall back to the monogram.
   */
  logo: "/images/logo.png" as string | null,
  /** Intrinsic width / height of `logo`, so the mark is requested sharp. */
  logoAspectRatio: 235 / 139,
  /** Fallback badge shown when `logo` is null. */
  monogram: "CS",
  /** Instagram is the single contact channel: every CTA on the site opens it. */
  instagramHandle: "@saifolifts",
  instagramUrl: "https://www.instagram.com/saifolifts/",
  privacyUrl: "#",
  termsUrl: "#",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Coaching", href: "#coaching" },
  { label: "Results", href: "#results" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
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
