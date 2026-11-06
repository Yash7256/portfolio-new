import { Link, useParams, type LoaderFunctionArgs, type MetaFunction } from "react-router";
import Image from "@/components/Img";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getNextWork, getWork } from "@/data/works";
import { createMeta, createWorkDescription, site } from "@/lib/site";
import { createBreadcrumbJsonLd } from "@/lib/schema";

export function loader({ params }: LoaderFunctionArgs) {
  if (!getWork(params.slug ?? "")) {
    throw new Response("Work not found", { status: 404 });
  }
  return null;
}

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

export const meta: MetaFunction = ({ params }) => {
  const work = getWork(params.slug ?? "");

  if (!work) {
    return [
      { title: "Work not found | Anvik Labs" },
      { name: "robots", content: "noindex" },
    ];
  }

  return createMeta({
    title: `${work.name} | Anvik Labs`,
    description: createWorkDescription(work),
    path: `/works/${work.slug}`,
    image: work.hero.src,
    imageAlt: work.hero.alt,
    imageWidth: work.hero.width,
    imageHeight: work.hero.height,
  });
};

export default function WorkPage() {
  const { slug = "" } = useParams();
  const work = getWork(slug);

  if (!work) {
    return (
      <>
        <Navbar />
        <main id="main-content" className="flex flex-1 flex-col items-start justify-center gap-6 pt-24 md:pt-28">
          <h1 className="font-sans text-[clamp(2rem,7vw,6rem)] font-medium uppercase leading-[0.9] tracking-[-0.05em] break-words">
            Work not found
          </h1>
          <Link
            to="/works"
            className={`${mono} transition-opacity duration-200 hover:opacity-50`}
          >
            [ &larr; ALL WORKS ]
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const next = getNextWork(work.slug);

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-24 md:pt-28">
        <JsonLd
          data={createBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Works", url: `${site.url}/works` },
            { name: work.name, url: `${site.url}/works/${work.slug}` },
          ])}
        />
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 border-b border-white/10 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500"
        >
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/works" className="transition-colors hover:text-foreground">Works</Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-300">{work.name}</span>
        </nav>
        <article className="flex flex-1 flex-col">
          <header className="pt-8 md:pt-12">
            <div className={`${mono} flex items-center justify-between gap-4`}>
              <Link
                to="/works"
                className="transition-opacity duration-200 hover:opacity-50"
              >
                [ &larr; ALL WORKS ]
              </Link>
              <span>[{work.index}]</span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:mt-16 md:grid-cols-[50%_1fr] md:items-end md:gap-8">
              <div aria-hidden="true" className="font-sans text-[clamp(2rem,7vw,7.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.05em] break-words">
                {work.name}
              </div>
              <p className="max-w-[42ch] font-sans text-[15px] sm:text-[18px] leading-[1.4] md:pb-2 md:text-[20px]">
                {work.summary}
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-border py-5 sm:mt-12 sm:py-6 md:mt-16 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>DISCIPLINES</dt>
                <dd className={`${mono}`}>{work.services.join(" / ")}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>YEAR</dt>
                <dd className={mono}>{work.year}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>INDEX</dt>
                <dd className={mono}>{work.index}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>FORMAT</dt>
                <dd className={mono}>{work.category}</dd>
              </div>
            </dl>
          </header>

          <figure className="mt-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-light-surface">
              <Image
                src={work.hero.src}
                alt={work.hero.alt}
                fill
                className="object-cover"
              />
            </div>
            <figcaption
              className={`${mono} mt-3 flex items-baseline justify-between gap-4`}
            >
              <span>
                {work.name} / {work.year}
              </span>
              <span>{work.index}.01</span>
            </figcaption>
          </figure>

          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[50%_1fr]">
              <h2 className={mono}>ABOUT THE PROJECT</h2>
              <div className="max-w-[58ch]">
                <p className="font-sans text-[24px] leading-[1.15] tracking-[-0.02em] md:text-[32px]">
                  {work.intro}
                </p>
                {work.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 font-sans text-[16px] leading-[1.5]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section
            aria-label={`${work.name} gallery`}
            className="pb-20 md:pb-28"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {work.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={index === 0 ? "md:col-span-2" : undefined}
                >
                  <div
                    className={`relative overflow-hidden bg-light-surface ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono} mt-3 flex items-baseline justify-between gap-4`}
                  >
                    <span>
                      {work.name} / {work.index}.{String(index + 2).padStart(2, "0")}
                    </span>
                    <span>{work.year}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="border-t border-border py-16 md:py-24">
            <Link to={`/works/${next.slug}`} className="group block">
              <div
                className={`${mono} flex items-center justify-between gap-4 text-muted`}
              >
                <span>NEXT PROJECT</span>
                <span>{next.index}</span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <h2 className="font-sans text-[clamp(36px,6vw,96px)] font-medium uppercase leading-[0.9] tracking-[-0.04em] transition-opacity duration-200 group-hover:opacity-50">
                  {next.name}
                </h2>
                <span className={`${mono} shrink-0 pb-2`}>[ &rarr; ]</span>
              </div>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
