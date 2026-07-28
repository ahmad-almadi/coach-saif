/** Benefit blocks revealed while the hero video scrubs. */
interface HeroBenefit {
  id: string;
  title: string;
  description: string;
}

export const heroBenefits: HeroBenefit[] = [
  {
    id: "training",
    title: "Training Built Around You",
    description:
      "Follow a programme designed around your experience, schedule, goals and available equipment.",
  },
  {
    id: "nutrition",
    title: "Nutrition That Fits Your Lifestyle",
    description:
      "Build better eating habits without relying on extreme restrictions or unrealistic meal plans.",
  },
  {
    id: "accountability",
    title: "Accountability That Keeps You Moving",
    description:
      "Use regular check-ins, progress reviews and direct support to stay consistent.",
  },
];
