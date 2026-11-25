'use client';

import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import { caseTitle, type CaseStudy } from '../../content/cases';

interface CaseCardProps {
  item: CaseStudy;
}

export default function CaseCard({ item }: CaseCardProps) {
  const title = caseTitle(item);

  const handleClick = () => {
    if (item.link) {
      trackEvent('portfolio_link_click', { case_slug: item.slug });
    }
    if (item.demo) {
      trackEvent('demo_open', { demo_name: item.slug });
    }
  };

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--bg-dark)]">
        {item.screenshotVisible && item.image ? (
          <div className="flex h-full items-center justify-center text-6xl text-white/20" aria-hidden="true">
            <span className="material-symbols-outlined">code</span>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-white/40" aria-hidden="true">
            <span className="material-symbols-outlined text-5xl">work</span>
            <span className="text-xs uppercase tracking-widest">{item.type}</span>
          </div>
        )}
      </div>
      <div className="mt-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">{item.type}</p>
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.problem}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
          Ver el caso
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </>
  );

  if (item.demo) {
    return (
      <a
        href={item.demo.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group block"
      >
        {content}
      </a>
    );
  }

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="group block">
        {content}
      </a>
    );
  }

  return (
    <Link href={`/portafolio/${item.slug}`} onClick={handleClick} className="group block">
      {content}
    </Link>
  );
}
