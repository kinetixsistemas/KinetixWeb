import { siteConfig } from '../config/site';
import { googleReviews } from '../content/reviews';
import type { JsonLd } from '../components/ui/StructuredData';
import type { FaqItem } from '../content/faqs';

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsapp.display,
    openingHours: siteConfig.businessHours.schema,
    founder: { '@type': 'Person', name: siteConfig.founder },
    areaServed: siteConfig.location.country,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.countryCode,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function reviewsSchema(): JsonLd[] {
  return googleReviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: review.quote,
    author: { '@type': 'Person', name: review.author },
    reviewRating: { '@type': 'Rating', ratingValue: review.rating, bestRating: 5 },
    itemReviewed: { '@type': 'Organization', name: siteConfig.name },
    url: review.href,
  }));
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'es-VE',
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  provider?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.name,
    provider: { '@type': 'Organization', name: input.provider ?? siteConfig.name },
    areaServed: siteConfig.location.country,
    url: `${siteConfig.url}${input.path}`,
  };
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.publishedTime,
    dateModified: input.modifiedTime ?? input.publishedTime,
    author: { '@type': 'Organization', name: siteConfig.author },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}${input.path}`,
  };
}
