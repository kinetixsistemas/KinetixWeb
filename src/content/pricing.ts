export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | null;
  features: string[];
  highlighted?: boolean;
}

export const pricesConfirmed = true;

export const webPlans: PricingPlan[] = [
  {
    id: 'start-conversion',
    name: 'Start Conversion',
    description: 'Una landing clara para presentar tu servicio y recibir consultas por WhatsApp.',
    price: 149,
    features: ['Diseño adaptable a móvil', 'SEO básico', 'Integración con WhatsApp', 'Compra de dominio'],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    description: 'Un sitio corporativo con varias secciones y analítica configurable.',
    price: 249,
    features: ['Varias secciones', 'SEO básico', 'Analítica configurable', 'Integración con WhatsApp'],
    highlighted: true,
  },
  {
    id: 'elite-corporate',
    name: 'Elite Corporate',
    description: 'Una web corporativa completa, pensada para negocios con varias líneas de servicio.',
    price: 499,
    features: ['Estructura corporativa completa', 'SEO básico', 'Analítica configurable', 'Integración con WhatsApp'],
  },
];

export const customPricingLabel = 'Precios definidos según el alcance del proyecto';

export function displayPrice(plan: PricingPlan): string {
  return pricesConfirmed && plan.price !== null ? `Desde $${plan.price}` : customPricingLabel;
}

export const deliveryTime = '3 a 5 días';
