import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gray-certain-lungfish-417.mypinata.cloud',
        port: '',
        pathname: '/files/**',
      },
    ],
  },
};

export default nextConfig;
