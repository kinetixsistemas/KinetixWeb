import MaterialIcon from './MaterialIcon';
import type { FaqItem } from '../../content/faqs';

interface FAQProps {
  items: FaqItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--surface-border)] rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] px-6">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[var(--text-primary)] marker:content-none">
            {item.question}
            <MaterialIcon name="add" className="shrink-0 text-[var(--emerald)] transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
