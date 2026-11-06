import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Web Development | Anvik Labs",
    description:
      "Fast, accessible, and production-ready web products built with modern React. Custom apps, TypeScript architecture, performance optimisation, and full deployment.",
    path: "/services/web-development",
  });

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";

const included = [
  "Custom React / Next.js / Vite apps",
  "TypeScript codebase architecture",
  "Responsive mobile-first development",
  "Performance optimisation (Core Web Vitals)",
  "API integration & backend wiring",
  "Deployment setup (Vercel, Firebase, Railway)",
];

const process = [
  { step: "01", label: "Discovery", desc: "Understand goals, constraints, and existing tech stack." },
  { step: "02", label: "Architecture", desc: "Define tech choices, folder structure, and data model." },
  { step: "03", label: "Build", desc: "Iterative development with continuous feedback." },
  { step: "04", label: "Launch", desc: "CI/CD, deployment, monitoring, and handoff." },
];

const whyUs = [
  { title: "Small team moves fast", desc: "No handoffs between departments — the same engineers own the work end to end." },
  { title: "We write clean, maintainable code", desc: "TypeScript, documented APIs, and test coverage mean you can extend it later." },
  { title: "Full-stack capability", desc: "From React UI to backend APIs and infrastructure — we handle the whole chain." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-10 sm:px-[4vw] md:hidden">
          <p className={`${mono} text-neutral-500`}>Service [01] · Engineering</p>
          <h1 className="mt-4 font-sans text-[clamp(3rem,14vw,6rem)] font-medium leading-[0.88] tracking-[-0.05em] text-foreground">
            Web Development.
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed text-neutral-400">
            Fast, accessible, and production-ready web products built with modern React.
          </p>
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
                <h1 className="font-sans text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
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
            <section className="px-4 py-14 sm:px-[4vw] md:px-8 lg:px-12 lg:py-16">
              <p className={`${mono} mb-6 text-neutral-500`}>Overview</p>
              <div className="max-w-[64ch] space-y-5 text-[15px] leading-relaxed text-neutral-300">
                <p>
                  We build web products that people actually want to use — fast, accessible, and
                  production-ready from day one. Whether you need a marketing site, a complex SaaS
                  dashboard, or a custom internal tool, we work in modern React with TypeScript
                  throughout.
                </p>
                <p>
                  Every project starts with an understanding of your users and your constraints. We
                  favour pragmatic choices over fashionable ones, and we write code that the next
                  developer (or your future self) will be able to understand.
                </p>
                <p>
                  This service is best suited for founders and product teams who want a trusted
                  engineering partner — not a code factory. We stay small deliberately so we can
                  stay accountable.
                </p>
              </div>
            </section>

            {/* What's included */}
            <section className="px-4 py-14 sm:px-[4vw] md:px-8 lg:px-12 lg:py-16">
              <p className={`${mono} mb-6 text-neutral-500`}>What&apos;s included</p>
              <ul className="space-y-4" aria-label="Deliverables">
                {included.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent pl-4 text-[15px] leading-snug text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section className="px-4 py-14 sm:px-[4vw] md:px-8 lg:px-12 lg:py-16">
              <p className={`${mono} mb-8 text-neutral-500`}>Process</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {process.map(({ step, label, desc }) => (
                  <div key={step} className="border border-white/10 p-5">
                    <p className="font-mono text-[11px] text-neutral-600">{step}</p>
                    <p className="mt-3 font-sans text-[16px] font-semibold text-foreground">{label}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Anvik Labs */}
            <section className="px-4 py-14 sm:px-[4vw] md:px-8 lg:px-12 lg:py-16">
              <p className={`${mono} mb-6 text-neutral-500`}>Why Anvik Labs</p>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="py-5">
                    <p className="font-sans text-[15px] font-semibold text-foreground">{title}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA row */}
            <section className="px-4 py-14 sm:px-[4vw] md:px-8 lg:px-12 lg:py-16">
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[14px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start a project <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/#services"
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-accent"
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
