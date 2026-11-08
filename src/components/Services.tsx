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
            className="group grid grid-cols-1 gap-3 py-6 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[minmax(0,6fr)_minmax(0,40fr)_minmax(0,20fr)_minmax(0,34fr)] md:items-center md:gap-x-4 md:py-7 lg:grid-cols-[minmax(0,4fr)_minmax(0,44fr)_minmax(0,20fr)_minmax(0,32fr)] lg:gap-x-6"
          >
            <div className="grid grid-cols-[auto_1fr] items-baseline gap-3 md:contents">
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
            <div className="grid grid-cols-1 gap-1 font-mono text-[12px] text-neutral-400 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-5 lg:gap-x-6">
              <span className="text-neutral-500">{item.detail}</span>
              <span className="text-neutral-300">{item.scope}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
