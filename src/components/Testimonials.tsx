"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import testimonialsData from "../data/testimonials.json";

type Testimonial = (typeof testimonialsData)[number] & {
  avatar?: string;
};

const testimonials: Testimonial[] = testimonialsData;

function getInitials(person: string) {
  return person
    .replace(/^(Prof\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const story = testimonials[active];
  const total = String(testimonials.length).padStart(2, "0");
  const isPaused = paused || hovered || focused;

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [active, isPaused]);

  const goTo = (direction: number) => {
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  const fade = {
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 },
    transition: {
      duration: reduceMotion ? 0 : 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 md:py-36"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client testimonials
      </h2>

      <div className="mx-auto flex max-w-[64rem] flex-col items-center text-center">
        <div
          aria-live={isPaused ? "polite" : "off"}
          aria-atomic="true"
          className="w-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure key={active} {...fade}>
              <blockquote>
                <p className="mx-auto max-w-[54ch] text-pretty font-serif text-[clamp(1.6rem,3.1vw,2.7rem)] font-normal leading-[1.14] tracking-[-0.015em] text-foreground">
                  &ldquo;{story.quote.trim()}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-10 flex flex-col items-center md:mt-12">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white/[0.06]">
                  {story.avatar ? (
                    <img
                      src={story.avatar}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="font-mono text-[12px] tracking-[0.08em] text-neutral-300"
                    >
                      {getInitials(story.person)}
                    </span>
                  )}
                </div>
                <p className="mt-4 font-sans text-[15px] font-semibold text-foreground">
                  {story.person}
                </p>
                <p className="mt-1 max-w-[34ch] font-sans text-[13px] leading-relaxed text-neutral-400">
                  {story.role}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:mt-12">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors duration-200 hover:text-accent focus-visible:text-accent"
          >
            <ArrowIcon direction="left" />
          </button>

          <span className="min-w-[4.5rem] font-mono text-[12px] tracking-[0.14em] text-neutral-500">
            {String(active + 1).padStart(2, "0")}{" "}
            <span className="text-neutral-600">/</span> {total}
          </span>

          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors duration-200 hover:text-accent focus-visible:text-accent"
          >
            <ArrowIcon direction="right" />
          </button>

          <span aria-hidden="true" className="h-3 w-px bg-white/15" />

          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
            aria-label={
              paused
                ? "Resume automatic testimonial rotation"
                : "Pause automatic testimonial rotation"
            }
            className="min-w-[3.5rem] font-mono text-[12px] uppercase tracking-[0.12em] text-neutral-500 transition-colors duration-200 hover:text-accent focus-visible:text-accent"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </section>
  );
}
