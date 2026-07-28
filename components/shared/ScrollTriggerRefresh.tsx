"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/providers/LanguageProvider";

/**
 * Re-measures ScrollTrigger after a language switch.
 *
 * The pinned scrub sections set their scroll distance as a percentage of the
 * measured section height, and every `Reveal` records its start position once on
 * mount. Arabic copy is not the same height as the English copy, so without a
 * refresh the pins keep their old distances and the sections unpin early or
 * late.
 *
 * Two passes are needed: one after React has committed the new text, and one
 * after the Arabic face has actually loaded, because the swap from the fallback
 * changes line heights again.
 */
export function ScrollTriggerRefresh() {
  const { language } = useLanguage();
  const isInitialRender = useRef(true);

  useEffect(() => {
    // The triggers are built from the server-rendered language already.
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let cancelled = false;
    let innerFrame = 0;

    // Two frames: the first lets React paint the new text, the second lets the
    // browser finish laying it out before anything is measured.
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        if (!cancelled) {
          ScrollTrigger.refresh();
        }
      });
    });

    void document.fonts?.ready.then(() => {
      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
    };
  }, [language]);

  return null;
}
