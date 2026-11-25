import Link from 'next/link';
import Image from 'next/image';
import { kinetixLogo } from '../assets/index';
import { services } from '../content/services';
import { siteConfig } from '../config/site';
import CTAButton from './ui/CTAButton';

const footerLinks = {
  servicios: services.map((service) => ({
    label: service.name,
    href: `/servicios/${service.slug}`,
  })),
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Demos', href: '/demos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Cotizar', href: '/cotizar' },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Descargo', href: '/descargo' },
  ],
};

const socialLinks = [
  { label: 'Facebook', icon: 'facebook', href: siteConfig.social.facebook },
  { label: 'Instagram', icon: 'photo_camera', href: siteConfig.social.instagram },
  { label: 'TikTok', icon: 'music_note', href: siteConfig.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="mb-5 flex items-center gap-3 group">
              <Image
                src={kinetixLogo}
                alt="Logo de Kinetix Sistemas"
                className="h-[42px] w-auto rounded-xl"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight">KINETIX</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">Sistemas</span>
              </span>
            </Link>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              Páginas web, sistemas de inventario y ventas, software para clínicas dentales y automatización con IA en
              WhatsApp. Desde Barquisimeto, Venezuela.
            </p>

            <div className="flex gap-2">
              {socialLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[var(--emerald)] hover:bg-[var(--emerald)]"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-white/70">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:col-span-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--emerald)]">Servicios</p>
              <ul className="space-y-2.5">
                {footerLinks.servicios.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/60 transition-colors hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--emerald)]">Empresa</p>
              <ul className="space-y-2.5">
                {footerLinks.empresa.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/60 transition-colors hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--emerald)]">Legal</p>
              <ul className="space-y-2.5">
                {footerLinks.legal.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/60 transition-colors hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--emerald)]">Contacto</p>
              <ul className="space-y-3 text-sm text-white/60">
                <li>{siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}</li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
                </li>
                <li>{siteConfig.whatsapp.display}</li>
                <li>{siteConfig.businessHours.summary}</li>
              </ul>
              <div className="mt-5">
                <CTAButton ctaLocation="footer" variant="dark" className="!px-5 !py-2.5">
                  Cotizar por WhatsApp
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">Hecho en {siteConfig.location.city}, {siteConfig.location.country}</p>
        </div>
      </div>
    </footer>
  );
}
