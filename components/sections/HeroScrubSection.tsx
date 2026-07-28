import { ArrowDown, ChevronDown } from "lucide-react";

import { ScrollScrubVideo } from "@/components/shared/ScrollScrubVideo";
import { ScrubStep, ScrubSteps } from "@/components/shared/ScrubSteps";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { scrubMedia, scrubScrollLengths } from "@/config/site";
import { heroBenefits } from "@/data/hero";
import { buttonClass, eyebrowClass } from "@/lib/ui";

export function HeroScrubSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <ScrollScrubVideo
        src={scrubMedia.hero.video}
        poster={scrubMedia.hero.poster}
        objectPosition={scrubMedia.hero.objectPosition}
        desktopScrollLength={scrubScrollLengths.hero.desktop}
        mobileScrollLength={scrubScrollLengths.hero.mobile}
        priority
        scrim={
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-canvas/90 via-canvas/55 to-canvas" />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-transparent" />
          </div>
        }
      >
        <ScrubSteps>
          {/* Opening frame */}
          <ScrubStep align="center">
            <div className="flex w-full max-w-3xl flex-col items-start gap-4 sm:gap-6">
              <span className={eyebrowClass}>1:1 Online Fitness Coaching</span>

              <h1
                id="hero-title"
                className="text-display font-extrabold text-balance-tight"
              >
                Build a Stronger Body.
                <span className="block text-accent">
                  Create Lasting Progress.
                </span>
              </h1>

              <p className="text-lede max-w-xl text-ink/80">
                Personalised training, practical nutrition guidance and
                consistent accountability built around your goals and lifestyle.
              </p>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <InstagramButton
                  label="Start Coaching"
                  size="lg"
                  variant="accent"
                  className="w-full sm:w-auto"
                />

                {/* Points at the pricing section: visitors who are not ready to
                    message yet usually want the plans, not a scroll tour. */}
                <a
                  href="#plans"
                  className={buttonClass("outline", "lg", "w-full sm:w-auto")}
                >
                  Explore Plans
                  <ArrowDown aria-hidden="true" className="size-4" />
                </a>
              </div>

              {/* Dropped on the narrowest phones, where the pinned frame needs
                  every pixel for the heading, copy and CTAs. */}
              <p className="scroll-cue mt-1 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase max-[380px]:hidden">
                <ChevronDown aria-hidden="true" className="size-4" />
                Scroll to explore
              </p>
            </div>
          </ScrubStep>

          {/* Benefits revealed through the clip */}
          {heroBenefits.map((benefit, index) => (
            <ScrubStep key={benefit.id} align="center">
              <div className="flex w-full max-w-2xl flex-col items-start gap-4">
                <span className="text-sm font-bold tracking-[0.2em] text-accent">
                  {`0${index + 1}`}
                </span>
                <h2 className="text-headline font-extrabold text-balance-tight">
                  {benefit.title}
                </h2>
                <p className="text-lede text-ink/80">{benefit.description}</p>
              </div>
            </ScrubStep>
          ))}

          {/* Closing frame */}
          <ScrubStep align="center">
            <div className="flex w-full max-w-2xl flex-col items-start gap-5">
              <h2 className="text-headline font-extrabold text-balance-tight">
                Your Plan. Your Progress. Your Coach.
              </h2>
              <p className="text-lede text-ink/80">
                Stop guessing and start following a clear coaching system
                designed to help you train with purpose.
              </p>
              <InstagramButton
                label="Chat with Your Coach"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </ScrubStep>
        </ScrubSteps>
      </ScrollScrubVideo>
    </section>
  );
}
