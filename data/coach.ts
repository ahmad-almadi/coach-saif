import { siteConfig } from "@/config/site";
import type { CoachProfile } from "@/types";

/**
 * Coach profile.
 *
 * Only add a formal certification here once it has actually been awarded, along
 * with the awarding body. `image` points to a photo inside /public/images;
 * swap it for a dedicated coach portrait when one is available.
 */
export const coachProfile: CoachProfile = {
  name: siteConfig.coachName,
  role: "Online Personal Trainer and Coach",
  yearsOfExperience: "7+ years of training experience in the gym",
  qualifications: [
    "7+ years of hands-on training experience in the gym",
    "Medical student, currently studying to become a doctor",
    "Add any formal coaching certification here once awarded, with the awarding body",
  ],
  intro:
    "I am Saif. I have spent more than seven years training in the gym, and I now work with clients online across Jordan and beyond, helping them train with a clear plan and make progress they can maintain. Coaching is delivered remotely, so your programme fits your city, your gym and your week.",
  philosophy: [
    "No generic templates and no extreme restrictions. Every coaching decision is based on your goals, lifestyle, training experience and progress.",
    "My role is not only to give you a workout plan. It is to help you understand the process, stay accountable and make adjustments when life does not go perfectly.",
    "I am also studying medicine, which is part of why I take training load, recovery and long-term health seriously rather than chasing quick results.",
  ],
  image: "/images/hero.jpg",
  imageAlt: `Portrait of ${siteConfig.coachName}, online personal trainer`,
};

/** Short, factual points shown next to the coach photo. */
export const coachHighlights: ReadonlyArray<{ label: string; value: string }> = [
  { label: "Based in", value: siteConfig.location },
  { label: "Experience", value: "7+ years in the gym" },
  { label: "Studying", value: "Medicine" },
  { label: "Working language", value: "Arabic and English" },
];
