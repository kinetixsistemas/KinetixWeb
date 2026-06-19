import { desarrolloWeb, desarrolloAgente, desarrolloRealState } from '@/assets/index';


export interface Project {
    title: string;
    description: string;
    category: string;
    image: any;
    link: string;
    span: string;
    tags?: string[];
}

const projects: Project[] = [
    {
        title: "Plataforma de E-commerce Pro",
        description: "Implementación de un ecosistema de ventas escalable con integración de panel administrativo, ventas, lista de precios, historial de ventas y gestión de inventario en tiempo real.",
        category: "E-commerce",
        image: desarrolloWeb,
        link: "https://www.distribuidorasupercarabobo.com",
        span: "md:col-span-8",
        tags: ["Next.js", "Supabase", "Real Time"],
    },
    {
        title: "Automatización de Flujos",
        description: "Orquestación de procesos complejos utilizando n8n y modelos de IA, lectura mensajes y de audio, repuesta automatizada, integración con canales de comunicación.",
        category: "Automatización (n8n)",
        image: desarrolloAgente,
        link: "",
        span: "md:col-span-5",
        tags: ["n8n", "Evolution Api", "OpenAI"],
    },
    {
        title: "Inversiones Inmobiliarias",
        description: "Página web para bienes raíces en Barquisimeto, con integraciones y servicios diseñados para la gestión de propiedades.",
        category: "Landing Pages",
        image: desarrolloRealState,
        link: "",
        span: "md:col-span-7",
        tags: ["Next.js", "Supabase", "Real Time"],
    }
];

export { projects }