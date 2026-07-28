# Online Personal Training Website

A premium, dark-themed marketing website for an online personal trainer based in
Jordan. Built with Next.js (App Router), TypeScript, Tailwind CSS and GSAP
ScrollTrigger, with three cinematic video scroll-scrubbing sections.

Every call to action opens the coach's Instagram profile. There is no backend,
database, login or payment processing.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Install and run

```bash
npm install       # install dependencies
npm run dev       # start the development server on http://localhost:3000
npm run build     # create a production build
npm run start     # serve the production build
npm run lint      # ESLint
npm run typecheck # TypeScript, no emit

npm run optimize:videos  # re-encode the clips in vids/ for smooth scrubbing
```

## Project structure

```
app/
  layout.tsx                  Root layout, font, metadata
  page.tsx                    Page composition (server component)
  globals.css                 Design tokens, base styles, scrub layout CSS
components/
  layout/
    Navbar.tsx                Sticky navigation (client)
    MobileMenu.tsx            Accessible mobile drawer (client)
    Footer.tsx                Footer
  sections/
    HeroScrubSection.tsx      Cinematic hero, scroll-scrubbed video
    TrustStats.tsx            Placeholder trust statistics
    CoachingMethodScrubSection.tsx  Four-stage pinned story (client)
    AudienceSection.tsx       Who the coaching is for
    CoachingFeatures.tsx      What is included
    ResultsScrubSection.tsx   Client journey, scroll-scrubbed video
    Transformations.tsx       Before/after cards
    TransformationCard.tsx
    Testimonials.tsx          Testimonial grid
    TestimonialCard.tsx
    PricingSection.tsx        Packages + billing period state (client)
    PricingCard.tsx
    CoachSection.tsx          About the coach
    FAQSection.tsx            FAQ wrapper
    FAQAccordion.tsx          Accessible accordion (client)
    FinalCTA.tsx              Closing call to action
  shared/
    ScrollScrubVideo.tsx      GSAP video scrubbing engine (client)
    ScrubSteps.tsx            Step layers used inside scrub sections
    SectionHeading.tsx
    InstagramButton.tsx       Every Instagram CTA goes through here
    PricingPeriodToggle.tsx   Monthly / 3-month switch (client)
    FloatingInstagramButton.tsx
    Reveal.tsx                Restrained scroll reveals (client)
config/
  site.ts                     Brand, contact, navigation, media paths
data/
  pricing.ts  statistics.ts  features.ts  audience.ts  method.ts
  transformations.ts  testimonials.ts  faq.ts  coach.ts
  hero.ts  results.ts
lib/
  instagram.ts                Instagram profile URL builder
  ui.ts                       Shared button and card classes
  cn.ts                       Class name joiner
types/
  index.ts                    Shared types
scripts/
  optimize-videos.mjs         Re-encodes the clips for scrubbing, extracts posters
public/
  videos/    fitness-hero.mp4  fitness-method.mp4  fitness-results.mp4
  posters/   fitness-hero.webp fitness-method.webp fitness-results.webp
  images/    coach.webp  transformations/  testimonials/
```

## Where to place the videos

Put your source clips in `vids/` as `vid-1.mp4`, `vid-2.mp4` and `vid-3.mp4`,
then run:

```bash
npm run optimize:videos
```

That writes scrub-ready files and matching poster frames:

```
public/videos/fitness-hero.mp4      public/posters/fitness-hero.webp
public/videos/fitness-method.mp4    public/posters/fitness-method.webp
public/videos/fitness-results.mp4   public/posters/fitness-results.webp
```

FFmpeg does not need to be installed: the script uses the `ffmpeg-static`
binary that comes with the dev dependencies. Source file names, output names and
poster timestamps are configured in `scripts/optimize-videos.mjs`.

You can also drop hand-prepared files straight into `public/videos` and
`public/posters` using those names. To use different paths or add a WebM
version, edit `scrubMedia` in `config/site.ts`.

Posters are shown before the video is ready, when reduced motion is enabled, and
if a video fails to load.

## Editing content

| What you want to change | File |
| --- | --- |
| Brand name, coach name, email, Instagram profile, social links | `config/site.ts` |
| Navigation links | `config/site.ts` (`navLinks`) |
| Video and poster paths, pinned scroll distances | `config/site.ts` (`scrubMedia`, `scrubScrollLengths`) |
| Package names, prices, features, CTA labels | `data/pricing.ts` |
| Trust statistics | `data/statistics.ts` |
| Included features | `data/features.ts` |
| Who the coaching is for | `data/audience.ts` |
| The four coaching stages | `data/method.ts` |
| Client transformations | `data/transformations.ts` |
| Testimonials | `data/testimonials.ts` |
| FAQ questions and answers | `data/faq.ts` |
| Coach bio, qualifications, philosophy | `data/coach.ts` |
| Hero benefit blocks | `data/hero.ts` |
| Results section messages | `data/results.ts` |

### Change the coach name

`config/site.ts`:

```ts
export const siteConfig = {
  name: "Coach Saif",   // brand shown in the navigation and footer
  coachName: "Saif",    // used in the About section
  ...
};
```

### Change the Instagram profile

`config/site.ts`:

```ts
instagramHandle: "@saifolifts",
instagramUrl: "https://www.instagram.com/saifolifts/",
```

`instagramUrl` is the target of every CTA on the site, the floating button and
both footer links. It is read through `lib/instagram.ts`, so this is the only
place it needs changing. `instagramHandle` is display text only.

### Change package prices

`data/pricing.ts`. Prices are plain numbers in Jordanian dinars:

```ts
{
  id: "starter",
  monthlyPrice: 49,     // shown as "49 JOD/month"
  quarterlyPrice: 135,  // shown as "135 JOD every 3 months"
}
```

Remove `quarterlyPrice` from a plan to calculate the three-month total from
`QUARTERLY_DISCOUNT` instead. Savings are worked out automatically and shown on
the card when the three-month option is selected. Every plan CTA opens Instagram.

### Replace the transformations

Add approved photos to `public/images/transformations`, then update
`data/transformations.ts`:

```ts
{
  id: "client-1",
  name: "Sara",
  duration: "16 weeks",
  result: "Trained three times a week and progressed on all main lifts.",
  testimonial: "Having a plan I could follow made the difference.",
  category: "strength",
  beforeImage: "/images/transformations/client-1-before.webp",
  afterImage: "/images/transformations/client-1-after.webp",
}
```

Leaving the image fields as `null` keeps a labelled placeholder panel, so the
layout never breaks while you collect photos.

### Replace the testimonials

Update `data/testimonials.ts`. Cards show the client's initial instead of a
photo, so no images are needed. Only publish quotes you have permission to use.

### Change the social links

`config/site.ts`: `instagramUrl`. It defaults to `#`. Lucide no longer ships
brand marks, so generic icons are used with visible text labels for screen
readers.

### Add the coach photo

Place the image at `public/images/coach.webp` and set it in `data/coach.ts`:

```ts
image: "/images/coach.webp",
```

## Why the videos must be re-encoded

Scrubbing asks the browser to seek constantly, and every seek decodes from the
nearest keyframe. Two things decide whether that feels smooth:

- **Resolution.** A 1440p or 4K clip is far too expensive to decode repeatedly.
  720p is plenty for a background layer sitting behind text.
- **Keyframe interval.** Default encodes place a keyframe every 2 to 10 seconds,
  so each seek decodes hundreds of frames. A keyframe every few frames makes
  seeking almost free.

`npm run optimize:videos` handles both. Its settings live at the top of
`scripts/optimize-videos.mjs`:

```js
const config = {
  width: 1280, // output width
  fps: 25,
  gop: 5,      // keyframe interval in frames: lower = smoother, larger file
  crf: 26,     // quality: higher = smaller file
};
```

The equivalent manual commands, if you prefer a system FFmpeg:

```bash
ffmpeg -i input.mp4 -an -vf "scale=1280:-2,fps=25" \
  -c:v libx264 -preset slow -crf 26 -g 5 -keyint_min 5 -sc_threshold 0 \
  -movflags +faststart public/videos/fitness-hero.mp4

ffmpeg -ss 00:00:01.5 -i input.mp4 -frames:v 1 -vf "scale=1280:-2" \
  -c:v libwebp -quality 72 public/posters/fitness-hero.webp
```

Guidelines: keep clips between 8 and 20 seconds, aim for 3 MB to 6 MB each, drop
the audio track (the videos are always muted) and keep `+faststart` so the index
is read before the media data.

## How the video scrubbing works

`components/shared/ScrollScrubVideo.tsx` owns the behaviour:

- GSAP plugins are registered inside a client-side effect only.
- The section is pinned by ScrollTrigger and scroll progress drives a proxy
  value, which records the wanted playback time.
- A single `gsap.ticker` callback performs the seek, at most once per animation
  frame, and never while a previous seek is still in progress. Queued seeks are
  the usual cause of stuttering and of the picture lagging behind the scroll.
- The video never plays: it is muted, `playsInline`, and seeking is blocked until
  metadata reports a usable duration. Metadata is requested first; the clip
  switches to `preload="auto"` once it is close enough to be scrubbed, because
  seeking inside buffered data is instant.
- `ScrollTrigger.refresh()` runs once metadata loads, because pinned distances
  depend on measured heights.
- Scroll progress is written to the DOM through refs and GSAP. React state is
  never updated during scrolling.
- `gsap.matchMedia()` provides shorter pinned distances on small screens and
  disables pinning entirely when `prefers-reduced-motion: reduce` is set.
- Everything is cleaned up on unmount through `gsap.context().revert()`.

Fallback behaviour is CSS driven. The markup renders as a readable stacked
layout (media block, then each text block in normal flow) before JavaScript
loads, when reduced motion is requested, and if a video is missing or cannot be
seeked. `data-scrub-mode="scrub"` is only added once GSAP is active.

Adjust pinned scroll distance in `config/site.ts`:

```ts
export const scrubScrollLengths = {
  hero: { desktop: "+=250%", mobile: "+=140%" },
  ...
};
```

## Deployment

The site is fully static apart from the standard Next.js runtime, so any Node
host works.

**Vercel**

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import the project in Vercel. The framework is detected automatically.
3. Deploy. No environment variables are needed.

**Any Node host**

```bash
npm ci
npm run build
npm run start   # serves on port 3000, override with -p
```

Large video files count towards repository size. If your host limits it, upload
the clips to object storage or a CDN and point `scrubMedia` in `config/site.ts`
at the full URLs instead.

## Pre-launch checklist

- [ ] Email address in `config/site.ts` (still `coach@example.com`)
- [ ] Privacy Policy and Terms URLs in `config/site.ts` (still `#`)
- [ ] Add real client results to `data/transformations.ts`, then re-enable
      `<Transformations />` in `app/page.tsx`
