import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { kinetixLogo } from '../../../assets/index';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import StructuredData from '../../../components/ui/StructuredData';
import { siteConfig } from '../../../config/site';
import { deliveryTime } from '../../../content/pricing';
import { googleReviews } from '../../../content/reviews';
import { createMetadata } from '../../../lib/metadata';
import { organizationSchema, reviewsSchema } from '../../../lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Nosotros | Kinetix Sistemas',
  description: `Kinetix Sistemas es una agencia de desarrollo de software en ${siteConfig.location.city}, ${siteConfig.location.state}, ${siteConfig.location.country}. Páginas web, sistemas a medida y automatización en español.`,
  path: '/nosotros',
});

const workSteps = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos qué problema tiene tu negocio y qué debe resolver la solución.',
  },
  {
    title: 'Diseño',
    description: 'Definimos los flujos y las pantallas antes de escribir código.',
  },
  {
    title: 'Desarrollo',
    description: 'Construimos la página o el sistema con la tecnología que requiere el proyecto.',
  },
  {
    title: 'Lanzamiento y soporte',
    description: 'Publicamos, capacitamos a tu equipo y acompañamos los primeros ajustes.',
  },
];

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase/PostgreSQL',
  'Python',
  'Docker',
  'Vercel',
];

export default function NosotrosPage() {
  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }]} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Sobre nosotros</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Somos {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Somos una agencia de desarrollo de software, páginas web y automatizaciones. Estamos en{' '}
          {siteConfig.location.city}, estado {siteConfig.location.state}, {siteConfig.location.country}.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
          Trabajamos con negocios hispanohablantes, empezando por Venezuela. Hablamos en español en cada etapa y
          construimos soluciones según el proceso de cada negocio.
        </p>
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4">
          <Image
            src={kinetixLogo}
            alt="Logo de Kinetix Sistemas"
            className="h-14 w-auto rounded-xl object-contain"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Al frente del equipo</p>
            <p className="font-display text-lg font-bold text-[var(--text-primary)]">{siteConfig.founder}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/portafolio"
            className="inline-flex items-center rounded-full border border-[var(--surface-border)] px-6 py-3 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Ver el portafolio
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center rounded-full border border-[var(--surface-border)] px-6 py-3 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Conocer los servicios
          </Link>
        </div>
      </Section>

      <Section className="border-y border-[var(--surface-border)] bg-[var(--surface)]">
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">Cómo trabajamos</h2>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
          Seguimos cuatro pasos claros. Así sabes qué esperar en cada momento.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6"
            >
              <span className="text-xs font-bold tracking-widest text-[var(--emerald)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Tecnologías que usamos
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
              Trabajamos con estas herramientas según lo que requiere cada proyecto.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-7">
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Entregas de páginas web</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Las landing pages y los sitios corporativos se entregan en {deliveryTime}. El plazo incluye contrato,
              compra de dominio y ajuste de SEO básico.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              El alcance de sistemas a medida, plataformas y automatizaciones se define en el diagnóstico.
            </p>
            <CTAButton
              className="mt-7"
              ctaLocation="nosotros-page"
              pagePath="/nosotros"
            >
              Hablemos por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          Reseñas de nuestros clientes
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
          Opiniones publicadas por clientes en Google Maps.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {googleReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6"
            >
              <div className="flex gap-1 text-[var(--emerald)]" aria-label={`${review.rating} de 5 estrellas`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="material-symbols-outlined text-xl" aria-hidden="true">
                    star
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-[var(--text-primary)]">“{review.quote}”</p>
              <p className="mt-5 text-sm font-bold text-[var(--text-secondary)]">{review.author}</p>
              <a
                href={review.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--emerald)]"
              >
                Ver reseña en Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </Section>

      <StructuredData data={[organizationSchema(), ...reviewsSchema()]} />
    </main>
  );
}
