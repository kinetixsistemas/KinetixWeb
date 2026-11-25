import type { StaticImageData } from 'next/image';
import { desarrolloWeb, desarrolloAgente, desarrolloRealState } from '../assets/index';

export interface CaseStudy {
  slug: string;
  title: string;
  anonymousTitle: string;
  type: string;
  clientNameVisible: boolean;
  screenshotVisible: boolean;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  result?: string;
  image?: StaticImageData;
  link?: string;
  demo?: { label: string; href: string };
  relatedService: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'distribuidora-super-carabobo',
    title: 'Distribuidora Súper Carabobo',
    anonymousTitle: 'Distribuidora de alimentos en Venezuela',
    type: 'E-commerce y panel administrativo',
    clientNameVisible: true,
    screenshotVisible: false,
    context: 'Distribuidora con venta online y gestión interna de pedidos.',
    problem: 'Necesitaba un ecosistema de ventas con panel administrativo, lista de precios e inventario sincronizado.',
    solution:
      'Construimos un ecosistema de ventas escalable con panel administrativo, registro de ventas, lista de precios, historial y gestión de inventario en tiempo real.',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL'],
    image: desarrolloWeb,
    link: 'https://www.distribuidorasupercarabobo.com',
    relatedService: 'plataforma-b2b-mayorista',
  },
  {
    slug: 'vtr-import',
    title: 'VTR Import C.A.',
    anonymousTitle: 'Importadora de repuestos de motos en Venezuela',
    type: 'Venta al mayor de repuestos',
    clientNameVisible: true,
    screenshotVisible: false,
    context: 'Importadora de repuestos, cauchos, cascos, accesorios, carrocería y baterías de motos.',
    problem: 'Necesitaba mostrar su catálogo al mayor con una forma clara de solicitar pedidos.',
    solution: 'Diseñamos un sitio web de venta al mayor organizado por categorías de repuestos y accesorios.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: desarrolloRealState,
    relatedService: 'paginas-repuestos-al-mayor',
  },
  {
    slug: 'sistema-inventario-facturacion',
    title: 'Sistema de inventario y facturación',
    anonymousTitle: 'Sistema de inventario y facturación para un negocio en Venezuela',
    type: 'ERP ligero',
    clientNameVisible: true,
    screenshotVisible: false,
    context: 'Negocio venezolano con necesidad de controlar inventario y facturación.',
    problem: 'Las existencias y los comprobantes se llevaban en archivos separados.',
    solution: 'Construimos un sistema ligero que reúne inventario y facturación en un solo flujo.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    relatedService: 'sistemas-pwa-inventario-ventas',
  },
  {
    slug: 'sistema-logistica-transporte',
    title: 'Sistema de gestión logística de transporte',
    anonymousTitle: 'Sistema de logística para una empresa de transporte',
    type: 'Gestión logística',
    clientNameVisible: true,
    screenshotVisible: false,
    context: 'Operación de transporte con camiones y viajes repartidos en distintas rutas.',
    problem: 'Camiones, viajes, viáticos y pagos a choferes se controlaban de forma dispersa.',
    solution: 'Construimos un sistema para registrar camiones, viajes, viáticos y pagos a choferes.',
    technologies: ['Next.js', 'PostgreSQL'],
    relatedService: 'sistemas-pwa-inventario-ventas',
  },
  {
    slug: 'sistema-consultorio-odontologico',
    title: 'Sistema de gestión para consultorio odontológico',
    anonymousTitle: 'Sistema para consultorio odontológico',
    type: 'Software para clínicas dentales',
    clientNameVisible: true,
    screenshotVisible: false,
    context: 'Consultorio odontológico que necesitaba digitalizar su información clínica.',
    problem: 'Historia clínica, odontograma, presupuestos y agenda se manejaban por separado.',
    solution:
      'Construimos un sistema con historia clínica, odontograma, presupuestos y agenda, con una demo pública disponible.',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL'],
    demo: { label: 'Ver demo del sistema odontológico', href: 'https://demodonto.kinetixsistemas.com/' },
    relatedService: 'sistema-clinicas-odontologicas',
  },
  {
    slug: 'agente-whatsapp-ia',
    title: 'Agente de WhatsApp con IA',
    anonymousTitle: 'Simulador de agente de WhatsApp con IA',
    type: 'Automatización con IA',
    clientNameVisible: false,
    screenshotVisible: false,
    context: 'Demostración de cómo un agente atiende y califica prospectos por WhatsApp.',
    problem: 'Los negocios pierden conversaciones cuando nadie puede responder de inmediato.',
    solution:
      'Implementamos un agente con n8n y Evolution API que atiende, filtra y califica prospectos. Se muestra como demo, no como caso de cliente.',
    technologies: ['n8n', 'Evolution API', 'WhatsApp Business API'],
    image: desarrolloAgente,
    relatedService: 'automatizacion-ia-whatsapp',
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}

export function caseTitle(item: CaseStudy): string {
  return item.clientNameVisible ? item.title : item.anonymousTitle;
}
