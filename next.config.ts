import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  async redirects() {
    return [
      {
        source: '/about-01',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-services-01',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
