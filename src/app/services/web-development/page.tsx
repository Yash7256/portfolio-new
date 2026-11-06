import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMeta, organizationId, site } from "@/lib/site";

const description =
  "Web development for startups in India — fast, accessible React and TypeScript websites, apps, and dashboards built to scale. Start a project.";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Web Development for Startups and Buisnesses | Anvik Labs | Technology Labs",
    description,
    path: "/services/web-development",
  });

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/services/web-development#service`,
  name: "Web Development",
  serviceType: "Web development",
  description,
  url: `${site.url}/services/web-development`,
  areaServed: "Worldwide",
  provider: { "@id": organizationId },
};

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";
const included = [
  "Business websites, portfolios and landing pages",
  "Web apps, dashboards and customer portals",
  "Internal tools and admin panels",
  "Backend APIs, login systems and databases",
  "Third-party integrations (payments, email, maps and more)",
  "Fixes, new features and migrations for existing projects",
];

const process = [
  { step: "01", label: "Discuss", desc: "You explain the idea. We ask about users, budget and deadline." },
  { step: "02", label: "Plan", desc: "We share scope, timeline and cost in writing before work starts." },
  { step: "03", label: "Build", desc: "We build in small stages and show you progress along the way." },
  { step: "04", label: "Launch", desc: "We deploy, test and walk you through how everything works." },
  { step: "05", label: "Support", desc: "Bug fixes after launch, and ongoing maintenance if you want it." },
];

const whyUs = [
  { title: "Design and development together", desc: "Our UI/UX designer and developer work on the same project." },
  { title: "We build our own products", desc: "We run CyberSec Toolkit, so we know what keeping a live product running involves." },
  { title: "Plain communication", desc: "No jargon. Clear plans and honest timelines." },
  { title: "Small team", desc: "Fewer handoffs. You know who is working on your project." },
];

// New: tools section
const stack = [
  { area: "Frontend", tools: "React, Next.js, TypeScript, Tailwind CSS" },
  { area: "Backend", tools: "Node.js, REST APIs" },
  { area: "Databases", tools: "PostgreSQL, MongoDB" },
  { area: "Hosting", tools: "Vercel, AWS, Firebase, Railway" },
];

// New: FAQ (also use for FAQPage JSON-LD)
const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A small website can take a few weeks. Larger apps take longer. We give an estimate after the first discussion.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on pages, features and integrations. We share a written quote before starting.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients anywhere and keep in touch by video call, chat and email.",
  },
  {
    q: "Can you improve my existing website?",
    a: "Yes. We can fix issues, add features or rebuild parts of it.",
  },
  {
    q: "Will I own the code?",
    a: "Yes. Ownership terms are agreed before the project starts.",
  },
];
export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <JsonLd data={serviceJsonLd} />
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <p className={`${mono} text-neutral-500`}>Service [01] · Engineering</p>
          <h1 className="mt-3 font-sans text-[clamp(2.25rem,10vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-foreground break-words">
            Web Development.
          </h1>
          <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-neutral-400">
            Fast, accessible, and production-ready web products built with modern React.
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
                <p className={`${mono} text-neutral-500`}>Service [01]</p>
                <p className={`${mono} mt-1 text-neutral-600`}>Engineering</p>
              </div>

              <div>
                <h1 className="font-sans text-[clamp(2.75rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                  Web Development.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  Fast, accessible, and production-ready web products built with modern React.
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
                  We design and build websites and web applications for startups, small businesses and individuals around the world. That includes business websites, dashboards, web apps and internal tools, built with React, Next.js, Node.js and TypeScript.
                </p>
                <p>
                  Every project starts with a conversation about what you need and what you already have. We then suggest a plan, a rough timeline and a price range before any work begins. If a simple site is enough, we will say so.
                </p>
                <p>
                  We are a small, India-based team that works with clients remotely. You talk directly to the people building your project.
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
