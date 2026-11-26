'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { captureAttribution, getAttribution } from '../lib/attribution';
import { getConsent, trackEvent, type AnalyticsEventName, type AnalyticsParams } from '../lib/analytics';
import { buildWhatsAppLink } from '../lib/whatsapp';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function Analytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    captureAttribution();
    const sync = () => setAccepted(getConsent() === 'accepted');
    sync();
    window.addEventListener('kinetix-consent-change', sync);
    return () => window.removeEventListener('kinetix-consent-change', sync);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-track-event]') : null;
      if (!element) return;

      const name = element.dataset.trackEvent as AnalyticsEventName;
      let params: AnalyticsParams = {};
      try {
        params = element.dataset.trackParams ? JSON.parse(element.dataset.trackParams) : {};
      } catch {
        params = {};
      }

      if (name === 'whatsapp_click') {
        element.setAttribute(
          'href',
          buildWhatsAppLink({
            service: params.service as string | undefined,
            ctaLocation: params.cta_location as string | undefined,
            pagePath: params.page_path as string | undefined,
            source: getAttribution()?.utm_source,
          }),
        );
      }

      trackEvent(name, params);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const triggered = new Set<number>();

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);
      for (const threshold of thresholds) {
        if (percent >= threshold && !triggered.has(threshold)) {
          triggered.add(threshold);
          trackEvent('scroll_depth', { percent, page_path: window.location.pathname });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {accepted && GTM_ID && (
        <Script id="kinetix-gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {accepted && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="kinetix-ga" strategy="afterInteractive">
            {`gtag('config','${GA_ID}',{send_page_view:false});gtag('consent','update',{analytics_storage:'granted',ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',functionality_storage:'granted',personalization_storage:'granted'});`}
          </Script>
        </>
      )}

      {accepted && CLARITY_ID && (
        <Script id="kinetix-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}

      {accepted && META_PIXEL_ID && (
        <Script id="kinetix-meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      {accepted && TIKTOK_PIXEL_ID && (
        <Script id="kinetix-tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie'];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e){var n='https://analytics.tiktok.com/i18n/pixel/events.js';ttq._i=ttq._i||{};ttq._i[e]=[];var a=d.createElement('script');a.type='text/javascript';a.async=true;a.src=n;var r=d.getElementsByTagName('script')[0];r.parentNode.insertBefore(a,r)};ttq.load('${TIKTOK_PIXEL_ID}');ttq.page();}(window,document,'ttq');`}
        </Script>
      )}
    </>
  );
}
