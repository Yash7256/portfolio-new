import { Link, useParams, type LoaderFunctionArgs, type MetaFunction } from "react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFoundPage from "@/components/NotFoundPage";
import JsonLd from "@/components/JsonLd";
import journal from "@/data/journal";
import { createMeta, site } from "@/lib/site";
import { createArticleJsonLd, createBreadcrumbJsonLd } from "@/lib/schema";
import { getService } from "@/data/services";

const mono =
  "font-mono uppercase tracking-[0.14em] text-[11px] leading-[1.2]";

function getPost(id: string) {
  return journal.find(
    (post) => post.id === id && !post.draft && !post.externalUrl,
  );
}

export function loader({ params }: LoaderFunctionArgs) {
  if (!getPost(params.id ?? "")) {
    throw new Response("Journal post not found", { status: 404 });
  }
  return null;
}

function formatDate(iso: string) {
  const parsed = new Date(iso);

  if (Number.isNaN(parsed.getTime())) return iso;

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export const meta: MetaFunction = ({ params }) => {
  const post = getPost(params.id ?? "");

  if (!post) {
    return [
      { title: "Page not found | Anvik Labs" },
      { name: "robots", content: "noindex" },
    ];
  }

  return createMeta({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.id}`,
  });
};

export default function JournalPostPage() {
  const { id = "" } = useParams();
  const post = getPost(id);

  if (!post) {
    return <NotFoundPage />;
  }

  const articleJsonLd = createArticleJsonLd(post);

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col pt-[var(--header-height)]"
      >
        <JsonLd
          data={createBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Journal", url: `${site.url}/journal` },
            { name: post.title, url: `${site.url}/journal/${post.id}` },
          ])}
        />
        {articleJsonLd && <JsonLd data={articleJsonLd} />}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 border-b border-white/10 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500"
        >
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/journal" className="transition-colors hover:text-foreground">Journal</Link>
          <span aria-hidden="true">/</span>
          <span className="truncate text-neutral-300">{post.title}</span>
        </nav>
        <article className="py-14 md:py-20">
          <div className={`${mono} flex items-center justify-between gap-4 text-neutral-500`}>
            <Link
              to="/journal"
              className="transition-colors duration-200 hover:text-foreground"
            >
              [ &larr; ALL ARTICLES ]
            </Link>
            <span>{post.category}</span>
          </div>

          <h1 className="mt-8 max-w-[18ch] font-sans text-[clamp(2.1rem,5.5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground break-words md:mt-12">
            {post.title}
          </h1>

          <div className={`${mono} mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-neutral-500`}>
            <time dateTime={post.datePublished ?? post.date}>
              {formatDate(post.datePublished ?? post.date)}
            </time>
            {post.authorUrl ? (
              <a
                href={post.authorUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {post.author}
              </a>
            ) : (
              <span>{post.author}</span>
            )}
            {post.authorRole && <span>{post.authorRole}</span>}
          </div>

          <div className="mt-10 max-w-[68ch]">
            <p className="font-sans text-[20px] leading-relaxed text-foreground md:text-[24px]">
              {post.answer ?? post.excerpt}
            </p>

            {post.sections?.map((section) => (
              <section key={section.heading} className="mt-12 border-t border-white/10 pt-6 md:mt-16 md:pt-8">
                <h2 className="font-sans text-[24px] font-medium tracking-[-0.025em] text-foreground md:text-[32px]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 text-[16px] leading-[1.6] text-neutral-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3 border-l border-accent/50 pl-5 text-[15px] leading-relaxed text-neutral-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.serviceSlug && getService(post.serviceSlug) && (
            <aside className="mt-12 border-t border-white/10 pt-6 md:mt-16 md:pt-8">
              <p className={`${mono} text-neutral-500`}>Related service</p>
              <Link
                to={`/services/${post.serviceSlug}`}
                className="mt-3 inline-flex text-[17px] text-foreground underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent"
              >
                {getService(post.serviceSlug).name} →
              </Link>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
