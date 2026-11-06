import type { Config } from "@react-router/dev/config";
import journal from "./src/data/journal";
import { works } from "./src/data/works";

export default {
  appDirectory: "src",
  ssr: true,
  prerender: [
    "/",
    "/works",
    ...works.map((work) => `/works/${work.slug}`),
    "/contact",
    "/journal",
    ...journal
      .filter((post) => !post.draft && !post.externalUrl)
      .map((post) => `/journal/${post.id}`),
    "/services/web-development",
    "/services/product-design",
    "/services/ai-solutions",
    "/services/website-maintenance",
    "/sitemap.xml",
  ],
} satisfies Config;
