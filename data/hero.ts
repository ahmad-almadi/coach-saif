import type { Localized } from "@/lib/i18n";

/** Benefit blocks revealed while the hero video scrubs. */
interface HeroBenefit {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
}

export const heroBenefits: HeroBenefit[] = [
  {
    id: "training",
    title: {
      en: "Training Built Around You",
      ar: "تدريب مبني على قياسك",
    },
    description: {
      en: "Follow a program designed around your experience, schedule, goals and available equipment.",
      ar: "تتبع برنامجاً مصمّماً حسب خبرتك، جدولك، أهدافك والأجهزة المتوفرة لديك.",
    },
  },
  {
    id: "nutrition",
    title: {
      en: "Nutrition That Fits Your Lifestyle",
      ar: "تغذية تناسب نمط حياتك",
    },
    description: {
      en: "Build better eating habits without relying on extreme restrictions or unrealistic meal plans.",
      ar: "تبني عادات غذائية أفضل دون حرمان قاسٍ أو جداول طعام غير واقعية.",
    },
  },
  {
    id: "accountability",
    title: {
      en: "Accountability That Keeps You Moving",
      ar: "متابعة تحافظ على استمرارك",
    },
    description: {
      en: "Use regular check-ins, progress reviews and direct support to stay consistent.",
      ar: "متابعات منتظمة، مراجعات للتقدّم، ودعم مباشر يساعدك على الالتزام.",
    },
  },
];
