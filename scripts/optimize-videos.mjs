/**
 * Prepares the scroll-scrub clips.
 *
 * Scrubbing means the browser is asked to seek constantly, and every seek has
 * to decode from the nearest keyframe. Source clips (here: 2560x1440) are far
 * too heavy for that, so each file is re-encoded with:
 *
 *   - a smaller resolution, since the video only ever sits behind text
 *   - a keyframe every few frames (-g), so any seek decodes very little
 *   - no audio, because the clips are always muted
 *   - +faststart, so the index is read before the media data
 *
 * Each clip is also trimmed to a short, usable segment instead of its full
 * length (see `clips` below), which slows the scrub down and cuts file size.
 *
 * A real poster frame is also extracted from each clip.
 *
 * Usage: npm run optimize:videos
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const root = process.cwd();

/**
 * Source clip -> output name.
 *
 * `start` / `duration` (seconds) trim the source. The whole clip is mapped onto
 * a section's pinned scroll distance, so a shorter clip means less video time
 * per pixel of scroll: the footage reads slower and calmer while the scroll
 * distance stays the same. `posterAt` is an offset inside the trimmed segment.
 */
const clips = [
  {
    source: "vids/vid-1.mp4",
    name: "fitness-hero",
    start: 2,
    duration: 8,
    posterAt: 1,
  },
  {
    source: "vids/vid-2.mp4",
    name: "fitness-method",
    start: 2,
    duration: 8,
    posterAt: 1,
  },
  {
    source: "vids/vid-3.mp4",
    name: "fitness-results",
    start: 1.5,
    duration: 7,
    posterAt: 1,
  },
];

const config = {
  /** Output width. 1280 is plenty for a background layer. */
  width: 1280,
  fps: 25,
  /** Keyframe interval in frames. Lower = smoother scrubbing, larger file. */
  gop: 5,
  /** Quality. Higher number = smaller file. */
  crf: 26,
};

const run = (args) => {
  execFileSync(ffmpegPath, ["-hide_banner", "-loglevel", "error", "-y", ...args], {
    stdio: "inherit",
  });
};

const sizeMb = (file) => (statSync(file).size / 1024 / 1024).toFixed(1);

mkdirSync(path.join(root, "public/videos"), { recursive: true });
mkdirSync(path.join(root, "public/posters"), { recursive: true });

for (const clip of clips) {
  const source = path.join(root, clip.source);

  if (!existsSync(source)) {
    console.warn(`skipped ${clip.source}: file not found`);
    continue;
  }

  const video = path.join(root, `public/videos/${clip.name}.mp4`);
  const poster = path.join(root, `public/posters/${clip.name}.webp`);

  // `-ss` before `-i` seeks the input; with a re-encode it stays frame accurate.
  const trim = [
    ...(clip.start ? ["-ss", String(clip.start)] : []),
    "-i",
    source,
    ...(clip.duration ? ["-t", String(clip.duration)] : []),
  ];

  run([
    ...trim,
    "-an",
    "-sn",
    "-vf",
    `scale=${config.width}:-2:flags=lanczos,fps=${config.fps}`,
    "-c:v",
    "libx264",
    "-profile:v",
    "high",
    "-pix_fmt",
    "yuv420p",
    "-preset",
    "slow",
    "-crf",
    String(config.crf),
    "-g",
    String(config.gop),
    "-keyint_min",
    String(config.gop),
    "-sc_threshold",
    "0",
    "-movflags",
    "+faststart",
    video,
  ]);

  // Taken from the trimmed output, so the poster always shows a frame that the
  // scrub actually reaches.
  run([
    "-ss",
    String(clip.posterAt),
    "-i",
    video,
    "-frames:v",
    "1",
    "-vf",
    `scale=${config.width}:-2:flags=lanczos`,
    "-c:v",
    "libwebp",
    "-quality",
    "72",
    poster,
  ]);

  console.log(
    `${clip.name}: ${clip.duration ?? "full"}s, video ${sizeMb(video)}MB, poster ${sizeMb(poster)}MB`,
  );
}
