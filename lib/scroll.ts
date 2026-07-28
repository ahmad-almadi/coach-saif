import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * In-page navigation for a layout built from pinned scroll-scrub sections.
 *
 * Native anchor navigation cannot be used here:
 * - CSS `scroll-behavior: smooth` animates the whole distance, so every pinned
 *   section between the current position and the target is scrubbed at speed.
 *   That reads as the video "fast-forwarding" and it queues seeks the decoder
 *   cannot keep up with.
 * - A pinned section owns far more scroll distance than its own height, so the
 *   element's document offset is not the position where its animation starts.
 *   ScrollTrigger knows that number, so it is asked for it.
 */

/** Mirrors the fixed `.site-nav` height in globals.css, plus breathing room. */
const NAV_HEIGHT_MOBILE = 64;
const NAV_HEIGHT_DESKTOP = 72;
const NAV_GAP = 16;

function navOffset(): number {
  const isDesktop = window.matchMedia("(min-width: 640px)").matches;

  return (isDesktop ? NAV_HEIGHT_DESKTOP : NAV_HEIGHT_MOBILE) + NAV_GAP;
}

function documentTop(element: HTMLElement): number {
  return element.getBoundingClientRect().top + window.scrollY;
}

/**
 * Scroll position where a pinned scrub section is at progress 0, or `null` when
 * the section is not (or not yet) pinned: no JavaScript layout, reduced motion,
 * or a plain content section.
 */
function pinnedStart(section: HTMLElement): number | null {
  const root = section.matches(".scrub-root")
    ? section
    : section.querySelector<HTMLElement>(".scrub-root");

  if (!root || root.dataset.scrubMode !== "scrub") {
    return null;
  }

  const trigger = ScrollTrigger.getAll().find(
    (candidate) => candidate.trigger === root && candidate.pin,
  );

  // The pin start already sits at the top of the viewport, so no nav offset is
  // applied: the pinned overlay reserves that space with its own padding.
  return trigger ? trigger.start : documentTop(root);
}

/**
 * Lands every scrubbed timeline on its final progress in the current frame.
 *
 * The scrub sections use `scrub: <seconds>`, so ScrollTrigger normally eases its
 * timeline toward the new progress. That easing is what makes a clip look like
 * it is playing (fast) after an instant jump: the scroll position is already at
 * the section, but the timeline is still travelling there from where it was.
 * Completing the scrub tween skips that travel, so the clip shows the frame that
 * belongs to the landing position straight away.
 */
function settleScrubbing(): void {
  ScrollTrigger.update();

  ScrollTrigger.getAll().forEach((trigger) => {
    const scrub = trigger.getTween?.();

    // Triggers without an animation (class toggles, callbacks) return nothing.
    if (scrub) {
      scrub.progress(1);
    }
  });
}

/** Clamped document position to land on for a given section element. */
function getScrollTarget(section: HTMLElement): number {
  const pinned = pinnedStart(section);
  const top = pinned ?? documentTop(section) - navOffset();
  const max = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    0,
  );

  return Math.min(Math.max(top, 0), max);
}

type JumpOptions = {
  /** Keep the address bar in sync without triggering a native scroll. */
  updateHash?: boolean;
  /** Move focus to the section so keyboard and screen reader users follow. */
  focus?: boolean;
};

/**
 * Jumps straight to a section. The jump is instant on purpose: animating the
 * scroll would drag the pinned clips through their whole timeline on the way.
 */
export function jumpToHash(hash: string, options: JumpOptions = {}): boolean {
  const { updateHash = true, focus = true } = options;

  if (!hash.startsWith("#") || hash.length < 2) {
    return false;
  }

  const id = decodeURIComponent(hash.slice(1));
  const section = document.getElementById(id);

  if (!section) {
    return false;
  }

  window.scrollTo({ top: getScrollTarget(section), behavior: "instant" });

  // Pins, and therefore scrub progress, are recalculated from the new position
  // in the same frame instead of waiting for the next scroll event, and the
  // scrub easing is skipped so the clip sits on the landing frame immediately.
  settleScrubbing();

  // Pinning an element shifts layout, which can move the target by a pin's
  // worth of spacing. One correction pass on the next frame lands the section
  // exactly on its progress-0 position, again without easing the clips there.
  requestAnimationFrame(() => {
    const corrected = getScrollTarget(section);

    if (Math.abs(window.scrollY - corrected) > 1) {
      window.scrollTo({ top: corrected, behavior: "instant" });
    }

    settleScrubbing();
  });

  if (updateHash && window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  if (focus && !section.hasAttribute("tabindex")) {
    section.setAttribute("tabindex", "-1");
    section.addEventListener(
      "blur",
      () => section.removeAttribute("tabindex"),
      { once: true },
    );
  }

  if (focus) {
    section.focus({ preventScroll: true });
  }

  return true;
}
