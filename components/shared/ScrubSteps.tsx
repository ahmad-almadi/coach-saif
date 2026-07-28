import { cn } from "@/lib/cn";

interface ScrubStepsProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper for the text layers of a scroll-scrub section.
 * Stacked in normal flow by default, overlapping once scrubbing is active.
 */
export function ScrubSteps({ children, className }: ScrubStepsProps) {
  return <div className={cn("scrub-steps", className)}>{children}</div>;
}

type StepAlign = "start" | "center" | "end";

const alignClasses: Record<StepAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

interface ScrubStepProps {
  children: React.ReactNode;
  className?: string;
  align?: StepAlign;
}

/** A single text layer. ScrollScrubVideo animates every `data-scrub-step`. */
export function ScrubStep({
  children,
  className,
  align = "center",
}: ScrubStepProps) {
  return (
    <div
      data-scrub-step=""
      className={cn("scrub-step", alignClasses[align], className)}
    >
      {children}
    </div>
  );
}
