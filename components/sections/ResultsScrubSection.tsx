"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScrollScrubVideo } from "@/components/shared/ScrollScrubVideo";
import { ScrubStep, ScrubSteps } from "@/components/shared/ScrubSteps";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { scrubMedia, scrubScrollLengths } from "@/config/site";
import { resultsMessages } from "@/data/results";
import { ui } from "@/data/ui";
import { fill } from "@/lib/i18n";
import { eyebrowClass } from "@/lib/ui";

export function ResultsScrubSection() {
  const { t } = useLanguage();

  return (
    <section id="results" aria-labelledby="results-title" className="relative">
      <ScrollScrubVideo
        src={scrubMedia.results.video}
        poster={scrubMedia.results.poster}
        objectPosition={scrubMedia.results.objectPosition}
        desktopScrollLength={scrubScrollLengths.results.desktop}
        mobileScrollLength={scrubScrollLengths.results.mobile}
        scrim={
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/55 to-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,rgba(8,10,12,0.7)_100%)]" />
          </div>
        }
      >
        <ScrubSteps>
          {resultsMessages.map((message, index) => (
            <ScrubStep key={message.id} align="center" className="justify-center">
              <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
                <span className={eyebrowClass}>
                  {fill(t(ui.results.eyebrow), {
                    index: `0${index + 1}`,
                  })}
                </span>

                {index === 0 ? (
                  <h2
                    id="results-title"
                    className="text-display font-extrabold text-balance-tight"
                  >
                    {t(message.headline)}
                  </h2>
                ) : (
                  <h3 className="text-display font-extrabold text-balance-tight">
                    {t(message.headline)}
                  </h3>
                )}

                <p className="text-lede max-w-xl text-ink/80">
                  {t(message.support)}
                </p>
              </div>
            </ScrubStep>
          ))}

          <ScrubStep align="center" className="justify-center">
            <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
              <h3 className="text-headline font-extrabold text-balance-tight">
                {t(ui.results.closingTitle)}
              </h3>

              <p className="text-lede text-ink/80">
                {t(ui.results.closingLede)}
              </p>

              <InstagramButton
                label={t(ui.results.cta)}
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
