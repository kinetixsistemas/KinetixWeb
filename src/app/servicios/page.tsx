'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { kinetixbanner } from '../../assets/index';
import { WHATSAPP_LINK } from '../../constants/number';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    children?: React.ReactNode;
}

const ServiceCard = ({ title, description, icon, className, children }: ServiceCardProps) => (
    <div className={`card p-8 flex flex-col group ${className}`}>
        <div
            className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,199,143,0.25)]"
            style={{ background: 'var(--emerald-light)' }}
        >
            <span className="material-symbols-outlined text-[var(--emerald)] text-[28px]">
                {icon}
            </span>
        </div>
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">{description}</p>
        {children}
    </div>
);

export default function ServiciosPage() {
    return (
        <main className="bg-[var(--bg-base)]">

            {/* ── Hero Section ── */}
            <section
                className="relative min-h-[75vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #0a2240 55%, #062356 100%)' }}
            >
                {/* Glow */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,199,143,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
                />
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                {/* Background image */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Image
                        alt="kinetixbanner"
                        src={kinetixbanner}
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <p className="section-overline mb-4">Nuestros servicios</p>
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Experiencia en{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, var(--emerald) 0%, #00e5a8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Automatización
                            </span>{' '}
                            & Desarrollo
                        </h1>
                        <p className="text-xl text-white/60 mb-8 leading-relaxed">
                            de procesos y soluciones digitales de alta precisión. No solo escribimos código; diseñamos la infraestructura tecnológica que permite a tu empresa escalar sin fricciones.
                            Transformamos la complejidad técnica en una ventaja competitiva.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-emerald"
                            >
                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                Solicitar Cotización
                            </a>
                            <Link href="/portfolio" className="btn-ghost-white">
                                Ver Portafolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Core Services Bento Grid ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-14"
                    >
                        <p className="section-overline mb-2 text-[14px]">Lo que ofrecemos</p>
                        <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-3">
                            Servicios Principales
                        </h2>
                        <div className="divider-emerald mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        {/* Service 1: Web & Apps – Wide */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="md:col-span-8 card p-8 group"
                        >
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                <div className="flex-1">
                                    <div
                                        className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: 'var(--emerald-light)' }}
                                    >
                                        <span className="material-symbols-outlined text-[var(--emerald)] text-[28px]">terminal</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                                        Desarrollo Web & Ecosistemas Digitales
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                                        Creamos plataformas escalables, rápidas y seguras con los stacks más avanzados. Diseñadas para convertir visitantes en activos de negocio desde la primera línea de código.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            'Ecosistemas React & Next.js',
                                            'Arquitecturas Cloud de Alto Rendimiento',
                                            'APIs RESTful',
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2.5">
                                                <span className="material-symbols-outlined text-[var(--emerald)] text-[18px]">check_circle</span>
                                                <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1 relative hidden lg:block overflow-hidden rounded-xl border border-[var(--surface-border)] min-h-[200px]">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqpreei2fkazeGr6Wuf6KOPP7HsmTrlOQd0rDWdwoHgIx71IJfTURk3A3atkWGLwjtuX1QFn2JAuz3CORQjTUk4l59mRqBw4gF4_-v59T1h1EWZjLvteQ3CK3g8EYWcE4mFNmScWbwx3vxG5zpc1qTzRKndfiEkxFAEzgIs1WHTQ7G1pog9O5HdZk6-aFIcwVxWuE2FjkhfU7eF5o9d6ffaNzBMgWzVgLnw0_KeHv5fSkvdrmcmcWa8PBVsANpKRl-DcKnO_1dlmsC"
                                        alt="Entorno de desarrollo"
                                        fill
                                        className="object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                                        sizes="50vw"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 2: SEO */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-4 h-full">
                            <ServiceCard
                                className="h-full"
                                icon="query_stats"
                                title="Inteligencia de Búsqueda (SEO)"
                                description="Dominio estratégico para un crecimiento orgánico sostenible. Optimizamos la arquitectura técnica y el contenido semántico para garantizar que tu empresa sea la respuesta a las necesidades de tus clientes."
                            >
                                <div className="mt-auto pt-4 border-t border-[var(--surface-border)]">
                                    <span className="section-overline text-[var(--emerald)]">Drive Traffic</span>
                                </div>
                            </ServiceCard>
                        </motion.div>

                        {/* Service 3: Chatbots IA */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="md:col-span-5 h-full">
                            <ServiceCard
                                className="h-full"
                                icon="smart_toy"
                                title="Agentes de IA & Chatbots Conversacionales"
                                description="Agentes de IA especializados para impulsar tu empresa. Atención al cliente 24/7 con respuestas contextuales y precisas que califican leads en tiempo real."
                            >
                                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                    <span className="badge badge-emerald">Groq</span>
                                    <span className="badge badge-emerald">LLMs</span>
                                    <span className="badge badge-emerald">WhatsApp API</span>
                                </div>
                            </ServiceCard>
                        </motion.div>

                        {/* Service 4: n8n Automation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="md:col-span-7 card p-8 group h-full flex flex-col"
                        >
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{ background: 'var(--primary-light)' }}
                            >
                                <span className="material-symbols-outlined text-[var(--primary)] text-[28px]">account_tree</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                                Orquestación de Procesos con n8n
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-7 leading-relaxed flex-grow">
                                Máxima eficiencia operativa mediante flujos de trabajo automatizados que conectan tus herramientas favoritas.
                                Eliminamos las tareas repetitivas y el error humano, permitiendo que tu equipo se enfoque en lo que realmente genera valor.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-auto">
                                {[
                                    { val: '90%', label: 'Tiempo Ahorrado' },
                                    { val: '0%', label: 'Error Humano' },
                                    { val: '24/7', label: 'Operaciones' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-[var(--surface-muted)] p-4 rounded-xl border border-[var(--surface-border)] text-center">
                                        <span className="font-display text-2xl font-bold text-[var(--primary)]">{stat.val}</span>
                                        <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold mt-1 tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Categories Section ── */}
            <section className="py-24 bg-bg-dark relative overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="section-overline text-[16px]">Descubre</span>
                        <h2 className="font-display text-4xl font-bold text-white mt-3">
                            Nuestras Categorías
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Categoría: Automatización */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <Link href="/servicios/automatizacion" className="card p-10 group hover:-translate-y-2 hover:border-[var(--emerald)] transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center h-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-light)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="w-20 h-20 flex items-center justify-center rounded-2xl mb-8 bg-white group-hover:bg-[var(--emerald-light)] group-hover:scale-110 transition-all duration-300 relative z-10 border border-[var(--surface-border)]">
                                    <span className="material-symbols-outlined text-[var(--emerald)] text-[40px]">smart_toy</span>
                                </div>
                                <h3 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4 relative z-10">Automatización e IA</h3>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 relative z-10 max-w-sm mx-auto flex-grow">
                                    Asistentes de ventas 24/7, integración n8n y flujos de trabajo inteligentes que escalan tus operaciones.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[var(--emerald)] font-bold uppercase tracking-wider text-sm mt-auto relative z-10 group-hover:gap-4 transition-all">
                                    Ver Planes y Servicios <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </span>
                            </Link>
                        </motion.div>

                        {/* Categoría: Desarrollo Web */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <Link href="/servicios/desarrollo-web" className="card p-10 group hover:-translate-y-2 hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center h-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-light)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="w-20 h-20 flex items-center justify-center rounded-2xl mb-8 bg-white group-hover:bg-[var(--primary-light)] group-hover:scale-110 transition-all duration-300 relative z-10 border border-[var(--surface-border)]">
                                    <span className="material-symbols-outlined text-[var(--primary)] text-[40px]">code_blocks</span>
                                </div>
                                <h3 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4 relative z-10">Desarrollo Web</h3>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 relative z-10 max-w-sm mx-auto flex-grow">
                                    Landing pages, E-commerce y ecosistemas digitales robustos optimizados para conversión y posicionamiento SEO.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[var(--primary)] font-bold uppercase tracking-wider text-sm mt-auto relative z-10 group-hover:gap-4 transition-all">
                                    Ver Planes y Servicios <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Technology Stack ── */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="section-overline mb-3">Stack tecnológico</p>
                    <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                        Herramientas que usamos
                    </h2>
                    <div className="divider-emerald mx-auto mt-3" />
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'n8n',
                        'OpenAI API', 'WhatsApp Business API', 'PostgreSQL', 'Redis',
                        'Docker', 'AWS', 'Vercel', 'Tailwind CSS', 'LangChain',
                    ].map((tech, idx) => (
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            key={tech} 
                            className="tech-chip cursor-default hover:border-[var(--emerald)] hover:text-[var(--emerald)] transition-colors duration-200"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto rounded-2xl p-12 text-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, var(--bg-dark) 0%, #0a2240 50%, #062356 100%)' }}
                >
                    <div className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }}
                    />
                    <div className="relative z-10">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                            ¿Listo para escalar tu infraestructura digital?
                        </h2>
                        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Contáctanos hoy para una evaluación técnica y una cotización personalizada adaptada a las necesidades de tu negocio.
                        </p>
                        <a
                            href="https://wa.me/584241234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-emerald text-base mx-auto"
                        >
                            <span className="material-symbols-outlined">computer</span>
                            Demo 15 días gratis
                        </a>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}