import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";
import { buildInstagramUrl } from "@/lib/instagram";
import { buttonClass, type ButtonSize, type ButtonVariant } from "@/lib/ui";

interface InstagramButtonProps {
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
  return (
    <a
      href={buildInstagramUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, size, cn("group", className))}
    >
      <span>{label}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-[1.15em] transition-transform duration-200 group-hover:translate-x-0.5"
      />
      {srHint ? <span className="sr-only">{` ${srHint}`}</span> : null}
      <span className="sr-only"> (opens Instagram in a new tab)</span>
    </a>
  );
}
