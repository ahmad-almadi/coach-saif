import type { MethodStage } from "@/types";

/** The four coaching stages shown in the pinned method section. */
export const methodStages: MethodStage[] = [
  {
    id: "assess",
    step: "01",
    label: { en: "Assess", ar: "التقييم" },
    heading: {
      en: "Understand Your Starting Point",
      ar: "نفهم نقطة انطلاقك",
    },
    description: {
      en: "We begin by reviewing your goals, training history, current ability, lifestyle, schedule and available equipment.",
      ar: "نبدأ بمراجعة أهدافك، تاريخك التدريبي، مستواك الحالي، نمط حياتك، جدولك والأجهزة المتوفرة لديك.",
    },
  },
  {
    id: "plan",
    step: "02",
    label: { en: "Plan", ar: "التخطيط" },
    heading: {
      en: "Build Your Personal Program",
      ar: "نبني برنامجك الخاص",
    },
    description: {
      en: "Your training and nutrition structure is created around your needs instead of using a generic template.",
      ar: "يُصمّم هيكل التدريب والتغذية حسب احتياجاتك، لا وفق قالب جاهز.",
    },
  },
  {
    id: "train",
    step: "03",
    label: { en: "Train", ar: "التدريب" },
    heading: {
      en: "Follow a Clear System",
      ar: "تتدرّب وفق نظام واضح",
    },
    description: {
      en: "Complete structured workouts with clear exercise guidance, progression targets and realistic weekly expectations.",
      ar: "تنفّذ تمارين منظّمة مع شرح واضح لكل حركة، أهداف تدرّج، وتوقعات أسبوعية واقعية.",
    },
  },
  {
    id: "evolve",
    step: "04",
    label: { en: "Evolve", ar: "التطوير" },
    heading: {
      en: "Adjust as You Progress",
      ar: "نعدّل مع تقدّمك",
    },
    description: {
      en: "Your program is reviewed and adjusted using your check-ins, performance, feedback and results.",
      ar: "يُراجع برنامجك ويُعدّل بناءً على متابعاتك، أدائك، ملاحظاتك ونتائجك.",
    },
  },
];
