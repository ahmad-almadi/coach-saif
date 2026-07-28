import { Reveal } from "@/components/shared/Reveal";
import { trustStats } from "@/data/statistics";
import { cardClass } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function TrustStats() {
  return (
    <section
      aria-label="Coaching at a glance"
      className="relative border-y border-line bg-surface/60"
    >
      <div className="shell py-12 sm:py-14">
        <Reveal
          childSelector="[data-stat]"
          stagger={0.07}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.id}
              data-stat=""
              className={cn(cardClass, "flex flex-col gap-1.5 p-4 sm:p-6")}
            >
              <span className="text-xl font-extrabold tracking-tight text-accent text-balance-tight sm:text-2xl lg:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-ink sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
