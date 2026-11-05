import { Link } from "react-router";

const capabilities = [
  "Product design",
  "Design systems",
  "Web development",
  "AI solutions",
];

export default function FeaturedProduct() {
  return (
    <section
      id="featured-product"
      aria-labelledby="featured-product-title"
      className="border-t border-white/10 py-12 md:py-20 lg:py-24"
    >
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 md:mb-14 lg:mb-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
          Studio product / 001
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em] text-neutral-300">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="w-full lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-light-surface">
            <video
              src="/designersroom.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Designers Room product showcase"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="flex flex-col py-1 md:py-2 lg:col-span-6">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
            Community product
          </p>
          <h2
            id="featured-product-title"
            className="mt-3 flex items-center gap-3 font-sans text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground md:gap-5"
          >
            <img
              src="/designersroom.svg"
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className="h-[0.95em] w-auto shrink-0"
            />
            <span>Designers Room</span>
          </h2>

          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.7] text-neutral-300 md:mt-6 md:text-[17px] xl:text-[18px]">
            <span className="text-accent">Designers Room</span> is a space for
            designers to learn, share, connect, and grow together. Everything a
            designer needs, all in one room.
          </p>

          <div className="mt-8 md:mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-black shadow-lg transition-colors hover:bg-neutral-200"
            >
              Explore Designers Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
