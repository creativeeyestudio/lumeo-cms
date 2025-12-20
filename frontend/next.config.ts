import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  transpilePackages: ["@lumeo-cms/base-theme"],

  // Images
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "167.235.64.198",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
