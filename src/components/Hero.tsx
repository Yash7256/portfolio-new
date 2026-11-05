const products = ["Chisel UI", "CyberSec Toolkit", "Designers Room"];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100svh-var(--header-height))] flex-col justify-between pb-3 pt-32 md:pb-5 md:pt-44"
    >
      <div className="grid flex-1 grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex h-full flex-col justify-between pb-2 pt-0 lg:col-span-7 xl:col-span-7">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
              Product design + engineering
            </p>
            <h1 className="mt-4 font-sans text-[clamp(2.1rem,3.8vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground">
              Curious by design.
              <br />
              Precise by engineering.
            </h1>
            <p className="mt-5 max-w-[52ch] font-sans text-[15px] leading-relaxed text-neutral-400 md:text-[16px]">
              It usually starts with an idea, a problem or just curiosity. We turn
              those beginnings into digital products through thoughtful design, web
              development and a little engineering obsession.
            </p>
          </div>

          <div className="mt-8 w-full border-y border-white/10 py-4 lg:mt-10">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-500">
              Selected products
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[15px] font-medium text-foreground md:text-[16px]">
              {products.map((product) => (
                <li key={product} className="flex items-center gap-5">
                  <span>{product}</span>
                  <span aria-hidden="true" className="text-accent">
                    /
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-end lg:col-span-5 lg:-mt-2 lg:-mr-[5vw] xl:-mr-[6vw] xl:col-span-5">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-white/10 border-r-0 bg-light-surface">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Anvik Labs product work reel"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div aria-hidden className="my-4 h-px w-full bg-white/15 md:my-5" />

      <div className="relative w-full overflow-visible py-2 md:py-3">
        <div className="relative z-10 flex w-full items-center justify-center font-sans font-bold leading-none tracking-[-0.045em] text-foreground">
          <span className="inline-block whitespace-nowrap font-michroma font-normal text-[clamp(2rem,12vw,12rem)] [word-spacing:0.2em]">
            Anvik Labs
          </span>
        </div>
      </div>

      <div aria-hidden className="my-2 h-px w-full bg-white/15 md:my-3" />

      <div className="flex flex-col items-center justify-between gap-3 pb-1 pt-1 font-mono text-[12px] tracking-[0.04em] text-neutral-400 sm:flex-row md:text-[12px]">
        <span>Independent studio / India</span>
        <a
          href="#featured-product"
          className="text-neutral-300 transition-colors duration-200 hover:text-foreground"
        >
          Selected work
        </a>
        <span>Working globally / 2026</span>
      </div>
    </section>
  );
}
