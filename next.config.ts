import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    tsconfigPath: isGitHubPages ? "tsconfig.github.json" : "tsconfig.json",
  },
};

export default nextConfig;
