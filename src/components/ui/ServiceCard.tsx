'use client';

import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import type { Service } from '../../content/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      onClick={() => trackEvent('service_card_click', { service: service.slug })}
      className="group flex h-full flex-col rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--emerald)] hover:shadow-lg"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="material-symbols-outlined text-4xl text-[var(--primary)]" aria-hidden="true">
          {service.icon}
        </span>
        {typeof index === 'number' && (
          <span className="text-xs font-semibold tabular-nums text-[var(--text-muted)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="mb-3 font-display text-xl font-bold text-[var(--text-primary)]">{service.name}</h3>
      <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">{service.audience}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
        Conocer el servicio
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
