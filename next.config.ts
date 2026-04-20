import createBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
};

export default withBundleAnalyzer(nextConfig);
