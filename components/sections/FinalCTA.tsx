"use client";

import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/shared/Reveal";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { ui } from "@/data/ui";
import { buttonClass, eyebrowClass } from "@/lib/ui";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="final-cta-title" className="relative bg-canvas">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="relative overflow-hidden rounded-card border border-line bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="glow-accent absolute inset-0" />
          <div
            aria-hidden="true"
            className="grid-lines absolute inset-0 opacity-40"
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className={eyebrowClass}>{t(ui.finalCta.eyebrow)}</span>

            <h2
              id="final-cta-title"
              className="text-display max-w-3xl font-extrabold text-balance-tight"
            >
              {t(ui.finalCta.title)}
            </h2>

            <p className="text-lede max-w-2xl text-muted">
              {t(ui.finalCta.lede)}
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <InstagramButton
                label={t(ui.finalCta.primaryCta)}
                size="lg"
                className="w-full sm:w-auto"
              />

              <a
                href="#plans"
                className={buttonClass("outline", "lg", "w-full sm:w-auto")}
              >
                {t(ui.finalCta.secondaryCta)}
                {/* Diagonal arrow: mirrored so it still points outward. */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 rtl:-scale-x-100"
                />
              </a>
            </div>

            <p className="text-sm text-muted">{t(ui.finalCta.footnote)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
