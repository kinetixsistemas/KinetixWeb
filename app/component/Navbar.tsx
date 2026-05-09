'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { kinetixLogo } from '../assets/index';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/about', label: 'Nosotros' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
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
              <span className="text-[15px] font-bold tracking-tight text-[var(--text-primary)]">
                KINETIX
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--text-muted)] uppercase">
                Sistemas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(href)
                    ? 'text-[var(--primary)] bg-[var(--primary-light)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--primary)] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/584241234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-emerald text-sm px-5 py-2.5 !rounded-full !tracking-normal !normal-case !font-semibold"
              aria-label="Contactar por WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Cotizar Proyecto
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
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        style={{ background: 'rgba(13, 15, 20, 0.5)', backdropFilter: 'blur(4px)' }}
      />

      {/* Mobile Menu Panel */}
      <nav
        aria-label="Menú móvil"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white md:hidden flex flex-col shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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

        <div className="flex-1 overflow-y-auto p-6 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                isActive(href)
                  ? 'text-[var(--primary)] bg-[var(--primary-light)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {href === '/' ? 'home' : href === '/servicios' ? 'rocket_launch' : href === '/portfolio' ? 'grid_view' : 'groups'}
              </span>
              {label}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-[var(--surface-border)]">
          <a
            href="https://wa.me/584241234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald w-full justify-center !rounded-xl !normal-case !tracking-normal !font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Cotizar Proyecto
          </a>
        </div>
      </nav>

      {/* Spacer so content doesn't sit under fixed header */}
      <div className="h-[72px]" />
    </>
  );
}