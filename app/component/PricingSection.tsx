"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Plan Inicio",
    subtitle: "Impulso Digital",
    idealFor: "Emprendedores y tiendas pequeñas en crecimiento.",
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    features: [
      "300 chats atendidos/mes",
      "Atención automática 24/7",
      "No pierdas ni un cliente más por responder tarde"
    ],
    buttonText: "Empezar ahora",
    recommended: false,
  },
  {
    name: "Plan Crecimiento",
    subtitle: "Negocio Inteligente",
    idealFor: "Negocios establecidos (Inmobiliarias, Repuestos, Servicios).",
    monthlyPrice: 34.99,
    annualPrice: 349.99,
    features: [
      "1,000 chats atendidos/mes",
      "IA Avanzada (Groq + GPT-4o)",
      "Conexión con Google Sheets/CRM"
    ],
    buttonText: "Elegir plan",
    recommended: true,
  },
  {
    name: "Plan Pro",
    subtitle: "Escala Total",
    idealFor: "Empresas con múltiples agentes y alto volumen.",
    monthlyPrice: 59.99,
    annualPrice: 599.99,
    features: [
      "Chats ilimitados*",
      "Multi-instancia",
      "Auditoría de flujos mensual",
      "Reportes de conversión PDF"
    ],
    buttonText: "Contactar ventas",
    recommended: false,
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden" id="pricing">
      <div className="noise-overlay"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-overline text-primary">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-display text-text-inverted mt-4 mb-6">Pricing that grows with you</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>

          <div className="mt-10 inline-flex items-center p-1 bg-bg-dark-card border border-surface-border-dark rounded-full">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-primary text-white shadow-primary' : 'text-text-muted hover:text-text-inverted'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isAnnual ? 'bg-primary text-white shadow-primary' : 'text-text-muted hover:text-text-inverted'}`}
            >
              Annually
            </button>
          </div>
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
                    Most popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-display text-text-inverted">{plan.name}</h3>
                </div>
                <div className="text-sm text-text-muted min-h-[40px]">{plan.idealFor}</div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display text-text-inverted">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-text-muted text-sm">/{isAnnual ? 'year' : 'month'}</span>
                </div>
              </div>

              <button className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all mb-8 ${plan.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-primary' : 'bg-white/5 text-text-inverted border border-white/10 hover:bg-white/10'}`}>
                {plan.buttonText}
              </button>

              <div className="space-y-4 flex-1">
                <p className="text-sm font-bold text-text-inverted mb-4">{plan.subtitle}</p>
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
  );
}
