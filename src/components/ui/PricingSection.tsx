import Link from 'next/link';
import { displayPrice, webPlans, deliveryTime } from '../../content/pricing';

export default function PricingSection() {
  return (
    <section className="mt-12">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Precios de páginas web</p>
      <h3 className="font-display mt-3 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
        Elige el alcance que necesitas
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
        Entrega en {deliveryTime}. Incluye contrato, compra de dominio y ajuste de SEO básico.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {webPlans.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col rounded-3xl border bg-[var(--bg-base)] p-6 ${
              plan.highlighted ? 'border-[var(--emerald)]' : 'border-[var(--surface-border)]'
            }`}
          >
            <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">{plan.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{plan.description}</p>
            <p className="font-display mt-5 text-3xl font-bold text-[var(--primary)]">{displayPrice(plan)}</p>
            <ul className="mt-5 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  <span className="material-symbols-outlined text-[var(--emerald)]" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/cotizar"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--surface-border)] px-5 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:border-[var(--emerald)]"
              aria-label={`Solicitar cotización del plan ${plan.name}`}
            >
              Cotizar {plan.name}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
