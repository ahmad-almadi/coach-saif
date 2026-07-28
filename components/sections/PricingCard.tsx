import { Check } from "lucide-react";

import { InstagramButton } from "@/components/shared/InstagramButton";
import {
  CURRENCY,
  QUARTER_MONTHS,
  formatPrice,
  getPlanPricing,
} from "@/data/pricing";
import { cardClass } from "@/lib/ui";
import { cn } from "@/lib/cn";
import type { BillingPeriod, PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  period: BillingPeriod;
}

export function PricingCard({ plan, period }: PricingCardProps) {
  const pricing = getPlanPricing(plan, period);
  const isFeatured = plan.featured === true;

  return (
    <article
      className={cn(
        cardClass,
        "relative flex w-full flex-col gap-6 p-6 sm:p-7",
        isFeatured
          ? "border-accent/45 bg-card shadow-[0_28px_60px_-40px_rgba(252,206,7,0.45)] lg:-mt-4 lg:pb-9"
          : "",
      )}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-bold tracking-[0.12em] text-[#0a0c0e] uppercase">
          {plan.badge}
        </span>
      ) : null}

      <header className="flex flex-col gap-3">
        <h3 className="text-xl font-extrabold tracking-tight">{plan.name}</h3>

        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-4xl font-extrabold tracking-tight text-ink">
              {pricing.total}
            </span>
            <span className="text-base font-semibold text-muted">
              {CURRENCY}
            </span>
            <span className="text-sm text-muted">
              {period === "monthly"
                ? "/month"
                : `every ${QUARTER_MONTHS} months`}
            </span>
          </p>

          {period === "quarterly" ? (
            <p className="text-sm text-muted">
              {`Works out at ${formatPrice(pricing.perMonth)} per month`}
              {pricing.savings > 0 ? (
                <span className="ml-1 font-semibold text-accent">
                  {`· Save ${formatPrice(pricing.savings)}`}
                </span>
              ) : null}
            </p>
          ) : (
            <p className="text-sm text-muted">{pricing.billingNote}</p>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted">{plan.description}</p>
      </header>

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-accent"
            />
            <span className="text-ink/85">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3">
        <InstagramButton
          label={plan.ctaLabel}
          variant={isFeatured ? "accent" : "outline"}
          size="lg"
          className="w-full"
          srHint={`${plan.name} package, ${pricing.priceLabel}`}
        />

        <p className="text-center text-xs text-muted">{pricing.billingNote}</p>
      </div>
    </article>
  );
}
