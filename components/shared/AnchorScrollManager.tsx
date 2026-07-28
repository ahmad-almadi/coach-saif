"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { jumpToHash } from "@/lib/scroll";

/**
 * Owns every in-page anchor jump (header, mobile menu, hero, footer).
 *
 * A single delegated listener is used rather than handlers on each link, so any
 * `href="#section"` anywhere in the page gets the pin-aware, instant jump
 * instead of the browser's smooth scroll through the pinned scrub sections.
 */
export function AnchorScrollManager() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleClick = (event: MouseEvent) => {
      // Let modified clicks, middle clicks and already-handled clicks alone so
      // "open in new tab" keeps working.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href?.startsWith("#") || href.length < 2) {
        return;
      }

      if (anchor.target && anchor.target !== "_self") {
        return;
      }

      if (!document.getElementById(decodeURIComponent(href.slice(1)))) {
        return;
      }

      event.preventDefault();

      // The mobile menu restores body scrolling in an effect cleanup, which runs
      // after this handler. Scrolling while the body is still locked would be
      // ignored, so the jump waits for React to commit.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => jumpToHash(href));
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Back/forward between sections. `pushState` is used for the jumps above, so
  // history navigation has to reposition the page itself.
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash) {
        jumpToHash(window.location.hash, { updateHash: false, focus: false });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Landing on a URL that already has a hash: the browser positions the page
  // before GSAP creates the pins, so the position is corrected once triggers
  // have been measured.
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash || hash.length < 2) {
      return;
    }

    let settled = false;

    const settle = () => {
      if (settled) {
        return;
      }

      settled = true;
      window.clearTimeout(timeout);
      ScrollTrigger.removeEventListener("refresh", settle);
      jumpToHash(hash, { updateHash: false, focus: false });
    };

    // Whichever comes first: the first trigger refresh, or a short fallback for
    // pages where no scrub section is present.
    const timeout = window.setTimeout(settle, 500);

    ScrollTrigger.addEventListener("refresh", settle);

    return () => {
      settled = true;
      window.clearTimeout(timeout);
      ScrollTrigger.removeEventListener("refresh", settle);
    };
  }, []);

  return null;
}
