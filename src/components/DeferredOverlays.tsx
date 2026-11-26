'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Analytics = dynamic(() => import('./Analytics'), { ssr: false });
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });

export default function DeferredOverlays() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <Analytics />
      <CookieBanner />
    </>
  );
}
