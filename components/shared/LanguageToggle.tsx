"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ui } from "@/data/ui";
import { cn } from "@/lib/cn";
import {
  languageNames,
  languageShortNames,
  otherLanguage,
} from "@/lib/i18n";

interface LanguageToggleProps {
  className?: string;
  /**
   * `responsive` shows the two letter code on phones, where the full native
   * name would push the header row into the wordmark, and the full name from
   * `sm` up. `full` always shows the name.
   */
  variant?: "responsive" | "full";
}

/**
 * Switches the page between English and Arabic.
 *
 * The label is always written in the language being switched to, and carries
 * its own `lang` attribute so screen readers announce it with the right voice
 * instead of reading Arabic through an English one.
 */
export function LanguageToggle({
  className,
  variant = "responsive",
}: LanguageToggleProps) {
  const { language, t, toggleLanguage } = useLanguage();
  const target = otherLanguage(language);

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t(ui.language.switchTo)}
      className={cn(
        "inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-white/[0.04] px-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-line-strong hover:bg-white/[0.08]",
        className,
      )}
    >
      <Languages aria-hidden="true" className="size-4 shrink-0 text-accent" />

      <span lang={target} className="whitespace-nowrap">
        {variant === "full" ? (
          languageNames[target]
        ) : (
          <>
            <span className="sm:hidden">{languageShortNames[target]}</span>
            <span className="hidden sm:inline">{languageNames[target]}</span>
          </>
        )}
      </span>
    </button>
  );
}
