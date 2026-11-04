"use client";

const awardsList = [
  {
    count: "27x",
    org: "Awwwards",
    category: "Site of the Day / Developer Award",
    desc: "Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.",
  },
  {
    count: "14x",
    org: "FWA",
    category: "FWA of the Day",
    desc: "Awarded for outstanding execution, seamless animation, and originality in modern digital experiences.",
  },
  {
    count: "09x",
    org: "CSSDA",
    category: "Special Kudos / Best UI/UX",
    desc: "Celebrated for front-end excellence, design innovation, and development precision across multiple showcases.",
  },
  {
    count: "08x",
    org: "Framer / Dribbble",
    category: "Featured Template / Showcase",
    desc: "Highlighted for strong typographic systems, visual hierarchy, and thoughtful layout built with intent.",
  },
];

export default function Awards() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Recognitions</span>
          <span className="text-neutral-500 font-sans">受賞歴</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 09)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Global Honors</span>
        </div>
      </div>

      {/* Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
          Awards (3)
        </h2>
        <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-widest">
          [ 58+ TOTAL ACCOLADES ]
        </span>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
        {awardsList.map((item, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="font-sans text-[clamp(2.8rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-none mb-3">
                {item.count}
              </div>
              <div className="font-sans font-semibold text-[18px] text-foreground mb-1">
                {item.org}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-4">
                {item.category}
              </div>
            </div>

            <p className="font-sans text-[13px] md:text-[14px] text-neutral-400 leading-relaxed border-t border-white/10 pt-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
