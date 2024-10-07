import { GoogleCookiesPrivacy } from "@/content";
import type { MDXMetadata } from "./md-types";

export const mdxPages: MDXMetadata[] = [
  {
    slug: "google-third-party-cookies",
    title: "Welcome to Google's Privacy Sandbox!",
    icons: [],
    description:
      'Google is about to initate "Privacy Sandbox" to enforce some breaking changes of third-party cookies behaviour.',
    authoredAt: "07/10/2024",
    component: GoogleCookiesPrivacy,
  },
];
