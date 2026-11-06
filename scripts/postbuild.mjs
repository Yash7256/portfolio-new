import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const file = path.resolve(
  import.meta.dirname,
  "../build/client/__spa-fallback.html",
);

if (!existsSync(file)) {
  console.error("postbuild: build/client/__spa-fallback.html not found");
  process.exit(1);
}

let html = readFileSync(file, "utf8");

html = html
  .replace(/<title>[^<]*<\/title>/, "<title>Page not found | Anvik Labs</title>")
  .replace(/<meta name="robots"[^>]*>/g, "")
  .replace(/<link rel="canonical"[^>]*>/g, "")
  .replace(/<meta name="description"[^>]*>/g, "")
  .replace(/<meta name="application-name"[^>]*>/g, "")
  .replace(/<meta name="author"[^>]*>/g, "")
  .replace(/<meta property="og:[^"]*"[^>]*>/g, "")
  .replace(/<meta name="twitter:[^"]*"[^>]*>/g, "");

html = html.replace(
  "</head>",
  '<meta name="robots" content="noindex"/></head>',
);

writeFileSync(file, html);
console.log("postbuild: rewrote SPA fallback as a noindex 404 shell");
