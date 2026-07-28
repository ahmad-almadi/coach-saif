import type { FaqItem } from "@/types";

/**
 * Answers describe how the coaching service normally works. Adjust the wording
 * so it matches exactly what you deliver, especially the nutrition, check-in
 * and cancellation answers.
 */
export const faqItems: FaqItem[] = [
  {
    id: "beginners",
    question: {
      en: "Is online coaching suitable for beginners?",
      ar: "هل التدريب عن بُعد مناسب للمبتدئين؟",
    },
    answer: {
      en: "Yes. Your program begins at your current level. Exercises, training volume and progression are selected according to your experience and ability, and every movement comes with a demonstration video so you always know what to do.",
      ar: "نعم. يبدأ برنامجك من مستواك الحالي. تُختار التمارين وحجم التدريب والتدرّج حسب خبرتك وقدرتك، وكل حركة مرفقة بفيديو توضيحي لتعرف دائماً ما عليك فعله.",
    },
  },
  {
    id: "gym",
    question: {
      en: "Do I need access to a gym?",
      ar: "هل أحتاج إلى نادٍ رياضي؟",
    },
    answer: {
      en: "No. Your program is written around the equipment you can actually use. A full gym gives more exercise options, but a home setup with dumbbells, bands or bodyweight movements can still support steady progress.",
      ar: "لا. يُكتب برنامجك حسب الأجهزة التي تستطيع استخدامها فعلاً. النادي المجهّز يمنحك خيارات أكثر، لكن التدريب المنزلي بالدمبلز أو أحزمة المقاومة أو وزن الجسم يحقّق تقدّماً ثابتاً أيضاً.",
    },
  },
  {
    id: "home",
    question: { en: "Can I train from home?", ar: "هل أستطيع التدريب من المنزل؟" },
    answer: {
      en: "Yes. Tell your coach what equipment and space you have, and your sessions will be built around it. If your setup changes later, the program is adjusted to match.",
      ar: "نعم. أخبر مدربك بالأجهزة والمساحة المتوفرة لديك، وستُبنى حصصك على أساسها. وإذا تغيّرت ظروفك لاحقاً، يُعدّل البرنامج ليتناسب معها.",
    },
  },
  {
    id: "nutrition",
    question: {
      en: "Will I receive a strict meal plan?",
      ar: "هل سأحصل على نظام غذائي صارم؟",
    },
    answer: {
      en: "The coaching focuses on practical nutrition guidance that fits your routine, preferences and goals. The exact structure can be adjusted according to the service offered by the coach, so you can work with habits, targets or a more detailed plan depending on what suits you.",
      ar: "يركّز التدريب على إرشاد غذائي عملي يناسب روتينك وتفضيلاتك وأهدافك. يمكن تعديل الهيكل حسب الخدمة التي يقدّمها المدرب، فتعمل على العادات، أو الأهداف الرقمية، أو خطة أكثر تفصيلاً بحسب ما يناسبك.",
    },
  },
  {
    id: "check-ins",
    question: {
      en: "How do weekly check-ins work?",
      ar: "كيف تعمل المتابعة الأسبوعية؟",
    },
    answer: {
      en: "Each week you share your completed sessions, how the training felt, your nutrition and any measurements you track. Your coach reviews it, replies with clear feedback and confirms what to focus on next.",
      ar: "كل أسبوع تشارك الحصص التي أنجزتها، وكيف كان إحساسك بالتدريب، وتغذيتك، وأي قياسات تتابعها. يراجع مدربك ذلك، ويرد بملاحظات واضحة، ويحدّد ما ينبغي التركيز عليه بعد ذلك.",
    },
  },
  {
    id: "updates",
    question: {
      en: "How often is my program updated?",
      ar: "كم مرة يُحدّث برنامجي؟",
    },
    answer: {
      en: "Training blocks are typically reviewed every few weeks, and smaller adjustments happen sooner when your schedule, recovery or performance changes. On the Starter package the review happens monthly.",
      ar: "تُراجع المراحل التدريبية عادةً كل عدة أسابيع، وتحدث تعديلات أصغر أسرع من ذلك عند تغيّر جدولك أو استشفائك أو أدائك. في باقة البداية تكون المراجعة شهرية.",
    },
  },
  {
    id: "support",
    question: {
      en: "How does messaging support work?",
      ar: "كيف يعمل الدعم عبر الرسائل؟",
    },
    answer: {
      en: "You message your coach directly with questions about technique, scheduling or nutrition. Replies come within the response time listed in your package, so you get help during the week instead of waiting.",
      ar: "تراسل مدربك مباشرة بأسئلتك عن الأداء أو الجدولة أو التغذية. تصل الردود خلال زمن الاستجابة المحدّد في باقتك، فتحصل على المساعدة خلال الأسبوع بدل الانتظار.",
    },
  },
  {
    id: "start",
    question: { en: "When can I begin?", ar: "متى أستطيع البدء؟" },
    answer: {
      en: "Usually within a few days. Send a message with your goals and current situation, choose a package, complete a short intake questionnaire and your first program is prepared from there.",
      ar: "عادةً خلال أيام قليلة. أرسل رسالة بأهدافك ووضعك الحالي، اختر باقة، أكمل استبياناً قصيراً، ويُجهَّز برنامجك الأول بعد ذلك.",
    },
  },
  {
    id: "change-package",
    question: { en: "Can I change my package?", ar: "هل أستطيع تغيير باقتي؟" },
    answer: {
      en: "Yes. You can move up or down between packages as your needs change. Message your coach and the change is applied from your next billing period.",
      ar: "نعم. يمكنك الانتقال بين الباقات صعوداً أو نزولاً حسب تغيّر احتياجاتك. راسل مدربك ويُطبّق التغيير من دورة الدفع القادمة.",
    },
  },
  {
    id: "cancel",
    question: {
      en: "Can I cancel my subscription?",
      ar: "هل أستطيع إلغاء اشتراكي؟",
    },
    answer: {
      en: "Yes. Coaching runs month to month with no long contract. Let your coach know before your next renewal date and the subscription stops at the end of the current period.",
      ar: "نعم. الاشتراك شهري وبلا عقد طويل. أبلغ مدربك قبل تاريخ التجديد القادم ويتوقّف الاشتراك في نهاية الفترة الحالية.",
    },
  },
];
