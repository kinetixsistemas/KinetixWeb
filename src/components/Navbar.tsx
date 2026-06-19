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
  { href: '/servicios', label: 'Todos los Servicios', icon: 'grid_view', desc: 'Explora todas nuestras soluciones' },
  { href: '/servicios/automatizacion', label: 'Automatización e IA', icon: 'smart_toy', desc: 'Asistentes 24/7 y flujos n8n' },
  { href: '/servicios/desarrollo-web', label: 'Desarrollo Web', icon: 'code_blocks', desc: 'Plataformas escalables y eficaces' },
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

            {/* Dropdown Servicios (Hover Menu) */}
            <div
              className="relative group/nav"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <Link
                href="/servicios"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${pathname.startsWith('/servicios') ? 'text-[var(--primary)] bg-[var(--primary-light)]' : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'}`}
              >
                Servicios
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </Link>

              {/* Menu Desplegable */}
              <div className={`absolute top-full left-0 pt-2 w-72 transition-all duration-300 origin-top-left ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="bg-white rounded-xl border border-[var(--surface-border)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 flex flex-col gap-1">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex gap-3 p-3 rounded-lg hover:bg-[var(--surface-muted)] transition-colors group/item"
                      onClick={() => setIsServiceOpen(false)}
                    >
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)] group-hover/item:text-white transition-colors shrink-0 ${service.href.includes('automatizacion') ? 'group-hover/item:bg-[var(--emerald)]' : 'group-hover/item:bg-[var(--primary)]'}`}>
                        <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                      </div>
                      <div>
                        <div className={`text-sm font-bold text-[var(--text-primary)] transition-colors ${service.href.includes('automatizacion') ? 'group-hover/item:text-[var(--emerald)]' : 'group-hover/item:text-[var(--primary)]'}`}>
                          {service.label}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug">
                          {service.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
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
            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                rel="noopener noreferrer"
                className="hidden md:flex btn-emerald text-sm px-5 py-2.5 !rounded-full !tracking-normal !normal-case !font-semibold"
                aria-label="Contactar por WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">contact_page</span>
                Contactanos
              </Link>
            </div>
          </nav>

          {/* CTA + Mobile Toggle */}

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
      </header >

      {/* Mobile Menu Overlay */}
      < div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`
        }
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
            <span className="px-3 text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Servicios</span>
            {servicesLinks.map((service) => (
              <Link key={service.href} href={service.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--surface-muted)] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[var(--text-primary)] text-sm">{service.label}</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-tight mt-0.5">{service.desc}</span>
                </div>
              </Link>
            ))}
          </div>

          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl font-semibold hover:bg-slate-50">
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              rel="noopener noreferrer"
              className="flex btn-emerald text-sm px-5 py-2.5 !rounded-full !tracking-normal !normal-case !font-semibold"
              aria-label="Contactar por WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">contact_page</span>
              Contactanos
            </Link>

          </div>
        </div>

      </nav>

      {/* Spacer so content doesn't sit under fixed header */}
      <div className="h-[72px]" />
    </>
  );
}