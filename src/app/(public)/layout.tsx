import type { Metadata } from 'next';

import Nav from '../../components/Navbar';
import Footer from '../../components/Footer';
import Analytics from '../../components/Analytics';
import CookieBanner from '../../components/CookieBanner';
import StructuredData from '../../components/ui/StructuredData';
import { siteConfig } from '../../config/site';
import { createMetadata } from '../../lib/metadata';
import { organizationSchema, websiteSchema } from '../../lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} | Software, web y automatización en Venezuela`,
  description: siteConfig.description,
  path: '/',
});

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData data={[organizationSchema(), websiteSchema()]} />
      <Analytics />
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
      <CookieBanner />
    </>
  );
}
