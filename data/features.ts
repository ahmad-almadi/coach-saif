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
    id: "programme",
    title: "Personalised Training Programme",
    description:
      "Follow workouts designed around your goals, experience, schedule and available equipment.",
    icon: Dumbbell,
  },
  {
    id: "nutrition",
    title: "Practical Nutrition Guidance",
    description:
      "Build better eating habits with guidance that fits your routine, preferences and budget.",
    icon: Apple,
  },
  {
    id: "demos",
    title: "Exercise Demonstration Videos",
    description:
      "See exactly how each movement should look, so you can train with better technique and more confidence.",
    icon: PlayCircle,
  },
  {
    id: "check-ins",
    title: "Weekly Check-Ins",
    description:
      "Review your training, nutrition, challenges and progress with clear feedback from your coach.",
    icon: CalendarCheck,
  },
  {
    id: "tracking",
    title: "Progress Tracking",
    description:
      "Track the numbers that matter, including training performance, measurements and consistency.",
    icon: LineChart,
  },
  {
    id: "support",
    title: "Direct Messaging Support",
    description:
      "Ask questions during the week and get practical answers instead of waiting for your next session.",
    icon: MessageCircle,
  },
  {
    id: "adjustments",
    title: "Programme Adjustments",
    description:
      "Your plan changes as your strength, fitness, schedule and needs develop.",
    icon: Repeat2,
  },
  {
    id: "habits",
    title: "Habit and Lifestyle Coaching",
    description:
      "Work on sleep, daily activity and routine so your results are easier to maintain long term.",
    icon: Sparkles,
  },
];
