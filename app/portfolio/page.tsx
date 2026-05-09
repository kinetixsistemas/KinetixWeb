import Image from 'next/image';
import Link from 'next/link';

export interface Project {
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
    span: string;
    tags?: string[];
}

const projects: Project[] = [
    {
        title: "Plataforma de E-commerce Pro",
        description: "Implementación de un ecosistema de ventas escalable con integración de pasarelas de pago globales y gestión de inventario en tiempo real.",
        category: "E-commerce",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDReePHOetEzvvMlX4XU6YftbHO6p5G3WDOW1DM_HdgBot6LhlhmZlr0VIjB18G1rLodcwh-uav8WiKFNYTXPuT660XrxLRTvAM9ubUYpM4JcieNcVjORNu9BsSX5fpYPTxTNDn4ooVorFVNbXMivf8JIksFHQgTP0RBxWE9o3t4MGyAJM7levFwQcRziWTI9dphVCMvGGUtsWTXpXW7WciExLqRn--64rsuHec7nWpj-O73-7KQdktP5_rPNjnY6AS4cgtDndb9IWk",
        link: "/portfolio/ecommerce",
        span: "md:col-span-8",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
        title: "Automatización de Flujos",
        description: "Orquestación de procesos complejos para logística internacional utilizando n8n y modelos de IA para predicción de rutas.",
        category: "Logistics (n8n)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnxArVbKkgNcPfg0TqtOuq2jHkGymZzdmOO5kpO0bdO98CbSNYimvSh8cVsnZNc9z-vjR7OHLH2IHeF6m-Vy9kKS4gGOmcfXnSKSCTbtTh42ay5ijEuHThvtNWmrZNDxJI-7rn_r0Agge3fgxhWrOKMbEIruNXIkH7HUdKPTvPXY6FA1z0-BbBFz8x6eco0EvmJMEvTUyHm4tdEhlzjbjoqU7F6uU2HbZPGXNzIh5JbXDp5praPGqPATjwjPWjSAt0JbCQsBfPxZiV",
        link: "/portfolio/automation",
        span: "md:col-span-5",
        tags: ["n8n", "Python", "OpenAI"],
    },
    {
        title: "Interfaz para Servicios",
        description: "Aplicación móvil nativa diseñada para la gestión ágil de servicios en campo, con sincronización offline y geolocalización avanzada.",
        category: "Service Provider App",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3isX11qOMmk8WvFg00Bz5pKfW1y-EYaRZUFm72wae_iD1NtpbrD4wvBeioWiWEkUUfd6eMt-qlQLZ3eiYlPBmrwgy5qDWxOIf20m9_krt-G6NeEcIwrHyDnhEXuQrjnRpN6Qg5ruWNLT7g7GvPY8j7GJPRs8uSUWDt_G_1wKRPjaGZS2cnxhOlgGqKk41lmqMSCfJcgpQx1tqB3sDhQRqjQqeIwsM6nCiyqE3KrZwTkbZPe_mTewWoCKUoEyxBr8FZPWz0Xy4R_4",
        link: "/portfolio/mobile-app",
        span: "md:col-span-7",
        tags: ["React Native", "Node.js", "MongoDB"],
    }
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={project.link}
            className="group card overflow-hidden flex flex-col h-full block hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
        >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <span
                        className="text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{ background: 'linear-gradient(135deg, var(--primary), #0066cc)' }}
                    >
                        {project.category}
                    </span>
                </div>
                {/* Arrow appears on hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-white text-[20px]">arrow_forward</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex-grow flex flex-col">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                    {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                </p>
                {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tech-chip">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}

export default function PortfolioPage() {
    return (
        <main className="bg-[var(--bg-base)]">

            {/* ── Hero ── */}
            <section
                className="relative min-h-[65vh] flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #0a2240 55%, #062356 100%)' }}
            >
                {/* Blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,199,143,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }}
                />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,67,143,0.4) 0%, transparent 70%)', filter: 'blur(50px)' }}
                />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }}
                />

                {/* Background texture */}
                <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
                    <Image
                        src="https://lh3.googleusercontent.com/aida/ADBb0ui41qXqRE_HEjhNfIjoNmcPU9zVk8tZyUGshQYjqbpXivJVNv3mjl1jR3aJznAs97VaXxhUVSHBm0y_zK9zgsdZSewPG6-f3Aio4WihTtVg1jBOycEROtJxJ6LQg6FAuzVA-jt7gGkZZd2ABMS60Kcat1l-FMzYTwSN6sLjDTTEq9Bk-6maMk1U31fvsUnJRM-7ZMqwumx9MQ_LsyMLPT0TKWIDTb6gvPVrgQIC7fvvtmDeTd-pstYsb2HXtOt4gCq1O8HYFns399c"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center py-24">
                    <div className="badge badge-emerald mx-auto mb-6">
                        <span className="w-1.5 h-1.5 bg-[var(--emerald)] rounded-full" />
                        Soluciones Enterprise
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                        Nuestras Soluciones{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, var(--emerald) 0%, #00e5a8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            en Acción
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Transformamos la complejidad técnica en eficiencia operativa. Explore cómo Kinetix Sistemas impulsa el futuro a través de la automatización y el diseño de alta fidelidad.
                    </p>
                </div>
            </section>

            {/* ── Portfolio Grid ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">

                        {/* Featured project */}
                        <div className="md:col-span-8 group">
                            <ProjectCard project={projects[0]} />
                        </div>

                        {/* Stats Card */}
                        <div className="md:col-span-4">
                            <div
                                className="h-full rounded-[var(--radius-lg)] p-8 flex flex-col justify-center border border-white/10"
                                style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #002d6a 100%)' }}
                            >
                                <div className="mb-8">
                                    <span className="material-symbols-outlined text-[var(--emerald)] text-4xl mb-3 block">insights</span>
                                    <div className="font-display text-4xl font-bold text-white mb-1">99.9%</div>
                                    <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Uptime Garantizado</div>
                                </div>
                                <div className="border-t border-white/10 pt-8">
                                    <span className="material-symbols-outlined text-[var(--emerald)] text-4xl mb-3 block">rocket_launch</span>
                                    <div className="font-display text-4xl font-bold text-white mb-1">45%</div>
                                    <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Reducción en Latencia</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Remaining projects */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {projects.slice(1).map((project, index) => (
                            <div key={index} className={`${project.span} group`}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-[var(--bg-base)] relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <p className="section-overline mb-4">¿Listo para comenzar?</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
                        ¿Listo para escalar su infraestructura?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/584241234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-base"
                        >
                            <span className="material-symbols-outlined text-[18px]">chat</span>
                            Empezar Ahora
                        </a>
                        <Link href="/servicios" className="btn-ghost text-base">
                            Ver Servicios
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,199,143,0.3), transparent)' }}
                />
            </section>

        </main>
    );
}