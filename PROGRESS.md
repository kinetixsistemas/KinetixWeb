# Progreso de reestructuración — Kinetix Sistemas

Actualizado: 2026-11-24

## Avances realizados

### Saneado previo
- Auditado `agent.md`, dependencias, lint, build y estado de datos/rutas.
- `npm audit`: de `21 vulnerabilities (1 low, 8 moderate, 11 high, 1 critical)` a `found 0 vulnerabilities`.
- Actualizado `next` y `eslint-config-next` a `16.4.6` (versiones exactas).
- Corregido el error de build `Error: Missing API key. Pass it to the constructor \`new Resend("re_123")\`` validando `RESEND_API_KEY` dentro del handler de `/api/contact`.
- Corregidos errores de ESLint y activado `strict: true` en `tsconfig.json`.

### Fase 1 — Datos y utilidades
- Creada fuente única de verdad en `src/config/site.ts` (nombre, dominio, contacto, WhatsApp real `584125353950`, redes, demo odontológica).
- Creados catálogos en `src/content/`: `services.ts` (6 servicios), `cases.ts` (6 casos), `pricing.ts`, `faqs.ts`, `blog.ts`.
- Creadas utilidades en `src/lib/`: `metadata.ts`, `structured-data.ts`, `analytics.ts`, `attribution.ts`, `whatsapp.ts`.
- Eliminados archivos heredados sin referencias y con datos duplicados/no confirmados: `src/constants/number.ts`, `src/constants/projects.ts`, `src/constants/plansWeb.tsx`, `src/constants/faqsAutom.tsx`, `src/constants/asutionsAutom.tsx`, `src/constants/benefiAutom.tsx`, `src/components/PricingSection.tsx`, `src/components/ProjectCard.tsx`, `src/components/BentoCard.tsx`.

### Fase 2 — Páginas públicas y navegación
- Reescritos `Navbar.tsx` y `Footer.tsx` con los 6 servicios reales y datos de `siteConfig`.
- Home y hub de servicios reescritos con secciones basadas en datos.
- Creadas/reescritas las 6 páginas de servicio y la redirección `/servicios/automatizacion`.
- Creadas/reescritas: `/nosotros`, `/about`, `/portafolio`, `/portafolio/[slug]`, `/portfolio`, `/demos`, `/cotizar`, `/contacto`, `/desarrollo-web-barquisimeto`.
- Componentes reutilizables en `src/components/ui/`: `Section`, `CTAButton`, `ServiceCard`, `CaseCard`, `FAQ`, `Breadcrumbs`, `StructuredData`.
- Corregido el nombre del asistente en `WhatsAppSimulator.tsx`: `Kinex Agente IA` → `Asistente Kinetix Sistemas`.

### Fase 3 — SEO/GEO
- Metadata centralizada con `createMetadata()`, canonical, Open Graph, Twitter y `noindex` en previews.
- JSON-LD: `Organization`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`.
- Creados `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx` y `public/llms.txt`.
- Redirecciones 301 en `next.config.ts`: `/about` → `/nosotros`, `/servicios/automatizacion` → `/servicios/automatizacion-ia-whatsapp`, `/portfolio` → `/portafolio`.

### Fase 4 — Analítica y consentimiento
- `Consent Mode v2` por defecto denegado antes de cargar cualquier script.
- `CookieBanner.tsx` con Aceptar / Rechazar / Configurar y persistencia en `localStorage` (`kinetix-cookie-consent`).
- `Analytics.tsx` carga GTM, GA4, Clarity, Meta Pixel y TikTok Pixel solo tras consentimiento y si existen sus IDs.
- Eventos `whatsapp_click` y `scroll_depth` implementados.

### Fase 5 — Legal y contenidos
- Creadas `/privacidad`, `/terminos`, `/cookies` y `/descargo` con aviso de contenido pendiente de confirmación legal.
- `README.md` reescrito con arquitectura de datos, variables de entorno, consentimiento y despliegue.

### Fase 6 — QA
- Verificación final ejecutada: `npx tsc --noEmit`, `npm run lint`, `npm run build` y `npm audit --audit-level=low`.
- Resultado: TypeScript sin errores, ESLint sin errores ni advertencias, build correcto en Next.js `16.4.6` (43 rutas, 0 warnings) y `found 0 vulnerabilities`.
- Migrado `src/middleware.ts` a `src/proxy.ts` para eliminar la advertencia de deprecación de Next.js 16.
- `opengraph-image` migrado a runtime `nodejs` para eliminar la advertencia de Edge Runtime.

## Cierre de datos del dueño (2026-11-24)
- Precios confirmados: `pricesConfirmed = true`; planes publicados en `/servicios/desarrollo-web` y `/cotizar` (`$149 / $249 / $499`). Para sistemas, B2B y automatizaciones: "Precios definidos según el alcance del proyecto".
- Horario: lunes a sábado, 08:00 am – 06:00 pm; fuera de horario o emergencias por WhatsApp (`src/config/site.ts`, `/contacto`, footer y JSON-LD).
- Demo gratis de 15 días para clínicas odontológicas (historia clínica, agenda, odontograma, presupuestos y pagos) en `/demos` y FAQ del servicio.
- Rastreadores de IA permitidos en `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended).
- Fundador: Adonis Daller, con logo de Kinetix en `/nosotros` (sin foto).
- Permiso de portafolio concedido: nombres reales publicados en los 5 casos; el agente de WhatsApp sigue presentado como demo.
- Reseñas de Google Maps: 2 testimonios reales publicados en `/nosotros` con su texto, autor, 5 estrellas y enlace a la reseña (`src/content/reviews.ts`). Corregida ortografía evidente de los originales ("Excelnte"/"Exlentes" → "Excelente").
- Canonical confirmado: `https://kinetixsistemas.com`.

## Planificado / pendiente

### Datos pendientes de confirmación del dueño
- Texto definitivo de políticas de privacidad, términos, cookies y descargo legal (se deja para el final).
- Identificadores de analítica: `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`.
- Tokens de Search Console para verificación de propiedad.

### Integraciones pendientes
- Cargar las credenciales en `.env.local` (plantilla en `.env.example`). El formulario de `/cotizar` ya envía todo por WhatsApp: se eliminó `resend` y la ruta `/api/contact`.
- Configurar `GROQ_API_KEY` para el chat de `/api/chat`.
- Revisar las rutas de panel protegidas por `src/proxy.ts` (`/panel-user`, `/admin`, `/login`), hoy fuera del alcance de esta reestructuración pública.

### Contenido y comprobación en producción
- Validar las redirecciones 301 y el canonical en el dominio real `https://kinetixsistemas.com`.
- Comprobar el render de `/opengraph-image` y las URLs absolutas del sitemap.
- Revisar responsive y accesibilidad de los componentes nuevos en navegador real.
- Publicar los textos legales definitivos y volver a ejecutar QA antes del despliegue final.

### Decisiones omitidas a la espera de confirmación
- No se renombró `agent.md` a `AGENTS.md`.
- No se publicaron cifras, testimonios ni métricas sin respaldo; los nombres de clientes se publicaron con permiso explícito.

### Verificación tras el cierre de datos
- `npx tsc --noEmit`, `npm run lint` y `npm run build` ejecutados de nuevo: sin errores y 42 rutas generadas (se eliminó `/api/contact`).
- Eliminada la dependencia `resend`; `npm audit` sigue en 0 vulnerabilidades.
- Creada plantilla `.env.example` (permitida en Git mediante excepción en `.gitignore`); las credenciales reales van en `.env.local`.

### Corrección de errores de consola
- Los 6 servicios estáticos usaban `params`/`generateStaticParams` como si fueran rutas dinámicas; en `next dev` eso dejaba `slug` vacío y `notFound()` devolvía 404. Ahora usan la constante `SLUG` directamente.
- Agregado `data-scroll-behavior="smooth"` en `<html>` para evitar el warning de Next.js.
- Los iconos Material Symbols no cargaban porque `.material-symbols-outlined` no definía `font-family`; se agregó `@font-face` con `public/fonts/material-icons-outlined.woff2` (152 KB). Se cambiaron `deployed_code` → `code` e `instagram` → `photo_camera` porque no existen en esa fuente estática.
- Corregido el warning de Next/Image: las imágenes del logo ya no fijan `width`/`height` manualmente; usan clases `h-* w-auto` para conservar proporción. Quitado `priority` del logo del simulador de WhatsApp (fuera del viewport).
- `StructuredData` usa ahora `next/script` para evitar el error de `<script>` dentro de componentes React.
- Verificación: `npm run build && npx tsc --noEmit && npm run lint` sin errores (42 rutas); las 6 rutas de servicios responden 200 en `next dev`; prueba con Chrome headless sin errores ni warnings de consola y fuente de iconos cargada.

### Sitemap para Search Console
- `src/app/sitemap.ts` genera `https://kinetixsistemas.com/sitemap.xml` con 32 URLs canónicas (home, servicios, portafolio, demos, blog, páginas corporativas y legales).
- `lastmod` de cada artículo usa `publishedTime`; el resto usa la fecha de build. Prioridades y `changefreq` diferenciadas por sección; `hreflang es-VE` en cada entrada.
- `robots.txt` ya referencia el sitemap. Para enviarlo: Search Console → Sitemaps → `sitemap.xml`.
