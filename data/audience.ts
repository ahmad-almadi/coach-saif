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
    title: "New to Training",
    problem: "You want to start but you are not sure what to do first.",
    solution:
      "Begin with a simple programme that teaches the main movements and builds your confidence week by week.",
    icon: Compass,
  },
  {
    id: "returning",
    title: "Returning After a Break",
    problem: "You trained before and stopping made it harder to restart.",
    solution:
      "Rebuild gradually with volume and intensity matched to your current ability, not your previous best.",
    icon: RefreshCw,
  },
  {
    id: "busy",
    title: "Busy Schedule",
    problem: "Work and family leave you with limited training time.",
    solution:
      "Receive a programme that fits the time you actually have available instead of an unrealistic weekly routine.",
    icon: Briefcase,
  },
  {
    id: "plateau",
    title: "Stuck at the Gym",
    problem: "You train regularly but your progress has stalled.",
    solution:
      "Follow clear progression targets and structured training blocks so every session has a purpose.",
    icon: TrendingUp,
  },
  {
    id: "home",
    title: "Training From Home",
    problem: "You have limited equipment and no gym access.",
    solution:
      "Train effectively with what you own, whether that is dumbbells, bands or bodyweight only.",
    icon: Home,
  },
  {
    id: "intermediate",
    title: "Need More Structure",
    problem: "You know the basics but your training lacks a plan.",
    solution:
      "Use a structured programme with planned progression, deload weeks and measurable performance targets.",
    icon: Users,
  },
];
