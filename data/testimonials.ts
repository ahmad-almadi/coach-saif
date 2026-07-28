import type { Testimonial } from "@/types";

/**
 * Client testimonials. Cards show the client's initial instead of a photo.
 */
export const testimonials: Testimonial[] = [
  {
    id: "ahmad-almadi",
    name: "Ahmad Almadi",
    duration: "Coached for 6 months",
    quote:
      "The biggest difference was finally having a plan I could follow consistently. The weekly feedback helped me understand what to improve without feeling overwhelmed.",
    rating: 5,
  },
  {
    id: "ayham-kurdi",
    name: "Ayham Kurdi",
    duration: "Coached for 4 months",
    quote:
      "Training around shift work was always my excuse. The programme was built around my week, so I stopped falling behind after busy days.",
    rating: 5,
  },
  {
    id: "suhaib-ali",
    name: "Suhaib Ali",
    duration: "Coached for 3 months",
    quote:
      "I expected a strict diet. Instead I got practical guidance that worked with the food I already eat, which made it far easier to stay on track.",
    rating: 4,
  },
  {
    id: "taj-bdour",
    name: "Taj Bdour",
    duration: "Coached for 8 months",
    quote:
      "Being able to send a quick question during the week meant small problems never turned into missed weeks of training.",
    rating: 5,
  },
];
