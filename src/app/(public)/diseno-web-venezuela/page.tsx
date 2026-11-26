import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import FAQ from '../../../components/ui/FAQ';
import PricingSection from '../../../components/ui/PricingSection';
import Section from '../../../components/ui/Section';
import StructuredData from '../../../components/ui/StructuredData';
import { deliveryTime } from '../../../content/pricing';
import { getService } from '../../../content/services';
import { googleReviews } from '../../../content/reviews';
import type { FaqItem } from '../../../content/faqs';
import { createMetadata } from '../../../lib/metadata';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../../lib/structured-data';

const PATH = '/diseno-web-venezuela';

export const metadata: Metadata = createMetadata({
  title: 'Diseño web en Venezuela | Páginas desde $149 en 3 a 5 días | Kinetix',
  description:
    'Diseño web en Venezuela: landing pages y sitios corporativos desde $149, entregados en 3 a 5 días. SEO básico, dominio y WhatsApp. Cotiza por WhatsApp.',
  path: PATH,
});

const landingFaqs: FaqItem[] = [
  {
    question: '¿Cuánto cuesta una página web en Venezuela?',
    answer:
      'En Kinetix Sistemas los planes son Start Conversion desde $149, Business Pro desde $249 y Elite Corporate desde $499. Incluyen diseño adaptable a móvil, SEO básico, integración con WhatsApp y compra de dominio.',
  },
  {
    question: '¿Cuánto tarda en estar lista mi página web?',
    answer:
      `Las landing pages y los sitios corporativos se entregan en ${deliveryTime}. El plazo incluye contrato, compra de dominio y ajuste de SEO básico.`,
  },
  {
    question: '¿El dominio y el hosting están incluidos?',
    answer:
      'La compra del dominio forma parte de la entrega. El hosting se define según el proyecto y se configura antes de publicar la página.',
  },
  {
    question: '¿Trabajan con negocios en toda Venezuela?',
    answer:
      'Sí. Atendemos en remoto desde Barquisimeto a negocios de Caracas, Valencia, Maracaibo, Maracay y el resto del país, con propuestas en dólares y comunicación por WhatsApp o videollamada.',
  },
  {
    question: '¿La página funciona bien en el celular?',
    answer:
      'Sí. Diseñamos primero para móvil, que es donde se produce la mayor parte del tráfico en Venezuela, y revisamos la página en tablet y computador antes de publicar.',
  },
  {
    question: '¿Puedo medir las visitas y los contactos?',
    answer:
      'Sí. Preparamos el sitio para conectar analítica con los IDs que nos proporciones, con consentimiento previo del visitante, y cada botón de WhatsApp registra su origen.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo necesitamos entender qué haces, a quién atiendes y qué quieres que haga el visitante. Puedes escribirnos por WhatsApp o dejar tus datos en el formulario de /cotizar.',
  },
];

export default function DisenoWebVenezuelaPage() {
  const service = getService('desarrollo-web');

  if (!service) {
    notFound();
  }

  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Diseño web en Venezuela' },
  ];

  return (
    <>
      <StructuredData
        data={[
          serviceSchema({
            name: 'Diseño web en Venezuela',
            description: service.summary,
            path: PATH,
          }),
          faqSchema(landingFaqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <Section className="pt-20 md:pt-28">
        <Breadcrumbs items={crumbs} />
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--emerald)]">
            Agencia en Barquisimeto · Atención en toda Venezuela
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
            Diseño web en Venezuela
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            Creamos landing pages y sitios corporativos que se encuentran en Google y convierten visitas en
            conversaciones por WhatsApp. Planes desde $149, entrega en {deliveryTime} y SEO básico incluido.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <CTAButton ctaLocation="diseno-web-venezuela_hero" pagePath={PATH} service="Diseño web">
              Cotizar mi página web por WhatsApp
            </CTAButton>
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--surface-border)] px-7 py-3.5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--emerald)]"
            >
              Ir al formulario de cotización
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-[var(--text-secondary)]">
            {['Desde $149', `Entrega en ${deliveryTime}`, 'Dominio incluido', 'SEO básico', 'WhatsApp integrado'].map(
              (item) => (
                <li key={item} className="rounded-full border border-[var(--surface-border)] px-4 py-2">
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Una página web que trabaja por tu negocio
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">{service.summary}</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">Qué incluye cada entrega</h3>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--emerald)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Precios de diseño web en Venezuela
        </h2>
        <PricingSection />
      </Section>

      <Section className="bg-[var(--surface)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Cómo trabajamos
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-[var(--surface-border)] p-5">
                  <p className="mb-2 text-sm font-bold text-[var(--emerald)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-6 space-y-4">
              {googleReviews.map((review) => (
                <blockquote
                  key={review.id}
                  className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-5"
                >
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">“{review.quote}”</p>
                  <footer className="mt-3 text-xs font-bold text-[var(--text-primary)]">
                    {review.author} · {review.rating}/5 ·{' '}
                    <a
                      href={review.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] underline underline-offset-4"
                    >
                      Ver reseña
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
            <Link
              href="/portafolio"
              className="mt-6 inline-block text-sm font-bold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
            >
              Ver proyectos y casos reales →
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Preguntas frecuentes sobre diseño web en Venezuela
        </h2>
        <div className="mt-8">
          <FAQ items={landingFaqs} />
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Cobertura y servicios relacionados
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            href="/desarrollo-web-barquisimeto"
            className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-5 transition-colors hover:border-[var(--emerald)]"
          >
            <p className="font-display font-bold text-[var(--text-primary)]">Desarrollo web en Barquisimeto</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Atención local en Lara, con entrega en {deliveryTime}.
            </p>
          </Link>
          <Link
            href="/servicios/desarrollo-web"
            className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-5 transition-colors hover:border-[var(--emerald)]"
          >
            <p className="font-display font-bold text-[var(--text-primary)]">Desarrollo de páginas web</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Detalles del servicio, problemas que resuelve y proceso completo.
            </p>
          </Link>
          <Link
            href="/demos"
            className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-5 transition-colors hover:border-[var(--emerald)]"
          >
            <p className="font-display font-bold text-[var(--text-primary)]">Demos y sistemas a medida</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Revisa demos antes de decidir qué necesita tu negocio.
            </p>
          </Link>
        </div>
        <div className="mt-10">
          <CTAButton
            ctaLocation="diseno-web-venezuela_final_cta"
            pagePath={PATH}
            service="Diseño web"
          >
            Empezar mi proyecto por WhatsApp
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
