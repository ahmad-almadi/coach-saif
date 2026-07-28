import type { TrustStat } from "@/types";

/** Headline figures shown in the "at a glance" strip under the hero. */
export const trustStats: TrustStat[] = [
  {
    id: "clients",
    value: { en: "100+", ar: "+100" },
    label: { en: "Clients Coached", ar: "متدرّب تم تدريبه" },
  },
  {
    id: "experience",
    value: { en: "7+", ar: "+7" },
    label: { en: "Years of Experience", ar: "سنوات خبرة" },
  },
  {
    id: "completion",
    value: { en: "90%", ar: "90%" },
    label: { en: "Program Completion", ar: "نسبة إكمال البرنامج" },
  },
  {
    id: "response",
    value: { en: "Within 24 Hours", ar: "خلال 24 ساعة" },
    label: { en: "Support Response", ar: "زمن الرد على استفساراتك" },
  },
];
