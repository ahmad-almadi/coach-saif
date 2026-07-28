import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Pricing                                                            */
/* ------------------------------------------------------------------ */

export type BillingPeriod = "monthly" | "quarterly";

type PlanId = "starter" | "transformation" | "elite";

export interface PricingPlan {
  id: PlanId;
  name: string;
  description: string;
  /** Monthly price in Jordanian dinars. */
  monthlyPrice: number;
  /**
   * Total price for a three-month subscription in Jordanian dinars.
   * Leave undefined to fall back to the configured three-month discount.
   */
  quarterlyPrice?: number;
  features: string[];
  ctaLabel: string;
  badge?: string;
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
  value: string;
  label: string;
}

export interface CoachingFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
}

export interface MethodStage {
  id: string;
  step: string;
  label: string;
  heading: string;
  description: string;
}

type TransformationCategory = "strength" | "weight loss" | "lifestyle";

export interface Transformation {
  id: string;
  name: string;
  duration: string;
  result: string;
  testimonial: string;
  category: TransformationCategory;
  /** Set to a real, approved image path to replace the placeholder panel. */
  beforeImage: string | null;
  afterImage: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  duration: string;
  quote: string;
  /** 1â€“5. Only use ratings that clients actually gave. */
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CoachProfile {
  name: string;
  role: string;
  yearsOfExperience: string;
  qualifications: string[];
  intro: string;
  philosophy: string[];
  image: string | null;
  imageAlt: string;
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
