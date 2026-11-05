"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMarqueeTiming } from "./useMarqueeTiming";
import testimonialsData from "../data/testimonials.json";

const testimonials = testimonialsData.map((testimonial) => ({
  ...testimonial,
  sector: testimonial.role.split(",")[0],
}));

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={
          direction === "left"
            ? "M10.5 3.5 6 8l4.5 4.5M6 8h7"
            : "M5.5 3.5 10 8l-4.5 4.5M10 8H3"
        }
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { marqueeRef, duration } = useMarqueeTiming();
  const story = testimonials[active];
  const total = String(testimonials.length).padStart(2, "0");

  useEffect(() => {
    if (reduceMotion || testimonials.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const goTo = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const fade = {
    initial: reduceMotion ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 },
    transition: { duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-white/10"
    >
      <div className="container-page py-14 md:py-20">
        <h2 id="testimonials-heading" className="sr-only">
          Client testimonials
        </h2>

        <div
          aria-hidden="true"
          className="-mx-5 mt-6 w-[calc(100%+40px)] overflow-hidden border-b border-white/10 pb-6 sm:-mx-[4vw] sm:w-[calc(100%+8vw)] md:mt-8 md:pb-8 lg:-mx-[5vw] lg:w-[calc(100%+10vw)] xl:-mx-[6vw] xl:w-[calc(100%+12vw)]"
        >
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" }}
            ref={marqueeRef}
            className="flex w-max whitespace-nowrap"
          >
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center">
                {[0, 1].map((item) => (
                  <span
                    key={item}
                    className="inline-flex w-max shrink-0 whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em] text-foreground"
                  >
                    Testimonials<span aria-hidden="true" className="inline-block px-16">·</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 border-y border-white/15 md:mt-8">
          <div className="grid gap-8 py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 md:py-10 lg:gap-20">
            <div className="min-w-0">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">Client story</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{story.sector}</span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={active} {...fade}>
                  <blockquote>
                    <p className="max-w-[58ch] text-pretty font-sans text-[clamp(1.375rem,2.1vw,2.25rem)] font-medium leading-[1.35] tracking-[-0.03em] text-[#EAE7E2]">
                      “{story.quote}”
                    </p>
                  </blockquote>
                  <div className="mt-7 border-l border-accent/70 pl-4">
                    <p className="font-sans text-[15px] font-semibold text-[#F5F1EA]">{story.person}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-neutral-400">{story.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-5 border-t border-white/10 pt-5 md:flex-col md:items-end md:justify-end md:border-0 md:pt-0">
              <span aria-live="polite" className="font-mono text-[11px] tracking-[0.14em] text-neutral-300">
                {String(active + 1).padStart(2, "0")} <span className="text-neutral-500">/</span> {total}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  aria-label="Previous client story"
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-300 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  aria-label="Next client story"
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-300 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.id}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${testimonial.person}`}
                aria-pressed={active === index}
                className={`group flex min-h-14 items-center border-b border-r border-white/10 px-4 text-left transition-colors duration-300 md:min-h-16 md:px-5 ${
                  active === index
                    ? "border-accent/40 bg-[#1B1510] text-accent"
                    : index % 2 === 0
                      ? "bg-background text-neutral-300"
                      : "bg-neutral-900/30 text-neutral-300"
                } ${index === testimonials.length - 1 && testimonials.length % 2 !== 0 ? "sm:col-span-2" : ""}`}
              >
                <div className="w-full whitespace-nowrap font-mono text-[clamp(0.72rem,1.1vw,0.9375rem)] font-semibold uppercase tracking-[0.06em] leading-none transition-colors duration-300 group-hover:text-accent">
                  {testimonial.person}
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
