"use client";

import { useCallback, useRef } from "react";

import { ScrollScrubVideo } from "@/components/shared/ScrollScrubVideo";
import { ScrubStep, ScrubSteps } from "@/components/shared/ScrubSteps";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { scrubMedia, scrubScrollLengths } from "@/config/site";
import { methodStages } from "@/data/method";
import { eyebrowClass } from "@/lib/ui";

const stageCount = methodStages.length;

export function CoachingMethodScrubSection() {
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const activeIndexRef = useRef(-1);

  /**
   * Scroll progress is written straight to the DOM through refs. Keeping this
   * out of React state avoids a re-render on every scroll frame.
   */
  const handleProgress = useCallback((progress: number) => {
    const fill = fillRef.current;

    if (fill) {
      fill.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    }

    const nextIndex = Math.min(
      Math.floor(progress * stageCount),
      stageCount - 1,
    );

    if (nextIndex === activeIndexRef.current) {
      return;
    }

    activeIndexRef.current = nextIndex;

    itemsRef.current.forEach((item, index) => {
      if (item) {
        item.dataset.active = index === nextIndex ? "true" : "false";
      }
    });
  }, []);

  return (
    <section id="coaching" aria-labelledby="coaching-title" className="relative">
      <ScrollScrubVideo
        src={scrubMedia.method.video}
        poster={scrubMedia.method.poster}
        objectPosition={scrubMedia.method.objectPosition}
        mobileObjectPosition={scrubMedia.method.objectPositionMobile}
        desktopScrollLength={scrubScrollLengths.method.desktop}
        mobileScrollLength={scrubScrollLengths.method.mobile}
        onProgress={handleProgress}
        scrim={
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/60 to-canvas" />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas/85 via-canvas/25 to-transparent" />
          </div>
        }
      >
        <ScrubSteps className="method-steps">
          {methodStages.map((stage, index) => (
            <ScrubStep key={stage.id} align="center">
              <div className="flex w-full max-w-2xl flex-col items-start gap-4">
                <span className={eyebrowClass}>
                  {`Step ${stage.step} · ${stage.label}`}
                </span>

                {index === 0 ? (
                  <h2
                    id="coaching-title"
                    className="text-headline font-extrabold text-balance-tight"
                  >
                    {stage.heading}
                  </h2>
                ) : (
                  <h3 className="text-headline font-extrabold text-balance-tight">
                    {stage.heading}
                  </h3>
                )}

                <p className="text-lede text-ink/80">{stage.description}</p>

                {index === stageCount - 1 ? (
                  <InstagramButton
                    label="Ask About the Process"
                    size="lg"
                    className="mt-1 w-full sm:w-auto"
                  />
                ) : null}
              </div>
            </ScrubStep>
          ))}
        </ScrubSteps>

        {/* Persistent stage rail. Every stage stays readable, the active one is
            highlighted with colour, weight and a progress line. */}
        <div className="method-rail">
          <span
            aria-hidden="true"
            className="relative mb-4 block h-px w-full overflow-hidden bg-white/15"
          >
            <span
              ref={fillRef}
              className="absolute inset-0 block origin-left scale-x-0 bg-accent"
            />
          </span>

          <ol className="grid grid-cols-4 gap-2 sm:gap-4">
            {methodStages.map((stage, index) => (
              <li
                key={stage.id}
                data-active={index === 0 ? "true" : "false"}
                ref={(node) => {
                  itemsRef.current[index] = node;
                }}
                className="method-stage flex flex-col gap-0.5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-accent">
                  {stage.step}
                </span>
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {stage.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </ScrollScrubVideo>
    </section>
  );
}
