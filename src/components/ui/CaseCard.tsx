import MaterialIcon from './MaterialIcon';
import Link from 'next/link';
import { caseTitle, type CaseStudy } from '../../content/cases';

interface CaseCardProps {
  item: CaseStudy;
}

export default function CaseCard({ item }: CaseCardProps) {
  const title = caseTitle(item);
  const tracking = item.demo
    ? { event: 'demo_open', params: JSON.stringify({ demo_name: item.slug }) }
    : { event: 'portfolio_link_click', params: JSON.stringify({ case_slug: item.slug }) };
  const dataAttributes = {
    'data-track-event': tracking.event,
    'data-track-params': tracking.params,
  };

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--bg-dark)]">
        {item.screenshotVisible && item.image ? (
          <div className="flex h-full items-center justify-center text-6xl text-white/20" aria-hidden="true">
            <MaterialIcon name="code" />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-white/40" aria-hidden="true">
            <MaterialIcon name="work" className="text-5xl" />
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
        {...dataAttributes}
        className="group block"
      >
        {content}
      </a>
    );
  }

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" {...dataAttributes} className="group block">
        {content}
      </a>
    );
  }

  return (
    <Link href={`/portafolio/${item.slug}`} {...dataAttributes} className="group block">
      {content}
    </Link>
  );
}
