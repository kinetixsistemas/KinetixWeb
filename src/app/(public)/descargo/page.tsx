import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Section from '../../../components/ui/Section';
import CTAButton from '../../../components/ui/CTAButton';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Descargo de responsabilidad | Kinetix Sistemas',
  description:
    'Estructura prevista del descargo de responsabilidad de Kinetix Sistemas. Contenido pendiente de confirmación.',
  path: '/descargo',
});

const sections = [
  {
    title: 'Información general',
    description: 'Se describirá el alcance informativo de los contenidos publicados en el sitio.',
  },
  {
    title: 'Enlaces externos',
    description: 'Se indicará cómo se tratan los enlaces hacia sitios de terceros y su contenido.',
  },
  {
    title: 'Disponibilidad',
    description: 'Se explicará qué se prevé sobre la disponibilidad del sitio y de los servicios digitales.',
  },
  {
    title: 'Contenido pendiente',
    description:
      'Esta sección se completará cuando Kinetix Sistemas confirme la información que debe incluir. Hasta entonces, consulta el aviso publicado al inicio de la página.',
  },
];

export default function DescargoPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <section className="px-6 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Inicio', href: '/' }, { label: 'Descargo de responsabilidad' }]}
          />
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Descargo de responsabilidad
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Aquí se publicará el descargo de responsabilidad de Kinetix Sistemas.
          </p>
          <div className="mt-8 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
            <p className="font-display text-sm font-bold text-[var(--primary)]">Aviso</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Contenido pendiente de confirmación por parte de Kinetix Sistemas.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            {sections.map(({ title, description }) => (
              <section
                key={title}
                className="border-b border-[var(--surface-border)] pb-10 last:border-0 last:pb-0"
              >
                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {title}
                </h2>
                <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                  {description}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--surface-border)] pt-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            <CTAButton ctaLocation="descargo-contacto" pagePath="/descargo">
              Consultar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
