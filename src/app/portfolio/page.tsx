import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/src/components/ProjectCard';
import { bannerportafolio } from '@/src/assets/index';
import { projects } from '@/src/constants/projects';




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
                <div className="absolute topimport Link from 'next/link';
-0 left-0 right-0 h-px pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)' }}
                />

                {/* Background texture */}
                <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
                    <Image
                        src={bannerportafolio}
                        alt="bannerportafolio"
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