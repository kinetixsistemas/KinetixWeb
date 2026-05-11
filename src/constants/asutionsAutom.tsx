import { Bot, Database, Headset, GitMerge, FileText } from 'lucide-react';

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

export default solutions;