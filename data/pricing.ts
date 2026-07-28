import { fill, type Language, type Localized } from "@/lib/i18n";
import type { BillingPeriod, PlanPricing, PricingPlan } from "@/types";

/** Currency label. Prices are shown in Jordanian dinars only. */
export const CURRENCY: Localized<string> = { en: "JOD", ar: "د.أ" };

/** Number of months in the discounted long-term option. */
export const QUARTER_MONTHS = 3;

/**
 * Fallback three-month discount, used only when a plan does not define its own
 * `quarterlyPrice`. Change this to adjust every computed three-month total.
 */
const QUARTERLY_DISCOUNT = 0.08;

/**
 * Price and billing wording.
 *
 * Kept next to the calculation rather than in data/ui.ts because the sentences
 * are produced by `getPlanPricing`. Arabic puts the period after the amount
 * without a slash, so the whole phrase is translated instead of assembled.
 */
export const pricingCopy = {
  perMonthSuffix: { en: "/month", ar: "شهرياً" } satisfies Localized<string>,
  everyMonthsSuffix: {
    en: "every {months} months",
    ar: "كل {months} أشهر",
  } satisfies Localized<string>,
  monthlyPriceLabel: {
    en: "{price}/month",
    ar: "{price} شهرياً",
  } satisfies Localized<string>,
  quarterlyPriceLabel: {
    en: "{price} every {months} months",
    ar: "{price} كل {months} أشهر",
  } satisfies Localized<string>,
  monthlyBillingNote: {
    en: "Billed monthly. Cancel or change your package any time.",
    ar: "يُدفع شهرياً. يمكنك الإلغاء أو تغيير الباقة في أي وقت.",
  } satisfies Localized<string>,
  quarterlyBillingNote: {
    en: "Paid once for {months} months of coaching.",
    ar: "يُدفع مرة واحدة مقابل {months} أشهر من التدريب.",
  } satisfies Localized<string>,
  perMonthEquivalent: {
    en: "Works out at {price} per month",
    ar: "أي ما يعادل {price} شهرياً",
  } satisfies Localized<string>,
  savings: {
    en: "· Save {amount}",
    ar: "· توفير {amount}",
  } satisfies Localized<string>,
} as const;

/**
 * Subscription packages. Edit prices, features and copy here.
 * No checkout is involved: every plan CTA opens Instagram.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: { en: "Starter", ar: "البداية" },
    description: {
      en: "A clear training structure for people who want to stop guessing and begin following a personalised program.",
      ar: "هيكل تدريبي واضح لمن يريد التوقف عن التخمين والبدء ببرنامج مخصّص.",
    },
    monthlyPrice: 39,
    quarterlyPrice: 99,
    features: {
      en: [
        "Personalised training program",
        "Nutrition plan",
        "Monthly program review",
        "Direct message support",
        "Basic progress tracking",
      ],
      ar: [
        "برنامج تدريبي مخصّص",
        "خطة غذائية",
        "مراجعة شهرية للبرنامج",
        "دعم عبر الرسائل المباشرة",
        "تتبّع أساسي للتقدّم",
      ],
    },
    ctaLabel: { en: "Choose Starter", ar: "اختر باقة البداية" },
  },
  {
    id: "transformation",
    name: { en: "Transformation", ar: "التحوّل" },
    description: {
      en: "Ideal for clients who want regular coaching, accountability and technique feedback.",
      ar: "مثالية لمن يريد إشرافاً منتظماً، متابعة مستمرة، وملاحظات على الأداء.",
    },
    monthlyPrice: 69,
    quarterlyPrice: 179,
    badge: { en: "Most Popular", ar: "الأكثر اختياراً" },
    featured: true,
    features: {
      en: [
        "Everything in Starter, plus:",
        "Weekly video check-ins",
        "Weekly program adjustments",
        "Personalised progress reviews",
        "Increased accountability and coaching",
      ],
      ar: [
        "كل ما في باقة البداية، إضافةً إلى:",
        "متابعة أسبوعية بالفيديو",
        "تعديلات أسبوعية على البرنامج",
        "مراجعات مخصّصة للتقدّم",
        "متابعة وإشراف أكثر كثافة",
      ],
    },
    ctaLabel: { en: "Start Your Transformation", ar: "ابدأ تحوّلك" },
  },
  {
    id: "elite",
    name: { en: "Elite", ar: "النخبة" },
    description: {
      en: "For clients who want the highest level of coaching with in-person guidance.",
      ar: "لمن يريد أعلى مستوى من الإشراف مع توجيه وجهاً لوجه.",
    },
    monthlyPrice: 99,
    quarterlyPrice: 259,
    features: {
      en: [
        "Everything in Transformation, plus:",
        "1 private gym coaching session every week",
        "Daily check-ins (Instagram DM)",
        "Priority support",
        "Advanced form and technique coaching",
        "Personalised strategy and goal planning",
      ],
      ar: [
        "كل ما في باقة التحوّل، إضافةً إلى:",
        "حصة تدريب خاصة في النادي كل أسبوع",
        "متابعة يومية (رسائل إنستغرام)",
        "دعم بأولوية",
        "تدريب متقدّم على الأداء وتصحيح الحركة",
        "تخطيط مخصّص للاستراتيجية والأهداف",
      ],
    },
    ctaLabel: { en: "Choose Elite", ar: "اختر باقة النخبة" },
  },
];

export const billingPeriods: ReadonlyArray<{
  id: BillingPeriod;
  label: Localized<string>;
  hint?: Localized<string>;
}> = [
  { id: "monthly", label: { en: "Monthly", ar: "شهري" } },
  {
    id: "quarterly",
    label: { en: "3 Months", ar: "3 أشهر" },
    hint: { en: "Save more", ar: "وفّر أكثر" },
  },
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

export function formatPrice(amount: number, language: Language): string {
  return `${amount} ${CURRENCY[language]}`;
}

/** Everything a pricing card needs for one plan and billing period. */
export function getPlanPricing(
  plan: PricingPlan,
  period: BillingPeriod,
  language: Language,
): PlanPricing {
  if (period === "monthly") {
    return {
      total: plan.monthlyPrice,
      perMonth: plan.monthlyPrice,
      savings: 0,
      priceLabel: fill(pricingCopy.monthlyPriceLabel[language], {
        price: formatPrice(plan.monthlyPrice, language),
      }),
      billingNote: pricingCopy.monthlyBillingNote[language],
    };
  }

  const total = getQuarterlyTotal(plan);
  const monthlyEquivalent = plan.monthlyPrice * QUARTER_MONTHS;

  return {
    total,
    perMonth: Math.round((total / QUARTER_MONTHS) * 10) / 10,
    savings: Math.max(monthlyEquivalent - total, 0),
    priceLabel: fill(pricingCopy.quarterlyPriceLabel[language], {
      price: formatPrice(total, language),
      months: QUARTER_MONTHS,
    }),
    billingNote: fill(pricingCopy.quarterlyBillingNote[language], {
      months: QUARTER_MONTHS,
    }),
  };
}
