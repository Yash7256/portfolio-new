"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What services do you offer?",
    a: "We specialize in end-to-end digital craft: from art direction, bespoke brand identity, and design systems, to native Framer development, motion design, and high-performance frontend architecture.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Standard one-page or showcase projects typically take 7 to 14 business days. Comprehensive brand systems or multi-page CMS platforms usually take 3 to 5 weeks from kickoff to final deployment.",
  },
  {
    q: "Do you only work in Framer?",
    a: "While Framer is our preferred tool for lightning-fast visual execution and real-time client collaboration, we also engineer custom Next.js, React, Tailwind, and WebGL experiences when complex architectures demand it.",
  },
  {
    q: "Can you handle both design and build?",
    a: "Yes. Blending design and code with zero handoff friction is our core advantage. You work directly with the creator who both designs the visual identity and builds the production site.",
  },
  {
    q: "Do you offer brand strategy too?",
    a: "Absolutely. Visual execution only works when grounded in clear positioning. We define core messaging, visual hierarchy, typography tone, and competitive differentiators before opening design software.",
  },
  {
    q: "What’s your process like?",
    a: "Our process is structured in four clear phases: Discovery & Architecture, Visual Identity & Art Direction, Native Build & Motion Implementation, and QA, Performance Tuning & Global Launch.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Help Center</span>
          <span className="text-neutral-500 font-sans">ヘルプ</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 12)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Clarifications</span>
        </div>
      </div>

      {/* Headline & Subtitle */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
            FAQ.
          </h2>
        </div>
        <div className="max-w-md">
          <p className="font-sans text-[14px] md:text-[15px] text-neutral-400 leading-relaxed">
            Clarifying Deliverable&apos;s Before They Begin with Real Process and Honest <span className="text-neutral-300 font-medium">アンサー.</span>
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-white/10 mt-6">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5 md:py-6">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono text-[12px] text-neutral-500 w-8">
                    [0{idx + 1}]
                  </span>
                  <span className="font-sans text-[17px] md:text-[20px] font-medium text-foreground group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                </div>

                <span
                  className={`w-7 h-7 rounded-full border border-white/15 flex items-center justify-center font-mono text-[14px] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-45 bg-white text-black border-white" : "text-neutral-400"
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 md:pl-16 pr-4 pt-3 pb-2 text-[14px] md:text-[15px] font-sans text-neutral-400 leading-relaxed max-w-3xl">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
