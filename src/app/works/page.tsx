import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "@/components/Img";
import { works } from "@/data/works";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Works | Anvik Labs",
    description:
      "Selected identity, editorial, product and web work by Anvik Labs.",
    path: "/works",
  });

const mono = "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

export default function WorksPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="flex flex-1 flex-col pt-[var(--header-height)]"
      >
        {/* ── Mobile header (shown below md) ───────────────────────────────── */}
        <header className="border-b border-white/10 px-4 py-10 sm:px-[4vw] md:hidden">
          <p className={`${mono} text-neutral-500`}>Selected work · {String(works.length).padStart(2, "0")} projects</p>
          <h1 className="mt-4 font-sans text-[clamp(4rem,16vw,8rem)] font-medium leading-[0.85] tracking-[-0.05em] text-foreground">
            Works.
          </h1>
        </header>

        {/* ── Two-column split (md+) ────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col md:flex-row">

          {/* LEFT — sticky panel, vertically centred */}
          <aside className="hidden md:flex md:w-[42%] lg:w-[40%] xl:w-[38%] shrink-0">
            <div className="sticky top-[var(--header-height)] h-[calc(100svh-var(--header-height))] w-full flex flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              {/* Top meta */}
              <div>
                <p className={`${mono} text-neutral-500`}>Selected work</p>
                <p className={`${mono} mt-1 text-neutral-600`}>
                  {String(works.length).padStart(2, "0")} projects · 2022–2026
                </p>
              </div>

              {/* Centre heading */}
              <div>
                <h1 className="font-sans text-[clamp(4.5rem,8vw,8.5rem)] font-medium leading-[0.85] tracking-[-0.055em] text-foreground">
                  Works.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  Identity, editorial, product and web — each project designed
                  and built by the same small team.
                </p>
              </div>

              {/* Bottom caption */}
              <p className={`${mono} text-neutral-600`}>Anvik Labs / India</p>
            </div>
          </aside>

          {/* RIGHT — scrollable project list */}
          <section
            aria-label="Project index"
            className="flex-1 divide-y divide-white/10 border-t border-white/10 md:border-t-0"
          >
            {works.map((work, index) => (
              <article key={work.slug}>
                <Link
                  to={`/works/${work.slug}`}
                  className="group flex flex-col gap-5 px-4 py-8 transition-colors duration-200 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px] sm:px-[4vw] md:flex-row md:items-center md:gap-7 md:px-8 md:py-9 lg:px-10 lg:py-10 xl:px-12"
                >
                  {/* Image thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-light-surface md:w-[220px] md:shrink-0 lg:w-[260px] xl:w-[300px]">
                    <Image
                      src={work.hero.src}
                      alt={work.hero.alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Text block */}
                  <div className="flex flex-1 flex-col justify-center gap-2 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className={`${mono} text-neutral-500`}>{work.index}</span>
                      <span className={`${mono} text-neutral-500`}>{work.year}</span>
                    </div>

                    <h2 className="font-sans text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-tight tracking-[-0.03em] text-foreground transition-colors duration-200 group-hover:text-accent">
                      {work.name}
                    </h2>

                    <p className={`${mono} text-neutral-500`}>{work.category}</p>

                    <p className="mt-2 max-w-[48ch] text-[13px] leading-relaxed text-neutral-400 lg:text-[14px]">
                      {work.summary}
                    </p>

                    <span className={`${mono} mt-3 inline-flex items-center gap-1.5 text-neutral-300 transition-colors duration-200 group-hover:text-accent`}>
                      View project
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
