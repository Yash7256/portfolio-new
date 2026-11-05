"use client";

import { Link } from "react-router";

const plans = [
  {
    name: "Starter Plan",
    price: "$99",
    period: "/Month",
    desc: "Perfect for small launches and personal sites that need a fast online presence.",
    highlight: false,
    features: [
      "One-page Framer site",
      "Custom layout & visuals",
      "Mobile-first responsive build",
      "Fast delivery (within 7 days)",
      "Design system setup",
      "SEO-ready structure",
      "Basic CMS integration",
      "Contact form setup",
    ],
  },
  {
    name: "Growth Plan",
    price: "$299",
    period: "/Month",
    desc: "Designed for growing brands that need flexibility and CMS support.",
    highlight: true,
    features: [
      "Up to 5 pages",
      "Framer CMS-powered sections",
      "Component-based structure",
      "Motion design & transitions",
      "Clean UX-focused layout",
      "Device-optimized responsiveness",
      "Style guide system",
      "Email capture / integrations",
    ],
  },
  {
    name: "Full Scope Plan",
    price: "$899",
    period: "/Month",
    desc: "Best for studios or teams needing structure and enterprise-level execution.",
    highlight: false,
    features: [
      "10+ pages with CMS",
      "Advanced layout strategy",
      "Full brand system support",
      "Animation direction",
      "Custom-built components",
      "Framer CMS training",
      "Launch support + QA",
      "Performance optimization",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Design Packages</span>
          <span className="text-neutral-500 font-sans">料金</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® · 10)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Transparent Tiers</span>
        </div>
      </div>

      {/* Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
            Pricing Tiers
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-neutral-400">
          <span>CUSTOM OPTIONS</span>
          <span>·</span>
          <span>NO HIDDEN FEES</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 md:mt-14 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl md:rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
              plan.highlight
                ? "bg-neutral-900 border-white/40 shadow-2xl relative ring-1 ring-white/20"
                : "bg-neutral-950/60 border-white/10 hover:border-white/20"
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                POPULAR
              </span>
            )}

            <div>
              {/* Price & Name */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-sans text-[clamp(2.5rem,4vw,3.75rem)] font-bold text-white tracking-tight">
                  {plan.price}
                </span>
                <span className="font-mono text-[13px] text-neutral-400 font-normal">
                  {plan.period}
                </span>
              </div>

              <h3 className="font-sans text-[20px] font-semibold text-foreground tracking-tight mb-2">
                {plan.name}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-neutral-400 leading-relaxed mb-6">
                {plan.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-2.5 pt-6 border-t border-white/10 text-[13px] font-sans text-neutral-300">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/contact"
                className={`w-full py-3 rounded-full flex items-center justify-center font-sans font-semibold text-[13px] tracking-tight transition-colors ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border border-white/20 text-white hover:bg-white hover:text-black"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
