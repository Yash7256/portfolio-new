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

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 transition-colors duration-300 md:mt-8 md:rounded-3xl hover:border-white/20">
          <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  <span className="h-px w-6 bg-accent" />
                  <span>Client stories</span>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-300">
                  {story.sector}
                </span>
              </div>

              <div className="mt-8 min-h-[250px] md:mt-10 md:min-h-[270px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={active} {...fade}>
                    <blockquote>
                      <p className="max-w-[48ch] text-pretty font-sans text-[clamp(1.5rem,2.2vw,2.4rem)] font-medium leading-[1.3] tracking-[-0.035em] text-[#EAE7E2]">
                        {story.quote}
                      </p>
                    </blockquote>

                    <div className="mt-8 flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" />
                      <div>
                        <p className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#F5F1EA]">
                          {story.person}
                        </p>
                        <p className="mt-1 inline-flex rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-300">
                          {story.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                <span className="h-1.5 w-1.5 bg-accent/70" />
                Verified testimonial
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  aria-label="Previous client story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-950/50 text-neutral-400 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="left" />
                </button>

                <span
                  aria-live="polite"
                  className="min-w-14 text-center font-mono text-[10px] tracking-[0.16em] text-neutral-300"
                >
                  {String(active + 1).padStart(2, "0")} / {total}
                </span>

                <button
                  type="button"
                  onClick={() => goTo(1)}
                  aria-label="Next client story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-950/50 text-neutral-400 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
            <span>Client names</span>
            <span>{testimonials.length} positions</span>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.id}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${testimonial.person}`}
                aria-pressed={active === index}
                className={`group flex h-16 items-center justify-center border-b border-r border-white/10 px-2 transition-colors duration-300 md:h-20 ${
                  active === index
                    ? "border-accent/40 bg-[#24170F] text-accent"
                    : index % 2 === 0
                      ? "bg-background text-neutral-300"
                      : "bg-neutral-900/30 text-neutral-300"
                } ${index === testimonials.length - 1 && testimonials.length % 2 !== 0 ? "md:col-span-2" : ""}`}
              >
                <div className="w-full !whitespace-nowrap text-center font-mono text-[clamp(0.72rem,1.1vw,0.9375rem)] font-semibold uppercase tracking-[0.06em] leading-none transition-colors duration-300 group-hover:text-accent">
                  {testimonial.person}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[68ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-neutral-400">
            Testimonials from collaborators and clients across design, development,
            and digital product work.
          </p>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
            {testimonials.length} clients / 2 columns
          </span>
        </div>
      </div>
    </section>
  );
}
