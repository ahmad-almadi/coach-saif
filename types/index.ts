import type { LucideIcon } from "lucide-react";

import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Pricing                                                            */
/* ------------------------------------------------------------------ */

export type BillingPeriod = "monthly" | "quarterly";

type PlanId = "starter" | "transformation" | "elite";

export interface PricingPlan {
  id: PlanId;
  name: Localized<string>;
  description: Localized<string>;
  /** Monthly price in Jordanian dinars. */
  monthlyPrice: number;
  /**
   * Total price for a three-month subscription in Jordanian dinars.
   * Leave undefined to fall back to the configured three-month discount.
   */
  quarterlyPrice?: number;
  features: Localized<string[]>;
  ctaLabel: Localized<string>;
  badge?: Localized<string>;
  featured?: boolean;
}

export interface PlanPricing {
  /** Amount actually charged for the selected billing period. */
  total: number;
  /** Effective monthly cost for the selected billing period. */
  perMonth: number;
  /** Money saved compared with paying month by month. */
  savings: number;
  /** e.g. "49 JOD/month" or "135 JOD every 3 months". */
  priceLabel: string;
  /** Human readable billing note. */
  billingNote: string;
}

/* ------------------------------------------------------------------ */
/* Content collections                                                */
/* ------------------------------------------------------------------ */

export interface TrustStat {
  id: string;
  /** Localised because not every figure is numeric, e.g. "Within 24 hours". */
  value: Localized<string>;
  label: Localized<string>;
}

export interface CoachingFeature {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  icon: LucideIcon;
}

export interface AudienceItem {
  id: string;
  title: Localized<string>;
  problem: Localized<string>;
  solution: Localized<string>;
  icon: LucideIcon;
}

export interface MethodStage {
  id: string;
  /** Kept flat: the step number reads the same in both languages. */
  step: string;
  label: Localized<string>;
  heading: Localized<string>;
  description: Localized<string>;
}

type TransformationCategory = "strength" | "weight loss" | "lifestyle";

export interface Transformation {
  id: string;
  name: Localized<string>;
  duration: Localized<string>;
  result: Localized<string>;
  testimonial: Localized<string>;
  category: TransformationCategory;
  /** Set to a real, approved image path to replace the placeholder panel. */
  beforeImage: string | null;
  afterImage: string | null;
}

export interface Testimonial {
  id: string;
  name: Localized<string>;
  duration: Localized<string>;
  quote: Localized<string>;
  /** 1-5. Only use ratings that clients actually gave. */
  rating: number;
}

export interface FaqItem {
  id: string;
  question: Localized<string>;
  answer: Localized<string>;
}

export interface NavLink {
  label: Localized<string>;
  href: string;
}

export interface CoachProfile {
  name: Localized<string>;
  role: Localized<string>;
  yearsOfExperience: Localized<string>;
  qualifications: Localized<string[]>;
  intro: Localized<string>;
  philosophy: Localized<string[]>;
  image: string | null;
  imageAlt: Localized<string>;
}

/* ------------------------------------------------------------------ */
/* Media                                                              */
/* ------------------------------------------------------------------ */

export interface ScrubMedia {
  video: string;
  poster: string;
  /** object-position for the video, tuned per clip and breakpoint. */
  objectPosition: string;
  /**
   * Optional object-position used on phones (max-width: 767px), where the
   * portrait crop is much tighter than the desktop one. Falls back to
   * `objectPosition` when omitted.
   */
  objectPositionMobile?: string;
}
