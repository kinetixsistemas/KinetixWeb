import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { kinetixLogo } from '../assets/index';

const footerLinks = {
  servicios: [
    { label: 'Desarrollo Web & Apps', href: '/servicios' },
    { label: 'Chatbots con IA', href: '/servicios' },
    { label: 'Automatización n8n', href: '/servicios' },
    { label: 'SEO Avanzado', href: '/servicios' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/about' },
    { label: 'Portafolio', href: '/portfolio' },
    { label: 'Casos de Éxito', href: '/portfolio' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Servicio', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: 'language', label: 'Web', href: '#' },
  { icon: 'alternate_email', label: 'Email', href: 'mailto:info@kinetixsistemas.com' },
  { icon: 'chat', label: 'WhatsApp', href: 'https://wa.me/584241234567' },
];

function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <Image
                src={kinetixLogo}
                alt="Kinetix Sistemas"
                width={42}
                height={42}
                className="rounded-xl"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-white">KINETIX</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/50 uppercase">Sistemas</span>
              </div>
            </Link>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-xs">
              Transformamos tu negocio con soluciones de inteligencia artificial, automatización y desarrollo de software a medida.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[var(--emerald)] border border-white/10 hover:border-[var(--emerald)] transition-all duration-200 group"
                >
                  <span className="material-symbols-outlined text-[18px] text-white/60 group-hover:text-white transition-colors">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--emerald)] mb-4">
                Servicios
              </p>
              <ul className="space-y-2.5">
                {footerLinks.servicios.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--emerald)] mb-4">
                Empresa
              </p>
              <ul className="space-y-2.5">
                {footerLinks.empresa.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--emerald)] mb-4">
                Contacto
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[var(--emerald)] text-[16px] mt-0.5">location_on</span>
                  <span className="text-sm text-white/60 leading-snug">Venezuela</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[var(--emerald)] text-[16px] mt-0.5">alternate_email</span>
                  <a href="mailto:info@kinetixsistemas.com" className="text-sm text-white/60 hover:text-white transition-colors">
                    info@kinetixsistemas.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[var(--emerald)] text-[16px] mt-0.5">chat</span>
                  <a href="https://wa.me/584241234567" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                    WhatsApp Business
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kinetix Sistemas. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            {footerLinks.legal.map(({ label, href }) => (
              <a key={label} href={href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;