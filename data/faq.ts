import type { FaqItem } from "@/types";

/**
 * Answers describe how the coaching service normally works. Adjust the wording
 * so it matches exactly what you deliver, especially the nutrition, check-in
 * and cancellation answers.
 */
export const faqItems: FaqItem[] = [
  {
    id: "beginners",
    question: "Is online coaching suitable for beginners?",
    answer:
      "Yes. Your programme begins at your current level. Exercises, training volume and progression are selected according to your experience and ability, and every movement comes with a demonstration video so you always know what to do.",
  },
  {
    id: "gym",
    question: "Do I need access to a gym?",
    answer:
      "No. Your programme is written around the equipment you can actually use. A full gym gives more exercise options, but a home setup with dumbbells, bands or bodyweight movements can still support steady progress.",
  },
  {
    id: "home",
    question: "Can I train from home?",
    answer:
      "Yes. Tell your coach what equipment and space you have, and your sessions will be built around it. If your setup changes later, the programme is adjusted to match.",
  },
  {
    id: "nutrition",
    question: "Will I receive a strict meal plan?",
    answer:
      "The coaching focuses on practical nutrition guidance that fits your routine, preferences and goals. The exact structure can be adjusted according to the service offered by the coach, so you can work with habits, targets or a more detailed plan depending on what suits you.",
  },
  {
    id: "check-ins",
    question: "How do weekly check-ins work?",
    answer:
      "Each week you share your completed sessions, how the training felt, your nutrition and any measurements you track. Your coach reviews it, replies with clear feedback and confirms what to focus on next.",
  },
  {
    id: "updates",
    question: "How often is my programme updated?",
    answer:
      "Training blocks are typically reviewed every few weeks, and smaller adjustments happen sooner when your schedule, recovery or performance changes. On the Starter package the review happens monthly.",
  },
  {
    id: "support",
    question: "How does messaging support work?",
    answer:
      "You message your coach directly with questions about technique, scheduling or nutrition. Replies come within the response time listed in your package, so you get help during the week instead of waiting.",
  },
  {
    id: "start",
    question: "When can I begin?",
    answer:
      "Usually within a few days. Send a message with your goals and current situation, choose a package, complete a short intake questionnaire and your first programme is prepared from there.",
  },
  {
    id: "change-package",
    question: "Can I change my package?",
    answer:
      "Yes. You can move up or down between packages as your needs change. Message your coach and the change is applied from your next billing period.",
  },
  {
    id: "cancel",
    question: "Can I cancel my subscription?",
    answer:
      "Yes. Coaching runs month to month with no long contract. Let your coach know before your next renewal date and the subscription stops at the end of the current period.",
  },
];
