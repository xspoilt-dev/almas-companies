import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
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
      {
        protocol: "https",
        hostname: "specprodstorage.blob.core.windows.net",
      },
    ],
  },
  trailingSlash: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
