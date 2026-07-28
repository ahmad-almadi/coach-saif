import type { MethodStage } from "@/types";

/** The four coaching stages shown in the pinned method section. */
export const methodStages: MethodStage[] = [
  {
    id: "assess",
    step: "01",
    label: "Assess",
    heading: "Understand Your Starting Point",
    description:
      "We begin by reviewing your goals, training history, current ability, lifestyle, schedule and available equipment.",
  },
  {
    id: "plan",
    step: "02",
    label: "Plan",
    heading: "Build Your Personal Programme",
    description:
      "Your training and nutrition structure is created around your needs instead of using a generic template.",
  },
  {
    id: "train",
    step: "03",
    label: "Train",
    heading: "Follow a Clear System",
    description:
      "Complete structured workouts with clear exercise guidance, progression targets and realistic weekly expectations.",
  },
  {
    id: "evolve",
    step: "04",
    label: "Evolve",
    heading: "Adjust as You Progress",
    description:
      "Your programme is reviewed and adjusted using your check-ins, performance, feedback and results.",
  },
];
