import { Quote, Star } from "lucide-react";

import { cardClass } from "@/lib/ui";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/types";

const MAX_RATING = 5;

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = Math.min(Math.max(Math.round(testimonial.rating), 0), MAX_RATING);

  return (
    <article className={cn(cardClass, "flex w-full flex-col gap-4 p-6")}>
      <Quote aria-hidden="true" className="size-6 text-accent/70" />

      <blockquote className="text-sm leading-relaxed text-ink/90 sm:text-[0.95rem]">
        {testimonial.quote}
      </blockquote>

      <div className="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-white/[0.05] text-sm font-bold text-muted"
        >
          {testimonial.name.charAt(0)}
        </span>

        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted">{testimonial.duration}</span>
        </div>

        <div className="ml-auto flex items-center gap-0.5">
          <span className="sr-only">{`Rated ${rating} out of ${MAX_RATING}`}</span>
          {Array.from({ length: MAX_RATING }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className={cn(
                "size-3.5",
                index < rating
                  ? "fill-accent text-accent"
                  : "text-white/25",
              )}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
