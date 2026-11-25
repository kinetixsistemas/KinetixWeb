import type { Metadata } from 'next';
import { siteConfig } from '../config/site';

export interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

export function createMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  publishedTime,
}: PageMetadataInput): Metadata {
  const isPreview = process.env.VERCEL_ENV === 'preview';

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.author }],
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — desarrollo web y automatización en Venezuela`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
    robots: isPreview
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
