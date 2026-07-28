type ClassValue = string | number | false | null | undefined;

/** Minimal class name joiner. Keeps component markup readable. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
