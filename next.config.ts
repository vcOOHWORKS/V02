import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Tailwind runs on global stylesheets only. CSS Modules must keep their
      // .module.css name, or Next stops scoping them and every class is undefined.
      "*.css": {
        condition: { all: [{ not: "foreign" }, { not: { path: "*.module.css" } }] },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
