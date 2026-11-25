# Kinetix Sistemas

Sitio web de Kinetix Sistemas, agencia en Barquisimeto, Lara, Venezuela. Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

Dominio canónico: https://kinetixsistemas.com

## Instalación

```bash
npm install
```

Copia `.env.example` a `.env.local` y completa solo las variables que vayas a usar. El archivo `.env.local` está ignorado por Git; nunca subas credenciales al repositorio.

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Generación de producción |
| `npm run lint` | Revisión con ESLint |

## Variables de entorno

| Variable | Cuándo es necesaria | Uso |
| --- | --- | --- |
| `GROQ_API_KEY` | Opcional | Credencial usada por la API de chat (`/api/chat`). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Necesaria para el chat | Número usado en los enlaces de WhatsApp. |
| `NEXT_PUBLIC_GA_ID` | Opcional | Google Analytics 4. |
| `NEXT_PUBLIC_CLARITY_ID` | Opcional | Microsoft Clarity. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Opcional | Meta Pixel. |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Opcional | TikTok Pixel. |
| `NEXT_PUBLIC_GTM_ID` | Opcional | Google Tag Manager. |

Si una variable de analítica no está definida, su herramienta no se carga.

## Arquitectura de datos

- `src/config/site.ts`: datos globales (nombre, URL, correo, WhatsApp, horario, ubicación, fundador y redes).
- `src/content/*`: contenido editable (servicios, casos, preguntas, precios y reseñas de Google Maps).
- `src/lib/*`: metadatos, enlaces de WhatsApp, atribución, datos estructurados y consentimiento.

El formulario de `/cotizar` valida los datos y abre WhatsApp con el resumen de la solicitud; no depende de un servicio de correo.

Las páginas legales viven en `src/app/(public)/` y mantienen su aviso de contenido pendiente de confirmación por parte de Kinetix Sistemas.

## Analítica y consentimiento

El sitio usa Consent Mode v2: el estado inicial niega el almacenamiento de analítica y publicidad. GA4, Clarity, Meta Pixel, TikTok Pixel y GTM solo se cargan si su variable está definida y el visitante acepta. Nada se activa antes del consentimiento.

La elección se guarda en `localStorage` bajo `kinetix-cookie-consent`. Para volver a elegir, elimina los datos del sitio en el navegador y abre la página de nuevo.

## Verificación en Search Console

En Google Search Console, registra el dominio `kinetixsistemas.com` y usa uno de estos métodos:

- Subir el archivo HTML de verificación a `public/` para que quede disponible en la raíz del dominio.
- Añadir un registro TXT en el DNS con el valor entregado por Google para el dominio raíz.

Completa la verificación desde Search Console después de publicar.

## Despliegue en Vercel

- Importa el repositorio y configura las variables de entorno del proyecto.
- Asigna `kinetixsistemas.com` como dominio de producción.
- Los canónicos apuntan a ese dominio desde `src/lib/metadata.ts`.
- Los deployments de preview se publican con `noindex, nofollow` cuando `VERCEL_ENV` es `preview`.

## Contacto

- Correo: kinetixsistemas@gmail.com
- WhatsApp: +58 412 5353950
- Ubicación: Barquisimeto, Lara, Venezuela
