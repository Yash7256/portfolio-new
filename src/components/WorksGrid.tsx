"use client";

import { Link } from "react-router";
import Image from "@/components/Img";
import type { Work } from "@/data/works";
import { useShuffled } from "@/lib/useShuffled";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

export default function WorksGrid({ works }: { works: Work[] }) {
  const orderedWorks = useShuffled(works);

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-14 md:grid-cols-2 md:gap-x-6 md:gap-y-20">
      {orderedWorks.map((work, index) => (
        <article
          key={work.slug}
          className={index % 2 === 1 ? "md:mt-24" : undefined}
        >
          <Link to={`/works/${work.slug}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-light-surface">
              <Image
                src={work.hero.src}
                alt={work.hero.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div
              className={`${mono} mt-3 flex items-baseline justify-between gap-4`}
            >
              <span>{work.index}</span>
              <span className="text-right">{work.name}</span>
            </div>

            <div
              className={`${mono} mt-1 flex items-baseline justify-between gap-4 text-muted`}
            >
              <span>{work.category}</span>
              <span>{work.year}</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
