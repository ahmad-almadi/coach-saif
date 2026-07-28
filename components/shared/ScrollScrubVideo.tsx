"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollScrubVideoProps = {
  src: string;
  poster: string;
  /** Pinned scroll distance on larger screens, e.g. "+=250%". */
  desktopScrollLength?: string;
  /** Pinned scroll distance on small screens, e.g. "+=140%". */
  mobileScrollLength?: string;
  children?: React.ReactNode;
  /** object-position for the clip, so the subject stays visible when cropped. */
  objectPosition?: string;
  /**
   * object-position used on phones (max-width: 767px). The portrait crop is
   * far tighter than the desktop one, so a clip framed for wide screens can
   * lose its subject. Defaults to `objectPosition`.
   */
  mobileObjectPosition?: string;
  /** Optional extra scrim/gradient layers rendered above the video. */
  scrim?: React.ReactNode;
  /**
   * Called on every scroll update with progress from 0 to 1.
   * Use refs or GSAP inside the callback: never React state.
   */
  onProgress?: (progress: number) => void;
  /**
   * Load the clip immediately. Leave off for below-the-fold sections: their
   * source is attached only when the section approaches the viewport.
   */
  priority?: boolean;
};

/** Ignore sub-frame differences so the browser is not asked to seek needlessly. */
const SEEK_EPSILON = 0.02;

/**
 * Pins a section and maps scroll progress onto the video's `currentTime`.
 *
 * Behaviour notes:
 * - The video never plays: it is only seeked, which keeps scrubbing reversible.
 * - Progress drives a proxy object through a scrubbed timeline, so seeking is
 *   smoothed instead of jumping frame to frame with raw scroll deltas.
 * - Text layers marked with `data-scrub-step` cross-fade across the timeline.
 * - Layout is CSS driven. `data-scrub-mode="scrub"` is only added once GSAP is
 *   active, so the markup stays readable without JavaScript, with reduced
 *   motion enabled, or when the video cannot be used.
 */
export function ScrollScrubVideo({
  src,
  poster,
  desktopScrollLength = "+=250%",
  mobileScrollLength = "+=140%",
  children,
  objectPosition = "50% 50%",
  mobileObjectPosition,
  scrim,
  onProgress,
  priority = false,
}: ScrollScrubVideoProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canSeekRef = useRef(false);
  const onProgressRef = useRef<ScrollScrubVideoProps["onProgress"]>(undefined);

  // Kept in a ref so a new callback identity never rebuilds the ScrollTrigger.
  // Declared before the scrub effect so it is assigned first.
  useLayoutEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;

    if (!root || !stage || !video) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Mobile browsers resize the viewport when the address bar collapses. Left
    // alone, that resize refreshes every trigger mid-scroll and makes pinned
    // sections jump. The layout uses `svh`, so the resize can be ignored.
    ScrollTrigger.config({ ignoreMobileResize: true });

    let metadataReady = false;
    let targetTime = 0;

    const markState = (state: "loading" | "ready" | "error") => {
      root.dataset.videoState = state;
    };

    markState("loading");

    /**
     * Seeking is applied from a single ticker callback instead of from the
     * timeline's onUpdate. This guarantees at most one seek per animation
     * frame, and the `seeking` check means a new seek is never queued while the
     * decoder is still working on the previous one. Queued seeks are the usual
     * cause of stuttering and of the video appearing to lag behind the scroll.
     */
    const applySeek = () => {
      const element = videoRef.current;

      if (!element || !canSeekRef.current || element.seeking) {
        return;
      }

      // A clip that is both playing and being seeked runs away from the scroll
      // position and looks fast-forwarded, so playback is always stopped first.
      if (!element.paused) {
        element.pause();
      }

      const duration = element.duration;

      if (!Number.isFinite(duration) || duration <= 0) {
        return;
      }

      // Stop just before the end: some browsers stall when seeking to duration.
      const target = Math.min(Math.max(targetTime, 0), duration - 0.05);

      if (Math.abs(element.currentTime - target) < SEEK_EPSILON) {
        return;
      }

      try {
        element.currentTime = target;
      } catch {
        canSeekRef.current = false;
        markState("error");
      }
    };

    gsap.ticker.add(applySeek);

    let primeTimeout = 0;

    const enableSeeking = () => {
      if (canSeekRef.current) {
        return;
      }

      window.clearTimeout(primeTimeout);
      canSeekRef.current = true;

      // Pinned distances and the clip duration are both read on refresh, and
      // the refresh re-renders the timeline, so `targetTime` matches the current
      // scroll position afterwards.
      ScrollTrigger.refresh();

      // Seek right away instead of waiting for the next tick. This matters when
      // the section was reached by an anchor jump while metadata was still
      // loading: the clip lands on its frame for that position at once.
      applySeek();
    };

    const handleLoadedMetadata = () => {
      if (metadataReady) {
        return;
      }

      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        markState("error");
        return;
      }

      metadataReady = true;
      markState("ready");

      // Priming the decoder with a muted play/pause makes the first seek paint
      // reliably on iOS and some Android browsers. Seeking stays disabled until
      // the clip is paused again so the two never fight over `currentTime`.
      const stopPriming = () => {
        if (!video.paused) {
          video.pause();
        }

        enableSeeking();
      };

      const primed = video.play();

      if (primed && typeof primed.then === "function") {
        // The fallback also pauses: leaving a slow-resolving `play()` running
        // while seeking starts is what makes a clip look fast-forwarded.
        primeTimeout = window.setTimeout(stopPriming, 500);

        primed.then(stopPriming).catch(() => {
          // Autoplay refusal is fine: seeking a paused video still works.
          enableSeeking();
        });
      } else {
        stopPriming();
      }
    };

    const handleError = () => {
      canSeekRef.current = false;
      markState("error");
      ScrollTrigger.refresh();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);

    // The source is attached from JavaScript so below-the-fold clips do not
    // request metadata until the section is close to the viewport.
    let observer: IntersectionObserver | null = null;

    const attachSource = () => {
      if (video.getAttribute("src")) {
        return;
      }

      // Once a clip is close enough to be scrubbed it is worth buffering fully:
      // seeking inside buffered data is instant, while seeking into an
      // unbuffered range waits on the network and looks like stuttering.
      video.preload = "auto";
      video.setAttribute("src", src);
    };

    if (priority || typeof IntersectionObserver === "undefined") {
      attachSource();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            attachSource();
            observer?.disconnect();
            observer = null;
          }
        },
        { rootMargin: "150% 0px" },
      );

      observer.observe(root);
    }

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    const context = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-scrub-step]"),
      );

      const createScrub = (scrollLength: string) => {
        root.dataset.scrubMode = "scrub";

        const proxy = { time: 0 };
        const stepCount = Math.max(steps.length, 1);
        const segment = 1 / stepCount;

        gsap.set(steps, { autoAlpha: 0, y: 28 });

        if (steps[0]) {
          gsap.set(steps[0], { autoAlpha: 1, y: 0 });
        }

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: scrollLength,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            // Smoothing gives the decoder time to catch up with fast scrolling.
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              onProgressRef.current?.(self.progress);
            },
            onRefresh: (self) => {
              onProgressRef.current?.(self.progress);
            },
          },
        });

        // Total timeline length is 1 so positions map directly to progress.
        // The tween only records the wanted time; the ticker performs the seek.
        timeline.to(
          proxy,
          {
            time: () => (metadataReady ? video.duration : 0),
            duration: 1,
            onUpdate: () => {
              targetTime = proxy.time;
            },
          },
          0,
        );

        steps.forEach((step, index) => {
          const start = index * segment;
          const end = start + segment;
          const fade = Math.min(segment * 0.35, 0.12);

          if (index > 0) {
            timeline.fromTo(
              step,
              { autoAlpha: 0, y: 28 },
              { autoAlpha: 1, y: 0, duration: fade, ease: "power2.out" },
              Math.max(start - fade * 0.5, 0),
            );
          }

          const isLast = index === steps.length - 1;

          if (!isLast) {
            timeline.to(
              step,
              { autoAlpha: 0, y: -24, duration: fade, ease: "power2.in" },
              Math.max(end - fade * 0.5, fade),
            );
          }
        });

        return () => {
          delete root.dataset.scrubMode;
          gsap.set(steps, { clearProps: "all" });
        };
      };

      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => createScrub(desktopScrollLength),
      );

      media.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
        () => createScrub(mobileScrollLength),
      );

      // Reduced motion: no pin, no scrubbing. The stacked fallback layout and
      // the poster frame are used instead.
    }, root);

    return () => {
      window.clearTimeout(primeTimeout);
      gsap.ticker.remove(applySeek);
      observer?.disconnect();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("error", handleError);
      context.revert();
    };
  }, [desktopScrollLength, mobileScrollLength, priority, src]);

  return (
    <div ref={rootRef} className="scrub-root">
      <div ref={stageRef} className="scrub-stage">
        <div
          className="scrub-media"
          style={{ backgroundImage: `url(${poster})` }}
        >
          {/* `src` is attached in the effect, never as a React prop, so React
              does not undo the lazy loading behaviour on re-render. */}
          <video
            ref={videoRef}
            className="scrub-video"
            /* Custom properties instead of `object-position` directly: an
               inline declaration cannot be overridden by the phone media
               query in globals.css, a variable can. */
            style={
              {
                "--scrub-object-position": objectPosition,
                "--scrub-object-position-mobile":
                  mobileObjectPosition ?? objectPosition,
              } as React.CSSProperties
            }
            poster={poster}
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
          />
          {scrim ?? (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-canvas/85 via-canvas/45 to-canvas/95"
            />
          )}
        </div>

        <div className="scrub-overlay">{children}</div>
      </div>
    </div>
  );
}
