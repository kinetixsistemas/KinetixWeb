import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Section from '../../../components/ui/Section';
import CTAButton from '../../../components/ui/CTAButton';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Política de privacidad | Kinetix Sistemas',
  description:
    'Estructura prevista de la política de privacidad de Kinetix Sistemas. Contenido pendiente de confirmación.',
  path: '/privacidad',
});

const sections = [
  {
    title: 'Datos que se recopilan',
    description:
      'Se detallará qué información podría recibirse por correo o WhatsApp y qué datos podrían registrar las herramientas de medición, si llegan a configurarse.',
  },
  {
    title: 'Finalidad',
    description:
      'Se explicará el uso previsto de esa información para responder consultas y coordinar solicitudes de cotización.',
  },
  {
    title: 'Conservación',
    description:
      'Se indicará el tiempo de conservación previsto y los criterios generales para eliminar la información.',
  },
  {
    title: 'Compartir datos',
    description:
      'Se precisará si existe algún tercero que pudiera tratar información y con qué finalidad.',
  },
  {
    title: 'Derechos del visitante',
    description:
      'Se describirán las gestiones que un visitante podría solicitar en relación con su información.',
  },
  {
    title: 'Contacto',
    description: `Escríbenos a ${siteConfig.email} o al WhatsApp ${siteConfig.whatsapp.display}.`,
  },
];

export default function PrivacidadPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <section className="px-6 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Inicio', href: '/' }, { label: 'Política de privacidad' }]}
          />
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Aquí se publicará la política de privacidad de Kinetix Sistemas.
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
            <CTAButton ctaLocation="privacidad-contacto" pagePath="/privacidad">
              Consultar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
