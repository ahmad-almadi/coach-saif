"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TransformationCard } from "@/components/sections/TransformationCard";
import { transformations } from "@/data/transformations";
import { ui } from "@/data/ui";

/**
 * Client progress cards.
 *
 * Reads data/transformations.ts and renders nothing while that list is empty,
 * so the page never shows an empty shell. Mobile scrolls the cards in a
 * scroll-snap rail; from `sm` up they become a plain grid.
 *
 * data/transformations.ts currently holds placeholder entries. Swap in real,
 * approved client results before launch.
 */
export function Transformations() {
  const { t } = useLanguage();

  if (transformations.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="transformations-title"
      className="relative border-y border-line bg-surface/50"
    >
      <div className="shell py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="transformations-title"
          eyebrow={t(ui.transformations.eyebrow)}
          title={t(ui.transformations.title)}
          description={t(ui.transformations.description)}
        />

        <Reveal
          childSelector="[data-transformation]"
          stagger={0.07}
          className="snap-rail mt-8 flex gap-4 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
        >
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              data-transformation=""
              className="snap-item flex w-[78%] shrink-0 sm:w-auto sm:shrink"
            >
              <TransformationCard transformation={transformation} />
            </div>
          ))}
        </Reveal>

        <p className="mt-5 text-xs text-muted">
          {t(ui.transformations.disclaimer)}
        </p>
      </div>
    </section>
  );
}
