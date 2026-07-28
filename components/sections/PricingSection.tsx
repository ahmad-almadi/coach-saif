"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingPeriodToggle } from "@/components/shared/PricingPeriodToggle";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { QUARTER_MONTHS, pricingPlans } from "@/data/pricing";
import { ui } from "@/data/ui";
import { fill } from "@/lib/i18n";
import type { BillingPeriod } from "@/types";

export function PricingSection() {
  const { t } = useLanguage();
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section id="plans" aria-labelledby="plans-title" className="relative bg-canvas">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            id="plans-title"
            eyebrow={t(ui.pricing.eyebrow)}
            title={t(ui.pricing.title)}
            description={t(ui.pricing.description)}
            align="center"
          />

          <PricingPeriodToggle value={period} onChange={setPeriod} />
        </div>

        <div className="mt-10 grid items-stretch gap-5 sm:mt-12 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={period} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-card border border-line bg-surface/60 p-6 text-center sm:mt-10 sm:flex-row sm:text-start">
          <ShieldCheck aria-hidden="true" className="size-6 shrink-0 text-accent" />

          <p className="text-sm leading-relaxed text-muted">
            {fill(t(ui.pricing.note), { months: QUARTER_MONTHS })}
          </p>

          <InstagramButton
            label={t(ui.pricing.cta)}
            variant="outline"
            className="w-full shrink-0 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
