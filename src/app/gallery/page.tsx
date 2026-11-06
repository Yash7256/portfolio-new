import { Link, type MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "@/components/Img";
import { works } from "@/data/works";
import { createMeta } from "@/lib/site";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Gallery | Anvik Labs",
    description: "A closer look at selected Anvik Labs product and brand work.",
    path: "/gallery",
  });

const images = works.map((work) => ({ image: work.hero, work }));

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="flex flex-1 flex-col pb-20 pt-32 md:pb-28 md:pt-44"
      >
        <header className="border-b border-white/10 pb-8 md:pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.12em] text-neutral-500">
            <span>Archive / visuals</span>
            <span>{String(images.length).padStart(2, "0")} images</span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h1 className="font-sans text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.05em] text-foreground">
              Gallery.
            </h1>
            <p className="max-w-[42ch] text-[14px] leading-relaxed text-neutral-400 md:text-[15px]">
              A closer look at selected work: interfaces, printed matter and the
              details that do not always fit on a project page.
            </p>
          </div>
        </header>

        <section
          aria-label="Selected project imagery"
          className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3 md:gap-6 md:pt-14"
        >
          {images.map(({ image, work }, index) => (
            <figure
              key={work.slug}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <Link
                to={`/works/${work.slug}`}
                className="group block focus-visible:outline-offset-8"
              >
                <div
                  className={`relative overflow-hidden border border-white/10 bg-light-surface ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em]">
                  <span className="text-foreground">{work.name}</span>
                  <span className="text-neutral-500">
                    {work.index} / {work.year}
                  </span>
                </figcaption>
              </Link>
            </figure>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
