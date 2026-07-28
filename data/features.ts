import {
  Apple,
  CalendarCheck,
  Dumbbell,
  LineChart,
  MessageCircle,
  PlayCircle,
  Repeat2,
  Sparkles,
} from "lucide-react";

import type { CoachingFeature } from "@/types";

/** What every coaching client receives. */
export const coachingFeatures: CoachingFeature[] = [
  {
    id: "program",
    title: {
      en: "Personalised Training Program",
      ar: "برنامج تدريبي مخصّص",
    },
    description: {
      en: "Follow workouts designed around your goals, experience, schedule and available equipment.",
      ar: "تمارين مصمّمة حسب أهدافك، خبرتك، جدولك والأجهزة المتوفرة لديك.",
    },
    icon: Dumbbell,
  },
  {
    id: "nutrition",
    title: {
      en: "Practical Nutrition Guidance",
      ar: "إرشاد غذائي عملي",
    },
    description: {
      en: "Build better eating habits with guidance that fits your routine, preferences and budget.",
      ar: "تبني عادات غذائية أفضل بتوجيه يناسب روتينك، تفضيلاتك وميزانيتك.",
    },
    icon: Apple,
  },
  {
    id: "demos",
    title: {
      en: "Exercise Demonstration Videos",
      ar: "فيديوهات شرح التمارين",
    },
    description: {
      en: "See exactly how each movement should look, so you can train with better technique and more confidence.",
      ar: "ترى بالضبط كيف تُنفّذ كل حركة، لتتدرّب بأداء أفضل وثقة أكبر.",
    },
    icon: PlayCircle,
  },
  {
    id: "check-ins",
    title: { en: "Weekly Check-Ins", ar: "متابعة أسبوعية" },
    description: {
      en: "Review your training, nutrition, challenges and progress with clear feedback from your coach.",
      ar: "تراجع تدريبك، تغذيتك، التحديات وتقدّمك مع ملاحظات واضحة من مدربك.",
    },
    icon: CalendarCheck,
  },
  {
    id: "tracking",
    title: { en: "Progress Tracking", ar: "تتبّع التقدّم" },
    description: {
      en: "Track the numbers that matter, including training performance, measurements and consistency.",
      ar: "تتابع الأرقام المهمة: الأداء في التدريب، القياسات ومستوى الالتزام.",
    },
    icon: LineChart,
  },
  {
    id: "support",
    title: {
      en: "Direct Messaging Support",
      ar: "دعم عبر الرسائل المباشرة",
    },
    description: {
      en: "Ask questions during the week and get practical answers instead of waiting for your next session.",
      ar: "تسأل خلال الأسبوع وتحصل على أجوبة عملية بدل انتظار موعدك القادم.",
    },
    icon: MessageCircle,
  },
  {
    id: "adjustments",
    title: { en: "Program Adjustments", ar: "تعديلات على البرنامج" },
    description: {
      en: "Your plan changes as your strength, fitness, schedule and needs develop.",
      ar: "تتغيّر خطتك مع تطوّر قوتك، لياقتك، جدولك واحتياجاتك.",
    },
    icon: Repeat2,
  },
  {
    id: "habits",
    title: {
      en: "Habit and Lifestyle Coaching",
      ar: "بناء العادات ونمط الحياة",
    },
    description: {
      en: "Work on sleep, daily activity and routine so your results are easier to maintain long term.",
      ar: "نعمل على النوم، النشاط اليومي والروتين لتصبح نتائجك أسهل في الحفاظ عليها على المدى الطويل.",
    },
    icon: Sparkles,
  },
];
