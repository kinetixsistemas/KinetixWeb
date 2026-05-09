import React from 'react';
import { Metadata } from 'next';
import { Check, ChevronDown, Wrench, Bug, Clock, ShieldCheck, Cpu, Zap, Rocket, Globe, Code2, Database, GitMerge, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: "Desarrollo Web & Ecosistemas Digitales | Sistemas Kinetix",
    description: "Planes de desarrollo web diseñados bajo Pago por Valor Técnico. Entregamos una infraestructura optimizada para convertir visitantes en clientes.",
    keywords: "Desarrollo web Barquisimeto, E-commerce Venezuela, Landing Page, Supabase, Diseño web profesional, n8n"
};

export default function DesarrolloWebPage() {
    const plans = [
        {
            name: "Plan Presencia",
            subtitle: "Landing Page Pro",
            idealFor: "Promoción de un producto único o servicio profesional (ej. Bienes Raíces).",
            price: 120,
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
            price: 250,
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
            price: 450,
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

    return (
        <main className="min-h-screen bg-bg-base">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 gradient-hero text-text-inverted relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-30 mix-blend-screen pointer-events-none animate-pulse-ring"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(0,199,143,0.8)]"></span>
                        <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">Pago por Valor Técnico</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Desarrollo Web & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-blue-400">
                            Ecosistemas Digitales
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                        No solo entregamos un sitio, entregamos una infraestructura optimizada para convertir visitantes en clientes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#planes" className="btn-emerald w-full sm:w-auto text-lg px-8 py-4 justify-center">
                            Ver Planes de Desarrollo
                        </a>
                        <a href="https://wa.me/message/TU_WHATSAPP" target="_blank" rel="noopener noreferrer" className="btn-ghost-white w-full sm:w-auto text-lg px-8 py-4 justify-center">
                            Consulta Gratuita
                        </a>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 px-6 bg-bg-base relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="section-overline">Nuestra Metodología</span>
                        <h2 className="text-4xl md:text-5xl font-display text-text-primary mt-4 mb-6">
                            Pilares Estratégicos del Desarrollo
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            En Sistemas Kinetix, el desarrollo web no se trata solo de crear sitios visualmente atractivos, sino de construir infraestructuras digitales de alto rendimiento diseñadas para escalar negocios y automatizar procesos desde la primera línea de código.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {pillars.map((pillar, idx) => (
                            <div key={idx} className="card p-8 group hover:border-emerald/30">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-light group-hover:text-emerald transition-all duration-300">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-text-primary">{pillar.title}</h3>
                                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="planes" className="py-24 bg-bg-dark relative overflow-hidden">
                <div className="noise-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="section-overline text-primary">Precios de Inversión</span>
                        <h2 className="text-4xl md:text-5xl font-display text-text-inverted mt-4 mb-6">Planes de Desarrollo</h2>
                        <p className="text-text-muted max-w-2xl mx-auto text-lg">
                            Soluciones estructuradas que escalan con la visión de tu empresa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative flex flex-col p-8 rounded-[24px] transition-all duration-300 ${plan.recommended ? 'bg-bg-dark-card border-2 border-primary transform md:-translate-y-4 shadow-primary' : 'bg-bg-dark border border-surface-border-dark hover:border-surface-border'}`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                        <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                                            El Favorito
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="flex justify-between items-end mb-2">
                                        <h3 className="text-xl font-display text-text-inverted">{plan.name}</h3>
                                    </div>
                                    <div className="text-sm font-bold text-emerald mb-2">{plan.subtitle}</div>
                                    <div className="text-sm text-text-muted min-h-[50px]">{plan.idealFor}</div>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-display text-text-inverted">
                                            ${plan.price}
                                        </span>
                                    </div>
                                    <span className="text-text-muted text-sm block mt-1">{plan.period}</span>
                                </div>

                                <a href={`https://wa.me/message/TU_WHATSAPP?text=Hola, estoy interesado en el ${plan.name}`} target="_blank" rel="noopener noreferrer" className={`w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition-all mb-8 block ${plan.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-primary' : 'bg-white/5 text-text-inverted border border-white/10 hover:bg-white/10'}`}>
                                    {plan.buttonText}
                                </a>

                                <div className="space-y-4 flex-1">
                                    <p className="text-sm font-bold text-text-inverted mb-4 border-b border-surface-border-dark pb-2">¿Qué incluye?</p>
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.recommended ? 'text-primary' : 'text-emerald'}`} />
                                            <span className="text-sm text-text-muted">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upgrade de Inteligencia AI Box */}
            <section className="py-12 bg-bg-base relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass-panel relative overflow-hidden p-1 bg-gradient-to-r from-emerald via-primary to-emerald rounded-3xl p-[2px]">
                        <div className="bg-bg-dark rounded-[22px] p-8 md:p-12 relative flex flex-col md:flex-row items-center gap-8 z-10">
                            <div className="absolute inset-0 noise-overlay opacity-30"></div>

                            <div className="w-24 h-24 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                                <Cpu className="w-12 h-12 text-emerald animate-pulse-ring" />
                            </div>

                            <div className="flex-1 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-5 h-5 text-emerald" />
                                    <span className="text-sm font-bold tracking-widest uppercase text-emerald">Upgrade de Inteligencia</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-display text-text-inverted mb-4">
                                    Integración con Automatización (n8n)
                                </h3>
                                <p className="text-text-muted leading-relaxed mb-6">
                                    Cualquier plan web puede integrar un Agente de IA de Sistemas Kinetix por una suscripción mensual de <strong>$19.99</strong>. Tu web no solo informa, sino que <strong>vende y atiende de forma autónoma</strong> gracias a la integración con Groq y n8n.
                                </p>
                                <button className="btn-emerald">
                                    Añadir Inteligencia a mi Web
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soporte y Modificaciones */}
            <section className="py-24 px-6 bg-surface-muted relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-overline">Soporte Continuo</span>
                        <h2 className="text-4xl font-display text-text-primary mt-4 mb-6">
                            Plan de Modificaciones y Soporte Personalizado
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Para clientes que ya tienen una web pero necesitan mejorarla o corregir errores.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenancePlans.map((plan, idx) => (
                            <div key={idx} className="card p-8 group hover:border-emerald/30">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-light group-hover:text-emerald transition-all duration-300">
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-text-primary">{plan.title}</h3>
                                <div className="text-2xl font-display text-primary mb-2">{plan.price}</div>
                                <p className="text-text-secondary leading-relaxed">{plan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-bg-base relative">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-overline">Aclaratorias Comunes</span>
                        <h2 className="text-4xl font-display text-text-primary mt-4 mb-6">
                            Preguntas Frecuentes y Políticas
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group card overflow-hidden cursor-pointer">
                                <summary className="flex justify-between items-center font-bold list-none p-6 text-text-primary group-open:bg-surface-muted transition-colors">
                                    <span className="text-lg pr-8">{faq.question}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                                        <ChevronDown className="text-primary w-6 h-6" />
                                    </span>
                                </summary>
                                <div className="text-text-secondary p-6 pt-0 leading-relaxed border-t border-surface-border whitespace-pre-line">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
