'use client';

import type { MouseEvent, ReactNode } from 'react';
import { trackEvent } from '../../lib/analytics';
import { getAttribution } from '../../lib/attribution';
import { buildWhatsAppLink } from '../../lib/whatsapp';

interface CTAButtonProps {
  children: ReactNode;
  service?: string;
  ctaLocation: string;
  pagePath?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
}

const variants = {
  primary: 'bg-[var(--emerald)] text-[#04120c] hover:bg-[var(--emerald-hover)] shadow-emerald',
  outline: 'border border-[var(--surface-border)] text-[var(--text-primary)] hover:border-[var(--emerald)]',
  dark: 'bg-[var(--bg-dark)] text-white hover:bg-[var(--primary)]',
};

export default function CTAButton({
  children,
  service,
  ctaLocation,
  pagePath,
  className = '',
  variant = 'primary',
}: CTAButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const source = getAttribution()?.utm_source;
    event.currentTarget.href = buildWhatsAppLink({ service, source, ctaLocation, pagePath });
    trackEvent('whatsapp_click', {
      cta_location: ctaLocation,
      page_path: pagePath,
      service,
    });
  };

  return (
    <a
      href={buildWhatsAppLink({ service, ctaLocation, pagePath })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
