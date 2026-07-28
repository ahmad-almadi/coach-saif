"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { Logo } from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navLinks[0].href);

  // Active link tracking. An observer is used instead of scroll listeners so it
  // only reacts when a section actually enters the middle of the viewport.
  useEffect(() => {
    const targets = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const topMost = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (topMost?.target.id) {
          setActiveHref(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // Background/blur is toggled with a class once the page scrolls past the hero
  // edge. Without JavaScript the bar simply stays transparent and usable.
  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      start: 48,
      end: "max",
      toggleClass: { targets: header, className: "is-scrolled" },
    });

    return () => trigger.kill();
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0a0c0e]"
      >
        Skip to content
      </a>

      <header ref={headerRef} className="site-nav">
        <div className="shell flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
          {/* `min-w-0` plus truncation keeps the wordmark from pushing into the
              actions when the row runs out of space on narrow screens. */}
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5 text-base font-extrabold tracking-tight"
          >
            <Logo priority />

            <span className="flex min-w-0 flex-col gap-1 leading-none">
              <span className="truncate">{siteConfig.name}</span>
              <span className="truncate text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
                Online Coaching
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === activeHref;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200 hover:bg-white/[0.06] hover:text-ink",
                        isActive
                          ? "bg-white/[0.08] text-ink"
                          : "text-muted",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* Held back until `lg`. Below that the row is too tight: the label
                wrapped onto two lines and overlapped the wordmark. Phones reach
                the same action through the menu and the floating button.
                The visibility lives on a wrapper because `cn` is a plain joiner:
                a `hidden` on the button itself would fight the `inline-flex`
                that `buttonClass` always applies. */}
            <span className="hidden lg:inline-flex">
              <InstagramButton
                label="Start Coaching"
                size="sm"
                className="whitespace-nowrap"
              />
            </span>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white/[0.04] text-ink transition-colors duration-200 hover:border-line-strong md:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} links={navLinks} />
    </>
  );
}
