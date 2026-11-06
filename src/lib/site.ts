import type { MetaDescriptor } from "react-router";

export const site = {
  name: "Anvik Labs",
  title: "Anvik Labs | Product Design & Engineering",
  description:
    "Anvik Labs is a product design and engineering studio building clear, user-friendly interfaces for SaaS, EdTech, e-commerce, and cybersecurity products.",
  url: "https://anviklabs.com",
  ogImage: "/og.png",
  ogImageWidth: "1672",
  ogImageHeight: "941",
  ogImageType: "image/png",
  ogImageAlt: "Anvik Labs — Product Design & Engineering Studio",
};

export interface PageMetaOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}

export function createMeta(options: PageMetaOptions = {}): MetaDescriptor[] {
  const title = options.title ?? site.title;
  const description = options.description ?? site.description;
  const path = options.path ?? "";
  const canonicalUrl = `${site.url}${path.startsWith("/") ? path : path ? `/${path}` : ""}`;
  const image = options.image ?? site.ogImage;
  const imageUrl = image.startsWith("http")
    ? image
    : `${site.url}${image.startsWith("/") ? image : `/${image}`}`;
  const imageAlt = options.imageAlt ?? title;

  return [
    { title },
    { name: "description", content: description },
    { name: "application-name", content: site.name },
    { name: "author", content: site.name },
    { name: "theme-color", content: "#080808" },
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:type", content: site.ogImageType },
    { property: "og:image:width", content: site.ogImageWidth },
    { property: "og:image:height", content: site.ogImageHeight },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}
