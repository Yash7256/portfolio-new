import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  type MetaFunction,
} from "react-router";
import Background from "@/components/Background";
import { site } from "@/lib/site";
import "./app/globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
};

export const meta: MetaFunction = () => [
  { title: site.title },
  { name: "description", content: site.description },
  { name: "application-name", content: site.name },
  { name: "author", content: site.name },
  { name: "theme-color", content: "#080808" },
  { property: "og:site_name", content: site.name },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Michroma&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground font-sans flex min-h-full flex-col antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Background />
        <div className="w-full flex flex-1 flex-col px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
}
