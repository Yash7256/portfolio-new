import { organizationId, site } from "@/lib/site";
import type { Service } from "@/data/services";
import type { JournalArticle, JournalPost } from "@/data/journal";
import type { Project } from "@/data/projects";

export function createServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    areaServed: site.areaServed,
    provider: { "@id": organizationId },
  };
}

export function createFaqJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/services/${service.slug}#faq`,
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createArticleJsonLd(article: JournalArticle | JournalPost) {
  if (!article.datePublished || !article.sections) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.url}/journal/${article.id}#article`,
    headline: article.title,
    description: "description" in article ? article.description : article.excerpt,
    image: article.image ? `${site.url}${article.image}` : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: article.author,
      ...(article.authorRole ? { jobTitle: article.authorRole } : {}),
      ...(article.authorUrl ? { url: article.authorUrl } : {}),
    },
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${site.url}/journal/${article.id}`,
  };
}

export function createWorkJsonLd(work: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}/works/${work.id}#work`,
    name: work.name,
    description: work.description,
    url: `${site.url}/works/${work.id}`,
    image: `${site.url}${work.coverImage}`,
    dateCreated: work.year,
    creator: { "@id": organizationId },
    keywords: [work.genre, work.workType],
  };
}
