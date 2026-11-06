import { Link } from "react-router";

const services = [
  {
    name: "Web Development",
    slug: "/services/web-development",
    discipline: "Engineering",
    detail: "React / TypeScript",
    scope: "Design to launch",
  },
  {
    name: "Product Design",
    slug: "/services/product-design",
    discipline: "Design",
    detail: "Interface / Systems",
    scope: "Research to UI",
  },
  {
    name: "AI Solutions",
    slug: "/services/ai-solutions",
    discipline: "Applied AI",
    detail: "LLM / Automation",
    scope: "Prototype to production",
  },
  {
    name: "Website Maintenance",
    slug: "/services/website-maintenance",
    discipline: "Care",
    detail: "Performance / Updates",
    scope: "Ongoing support",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-white/10 py-16 md:py-24"
    >
      <div className="pb-8 md:pb-10">
        <h2
          id="services-heading"
          className="mt-3 font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          What we do.
        </h2>
      </div>

      <div className="divide-y divide-white/10 border-t border-white/10">
        {services.map((item, index) => (
          <Link
            key={item.name}
            to={item.slug}
            className="group grid gap-3 py-6 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[48px_minmax(0,1.2fr)_minmax(0,1fr)_auto] md:items-center md:gap-6 md:py-7"
          >
            <div className="flex items-baseline gap-3 md:contents">
              <span className="font-mono text-[12px] text-neutral-500">
                [0{index + 1}]
              </span>
              <h3 className="font-sans text-[18px] font-semibold text-foreground transition-colors group-hover:text-accent md:text-[21px]">
                {item.name}
              </h3>
            </div>
            <span className="font-sans text-[14px] text-neutral-400 md:text-[15px]">
              {item.discipline}
            </span>
            <div className="flex items-center justify-between gap-6 font-mono text-[12px] text-neutral-400 md:justify-end md:text-[12px]">
              <span className="text-neutral-500">{item.detail}</span>
              <span className="text-neutral-300">{item.scope}</span>
            </div>
            <span
              aria-hidden="true"
              className="hidden font-mono text-[12px] text-neutral-600 transition-colors duration-200 group-hover:text-accent md:block"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
