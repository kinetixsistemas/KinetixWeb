export const siteConfig = {
  name: 'Kinetix Sistemas',
  url: 'https://kinetixsistemas.com',
  locale: 'es_VE',
  description:
    'Agencia en Barquisimeto, Venezuela. Páginas web, sistemas de inventario y ventas, software para clínicas dentales y automatización con IA en WhatsApp.',
  email: 'kinetixsistemas@gmail.com',
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '584125353950',
    display: '+58 412 5353950',
  },
  location: {
    city: 'Barquisimeto',
    state: 'Lara',
    countryCode: 'VE',
    country: 'Venezuela',
  },
  businessHours: {
    summary: 'Lunes a sábado, de 08:00 am a 06:00 pm',
    schema: 'Mo-Sa 08:00-18:00',
    afterHours: 'Fuera de horario o en caso de emergencia, escríbenos por WhatsApp.',
  },
  founder: 'Adonis Daller',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61593193320097',
    instagram: 'https://www.instagram.com/kinetixsistemas/',
    tiktok: 'https://www.tiktok.com/@kinetixsistemas',
  },
  demo: {
    odontology: 'https://demodonto.kinetixsistemas.com/',
  },
  author: 'Kinetix Sistemas',
} as const;

export type SiteConfig = typeof siteConfig;
