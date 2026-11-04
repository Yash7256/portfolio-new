"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const stats = [
  { index: "01", value: 200, suffix: "+", label: "UI Component User" },
  { index: "02", value: 2, suffix: "+", label: "YEARS IN PRACTICE" },
  { index: "03", value: 25, suffix: "+", label: "DELIVERED WORKS" },
  { index: "04", value: 100, suffix: "%", label: "END-TO-END DELIVERY" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Advantage() {
  return (
    <section id="the-advantage" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="md:grid md:grid-cols-2 md:gap-8"
      >
        <span className={mono}>THE ADVANTAGE</span>
        <div className="mt-6 flex flex-col gap-4 md:mt-0 md:flex-row md:items-start md:justify-between">
          <h2 className="font-sans text-[32px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[48px] lg:text-[56px]">
            EXPERIENCE
            <br />
            GUIDES THE WORK
          </h2>
          <span className={mono}>EXECUTION</span>
        </div>
      </motion.div>

      <div className="mt-12 md:mt-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: index * 0.05 }}
            className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-foreground py-5 md:min-h-[64px] md:grid-cols-[50%_1fr] md:items-center md:py-0"
          >
            <span className={mono}>[{stat.index}]</span>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <span className="font-sans text-[32px] leading-none tracking-[-0.03em] md:text-[44px]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className={mono}>{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
