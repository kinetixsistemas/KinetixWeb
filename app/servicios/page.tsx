import Image from 'next/image';
import Link from 'next/link';

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
                        alt=""
                        src="https://lh3.googleusercontent.com/aida/ADBb0ui41qXqRE_HEjhNfIjoNmcPU9zVk8tZyUGshQYjqbpXivJVNv3mjl1jR3aJznAs97VaXxhUVSHBm0y_zK9zgsdZSewPG6-f3Aio4WihTtVg1jBOycEROtJxJ6LQg6FAuzVA-jt7gGkZZd2ABMS60Kcat1l-FMzYTwSN6sLjDTTEq9Bk-6maMk1U31fvsUnJRM-7ZMqwumx9MQ_LsyMLPT0TKWIDTb6gvPVrgQIC7fvvtmDeTd-pstYsb2HXtOt4gCq1O8HYFns399c"
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
                    <div className="max-w-2xl">
                        <p className="section-overline mb-4">Nuestros servicios</p>
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Expertise en{' '}
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
                            Soluciones digitales de precisión diseñadas para la empresa moderna. Escalamos tu negocio con tecnología de vanguardia.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/584241234567"
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
                    </div>
                </div>
            </section>

            {/* ── Core Services Bento Grid ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="section-overline mb-3">Lo que ofrecemos</p>
                        <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-3">
                            Servicios Principales
                        </h2>
                        <div className="divider-emerald mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        {/* Service 1: Web & Apps – Wide */}
                        <div className="md:col-span-8 card p-8 group">
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                <div className="flex-1">
                                    <div
                                        className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: 'var(--emerald-light)' }}
                                    >
                                        <span className="material-symbols-outlined text-[var(--emerald)] text-[28px]">terminal</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                                        Desarrollo Web & Apps
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                                        Soluciones a medida construidas con los stacks más avanzados. Enfocados en escalabilidad, rendimiento y seguridad desde la primera línea de código.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            'Ecosistemas React & Next.js',
                                            'Arquitecturas Cloud de Alto Rendimiento',
                                            'APIs RESTful & GraphQL',
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
                        </div>

                        {/* Service 2: SEO */}
                        <ServiceCard
                            className="md:col-span-4"
                            icon="query_stats"
                            title="SEO Avanzado"
                            description="Posicionamiento estratégico para crecimiento sostenible. Optimizamos cada capa técnica y de contenido para maximizar tu visibilidad."
                        >
                            <div className="mt-auto pt-4 border-t border-[var(--surface-border)]">
                                <span className="section-overline text-[var(--emerald)]">Drive Traffic</span>
                            </div>
                        </ServiceCard>

                        {/* Service 3: Chatbots IA */}
                        <ServiceCard
                            className="md:col-span-5"
                            icon="smart_toy"
                            title="Chatbots con IA"
                            description="Asistentes virtuales especializados para WhatsApp y Web que aprovechan LLMs para atención al cliente 24/7 con respuestas contextuales."
                        >
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-emerald">GPT-4 Integration</span>
                                <span className="badge badge-emerald">WhatsApp API</span>
                            </div>
                        </ServiceCard>

                        {/* Service 4: n8n Automation */}
                        <div className="md:col-span-7 card p-8 group">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{ background: 'var(--primary-light)' }}
                            >
                                <span className="material-symbols-outlined text-[var(--primary)] text-[28px]">account_tree</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                                Automatización con n8n
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-7 leading-relaxed">
                                Máxima eficiencia en tareas repetitivas a través de orquestaciones de flujos de trabajo complejos sin límites.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
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
                        </div>
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
                    ].map((tech) => (
                        <span key={tech} className="tech-chip cursor-default hover:border-[var(--emerald)] hover:text-[var(--emerald)] transition-colors duration-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 px-6">
                <div
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
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Solicitar Cotización Ahora
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}