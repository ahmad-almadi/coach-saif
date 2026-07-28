import { ScrollScrubVideo } from "@/components/shared/ScrollScrubVideo";
import { ScrubStep, ScrubSteps } from "@/components/shared/ScrubSteps";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { scrubMedia, scrubScrollLengths } from "@/config/site";
import { resultsMessages } from "@/data/results";
import { eyebrowClass } from "@/lib/ui";

export function ResultsScrubSection() {
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
                  {`The client journey · 0${index + 1}`}
                </span>

                {index === 0 ? (
                  <h2
                    id="results-title"
                    className="text-display font-extrabold text-balance-tight"
                  >
                    {message.headline}
                  </h2>
                ) : (
                  <h3 className="text-display font-extrabold text-balance-tight">
                    {message.headline}
                  </h3>
                )}

                <p className="text-lede max-w-xl text-ink/80">
                  {message.support}
                </p>
              </div>
            </ScrubStep>
          ))}

          <ScrubStep align="center" className="justify-center">
            <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
              <h3 className="text-headline font-extrabold text-balance-tight">
                Your Next Chapter Starts Here.
              </h3>

              <p className="text-lede text-ink/80">
                Tell your coach where you are now, where you want to go and what
                has been holding you back.
              </p>

              <InstagramButton
                label="Start on Instagram"
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
