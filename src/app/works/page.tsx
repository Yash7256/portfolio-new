import type { MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";
import { works } from "@/data/works";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Works | Anvik Labs",
    description:
      "Selected identity, editorial, product and web work by Anvik Labs.",
    path: "/works",
  });

export default function WorksPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="flex flex-1 flex-col pb-20 pt-32 md:pb-28 md:pt-44"
      >
        <header className="border-b border-white/10 pb-8 md:pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.12em] text-neutral-500">
            <span>Selected work</span>
            <span>
              {String(works.length).padStart(2, "0")} projects / 2022–2026
            </span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h1 className="font-sans text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.05em] text-foreground">
              Works.
            </h1>
            <p className="max-w-[42ch] text-[14px] leading-relaxed text-neutral-400 md:text-[15px]">
              A selection of identity, editorial, product and web work. Each
              project is designed and built by the same small team.
            </p>
          </div>
        </header>

        <section aria-label="Project index" className="pt-10 md:pt-14">
          <WorksGrid works={works} />
        </section>
      </main>

      <Footer />
    </>
  );
}
