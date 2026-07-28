import type { Testimonial } from "@/types";

/**
 * Client testimonials. Cards show the client's initial instead of a photo.
 */
export const testimonials: Testimonial[] = [
  {
    id: "ahmad-almadi",
    name: { en: "Ahmad Almadi", ar: "أحمد الماضي" },
    duration: { en: "Coached for 6 months", ar: "تدرّب لمدة 6 أشهر" },
    quote: {
      en: "The biggest difference was finally having a plan I could follow consistently. The weekly feedback helped me understand what to improve without feeling overwhelmed.",
      ar: "أكبر فرق شعرت به هو وجود خطة أستطيع الالتزام بها فعلاً. الملاحظات الأسبوعية ساعدتني أفهم ما يجب تحسينه دون أن أشعر بالضغط.",
    },
    rating: 5,
  },
  {
    id: "ayham-kurdi",
    name: { en: "Ayham Kurdi", ar: "أيهم كردي" },
    duration: { en: "Coached for 4 months", ar: "تدرّب لمدة 4 أشهر" },
    quote: {
      en: "Training around shift work was always my excuse. The program was built around my week, so I stopped falling behind after busy days.",
      ar: "كان دوام الشفتات عذري الدائم. البرنامج بُني حول أسبوعي، فتوقّفت عن التأخر بعد الأيام المزدحمة.",
    },
    rating: 5,
  },
  {
    id: "suhaib-ali",
    name: { en: "Suhaib Ali", ar: "صهيب علي" },
    duration: { en: "Coached for 3 months", ar: "تدرّب لمدة 3 أشهر" },
    quote: {
      en: "I expected a strict diet. Instead I got practical guidance that worked with the food I already eat, which made it far easier to stay on track.",
      ar: "توقّعت نظاماً غذائياً صارماً، لكنني حصلت على إرشاد عملي يتوافق مع طعامي المعتاد، وهذا جعل الالتزام أسهل بكثير.",
    },
    rating: 4,
  },
  {
    id: "taj-bdour",
    name: { en: "Taj Bdour", ar: "تاج بدور" },
    duration: { en: "Coached for 8 months", ar: "تدرّب لمدة 8 أشهر" },
    quote: {
      en: "Being able to send a quick question during the week meant small problems never turned into missed weeks of training.",
      ar: "قدرتي على إرسال سؤال سريع خلال الأسبوع منعت المشاكل الصغيرة من أن تتحول إلى أسابيع تدريب ضائعة.",
    },
    rating: 5,
  },
];
