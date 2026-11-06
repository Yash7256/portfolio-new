import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMeta, organizationId, site } from "@/lib/site";

const description =
  "Anvik Labs designs websites and apps for startups and small businesses: user flows, wireframes, Figma interfaces and design systems.";

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";

export const meta: MetaFunction = () =>
  createMeta({
    title: "UI/UX & Product Design Services | Anvik Labs",
    description,
    path: "/services/product-design",
  });

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/services/product-design#service`,
  name: "UI/UX & Product Design",
  serviceType: "UI/UX design",
  description,
  url: `${site.url}/services/product-design`,
  areaServed: "Worldwide",
  provider: { "@id": organizationId },
};

const overview = [
  "We design websites, web apps and mobile interfaces for startups, small businesses and individuals around the world. That covers user flows, wireframes, screen designs in Figma and, when a project needs it, a small design system.",
  "Every project starts with a conversation about your users, your goals and what already exists. We then share a plan, a timeline and a price range in writing before design work begins.",
  "Our designer works in the same team as our developers, so designs are made with the build in mind.",
];

const included = [
  "Understanding your users and reviewing similar products",
  "Page structure and user flows",
  "Wireframes and clickable prototypes",
  "Screen designs in Figma",
  "Design systems: colours, type, components",
  "Feedback rounds and revisions",
  "Organised Figma files for developers",
];

const process = [
  { step: "01", label: "Discuss", desc: "You explain the idea. We ask about users, goals, budget and deadline." },
  { step: "02", label: "Plan", desc: "We share scope, timeline and cost in writing before work starts." },
  { step: "03", label: "Design", desc: "We move from wireframes to full screens, sharing progress at each stage." },
  { step: "04", label: "Refine", desc: "We collect your feedback, revise the designs and test them with a few real users where the project allows." },
  { step: "05", label: "Hand off", desc: "You get organised Figma files. We can also build the design ourselves if you want." },
];

const whyUs = [
  { title: "Design and development together", desc: "Our designer and developer work on the same project, so nothing gets lost between design and code." },
  { title: "We design our own products", desc: "We designed and shipped products like CyberSec Toolkit and Designer's Room, so we know how designs hold up in real use." },
  { title: "Clear communication", desc: "No jargon. Clear plans and honest timelines." },
  { title: "Small team", desc: "Fewer handoffs. You know who is working on your project." },
];

const tools = [
  { area: "Design", tools: "Figma, FigJam" },
  { area: "Deliverables", tools: "Wireframes, prototypes, design systems, handoff files" },
  { area: "Works with", tools: "Your developers or ours" },
];

const faqs = [
  {
    q: "How long does a design project take?",
    a: "It depends on the number of screens and how much research is needed. A small project can take a couple of weeks. We give an estimate after the first discussion.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope. We share a written quote before starting.",
  },
  {
    q: "Can you redesign my existing website or app?",
    a: "Yes. We review what you have, find what is not working and design improvements.",
  },
  {
    q: "Can you also build the design?",
    a: "Yes. Our developers can build it, or we can hand the Figma files to your own team.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients anywhere by video call, chat and email.",
  },
];

export default function ProductDesignPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <JsonLd data={serviceJsonLd} />
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <p className={`${mono} text-neutral-500`}>Service [02] · Design</p>
          <h1 className="mt-3 font-sans text-[clamp(2.25rem,10vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-foreground break-words">
            Product Design.
          </h1>
          <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-neutral-400">
            Research-grounded interfaces that feel inevitable to use.
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
                <p className={`${mono} text-neutral-500`}>Service [02]</p>
                <p className={`${mono} mt-1 text-neutral-600`}>Design</p>
              </div>

              <div>
                <h1 className="font-sans text-[clamp(2.75rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                  Product Design.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  Research-grounded interfaces that feel inevitable to use.
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
                  Good product design is invisible. Users accomplish what they set out to do without
                  friction, confusion, or second-guessing. We get there through research first —
                  understanding the people who will use the product before we open Figma.
                </p>
                <p>
                  We work from information architecture through to pixel-perfect high-fidelity UI,
                  always building a coherent design system alongside the screens so the product can
                  grow without drifting visually or structurally.
                </p>
                <p>
                  This service suits early-stage founders shaping their first product, as well as
                  established teams whose existing product has grown beyond its original design
                  language.
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
