import { cn } from "@/lib/cn";

export type ButtonVariant = "accent" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-200 " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  accent:
    "bg-accent text-[#0a0c0e] hover:bg-accent-soft shadow-[0_10px_30px_-14px_rgba(252,206,7,0.55)]",
  outline:
    "border border-line-strong bg-white/[0.03] text-ink hover:border-white/35 hover:bg-white/[0.07]",
};

/**
 * Sizes step up at `sm`. Phone-sized viewports get slightly shorter, tighter
 * buttons: stacked full-width CTAs are common here, and the desktop heights
 * added up to more vertical space than the pinned sections have to give.
 */
const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-[0.9rem] sm:min-h-12 sm:px-6 sm:text-[0.95rem]",
  lg: "min-h-13 px-6 text-[0.95rem] sm:min-h-14 sm:px-7 sm:text-[1.05rem]",
};

export function buttonClass(
  variant: ButtonVariant = "accent",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

export const cardClass =
  "rounded-card border border-line bg-card/80 backdrop-blur-[2px]";

export const cardHoverClass =
  "transition-[transform,border-color,background-color] duration-300 " +
  "hover:-translate-y-1 hover:border-line-strong hover:bg-card";

/** Tracking and size are eased off on phones so long eyebrows stay on one line. */
export const eyebrowClass =
  "inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-white/[0.04] " +
  "px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-muted uppercase " +
  "sm:px-3.5 sm:text-xs sm:tracking-[0.16em]";
