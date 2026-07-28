import type { Transformation } from "@/types";

/**
 * Client transformations.
 *
 * One entry per genuine client result. Point `beforeImage` / `afterImage` at
 * files inside /public/images/transformations, for example
 * "/images/transformations/client-1-before.webp", or leave them as null to show
 * the labelled placeholder panel so the layout holds while photos are being
 * collected. An empty list makes the Client progress section render nothing.
 *
 * The three entries below are PLACEHOLDER copy so the section is visible during
 * development. Replace them with real, approved client results before launch.
 */
export const transformations: Transformation[] = [
  {
    id: "client-1",
    name: { en: "Client One", ar: "المتدرّب الأول" },
    duration: { en: "16 weeks", ar: "16 أسبوعاً" },
    result: {
      en: "Trained three times a week and progressed on every main lift.",
      ar: "تدرّب ثلاث مرات أسبوعياً وحقّق تقدّماً في كل التمارين الأساسية.",
    },
    testimonial: {
      en: "Having a plan I could actually follow made the difference.",
      ar: "وجود خطة أستطيع الالتزام بها فعلاً هو ما أحدث الفرق.",
    },
    category: "strength",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "client-2",
    name: { en: "Client Two", ar: "المتدرّبة الثانية" },
    duration: { en: "20 weeks", ar: "20 أسبوعاً" },
    result: {
      en: "Lost weight steadily without cutting out the food she enjoys.",
      ar: "خسرت الوزن بثبات دون الاستغناء عن الطعام الذي تحبه.",
    },
    testimonial: {
      en: "The check-ins kept me honest on the weeks I wanted to quit.",
      ar: "المتابعات الأسبوعية حافظت على التزامي في الأسابيع التي أردت التوقف فيها.",
    },
    category: "weight loss",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "client-3",
    name: { en: "Client Three", ar: "المتدرّب الثالث" },
    duration: { en: "12 weeks", ar: "12 أسبوعاً" },
    result: {
      en: "Built a routine that fits around shift work and family time.",
      ar: "بنى روتيناً يتناسب مع دوام الشفتات ووقت العائلة.",
    },
    testimonial: {
      en: "Training finally stopped competing with the rest of my week.",
      ar: "أخيراً توقّف التدريب عن التنافس مع بقية أسبوعي.",
    },
    category: "lifestyle",
    beforeImage: null,
    afterImage: null,
  },
];
