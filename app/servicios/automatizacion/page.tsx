import React from 'react';
import { Metadata } from 'next';
import { Bot, Database, Headset, GitMerge, FileText, CheckCircle2, Zap, TrendingUp, MapPin, ChevronDown } from 'lucide-react';
import PricingSection from '../../component/PricingSection';

export const metadata: Metadata = {
  title: "Sistemas Kinetix: Expertos en Automatización e IA para Negocios en Venezuela",
  description: "Maximiza tus ventas con Sistemas Kinetix. Ofrecemos bots de WhatsApp con IA, automatización de procesos con n8n y desarrollo de software escalable en Barquisimeto. ¡Empieza hoy sin costo de instalación!",
  keywords: "Automatización de WhatsApp Barquisimeto, Chatbots con IA Venezuela, n8n servicios de automatización, Agentes IA para inmobiliarias, Ventas en automático Lara"
};

export default function AutomatizacionPage() {
  const faqs = [
    {
      question: "¿Necesito saber programar para usar los servicios de Kinetix?",
      answer: "No. En Sistemas Kinetix entregamos soluciones \"llave en mano\". Nosotros nos encargamos de toda la configuración técnica en n8n, la conexión con la Evolution API y el entrenamiento de la IA. Usted solo recibe los resultados directamente en su WhatsApp o panel de control."
    },
    {
      question: "¿Qué es exactamente un \"Chat Atendido\"?",
      answer: "Contabilizamos un chat atendido cada vez que un cliente nuevo inicia una conversación y es gestionado por la IA de forma completa. No cobramos por mensaje individual, lo que le permite tener conversaciones fluidas y extensas con sus clientes sin preocuparse por el costo por palabra."
    },
    {
      question: "¿Por qué dicen que el costo de instalación es $0?",
      answer: "A diferencia de otras agencias que cobran tarifas de \"Setup\" de hasta $50, nosotros hemos automatizado nuestros procesos internos de despliegue. Esto nos permite eliminar la barrera de entrada y que usted solo pague por el servicio activo desde el primer día."
    },
    {
      question: "¿Mi número de WhatsApp corre riesgo de ser bloqueado?",
      answer: "Utilizamos la Evolution API, una de las tecnologías más estables para la conexión con Meta. Además, configuramos cada instancia de forma independiente para que el comportamiento del bot sea lo más humano posible, reduciendo drásticamente los riesgos asociados al uso de automatizaciones."
    },
    {
      question: "¿Puedo cancelar mi suscripción cuando quiera?",
      answer: "Sí. Nuestros planes mensuales funcionan bajo la modalidad de suscripción sin contratos de permanencia obligatoria. Si decide no renovar el siguiente mes, el servicio simplemente se detendrá al finalizar el periodo pagado."
    },
    {
      question: "¿Qué pasa si excedo el límite de chats de mi plan?",
      answer: "Si su negocio crece más rápido de lo esperado, ¡felicidades! El sistema seguirá funcionando. Simplemente se aplicará un costo de $5 por cada 100 chats adicionales o podrá optar por subir al siguiente plan para obtener una mejor tarifa por volumen."
    }
  ];

  const solutions = [
    {
      title: "Agentes de Ventas para WhatsApp e Instagram",
      description: "Implementamos asistentes inteligentes capaces de saludar, calificar prospectos y cerrar ventas de forma autónoma utilizando Groq y OpenAI.",
      icon: <Bot className="w-6 h-6 text-emerald" />
    },
    {
      title: "Gestión Inteligente de Leads",
      description: "Olvídate de filtrar mensajes manualmente; nuestra IA identifica a los clientes con alta intención de compra y los organiza en tu base de datos de Supabase o Google Sheets al instante.",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: "Atención al Cliente Multi-Nivel",
      description: "Bots entrenados con tu propia base de conocimientos para responder dudas técnicas, políticas de envío y precios con precisión humana.",
      icon: <Headset className="w-6 h-6 text-emerald" />
    },
    {
      title: "Sincronización de Ecosistemas (n8n)",
      description: "Conectamos todas tus herramientas (CRM, Gmail, Calendarios, Bases de Datos) para que la información fluya sin errores humanos.",
      icon: <GitMerge className="w-6 h-6 text-primary" />
    },
    {
      title: "Automatización de Pagos y Facturación",
      description: "Sistemas que verifican capturas de pago y generan reportes de ventas automáticos en PDF para tu administración.",
      icon: <FileText className="w-6 h-6 text-emerald" />
    }
  ];

  const benefits = [
    {
      title: "Sin Barreras de Entrada ($0 Setup)",
      description: "A diferencia de otras agencias, eliminamos el costo de instalación inicial para que empieces a ver resultados desde el primer día.",
      icon: <CheckCircle2 className="w-8 h-8 text-emerald" />
    },
    {
      title: "Velocidad de Respuesta Insuperable",
      description: "Gracias al uso de la infraestructura de Groq, tus clientes recibirán respuestas en milisegundos, mejorando la experiencia de usuario y la tasa de conversión.",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Escalabilidad SaaS",
      description: "Nuestro modelo de suscripción te permite subir de nivel según tu negocio crezca, pagando solo por lo que realmente necesitas.",
      icon: <TrendingUp className="w-8 h-8 text-emerald" />
    },
    {
      title: "Soporte Local en Barquisimeto",
      description: "Conocemos el mercado de Lara y Venezuela, adaptando la IA al lenguaje y necesidades de nuestra región.",
      icon: <MapPin className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen bg-bg-base">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 gradient-hero text-text-inverted relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-30 mix-blend-screen pointer-events-none animate-pulse-ring"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(0,199,143,0.8)]"></span>
            <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">Revoluciona tus procesos</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Sistemas Kinetix: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-blue-400">
              Expertos en Automatización e IA
            </span> <br className="hidden md:block" />
            para Negocios en Venezuela
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transformamos procesos manuales en flujos de trabajo autónomos que trabajan para ti las 24 horas del día.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-emerald w-full sm:w-auto text-lg px-8 py-4 justify-center">
              Ver nuestros planes
            </a>
            <a href="https://wa.me/message/TU_WHATSAPP" target="_blank" rel="noopener noreferrer" className="btn-ghost-white w-full sm:w-auto text-lg px-8 py-4 justify-center">
              Agenda una demostración
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-bg-base relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-overline">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mt-4 mb-6">
              Soluciones de Automatización con Inteligencia Artificial
            </h2>
            <p className="text-lg text-text-secondary">
              Lleva tu negocio al siguiente nivel con la potencia de la IA y n8n. No solo instalamos software; diseñamos la arquitectura de eficiencia que tu empresa necesita para escalar en la era digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="card p-8 group hover:border-emerald/30">
                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-light group-hover:text-emerald transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">{solution.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-surface-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-overline">¿Por qué nosotros?</span>
              <h2 className="text-4xl md:text-5xl font-display text-text-primary mt-4 mb-8">
                Beneficios de elegir Sistemas Kinetix
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{benefit.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-emerald/20 rounded-3xl blur-3xl"></div>

              <div className="glass-panel relative z-10 p-2 rounded-[2rem] shadow-xl border border-white/40 bg-white/40">
                <div className="aspect-[4/3] bg-bg-dark rounded-3xl overflow-hidden relative flex items-center justify-center border border-white/10" aria-label="Dashboard de n8n para automatización de ventas">
                  <div className="absolute inset-0 noise-overlay opacity-30"></div>
                  <Bot className="w-32 h-32 text-primary/10 absolute -right-4 -bottom-4" />
                  <Database className="w-24 h-24 text-emerald/10 absolute top-8 -left-4" />

                  <div className="text-center relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <GitMerge className="w-16 h-16 text-emerald mx-auto mb-4 animate-float" />
                    <div className="text-white font-display text-2xl font-bold">n8n + AI Workflow</div>
                    <div className="text-white/60 text-sm mt-2">Interfaz de chatbot IA en WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Client Component) */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-bg-base relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-overline">Aclaratorias Comunes</span>
            <h2 className="text-4xl font-display text-text-primary mt-4 mb-6">
              Preguntas Frecuentes: Automatización e IA
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group card overflow-hidden cursor-pointer">
                <summary className="flex justify-between items-center font-bold list-none p-6 text-text-primary group-open:bg-surface-muted transition-colors">
                  <span className="text-lg pr-8">{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                    <ChevronDown className="text-primary w-6 h-6" />
                  </span>
                </summary>
                <div className="text-text-secondary p-6 pt-0 leading-relaxed border-t border-surface-border whitespace-pre-line">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="card p-8 bg-surface-muted border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
              <span className="text-xl">⚠️</span> Observaciones Técnicas Importantes
            </h3>
            <ul className="space-y-4 text-text-secondary">
              <li>
                <strong className="text-text-primary">Servicios Externos:</strong> Las plataformas de bases de datos como Supabase o Firebase mantienen sus propios esquemas de pago independientes de Sistemas Kinetix.
              </li>
              <li>
                <strong className="text-text-primary">Ajustes de Precios:</strong> Los costos de renovación de servicios de terceros (como la infraestructura de IA de OpenAI o Groq) dependen de sus proveedores oficiales; Sistemas Kinetix no controla dichas tarifas externas.
              </li>
              <li>
                <strong className="text-text-primary">Modificaciones Post-Entrega:</strong> Una vez configurado el flujo inicial del plan contratado, las modificaciones adicionales, cambios de lógica complejos o nuevos diseños tienen un costo de soporte mensual o por proyecto personalizado.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
