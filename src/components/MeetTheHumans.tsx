"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMarqueeTiming } from "./useMarqueeTiming";

type PortraitProps = {
  src: string;
  alt: string;
  name: string;
  role: string;
  index: string;
  label: string;
  id: string;
  delay?: number;
  imagePositionClassName: string;
  showFavicon?: boolean;
  faviconPositionClassName?: string;
  faviconVerticalPositionClassName?: string;
  isOppositeHovered?: boolean;
  reduceMotion: boolean | null;
};

function Portrait({
  src,
  alt,
  name,
  role,
  index,
  label,
  id,
  delay = 0,
  imagePositionClassName,
  showFavicon = false,
  faviconPositionClassName = "left-1/2",
  faviconVerticalPositionClassName = "top-0",
  isOppositeHovered = false,
  reduceMotion,
}: PortraitProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.45 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.45 });
  const imageX = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-3, 3]);
  const watermarkX = useTransform(springX, [-0.5, 0.5], [-2, 2]);
  const watermarkY = useTransform(springY, [-0.5, 0.5], [-1.5, 1.5]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.figure
      initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.7, delay }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className={`relative overflow-hidden rounded-[5px] bg-black ring-1 transition-colors duration-500 ${isOppositeHovered ? "ring-white/30" : "ring-white/10"}`}
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-black"
      >
        <motion.img
          src="/logo.svg"
          alt="Anvik Labs watermark"
          style={{ x: watermarkX, y: watermarkY }}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full translate-y-32"
        />

        {showFavicon && (
          <img
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute ${faviconPositionClassName} ${faviconVerticalPositionClassName} z-10 h-full w-full object-contain opacity-20`}
          />
        )}

        <motion.div
          initial={reduceMotion ? undefined : { scale: 1.06 }}
          whileInView={{ scale: 1 }}
          whileHover={reduceMotion ? undefined : { scale: 1.025, y: -2 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5, delay }}
          className="absolute inset-x-0 top-0 z-20 bottom-4 md:bottom-6"
        >
          <motion.div className="absolute inset-0" style={{ x: imageX, y: imageY }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`h-full w-full origin-top scale-[1.1] object-contain object-bottom brightness-[1.12] contrast-[1.08] saturate-[1.03] ${imagePositionClassName}`}
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      />

      <div className="sr-only">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
          {index}
        </span>
        <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/70">
          <span className="h-1 w-1 rounded-full bg-accent" />
          {label}
        </span>
      </div>

      <figcaption
        className="sr-only"
      >
        <h3
          className="font-sans text-[clamp(1.5rem,2.2vw,2.2rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white"
        >
          {name}
        </h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
          {role}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function MeetTheHumans() {
  const reduceMotion = useReducedMotion();
  const [hoveredProfile, setHoveredProfile] = useState<"harshita" | "yash" | null>(null);
  const { marqueeRef, duration } = useMarqueeTiming();

  return (
    <section
      aria-labelledby="humans-heading"
      className="relative overflow-hidden py-10 select-none md:py-14"
    >

      <h2 id="humans-heading" className="sr-only">
        Meet The Humans
      </h2>

      <div
        aria-hidden="true"
        className="mt-8 w-full overflow-hidden border-b border-white/10 pb-6 md:mt-12 md:pb-8"
      >
        <motion.div
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" }}
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {[0, 1].map((item) => (
                <span
                  key={item}
                  className="inline-flex w-max shrink-0 whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em] text-foreground"
                >
                  Meet The Humans<span aria-hidden="true" className="inline-block px-16">·</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mx-auto mt-8 grid w-full max-w-[1120px] grid-cols-1 gap-y-14 md:mt-10 md:gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
        <article
          aria-labelledby="human-harshita"
          onMouseEnter={() => setHoveredProfile("harshita")}
          onMouseLeave={() => setHoveredProfile(null)}
          className="group/profile relative min-w-0 md:max-w-[560px] lg:max-w-none"
        >
          <Portrait
            src="/profile/harshitaupadhyay-cutout.png"
            alt="Harshita Upadhyay, designer at Anvik Labs"
            name="Harshita Upadhyay"
            role="Design / Product & UI"
            index="01"
            label="The Designer"
            id="human-harshita"
            imagePositionClassName="translate-y-6 md:translate-y-7"
            showFavicon
            isOppositeHovered={hoveredProfile === "yash"}
            reduceMotion={reduceMotion}
          />

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 110, damping: 22, mass: 0.7, delay: 0.12 }}
            className="mt-4 md:mt-5"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              <span className="text-accent">01</span>
              <span aria-hidden="true" className="h-px w-5 bg-white/20" />
              <span>The Designer</span>
            </div>
            <h3
              id="human-harshita"
              className="mt-3 font-sans text-[clamp(1.875rem,3vw,2.25rem)] font-medium leading-none tracking-[-0.04em] text-[#F5F1EA]"
            >
              Harshita Upadhyay
            </h3>
            <motion.span
              aria-hidden="true"
              animate={{ width: hoveredProfile === "harshita" ? "3.5rem" : "2rem" }}
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.35 }}
              className="mt-3 block h-px bg-accent"
            />
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">
              Design / Product / UI
            </p>
            <p className="mt-5 max-w-[46ch] text-pretty text-[13px] leading-[1.65] text-neutral-300 md:text-[14px]">
              Harshita is the designer in the room — part systems thinker, part
              compulsive doodler. She turns tangled product flows into interfaces
              that feel obvious, then worries the last two percent until they feel
              inevitable.
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8">
              <div className="relative self-start border-l border-accent/30 pl-4">
                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? { height: "100%" } : { height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.5, delay: 0.08 }}
                  className="absolute left-[-1px] top-0 w-px bg-accent"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-opacity duration-300 group-hover/profile:opacity-100">
                  Enjoys building
                </span>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-neutral-300 md:text-[14px]">
                  Interfaces that make complicated products feel calm — and the
                  systems that keep them honest.
                </p>
              </div>

              <dl className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-opacity duration-300 group-hover/profile:opacity-100">
                  Off the clock
                </dt>
                <dd className="mt-2.5 max-w-[24ch] text-[13px] leading-[1.6] text-neutral-300 md:text-[14px]">
                  design systems, typography, user research, ceramics
                </dd>
              </dl>
            </div>
          </motion.div>
        </article>

        <article
          aria-labelledby="human-yash"
          onMouseEnter={() => setHoveredProfile("yash")}
          onMouseLeave={() => setHoveredProfile(null)}
          className="group/profile relative min-w-0 md:ml-auto md:max-w-[560px] lg:mt-24 lg:ml-0 lg:max-w-none xl:mt-28"
        >
          <Portrait
            src="/profile/amanraj-cutout.png"
            alt="Yash, engineer at Anvik Labs"
            name="Yash"
            role="Engineering / Product"
            index="02"
            label="The Engineer"
            id="human-yash"
            delay={0.18}
            imagePositionClassName="translate-y-4 md:translate-y-5"
            showFavicon
            faviconPositionClassName="-left-1/2"
            faviconVerticalPositionClassName="-top-28"
            isOppositeHovered={hoveredProfile === "harshita"}
            reduceMotion={reduceMotion}
          />

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 110, damping: 22, mass: 0.7, delay: 0.3 }}
            className="mt-4 md:mt-5"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              <span className="text-accent">02</span>
              <span aria-hidden="true" className="h-px w-5 bg-white/20" />
              <span>The Engineer</span>
            </div>
            <h3
              id="human-yash"
              className="mt-3 font-sans text-[clamp(1.875rem,3vw,2.25rem)] font-medium leading-none tracking-[-0.04em] text-[#F5F1EA]"
            >
              Aman Raj
            </h3>
            <motion.span
              aria-hidden="true"
              animate={{ width: hoveredProfile === "yash" ? "3.5rem" : "2rem" }}
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.35 }}
              className="mt-3 block h-px bg-accent"
            />
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">
              Engineering / Product
            </p>
            <p className="mt-5 max-w-[46ch] text-pretty text-[13px] leading-[1.65] text-neutral-300 md:text-[14px]">
              Yash is the engineer who loves the invisible work: architecture,
              performance, and the small decisions that keep a product fast and
              honest. He prototypes early, breaks things on purpose, and rebuilds
              them simpler.
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8">
              <div className="relative self-start border-l border-accent/30 pl-4">
                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? { height: "100%" } : { height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.5, delay: 0.08 }}
                  className="absolute left-[-1px] top-0 w-px bg-accent"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-opacity duration-300 group-hover/profile:opacity-100">
                  Enjoys building
                </span>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-neutral-300 md:text-[14px]">
                  Tools that make complex products feel effortless — and the
                  scaffolding that lets design move fast without breaking.
                </p>
              </div>

              <dl className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-opacity duration-300 group-hover/profile:opacity-100">
                  Off the clock
                </dt>
                <dd className="mt-2.5 max-w-[24ch] text-[13px] leading-[1.6] text-neutral-300 md:text-[14px]">
                  product engineering, performance, open source, film photography
                </dd>
              </dl>
            </div>
          </motion.div>
        </article>

      </div>

    </section>
  );
}
