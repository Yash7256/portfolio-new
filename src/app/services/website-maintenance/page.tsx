import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Website Maintenance | Anvik Labs",
    description:
      "Ongoing care so your product stays fast, secure, and up to date. Dependency updates, performance monitoring, bug fixes, and hosting management.",
    path: "/services/website-maintenance",
  });

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";

const included = [
  "Dependency & security updates",
  "Performance monitoring & CWV fixes",
  "Content & copy updates",
  "Bug fixes & minor feature additions",
  "Analytics review & reporting",
  "Hosting & uptime management",
];

const process = [
  { step: "01", label: "Audit", desc: "Review the current state: dependencies, performance, security, and content." },
  { step: "02", label: "Prioritise", desc: "Rank issues by risk and impact so the most important things get fixed first." },
  { step: "03", label: "Fix", desc: "Implement changes with proper testing before deployment." },
  { step: "04", label: "Report", desc: "Monthly summary of what was done, what's upcoming, and current metrics." },
];

const whyUs = [
  { title: "Same team that built it maintains it", desc: "No knowledge transfer overhead. We understand every part of your codebase already." },
  { title: "Proactive not reactive", desc: "We flag issues before they become incidents — not after a user reports a broken page." },
  { title: "No retainer lock-in", desc: "Month-to-month arrangements. If you need to pause or stop, that's always straightforward." },
];

export default function WebsiteMaintenancePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-10 sm:px-[4vw] md:hidden">
          <p className={`${mono} text-neutral-500`}>Service [04] · Care</p>
          <h1 className="mt-4 font-sans text-[clamp(2.4rem,11vw,6rem)] font-medium leading-[0.88] tracking-[-0.05em] text-foreground">
            Website Maintenance.
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed text-neutral-400">
            Ongoing care so your product stays fast, secure, and up to date.
          </p>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* LEFT — sticky panel */}
          <aside className="hidden md:flex md:w-[42%] lg:w-[40%] xl:w-[38%] shrink-0">
            <div className="sticky top-[var(--header-height)] h-[calc(100svh-var(--header-height))] w-full flex flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              <div>
                <p className={`${mono} text-neutral-500`}>Service [04]</p>
                <p className={`${mono} mt-1 text-neutral-600`}>Care</p>
              </div>

              <div>
                <h1 className="font-sans text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                  Website Maintenance.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  Ongoing care so your product stays fast, secure, and up to date.
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
                  A website that was fast and secure on launch day will not stay that way without
                  attention. Dependencies age, security vulnerabilities emerge, and performance
                  degrades as content grows. Maintenance is the work that keeps what you shipped
                  working the way you intended.
                </p>
                <p>
                  We handle everything from routine dependency updates and security patching to
                  content changes, bug fixes, and minor feature additions — documented in a monthly
                  report so you always know what was done and why.
                </p>
                <p>
                  This service is best for companies who have a live product and want an ongoing
                  technical partner — especially if we built the original product and can maintain
                  it without a knowledge transfer overhead.
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
