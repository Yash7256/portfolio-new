"use client";

import { Link } from "react-router";
import { motion } from "framer-motion";

type AboutMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

const aboutMedia: AboutMedia = {
  type: "video",
  src: "/designersroom.mp4",
  alt: "Designers Room",
};

const capabilities = [
  "UI/UX Design",
  "Product Design",
  "Design Systems",
  "Interaction Design",
  "Web Development",
  "Frontend Engineering",
  "Web Applications",
  "Creative Development",
  "AI Solutions",
  "AI Automation",
  "Product Strategy",
  "Technical Discovery",
  "Performance Engineering",
  "CMS Development",
  "Website Maintenance",
  "Accessibility Audits",
];

export default function FeaturedProduct() {
  return (
    <section
      id="featured-product"
      aria-labelledby="featured-product-title"
      className="border-t border-white/10 py-12 select-none md:py-20 lg:py-24"
    >
      <div className="mb-10 w-full border-y border-white/10 bg-background py-3 md:mb-14 lg:mb-16">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="flex w-max whitespace-nowrap font-sans text-[13px] font-medium uppercase tracking-wider text-neutral-300 will-change-transform md:text-[14px]"
          >
            {[0, 1].map((half) => (
              <div
                key={half}
                aria-hidden={half === 1}
                className="flex items-center"
              >
                {capabilities.map((capability) => (
                  <span key={capability} className="flex items-center">
                    <span className="px-4 md:px-6">{capability}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1690px] px-0 lg:px-4 xl:px-5">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="w-full lg:col-span-6">
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 md:rounded-3xl md:p-1.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black md:rounded-[18px]">
                {aboutMedia.type === "video" ? (
                  <video
                    src={aboutMedia.src}
                    poster={aboutMedia.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Designers Room product showcase video"
                    className="h-full w-full object-contain object-center saturate-[0.7]"
                  />
                ) : (
                  <img
                    src={aboutMedia.src}
                    alt={aboutMedia.alt}
                    className="h-full w-full object-contain object-center"
                  />
                )}
                <img
                  src="/favicon.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[42%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-15 select-none"
                />
                <div className="absolute left-3 top-3 z-10 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-200 backdrop-blur-md motion-reduce:animate-none md:left-4 md:top-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Ongoing
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-1 md:py-2 lg:col-span-6">
            <h2
              id="featured-product-title"
              className="flex items-center gap-3 font-sans text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground md:gap-5"
            >
              <img
                src="/designersroom.svg"
                alt=""
                aria-hidden="true"
                className="h-[0.95em] w-auto shrink-0"
              />
              <span>Designers Room</span>
            </h2>

            <p className="mt-5 max-w-[58ch] text-pretty text-[16px] leading-[1.7] text-neutral-300 md:mt-6 md:text-[17px] xl:text-[18px]">
              <span className="text-accent">Designers Room</span> is a space for
              designers to learn, share, connect, and grow together. Everything a
              designer needs, all in one room.
            </p>

            <div className="mt-8 md:mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[13px] font-semibold tracking-tight text-black shadow-lg transition-colors hover:bg-neutral-200"
              >
                Explore Designers Room
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 12 12 4M5 4h7v7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
