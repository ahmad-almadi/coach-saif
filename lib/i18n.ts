/**
 * Bilingual core.
 *
 * The site ships English and Arabic from the same content files: every piece of
 * copy is stored as `{ en, ar }` and resolved at render time with the language
 * from `LanguageProvider`.
 *
 * The selected language is kept in a cookie rather than localStorage so the
 * server can read it and render the correct language on the first response. That
 * avoids both the flash of English text and the hydration mismatch a
 * client-only store would cause.
 */

export const LANGUAGES = ["en", "ar"] as const;

export type Language = (typeof LANGUAGES)[number];

export type Direction = "ltr" | "rtl";

/** Fallback used when no preference has been stored yet. */
export const DEFAULT_LANGUAGE: Language = "en";

/** Cookie name shared by the server (read) and the toggle (write). */
export const LANGUAGE_COOKIE = "lang";

/** One year, in seconds. */
export const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * A value that exists in both languages.
 *
 * Used for plain strings and for arrays of strings, e.g. a list of plan
 * features or the paragraphs of the coach bio.
 */
export type Localized<T> = { readonly en: T; readonly ar: T };

export const languageDirection: Record<Language, Direction> = {
  en: "ltr",
  ar: "rtl",
};

/** Each language named in itself, for the toggle and the `lang` attributes. */
export const languageNames: Record<Language, string> = {
  en: "English",
  ar: "العربية",
};

/** Short code shown inside the toggle button. */
export const languageShortNames: Record<Language, string> = {
  en: "EN",
  ar: "AR",
};

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && LANGUAGES.includes(value as Language);
}

/** Normalises anything cookie-shaped into a supported language. */
export function toLanguage(value: unknown): Language {
  return isLanguage(value) ? value : DEFAULT_LANGUAGE;
}

/** The language the toggle switches to. With two languages this is the other one. */
export function otherLanguage(language: Language): Language {
  return language === "en" ? "ar" : "en";
}

/** Picks one side of a `Localized` value. */
export function resolve<T>(value: Localized<T>, language: Language): T {
  return value[language];
}

/**
 * Fills `{name}` placeholders in a resolved string.
 *
 * Sentences that mix copy with a value keep their word order inside the
 * translation instead of being concatenated in the component, which is what
 * Arabic needs: the value rarely sits in the same position as in English.
 */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
