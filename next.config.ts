import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/nosotros', permanent: true },
      { source: '/servicios/automatizacion', destination: '/servicios/automatizacion-ia-whatsapp', permanent: true },
      { source: '/portfolio', destination: '/portafolio', permanent: true },
    ];
  },
};

export default nextConfig;
