const articles = [
  {
    id: "harshita-linkedin",
    author: "Harshita Upadhyay",
    date: "LinkedIn",
    title: "Why Developers Need UI/UX & Product Designers: A Love Letter",
    description:
      "A thoughtful look at how developers and product designers can collaborate to build clearer, more human digital products.",
    category: "Product Design",
    href: "https://www.linkedin.com/pulse/why-developers-need-uiux-product-designers-love-letter-upadhyay-y6nuf/",
  },
];

export default function Articles() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="border-t border-white/10 py-16 md:py-24"
    >
      <div className="pb-8 md:pb-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
          Writing / 005
        </p>
        <h2
          id="writing-heading"
          className="mt-3 font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          From the journal.
        </h2>
      </div>

      {articles.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group grid gap-4 border-y border-white/10 py-6 transition-colors duration-300 hover:border-accent/50 md:grid-cols-[160px_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-8"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-[0.1em] text-neutral-500">
            <span>{item.date}</span>
            <span aria-hidden="true">/</span>
            <span className="text-accent">{item.category}</span>
          </div>

          <div>
            <h3 className="max-w-[34ch] font-sans text-[20px] font-medium leading-snug text-foreground transition-colors group-hover:text-accent md:text-[24px]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-[58ch] text-[13px] leading-relaxed text-neutral-400 md:text-[14px]">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.1em] text-neutral-400 md:flex-col md:items-end md:gap-2">
            <span className="text-neutral-300">{item.author}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              Read article ↗
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
