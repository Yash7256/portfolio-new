"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col justify-between rounded-[8px] border border-white/10 bg-light-surface p-6 transition-colors duration-300 hover:border-white/20 sm:w-[360px] md:w-[420px] md:p-7">
      <blockquote className="font-sans text-[14px] leading-[1.7] text-neutral-200 md:text-[15px]">
        &ldquo;{item.quote.trim()}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3.5 border-t border-white/10 pt-4 md:mt-7 md:pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] font-mono text-[11px] font-medium tracking-[0.08em] text-neutral-300">
          {item.avatar ? (
            <img
              src={item.avatar}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            getInitials(item.person)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[14px] font-semibold text-foreground md:text-[15px]">
            {item.person}
          </p>
          <p className="truncate font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-400 md:text-[12px]">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Duplicate for seamless infinite loop
  const cards = [...testimonials, ...testimonials];

  if (reduceMotion) {
    return (
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="py-16 md:py-24"
      >
        <div className="pb-8 md:pb-10">
          <h2
            id="testimonials-heading"
            className="mt-3 font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
          >
            What people say.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24"
    >
      <div className="pb-8 md:pb-10">
        <h2
          id="testimonials-heading"
          className="mt-3 font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          What people say.
        </h2>
      </div>

      <div className="pause-on-hover relative -mx-4 overflow-hidden sm:-mx-[4vw] lg:-mx-[5vw] xl:-mx-[6vw]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20 md:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20 md:w-32"
        />

        <div
          className="animate-marquee-cards flex gap-5 py-2 md:gap-6"
          style={{ animationPlayState: isPaused ? "paused" : undefined }}
        >
          <div className="flex shrink-0 gap-5 md:gap-6">
            {cards.map((item, index) => (
              <TestimonialCard
                key={`track-1-${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-5 md:gap-6" aria-hidden="true">
            {cards.map((item, index) => (
              <TestimonialCard
                key={`track-2-${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.12em] text-neutral-500">
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label={
            isPaused
              ? "Resume automatic testimonial marquee"
              : "Pause automatic testimonial marquee"
          }
          className="inline-flex min-h-11 items-center px-2 text-neutral-500 transition-colors duration-200 hover:text-accent focus-visible:text-accent"
        >
          [ {isPaused ? "Play" : "Pause"} ]
        </button>
      </div>
    </section>
  );
}
