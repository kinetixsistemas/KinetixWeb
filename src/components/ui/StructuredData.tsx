import Script from 'next/script';

export interface JsonLd {
  '@context': 'https://schema.org';
  '@type': string | string[];
  [key: string]: unknown;
}

export default function StructuredData({ data, id = 'structured-data' }: { data: JsonLd | JsonLd[]; id?: string }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
