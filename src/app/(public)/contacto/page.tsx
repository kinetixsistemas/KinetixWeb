"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactoPage() {
  // 1. Estado estructurado para capturar los inputs del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Manejador de cambios dinámico para los campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Envío de datos híbrido (API + Redirección a WhatsApp)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // A. Envío asíncrono a tu API interna de Next.js (para registrar en DB / enviar correos)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);

        // B. Redirección inteligente a tu WhatsApp tras 2 segundos de feedback visual
        setTimeout(() => {
          const mensajeWhatsApp =
            `¡Hola, equipo de Sistemas Kinetix! 🚀\n\n` +
            `Acabo de enviar el formulario de contacto en la web con los siguientes detalles:\n\n` +
            `• *Nombre:* ${formData.nombre}\n` +
            `• *Empresa:* ${formData.empresa || "Particular"}\n` +
            `• *Servicio:* ${formData.servicio}\n\n` +
            `Me gustaría coordinar una breve sesión para revisar los requisitos técnicos. ¡Quedo atento!`;

          // Tu número de contacto configurado de forma segura o directo en el string
          const tuNumero = "584125353950";

          window.open(`https://wa.me/${tuNumero}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");

          // Limpieza final de estados y campos
          setIsSuccess(false);
          setFormData({ nombre: "", empresa: "", servicio: "", mensaje: "" });
        }, 2000);

      } else {
        alert("Error en la transmisión de la infraestructura de datos.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      alert("No se pudo conectar con el servidor central.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 md:pt-32 min-h-screen relative overflow-hidden bg-[var(--bg-base)]">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 pointer-events-none noise-overlay"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 pt-10 pb-16 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-[var(--emerald-light)] text-[var(--emerald)] px-4 py-1.5 rounded-full mb-8 border border-[var(--emerald)]/20">
          <span className="material-symbols-outlined text-[18px]">
            engineering
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">
            Engineering Precision
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4 tracking-tight font-display">
          Hablemos de tu Próximo Proyecto
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto opacity-90">
          Fusionamos arquitectura de datos avanzada con interfaces intuitivas
          para materializar la visión de tu infraestructura digital.
        </p>
      </motion.section>

      {/* Layout Grid for Form and Info */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Sidebar: Trust & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6 order-2 lg:order-1"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-[var(--primary)]/10 shadow-lg p-6 rounded-2xl flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-[var(--primary)] border-b border-[var(--primary)]/10 pb-3 font-display">
                Global Headquarters
              </h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[var(--emerald)] mt-1">
                  location_on
                </span>
                <div>
                  <p className="text-base text-[var(--primary)] font-semibold">
                    Venezuela
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Barquisimeto, Edo. Lara
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--emerald)]">
                  mail
                </span>
                <p className="text-sm text-[var(--text-secondary)]">
                  kinetixsistemas@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--emerald)]">
                  call
                </span>
                <p className="text-sm text-[var(--text-secondary)]">
                  +58 412 5353950
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--emerald-light)] to-[var(--primary-light)] p-6 rounded-2xl border border-[var(--emerald)]/20 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--emerald)] mb-2">
                SISTEMAS OPERATIVOS
              </h4>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Nuestros sistemas de automatización reducen la latencia
                operativa en un 40% mediante algoritmos predictivos.
              </p>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--emerald)] animate-pulse"></div>
                <span className="text-sm font-medium font-mono text-[var(--emerald)]">
                  Sistemas Activos / 99.9% Uptime
                </span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl h-48 overflow-hidden relative border border-[var(--primary)]/10 shadow-sm">
              <img
                className="w-full h-full object-cover"
                alt="Tech campus view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUt-hYDP7DRAZCX8RMmCSokry9riZRXNx6vjwD4CMkaIShcoPK198AtkqurmDttk6zTaDXtwxFZpa9YxpbhOSnYkTUCodGtgMnD1PzCIPbZl14Vnk9rk3xJq6tSNcRkS8y37l54Q5FAphTkWY2nIwEXoL6eoTrjscZFvq0Nyila_nTqK1-QkPA5N3Rbyexv3-mMPzaR_5JIa_3fo5g2cBK-VAbNUytegEGY7FJBwrPyRwZMxxpbNuDM0_XOa3UzNrjxDVGppBB15Dn"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/20 backdrop-grayscale-[0.5]"></div>
            </div>
          </motion.div>

          {/* Right Sidebar: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-[var(--primary)]/10 shadow-lg p-8 md:p-10 rounded-2xl">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                id="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/70 ml-1">
                    Nombre Completo
                  </label>
                  <input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-white border border-[var(--surface-border)] rounded-xl p-4 text-base focus:ring-2 focus:ring-[var(--emerald)]/20 focus:border-[var(--emerald)] outline-none transition-all shadow-sm text-black"
                    placeholder="John Doe"
                    type="text"
                    required
                    disabled={isSubmitting || isSuccess}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/70 ml-1">
                    Tipo de Empresa
                  </label>
                  <input
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="bg-white border border-[var(--surface-border)] rounded-xl p-4 text-base focus:ring-2 focus:ring-[var(--emerald)]/20 focus:border-[var(--emerald)] outline-none transition-all shadow-sm text-black"
                    placeholder="Salud, Deporte, Ventas al mayor, etc"
                    type="text"
                    disabled={isSubmitting || isSuccess}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/70 ml-1">
                    Tipo de Servicio
                  </label>
                  <div className="relative">
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full bg-white border border-[var(--surface-border)] rounded-xl p-4 pr-12 text-base focus:ring-2 focus:ring-[var(--emerald)]/20 focus:border-[var(--emerald)] outline-none transition-all appearance-none cursor-pointer shadow-sm text-black"
                      required
                      disabled={isSubmitting || isSuccess}
                    >
                      <option disabled value="">
                        Selecciona una opción
                      </option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Pagina Web Personalizada">Pagina Web Personalizada</option>
                      <option value="Servicio de Automatización">Servicio de Automatización</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[var(--text-secondary)]">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/70 ml-1">
                    Mensaje / Detalles del Proyecto
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-white border border-[var(--surface-border)] rounded-xl p-4 text-base focus:ring-2 focus:ring-[var(--emerald)]/20 focus:border-[var(--emerald)] outline-none transition-all resize-none shadow-sm text-black"
                    placeholder="Describe los requisitos técnicos de tu proyecto..."
                    rows={5}
                    required
                    disabled={isSubmitting || isSuccess}
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg flex items-center justify-center gap-3 ${isSuccess
                      ? "bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]"
                      : isSubmitting
                        ? "bg-[var(--emerald)] text-white opacity-80"
                        : "bg-[var(--emerald)] hover:bg-[var(--emerald-hover)] text-white shadow-[var(--shadow-emerald)]"
                      }`}
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">
                          sync
                        </span>
                        <span>Transmitting Data...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                        <span>Message Encrypted & Redirecting...</span>
                      </>
                    ) : (
                      <>
                        <span>Iniciar Proyecto</span>
                        <span className="material-symbols-outlined">
                          rocket_launch
                        </span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-[var(--text-secondary)] opacity-80 mt-5">
                    Al enviar este formulario, aceptas nuestra política de
                    privacidad y procesamiento de datos.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}