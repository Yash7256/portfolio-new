import type { Config } from "@react-router/dev/config";
import journal from "./src/data/journal";
import { projects } from "./src/data/projects";

export default {
  appDirectory: "src",
  ssr: true,
  prerender: [
    "/",
    "/works",
    ...projects.map((project) => `/works/${project.id}`),
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
