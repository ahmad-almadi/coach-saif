import type { Localized } from "@/lib/i18n";

/** Statements shown while the results video scrubs. */
interface ResultsMessage {
  id: string;
  headline: Localized<string>;
  support: Localized<string>;
}

export const resultsMessages: ResultsMessage[] = [
  {
    id: "purpose",
    headline: { en: "Train with Purpose.", ar: "تدرّب بهدف." },
    support: {
      en: "Every session has a target, so you always know why you are doing it and what to aim for.",
      ar: "لكل حصة هدف محدّد، لتعرف دائماً لماذا تتدرّب وما الذي تسعى إليه.",
    },
  },
  {
    id: "track",
    headline: { en: "Track What Matters.", ar: "تابع ما يهم فعلاً." },
    support: {
      en: "Sessions completed, loads lifted and how you feel week to week. Simple numbers that show real direction.",
      ar: "الحصص المنجزة، الأوزان المرفوعة، وكيف تشعر أسبوعاً بعد أسبوع. أرقام بسيطة تُظهر اتجاهاً حقيقياً.",
    },
  },
  {
    id: "improve",
    headline: {
      en: "Improve with Every Check-In.",
      ar: "تتحسّن مع كل متابعة.",
    },
    support: {
      en: "Your feedback shapes the next block of training instead of repeating the same routine.",
      ar: "ملاحظاتك تصيغ المرحلة التدريبية القادمة بدل تكرار الروتين نفسه.",
    },
  },
  {
    id: "consistent",
    headline: {
      en: "Become Stronger and More Consistent.",
      ar: "تصبح أقوى وأكثر التزاماً.",
    },
    support: {
      en: "Progress comes from repeatable weeks. The plan is built so those weeks stay realistic.",
      ar: "التقدّم يأتي من أسابيع قابلة للتكرار، والخطة مبنية لتبقى تلك الأسابيع واقعية.",
    },
  },
];
