import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contacto | Kinetix Sistemas',
  description: `Escríbenos a ${siteConfig.email} o por WhatsApp al ${siteConfig.whatsapp.display}. Estamos en ${siteConfig.location.city}, ${siteConfig.location.state}, ${siteConfig.location.country}.`,
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Contacto</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Hablemos de tu proyecto
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Escríbenos por WhatsApp o usa el formulario de cotización. Hablamos en español desde{' '}
          {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}.
        </p>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">Correo</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block break-all text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">WhatsApp</h2>
            <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{siteConfig.whatsapp.display}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Atención: {siteConfig.businessHours.summary}. {siteConfig.businessHours.afterHours}
            </p>
            <CTAButton className="mt-5" ctaLocation="contacto-page" pagePath="/contacto">
              Escribir por WhatsApp
            </CTAButton>
          </div>
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">Ubicación</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Solicita una cotización
            </h2>
            <p className="mt-2 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              Completa el formulario con tu nombre, el tipo de negocio y lo que necesitas.
            </p>
          </div>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] px-7 py-3.5 text-sm font-bold text-[var(--primary)] transition-colors hover:border-[var(--emerald)]"
          >
            Ir al formulario de cotización
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-[var(--text-muted)]">
          Al enviar el formulario de contacto aceptas nuestra{' '}
          <Link href="/privacidad" className="font-semibold text-[var(--primary)] underline underline-offset-4">
            política de privacidad
          </Link>
          .
        </p>
      </Section>
    </main>
  );
}
