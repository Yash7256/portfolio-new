"use client";

import { Link } from "react-router";
import Image from "@/components/Img";
import { motion, useReducedMotion } from "framer-motion";
import type { MockupMedia } from "@/lib/mockups";
import { useShuffled } from "@/lib/useShuffled";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const projects = [
  { index: "001", name: "CHRONICAE", slug: "chronicae" },
  { index: "002", name: "ARCANE STUDIO", slug: "arcane-studio" },
  { index: "003", name: "SOLARA", slug: "solara" },
  { index: "004", name: "EDIFIER® MAGAZINE", slug: "edifier-magazine" },
  { index: "005", name: "ROWAN KEATS", slug: "rowan-keats" },
  { index: "006", name: "BIG BABY TAPE® MAGAZINE", slug: "big-baby-tape-magazine" },
  { index: "007", name: "CARTES D'ATELIER", slug: "cartes-datelier" },
  { index: "008", name: "PALMIRA", slug: "palmira" },
  { index: "009", name: "SCENE PRO", slug: "scene-pro" },
  { index: "010", name: "EXALA (A)", slug: "exala" },
];

export default function Latest({ mockups }: { mockups: MockupMedia[] }) {
  const orderedMedia = useShuffled(mockups);
  const doubled = [...orderedMedia, ...orderedMedia];
  const reduceMotion = useReducedMotion();

  return (
    <section id="latest" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="flex items-end justify-between gap-4"
      >
        <h2 className="font-sans text-[48px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[72px]">
          WORKS
        </h2>
        <Link
          to="/works"
          className={`${mono} shrink-0 transition-opacity duration-200 hover:opacity-50`}
        >
          [ VIEW ALL ]
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="mt-12 overflow-hidden md:mt-16"
      >
        <div className="group relative">
          <div
            className="flex w-max animate-[works-carousel_80s_linear_infinite] gap-2 [animation-play-state:running] group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${orderedMedia.length * 8}s` }}
          >
            {doubled.map((media, idx) => {
              const project = projects[idx % projects.length];

              return (
                <div
                  key={`${media.src}-${idx}`}
                  className="w-[420px] shrink-0 md:w-[620px]"
                >
                  <Link to={`/works/${project.slug}`} className="group/card block">
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-light-surface transition-transform duration-300 ease-out group-hover/card:-translate-y-1">
                      {media.type === "video" ? (
                        <video
                          src={media.src}
                          aria-label={`${project.name} mockup video`}
                          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                          autoPlay={!reduceMotion}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <Image
                          src={media.src}
                          alt={`${project.name} mockup`}
                          fill
                          loading={idx < orderedMedia.length ? "eager" : "lazy"}
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className={`${mono} mt-3 flex items-center justify-between`}>
                      <span>{project.index}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
