import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import CTAButton from '../../../components/ui/CTAButton';
import Section from '../../../components/ui/Section';
import { posts } from '../../../content/blog';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Blog | Kinetix Sistemas',
  description:
    'Artículos sobre inventario, PWA, software dental, ventas al mayor y WhatsApp para negocios en Venezuela.',
  path: '/blog',
});

const dateFormatter = new Intl.DateTimeFormat('es-VE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(value: string): string {
  return dateFormatter.format(new Date(value));
}

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => b.publishedTime.localeCompare(a.publishedTime));

  return (
    <main className="bg-[var(--bg-base)]">
      <Section>
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Blog' },
          ]}
        />

        <header className="max-w-3xl">
          <p className="section-overline mb-4">Blog de Kinetix Sistemas</p>
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Guías prácticas para tu negocio
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
            Explicamos sin tecnicismos cómo organizar inventario, vender al mayor, usar WhatsApp y elegir software para tu operación.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="card flex h-full flex-col p-7">
              <time
                dateTime={post.publishedTime}
                className="text-xs font-bold uppercase tracking-wider text-[var(--emerald)]"
              >
                {formatDate(post.publishedTime)}
              </time>
              <h2 className="font-display mt-3 text-2xl font-bold text-[var(--text-primary)]">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--primary)]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                aria-label={`Leer artículo: ${post.title}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--emerald)]"
              >
                Leer artículo
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <CTAButton ctaLocation="blog_index" pagePath="/blog">
            Conversar con Kinetix Sistemas
          </CTAButton>
          <Link
            href="/servicios"
            className="text-sm font-bold text-[var(--primary)] hover:text-[var(--emerald)]"
          >
            Ver todos los servicios
          </Link>
        </div>
      </Section>
    </main>
  );
}
