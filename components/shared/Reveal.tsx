"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/cn";

/** Travel distance in pixels for the reveal. Deliberately small. */
const REVEAL_Y = 20;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Exposed so sibling controls (for example rail arrows) can find this node. */
  id?: string;
  /** Animate matching descendants with a small stagger instead of the wrapper. */
  childSelector?: string;
  stagger?: number;
}

/**
 * Restrained scroll reveal. Runs once, animates only transform and opacity,
 * and is skipped entirely when reduced motion is requested.
 */
export function Reveal({
  children,
  className,
  id,
  childSelector,
  stagger = 0.08,
}: RevealProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = childSelector
          ? gsap.utils.toArray<HTMLElement>(root.querySelectorAll(childSelector))
          : [root];

        if (targets.length === 0) {
          return;
        }

        gsap.from(targets, {
          opacity: 0,
          y: REVEAL_Y,
          duration: 0.65,
          ease: "power2.out",
          stagger: childSelector ? stagger : 0,
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => context.revert();
  }, [childSelector, stagger]);

  return (
    <div ref={rootRef} id={id} className={cn(className)}>
      {children}
    </div>
  );
}
