import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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
  { name: "theme-color", content: "#000000" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground font-sans flex min-h-full flex-col antialiased">
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

export default function App() {
  return <Outlet />;
}
