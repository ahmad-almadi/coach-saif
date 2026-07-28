"use client";

import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ui } from "@/data/ui";
import { cn } from "@/lib/cn";
import { buildInstagramUrl } from "@/lib/instagram";
import { buttonClass, type ButtonSize, type ButtonVariant } from "@/lib/ui";

interface InstagramButtonProps {
  /** Already resolved for the active language by the calling section. */
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Extra context for screen readers, e.g. the package name. */
  srHint?: string;
}

/**
 * Single place where Instagram CTAs are rendered, so URL building, target and
 * rel attributes stay consistent across the site. Visually these read as
 * regular CTAs: no brand colour or logo, just a forward arrow.
 */
export function InstagramButton({
  label,
  variant = "accent",
  size = "md",
  className,
  srHint,
}: InstagramButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href={buildInstagramUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, size, cn("group", className))}
    >
      <span>{label}</span>
      {/* Mirrored in Arabic so "forward" still points along the reading
          direction, and the hover nudge follows it. */}
      <ArrowRight
        aria-hidden="true"
        className="size-[1.15em] transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
      />
      {srHint ? <span className="sr-only">{` ${srHint}`}</span> : null}
      <span className="sr-only">{t(ui.common.opensInstagram)}</span>
    </a>
  );
}
