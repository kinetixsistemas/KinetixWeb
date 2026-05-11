import { CheckCircle2, Zap, TrendingUp, MapPin } from 'lucide-react';

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

export default benefits;