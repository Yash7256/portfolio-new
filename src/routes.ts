import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("app/page.tsx"),
  route("works", "app/works/page.tsx"),
  route("works/:slug", "app/works/[slug]/page.tsx"),
  route("gallery", "app/gallery/page.tsx"),
  route("contact", "app/contact/page.tsx"),
  route("challenge", "app/challenge/page.tsx"),
  route("community", "app/community/page.tsx"),
] satisfies RouteConfig;
