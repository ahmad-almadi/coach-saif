import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative border-y border-line bg-surface/50"
    >
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="faq-title"
              eyebrow="Questions"
              title="Everything You Need to Know"
              description="If your question is not answered here, send a message and you will get a straight answer before committing to anything."
            />

            <InstagramButton
              label="Ask a Question"
              variant="outline"
              className="self-start"
            />
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
