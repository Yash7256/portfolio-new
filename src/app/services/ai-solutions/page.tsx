import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMeta, organizationId } from "@/lib/site";

const description =
  "AI solutions and chatbot development from Anvik Labs — LLM integrations, RAG search, and automation built into real products. Start a project.";

export const meta: MetaFunction = () =>
  createMeta({
    title: "AI Solutions & Chatbot Development | Anvik Labs",
    description,
    path: "/services/ai-solutions",
  });

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Solutions & Chatbot Development",
  description,
  areaServed: "IN",
  provider: { "@id": organizationId },
};

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";

const included = [
  "LLM integration (OpenAI, Gemini, Anthropic)",
  "RAG pipelines & vector search",
  "AI-powered automation workflows",
  "Custom chatbots & copilots",
  "Prompt engineering & fine-tuning guidance",
  "Evaluation & safety review",
];

const process = [
  { step: "01", label: "Scope", desc: "Define the right problem for AI — not everything benefits from an LLM." },
  { step: "02", label: "Prototype", desc: "Fast proof-of-concept to validate quality and feasibility." },
  { step: "03", label: "Integrate", desc: "Build the AI feature into your product with proper error handling and fallbacks." },
  { step: "04", label: "Monitor", desc: "Evals, logging, and cost controls to keep it performing in production." },
];

const whyUs = [
  { title: "Product-led AI (not AI for its own sake)", desc: "We only add AI where it genuinely improves the user experience. No AI-washing." },
  { title: "We understand edge cases and failure modes", desc: "LLMs hallucinate. We design safeguards, evals, and fallbacks before they become user problems." },
  { title: "From MVP to production scale", desc: "We prototype fast and then harden the implementation — the same codebase, not a rewrite." },
];

export default function AiSolutionsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <JsonLd data={serviceJsonLd} />
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <p className={`${mono} text-neutral-500`}>Service [03] · Applied AI</p>
          <h1 className="mt-3 font-sans text-[clamp(2.25rem,10vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-foreground break-words">
            AI Solutions.
          </h1>
          <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-neutral-400">
            LLM-powered tools and automations built into real products.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-sans text-[13px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a project →
            </Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* LEFT — sticky panel */}
          <aside className="hidden md:flex md:w-[42%] lg:w-[40%] xl:w-[38%] shrink-0">
            <div className="sticky top-[var(--header-height)] h-[calc(100svh-var(--header-height))] w-full flex flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              <div>
                <p className={`${mono} text-neutral-500`}>Service [03]</p>
                <p className={`${mono} mt-1 text-neutral-600`}>Applied AI</p>
              </div>

              <div>
                <h1 className="font-sans text-[clamp(2.75rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                  AI Solutions.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  LLM-powered tools and automations built into real products.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-sans text-[14px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start a project
                </Link>
              </div>

              <p className={`${mono} text-neutral-600`}>Anvik Labs / India</p>
            </div>
          </aside>

          {/* RIGHT — scrollable content */}
          <div className="flex-1 divide-y divide-white/10 border-t border-white/10 md:border-t-0">

            {/* Overview */}
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className={`${mono} mb-5 text-neutral-500`}>Overview</p>
              <div className="max-w-[64ch] space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
                <p>
                  AI is most valuable when it solves a real problem in a real product — not when it
                  appears as a badge on a landing page. We work with founders and teams to identify
                  where language models, retrieval systems, and automation genuinely improve the
                  experience, and then we build it.
                </p>
                <p>
                  We have shipped production AI features including semantic search, document
                  summarisation, structured data extraction, and conversational copilots. We use
                  the best available models for each task and build the evaluation and monitoring
                  infrastructure alongside.
                </p>
                <p>
                  This service suits product teams adding AI to an existing product, or founders
                  building AI-first from the ground up. We work with OpenAI, Gemini, Anthropic,
                  and open-source models.
                </p>
              </div>
            </section>

            {/* What's included */}
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className={`${mono} mb-5 text-neutral-500`}>What&apos;s included</p>
              <ul className="space-y-3.5 sm:space-y-4" aria-label="Deliverables">
                {included.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent pl-3.5 sm:pl-4 text-[14px] sm:text-[15px] leading-snug text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className={`${mono} mb-6 sm:mb-8 text-neutral-500`}>Process</p>
              <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {process.map(({ step, label, desc }) => (
                  <div key={step} className="border border-white/10 p-4 sm:p-5">
                    <p className="font-mono text-[11px] text-neutral-600">{step}</p>
                    <p className="mt-2.5 font-sans text-[15px] sm:text-[16px] font-semibold text-foreground">{label}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Anvik Labs */}
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className={`${mono} mb-5 text-neutral-500`}>Why Anvik Labs</p>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="py-4 sm:py-5">
                    <p className="font-sans text-[14px] sm:text-[15px] font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-neutral-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA row */}
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 font-sans text-[13px] sm:text-[14px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start a project <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/#services"
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-400 transition-colors hover:text-accent"
                >
                  ← All services
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
