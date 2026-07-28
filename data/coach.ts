import { siteConfig } from "@/config/site";
import type { Localized } from "@/lib/i18n";
import type { CoachProfile } from "@/types";

/**
 * Coach profile.
 *
 * Keep `qualifications` factual: only list credentials that have actually been
 * awarded, along with the awarding body. `image` points to a photo inside /public/images;
 * swap it for a dedicated coach portrait when one is available.
 */
export const coachProfile: CoachProfile = {
  name: siteConfig.coachName,
  role: {
    en: "Online Personal Trainer and Coach",
    ar: "مدرب شخصي ومشرف رياضي عن بُعد",
  },
  yearsOfExperience: {
    en: "7+ years of training experience in the gym",
    ar: "أكثر من 7 سنوات خبرة تدريب في النادي",
  },
  qualifications: {
    en: [
      "7+ years of hands-on training experience in the gym",
      "Medical graduate, qualified as a doctor",
    ],
    ar: [
      "أكثر من 7 سنوات خبرة تدريب عملية في النادي",
      "خريج طب، وطبيب مؤهّل",
    ],
  },
  intro: {
    en: "I am Saif. I have spent more than seven years training in the gym, and I now work with clients online across Jordan and beyond, helping them train with a clear plan and make progress they can maintain. Coaching is delivered remotely, so your program fits your city, your gym and your week.",
    ar: "أنا سيف. أمضيت أكثر من سبع سنوات في التدريب داخل النادي، وأعمل الآن مع متدرّبين عن بُعد في الأردن وخارجه، أساعدهم على التدريب وفق خطة واضحة وتحقيق تقدّم يستطيعون الحفاظ عليه. التدريب يُقدّم عن بُعد، فيتناسب برنامجك مع مدينتك، وناديك، وأسبوعك.",
  },
  philosophy: {
    en: [
      "No generic templates and no extreme restrictions. Every coaching decision is based on your goals, lifestyle, training experience and progress.",
      "My role is not only to give you a workout plan. It is to help you understand the process, stay accountable and make adjustments when life does not go perfectly.",
      "I have also graduated in medicine, which is part of why I take training load, recovery and long-term health seriously rather than chasing quick results.",
    ],
    ar: [
      "لا قوالب جاهزة ولا حرمان قاسٍ. كل قرار تدريبي مبني على أهدافك، نمط حياتك، خبرتك التدريبية وتقدّمك.",
      "دوري ليس إعطاءك جدول تمارين فقط، بل مساعدتك على فهم العملية، والالتزام بها، وتعديلها عندما لا تسير الحياة على ما هو مخطّط.",
      "تخرّجت أيضاً في الطب، وهذا جزء من سبب جدّيتي في التعامل مع حجم التدريب والاستشفاء والصحة على المدى الطويل، بدل السعي وراء نتائج سريعة.",
    ],
  },
  image: "/images/hero.jpg",
  imageAlt: {
    en: `Portrait of ${siteConfig.coachName.en}, online personal trainer`,
    ar: `صورة ${siteConfig.coachName.ar}، مدرب شخصي عن بُعد`,
  },
};

/** Short, factual points shown next to the coach photo. */
export const coachHighlights: ReadonlyArray<{
  label: Localized<string>;
  value: Localized<string>;
}> = [
  {
    label: { en: "Based in", ar: "المقر" },
    value: siteConfig.location,
  },
  {
    label: { en: "Experience", ar: "الخبرة" },
    value: {
      en: "7+ years in the gym",
      ar: "أكثر من 7 سنوات في النادي",
    },
  },
  {
    label: { en: "Graduated in", ar: "التخصص" },
    value: { en: "Medicine", ar: "الطب" },
  },
  {
    label: { en: "Working language", ar: "لغة التواصل" },
    value: { en: "Arabic and English", ar: "العربية والإنجليزية" },
  },
];
