import {
  Briefcase,
  Compass,
  Home,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";

import type { AudienceItem } from "@/types";

/** Who the coaching is designed for. */
export const audienceItems: AudienceItem[] = [
  {
    id: "beginner",
    title: { en: "New to Training", ar: "مبتدئ في التدريب" },
    problem: {
      en: "You want to start but you are not sure what to do first.",
      ar: "تريد البدء لكنك لا تعرف من أين تبدأ.",
    },
    solution: {
      en: "Begin with a simple program that teaches the main movements and builds your confidence week by week.",
      ar: "تبدأ ببرنامج بسيط يعلّمك الحركات الأساسية ويبني ثقتك أسبوعاً بعد أسبوع.",
    },
    icon: Compass,
  },
  {
    id: "returning",
    title: { en: "Returning After a Break", ar: "عائد بعد انقطاع" },
    problem: {
      en: "You trained before and stopping made it harder to restart.",
      ar: "تدرّبت سابقاً، والتوقف جعل العودة أصعب.",
    },
    solution: {
      en: "Rebuild gradually with volume and intensity matched to your current ability, not your previous best.",
      ar: "تعود بالتدريج بحجم وشدّة مناسبين لمستواك الحالي، لا لأفضل مستوى وصلت إليه سابقاً.",
    },
    icon: RefreshCw,
  },
  {
    id: "busy",
    title: { en: "Busy Schedule", ar: "جدول مزدحم" },
    problem: {
      en: "Work and family leave you with limited training time.",
      ar: "العمل والعائلة لا يتركان لك وقتاً كافياً للتدريب.",
    },
    solution: {
      en: "Receive a program that fits the time you actually have available instead of an unrealistic weekly routine.",
      ar: "تحصل على برنامج يناسب الوقت المتاح لديك فعلياً، لا روتيناً أسبوعياً غير واقعي.",
    },
    icon: Briefcase,
  },
  {
    id: "plateau",
    title: { en: "Stuck at the Gym", ar: "توقّفت عن التقدّم" },
    problem: {
      en: "You train regularly but your progress has stalled.",
      ar: "تتدرّب بانتظام لكن تقدّمك توقّف.",
    },
    solution: {
      en: "Follow clear progression targets and structured training blocks so every session has a purpose.",
      ar: "تتبع أهداف تدرّج واضحة ومراحل تدريبية منظّمة ليكون لكل حصة هدف.",
    },
    icon: TrendingUp,
  },
  {
    id: "home",
    title: { en: "Training From Home", ar: "تتدرّب من المنزل" },
    problem: {
      en: "You have limited equipment and no gym access.",
      ar: "أجهزتك محدودة ولا يوجد لديك نادٍ رياضي.",
    },
    solution: {
      en: "Train effectively with what you own, whether that is dumbbells, bands or bodyweight only.",
      ar: "تتدرّب بفعالية بما تملكه، سواء كانت دمبلز، أحزمة مقاومة، أو وزن الجسم فقط.",
    },
    icon: Home,
  },
  {
    id: "intermediate",
    title: { en: "Need More Structure", ar: "تحتاج تنظيماً أفضل" },
    problem: {
      en: "You know the basics but your training lacks a plan.",
      ar: "تعرف الأساسيات لكن تدريبك يفتقر إلى خطة.",
    },
    solution: {
      en: "Use a structured program with planned progression, deload weeks and measurable performance targets.",
      ar: "تستخدم برنامجاً منظّماً مع تدرّج مخطّط، أسابيع تخفيف، وأهداف أداء قابلة للقياس.",
    },
    icon: Users,
  },
];
