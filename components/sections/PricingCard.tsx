"use client";

import { Check } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { InstagramButton } from "@/components/shared/InstagramButton";
import {
  CURRENCY,
  QUARTER_MONTHS,
  formatPrice,
  getPlanPricing,
  pricingCopy,
} from "@/data/pricing";
import { ui } from "@/data/ui";
import { fill } from "@/lib/i18n";
import { cardClass } from "@/lib/ui";
import { cn } from "@/lib/cn";
import type { BillingPeriod, PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  period: BillingPeriod;
}

export function PricingCard({ plan, period }: PricingCardProps) {
  const { language, t } = useLanguage();
  const pricing = getPlanPricing(plan, period, language);
  const isFeatured = plan.featured === true;
  const planName = t(plan.name);

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
        <span className="absolute -top-3 start-6 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-bold tracking-[0.12em] text-[#0a0c0e] uppercase">
          {t(plan.badge)}
        </span>
      ) : null}

      <header className="flex flex-col gap-3">
        <h3 className="text-xl font-extrabold tracking-tight">{planName}</h3>

        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-4xl font-extrabold tracking-tight text-ink">
              {pricing.total}
            </span>
            <span className="text-base font-semibold text-muted">
              {t(CURRENCY)}
            </span>
            <span className="text-sm text-muted">
              {period === "monthly"
                ? t(pricingCopy.perMonthSuffix)
                : fill(t(pricingCopy.everyMonthsSuffix), {
                    months: QUARTER_MONTHS,
                  })}
            </span>
          </p>

          {period === "quarterly" ? (
            <p className="text-sm text-muted">
              {fill(t(pricingCopy.perMonthEquivalent), {
                price: formatPrice(pricing.perMonth, language),
              })}
              {pricing.savings > 0 ? (
                <span className="ms-1 font-semibold text-accent">
                  {fill(t(pricingCopy.savings), {
                    amount: formatPrice(pricing.savings, language),
                  })}
                </span>
              ) : null}
            </p>
          ) : (
            <p className="text-sm text-muted">{pricing.billingNote}</p>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {t(plan.description)}
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {t(plan.features).map((feature) => (
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
          label={t(plan.ctaLabel)}
          variant={isFeatured ? "accent" : "outline"}
          size="lg"
          className="w-full"
          srHint={fill(t(ui.pricing.planHint), {
            plan: planName,
            price: pricing.priceLabel,
          })}
        />

        <p className="text-center text-xs text-muted">{pricing.billingNote}</p>
      </div>
    </article>
  );
}
