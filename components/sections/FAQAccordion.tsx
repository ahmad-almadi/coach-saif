"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/types";

interface FAQAccordionProps {
  items: FaqItem[];
}

/**
 * Native button based accordion: keyboard accessible by default, works without
 * GSAP, and only the open panel is exposed to assistive technology.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-card/70">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={`faq-button-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-start transition-colors duration-200 hover:bg-white/[0.03] sm:px-6"
              >
                <span className="text-base font-semibold tracking-tight text-ink">
                  {t(item.question)}
                </span>

                <Plus
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-accent transition-transform duration-300",
                    isOpen ? "rotate-45" : "rotate-0",
                  )}
                />
              </button>
            </h3>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-button-${item.id}`}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                {t(item.answer)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
