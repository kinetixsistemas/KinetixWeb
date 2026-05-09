import Image from 'next/image';
import Link from 'next/link';

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

const experts: Expert[] = [
    {
        name: "Adrian Velez",
        role: "CTO & Founder",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAtZ5HZYtBEeNwMlsycLPvmEtE40pI0l0z0fNxz975bdF2urD85l93n5-uyJZSIJdGe9VSpIfQ89gHAXwIyJyhn2WNZKJ0PPZeHnIEPKgZx4iiDuYw_Sp090GUEO9Ff1JxuB-z8b2fJJ2AB-9ttT1ChKkjO2nszN1RneMKCAAD6gqKwFQdxPjknJefzQEqUMqd-CeicHOG61G4g0tM86EdKOoZQdEcB-gRgLbFckGyVkXdtzSz65OBM148HOGrOISygHlQGHOtAxN"
    },
    {
        name: "Elena Costa",
        role: "AI Research Lead",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrQJjEGCyvDSsHU4r4nMtK3t1P0YVerOIqZ21MWt1Cr32HLeUJcCQp7Yet5kgU8k8dEVM_smFWIuECMamNy1asl4XfA0lkhYjVwIRjWrr_drCb3IsDvKgN0KEKfe9-B_7zb2MphHVW71t7LwVUFTE7fL74vJPXV-zPeIRd6WKydYJ6y3uuB5qouAWUhodA9XHDFiNK_WMGvN4YP5oxdNQPk6xv35JPW-wEldVDXLbHOR6kcLqMArC8GMO_GNIQQqBeYa0GFsF9xZkd"
    },
    {
        name: "Julian Thorne",
        role: "Senior Architect",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa_lymFdOWO9zmpnU5xURLwMlJpipAIvbJLNWDtfp0A5dQNXFlp8TtJHhhXEygcvgm4juWQ4Kk8u9C2SsE4bxs7_DMFs0UW0Msmn8x1WyAPYFOo7FjGht4DN5glpYAZvWtfXnnFi0I6rlyfEUYdS0CS5m71ZG3H6e9Ls1RNS2eukRxt10Q-28Zl4k659EBN6WGMubIrpjDzto-1WeafzM7RAMpLuTOzdwyE8wyI2j147O3Eqw03H0epYwUBbJOZgQ4IGzsKvcDXWJ_"
    },
    {
        name: "Sara Mendes",
        role: "Systems Strategist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_a8D9_sbKB2dUXYbm3xjR7pGrcApYj6hI-ztLExCR6jNC3-yWgKYu8lyl4QhfyvG1kgB9wrUIRIGh6t_CDHN3ZFiaDMrvGfSCYBhkTqjTJH5RtmrDxiL_BHfgCrreXe6lGaDvDXC_PDu0s7psqDsUPqbWQMss-RJDSY4_iq-YUft0YiuwNjtyDbgzFu8wKZxuT0NVowt-d3laBsTpwJXL5HLme2Zvua1qhrUh2jMJrSOWH6DIwlKBfCZDFI7c-5E_aFqRnU-TtlMo"
    }
];

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
                            <a href="https://wa.me/584241234567" target="_blank" rel="noopener noreferrer" className="btn-emerald">
                                <span className="material-symbols-outlined text-[18px]">flag</span>
                                Nuestra Misión
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

            {/* ── Team Section ── */}
            <section className="py-24 bg-white">
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="section-overline mb-3">El motor de Kinetix</p>
                        <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">Nuestros Expertos</h2>
                        <div className="divider-emerald mx-auto mt-3" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {experts.map((expert, idx) => (
                            <div
                                key={idx}
                                className="card p-7 text-center group hover:-translate-y-3 cursor-pointer"
                            >
                                <div
                                    className="w-24 h-24 rounded-2xl mx-auto mb-5 relative overflow-hidden border-2 border-[var(--surface-border)] group-hover:border-[var(--emerald)] transition-colors duration-300"
                                >
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </div>
                                <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-1">
                                    {expert.name}
                                </h4>
                                <span className="text-[10px] text-[var(--emerald)] font-bold uppercase tracking-widest block mb-5">
                                    {expert.role}
                                </span>
                                <div className="flex justify-center gap-2">
                                    <button
                                        aria-label={`Conectar con ${expert.name}`}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--emerald)] transition-colors group/btn"
                                    >
                                        <span className="material-symbols-outlined text-[16px] text-[var(--text-muted)] group-hover/btn:text-white transition-colors">
                                            alternate_email
                                        </span>
                                    </button>
                                    <button
                                        aria-label={`Perfil de ${expert.name}`}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--primary)] transition-colors group/btn"
                                    >
                                        <span className="material-symbols-outlined text-[16px] text-[var(--text-muted)] group-hover/btn:text-white transition-colors">
                                            person
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
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