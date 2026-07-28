"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { coachingFeatures } from "@/data/features";
import { ui } from "@/data/ui";
import { cardClass, cardHoverClass } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function CoachingFeatures() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="features-title"
      className="relative border-y border-line bg-surface/50"
    >
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="features-title"
            eyebrow={t(ui.features.eyebrow)}
            title={t(ui.features.title)}
            description={t(ui.features.description)}
          />

          <InstagramButton
            label={t(ui.features.cta)}
            variant="outline"
            size="md"
            className="self-start lg:self-auto"
          />
        </div>

        <Reveal
          childSelector="[data-feature-card]"
          stagger={0.06}
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {coachingFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                data-feature-card=""
                className={cn(
                  cardClass,
                  cardHoverClass,
                  "flex flex-col gap-3 p-6",
                )}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent/12 text-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <h3 className="text-base font-bold tracking-tight">
                  {t(feature.title)}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {t(feature.description)}
                </p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
