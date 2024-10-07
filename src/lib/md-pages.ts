import { GoogleCookiesPrivacy } from "@/content";
import type { MDXMetadata } from "./md-types";

export const mdxPages: MDXMetadata[] = [
  {
    slug: "google-third-party-cookies",
    title: "Welcome to Google's Privacy Sandbox!",
    icons: [],
    cover:
      "https://media.licdn.com/dms/image/v2/D4D22AQHcGR-BqRfd7Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1728326223704?e=1730937600&v=beta&t=uCOehqDlKw_zNw6oEdyEULpwgmwLGKETI3s_GZH-KO8",
    description:
      'Google is about to initate "Privacy Sandbox" to enforce some breaking changes of third-party cookies behaviour.',
    authoredAt: "07/10/2024",
    component: GoogleCookiesPrivacy,
  },
];
