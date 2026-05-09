'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { kinetixLogo } from '../assets/index';

const navLinks = [
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/about', label: 'Nosotros' },
];

const servicesLinks = [
  { href: '/servicios/automatizacion', label: 'Automatización', icon: 'bolt' },
  { href: '/servicios/desarrollo-web', label: 'Desarrollo Web', icon: 'code' },
]

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
    setIsOpen(false);
  }, [pathname]);

  // cerra el dropdown de servicios al hacer clic fuera de el 
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServiceOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-[var(--surface-border)]'
          : 'bg-white/70 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={kinetixLogo}
                alt="Kinetix Sistemas Logo"
                width={44}
                height={44}
                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[var(--emerald)] rounded-full border-2 border-white animate-pulse-ring" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-bold tracking-tight text-[var(--text-primary)]">
                KINETIX
              </span>
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[var(--text-muted)] uppercase">
                Sistemas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/') ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'}`}>
              Inicio
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                {/* El texto "Servicios" ahora es un Link clickeable */}
                <Link
                  href="/servicios"
                  className={`px-4 py-2 rounded-l-lg text-sm font-semibold transition-all ${pathname.startsWith('/servicios') ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                    }`}
                >
                  Servicios
                </Link>

                {/* Botón pequeño para abrir el dropdown */}
                <button
                  onClick={() => setIsServiceOpen(!isServicesOpen)}
                  className={`pr-2 py-2 rounded-r-lg transition-all ${pathname.startsWith('/servicios') ? 'bg-[var(--primary-light)] text-[var(--primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                    }`}
                >
                  <span className={`material-symbols-outlined text-[18px] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
              </div>

              {/* Menu Desplegable */}
              <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl bg-white border border-[var(--surface-border)] shadow-xl p-2 transition-all duration-200 origin-top-left ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive(href) ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              rel="noopener noreferrer"
              className="hidden md:flex btn-emerald text-sm px-5 py-2.5 !rounded-full !tracking-normal !normal-case !font-semibold"
              aria-label="Contactar por WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">computer</span>
              Demo 15 dias Gratis
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Abrir menú"
              className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-[var(--surface-muted)] transition-colors"
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
        style={{ background: 'rgba(13, 15, 20, 0.5)', backdropFilter: 'blur(4px)' }}
      />

      {/* Mobile Menu Panel */}
      <nav
        aria-label="Menú móvil"
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-white md:hidden flex flex-col shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--surface-border)]">
          <span className="font-bold text-[var(--text-primary)] tracking-tight">Navegación</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-[var(--surface-muted)] transition-colors"
            aria-label="Cerrar menú"
          >
            <span className="material-symbols-outlined text-[var(--text-secondary)]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <Link href="/" className="flex items-center gap-3 p-3 rounded-xl font-semibold hover:bg-slate-50">
            <span className="material-symbols-outlined">home</span> Inicio
          </Link>

          {/* Servicios en Mobile */}
          <div className="py-2">
            <span className="px-3 text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Servicios</span>
            {servicesLinks.map((service) => (
              <Link key={service.href} href={service.href} className="flex items-center gap-3 p-3 rounded-xl font-semibold hover:bg-slate-50 pl-6">
                <span className="material-symbols-outlined text-[var(--primary)]">{service.icon}</span> {service.label}
              </Link>
            ))}
          </div>

          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl font-semibold hover:bg-slate-50">
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer so content doesn't sit under fixed header */}
      <div className="h-[72px]" />
    </>
  );
}