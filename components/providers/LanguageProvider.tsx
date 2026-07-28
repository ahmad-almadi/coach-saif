"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  LANGUAGE_COOKIE,
  LANGUAGE_COOKIE_MAX_AGE,
  languageDirection,
  otherLanguage,
  type Direction,
  type Language,
  type Localized,
} from "@/lib/i18n";

interface LanguageContextValue {
  language: Language;
  direction: Direction;
  /** Resolves a `Localized` value in the active language. */
  t: <T>(value: Localized<T>) => T;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  /** Language read from the cookie on the server, so the first paint matches. */
  initialLanguage: Language;
  children: React.ReactNode;
}

/**
 * Holds the active language for the whole page.
 *
 * Switching is done in place instead of navigating: the landing page is one long
 * scroll-scrub experience, and a route change would reset the scroll position
 * and every pinned GSAP timeline along with it.
 */
export function LanguageProvider({
  initialLanguage,
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);

    // `<html>` is owned by the server-rendered layout, so the attributes are
    // updated directly. This keeps CSS logical properties, text selection and
    // assistive technology in step with the switch.
    const root = document.documentElement;

    root.lang = next;
    root.dir = languageDirection[next];

    // Remembered for the next visit, and read by the server on the way in.
    document.cookie = `${LANGUAGE_COOKIE}=${next};path=/;max-age=${LANGUAGE_COOKIE_MAX_AGE};samesite=lax`;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(otherLanguage(language));
  }, [language, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction: languageDirection[language],
      t: <T,>(localized: Localized<T>) => localized[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider.");
  }

  return context;
}
