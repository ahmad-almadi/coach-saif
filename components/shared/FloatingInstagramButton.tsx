import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { buildInstagramUrl } from "@/lib/instagram";

/**
 * Persistent Instagram entry point. Kept as a plain anchor with a CSS entrance
 * animation so it needs no client-side JavaScript.
 */
export function FloatingInstagramButton() {
  return (
    <div className="floating-cta group">
      <span
        aria-hidden="true"
        className="pointer-events-none hidden translate-x-2 rounded-full border border-line bg-surface/95 px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block"
      >
        Message your coach
      </span>

      {/* Slightly smaller on phones so it covers less of the content it floats
          over, while staying above the 44px minimum touch target. */}
      <a
        href={buildInstagramUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="grid size-12 place-items-center rounded-full bg-instagram text-white shadow-[0_16px_34px_-14px_rgba(214,36,159,0.75)] transition-transform duration-200 hover:scale-105 active:scale-100 sm:size-14"
      >
        {/* Sized with font-size, not width/height: Font Awesome's own stylesheet
            sets the glyph to `1em`, so a `size-*` utility loses the height and
            the mark renders small inside the circle. */}
        <FontAwesomeIcon
          icon={faInstagram}
          aria-hidden="true"
          className="text-[1.75rem] sm:text-[2.125rem]"
        />
        <span className="sr-only">
          Message your coach on Instagram (opens in a new tab)
        </span>
      </a>
    </div>
  );
}
