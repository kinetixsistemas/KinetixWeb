import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Section from '../../../components/ui/Section';
import CTAButton from '../../../components/ui/CTAButton';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Política de cookies | Kinetix Sistemas',
  description:
    'Estructura prevista de la política de cookies de Kinetix Sistemas. Ninguna herramienta se activa antes del consentimiento.',
  path: '/cookies',
});

const sections: {
  title: string;
  description: string;
  items?: { title: string; description: string }[];
}[] = [
  {
    title: 'Qué son las cookies',
    description: 'Se explicará qué son y cómo podrían emplearse en este sitio.',
  },
  {
    title: 'Categorías',
    description: 'Se clasificarán según su finalidad:',
    items: [
      {
        title: 'Necesarias',
        description: 'Se describirán las que forman parte del funcionamiento básico del sitio.',
      },
      {
        title: 'Analítica',
        description:
          'Se detallará la medición de visitas cuando la herramienta correspondiente esté configurada.',
      },
      {
        title: 'Publicidad',
        description:
          'Se indicará la medición de campañas cuando las herramientas correspondientes estén configuradas.',
      },
    ],
  },
  {
    title: 'Consentimiento y cómo cambiarlo',
    description:
      'Ninguna herramienta de medición o publicidad se activa antes del consentimiento. El banner permite aceptar, rechazar o configurar. Para volver a elegir, elimina los datos de este sitio en el navegador y abre la página de nuevo.',
  },
  {
    title: 'Herramientas previstas',
    description:
      'Si están configuradas, se listarán aquí Google Analytics 4 (GA4), Microsoft Clarity, Meta Pixel, TikTok Pixel y Google Tag Manager (GTM). Ninguna se carga antes del consentimiento.',
  },
  {
    title: 'Contacto',
    description: `Escríbenos a ${siteConfig.email} o al WhatsApp ${siteConfig.whatsapp.display}.`,
  },
];

export default function CookiesPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <section className="px-6 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Inicio', href: '/' }, { label: 'Política de cookies' }]}
          />
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Política de cookies
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Aquí se publicará la política de cookies de Kinetix Sistemas.
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
            {sections.map(({ title, description, items }) => (
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
                {items && items.length > 0 && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5"
                      >
                        <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
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
            <CTAButton ctaLocation="cookies-contacto" pagePath="/cookies">
              Consultar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
