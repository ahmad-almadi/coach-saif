import { cn } from "@/lib/cn";
import { eyebrowClass } from "@/lib/ui";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCentered ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? <span className={eyebrowClass}>{eyebrow}</span> : null}

      <h2
        id={id}
        className={cn(
          "text-headline font-extrabold text-balance-tight",
          isCentered ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-lede text-muted",
            isCentered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
