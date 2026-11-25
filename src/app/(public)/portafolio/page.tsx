import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CaseCard from '../../../components/ui/CaseCard';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import { cases } from '../../../content/cases';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Portafolio | Kinetix Sistemas',
  description:
    'Páginas web, sistemas internos y demostraciones construidas por Kinetix Sistemas. Casos reales presentados sin cifras inventadas.',
  path: '/portafolio',
});

export default function PortafolioPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Portafolio' }]} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Portafolio</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Lo que construimos
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Aquí mostramos páginas web, sistemas internos y demostraciones. Hablamos del problema y de lo que construimos,
          con los nombres que nuestros clientes autorizaron publicar y sin cifras inventadas.
        </p>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Casos y demostraciones
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              ¿Tienes un proyecto parecido?
            </h2>
            <p className="mt-2 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              Cuéntanos qué necesitas y revisamos juntos la mejor forma de resolverlo.
            </p>
          </div>
          <CTAButton ctaLocation="portfolio-page" pagePath="/portafolio">
            Cotizar por WhatsApp
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
