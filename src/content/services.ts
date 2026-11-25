export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: string;
  audience: string;
  summary: string;
  problems: string[];
  includes: string[];
  steps: ServiceStep[];
  faq: ServiceFaq[];
  related: string[];
  cta: string;
  meta: { title: string; description: string };
  demo?: { label: string; href: string };
  caseStudy?: string;
}

export const services: Service[] = [
  {
    slug: 'sistema-clinicas-odontologicas',
    name: 'Sistema para clínicas odontológicas',
    icon: 'medical_services',
    audience: 'Odontólogos y clínicas dentales',
    summary:
      'Un sistema para tu consultorio odontológico que reúne historia clínica, odontograma, periodontograma, presupuestos, pagos y agenda en un solo lugar. Deja de repetir datos entre hojas y programas y ten la información de cada paciente organizada y disponible cuando la necesitas.',
    problems: [
      'Historias clínicas dispersas en papel, carpetas o archivos sin organizar.',
      'Odontogramas y presupuestos que se vuelven a escribir en cada visita.',
      'Agenda, pagos y recordatorios sin una visión clara del consultorio.',
    ],
    includes: [
      'Historia clínica digital por paciente',
      'Odontograma y periodontograma',
      'Presupuestos y registro de pagos',
      'Agenda de citas del consultorio',
      'Recordatorios por WhatsApp (opcional)',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Revisamos cómo trabaja hoy el consultorio y qué información debe quedar registrada.' },
      { title: 'Diseño', description: 'Definimos las pantallas de historia clínica, odontograma, agenda y cobros.' },
      { title: 'Desarrollo', description: 'Construimos el sistema con tecnologías que ya usamos en proyectos de salud.' },
      { title: 'Lanzamiento y soporte', description: 'Capacitamos al equipo y acompañamos el arranque con la demo publicada como referencia.' },
    ],
    faq: [
      {
        question: '¿Puedo ver un ejemplo antes de decidir?',
        answer: 'Sí. Publicamos una demo del sistema odontológico para que revises historia clínica, odontograma, presupuestos y agenda antes de hablar con nosotros. También ofrecemos una demo gratis de 15 días para clínicas odontológicas.',
      },
      {
        question: '¿El sistema sirve para una clínica con varios odontólogos?',
        answer: 'Sí. La agenda y la historia clínica se organizan por profesional y paciente. El alcance exacto se define en el diagnóstico.',
      },
      {
        question: '¿Puede enviar recordatorios por WhatsApp?',
        answer: 'Sí, los recordatorios por WhatsApp son una opción dentro del proyecto de automatización. Lo definimos contigo según tus procesos.',
      },
      {
        question: '¿Cuánto cuesta un sistema para mi clínica?',
        answer: 'Los precios se definen según el alcance del proyecto. Revisamos tu flujo de trabajo y te enviamos una propuesta concreta.',
      },
      {
        question: '¿Qué tecnologías usan?',
        answer: 'Trabajamos con Next.js, React, TypeScript, Supabase/PostgreSQL, Python, Docker y Vercel, según lo que requiera el proyecto.',
      },
    ],
    related: ['sistemas-pwa-inventario-ventas', 'automatizacion-ia-whatsapp'],
    cta: 'Quiero un sistema para mi clínica',
    meta: {
      title: 'Sistema para clínicas odontológicas | Kinetix Sistemas',
      description:
        'Historia clínica, odontograma, presupuestos, pagos y agenda en un solo sistema para tu consultorio.',
    },
    demo: { label: 'Ver demo del sistema odontológico', href: 'https://demodonto.kinetixsistemas.com/' },
    caseStudy: 'sistema-consultorio-odontologico',
  },
  {
    slug: 'sistemas-pwa-inventario-ventas',
    name: 'Sistemas PWA de inventario y ventas',
    icon: 'inventory_2',
    audience: 'Comercios y distribuidores que hoy usan Excel o cuaderno',
    summary:
      'Una PWA es una página que se instala en el móvil y funciona como una app. Nuestro sistema de inventario y ventas te deja controlar stock, clientes, ventas, facturación y cobranza desde el celular, la tablet o la PC, incluso con una conexión irregular.',
    problems: [
      'Inventario anotado en Excel o en un cuaderno que nadie actualiza al momento.',
      'Ventas y cobranzas que solo se revisan al final del día.',
      'Dependencia de internet para consultar precios o registrar un pedido.',
    ],
    includes: [
      'Instalable en móvil, tablet y PC',
      'Funciona con mala conexión',
      'Inventario y control de stock',
      'Clientes, ventas y facturación',
      'Cobranza y seguimiento de pagos',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Revisamos cómo registras hoy inventario, ventas y cobros.' },
      { title: 'Diseño', description: 'Definimos los flujos que más usas desde el móvil.' },
      { title: 'Desarrollo', description: 'Construimos la PWA con sincronización cuando vuelve la conexión.' },
      { title: 'Lanzamiento y soporte', description: 'Capacitamos al equipo y acompañamos la puesta en marcha.' },
    ],
    faq: [
      {
        question: '¿Qué es una PWA?',
        answer: 'Una PWA es una página web que se puede instalar en el móvil y se comporta como una aplicación: abre desde un ícono y puede funcionar con conexión limitada.',
      },
      {
        question: '¿Funciona sin internet?',
        answer: 'Sí. Puedes consultar y registrar información con mala conexión; los datos se sincronizan cuando la conexión vuelve.',
      },
      {
        question: '¿Puedo usarlo desde el celular y la PC?',
        answer: 'Sí. El sistema está pensado para usarse principalmente desde móvil y tablet, y también desde computador.',
      },
      {
        question: '¿Cuánto tarda un sistema de inventario?',
        answer: 'Depende del número de módulos y de tus procesos. Lo definimos en el diagnóstico y te entregamos una cotización personalizada.',
      },
      {
        question: '¿Reemplaza a mi Excel?',
        answer: 'Sí. La idea es que el inventario, las ventas y la cobranza vivan en un solo sistema y no en archivos separados.',
      },
    ],
    related: ['plataforma-b2b-mayorista', 'desarrollo-web'],
    cta: 'Quiero controlar mi inventario',
    meta: {
      title: 'Sistemas PWA de inventario y ventas | Kinetix Sistemas',
      description: 'Controla inventario, ventas y cobranza desde el móvil. Sistema a la medida de tu negocio.',
    },
    caseStudy: 'sistema-inventario-facturacion',
  },
  {
    slug: 'plataforma-b2b-mayorista',
    name: 'Plataforma B2B mayorista',
    icon: 'hub',
    audience: 'Distribuidores con vendedores y clientes al mayor',
    summary:
      'Una web pública conectada a un sistema interno para vender al mayor con tres roles claros: administrador, vendedor y cliente mayorista. Tu cliente ve el inventario disponible y hace pedidos al mayor, mientras tu equipo controla precios, cotizaciones y despacho en un mismo lugar.',
    problems: [
      'Listas de precios que se envían por WhatsApp y quedan desactualizadas.',
      'Pedidos que llegan por varios canales y se pierden o se duplican.',
      'El cliente mayorista no sabe qué hay disponible para comprar.',
    ],
    includes: [
      'Web pública de catálogo al mayor',
      'Rol administrador: inventario, precios, usuarios y reportes',
      'Rol vendedor: pedidos, clientes y cotizaciones',
      'Rol cliente mayorista: inventario disponible y compra al mayor',
      'Flujo pedido → aprobación → despacho',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Mapeamos tus roles, listas de precios y flujo de pedidos.' },
      { title: 'Diseño', description: 'Definimos la web pública y el sistema interno con permisos por rol.' },
      { title: 'Desarrollo', description: 'Integramos catálogo, inventario, cotizaciones y aprobación de pedidos.' },
      { title: 'Lanzamiento y soporte', description: 'Capacitamos a vendedores y administradores y acompañamos el arranque.' },
    ],
    faq: [
      {
        question: '¿Qué es una plataforma B2B mayorista?',
        answer: 'Es un sistema que conecta tu catálogo y tus precios al mayor con tu operación interna, para que clientes y vendedores trabajen con la misma información.',
      },
      {
        question: '¿Qué puede hacer cada rol?',
        answer: 'El administrador gestiona inventario, precios, usuarios y reportes. El vendedor gestiona pedidos, clientes y cotizaciones. El cliente mayorista ve el inventario disponible y compra al mayor.',
      },
      {
        question: '¿Cómo se aprueba un pedido?',
        answer: 'El pedido entra al sistema, tu equipo lo revisa y lo aprueba, y luego pasa a despacho. El flujo se ajusta a tus reglas comerciales.',
      },
      {
        question: '¿Los precios al mayor se actualizan solos?',
        answer: 'Sí. Al cambiar un precio en el sistema interno, la web pública refleja el nuevo valor para los clientes con acceso.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'Es un proyecto a medida. Trabajamos con cotización personalizada según roles, catálogo e integraciones.',
      },
    ],
    related: ['sistemas-pwa-inventario-ventas', 'paginas-repuestos-al-mayor'],
    cta: 'Quiero vender al mayor online',
    meta: {
      title: 'Plataforma B2B mayorista con inventario en línea | Kinetix Sistemas',
      description: 'Web y sistema interno con roles de administrador, vendedor y cliente para vender al mayor.',
    },
    caseStudy: 'plataforma-b2b-distribuidora',
  },
  {
    slug: 'paginas-repuestos-al-mayor',
    name: 'Páginas de repuestos al mayor',
    icon: 'sell',
    audience: 'Distribuidoras e importadoras de repuestos',
    summary:
      'Una página web para vender repuestos al mayor con catálogo por categoría y marca, lista de precios al mayor y pedidos por WhatsApp. Pensada para que un cliente encuentre rápido lo que busca y para que cada categoría tenga su propia entrada desde Google.',
    problems: [
      'Catálogos en PDF que nadie puede buscar ni actualizar fácilmente.',
      'Clientes que preguntan por WhatsApp si hay disponibilidad o precio.',
      'Páginas que no aparecen cuando alguien busca una categoría o marca.',
    ],
    includes: [
      'Catálogo por categoría y marca',
      'Lista de precios al mayor',
      'Solicitud de pedido por WhatsApp',
      'Páginas por categoría pensadas para SEO',
      'Enlace con tu inventario (opcional)',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Revisamos tu catálogo, tus categorías y cómo recibes los pedidos.' },
      { title: 'Diseño', description: 'Organizamos la navegación por marca, categoría y compatibilidad.' },
      { title: 'Desarrollo', description: 'Creamos las páginas de catálogo y el flujo de pedido por WhatsApp.' },
      { title: 'Lanzamiento y soporte', description: 'Ajustamos SEO básico y acompañamos la carga de productos.' },
    ],
    faq: [
      {
        question: '¿Puedo mostrar precios al mayor?',
        answer: 'Sí. Podemos publicar tu lista de precios al mayor o mostrarla solo a clientes con acceso, según tu política comercial.',
      },
      {
        question: '¿Los pedidos llegan por WhatsApp?',
        answer: 'Sí. Cada producto puede llevar un botón que abre WhatsApp con el repuesto y la categoría ya indicados.',
      },
      {
        question: '¿Se puede conectar con mi inventario?',
        answer: 'Sí. Si ya tienes un sistema de inventario, podemos conectarlo para mostrar disponibilidad real.',
      },
      {
        question: '¿Por qué páginas por categoría?',
        answer: 'Porque ayudan a que un cliente encuentre una categoría o marca específica desde una búsqueda, en vez de entrar solo a la portada.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'Depende del tamaño del catálogo y de las integraciones. Te damos una cotización personalizada.',
      },
    ],
    related: ['plataforma-b2b-mayorista', 'desarrollo-web'],
    cta: 'Quiero publicar mi catálogo',
    meta: {
      title: 'Página web para venta de repuestos al mayor | Kinetix Sistemas',
      description: 'Catálogo, precios al mayor y pedidos por WhatsApp para distribuidoras e importadoras.',
    },
    caseStudy: 'venta-repuestos-mayor',
  },
  {
    slug: 'desarrollo-web',
    name: 'Desarrollo de páginas web',
    icon: 'web',
    audience: 'Negocios que necesitan una landing page o un sitio corporativo',
    summary:
      'Creamos landing pages y sitios corporativos con SEO básico y analítica, para que tu negocio pueda encontrarse en Google y convertir visitas en conversaciones por WhatsApp. Las entregas de páginas web se realizan en 3 a 5 días e incluyen contrato, compra de dominio y ajuste de SEO básico.',
    problems: [
      'Un negocio que no aparece cuando alguien busca su servicio en Google.',
      'Páginas lentas, difíciles de usar desde el móvil o sin forma de contacto clara.',
      'Sitios que se ven bien pero no explican qué ofrecen ni para quién.',
    ],
    includes: [
      'Contrato y compra de dominio',
      'Diseño adaptable a móvil',
      'Ajuste de SEO básico',
      'Integración con WhatsApp',
      'Analítica configurable',
      'Entrega en 3 a 5 días',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Definimos el objetivo de la página y qué debe hacer el visitante.' },
      { title: 'Diseño', description: 'Preparamos la estructura y el contenido con un mensaje claro desde el inicio.' },
      { title: 'Desarrollo', description: 'Construimos la página con Next.js, React y TypeScript.' },
      { title: 'Lanzamiento', description: 'Configuramos dominio, SEO básico y analítica, y publicamos en 3 a 5 días.' },
    ],
    faq: [
      {
        question: '¿Cuánto tarda una página web?',
        answer: 'La entrega de landing pages y sitios corporativos se realiza en 3 a 5 días. Ese plazo incluye contrato, compra de dominio y ajuste de SEO básico.',
      },
      {
        question: '¿La página funciona en el celular?',
        answer: 'Sí. Diseñamos primero para móvil, que es donde se produce la mayor parte del tráfico en Venezuela.',
      },
      {
        question: '¿Incluye dominio?',
        answer: 'Sí, la compra del dominio forma parte de la entrega. Si ya tienes uno, lo configuramos.',
      },
      {
        question: '¿Puedo medir las visitas?',
        answer: 'Sí. Preparamos el sitio para conectar analítica con los IDs que nos proporciones, con consentimiento previo del visitante.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'Los planes publicados están pendientes de confirmación. Mientras tanto, trabajamos con cotización personalizada.',
      },
    ],
    related: ['paginas-repuestos-al-mayor', 'sistemas-pwa-inventario-ventas'],
    cta: 'Quiero una página web',
    meta: {
      title: 'Desarrollo de páginas web en Venezuela | Kinetix Sistemas',
      description:
        'Landing pages y sitios corporativos rápidos, con SEO y WhatsApp integrado. Entrega en 3 a 5 días.',
    },
    caseStudy: 'sitio-web-ventas-mayor',
  },
  {
    slug: 'automatizacion-ia-whatsapp',
    name: 'Automatización con IA e integraciones',
    icon: 'smart_toy',
    audience: 'Negocios que venden o atienden por WhatsApp',
    summary:
      'Agentes de WhatsApp con IA que atienden, filtran y califican prospectos, y flujos con n8n que conectan tus herramientas. Usamos Evolution API (WhatsApp Business API), la Cloud API de Meta y modelos de lenguaje para que las conversaciones y los procesos dejen de depender de estar pendiente del teléfono.',
    problems: [
      'Mensajes de WhatsApp que quedan sin responder fuera del horario laboral.',
      'Prospectos que se pierden porque nadie los califica a tiempo.',
      'Herramientas que no se hablan entre sí y obligan a copiar datos.',
    ],
    includes: [
      'Agentes de WhatsApp con IA',
      'Flujos automatizados con n8n',
      'Integraciones con CRM, hojas de cálculo y sistemas propios',
      'Evolution API y Cloud API de Meta',
      'Simulador de WhatsApp en esta página',
    ],
    steps: [
      { title: 'Diagnóstico', description: 'Identificamos qué conversaciones y tareas se pueden automatizar.' },
      { title: 'Diseño', description: 'Definimos el guion del agente y los flujos entre tus herramientas.' },
      { title: 'Desarrollo', description: 'Creamos los flujos en n8n y conectamos WhatsApp con tus sistemas.' },
      { title: 'Lanzamiento y soporte', description: 'Probamos los flujos con casos reales y acompañamos los ajustes.' },
    ],
    faq: [
      {
        question: '¿Qué hace un agente de WhatsApp con IA?',
        answer: 'Atiende mensajes, responde preguntas frecuentes, filtra y califica prospectos, y deriva la conversación a una persona cuando hace falta.',
      },
      {
        question: '¿Con qué herramientas se integra?',
        answer: 'Trabajamos con n8n, Evolution API, la Cloud API de Meta y modelos de lenguaje, además de CRM, hojas de cálculo y sistemas propios.',
      },
      {
        question: '¿Necesito WhatsApp Business?',
        answer: 'Para usar la API se trabaja con WhatsApp Business o la Cloud API de Meta. Revisamos tu caso en el diagnóstico y te indicamos la opción adecuada.',
      },
      {
        question: '¿Puedo probar antes de contratar?',
        answer: 'Sí. En esta página puedes usar el simulador del asistente para ver cómo responde y califica un mensaje.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'Depende de los flujos y las integraciones. Manejamos cotización personalizada para cada proyecto.',
      },
    ],
    related: ['sistema-clinicas-odontologicas', 'sistemas-pwa-inventario-ventas'],
    cta: 'Quiero automatizar mi WhatsApp',
    meta: {
      title: 'Automatización con IA y agentes de WhatsApp | Kinetix Sistemas',
      description: 'Agentes de WhatsApp que atienden y califican clientes, y flujos que conectan tus herramientas.',
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
