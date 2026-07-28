import Image from "next/image";
import { BadgeCheck, User } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { coachHighlights, coachProfile } from "@/data/coach";
import { cardClass, eyebrowClass } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function CoachSection() {
  return (
    <section aria-labelledby="coach-title" className="relative bg-canvas">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          {/* Coach image placeholder: set coachProfile.image to a real photo. */}
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-card border border-line bg-surface">
              {coachProfile.image ? (
                <Image
                  src={coachProfile.image}
                  alt={coachProfile.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="grid-lines absolute inset-0 grid place-items-center bg-gradient-to-br from-surface to-card">
                  <span className="flex flex-col items-center gap-3 px-6 text-center">
                    <User aria-hidden="true" className="size-8 text-muted" />
                    <span className="text-sm text-muted">
                      Add a coach photo at /public/images/coach.webp
                    </span>
                  </span>
                </div>
              )}
            </div>

            <div
              className={cn(
                cardClass,
                "mt-4 grid grid-cols-2 gap-4 p-5 sm:mt-5",
              )}
            >
              {coachHighlights.map((highlight) => (
                <div key={highlight.label} className="flex flex-col gap-1">
                  <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
                    {highlight.label}
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {highlight.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className={eyebrowClass}>About your coach</span>

            <h2
              id="coach-title"
              className="text-headline font-extrabold text-balance-tight"
            >
              Coaching Built Around You
            </h2>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-lg font-bold tracking-tight">
                {coachProfile.name}
              </span>
              <span className="text-sm text-muted">{coachProfile.role}</span>
            </div>

            <p className="text-lede text-muted">{coachProfile.intro}</p>

            {coachProfile.philosophy.map((paragraph) => (
              <p key={paragraph} className="text-lede text-ink/85">
                {paragraph}
              </p>
            ))}

            <div
              className={cn(cardClass, "flex flex-col gap-3 p-5")}
              aria-label="Qualifications"
            >
              <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
                Qualifications and experience
              </span>

              <p className="text-sm text-muted">
                {coachProfile.yearsOfExperience}
              </p>

              <ul className="flex flex-col gap-2">
                {coachProfile.qualifications.map((qualification, index) => (
                  <li
                    key={`${index}-${qualification}`}
                    className="flex items-start gap-2.5 text-sm text-ink/85"
                  >
                    <BadgeCheck
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-accent"
                    />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <InstagramButton
                label="Message the Coach"
                size="lg"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
