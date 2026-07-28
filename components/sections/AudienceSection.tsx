"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { audienceItems } from "@/data/audience";
import { ui } from "@/data/ui";
import { cardClass, cardHoverClass } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function AudienceSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="audience-title" className="relative bg-canvas">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="audience-title"
          eyebrow={t(ui.audience.eyebrow)}
          title={t(ui.audience.title)}
          description={t(ui.audience.description)}
        />

        <Reveal
          childSelector="[data-audience-card]"
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audienceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                data-audience-card=""
                className={cn(
                  cardClass,
                  cardHoverClass,
                  "flex flex-col gap-3 p-6",
                )}
              >
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <h3 className="text-lg font-bold tracking-tight">
                  {t(item.title)}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {t(item.problem)}
                </p>

                <p className="mt-auto border-t border-line pt-3 text-sm leading-relaxed text-ink/85">
                  {t(item.solution)}
                </p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
