import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { audienceItems } from "@/data/audience";
import { cardClass, cardHoverClass } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-title" className="relative bg-canvas">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="audience-title"
          eyebrow="Who it is for"
          title="Coaching Designed for Real Life"
          description="This programme is built for people who want a clear plan, professional support and a realistic way to make progress."
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
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {item.problem}
                </p>

                <p className="mt-auto border-t border-line pt-3 text-sm leading-relaxed text-ink/85">
                  {item.solution}
                </p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
