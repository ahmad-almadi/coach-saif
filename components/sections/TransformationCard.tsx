import Image from "next/image";
import { ImageOff } from "lucide-react";

import { cardClass, cardHoverClass } from "@/lib/ui";
import { cn } from "@/lib/cn";
import type { Transformation } from "@/types";

interface TransformationCardProps {
  transformation: Transformation;
}

interface ProgressPanelProps {
  label: "Before" | "After";
  src: string | null;
  alt: string;
}

/**
 * One half of the before/after pair. Holds its aspect ratio whether a photo is
 * set or not, so a card still lines up while photos are being collected.
 */
function ProgressPanel({ label, src, alt }: ProgressPanelProps) {
  return (
    <figure className="relative aspect-3/4 overflow-hidden rounded-xl border border-line bg-surface">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 20vw, 45vw"
          className="object-cover"
        />
      ) : (
        <div className="grid-lines absolute inset-0 grid place-items-center bg-gradient-to-br from-surface to-card">
          <ImageOff aria-hidden="true" className="size-6 text-muted" />
        </div>
      )}

      <figcaption className="absolute top-2 left-2 rounded-full border border-line bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-ink uppercase backdrop-blur-[2px]">
        {label}
      </figcaption>
    </figure>
  );
}

export function TransformationCard({ transformation }: TransformationCardProps) {
  return (
    <article
      className={cn(cardClass, cardHoverClass, "flex w-full flex-col gap-4 p-5")}
    >
      <div className="grid grid-cols-2 gap-2">
        <ProgressPanel
          label="Before"
          src={transformation.beforeImage}
          alt={`${transformation.name} before coaching`}
        />
        <ProgressPanel
          label="After"
          src={transformation.afterImage}
          alt={`${transformation.name} after ${transformation.duration} of coaching`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-base font-bold tracking-tight">
          {transformation.name}
        </h3>
        <span className="text-xs text-muted">{transformation.duration}</span>
        <span className="ml-auto rounded-full border border-line bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-muted uppercase">
          {transformation.category}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink/85">
        {transformation.result}
      </p>

      <blockquote className="mt-auto border-t border-line pt-3 text-sm leading-relaxed text-muted">
        {transformation.testimonial}
      </blockquote>
    </article>
  );
}
