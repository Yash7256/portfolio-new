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
import { createMeta, organizationId, site, websiteId } from "@/lib/site";
import "./app/globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.ogImage}`,
  description: site.description,
  areaServed: site.areaServed,
  email: site.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    areaServed: site.areaServed,
    availableLanguage: ["en"],
  },
  ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
  ...(site.foundingDate ? { foundingDate: site.foundingDate } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

export const meta: MetaFunction = () =>
  createMeta({ description: site.description });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="YKwDO53XArYWQP27b8PIS4l1ALXtKu3OeDreuFCzuN4"
        />
        <meta name="theme-color" content={site.themeColor} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
