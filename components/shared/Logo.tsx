import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Tailwind height utility, so the same mark can scale per placement. */
  className?: string;
  /** Rendered pixel height, used to request a sharp source image. */
  size?: number;
  /** Preload the mark. Only worth it for the header, which is above the fold. */
  priority?: boolean;
}

/**
 * Logo mark. Falls back to the monogram badge when no logo image is
 * configured, so the header never renders an empty box.
 *
 * Decorative by default: the wordmark next to it already carries the name.
 */
export function Logo({ className, size = 36, priority = false }: LogoProps) {
  if (!siteConfig.logo) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-sm font-black text-[#0a0c0e]",
          className,
        )}
      >
        {siteConfig.monogram}
      </span>
    );
  }

  return (
    <Image
      src={siteConfig.logo}
      alt=""
      aria-hidden="true"
      width={Math.round(size * siteConfig.logoAspectRatio)}
      height={size}
      priority={priority}
      // The mark is a transparent cutout, so it sits directly on the surface:
      // size by height and let the width follow the artwork's own ratio.
      className={cn("h-9 w-auto shrink-0 object-contain", className)}
    />
  );
}
