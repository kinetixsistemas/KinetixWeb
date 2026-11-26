import { siteConfig } from '../config/site';

export default function SiteScripts() {
  return (
    <script
      defer
      src="/site-scripts.js"
      data-name={siteConfig.name}
      data-number={siteConfig.whatsapp.number}
      data-ga={process.env.NEXT_PUBLIC_GA_ID || ''}
      data-clarity={process.env.NEXT_PUBLIC_CLARITY_ID || ''}
      data-meta={process.env.NEXT_PUBLIC_META_PIXEL_ID || ''}
      data-tiktok={process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || ''}
      data-gtm={process.env.NEXT_PUBLIC_GTM_ID || ''}
    />
  );
}
