import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import journal from "@/data/journal";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Journal: Design & Web Development | Anvik Labs",
    description:
      "Read the Anvik Labs journal for practical notes on UI/UX design, web development, product strategy, and building products with AI.",
    path: "/journal",
  });

const mono = "font-mono uppercase tracking-[0.18em] text-[11px]";

const CATEGORY_COLORS: Record<string, string> = {
  Design: "border-white/20 text-neutral-300",
  Engineering: "border-white/20 text-neutral-300",
  Product: "border-white/20 text-neutral-300",
  AI: "border-accent/40 text-accent",
};

function formatDate(iso: string) {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col pt-[var(--header-height)]">
        {/* Mobile header */}
        <header className="border-b border-white/10 px-4 py-8 sm:px-[4vw] sm:py-10 md:hidden">
          <p className={`${mono} text-neutral-500`}>Writing · {String(journal.length).padStart(2, "0")} articles</p>
          <h1 className="mt-3 font-sans text-[clamp(2.75rem,14vw,7rem)] font-medium leading-[0.88] tracking-[-0.05em] text-foreground break-words">
            Journal.
          </h1>
          <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-neutral-400">
            Thoughts on design, engineering, and building products.
          </p>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* LEFT — sticky panel */}
          <aside className="hidden md:flex md:w-[42%] lg:w-[40%] xl:w-[38%] shrink-0">
            <div className="sticky top-[var(--header-height)] h-[calc(100svh-var(--header-height))] w-full flex flex-col justify-between border-r border-white/10 px-[5vw] py-12 lg:px-[4vw] xl:px-[5vw]">
              <div>
                <p className={`${mono} text-neutral-500`}>Writing</p>
                <p className={`${mono} mt-1 text-neutral-600`}>
                  {String(journal.length).padStart(2, "0")} articles
                </p>
              </div>

              <div>
                <h1 className="font-sans text-[clamp(4rem,7vw,8rem)] font-medium leading-[0.85] tracking-[-0.055em] text-foreground">
                  Journal.
                </h1>
                <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-neutral-400 lg:text-[15px]">
                  Thoughts on design, engineering, and building products.
                </p>
              </div>

              <p className={`${mono} text-neutral-600`}>Anvik Labs / India</p>
            </div>
          </aside>

          {/* RIGHT — scrollable article list */}
          <section
            aria-label="Article index"
            className="flex-1 divide-y divide-white/10 border-t border-white/10 md:border-t-0"
          >
            {journal.map((post, idx) => {
              const colorCls = CATEGORY_COLORS[post.category] ?? "border-white/20 text-neutral-300";
              const inner = (
                <div
                  className={`flex flex-col gap-3 px-4 py-6 sm:gap-4 sm:px-[4vw] sm:py-8 md:px-8 lg:px-10 xl:px-12${post.draft ? " opacity-60" : ""}`}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="font-mono text-[11px] text-neutral-600">
                      {String(idx + 1).padStart(3, "0")}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${colorCls}`}
                    >
                      {post.category}
                    </span>
                    {post.draft && (
                      <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500">
                        Coming soon
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-neutral-500">
                      {formatDate(post.date)}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600">{post.source ?? post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="max-w-[52ch] font-sans text-[clamp(1.15rem,2.2vw,1.75rem)] font-medium leading-tight tracking-[-0.025em] text-foreground transition-colors duration-200 group-hover:text-accent break-words">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="max-w-[58ch] text-[13px] sm:text-[14px] leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      loading="lazy"
                      decoding="async"
                      className="mt-2 block aspect-[16/9] w-full max-w-[360px] rounded-[4px] object-cover md:ml-auto md:max-w-[240px]"
                    />
                  )}

                  {/* CTA */}
                  {!post.draft && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400 transition-colors duration-200 group-hover:text-accent">
                      Read article →
                    </span>
                  )}
                </div>
              );

              return post.draft ? (
                <article key={post.id}>{inner}</article>
              ) : post.externalUrl ? (
                <article key={post.id}>
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group block transition-colors duration-200 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px]"
                  >
                    {inner}
                  </a>
                </article>
              ) : (
                <article key={post.id}>
                  <Link
                    to={`/journal/${post.id}`}
                    className="group block transition-colors duration-200 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px]"
                  >
                    {inner}
                  </Link>
                </article>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
