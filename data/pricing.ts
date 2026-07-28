import type {
  BillingPeriod,
  PlanPricing,
  PricingPlan,
} from "@/types";

/** Currency label. Prices are shown in Jordanian dinars only. */
export const CURRENCY = "JOD";

/** Number of months in the discounted long-term option. */
export const QUARTER_MONTHS = 3;

/**
 * Fallback three-month discount, used only when a plan does not define its own
 * `quarterlyPrice`. Change this to adjust every computed three-month total.
 */
const QUARTERLY_DISCOUNT = 0.08;

/**
 * Subscription packages. Edit prices, features and copy here.
 * No checkout is involved: every plan CTA opens Instagram.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "A clear training structure for people who want to stop guessing and begin following a personalised programme.",
    monthlyPrice: 39,
    quarterlyPrice: 99,
    features: [
      "Personalised training programme",
      "Nutrition plan",
      "Monthly programme review",
      "Direct message support",
      "Basic progress tracking",
    ],
    ctaLabel: "Choose Starter",
  },
  {
    id: "transformation",
    name: "Transformation",
    description:
      "Ideal for clients who want regular coaching, accountability and technique feedback.",
    monthlyPrice: 69,
    quarterlyPrice: 179,
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "Weekly video check-ins",
      "Weekly programme adjustments",
      "Personalised progress reviews",
      "Increased accountability and coaching",
    ],
    ctaLabel: "Start Your Transformation",
  },
  {
    id: "elite",
    name: "Elite",
    description:
      "For clients who want the highest level of coaching with in-person guidance.",
    monthlyPrice: 99,
    quarterlyPrice: 259,
    features: [
      "Everything in Transformation, plus:",
      "1 private gym coaching session every week",
      "Daily check-ins (Instagram DM)",
      "Priority support",
      "Advanced form and technique coaching",
      "Personalised strategy and goal planning",
    ],
    ctaLabel: "Choose Elite",
  },
];

export const billingPeriods: ReadonlyArray<{
  id: BillingPeriod;
  label: string;
  hint?: string;
}> = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "3 Months", hint: "Save more" },
];

function roundToDinar(amount: number): number {
  return Math.round(amount);
}

/** Total charged for a three-month subscription. */
function getQuarterlyTotal(plan: PricingPlan): number {
  if (typeof plan.quarterlyPrice === "number") {
    return plan.quarterlyPrice;
  }

  return roundToDinar(
    plan.monthlyPrice * QUARTER_MONTHS * (1 - QUARTERLY_DISCOUNT),
  );
}

export function formatPrice(amount: number): string {
  return `${amount} ${CURRENCY}`;
}

/** Everything a pricing card needs for one plan and billing period. */
export function getPlanPricing(
  plan: PricingPlan,
  period: BillingPeriod,
): PlanPricing {
  if (period === "monthly") {
    return {
      total: plan.monthlyPrice,
      perMonth: plan.monthlyPrice,
      savings: 0,
      priceLabel: `${formatPrice(plan.monthlyPrice)}/month`,
      billingNote: "Billed monthly. Cancel or change your package any time.",
    };
  }

  const total = getQuarterlyTotal(plan);
  const monthlyEquivalent = plan.monthlyPrice * QUARTER_MONTHS;

  return {
    total,
    perMonth: Math.round((total / QUARTER_MONTHS) * 10) / 10,
    savings: Math.max(monthlyEquivalent - total, 0),
    priceLabel: `${formatPrice(total)} every ${QUARTER_MONTHS} months`,
    billingNote: `Paid once for ${QUARTER_MONTHS} months of coaching.`,
  };
}


