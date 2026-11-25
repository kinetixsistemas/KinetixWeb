import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../../components/ui/Breadcrumbs';
import CTAButton from '../../../../components/ui/CTAButton';
import Section from '../../../../components/ui/Section';
import StructuredData from '../../../../components/ui/StructuredData';
import { caseTitle, cases, getCase } from '../../../../content/cases';
import { getService } from '../../../../content/services';
import { createMetadata } from '../../../../lib/metadata';
import { breadcrumbSchema } from '../../../../lib/structured-data';

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    return createMetadata({
      title: 'Caso no encontrado | Kinetix Sistemas',
      description: 'El caso que buscas no está disponible en el portafolio de Kinetix Sistemas.',
      path: '/portafolio',
    });
  }

  return createMetadata({
    title: `${caseTitle(item)} | Kinetix Sistemas`,
    description: item.context,
    path: `/portafolio/${item.slug}`,
    type: 'article',
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  const title = caseTitle(item);
  const relatedService = getService(item.relatedService);
  const externalHref = item.demo?.href ?? item.link;
  const externalLabel = item.demo?.label ?? 'Ver el sitio publicado';
  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: title },
  ];

  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={crumbs} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">{item.type}</p>
        <h1 className="font-display max-w-4xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">{item.context}</p>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">El problema</h2>
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{item.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Qué construimos</h2>
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{item.solution}</p>
            </div>
            {item.result && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Resultado</h2>
                <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{item.result}</p>
              </div>
            )}
            {externalHref && (
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] px-6 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:border-[var(--emerald)]"
              >
                {externalLabel}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6">
              <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">Tecnologías</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            {relatedService && (
              <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6">
                <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">Servicio relacionado</h2>
                <Link
                  href={`/servicios/${relatedService.slug}`}
                  className="mt-3 inline-block text-sm font-bold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
                >
                  {relatedService.name}
                </Link>
              </div>
            )}
            <Link
              href="/portafolio"
              className="inline-block text-sm font-bold text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--primary)]"
            >
              Volver al portafolio
            </Link>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              ¿Quieres algo similar para tu negocio?
            </h2>
            <p className="mt-2 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              Escríbenos y cuéntanos qué necesitas resolver.
            </p>
          </div>
          <CTAButton ctaLocation="case-detail-page" pagePath={`/portafolio/${item.slug}`}>
            Cotizar por WhatsApp
          </CTAButton>
        </div>
      </Section>

      <StructuredData data={breadcrumbSchema(crumbs)} />
    </main>
  );
}
