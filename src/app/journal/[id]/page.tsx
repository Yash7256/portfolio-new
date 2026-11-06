import { Link, useParams, type MetaFunction } from "react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFoundPage from "@/components/NotFoundPage";
import journal from "@/data/journal";
import { createMeta } from "@/lib/site";

const mono =
  "font-mono uppercase tracking-[0.14em] text-[11px] leading-[1.2]";

function getPost(id: string) {
  return journal.find((post) => post.id === id && !post.draft);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
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

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col pt-[var(--header-height)]"
      >
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
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime}</span>
          </div>

          <p className="mt-10 max-w-[62ch] font-sans text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
            {post.excerpt}
          </p>

          <p className="mt-8 max-w-[58ch] text-[14px] leading-relaxed text-neutral-400">
            The full essay is in progress. Check back soon.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
