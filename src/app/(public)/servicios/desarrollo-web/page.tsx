"use client"
import { motion } from 'framer-motion';
import { Check, ChevronDown, Cpu, Zap } from 'lucide-react';
import { plans, faqs, maintenancePlans, pillars } from '@/constants/plansWeb';
import { WHATSAPP_LINK } from '@/constants/number';

// export const metadata: Metadata = {
//     title: "Desarrollo Web & Ecosistemas Digitales | Sistemas Kinetix",
//     description: "Planes de desarrollo web diseñados bajo Pago por Valor Técnico. Entregamos una infraestructura optimizada para convertir visitantes en clientes.",
//     keywords: "Desarrollo web Barquisimeto, E-commerce Venezuela, Landing Page, Supabase, Diseño web profesional, n8n"
// };

export default function DesarrolloWebPage() {

    return (
        <main className="min-h-screen bg-bg-base">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 gradient-hero text-text-inverted relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-30 mix-blend-screen pointer-events-none animate-pulse-ring"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto relative z-10 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(0,199,143,0.8)]"></span>
                        <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">Pago por Valor Técnico</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Desarrollo Web & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald to-blue-400">
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
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost-white w-full sm:w-auto text-lg px-8 py-4 justify-center">
                            Consulta Gratuita
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 px-6 bg-bg-base relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <span className="section-overline">Nuestra Metodología</span>
                        <h2 className="text-4xl md:text-5xl font-display text-text-primary mt-4 mb-6">
                            Pilares Estratégicos del Desarrollo
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            En Sistemas Kinetix, el desarrollo web no se trata solo de crear sitios visualmente atractivos, sino de construir infraestructuras digitales de alto rendimiento diseñadas para escalar negocios y automatizar procesos desde la primera línea de código.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                key={idx}
                                className="card p-8 group hover:border-emerald/30"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-light group-hover:text-emerald transition-all duration-300">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-text-primary">{pillar.title}</h3>
                                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="planes" className="py-24 bg-bg-dark relative overflow-hidden">
                <div className="noise-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="section-overline text-primary">Precios de Inversión</span>
                        <h2 className="text-4xl md:text-5xl font-display text-text-inverted mt-4 mb-6">Planes de Desarrollo</h2>
                        <p className="text-text-muted max-w-2xl mx-auto text-lg">
                            Soluciones estructuradas que escalan con la visión de tu empresa.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {plans.map((plan, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                key={i}
                                className={`relative flex flex-col p-8 rounded-[24px] transition-all duration-300 hover:scale-105 hover:z-10 ${plan.recommended ? 'bg-bg-dark-card border-2 border-primary transform md:-translate-y-4 shadow-primary' : 'bg-bg-dark border border-surface-border-dark hover:border-surface-border'}`}
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upgrade de Inteligencia AI Box */}
            <section className="py-12 bg-bg-base relative">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel relative overflow-hidden p-1 bg-gradient-to-r from-emerald via-primary to-emerald rounded-3xl p-[2px]"
                    >
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
                    </motion.div>
                </div>
            </section>

            {/* Soporte y Modificaciones */}
            <section className="py-24 px-6 bg-surface-muted relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="section-overline">Soporte Continuo</span>
                        <h2 className="text-4xl font-display text-text-primary mt-4 mb-6">
                            Plan de Modificaciones y Soporte Personalizado
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Para clientes que ya tienen una web pero necesitan mejorarla o corregir errores.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenancePlans.map((plan, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                key={idx}
                                className="card p-8 group hover:border-emerald/30 hover:scale-105 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-light group-hover:text-emerald transition-all duration-300">
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-text-primary">{plan.title}</h3>
                                <div className="text-2xl font-display text-primary mb-2">{plan.price}</div>
                                <p className="text-text-secondary leading-relaxed">{plan.desc}</p>
                            </motion.div>
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
                            <motion.details
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                key={idx}
                                className="group card overflow-hidden cursor-pointer"
                            >
                                <summary className="flex justify-between items-center font-bold list-none p-6 text-text-primary group-open:bg-surface-muted transition-colors">
                                    <span className="text-lg pr-8">{faq.question}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                                        <ChevronDown className="text-primary w-6 h-6" />
                                    </span>
                                </summary>
                                <div className="text-text-secondary p-6 pt-0 leading-relaxed border-t border-surface-border whitespace-pre-line">
                                    {faq.answer}
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
