import { createOgImage, ogImageContentType, ogImageSize } from '@/lib/og-image';

export const dynamic = 'force-static';
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = 'Ted Ryu portfolio preview image';

export default function Image() {
  return createOgImage({
    eyebrow: 'Jaeyeong You · Ted Ryu',
    title: 'Backend-first full-stack developer',
    summary:
      'Designing and operating 0→1 SaaS, AI orchestration, and fintech systems with AWS and Kubernetes.',
    meta: '13+ years · AWS · Kubernetes · Terraform · Next.js · NestJS',
    siteName: 'jaeyeong.me',
  });
}
