"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ui } from "@/data/ui";
import { fill } from "@/lib/i18n";
import { cardClass, cardHoverClass } from "@/lib/ui";
import { cn } from "@/lib/cn";
import type { Transformation } from "@/types";

interface TransformationCardProps {
  transformation: Transformation;
}

interface ProgressPanelProps {
  label: string;
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

      <figcaption className="absolute top-2 start-2 rounded-full border border-line bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-ink uppercase backdrop-blur-[2px]">
        {label}
      </figcaption>
    </figure>
  );
}

export function TransformationCard({ transformation }: TransformationCardProps) {
  const { t } = useLanguage();
  const name = t(transformation.name);
  const duration = t(transformation.duration);

  return (
    <article
      className={cn(cardClass, cardHoverClass, "flex w-full flex-col gap-4 p-5")}
    >
      <div className="grid grid-cols-2 gap-2">
        <ProgressPanel
          label={t(ui.transformations.before)}
          src={transformation.beforeImage}
          alt={fill(t(ui.transformations.beforeAlt), { name })}
        />
        <ProgressPanel
          label={t(ui.transformations.after)}
          src={transformation.afterImage}
          alt={fill(t(ui.transformations.afterAlt), { name, duration })}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-base font-bold tracking-tight">{name}</h3>
        <span className="text-xs text-muted">{duration}</span>
        <span className="ms-auto rounded-full border border-line bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-muted uppercase">
          {t(ui.transformations.categories[transformation.category])}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink/85">
        {t(transformation.result)}
      </p>

      <blockquote className="mt-auto border-t border-line pt-3 text-sm leading-relaxed text-muted">
        {t(transformation.testimonial)}
      </blockquote>
    </article>
  );
}
