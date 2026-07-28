/** Statements shown while the results video scrubs. */
interface ResultsMessage {
  id: string;
  headline: string;
  support: string;
}

export const resultsMessages: ResultsMessage[] = [
  {
    id: "purpose",
    headline: "Train with Purpose.",
    support:
      "Every session has a target, so you always know why you are doing it and what to aim for.",
  },
  {
    id: "track",
    headline: "Track What Matters.",
    support:
      "Sessions completed, loads lifted and how you feel week to week. Simple numbers that show real direction.",
  },
  {
    id: "improve",
    headline: "Improve with Every Check-In.",
    support:
      "Your feedback shapes the next block of training instead of repeating the same routine.",
  },
  {
    id: "consistent",
    headline: "Become Stronger and More Consistent.",
    support:
      "Progress comes from repeatable weeks. The plan is built so those weeks stay realistic.",
  },
];
