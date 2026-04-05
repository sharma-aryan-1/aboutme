import type { NextConfig } from "next";

/**
 * GitHub Pages project sites live at https://<user>.github.io/<repo>/
 * Set NEXT_PUBLIC_BASE_PATH=/<repo> when building for Pages (see deploy workflow).
 * For a user site (repo named <user>.github.io) at the domain root, leave unset or use "".
 */
const raw = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
const basePath =
  raw === "" ? undefined : raw.startsWith("/") ? raw : `/${raw}`;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
