import { organizationId, site } from "@/lib/site";
import type { Service } from "@/data/services";

export function createServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    areaServed: "Worldwide",
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
