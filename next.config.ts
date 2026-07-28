import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery is local, so only the built-in loader is needed.
    formats: ["image/webp"],
  },
};

export default nextConfig;
