import type { ReactNode } from "react";
import { Link } from "react-router";
import { homepageJournalArticles } from "@/data/journal";
import type { JournalArticle } from "@/data/journal";

const mono = "font-mono text-[12px] uppercase tracking-[0.1em]";

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ArticleLink({
  item,
  className,
  children,
}: {
  item: JournalArticle;
  className: string;
  children: ReactNode;
}) {
  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={item.href} className={className}>
      {children}
    </Link>
  );
}

function ReadArticle() {
  return (
    <span className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors duration-200 group-hover:text-accent">
      Read article
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );
}

export default function Articles() {
  const [featured, ...rest] = homepageJournalArticles;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="border-t border-white/10 py-16 md:py-24"
    >
      <div className="pb-8 md:pb-10">
        <h2
          id="writing-heading"
          className="mt-3 font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          From the journal.
        </h2>
      </div>

      {featured && (
        <ArticleLink
          item={featured}
          className={`group grid min-w-0 gap-6 border-y border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px] md:items-center md:gap-10 md:py-10 lg:gap-14 ${
            featured.image
              ? "md:grid-cols-[minmax(0,45fr)_minmax(0,55fr)]"
              : ""
          }`}
        >
          <div className="order-2 flex min-w-0 flex-col items-start md:order-1">
            <div
              className={`${mono} flex flex-wrap items-center gap-x-2 gap-y-1 text-neutral-500`}
            >
              <span className="text-accent">{featured.category}</span>
              <span aria-hidden="true" className="text-neutral-600">
                /
              </span>
              <span>{formatDate(featured.date)}</span>
            </div>

            <h3 className="mt-4 max-w-[22ch] font-sans text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent">
              {featured.title}
            </h3>

            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-neutral-400 md:text-[16px]">
              {featured.description}
            </p>

            <div
              className={`${mono} mt-6 flex flex-wrap items-center gap-x-4 gap-y-2`}
            >
              <span className="text-neutral-300">{featured.author}</span>
              <span
                aria-hidden="true"
                className="h-3 w-px bg-white/15"
              />
              <ReadArticle />
            </div>
          </div>

          {featured.image && (
            <div className="order-1 min-w-0 md:order-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-white/10">
                <img
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full max-w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          )}
        </ArticleLink>
      )}

      {rest.map((item) => (
        <ArticleLink
          key={item.id}
          item={item}
          className="group grid min-w-0 gap-4 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] focus-visible:outline-offset-[-4px] md:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)_minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-6 md:py-7 lg:grid-cols-[160px_minmax(0,1fr)_180px_240px] lg:gap-8"
        >
          <div
            className={`${mono} flex min-w-0 flex-col gap-1.5 text-neutral-500`}
          >
            <span>{formatDate(item.date)}</span>
            <span className="text-accent">{item.category}</span>
          </div>

          <div className="min-w-0">
            <h3 className="font-sans text-[20px] font-medium leading-snug tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-accent md:text-[22px] lg:text-[24px]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[58ch] text-[14px] leading-relaxed text-neutral-400 md:text-[15px]">
              {item.description}
            </p>
          </div>

          <div
            className={`${mono} flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 md:flex-col md:items-start md:gap-2`}
          >
            <span className="text-neutral-300">{item.author}</span>
            <ReadArticle />
          </div>

          {item.image ? (
            <div className="w-full max-w-[280px] min-w-0 justify-self-end md:max-w-none">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-white/10">
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full max-w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ) : null}
        </ArticleLink>
      ))}

      <div className="mt-8 flex justify-center md:justify-start">
        <Link
          to="/journal"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-300 transition-colors hover:border-white/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          See more{" "}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
