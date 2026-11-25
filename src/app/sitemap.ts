import type { MetadataRoute } from 'next';
import { siteConfig } from '../config/site';
import { cases } from '../content/cases';
import { posts } from '../content/blog';
import { services } from '../content/services';

type SitemapEntry = MetadataRoute.Sitemap[number];

type EntryOptions = {
  lastModified?: string | Date;
  changeFrequency?: SitemapEntry['changeFrequency'];
  priority?: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const entry = (path: string, options: EntryOptions = {}): SitemapEntry => ({
    url: `${siteConfig.url}${path}`,
    lastModified: options.lastModified ?? buildDate,
    changeFrequency: options.changeFrequency ?? 'monthly',
    priority: options.priority ?? 0.7,
    alternates: {
      languages: {
        'es-VE': `${siteConfig.url}${path}`,
      },
    },
  });

  return [
    entry('/', { changeFrequency: 'weekly', priority: 1 }),
    entry('/servicios', { priority: 0.9 }),
    ...services.map((service) => entry(`/servicios/${service.slug}`, { priority: 0.8 })),
    entry('/portafolio', { priority: 0.8 }),
    ...cases.map((item) => entry(`/portafolio/${item.slug}`)),
    entry('/demos', { priority: 0.8 }),
    entry('/blog', { changeFrequency: 'weekly', priority: 0.8 }),
    ...posts.map((post) =>
      entry(`/blog/${post.slug}`, {
        lastModified: post.publishedTime,
        changeFrequency: 'yearly',
        priority: 0.6,
      }),
    ),
    entry('/nosotros', { priority: 0.5 }),
    entry('/cotizar', { priority: 0.6 }),
    entry('/contacto', { changeFrequency: 'yearly', priority: 0.5 }),
    entry('/desarrollo-web-barquisimeto', { priority: 0.7 }),
    entry('/privacidad', { changeFrequency: 'yearly', priority: 0.3 }),
    entry('/terminos', { changeFrequency: 'yearly', priority: 0.3 }),
    entry('/cookies', { changeFrequency: 'yearly', priority: 0.3 }),
    entry('/descargo', { changeFrequency: 'yearly', priority: 0.3 }),
  ];
}
