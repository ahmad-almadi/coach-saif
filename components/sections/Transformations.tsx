import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TransformationCard } from "@/components/sections/TransformationCard";
import { transformations } from "@/data/transformations";

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
          eyebrow="Client progress"
          title="Real Clients, Real Consistency"
          description="Every result below came from following a plan that fit the person: their schedule, their starting point and the equipment they actually have."
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
          Results vary from person to person. Photos are shared with client
          permission.
        </p>
      </div>
    </section>
  );
}
