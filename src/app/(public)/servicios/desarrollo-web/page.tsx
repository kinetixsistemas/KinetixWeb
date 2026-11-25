import Link from 'next/link';
import { createMetadata } from '../../../../lib/metadata';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../../../lib/structured-data';
import { getService } from '../../../../content/services';
import { caseTitle, getCase } from '../../../../content/cases';
import PricingSection from '../../../../components/ui/PricingSection';
import Section from '../../../../components/ui/Section';
import CTAButton from '../../../../components/ui/CTAButton';
import Breadcrumbs from '../../../../components/ui/Breadcrumbs';
import FAQ from '../../../../components/ui/FAQ';
import StructuredData from '../../../../components/ui/StructuredData';

const SLUG = 'desarrollo-web';

export function generateMetadata() {
  const service = getService(SLUG);
  if (!service) return {};
  return createMetadata({ title: service.meta.title, description: service.meta.description, path: `/servicios/${SLUG}` });
}

export default function ServicePage() {
  const service = getService(SLUG);
  if (!service) return null;
  const relatedServices = service.related.map(getService).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const caseStudy = service.caseStudy ? getCase(service.caseStudy) : undefined;
  const crumbs = [{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: service.name }];

  return (
    <>
      <StructuredData data={[serviceSchema({ name: service.name, description: service.summary, path: `/servicios/${SLUG}` }), faqSchema(service.faq), breadcrumbSchema(crumbs)]} />
      <Section className="pt-20 md:pt-28">
        <Breadcrumbs items={crumbs} />
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">{service.audience}</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">{service.name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">{service.summary}</p>
          <div className="mt-8">
            <CTAButton ctaLocation="service_hero" pagePath={`/servicios/${SLUG}`} service={service.name}>
              {service.cta}
            </CTAButton>
          </div>
        </div>
      </Section>
      <Section className="bg-[var(--surface)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">Problemas que resuelve</h2>
            <ul className="mt-6 space-y-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-[var(--text-secondary)]">
                  <span className="material-symbols-outlined text-[var(--emerald)]" aria-hidden="true">check_circle</span>
                  <span className="leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">Qué incluye</h2>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--text-secondary)]">
                  <span className="material-symbols-outlined text-[var(--primary)]" aria-hidden="true">add_circle</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">Cómo trabajamos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-6">
              <p className="mb-3 text-sm font-bold text-[var(--emerald)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>
      {(service.demo || caseStudy) && (
        <Section className="bg-[var(--surface)]">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">Demo y caso relacionado</h2>
          <div className="mt-6 flex flex-col gap-4">
            {service.demo && (
              <a href={service.demo.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[var(--primary)] hover:text-[var(--emerald)]">
                {service.demo.label}
                <span aria-hidden="true">→</span>
              </a>
            )}
            {caseStudy && (
              <Link href={`/portafolio/${caseStudy.slug}`} className="inline-flex items-center gap-2 font-bold text-[var(--primary)] hover:text-[var(--emerald)]">
                Ver caso relacionado: {caseTitle(caseStudy)}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </Section>
      )}
      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">Precios</h2>
        <PricingSection />
      </Section>
      <Section className="bg-[var(--surface)]">
        <h2 className="mb-8 font-display text-3xl font-bold text-[var(--text-primary)]">Preguntas frecuentes</h2>
        <FAQ items={service.faq} />
      </Section>
      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">Servicios relacionados</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {relatedServices.map((item) => (
            <Link key={item.slug} href={`/servicios/${item.slug}`} className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--emerald)]">
              <p className="font-display text-xl font-bold text-[var(--text-primary)]">{item.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.audience}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton ctaLocation="service_final_cta" pagePath={`/servicios/${SLUG}`} service={service.name}>
            {service.cta}
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
