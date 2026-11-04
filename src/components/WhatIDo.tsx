"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const statement =
  "Hi, I’m Harshita Upadhyay, a UI/UX and Product Designer creating simple, accessible interfaces backed by user research and design systems. My reusable components are used by a large community of designers. I’ve worked at Finn AI and Skedio Creative Studio, and I’m building Designers Room, a platform that brings the design journey together in one place.";

const words = statement.split(" ");

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className={`${mono} flex items-start justify-between`}
      >
        <span>WHAT I DO</span>
        <span>A SELECTED APPROACH</span>
      </motion.div>

      <p className="mt-16 max-w-none font-sans text-[32px] font-medium uppercase leading-[1.05] tracking-[-0.04em] md:mt-20 md:text-[48px] lg:text-[60px]">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ color: "var(--color-muted)" }}
            whileInView={{ color: "var(--color-foreground)" }}
            viewport={{ once: true, margin: "-10% 0px -15% 0px" }}
            transition={{ duration: 0.4, ease, delay: (index % 10) * 0.04 }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-12 md:mt-16"
      >
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[24ch] font-sans text-[18px] leading-[1.2]">
            Design is the silent ambassador of your brand.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
