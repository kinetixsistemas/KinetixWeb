import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants/number';

export interface Expert {
    name: string;
    role: string;
    image: string;
}

export interface ValueCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
}

function ValueCard({ title, description, icon, className }: ValueCardProps) {
    return (
        <div className={`card p-8 flex flex-col group ${className}`}>
            <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-colors duration-300 group-hover:bg-[var(--emerald)] group-hover:shadow-[0_8px_24px_rgba(0,199,143,0.3)]"
                style={{ background: 'var(--primary-light)' }}
            >
                <span className="material-symbols-outlined text-[var(--primary)] group-hover:text-white transition-colors text-[28px]">
                    {icon}
                </span>
            </div>
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
        </div>
    );
}



const values = [
    { icon: 'bolt', title: 'Eficiencia', description: 'Optimizamos cada proceso para reducir la latencia humana y técnica al mínimo absoluto.' },
    { icon: 'auto_awesome_motion', title: 'Escalabilidad', description: 'Sistemas diseñados para crecer exponencialmente sin comprometer la integridad estructural.' },
    { icon: 'verified', title: 'Confiabilidad', description: 'Arquitecturas resilientes con redundancia y monitoreo 24/7 garantizando disponibilidad total.' },
    { icon: 'neurology', title: 'Innovación', description: 'Adoptamos tecnologías emergentes antes que nadie, manteniendo a nuestros clientes en la vanguardia.' },
];

export default function AboutPage() {
    return (
        <main className="bg-[var(--bg-base)]">

            {/* ── Hero Section ── */}
            <section
                className="relative min-h-[75vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #0a2240 55%, #062356 100%)' }}
            >
                {/* Glow blobs */}
                <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-30 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,199,143,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }}
                />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                {/* Top line */}
                <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }}
                />

                <div className="relative z-10 px-6 max-w-7xl mx-auto w-full py-24">
                    <div className="max-w-3xl">
                        <p className="section-overline mb-4">Sobre Nosotros</p>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-7 leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                            Arquitectos del{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, var(--emerald) 0%, #00e5a8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Futuro Digital
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
                            En Kinetix Sistemas, no solo desarrollamos software; diseñamos los flujos de trabajo que impulsarán la próxima generación de empresas globales mediante inteligencia artificial y escalabilidad absoluta.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-emerald">
                                <span className="material-symbols-outlined text-[18px]">flag</span>
                                Contactanos
                            </a>
                            <Link href="/portfolio" className="btn-ghost-white">
                                Ver Portafolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Row ── */}
            <section className="py-12 bg-white border-b border-[var(--surface-border)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '50+', label: 'Proyectos Entregados' },
                            { value: '5+', label: 'Años de Experiencia' },
                            { value: '99.9%', label: 'Uptime Garantizado' },
                            { value: '24/7', label: 'Soporte Activo' },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center py-4">
                                <div
                                    className="font-display text-4xl font-bold mb-1"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--primary), var(--emerald))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {value}
                                </div>
                                <div className="text-[12px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Story + Values Bento Grid ── */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="section-overline mb-3">Quiénes somos</p>
                    <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">Nuestra historia & valores</h2>
                    <div className="divider-emerald mx-auto mt-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Story Card */}
                    <div className="md:col-span-8 card p-10 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{ background: 'var(--emerald-light)' }}>
                                    <span className="material-symbols-outlined text-[var(--emerald)] text-[20px]">auto_stories</span>
                                </div>
                                <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                                    Nuestra Historia de <span className="text-[var(--primary)]">Innovación</span>
                                </h2>
                            </div>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                                Nacimos de la necesidad de cerrar la brecha entre los sistemas heredados y el potencial infinito de la automatización inteligente. Kinetix Sistemas surge como una respuesta técnica a desafíos complejos, transformando la fricción operativa en fluidez digital.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                A través de años de refinamiento en arquitecturas distribuidas, hemos construido un ecosistema donde la precisión y el rendimiento son los pilares de cada línea de código que escribimos.
                            </p>
                        </div>
                        <div
                            className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full transition-transform duration-700 group-hover:scale-110"
                            style={{ background: 'radial-gradient(circle, rgba(0,199,143,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
                        />
                    </div>

                    {/* Efficiency */}
                    <ValueCard icon="bolt" title="Eficiencia" description="Optimizamos cada proceso para reducir la latencia humana y técnica al mínimo absoluto." className="md:col-span-4" />

                    {/* Scalability */}
                    <ValueCard icon="auto_awesome_motion" title="Escalabilidad" description="Sistemas diseñados para crecer exponencialmente sin comprometer la integridad estructural." className="md:col-span-4" />

                    {/* Cutting-edge Tech */}
                    <div className="md:col-span-8 card p-8 flex flex-col md:flex-row items-center gap-8 group">
                        <div className="hidden lg:flex w-32 h-32 items-center justify-center rounded-2xl flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--primary)]"
                            style={{ background: 'var(--primary-light)' }}>
                            <span className="material-symbols-outlined text-[var(--primary)] text-5xl group-hover:text-white transition-colors">
                                terminal
                            </span>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">Tecnología de Vanguardia</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Lideramos la implementación de Modelos de Lenguaje Avanzados y computación en el borde para garantizar que nuestros clientes operen siempre en la frontera de lo posible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ── */}
            <section className="py-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-overline">Aclaratorias Comunes</span>
                    <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mt-4 mb-6">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            question: "¿Cuál es el enfoque principal de Sistemas Kinetix?",
                            answer: "Nos especializamos en desarrollar ecosistemas digitales escalables y soluciones de automatización con Inteligencia Artificial. Nuestro objetivo es transformar procesos manuales en flujos de trabajo eficientes que permitan a las empresas crecer sin límites técnicos."
                        },
                        {
                            question: "¿Qué tecnologías utilizan en sus desarrollos?",
                            answer: "Trabajamos con un stack de vanguardia que incluye Next.js, React y Tailwind CSS para el frontend, y Supabase o Firebase para bases de datos robustas. Para la automatización, utilizamos n8n junto con APIs de OpenAI y Groq para potenciar agentes de IA."
                        },
                        {
                            question: "¿Trabajan solo con empresas en Venezuela?",
                            answer: "Aunque tenemos un fuerte enfoque en el mercado de Barquisimeto y Venezuela, nuestros servicios de desarrollo y automatización en la nube nos permiten atender a clientes a nivel internacional, ofreciendo soluciones digitales globales."
                        },
                        {
                            question: "¿Cómo es el proceso de consultoría inicial?",
                            answer: "Comenzamos con un Diagnóstico Técnico profundo para entender las necesidades y cuellos de botella de tu negocio. Luego, diseñamos una propuesta arquitectónica detallada con los flujos de trabajo recomendados antes de escribir la primera línea de código."
                        }
                    ].map((faq, idx) => (
                        <details key={idx} className="group card overflow-hidden cursor-pointer">
                            <summary className="flex justify-between items-center font-bold list-none p-6 text-[var(--text-primary)] group-open:bg-[var(--surface-muted)] transition-colors">
                                <span className="text-lg pr-8">{faq.question}</span>
                                <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                                    <ChevronDown className="text-[var(--primary)] w-6 h-6" />
                                </span>
                            </summary>
                            <div className="text-[var(--text-secondary)] p-6 pt-0 leading-relaxed border-t border-[var(--surface-border)] whitespace-pre-line">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="py-24 px-6">
                <div
                    className="max-w-7xl mx-auto rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #002d6a 100%)' }}
                >
                    <div className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,199,143,0.5), transparent)' }}
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48"
                        style={{ background: 'radial-gradient(ellipse, rgba(0,199,143,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }}
                    />
                    <div className="relative z-10">
                        <p className="section-overline mb-4 text-[var(--emerald)]">¿Listo para escalar?</p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
                            ¿Listo para escalar su infraestructura?
                        </h2>
                        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Nuestros arquitectos están listos para analizar su flujo de trabajo actual y proponer una transformación digital radical impulsada por IA.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://wa.me/584241234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-emerald text-base"
                            >
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Iniciar Consultoría
                            </a>
                            <Link href="/servicios" className="btn-ghost-white text-base">
                                Ver Servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}