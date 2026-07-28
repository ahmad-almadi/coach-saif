"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { ui } from "@/data/ui";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative border-y border-line bg-surface/50"
    >
      <div className="shell py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="testimonials-title"
          eyebrow={t(ui.testimonials.eyebrow)}
          title={t(ui.testimonials.title)}
          description={t(ui.testimonials.description)}
        />

        <Reveal
          childSelector="[data-testimonial]"
          stagger={0.07}
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} data-testimonial="" className="flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
