import type { MetaFunction } from "react-router";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";
import { createMeta } from "@/lib/site";

const service = getService("ai-solutions");

export const meta: MetaFunction = () =>
  createMeta({ title: service.title, description: service.description, path: `/services/${service.slug}` });

export default function AiSolutionsPage() {
  return <ServicePage service={service} index={2} />;
}
