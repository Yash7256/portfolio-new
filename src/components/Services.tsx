"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMarqueeTiming } from "./useMarqueeTiming";

const services = [
  {
    name: "Web Development",
    discipline: "Engineering",
    detail: "React / Next.js",
    scope: "Design to Launch",
  },
  {
    name: "Product Design",
    discipline: "Design",
    detail: "Interface / Systems",
    scope: "Research to UI",
  },
  {
    name: "AI Solutions",
    discipline: "Applied AI",
    detail: "LLM / Automation",
    scope: "Prototype to Production",
  },
  {
    name: "Website Maintenance",
    discipline: "Care",
    detail: "Performance / Updates",
    scope: "Ongoing Support",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();
  const { marqueeRef, duration } = useMarqueeTiming();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 border-t border-white/10 select-none"
    >
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: "spring", stiffness: 130, damping: 24, mass: 0.7 }}
        className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12"
      >
      </motion.div>

      <h2 id="services-heading" className="sr-only">
        Services
      </h2>

      <div
        aria-hidden="true"
        className="pb-6 md:pb-8 border-b border-white/10 overflow-hidden"
      >
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 130, damping: 24, mass: 0.7 }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" }}
            ref={marqueeRef}
            className="flex w-max whitespace-nowrap will-change-transform"
          >
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center">
                {[0, 1].map((j) => (
                  <span
                    key={j}
                    className="inline-flex w-max shrink-0 whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em]"
                  >
                    Services<span aria-hidden="true" className="inline-block px-16">·</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="divide-y divide-white/10 mt-6 md:mt-8">
        {services.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -1, scale: 1.002 }}
            whileTap={reduceMotion ? undefined : { scale: 0.998 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 24,
              mass: 0.55,
              delay: reduceMotion ? 0 : 0.18 + idx * 0.1,
            }}
            className="group rounded-lg px-2 py-5 transition-colors duration-300 hover:bg-white/[0.02] hover:ring-1 hover:ring-white/15 md:py-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-[11px] text-neutral-500 w-8">
                [0{idx + 1}]
              </span>
              <span className="font-sans text-[18px] md:text-[21px] font-semibold text-foreground group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="font-sans text-[14px] md:text-[15px] text-neutral-400">
                {item.discipline}
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-[12px] md:text-[13px] font-mono text-neutral-400">
              <span className="text-neutral-500">{item.detail}</span>
              <span className="text-neutral-300 font-medium">{item.scope}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
