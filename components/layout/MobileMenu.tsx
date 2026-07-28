"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { InstagramButton } from "@/components/shared/InstagramButton";
import { Logo } from "@/components/shared/Logo";
import { siteConfig } from "@/config/site";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Only the vertical axis is locked: the stylesheet sets `overflow-x: clip`
    // on the body, and the `overflow` shorthand would drop it, which breaks the
    // pinned scroll-scrub sections behind the menu.
    const previousOverflowY = document.body.style.overflowY;

    document.body.style.overflowY = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflowY = previousOverflowY;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="menu-panel absolute inset-x-0 top-0 max-h-[100svh] overflow-y-auto overscroll-contain rounded-b-3xl border-b border-line bg-surface px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-8"
      >
        <div className="flex h-14 items-center justify-between">
          <span className="flex min-w-0 items-center gap-2.5">
            <Logo size={32} className="h-8" />
            <span className="truncate text-base font-extrabold tracking-tight">
              {siteConfig.name}
            </span>
          </span>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white/[0.04] text-ink"
          >
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-4">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line last:border-0">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex min-h-14 items-center text-lg font-semibold text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6">
          <InstagramButton
            label="Start Coaching"
            size="lg"
            className="w-full"
          />
          <p className="mt-3 text-center text-sm text-muted">
            Message the coach directly. No forms to fill in.
          </p>
        </div>
      </div>
    </div>
  );
}
