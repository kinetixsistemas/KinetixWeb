import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../../components/ui/Breadcrumbs';
import CTAButton from '../../../../components/ui/CTAButton';
import Section from '../../../../components/ui/Section';
import StructuredData from '../../../../components/ui/StructuredData';
import { getPost, posts } from '../../../../content/blog';
import { getService } from '../../../../content/services';
import { createMetadata } from '../../../../lib/metadata';
import { articleSchema, breadcrumbSchema } from '../../../../lib/structured-data';

const dateFormatter = new Intl.DateTimeFormat('es-VE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(value: string): string {
  return dateFormatter.format(new Date(value));
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return createMetadata({
      title: 'Artículo no encontrado | Kinetix Sistemas',
      description: 'El artículo que buscas no está disponible en el blog de Kinetix Sistemas.',
      path: '/blog',
    });
  }

  return createMetadata({
    title: `${post.title} | Kinetix Sistemas`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedTime,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const service = post.relatedService ? getService(post.relatedService) : undefined;
  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  return (
    <main className="bg-[var(--bg-base)]">
      <StructuredData
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            publishedTime: post.publishedTime,
            modifiedTime: post.modifiedTime,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <Section>
        <Breadcrumbs items={crumbs} />

        <article className="mx-auto max-w-3xl">
          <header className="border-b border-[var(--surface-border)] pb-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
              <span>
                Publicado:{' '}
                <time dateTime={post.publishedTime}>{formatDate(post.publishedTime)}</time>
              </span>
              <span>
                Actualizado:{' '}
                <time dateTime={post.modifiedTime}>{formatDate(post.modifiedTime)}</time>
              </span>
              <span>Por {post.author}</span>
            </div>
            <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
              {post.description}
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-[var(--text-secondary)]">
            {post.content.map((block, index) =>
              typeof block === 'string' ? (
                <p key={index}>{block}</p>
              ) : (
                <section key={index} className="pt-6">
                  <h2 className="font-display mb-4 text-2xl font-bold text-[var(--text-primary)]">
                    {block.heading}
                  </h2>
                  <div className="space-y-6">
                    {block.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>

          {service && (
            <aside className="mt-12 rounded-[var(--radius-lg)] border border-[var(--surface-border)] bg-[var(--surface-muted)] p-6">
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Servicio relacionado
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {service.summary}
              </p>
              <Link
                href={`/servicios/${service.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--emerald)]"
              >
                Conocer {service.name}
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          )}

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[var(--surface-border)] pt-8">
            <CTAButton ctaLocation={`blog_post_${post.slug}`} pagePath={`/blog/${post.slug}`}>
              Cotizar por WhatsApp
            </CTAButton>
            <Link
              href="/blog"
              className="text-sm font-bold text-[var(--primary)] hover:text-[var(--emerald)]"
            >
              Volver a todos los artículos
            </Link>
          </div>
        </article>
      </Section>
    </main>
  );
}
