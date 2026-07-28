import { siteConfig } from "@/config/site";

/**
 * Single source of truth for every Instagram link on the site, so the profile
 * URL only ever lives in config/site.ts.
 */
export function buildInstagramUrl(): string {
  return siteConfig.instagramUrl;
}
