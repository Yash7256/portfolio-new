"use client";

import { motion } from "framer-motion";
import { useMarqueeTiming } from "./useMarqueeTiming";

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
  const { marqueeRef, duration } = useMarqueeTiming();

  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">

      {/* Headline */}
      <div className="pb-6 md:pb-8 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" }}
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <h2 className="inline-flex w-max shrink-0 whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em]">
                Featured Article<span aria-hidden="true" className="inline-block px-16">·</span>
              </h2>
              <h2 className="inline-flex w-max shrink-0 whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em]">
                Featured Article<span aria-hidden="true" className="inline-block px-16">·</span>
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8">
        {articles.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/30 hover:bg-neutral-900 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group ${
              articles.length === 1
                ? "md:col-span-2 md:w-[calc(50%_-_0.75rem)] md:justify-self-center"
                : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-4">
                <span>{item.date}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  {item.category}
                </span>
              </div>

              <h3 className="font-sans text-[18px] md:text-[22px] font-medium leading-snug text-foreground group-hover:text-white transition-colors">
                &ldquo;{item.title}&rdquo;
              </h3>
              <p className="mt-3 max-w-[60ch] text-[13px] leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-neutral-400">
              <span className="text-neutral-300 font-semibold">{item.author}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                READ ARTICLE →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
