import { siteConfig } from '../config/site';

export interface WhatsAppLinkOptions {
  service?: string;
  source?: string;
  ctaLocation?: string;
  pagePath?: string;
  message?: string;
}

export function buildWhatsAppLink(options: WhatsAppLinkOptions = {}): string {
  const url = new URL(`https://wa.me/${siteConfig.whatsapp.number}`);

  if (options.message) {
    url.searchParams.set('text', options.message);
    return url.toString();
  }

  const parts = [`Hola ${siteConfig.name},`];
  parts.push(options.service ? `me interesa ${options.service}` : 'quiero solicitar información');

  if (options.pagePath) {
    parts.push(`vi la página: ${options.pagePath}`);
  }

  if (options.source) {
    parts.push(`origen: ${options.source}`);
  }

  url.searchParams.set('text', parts.join(' ').replace(/\s+/g, ' ').trim() + '.');
  return url.toString();
}
