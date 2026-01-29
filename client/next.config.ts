import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "skmsbd.com",
      },
      {
        protocol: "https",
        hostname: "rlinetrans.com",
      },
      {
        protocol: "https",
        hostname: "bentranspvtltd.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  trailingSlash: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
