'use client';

import { useState, useEffect, useRef, startTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServiceOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
      setIsServiceOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[var(--surface-border)]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src={kinetixLogo}
              alt="Logo de Kinetix Sistemas"
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
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/') ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
              }`}
            >
              Inicio
            </Link>

            <div
              ref={dropdownRef}
              className="relative group/nav"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <Link
                href="/servicios"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname.startsWith('/servicios') ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
              >
                Servicios
                <span
                  aria-hidden="true"
                  className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </Link>

              <div
                className={`absolute top-full left-0 pt-2 w-80 transition-all duration-300 origin-top-left ${
                  isServicesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                }`}
              >
                <div className="rounded-2xl border border-[var(--surface-border)] bg-white p-2 shadow-lg">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsServiceOpen(false)}
                      className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--surface-muted)]"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-xl text-[var(--primary)] shrink-0"
                      >
                        {service.icon}
                      </span>
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
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(href) ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton ctaLocation="navbar" pagePath={pathname} className="!px-5 !py-2.5">
              Cotizar por WhatsApp
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-[var(--surface-muted)]"
          >
            <span className={`block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 rounded-full bg-[var(--text-primary)] transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(13,15,20,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsOpen(false)}
      />

      <nav
        id="mobile-menu"
        aria-label="Menú móvil"
        className={`fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-white lg:hidden flex flex-col shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-[var(--surface-border)] p-6">
          <span className="font-bold text-[var(--text-primary)]">Navegación</span>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar menú" className="p-2">
            <span aria-hidden="true" className="material-symbols-outlined text-[var(--text-secondary)]">close</span>
          </button>
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
              <span aria-hidden="true" className="material-symbols-outlined text-[var(--primary)]">{service.icon}</span>
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
            <CTAButton ctaLocation="mobile_navbar" pagePath={pathname} className="w-full">
              Cotizar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </nav>

      <div className="h-[72px]" />
    </>
  );
}
