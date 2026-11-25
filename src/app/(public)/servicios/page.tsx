import { createMetadata } from '../../../lib/metadata';
import { services } from '../../../content/services';
import Section from '../../../components/ui/Section';
import ServiceCard from '../../../components/ui/ServiceCard';
import CTAButton from '../../../components/ui/CTAButton';

export const metadata = createMetadata({
  title: 'Servicios de software, web y automatización | Kinetix Sistemas',
  description:
    'Conoce los servicios de Kinetix Sistemas: software para clínicas odontológicas, inventario y ventas, plataformas B2B, páginas web y automatización con IA en WhatsApp.',
  path: '/servicios',
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Servicios</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
            Servicios para vender, organizar y atender mejor
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Diseñamos y desarrollamos soluciones digitales para negocios que necesitan orden, presencia web y procesos más ágiles.
            Cada servicio se adapta a tu operación y a lo que hoy te quita tiempo.
          </p>
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)] px-8 py-12 text-center md:px-12">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            ¿No sabes cuál servicio encaja mejor?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Cuéntanos qué hace tu negocio y te orientamos por el camino más útil para ti.
          </p>
          <div className="mt-8">
            <CTAButton ctaLocation="services_hub_cta" pagePath="/servicios">
              Hablar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
