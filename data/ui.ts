import type { Localized } from "@/lib/i18n";

/**
 * Interface copy.
 *
 * Everything that is not part of a content collection lives here: section
 * headings, button labels, screen reader text and the small connective
 * sentences. Content that belongs to a list (features, FAQs, plans, and so on)
 * stays in its own file next to this one.
 *
 * Strings containing `{token}` are passed through `fill` so the value can sit
 * wherever the sentence needs it in each language.
 */
type Copy = Localized<string>;

export const ui = {
  /* ---------------------------------------------------------------- */
  /* Shared                                                           */
  /* ---------------------------------------------------------------- */
  common: {
    opensNewTab: {
      en: " (opens in a new tab)",
      ar: " (يفتح في تبويب جديد)",
    } satisfies Copy,
    opensInstagram: {
      en: " (opens Instagram in a new tab)",
      ar: " (يفتح إنستغرام في تبويب جديد)",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Language switch                                                  */
  /* ---------------------------------------------------------------- */
  language: {
    /** Written in the language currently on screen. */
    switchTo: {
      en: "Switch to Arabic",
      ar: "التبديل إلى الإنجليزية",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Navigation                                                       */
  /* ---------------------------------------------------------------- */
  nav: {
    skipToContent: {
      en: "Skip to content",
      ar: "تخطَّ إلى المحتوى",
    } satisfies Copy,
    mainLabel: { en: "Main", ar: "التنقل الرئيسي" } satisfies Copy,
    mobileLabel: { en: "Mobile", ar: "قائمة الجوال" } satisfies Copy,
    openMenu: { en: "Open menu", ar: "افتح القائمة" } satisfies Copy,
    closeMenu: { en: "Close menu", ar: "أغلق القائمة" } satisfies Copy,
    menuLabel: { en: "Site menu", ar: "قائمة الموقع" } satisfies Copy,
    headerCta: {
      en: "Start Training Here",
      ar: "ابدأ التدريب من هنا",
    } satisfies Copy,
    menuNote: {
      en: "Message the coach directly. No forms to fill in.",
      ar: "راسل المدرب مباشرة. بلا نماذج تعبئة.",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Hero                                                             */
  /* ---------------------------------------------------------------- */
  hero: {
    eyebrow: {
      en: "1:1 Online Fitness Coaching",
      ar: "تدريب رياضي فردي عن بُعد",
    } satisfies Copy,
    titleLead: {
      en: "Build a Stronger Body.",
      ar: "ابنِ جسماً أقوى.",
    } satisfies Copy,
    titleAccent: {
      en: "Create Lasting Progress.",
      ar: "وحقّق تقدّماً يدوم.",
    } satisfies Copy,
    lede: {
      en: "Personalised training, practical nutrition guidance and consistent accountability built around your goals and lifestyle.",
      ar: "برنامج تدريبي مخصّص، إرشاد غذائي عملي، ومتابعة منتظمة مبنية على أهدافك ونمط حياتك.",
    } satisfies Copy,
    primaryCta: {
      en: "Start Training Here",
      ar: "ابدأ التدريب من هنا",
    } satisfies Copy,
    secondaryCta: {
      en: "Explore Plans",
      ar: "استعرض الباقات",
    } satisfies Copy,
    scrollCue: {
      en: "Scroll to explore",
      ar: "اسحب للأسفل",
    } satisfies Copy,
    closingTitle: {
      en: "Your Plan. Your Progress. Your Coach.",
      ar: "خطتك. تقدّمك. مدربك.",
    } satisfies Copy,
    closingLede: {
      en: "Stop guessing and start following a clear coaching system designed to help you train with purpose.",
      ar: "توقّف عن التجربة والخطأ، وابدأ بنظام تدريبي واضح يساعدك على التدريب بهدف.",
    } satisfies Copy,
    closingCta: {
      en: "Chat with Your Coach",
      ar: "تحدّث مع مدربك",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Trust stats                                                      */
  /* ---------------------------------------------------------------- */
  trustStats: {
    sectionLabel: {
      en: "Coaching at a glance",
      ar: "نظرة سريعة على التدريب",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Coaching method                                                  */
  /* ---------------------------------------------------------------- */
  method: {
    /** e.g. "Step 01 · Assess" */
    stageEyebrow: {
      en: "Step {step} · {label}",
      ar: "المرحلة {step} · {label}",
    } satisfies Copy,
    cta: {
      en: "Ask About the Process",
      ar: "اسأل عن طريقة العمل",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Audience                                                         */
  /* ---------------------------------------------------------------- */
  audience: {
    eyebrow: { en: "Who it is for", ar: "لمن هذا البرنامج" } satisfies Copy,
    title: {
      en: "Coaching Designed for Real Life",
      ar: "تدريب مصمّم لواقع حياتك",
    } satisfies Copy,
    description: {
      en: "This program is built for people who want a clear plan, professional support and a realistic way to make progress.",
      ar: "هذا البرنامج موجّه لمن يريد خطة واضحة، دعماً احترافياً، وطريقة واقعية لتحقيق التقدّم.",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Coaching features                                                */
  /* ---------------------------------------------------------------- */
  features: {
    eyebrow: { en: "What you receive", ar: "ما تحصل عليه" } satisfies Copy,
    title: {
      en: "Everything Included in Your Coaching",
      ar: "كل ما يشمله اشتراكك التدريبي",
    } satisfies Copy,
    description: {
      en: "Each package is built from the same foundation: a plan you can follow, feedback you can act on and support when your week does not go as expected.",
      ar: "كل باقة مبنية على الأساس نفسه: خطة تستطيع الالتزام بها، ملاحظات تستطيع تطبيقها، ودعم عندما لا يسير أسبوعك كما هو مخطّط.",
    } satisfies Copy,
    cta: {
      en: "Ask What Suits You",
      ar: "اسأل عمّا يناسبك",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Results                                                          */
  /* ---------------------------------------------------------------- */
  results: {
    /** e.g. "The client journey · 01" */
    eyebrow: {
      en: "The client journey · {index}",
      ar: "رحلة المتدرّب · {index}",
    } satisfies Copy,
    closingTitle: {
      en: "Your Next Chapter Starts Here.",
      ar: "فصلك القادم يبدأ من هنا.",
    } satisfies Copy,
    closingLede: {
      en: "Tell your coach where you are now, where you want to go and what has been holding you back.",
      ar: "أخبر مدربك بموقعك الحالي، وإلى أين تريد الوصول، وما الذي كان يعيقك.",
    } satisfies Copy,
    cta: {
      en: "Start on Instagram",
      ar: "ابدأ عبر إنستغرام",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Testimonials                                                     */
  /* ---------------------------------------------------------------- */
  testimonials: {
    eyebrow: { en: "In their words", ar: "بكلماتهم" } satisfies Copy,
    title: {
      en: "What Coaching Feels Like Week to Week",
      ar: "كيف يبدو التدريب أسبوعاً بعد أسبوع",
    } satisfies Copy,
    description: {
      en: "Feedback focuses on the part that matters most: being able to follow the plan consistently and knowing what to do next.",
      ar: "الملاحظات تركّز على الأهم: القدرة على الالتزام بالخطة ومعرفة الخطوة التالية.",
    } satisfies Copy,
    /** e.g. "Rated 5 out of 5" */
    rating: {
      en: "Rated {rating} out of {max}",
      ar: "التقييم {rating} من {max}",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Transformations                                                  */
  /* ---------------------------------------------------------------- */
  transformations: {
    eyebrow: { en: "Client progress", ar: "تقدّم المتدرّبين" } satisfies Copy,
    title: {
      en: "Real Clients, Real Consistency",
      ar: "متدرّبون حقيقيون، والتزام حقيقي",
    } satisfies Copy,
    description: {
      en: "Every result below came from following a plan that fit the person: their schedule, their starting point and the equipment they actually have.",
      ar: "كل نتيجة أدناه جاءت من الالتزام بخطة تناسب صاحبها: جدوله، نقطة انطلاقه، والأجهزة المتوفرة لديه فعلاً.",
    } satisfies Copy,
    disclaimer: {
      en: "Results vary from person to person. Photos are shared with client permission.",
      ar: "النتائج تختلف من شخص لآخر. الصور تُنشر بإذن المتدرّبين.",
    } satisfies Copy,
    before: { en: "Before", ar: "قبل" } satisfies Copy,
    after: { en: "After", ar: "بعد" } satisfies Copy,
    beforeAlt: {
      en: "{name} before coaching",
      ar: "{name} قبل التدريب",
    } satisfies Copy,
    afterAlt: {
      en: "{name} after {duration} of coaching",
      ar: "{name} بعد {duration} من التدريب",
    } satisfies Copy,
    categories: {
      strength: { en: "Strength", ar: "قوة" } satisfies Copy,
      "weight loss": { en: "Weight loss", ar: "خسارة وزن" } satisfies Copy,
      lifestyle: { en: "Lifestyle", ar: "نمط حياة" } satisfies Copy,
    },
  },

  /* ---------------------------------------------------------------- */
  /* Pricing                                                          */
  /* ---------------------------------------------------------------- */
  pricing: {
    eyebrow: { en: "Coaching packages", ar: "باقات التدريب" } satisfies Copy,
    title: {
      en: "Choose the Level of Support You Need",
      ar: "اختر مستوى الدعم الذي تحتاجه",
    } satisfies Copy,
    description: {
      en: "Every package includes a personalised program. The difference is how much feedback, guidance and direct contact you receive along the way.",
      ar: "كل باقة تشمل برنامجاً مخصّصاً. الفرق هو حجم الملاحظات والتوجيه والتواصل المباشر الذي تحصل عليه.",
    } satisfies Copy,
    note: {
      en: "All prices are in Jordanian dinars. Coaching runs month to month, and the {months}-month option is simply paid once for a longer block. Not sure which package fits? Send a message and your coach will help you decide.",
      ar: "جميع الأسعار بالدينار الأردني. الاشتراك شهري، وخيار الـ {months} أشهر يُدفع مرة واحدة مقابل فترة أطول. لست متأكداً أي باقة تناسبك؟ أرسل رسالة وسيساعدك مدربك في الاختيار.",
    } satisfies Copy,
    cta: {
      en: "Ask Before You Choose",
      ar: "استشر قبل الاختيار",
    } satisfies Copy,
    periodLabel: { en: "Billing period", ar: "دورة الدفع" } satisfies Copy,
    /** Screen reader context appended to a plan CTA. */
    planHint: {
      en: "{plan} package, {price}",
      ar: "باقة {plan}، {price}",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Coach                                                            */
  /* ---------------------------------------------------------------- */
  coach: {
    eyebrow: { en: "About your coach", ar: "عن مدربك" } satisfies Copy,
    title: {
      en: "Coaching Built Around You",
      ar: "تدريب مبني حولك",
    } satisfies Copy,
    qualificationsLabel: {
      en: "Qualifications and experience",
      ar: "المؤهلات والخبرة",
    } satisfies Copy,
    imagePlaceholder: {
      en: "Add a coach photo at /public/images/coach.webp",
      ar: "أضف صورة المدرب في /public/images/coach.webp",
    } satisfies Copy,
    cta: { en: "Message the Coach", ar: "راسل المدرب" } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* FAQ                                                              */
  /* ---------------------------------------------------------------- */
  faq: {
    eyebrow: { en: "Questions", ar: "أسئلة" } satisfies Copy,
    title: {
      en: "Everything You Need to Know",
      ar: "كل ما تحتاج معرفته",
    } satisfies Copy,
    description: {
      en: "If your question is not answered here, send a message and you will get a straight answer before committing to anything.",
      ar: "إذا لم تجد إجابة سؤالك هنا، أرسل رسالة وستحصل على جواب واضح قبل أي التزام.",
    } satisfies Copy,
    cta: { en: "Ask a Question", ar: "اطرح سؤالاً" } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Final call to action                                             */
  /* ---------------------------------------------------------------- */
  finalCta: {
    eyebrow: { en: "Start today", ar: "ابدأ اليوم" } satisfies Copy,
    title: {
      en: "Ready to Start Making Real Progress?",
      ar: "جاهز لتبدأ تقدّماً حقيقياً؟",
    } satisfies Copy,
    lede: {
      en: "Send a message about your goals, training experience and current challenges. Your coach will help you choose the most suitable package.",
      ar: "أرسل رسالة عن أهدافك وخبرتك التدريبية والتحديات التي تواجهك، وسيساعدك مدربك في اختيار الباقة الأنسب.",
    } satisfies Copy,
    primaryCta: {
      en: "Message on Instagram",
      ar: "راسلنا على إنستغرام",
    } satisfies Copy,
    secondaryCta: {
      en: "View Coaching Plans",
      ar: "اطّلع على الباقات",
    } satisfies Copy,
    footnote: {
      en: "No pressure and no complicated forms. Start with a simple conversation.",
      ar: "بلا ضغط وبلا نماذج معقّدة. ابدأ بمحادثة بسيطة.",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Floating Instagram button                                        */
  /* ---------------------------------------------------------------- */
  floatingCta: {
    label: { en: "Message your coach", ar: "راسل مدربك" } satisfies Copy,
    srLabel: {
      en: "Message your coach on Instagram",
      ar: "راسل مدربك على إنستغرام",
    } satisfies Copy,
  },

  /* ---------------------------------------------------------------- */
  /* Footer                                                           */
  /* ---------------------------------------------------------------- */
  footer: {
    description: {
      en: "Online personal training and coaching based in {location}. Personalised programs, practical nutrition guidance and weekly accountability, delivered remotely.",
      ar: "تدريب شخصي وإشراف رياضي عن بُعد من {location}. برامج مخصّصة، إرشاد غذائي عملي ومتابعة أسبوعية، تُقدّم عن بُعد.",
    } satisfies Copy,
    exploreLabel: { en: "Explore", ar: "تصفّح" } satisfies Copy,
    contactLabel: { en: "Contact", ar: "تواصل" } satisfies Copy,
    navLabel: { en: "Footer", ar: "روابط التذييل" } satisfies Copy,
    privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" } satisfies Copy,
    terms: { en: "Terms and Conditions", ar: "الشروط والأحكام" } satisfies Copy,
    /** e.g. "© 2026 Coach Saif. All rights reserved." */
    copyright: {
      en: "© {year} {name}. All rights reserved.",
      ar: "© {year} {name}. جميع الحقوق محفوظة.",
    } satisfies Copy,
    disclaimer: {
      en: "Coaching does not replace medical advice. Speak to a qualified health professional before starting a new training program.",
      ar: "التدريب لا يُغني عن الاستشارة الطبية. راجع أخصائي صحة مؤهّلاً قبل البدء ببرنامج تدريبي جديد.",
    } satisfies Copy,
  },
} as const;
