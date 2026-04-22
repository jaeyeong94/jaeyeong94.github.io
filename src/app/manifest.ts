import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ted Ryu · Portfolio',
    short_name: 'Ted Ryu',
    description:
      'Portfolio for Jaeyeong You (Ted Ryu), a backend-first full-stack developer building 0→1 SaaS, AI orchestration, and fintech systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f16',
    theme_color: '#0b0f16',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
