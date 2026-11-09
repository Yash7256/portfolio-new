import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "@/components/Img";
import { projects, getProjectWorkType } from "@/data/projects";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Selected Product Design & Web Work | Anvik Labs",
    description:
      "Explore selected product design, identity, editorial, and web development work by Anvik Labs for startups and growing businesses.",
    path: "/works",
  });

const mono = "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

/** Human-readable label for workType */
const WORK_TYPE_LABEL: Record<string, string> = {
  development: "Development",
  design: "Design",
  "ui-ux": "Design",
  both: "Design + Dev",
};

/** Human-readable label for projectType */
const PROJECT_TYPE_LABEL: Record<string, string> = {
  own: "Own product",
  client: "Client work",
};

export default function WorksPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="flex flex-1 flex-col pt-[var(--header-height)]"
      >
        {/* ── Mobile header (shown below md) ───────────────────────────────── */}
        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <h1 className="mt-3 font-sans text-[clamp(2.75rem,14vw,7rem)] font-medium leading-[0.88] tracking-[-0.05em] text-foreground break-words">
            Works.
          </h1>
        </header>

        {/* ── Two-column split (md+) ────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col md:flex-row">

          {/* LEFT — sticky panel, vertically balanced */}
          <aside className="hidden md:flex md:w-[42%] lg:w-[40%] xl:w-[38%] shrink-0">
            <div className="sticky top-[var(--header-height)] h-[calc(100svh-var(--header-height))] w-full flex flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              {/* Top meta */}
              <div>
                <p className={`${mono} text-neutral-500`}>Selected work</p>
                <p className={`${mono} mt-1 text-neutral-600`}>
                  {String(projects.length).padStart(2, "0")} projects · 2022–2026
                </p>
              </div>

              {/* Centre heading */}
              <div>
                <div aria-hidden="true" className="font-sans text-[clamp(4rem,7vw,8rem)] font-medium leading-[0.85] tracking-[-0.055em] text-foreground">
                  Works.
                </div>
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
            {projects.map((project, index) => (
              <article key={project.id}>
                <Link
                  to={`/works/${project.id}`}
                  className="group flex flex-col gap-4 px-4 py-6 transition-colors duration-200 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px] sm:gap-5 sm:px-[4vw] sm:py-8 md:flex-row md:items-center md:gap-7 md:px-8 md:py-9 lg:px-10 lg:py-10 xl:px-12"
                >
                  {/* Cover image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-light-surface md:w-[220px] md:shrink-0 lg:w-[260px] xl:w-[300px]">
                    <Image
                      src={project.coverImage}
                      alt={project.coverAlt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Text block */}
                  <div className="flex flex-1 flex-col justify-center gap-1.5 sm:gap-2 min-w-0">
                    {/* Index + badges */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className={`${mono} text-neutral-600`}>
                        {String(index + 1).padStart(3, "0")}
                      </span>
                      {/* Work type badge */}
                      <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-400">
                        {WORK_TYPE_LABEL[getProjectWorkType(project)] ?? project.workType}
                      </span>
                      {/* Own / Client badge */}
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
                          project.projectType === "own"
                            ? "border border-accent/40 text-accent-text"
                            : "border border-white/10 text-neutral-400"
                        }`}
                      >
                        {PROJECT_TYPE_LABEL[project.projectType] ?? project.projectType}
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="font-sans text-[clamp(1.2rem,2.2vw,1.85rem)] font-medium leading-tight tracking-[-0.03em] text-foreground transition-colors duration-200 group-hover:text-accent break-words">
                      {project.name}
                    </h2>

                    {/* Genre */}
                    <p className={`${mono} text-[11px] text-neutral-500`}>{project.genre}</p>

                    {/* Description */}
                    <p className="mt-1 max-w-[48ch] text-[13px] leading-relaxed text-neutral-400 lg:text-[14px]">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <span
                      className={`${mono} mt-2 inline-flex items-center gap-1.5 text-[11px] text-neutral-400 transition-colors duration-200 group-hover:text-accent`}
                    >
                      View project
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
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
