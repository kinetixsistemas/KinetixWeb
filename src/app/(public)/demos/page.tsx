import type { Metadata } from 'next';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import WhatsAppSimulator from '../../../components/WhatsAppSimulator';
import { siteConfig } from '../../../config/site';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Demos | Kinetix Sistemas',
  description:
    'Prueba la demo pública del sistema odontológico, solicita 15 días gratis para tu clínica y revisa el simulador del agente de WhatsApp de Kinetix Sistemas.',
  path: '/demos',
});

export default function DemosPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Demos' }]} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Demos</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Prueba lo que construimos
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Dos ejemplos para que veas cómo funcionan un sistema odontológico y un agente de WhatsApp antes de hablar
          con nosotros.
        </p>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
              Demo del sistema odontológico
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Revisa historia clínica, odontograma, presupuestos y agenda en un solo lugar. Es una demostración
              pública con datos de ejemplo, no el sistema de un consultorio real.
            </p>
            <a
              href={siteConfig.demo.odontology}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--emerald)] px-7 py-3.5 text-sm font-bold text-[#04120c] transition-colors hover:bg-[var(--emerald-hover)]"
            >
              Abrir la demo del sistema odontológico
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-8">
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">Qué muestra la demo</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Historia clínica por paciente.</li>
              <li>Odontograma y presupuestos.</li>
              <li>Agenda de citas del consultorio.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Demo gratis 15 días</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Prueba el sistema odontológico en tu consultorio
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              La demo gratuita de 15 días es para clínicas odontológicas e incluye historia clínica, agenda,
              odontograma, presupuestos y pagos. Solicítala por WhatsApp y la revisamos contigo.
            </p>
            <div className="mt-7">
              <CTAButton
                ctaLocation="demos-demo-15-dias"
                pagePath="/demos"
                service="Sistema para clínicas odontológicas - Demo gratis 15 días"
              >
                Solicitar la demo gratis de 15 días
              </CTAButton>
            </div>
          </div>
          <ul className="grid gap-3 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-8 sm:grid-cols-2">
            {['Historia clínica', 'Agenda de citas', 'Odontograma', 'Presupuestos y pagos'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="material-symbols-outlined text-[var(--emerald)]" aria-hidden="true">
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Simulador del agente de WhatsApp
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
          Escribe un mensaje para ver cómo el asistente responde y califica una consulta. Es una demostración, no una
          conversación con una persona real.
        </p>
      </Section>

      <WhatsAppSimulator />

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              ¿Quieres verlo aplicado a tu negocio?
            </h2>
            <p className="mt-2 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              Cuéntanos qué proceso quieres mejorar y lo revisamos contigo.
            </p>
          </div>
          <CTAButton ctaLocation="demos-page" pagePath="/demos">
            Solicitar una demo por WhatsApp
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
