import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import StructuredData from '../../../components/ui/StructuredData';
import { siteConfig } from '../../../config/site';
import { deliveryTime } from '../../../content/pricing';
import { getService } from '../../../content/services';
import { createMetadata } from '../../../lib/metadata';
import { serviceSchema } from '../../../lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Desarrollo web en Barquisimeto | Kinetix Sistemas',
  description:
    'Creamos landing pages y sitios corporativos desde Barquisimeto, Venezuela, con SEO básico, WhatsApp y entrega en 3 a 5 días.',
  path: '/desarrollo-web-barquisimeto',
});

export default function DesarrolloWebBarquisimetoPage() {
  const service = getService('desarrollo-web');

  if (!service) {
    notFound();
  }

  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Desarrollo web', href: '/servicios/desarrollo-web' },
    { label: 'Desarrollo web en Barquisimeto' },
  ];

  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={crumbs} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Servicio local</p>
        <h1 className="font-display max-w-4xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Desarrollo web en Barquisimeto
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Creamos landing pages y sitios corporativos para negocios que quieren encontrarse en Google y recibir
          consultas por WhatsApp.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
          Estamos en {siteConfig.location.city}, estado {siteConfig.location.state}, {siteConfig.location.country}.
          Atendemos en español a negocios hispanohablantes, empezando por Venezuela.
        </p>
        <CTAButton
          className="mt-8"
          service={service.name}
          ctaLocation="desarrollo-web-barquisimeto-page"
          pagePath="/desarrollo-web-barquisimeto"
        >
          Solicitar una web por WhatsApp
        </CTAButton>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Qué incluye la entrega
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">{service.summary}</p>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--emerald)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-7">
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Plazo de entrega</h2>
            <p className="mt-4 text-4xl font-bold text-[var(--primary)]">{deliveryTime}</p>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Las landing pages y los sitios corporativos se entregan en {deliveryTime}. El plazo incluye contrato,
              compra de dominio y ajuste de SEO básico.
            </p>
            <Link
              href="/servicios/desarrollo-web"
              className="mt-6 inline-block text-sm font-bold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
            >
              Ver todos los detalles del desarrollo web
            </Link>
            <Link
              href="/diseno-web-venezuela"
              className="mt-3 block text-sm font-bold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
            >
              Ver diseño web en Venezuela y precios →
            </Link>
          </div>
        </div>
      </Section>

      <StructuredData
        data={serviceSchema({
          name: service.name,
          description: service.summary,
          path: '/desarrollo-web-barquisimeto',
        })}
      />
    </main>
  );
}
