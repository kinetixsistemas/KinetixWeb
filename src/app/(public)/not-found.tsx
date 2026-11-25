import Link from 'next/link';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Section from '../../components/ui/Section';

const links = [
  { href: '/', label: 'Ir al inicio', description: 'Conoce qué hacemos en Kinetix Sistemas.' },
  { href: '/servicios', label: 'Ver servicios', description: 'Web, sistemas, inventario y automatización.' },
  { href: '/portafolio', label: 'Ver portafolio', description: 'Proyectos y demostraciones publicadas.' },
  { href: '/contacto', label: 'Contactar', description: 'Escríbenos para resolver tus dudas.' },
];

export default function NotFound() {
  return (
    <main className="bg-[var(--bg-base)]">
      <Section>
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Página no encontrada' },
          ]}
        />

        <div className="mx-auto max-w-3xl">
          <p className="section-overline mb-4">Error 404</p>
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            No encontramos esta página
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
            Puede que la dirección haya cambiado o que el enlace esté incompleto. Te dejamos rutas útiles para seguir explorando.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="card p-6">
                <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {link.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {link.description}
                </p>
                <span aria-hidden="true" className="mt-4 inline-block text-[var(--emerald)]">
                  →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-[var(--text-muted)]">
            Si llegaste desde un enlace externo, puedes escribirnos y te indicamos la ruta correcta.
          </p>
        </div>
      </Section>
    </main>
  );
}
