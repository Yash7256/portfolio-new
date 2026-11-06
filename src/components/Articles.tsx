import { Link } from "react-router";
import { homepageJournalArticles } from "@/data/journal";

export default function Articles() {
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

      {homepageJournalArticles.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`group grid w-full min-w-0 max-w-full grid-cols-1 gap-4 border-y border-white/10 py-6 transition-colors duration-300 hover:border-accent/50 md:items-start md:gap-8 md:py-8 ${
            item.image
              ? "md:grid-cols-[150px_minmax(0,1fr)_200px] lg:grid-cols-[160px_minmax(0,1fr)_240px]"
              : "md:grid-cols-[160px_minmax(0,1fr)]"
          }`}
        >
          <div className="min-w-0 max-w-full flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-[0.1em] text-neutral-500 md:flex">
            <span>{item.date}</span>
            <span aria-hidden="true">/</span>
            <span className="text-accent">{item.category}</span>
          </div>

          <div className="min-w-0 max-w-full">
            <h3 className="max-w-[34ch] font-sans text-[20px] font-medium leading-snug text-foreground transition-colors group-hover:text-accent md:text-[24px]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-[58ch] text-[14px] leading-relaxed text-neutral-400 md:text-[15px]">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.1em] text-neutral-400">
              <span className="text-neutral-300">{item.author}</span>
              <span aria-hidden="true" className="h-3 w-px bg-white/15" />
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                Read article
              </span>
            </div>
          </div>

          {item.image && (
            <div className="hidden w-full min-w-0 max-w-[240px] justify-self-end self-center md:block md:max-w-none md:justify-self-end">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[4px]">
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full max-w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          )}
        </a>
      ))}

      <div className="mt-8 flex justify-center md:justify-start">
        <Link
          to="/journal"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-neutral-300 transition-colors hover:border-white/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          See more <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
