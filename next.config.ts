import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: "/home/faisal/Gh-Projects/mohdfaisalbidda.github.io",
  },
};

export default nextConfig;
