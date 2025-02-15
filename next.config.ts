import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb"
    },
  }
};

export default nextConfig;
