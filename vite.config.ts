import { defineConfig, type Plugin } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

function legacyWorkRedirect(): Plugin {
  return {
    name: "legacy-work-redirect",
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
          if (pathname === "/work" || pathname === "/work/") {
            res.statusCode = 301;
            res.setHeader("Location", "/works");
            res.end();
            return;
          }
          next();
        });
      };
    },
  };
}

export default defineConfig({
  appType: "custom",
  plugins: [legacyWorkRedirect(), reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
});
