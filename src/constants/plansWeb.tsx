import { Wrench, Bug, Clock, ShieldCheck, Code2, Database, GitMerge, Search } from 'lucide-react';


const plans = [
    {
        name: "Plan Presencia",
        subtitle: "Landing Page Pro",
        idealFor: "Promoción de un producto único o servicio profesional (ej. Bienes Raíces).",
        price: 59.90,
        period: "pago único",
        features: [
            "Diseño de una sección (One Page)",
            "Botón de WhatsApp directo",
            "Formulario de contacto estratégico"
        ],
        buttonText: "Empezar Presencia",
        recommended: false,
    },
    {
        name: "Plan Crecimiento",
        subtitle: "Web Catálogo & Servicios",
        idealFor: "Empresas con múltiples productos (Repuestos, Lubricantes, Menús).",
        price: 249.90,
        period: "pago único",
        features: [
            "Hasta 5 secciones internas",
            "Catálogo autogestionable (Supabase)",
            "Panel administrativo básico"
        ],
        buttonText: "Elegir Crecimiento",
        recommended: true,
    },
    {
        name: "Plan Elite",
        subtitle: "E-commerce Full con IA",
        idealFor: "Tiendas que requieren facturación y control de stock en tiempo real.",
        price: 449.90,
        period: "pago único",
        features: [
            "Carrito de compras completo",
            "Pagos (Binance / Pago Móvil)",
            "Notificaciones de pedido por n8n"
        ],
        buttonText: "Contactar para Elite",
        recommended: false,
    }
];

const faqs = [
    {
        question: "¿Existen costos adicionales por el uso de bases de datos?",
        answer: "Las plataformas de gestión de datos como Supabase o Firebase operan bajo sus propios esquemas de precios y límites de uso. Si su proyecto requiere una base de datos integrada directamente en el código de la web, dicho servicio tiene un costo anual que ya está incluido en su plan inicial y que deberá ser renovado cada año para garantizar la continuidad del sistema."
    },
    {
        question: "¿Qué sucede si quiero hacer cambios después de entregada la web?",
        answer: "Cualquier modificación estética, cambios en el diseño original o la adición de nuevas ventanas y funcionalidades que no estén contempladas en el plan adquirido inicialmente, se gestionarán bajo una modalidad de costo mensual o por proyecto personalizado. Esto nos permite asegurar que su plataforma se mantenga actualizada y optimizada según sus nuevos requerimientos."
    },
    {
        question: "¿El dominio y el hosting están incluidos para siempre?",
        answer: "Dominio: El costo del primer año de su dominio web está totalmente incluido con la adquisición de cualquier plan de página web. \n\nRenovación: A partir del segundo año, la renovación del dominio tendrá un costo establecido directamente por el proveedor (registrador) del mismo. \n\nHosting: El alojamiento web (hosting) requiere una renovación anual obligatoria para mantener el sitio en línea, gestionada a través del proveedor del servicio."
    },
    {
        question: "¿Por qué el precio de renovación puede variar?",
        answer: "Es importante destacar que los precios de renovación de servicios externos (como dominios, hosting o bases de datos de terceros) no siempre coinciden con el precio de adquisición inicial. Sistemas Kinetix no establece ni controla las tarifas de estos proveedores externos; los ajustes de precios dependen exclusivamente de las políticas comerciales de dichas empresas tecnológicas."
    }
];

const maintenancePlans = [
    { title: "Diagnóstico Técnico", price: "$20.00", desc: "(Se abona al trabajo final si se contrata)", icon: <Wrench className="w-6 h-6 text-emerald" /> },
    { title: "Corrección de Errores", price: "Desde $40.00", desc: "Por intervención", icon: <Bug className="w-6 h-6 text-primary" /> },
    { title: "Modificación Diseño", price: "$15.00/hr", desc: "Por hora de desarrollo", icon: <Clock className="w-6 h-6 text-emerald" /> },
    { title: "Plan 'Web Care'", price: "Desde $45.00/mes", desc: "Cambios constantes y SEO mensual", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
];

const pillars = [
    {
        title: "Arquitectura Basada en el Valor Técnico",
        description: "Utilizamos los stacks más avanzados de la industria, como Next.js, React y Tailwind CSS, para garantizar que cada sitio sea ultrarrápido, seguro y optimizado para SEO. No usamos plantillas genéricas; construimos soluciones a medida que reflejan la autoridad de tu marca.",
        icon: <Code2 className="w-6 h-6 text-emerald" />
    },
    {
        title: "Gestión Inteligente de Datos con Supabase",
        description: "Integramos Supabase como el motor de base de datos para nuestros clientes. Esto permite:\n• Catálogos Dinámicos: Gestión de inventarios, productos o servicios en tiempo real.\n• Seguridad Empresarial: Protección de datos de usuarios y transacciones.\n• Paneles Administrativos: Herramientas personalizadas para que el dueño del negocio controle su información sin depender de un programador.",
        icon: <Database className="w-6 h-6 text-primary" />
    },
    {
        title: "Ecosistemas Conectados (Integración n8n)",
        description: "Nuestra diferencia competitiva es el \"Upgrade de Inteligencia\". Una web de Sistemas Kinetix puede conectarse directamente con flujos de n8n, transformando un sitio estático en un sistema que:\n• Notifica ventas por WhatsApp al instante.\n• Registra leads automáticamente en CRMs o hojas de cálculo.\n• Integra agentes de IA (Groq/OpenAI) para atender clientes dentro de la propia web.",
        icon: <GitMerge className="w-6 h-6 text-emerald" />
    },
    {
        title: "Enfoque en Conversión y SEO Local",
        description: "Diseñamos con el mercado de Barquisimeto y Venezuela en mente, aplicando estrategias de SEO técnico y local para asegurar que tu empresa aparezca cuando los clientes busquen tus servicios en la región.",
        icon: <Search className="w-6 h-6 text-primary" />
    }
];

export { plans, faqs, maintenancePlans, pillars };