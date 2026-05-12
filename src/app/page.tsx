'use client';
import React from "react";
import { motion } from "framer-motion";
import BentoCard from "@/src/components/BentoCard";
import WhatsAppSimulator from "@/src/components/WhatsAppSimulator";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/src/constants/number";

const coreServices = [
  {
    icon: "precision_manufacturing",
    title: "Automatización Industrial",
    description:
      "Integramos hardware y software para optimizar procesos de manufactura. Reducción de hasta 40% en costos operativos mediante controladores de lógica inteligente.",
    tags: ["PLC LOGIC", "SCADA", "ROBOTICS"],
    span: "md:col-span-8",
  },
  {
    icon: "cloud_done",
    title: "Cloud Scaling",
    description:
      "Patrones arquitecturales robustos para entornos de alto tráfico con disponibilidad garantizada.",
    tags: [],
    span: "md:col-span-4",
  },
  {
    icon: "security",
    title: "Seguridad de Red",
    description:
      "Diseño de infraestructura zero-trust para protección crítica de datos y activos digitales.",
    tags: [],
    span: "md:col-span-4",
  },
  {
    icon: "insights",
    title: "AI Analytics",
    description:
      "Convertimos datos industriales en inteligencia accionable usando redes neuronales entrenadas a medida.",
    tags: [],
    span: "md:col-span-8",
    dark: true,
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--bg-base)]">
      <main>

        {/* Hero */}
        <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">

          {/* Animated background gradient */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(135deg, #f5f4f7 0%, #eef0f8 40%, #f0f9f5 100%)',
            }}
          />

          {/* Decorative blobs */}
          <div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full -z-10 opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(0,199,143,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10 opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(0,67,143,0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(var(--surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--surface-border) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="max-w-7xl mx-auto px-6 w-full py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* LEFT: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-6 xl:col-span-7 space-y-7"
            >

              {/* Badge */}
              <div className="badge badge-emerald animate-float">
                <span className="w-1.5 h-1.5 bg-[var(--emerald)] rounded-full" />
                Kinetix Sistemas · Innovación en IA
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-[60px] xl:text-[68px] leading-[1.04] tracking-tight text-[var(--text-primary)]">
                Transformamos tu{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, #0066cc 50%, var(--emerald) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  negocio
                </span>
                {' '}con IA &amp; software a medida.
              </h1>

              {/* Subheadline */}
              <p className="text-[17px] text-[var(--text-secondary)] max-w-xl leading-relaxed">
                Especializados en automatización inteligente, desarrollo de software personalizado e implementación de soluciones de inteligencia artificial para empresas que quieren liderar.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: '50+', label: 'Proyectos' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '3x', label: 'Más rápido' },
                ].map(({ value, label }, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    key={label} 
                    className="text-center p-3 rounded-xl bg-white/70 border border-[var(--surface-border)] shadow-sm"
                  >
                    <div className="text-2xl font-bold text-[var(--primary)]">{value}</div>
                    <div className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mt-0.5">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/584241234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald"
                >
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  Empieza Ahora
                </a>
                <Link href="/portfolio" className="btn-ghost">
                  Ver Portafolio
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-3 pt-1">

                <p className="text-sm text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)]">+50 empresas</strong> confían en nosotros
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Visual Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-6 xl:col-span-5 flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-[440px]">

                {/* Main image card */}
                <div className="nardo-raised overflow-hidden rounded-2xl aspect-square">
                  <img
                    alt="Infraestructura tecnológica de alto rendimiento"
                    className="w-full h-full object-cover hover:grayscale-0 grayscale transition-all duration-700 scale-105 hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMiyFQyQCYnawDtWsSXKPMr-FY8ophnc4wjyCM7UMpEnWNURit3yTrL7V1Hn-VpJI077hw72i-8FvTwBOj7KiAjKP2J8L65INI2EGaGUzr-4zVXzIiZKxZDxiIjTnKXOIC95xZ39UhC2KxWL0Nsi4dbmjHolwkNJYU_Jz2Eyq7b3E6CuhB21GjoSMjVTnIUXdjsB3DsnBkwXI6xKsylvdE5k3OsckUMf8dHcgXcvGuETdrSuibMA8HW_6aQj-IbDd1EaAoA-3jcCB2"
                  />
                </div>

                {/* Floating badge: AI status */}
                <div className="absolute -top-4 -right-4 card px-4 py-3 flex items-center gap-2.5 shadow-lg animate-float">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--emerald-light)' }}>
                    <span className="material-symbols-outlined text-[var(--emerald)] text-[16px]">smart_toy</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[var(--text-primary)]">IA Activa</div>
                    <div className="text-[10px] text-[var(--text-muted)]">Procesando...</div>
                  </div>
                  <span className="w-2 h-2 bg-[var(--emerald)] rounded-full animate-pulse ml-1" />
                </div>

                {/* Floating badge: Projects */}
                <div className="absolute -bottom-4 -left-4 card px-4 py-3 flex items-center gap-2.5 shadow-lg">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--primary-light)' }}>
                    <span className="material-symbols-outlined text-[var(--primary)] text-[16px]">trending_up</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[var(--text-primary)]">+40% eficiencia</div>
                    <div className="text-[10px] text-[var(--text-muted)]">promedio en clientes</div>
                  </div>
                </div>

                {/* Background glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,199,143,0.2) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Services Bento Grid ── */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="section-overline mb-3 text-[14px]">Lo que hacemos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Servicios de Integración con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--emerald) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                IA
              </span>
            </h2>
            <div className="divider-emerald mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-7">
              <BentoCard className="flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-[var(--emerald)] mb-5 block">
                    precision_manufacturing
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
                    Automatización de Canales de Venta
                  </h3>
                  <p className="text-[var(--text-secondary)] max-w-lg leading-relaxed">
                    Creación de asistentes de IA capaces de gestionar de forma autónoma y transformar tu canal de WhatsApp en una máquina de ventas que atiende,
                    filtra y califica prospectos en tiempo real, sin interrupciones.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Gestión de Leads", "Atención 24/7", "SaaS (Software as a Service)"].map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Cloud Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-5">
              <BentoCard className="h-full">
                <span className="material-symbols-outlined text-4xl text-[var(--emerald)] mb-5 block">
                  timer
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                  Eficiencia Operativa y Tiempo
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Kinetix no solo vende "tecnología", vende tiempo recuperado eliminando la carga de tareas repetitivas
                  para que los dueños de negocio puedan enfocarse en el crecimiento, mientras la IA se encarga de la atención de sus clientes.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Reducción de Carga", "Tareas Repetitivas", "Optimización de Tiempo"].map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Security Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="md:col-span-4">
              <BentoCard className="h-full">
                <span className="material-symbols-outlined text-4xl text-[var(--emerald)] mb-5 block">
                  security
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
                  Despliegue de Instancias Seguras
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Configuramos conexiones robustas mediante Evolution API o Cloud API de Meta, garantizando una comunicación fluida y protegida.
                </p>
              </BentoCard>
            </motion.div>

            {/* AI Card – Dark variant */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-8">
              <BentoCard variant="primary" className="relative overflow-hidden group h-full">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-[var(--emerald)] mb-5 block">
                    insights
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Ecosistemas de Automatización con n8n
                  </h3>
                  <p className="text-white/70 max-w-md leading-relaxed">
                    Orquestamos flujos de trabajo complejos conectando múltiples servicios y aplicaciones
                    para crear sistemas autónomos que operan las 24 horas del día, los 7 días de la semana.
                  </p>
                </div>
                {/* Decorative icon */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700">
                  <span className="material-symbols-outlined text-[140px] text-white">data_exploration</span>
                </div>
              </BentoCard>
            </motion.div>
          </div>

          {/* CTA under grid */}
          <div className="mt-10 text-center">
            <Link href="/servicios" className="btn-ghost">
              Ver todos los servicios
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* ── WhatsApp AI Demo ── */}
        <WhatsAppSimulator />

        {/* ── Process Section ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="section-overline mb-3">Nuestro proceso</p>
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
              Cómo trabajamos
            </h2>
            <div className="divider-emerald mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "search", title: "Diagnóstico", desc: "Analizamos tu flujo de trabajo actual e identificamos oportunidades de optimización." },
              { step: "02", icon: "design_services", title: "Diseño", desc: "Arquitectura de solución personalizada con tecnologías de vanguardia." },
              { step: "03", icon: "code", title: "Desarrollo", desc: "Implementación ágil con entregas iterativas y feedback continuo." },
              { step: "04", icon: "rocket_launch", title: "Lanzamiento", desc: "Despliegue, monitoreo y soporte post-lanzamiento garantizado." },
            ].map(({ step, icon, title, desc }, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={step} 
                className="card p-7 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[var(--emerald)] bg-[var(--emerald-light)] px-2.5 py-1 rounded-full">
                    {step}
                  </span>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-5 transition-colors duration-300"
                  style={{ background: "var(--primary-light)" }}>
                  <span className="material-symbols-outlined text-[var(--primary)]">{icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--bg-dark) 0%, #0a2240 50%, #062356 100%)",
            }}
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--emerald), transparent)" }}
            />
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 -z-0"
              style={{
                background: "radial-gradient(ellipse, rgba(0,199,143,0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative z-10">
              <p className="section-overline mb-4 text-xl">¿Listo para comenzar?</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
                Escala tu infraestructura digital hoy
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Nuestros arquitectos analizarán tu flujo de trabajo y propondrán una transformación digital impulsada por IA.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald text-base"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Iniciar Consultoría
                </a>
                <Link href="/servicios" className="btn-ghost-white text-base">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-fab"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
        }}
      >
        <span className="material-symbols-outlined">chat</span>
      </a>
    </div>
  );
}