"use client";

import { billingPeriods } from "@/data/pricing";
import { cn } from "@/lib/cn";
import type { BillingPeriod } from "@/types";

interface PricingPeriodToggleProps {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

/**
 * Billing period switch. Implemented as a radio group so keyboard and screen
 * reader users get the correct selected state.
 */
export function PricingPeriodToggle({
  value,
  onChange,
}: PricingPeriodToggleProps) {
  return (
    // Full width on phones so the two options split the row evenly instead of
    // overflowing once the savings hint is added.
    <div
      role="radiogroup"
      aria-label="Billing period"
      className="flex w-full max-w-xs items-center gap-1 rounded-full border border-line bg-white/[0.04] p-1 sm:inline-flex sm:w-auto sm:max-w-none"
    >
      {billingPeriods.map((period) => {
        const isActive = period.id === value;

        return (
          <button
            key={period.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(period.id)}
            className={cn(
              "inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full px-3 text-[0.8rem] font-semibold transition-colors duration-200 sm:flex-none sm:gap-2 sm:px-4 sm:text-sm",
              isActive
                ? "bg-accent text-[#0a0c0e]"
                : "text-muted hover:text-ink",
            )}
          >
            {period.label}
            {period.hint ? (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide whitespace-nowrap uppercase sm:px-2 sm:text-[0.65rem]",
                  isActive
                    ? "bg-[#0a0c0e]/12 text-[#0a0c0e]"
                    : "bg-accent/12 text-accent",
                )}
              >
                {period.hint}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
