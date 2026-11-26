import MaterialIcon from './ui/MaterialIcon';
import Link from 'next/link';
import Image from 'next/image';
import { kinetixLogo } from '../assets/index';
import { services } from '../content/services';
import CTAButton from './ui/CTAButton';

const navLinks = [
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/demos', label: 'Demos' },
  { href: '/blog', label: 'Blog' },
  { href: '/nosotros', label: 'Nosotros' },
];

const servicesLinks = services.map((service) => ({
  href: `/servicios/${service.slug}`,
  label: service.name,
  icon: service.icon,
  desc: service.audience,
}));

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--surface-border)] bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src={kinetixLogo}
              alt="Logo de Kinetix Sistemas"
              sizes="44px"
              className="h-11 w-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight text-[var(--text-primary)]">KINETIX</span>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)]">
                Sistemas
              </span>
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
            >
              Inicio
            </Link>

            <div className="relative group">
              <Link
                href="/servicios"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              >
                Servicios
                <MaterialIcon name="expand_more" className="text-[18px] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
              </Link>

              <div className="invisible absolute top-full left-0 z-50 w-80 origin-top-left pt-2 opacity-0 scale-95 -translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0">
                <div className="rounded-2xl border border-[var(--surface-border)] bg-white p-2 shadow-lg">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--surface-muted)]"
                    >
                      <MaterialIcon name={service.icon} className="text-xl text-[var(--primary)] shrink-0" />
                      <span>
                        <span className="block text-sm font-bold text-[var(--text-primary)]">{service.label}</span>
                        <span className="block text-[11px] leading-snug text-[var(--text-secondary)]">{service.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton ctaLocation="navbar" className="!px-5 !py-2.5">
              Cotizar por WhatsApp
            </CTAButton>
          </div>

          <details className="group relative lg:hidden">
            <summary
              aria-label="Abrir menú"
              className="list-none [&::-webkit-details-marker]:hidden flex flex-col gap-[5px] p-2 rounded-lg cursor-pointer hover:bg-[var(--surface-muted)]"
            >
              <span className="block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all group-open:rotate-45 group-open:translate-y-[7px]" />
              <span className="block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all group-open:opacity-0 group-open:scale-x-0" />
              <span className="block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all group-open:-rotate-45 group-open:-translate-y-[7px]" />
            </summary>

            <nav
              id="mobile-menu"
              aria-label="Menú móvil"
              className="fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-white flex flex-col shadow-xl transition-transform duration-300 translate-x-full group-open:translate-x-0"
            >
              <div className="flex items-center justify-between border-b border-[var(--surface-border)] p-6">
                <span className="font-bold text-[var(--text-primary)]">Navegación</span>
                <MaterialIcon name="close" className="text-[var(--text-secondary)]" />
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto p-6">
                <Link href="/" className="block rounded-xl p-3 font-semibold hover:bg-[var(--surface-muted)]">Inicio</Link>
                <p className="px-3 pt-4 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Servicios</p>
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 rounded-xl p-3 hover:bg-[var(--surface-muted)]"
                  >
                    <MaterialIcon name={service.icon} className="text-[var(--primary)]" />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{service.label}</span>
                  </Link>
                ))}
                <p className="px-3 pt-4 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Empresa</p>
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className="block rounded-xl p-3 font-semibold hover:bg-[var(--surface-muted)]">
                    {label}
                  </Link>
                ))}
                <div className="pt-4">
                  <CTAButton ctaLocation="mobile_navbar" className="w-full">
                    Cotizar por WhatsApp
                  </CTAButton>
                </div>
              </div>
            </nav>
          </details>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
}
