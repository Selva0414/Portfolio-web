import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-web",
  assetPrefix: "/Portfolio-web/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
