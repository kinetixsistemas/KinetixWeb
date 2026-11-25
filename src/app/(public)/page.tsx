import Link from 'next/link';
import { createMetadata } from '../../lib/metadata';
import { faqSchema } from '../../lib/structured-data';
import { services } from '../../content/services';
import { cases } from '../../content/cases';
import { homeFaqs } from '../../content/faqs';
import Section from '../../components/ui/Section';
import CTAButton from '../../components/ui/CTAButton';
import ServiceCard from '../../components/ui/ServiceCard';
import CaseCard from '../../components/ui/CaseCard';
import FAQ from '../../components/ui/FAQ';
import StructuredData from '../../components/ui/StructuredData';

export const metadata = createMetadata({
  title: 'Kinetix Sistemas | Software, páginas web y automatización en Venezuela',
  description:
    'Software, páginas web y automatización con IA para negocios en Venezuela. Sistemas de inventario, clínicas odontológicas y agentes de WhatsApp.',
  path: '/',
});

const audiences = [
  {
    icon: 'medical_services',
    title: 'Clínicas odontológicas',
    description: 'Organiza historia clínica, odontograma, agenda y cobros en un solo sistema.',
  },
  {
    icon: 'hub',
    title: 'Distribuidores y repuestos al mayor',
    description: 'Muestra tu catálogo, precios al mayor y recibe pedidos con un flujo claro.',
  },
  {
    icon: 'inventory_2',
    title: 'Comercios con inventario',
    description: 'Controla stock, ventas y cobranza desde el celular, la tablet o la PC.',
  },
  {
    icon: 'smart_toy',
    title: 'Negocios que venden por WhatsApp',
    description: 'Atiende consultas, filtra prospectos y conecta tus herramientas con IA.',
  },
];

const selectedCases = cases.filter((item) =>
  ['sistema-consultorio-odontologico', 'sistema-inventario-facturacion', 'agente-whatsapp-ia'].includes(item.slug)
);

const workSteps = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos tu proceso, tus prioridades y lo que necesita tu negocio.',
  },
  {
    title: 'Diseño',
    description: 'Definimos la estructura, los flujos y el contenido antes de construir.',
  },
  {
    title: 'Desarrollo',
    description: 'Construimos la solución con tecnologías modernas y enfoque práctico.',
  },
  {
    title: 'Lanzamiento y soporte',
    description: 'Publicamos, revisamos y te acompañamos en el arranque.',
  },
];

const differentiators = [
  'Construimos sistemas completos, no solo páginas sueltas.',
  'Atención directa en español, con comunicación clara en cada etapa.',
  'Estamos en Barquisimeto y trabajamos con negocios de habla hispana.',
  'Entregas de páginas web en 3 a 5 días, con contrato, dominio y SEO básico.',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={faqSchema(homeFaqs)} />

      <Section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">
            Kinetix Sistemas · Barquisimeto, Venezuela
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
            Software, páginas web y automatización para negocios en Venezuela
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Creamos sistemas de inventario y ventas, software para clínicas odontológicas y agentes de IA en WhatsApp.
            Te ayudamos a organizar tu operación y a responder más rápido a tus clientes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton ctaLocation="home_hero" pagePath="/">
              Cotizar por WhatsApp
            </CTAButton>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--surface-border)] px-7 py-3.5 text-sm font-bold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--emerald)]"
            >
              Ver demos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Qué hacemos</p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Soluciones pensadas para tu operación
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            Desde una página web hasta un sistema completo, construimos herramientas que te ayudan a vender, organizar y atender mejor.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Para quién trabajamos</p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Negocios que necesitan ordenar y crecer
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-7"
            >
              <span className="material-symbols-outlined mb-5 text-4xl text-[var(--primary)]" aria-hidden="true">
                {audience.icon}
              </span>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{audience.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Trabajos y demos reales</p>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
              Proyectos y demos que puedes revisar
            </h2>
          </div>
          <Link href="/portafolio" className="text-sm font-bold text-[var(--primary)] hover:text-[var(--emerald)]">
            Ver portafolio →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {selectedCases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Cómo trabajamos</p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Un proceso claro, de principio a fin
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workSteps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-7">
              <p className="mb-4 text-sm font-bold text-[var(--emerald)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-dark)] text-white">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Por qué Kinetix Sistemas</p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Un equipo técnico cerca de tu negocio
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Trabajamos con claridad, enfoque práctico y soluciones que puedes usar desde el primer día.
            </p>
          </div>
          <ul className="space-y-4">
            {differentiators.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="material-symbols-outlined text-[var(--emerald)]" aria-hidden="true">check_circle</span>
                <span className="text-sm leading-relaxed text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Respuestas antes de empezar
          </h2>
        </div>
        <FAQ items={homeFaqs} />
      </Section>

      <Section className="pt-0">
        <div className="rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)] px-8 py-12 text-center md:px-12">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Cuéntanos qué necesita tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Te respondemos por WhatsApp o puedes dejar tus datos en el formulario corto de cotización.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton ctaLocation="home_final_cta" pagePath="/">
              Hablar por WhatsApp
            </CTAButton>
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--surface-border)] px-7 py-3.5 text-sm font-bold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--emerald)]"
            >
              Ir a cotizar
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
