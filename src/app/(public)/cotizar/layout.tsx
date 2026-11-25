import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '../../../lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Cotizar | Kinetix Sistemas',
  description:
    'Cuéntanos qué necesitas y recibe una cotización personalizada de Kinetix Sistemas para tu página web, sistema o automatización.',
  path: '/cotizar',
});

export default function CotizarLayout({ children }: { children: ReactNode }) {
  return children;
}
