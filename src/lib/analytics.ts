export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'quote_form_submit'
  | 'service_card_click'
  | 'demo_open'
  | 'simulator_message_sent'
  | 'pricing_view'
  | 'portfolio_link_click'
  | 'scroll_depth'
  | 'outbound_click';

export type AnalyticsParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track?: (...args: unknown[]) => void };
  }
}

export const CONSENT_KEY = 'kinetix-cookie-consent';

export function getConsent(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined' || getConsent() !== 'accepted') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, params);
  }
  if (typeof window.ttq?.track === 'function') {
    window.ttq.track(name, params);
  }
}
