import type { MetaFunction } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "@/components/Img";
import { projects, getProjectWorkType, type Project, type ProjectLinks } from "@/data/projects";
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
  "Anvik Labs": "Anvik Labs Product",
  "Client Work": "Client Work",
};

const PROJECT_FILTERS = [
  { value: "all", label: "All work" },
  { value: "Anvik Labs", label: "Anvik Labs Product" },
  { value: "Client Work", label: "Client Works" },
] as const;

type ProjectFilter = (typeof PROJECT_FILTERS)[number]["value"];

const LINK_LABELS: Array<{ key: keyof ProjectLinks; label: string }> = [
  { key: "behance", label: "Behance" },
  { key: "live", label: "Live site" },
  { key: "github", label: "GitHub" },
];

function ProjectLinks({ project }: { project: Project }) {
  const workType = getProjectWorkType(project);
  const visibleLinks = LINK_LABELS.filter(({ key }) => {
    if (!project.links?.[key]) return false;
    if (key === "behance") return workType === "design" || workType === "both";
    return workType === "development" || workType === "both";
  });

  if (visibleLinks.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-3">
      {visibleLinks.map(({ key, label }) => (
        <a
          key={key}
          href={project.links?.[key]}
          target="_blank"
          rel="noreferrer"
          className={`${mono} text-[11px] text-neutral-400 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
        >
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.projectType === activeFilter);

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
            <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-[4vw] md:px-8 lg:px-10 xl:px-12">
              <p className={`${mono} text-neutral-500`}>
                Showing {String(filteredProjects.length).padStart(2, "0")} of {String(projects.length).padStart(2, "0")} projects
              </p>
              <div
                aria-label="Filter projects by ownership"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {PROJECT_FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.value;

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter.value)}
                      className={`rounded-full border px-3 py-2 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        isActive
                          ? "border-accent bg-accent text-on-accent"
                          : "border-white/15 text-neutral-400 hover:border-white/35 hover:text-foreground"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <p className="px-4 py-12 text-[14px] text-neutral-400 sm:px-[4vw] md:px-8 lg:px-10 xl:px-12">
                No projects in this collection yet.
              </p>
            ) : null}

            {filteredProjects.map((project, index) => (
              <article key={project.id}>
                <div className="group flex flex-col gap-4 px-4 py-6 transition-colors duration-200 hover:bg-white/[0.02] sm:gap-5 sm:px-[4vw] sm:py-8 md:flex-row md:items-center md:gap-7 md:px-8 md:py-9 lg:px-10 lg:py-10 xl:px-12">
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
                      <Link to={`/works/${project.id}`} className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{project.name}</Link>
                    </h2>

                    {/* Genre */}
                    <p className={`${mono} text-[11px] text-neutral-500`}>{project.genre}</p>

                    {/* Description */}
                    <p className="mt-1 max-w-[48ch] text-[13px] leading-relaxed text-neutral-400 lg:text-[14px]">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/works/${project.id}`}
                      className={`${mono} mt-2 inline-flex items-center gap-1.5 text-[11px] text-neutral-400 transition-colors duration-200 group-hover:text-accent`}
                    >
                      View project
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
