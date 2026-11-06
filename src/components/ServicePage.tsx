import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import type { Service } from "@/data/services";
import { createFaqJsonLd, createServiceJsonLd } from "@/lib/schema";
import { CardGrid2x2, Chips, GlanceCard, NumberedGrid, ProofStrip, RelatedServices } from "@/components/service/sections";

export default function ServicePage({ service, index }: { service: Service; index: number }) {
  const stepGrid = service.process.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        <JsonLd data={createServiceJsonLd(service)} />
        <JsonLd data={createFaqJsonLd(service)} />

        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Service [{String(index + 1).padStart(2, "0")}]</p>
          <h1 className="mt-3 break-words font-sans text-[clamp(2.25rem,10vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-foreground">{service.name}.</h1>
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-400">{service.heroSubline}</p>
          <div className="mt-6 flex justify-center sm:justify-start">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-sans text-[13px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200">Start a project →</Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="hidden shrink-0 md:flex md:w-[42%] lg:w-[40%] xl:w-[38%]">
            <div className="sticky top-[var(--header-height)] flex h-[calc(100svh-var(--header-height))] w-full flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Service [{String(index + 1).padStart(2, "0")}]</p>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-600">{service.serviceType}</p>
              </div>
              <div>
                <h1 className="font-sans text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">{service.name}.</h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">{service.heroSubline}</p>
                <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-sans text-[14px] font-semibold tracking-tight text-black transition-colors hover:bg-neutral-200">Start a project</Link>
              </div>
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-600">Based in India · Working worldwide</p>
            </div>
          </aside>

          <div className="flex-1 divide-y divide-white/10 border-t border-white/10 md:border-t-0">
            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
                <div>
                  <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Overview</p>
                  <p className="max-w-[28ch] font-sans text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] tracking-[-0.03em] text-foreground">{service.lead}</p>
                  <p className="mt-6 max-w-[58ch] text-[14px] leading-relaxed text-neutral-400 sm:text-[15px]">{service.intro}</p>
                </div>
                <GlanceCard items={service.glance.filter(([label]) => label !== "Based in")} />
              </div>
            </section>

            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">What’s included</p>
              <NumberedGrid items={service.included} />
            </section>

            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Tools we use</p>
              <Chips items={service.stack} />
            </section>

            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Process</p>
              <div className={`grid gap-6 sm:grid-cols-2 ${stepGrid}`}>
                {service.process.map(({ step, label, desc }) => (
                  <div key={step} className="border-t border-white/10 pt-4 sm:pt-5">
                    <p className="font-mono text-[12px] tracking-[0.12em] text-accent">{step}</p>
                    <h3 className="mt-2.5 font-sans text-[15px] font-semibold text-foreground sm:text-[16px]">{label}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-500">Why Anvik Labs</p>
              <CardGrid2x2 items={service.whyUs} />
            </section>

            <section className="px-4 py-8 sm:px-[4vw] sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16"><ProofStrip /></section>

            <Faq items={service.faqs} metaLabel="FAQs" metaTitle="Before we begin" />
            <RelatedServices current={service} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
