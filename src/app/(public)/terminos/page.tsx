import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Section from '../../../components/ui/Section';
import CTAButton from '../../../components/ui/CTAButton';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Términos de servicio | Kinetix Sistemas',
  description:
    'Estructura prevista de los términos de servicio de Kinetix Sistemas. Contenido pendiente de confirmación.',
  path: '/terminos',
});

const sections = [
  {
    title: 'Alcance del sitio',
    description:
      'Se delimitará a qué páginas y servicios se aplicarán las condiciones y quiénes las consultan.',
  },
  {
    title: 'Información de servicios',
    description:
      'Se describirá la información publicada sobre los servicios y dónde consultar el detalle de cada uno.',
  },
  {
    title: 'Cotizaciones',
    description:
      'Se explicará cómo se solicita una cotización y qué datos intervienen en ese proceso.',
  },
  {
    title: 'Propiedad intelectual',
    description:
      'Se indicará el tratamiento previsto para textos, imágenes y marcas presentes en el sitio.',
  },
  {
    title: 'Responsabilidad',
    description:
      'Se describirá el marco general de responsabilidad vinculado al uso del sitio.',
  },
  {
    title: 'Contacto',
    description: `Escríbenos a ${siteConfig.email} o al WhatsApp ${siteConfig.whatsapp.display}.`,
  },
];

export default function TerminosPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <section className="px-6 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Inicio', href: '/' }, { label: 'Términos de servicio' }]}
          />
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Términos de servicio
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Aquí se publicarán los términos de servicio de Kinetix Sistemas.
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
            <CTAButton ctaLocation="terminos-contacto" pagePath="/terminos">
              Consultar condiciones
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
