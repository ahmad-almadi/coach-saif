import type { Transformation } from "@/types";

/**
 * Client transformations.
 *
 * One entry per genuine client result. Point `beforeImage` / `afterImage` at
 * files inside /public/images/transformations, for example
 * "/images/transformations/client-1-before.webp", or leave them as null to show
 * the labelled placeholder panel so the layout holds while photos are being
 * collected. An empty list makes the Client progress section render nothing.
 *
 * The three entries below are PLACEHOLDER copy so the section is visible during
 * development. Replace them with real, approved client results before launch.
 */
export const transformations: Transformation[] = [
  {
    id: "client-1",
    name: "Client One",
    duration: "16 weeks",
    result: "Trained three times a week and progressed on every main lift.",
    testimonial: "Having a plan I could actually follow made the difference.",
    category: "strength",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "client-2",
    name: "Client Two",
    duration: "20 weeks",
    result: "Lost weight steadily without cutting out the food she enjoys.",
    testimonial: "The check-ins kept me honest on the weeks I wanted to quit.",
    category: "weight loss",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "client-3",
    name: "Client Three",
    duration: "12 weeks",
    result: "Built a routine that fits around shift work and family time.",
    testimonial: "Training finally stopped competing with the rest of my week.",
    category: "lifestyle",
    beforeImage: null,
    afterImage: null,
  },
];
