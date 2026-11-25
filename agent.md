# agent.md — Reestructuración de la web de Kinetix Sistemas

> Instrucciones para el agente de programación (OpenCode). Léelo completo antes de tocar código.
> Los campos marcados **[CONFIRMAR]** los debe llenar el dueño. **Nunca los inventes.**

---

## 0. Cómo trabajar (reglas del agente)

1. **Primero audita, después cambia.** Lee la estructura del repo (`app/` o `src/app/`, componentes, estilos, config) y resume lo que encontraste antes de modificar nada.
2. **Trabaja por fases** (sección 12). Termina una fase, ejecuta `npm run build` y `npm run lint`, guarda en emgran el progreso y reporta antes de pasar a la siguiente.
3. **No borres contenido ni rutas existentes** sin listarlos antes. Si una ruta cambia, crea la redirección 301 en `next.config`.
4. **No inventes datos.** Sin cifras, clientes, testimonios, precios, direcciones ni años de experiencia que no estén en este archivo. Si falta un dato, deja un marcador `[CONFIRMAR]` visible en el código (comentario) y un texto neutro en la página.
5. **Un solo origen de verdad.** Datos del sitio (WhatsApp, correo, redes, dominio) en `config/site.ts`. Servicios en `content/services.ts`. Casos en `content/cases.ts`. Precios en `content/pricing.ts`. Preguntas frecuentes en `content/faqs.ts`. Ningún dato duplicado en componentes.
6. Mantén **TypeScript estricto**, componentes de servidor por defecto y `"use client"` solo donde haga falta (simulador, menú móvil, banner de cookies, formularios).
7. Mantén la identidad visual existente (colores, tipografías, logo) salvo que se indique lo contrario. No rediseñes por gusto.
8. Al terminar cada fase entrega: lista de archivos cambiados, qué se arregló, qué quedó pendiente y qué datos **[CONFIRMAR]** faltan.

---

## 1. Qué es Kinetix Sistemas

- **Nombre completo siempre: "Kinetix Sistemas".** Evita escribir solo "Kinetix": existen otras empresas con ese nombre (por ejemplo, una línea de productos industriales de Rockwell Automation) y confunde a Google y a las IAs.
- Agencia de desarrollo de software, páginas web y automatizaciones, ubicada en **Barquisimeto, estado Lara, Venezuela**.
- Dominio: `kinetixsistemas.com` (URL canónica). Correo: `kinetixsistemas@gmail.com`.
- Mercado objetivo: negocios hispanohablantes, empezando por Venezuela.
- Redes: Instagram, TikTok y Facebook **[CONFIRMAR usernames/URLs]**.
facebook: https://www.facebook.com/profile.php?id=61593193320097
instagram: https://www.instagram.com/kinetixsistemas/
tiktok: https://www.tiktok.com/@kinetixsistemas
- Stack del sitio: Next.js, TypeScript, Tailwind CSS, desplegado en Vercel.

## 2. Objetivo del sitio

1. **Convertir visitas en conversaciones de WhatsApp** o solicitudes de cotización calificadas.
2. **Posicionar (SEO) y ser citado por IAs (GEO)** para: desarrollo web, sistemas de inventario y ventas, sistemas para clínicas odontológicas, páginas de repuestos al mayor, plataformas B2B mayoristas y automatización con IA en Venezuela.
3. **Medir** de dónde llegan las visitas, qué buscan y qué pulsan.
4. Transmitir **confianza real** con trabajos reales, sin cifras infladas.

---

## 3. Servicios (lo que se ofrece)

Cada servicio tiene su propia página (sección 5). Orden de importancia en la home:

| # | Servicio | Slug | Para quién |
|---|----------|------|------------|
| 1 | Sistema para clínicas odontológicas | `sistema-clinicas-odontologicas` | Odontólogos y clínicas (historia clínica, odontograma, periodontograma, presupuestos, pagos, agenda) |
| 2 | Sistemas PWA de inventario y ventas | `sistemas-pwa-inventario-ventas` | Comercios y distribuidores que hoy usan Excel o cuaderno; uso principalmente desde el móvil, tablet y pc |
| 3 | Plataforma B2B mayorista (web + sistema interno) | `plataforma-b2b-mayorista` | Distribuidores con vendedores y clientes al mayor: roles administrador, vendedor y cliente; el cliente ve el inventario disponible y compra al mayor |
| 4 | Desarrollo de páginas web | `desarrollo-web` | Landing pages y sitios corporativos, con SEO y analítica |
| 5 | Automatización con IA e integraciones | `automatizacion-ia-whatsapp` | Agentes de WhatsApp, flujos con n8n, integraciones entre sistemas |

Datos reales utilizables (no agregues otros):
- Landing y sitios web: entrega en **3 a 5 días**, incluye contrato, compra de dominio y ajuste de SEO básico.
- Automatización: n8n, Evolution API (WhatsApp Business API) y Cloud API de Meta, modelos de lenguaje.
- Stack: Next.js, React, TypeScript, Tailwind, Supabase/PostgreSQL, Python, Docker, Vercel.
- Demo odontología publicada: `https://demodonto.kinetixsistemas.com/`.

### Trabajos construidos (candidatos para el portafolio)

> Para publicar el **nombre de la pagina, capturas o métricas** de cada caso hace falta permiso del cliente **[CONFIRMAR por caso]**. Si no hay permiso, publícalo de forma anónima ("Distribuidora de repuestos de motos en Venezuela").

| Caso | Tipo | Estado |
|------|------|--------|
| Distribuidora Súper Carabobo (`distribuidorasupercarabobo.com`) | E-commerce / panel administrativo, ventas, lista de precios, historial de ventas, inventario | Ya aparece en la web **[CON permiso]** |
| VTR Import C.A. | Sitio web de venta al mayor de repuestos, cauchos, cascos, accesorios, carrocería y baterías de motos | **[CON permiso y estado pendiente a publicar]** |
| Sistema de inventario y facturación (ERP ligero) | Sistema para cliente en Venezuela | **[CON permiso]** |
| Sistema de gestión logística de transporte | Camiones, viajes, viáticos, pagos a choferes | **[CON permiso]** |
| Sistema de gestión para consultorio odontológico | Historia clínica, odontograma, presupuestos, agenda | **[CON permiso]**; y  usar la **demo pagina web públicada** |
| Agente de WhatsApp con IA (n8n + Evolution API) | Automatización | Mostrar como demo/simulador, no como cliente |

Plantilla de cada caso: contexto del cliente → problema → qué construimos → tecnología → resultado **solo si es medible y real** → captura → enlace (si es público).

---

## 4. Reglas de contenido y tono

- Idioma: español de Venezuela (`es-VE`). Trato de **tú**, profesional y cercano. Frases cortas. Sin jerga técnica en titulares.
- Habla del **problema del cliente primero** y de la tecnología después. Ejemplo bueno: "Responde a tus clientes de WhatsApp a cualquier hora y no pierdas más ventas". Ejemplo malo: "Transformamos tu negocio con IA de vanguardia".
- **Prohibido:** "50+ proyectos", "+50 empresas confían en nosotros", "99.9% uptime", "3x más rápido", "+40% eficiencia", "90% tiempo ahorrado", "0% error humano", "45% reducción en latencia", "automatización industrial" y cualquier cifra sin respaldo. Elimina todas las que existen hoy.
- Prohibido el relleno corporativo ("soluciones de vanguardia", "escalabilidad sin límites", "empresas que quieren liderar").
- Cada página responde en sus primeras 2 líneas: **qué es, para quién y qué logra** (formato "respuesta primero", útil para Google y para IAs).
- El asistente del simulador se llama **"Kinetix"** o "Asistente Kinetix Sistemas" (hoy dice "Kinex": corregir).
- Los precios solo vienen de `content/pricing.ts`. Plantilla inicial (confirmar antes de publicar):
  - Start Conversion: **desde $149** [CONFIRMAR]
  - Business Pro: **desde $249** [CONFIRMAR]
  - Elite Corporate: **desde $499** [CONFIRMAR]
  - Sistemas, plataformas B2B y automatizaciones: **"Cotización personalizada"** (sin precio publicado).

---

## 5. Arquitectura de la web (nueva estructura)

```
/                                         Home
/servicios                                Hub de servicios
/servicios/sistema-clinicas-odontologicas
/servicios/sistemas-pwa-inventario-ventas
/servicios/plataforma-b2b-mayorista
/servicios/paginas-repuestos-al-mayor
/servicios/desarrollo-web
/servicios/automatizacion-ia-whatsapp
/portafolio                               Lista de casos
/portafolio/[slug]                        Caso individual
/demos                                    Demo odontología, simulador de WhatsApp, otros
/blog                                     Lista de artículos
/blog/[slug]                              Artículo
/nosotros                                 Quiénes somos
/cotizar                                  Formulario corto → WhatsApp
/contacto                                 Datos de contacto
/desarrollo-web-barquisimeto              Página local (contenido real y único)
/privacidad  /terminos  /cookies  /descargo   Legales
/sitemap.xml  /robots.txt  /llms.txt
```

Redirecciones 301 desde las rutas actuales: `/about → /nosotros`, `/contacto` se mantiene, `/servicios/automatizacion → /servicios/automatizacion-ia-whatsapp`, `/servicios/desarrollo-web` se mantiene, `/portfolio → /portafolio`.

Reglas de arquitectura:
- **Máximo 3 clics** desde la home a cualquier servicio o caso.
- Navegación principal: Servicios (desplegable con los 6) · Portafolio · Demos · Blog · Nosotros · botón **"Cotizar por WhatsApp"**.
- Pie de página: columnas Servicios (6 enlaces reales, cada uno a su página), Empresa, Legal, Contacto. **Cero enlaces a `#`.**
- Cada página de servicio enlaza a 2 servicios relacionados, a un caso o demo y a `/cotizar`.
- No crees páginas locales duplicadas por ciudad con el mismo texto cambiando el nombre. Solo `/desarrollo-web-barquisimeto` con contenido propio, y otras ciudades más adelante solo si hay información local real.

### Home (`/`), orden de secciones

1. **Hero.** H1: "Software, páginas web y automatización para negocios en Venezuela". Subtítulo: una línea que nombre sistemas de inventario y ventas, software para clínicas dentales y agentes de WhatsApp. CTA primario "Cotizar por WhatsApp"; secundario "Ver demos". Sin estadísticas inventadas.
2. **Qué hacemos:** 6 tarjetas, una por servicio, cada una enlaza a su página.
3. **Para quién trabajamos:** clínicas odontológicas · distribuidores y repuestos al mayor · comercios con inventario · negocios que venden por WhatsApp.
4. **Trabajos y demos reales** (3 tarjetas máximo: demo odontología, caso e-commerce/inventario, simulador de WhatsApp).
5. **Cómo trabajamos:** Diagnóstico → Diseño → Desarrollo → Lanzamiento y soporte (texto breve y real).
6. **Por qué Kinetix Sistemas:** solo diferenciadores verificables (construimos sistemas completos y no solo páginas; atención directa en español; estamos en Barquisimeto; entregas en 3 a 5 días para webs).
7. **Preguntas frecuentes** (5 a 6, con esquema FAQ).
8. **CTA final** a WhatsApp y `/cotizar`.

### Plantilla de cada página de servicio

1. H1 con la palabra clave principal.
2. **Resumen "respuesta primero"** (40 a 60 palabras: qué es, para quién, qué resuelve).
3. Problema que resuelve (3 a 4 puntos, en lenguaje del cliente).
4. Qué incluye (lista concreta de módulos o entregables).
5. Cómo funciona (pasos y tiempos reales).
6. Demo o caso real, o aviso honesto "Demo disponible bajo solicitud".
7. Precio orientativo (solo si está en `pricing.ts`) o "Cotización personalizada".
8. FAQ de 5 a 7 preguntas reales de clientes.
9. Servicios relacionados + CTA.

### Contenido específico de los servicios clave

- **Clínicas odontológicas:** historia clínica, odontograma, periodontograma, presupuestos, pagos y agenda; opcionalmente recordatorios por WhatsApp. Enlazar a la demo `https://demodonto.kinetixsistemas.com/`.
- **Plataforma B2B mayorista:** una web pública conectada a un sistema interno con **tres roles**: *administrador* (inventario, precios, usuarios, reportes), *vendedor* (pedidos, clientes, cotizaciones) y *cliente mayorista* (ve el inventario disponible y compra al mayor). Explicar el flujo pedido → aprobación → despacho.
- **Páginas de repuestos al mayor:** catálogo por categoría y marca, lista de precios al mayor, solicitud de pedido por WhatsApp, páginas por categoría pensadas para SEO.
- **PWA inventario y ventas:** instalable en el móvil, funciona con mala conexión, inventario, clientes, ventas/facturación y cobranza. Aclarar qué es una PWA en una frase.
- **Automatización:** agentes de WhatsApp que atienden, filtran y califican prospectos; flujos n8n e integraciones con CRM, hojas de cálculo y sistemas propios. Mantener el simulador de WhatsApp en esta página.

---

## 6. SEO técnico (obligatorio)

**Metadatos únicos por página** con la Metadata API de Next.js (`generateMetadata`). Título ≤ 60 caracteres, descripción ≤ 155. Plantillas:

| Ruta | Title | Description |
|------|-------|-------------|
| `/` | Kinetix Sistemas \| Software, web y automatización en Venezuela | Agencia en Barquisimeto: páginas web, sistemas de inventario y ventas, software para clínicas dentales y automatización con IA en WhatsApp. |
| `/servicios/desarrollo-web` | Desarrollo de páginas web en Venezuela \| Kinetix Sistemas | Landing pages y sitios corporativos rápidos, con SEO y WhatsApp integrado. Entrega en 3 a 5 días. |
| `/servicios/sistemas-pwa-inventario-ventas` | Sistemas PWA de inventario y ventas \| Kinetix Sistemas | Controla inventario, ventas y cobranza desde el móvil. Sistema a la medida de tu negocio. |
| `/servicios/sistema-clinicas-odontologicas` | Sistema para clínicas odontológicas \| Kinetix Sistemas | Historia clínica, odontograma, presupuestos, pagos y agenda en un solo sistema para tu consultorio. |
| `/servicios/paginas-repuestos-al-mayor` | Página web para venta de repuestos al mayor \| Kinetix Sistemas | Catálogo, precios al mayor y pedidos por WhatsApp para distribuidoras e importadoras. |
| `/servicios/plataforma-b2b-mayorista` | Plataforma B2B mayorista con inventario en línea \| Kinetix Sistemas | Web y sistema interno con roles de administrador, vendedor y cliente para vender al mayor. |
| `/servicios/automatizacion-ia-whatsapp` | Automatización con IA y agentes de WhatsApp \| Kinetix Sistemas | Agentes de WhatsApp que atienden y califican clientes, y flujos que conectan tus herramientas. |

Resto de páginas: mismo patrón "tema + Kinetix Sistemas", sin duplicados.

Checklist técnico:
- [ ] Un solo `<h1>` por página; jerarquía H2/H3 lógica.
- [ ] `metadataBase` con `https://kinetixsistemas.com`; **canonical** por página que apunte al dominio propio (nunca al `vercel.app`).
- [ ] Open Graph y Twitter Card con **imagen OG 1200x630** (`opengraph-image`) y `locale: es_VE`.
- [ ] Eliminar `meta keywords`.
- [ ] `app/sitemap.ts` dinámico (incluye servicios, casos y artículos) y `app/robots.ts` (permite todo salvo rutas privadas; **enlaza el sitemap**).
- [ ] Los despliegues de preview y `*.vercel.app` con `noindex` (cabecera `X-Robots-Tag` o metadata según `VERCEL_ENV`).
- [ ] Imágenes con `next/image`, `alt` descriptivo y específico, dimensiones fijas, `priority` solo en la imagen principal.
- [ ] Enlaces internos con texto descriptivo (no "link" ni "ver más" solos).
- [ ] Página 404 útil con enlaces a servicios.
- [ ] Core Web Vitals: LCP < 2.5 s en móvil; sin JavaScript innecesario; fuentes con `next/font`.
- [ ] Accesibilidad básica: contraste, `aria-label` en botones de solo icono, foco visible, teclado funcional.

**Datos estructurados (JSON-LD)**, generados desde `config/site.ts` y `content/*`:
- `Organization` + `ProfessionalService` (nombre, URL, logo, correo, teléfono/WhatsApp, `areaServed`, `address` con Barquisimeto, Lara, VE, `sameAs` con las redes).
- `WebSite`.
- `Service` por cada página de servicio.
- `FAQPage` donde haya FAQ visible.
- `BreadcrumbList` en páginas internas.
- `Article` en el blog; `CreativeWork` o `Article` en los casos.
- No marques como `Review`/`aggregateRating` nada que no sea real.

**Palabras clave guía** (úsalas de forma natural, no las repitas en exceso):
desarrollo web Barquisimeto · desarrollo de software Venezuela · sistema de inventario Venezuela · sistema para clínicas odontológicas · software para consultorio dental · página web para odontólogos · página web repuestos al mayor · plataforma B2B mayorista · automatización WhatsApp con IA · chatbot WhatsApp Venezuela · agencia de automatización n8n.

---

## 7. GEO (visibilidad en respuestas de IA)

1. **Respuesta primero** en cada página (sección 5) y definiciones claras ("Una PWA es…", "Un sistema B2B mayorista es…").
2. **FAQs reales**, redactadas como preguntas que haría un cliente ("¿Cuánto tarda un sistema de inventario?", "¿Funciona sin internet?"). Respuestas de 2 a 4 líneas, con datos concretos.
3. **Entidad consistente:** mismo nombre ("Kinetix Sistemas"), misma ubicación, mismo correo y mismo WhatsApp en toda la web, el JSON-LD y las redes.
4. **`/llms.txt`**: resumen en texto plano de quién es Kinetix Sistemas, sus servicios (con enlaces), ubicación, contacto y casos públicos. Opcional `/llms-full.txt`.
5. **`robots.txt`:** permitir rastreadores de búsqueda y de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) **[CONFIRMAR decisión del dueño]**; por defecto, permitir.
6. Contenido con **fecha de publicación y actualización** visibles y autor (`Kinetix Sistemas` o nombre del dueño **[CONFIRMAR]**).
7. Tablas comparativas y listas claras (por ejemplo: "Excel vs sistema de inventario", "Landing vs sitio corporativo"), fáciles de citar.
8. **Blog con intención de búsqueda real.** Artículos iniciales sugeridos:
   - Cómo llevar el inventario de un negocio sin Excel
   - Qué es una PWA y por qué conviene para tu negocio
   - Software para consultorio dental: qué debe incluir
   - Cuánto cuesta una página web en Venezuela
   - Cómo vender al mayor por internet (catálogo B2B)
   - WhatsApp Business API vs WhatsApp normal: diferencias
   - Cómo un agente de IA atiende clientes por WhatsApp
   Cada artículo: 800 a 1.500 palabras, útil, con enlace al servicio relacionado. Crea la estructura y 1 o 2 borradores; no rellenes con texto vacío.

---

## 8. Analítica: saber de dónde vienen y qué hacen

**Consentimiento primero.** Banner de cookies (Aceptar / Rechazar / Configurar). Con **Google Consent Mode v2** en estado denegado por defecto. Ningún script de analítica o publicidad carga antes del consentimiento (excepto lo estrictamente necesario). Enlazar `/cookies` y `/privacidad`.

**Herramientas** (cada una activa solo si existe su variable de entorno. si no esta, dejar para configuarar las):

| Herramienta | Variable | Uso |
|-------------|----------|-----|
| Google Analytics 4 | `NEXT_PUBLIC_GA_ID` | Origen del tráfico, páginas, eventos |
| Google Search Console | verificación por metadata o DNS | Qué buscan en Google, posiciones, indexación |
| Microsoft Clarity | `NEXT_PUBLIC_CLARITY_ID` | Mapas de calor y grabaciones (clics, scroll) |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | Campañas de Instagram y Facebook |
| TikTok Pixel | `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Campañas y tráfico desde TikTok |
| Vercel Analytics y Speed Insights | — | Rendimiento real |
| Google Tag Manager (opcional) | `NEXT_PUBLIC_GTM_ID` | Solo si se decide centralizar etiquetas |

Implementar todo en un único componente `Analytics` cargado con `next/script` (`afterInteractive` o `lazyOnload`).

**Eventos personalizados** (nombres exactos; enviar a GA4 y a los píxeles que correspondan):

| Evento | Cuándo | Parámetros |
|--------|--------|------------|
| `whatsapp_click` | Clic en cualquier botón de WhatsApp | `cta_location`, `page_path`, `service` |
| `quote_form_submit` | Envío del formulario `/cotizar` | `service`, `business_type` |
| `service_card_click` | Clic en tarjeta de servicio | `service` |
| `demo_open` | Abrir una demo | `demo_name` |
| `simulator_message_sent` | Mensaje en el simulador de WhatsApp | — |
| `pricing_view` | Ver la sección de precios | `service` |
| `portfolio_link_click` | Clic a un caso o sitio externo | `case_slug` |
| `scroll_depth` | 25, 50, 75, 90 % | `percent`, `page_path` |
| `outbound_click` | Enlaces salientes | `url` |

**Origen de cada contacto:**
- Capturar `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `referrer` y la página de entrada en `sessionStorage` en la primera visita.
- Los enlaces de WhatsApp se generan con una **función única** `buildWhatsAppLink({ service, source })`, con mensaje prellenado que incluye el servicio de interés y la página, por ejemplo: "Hola Kinetix Sistemas, me interesa *Sistema para clínicas odontológicas* (vi la página: /servicios/sistema-clinicas-odontologicas)".
- Si el formulario `/cotizar` guarda datos, incluir también las UTM guardadas.
- Convenio de UTM para redes: `utm_source=tiktok|instagram|facebook|whatsapp`, `utm_medium=bio|reel|story|ad|mensaje`, `utm_campaign=<tema>`.

**No recopilar datos personales sensibles.** Los términos y la política de privacidad deben mencionar qué se mide y por qué.

---

## 9. Conversión

- **Un solo número de WhatsApp**, definido en `NEXT_PUBLIC_WHATSAPP_NUMBER` y leído desde `config/site.ts`. **Hoy hay dos números distintos y uno parece de relleno (`584241234567`): reemplázalo en todo el sitio.** Número real: `584125353950`.
- Botón flotante de WhatsApp en móvil, sin tapar contenido ni el banner de cookies.
- `/cotizar`: formulario corto (nombre, tipo de negocio, qué necesita [lista de los 6 servicios], presupuesto aproximado opcional, mensaje). Al enviar: guardar o enviar por correo **y** abrir WhatsApp con el resumen. Validación y protección contra spam (honeypot).
- Cada servicio tiene un CTA específico ("Quiero un sistema para mi clínica"), no un genérico "Empieza ahora".
- "Demo gratis de 15 días": no mostrarla hasta que el dueño defina qué incluye y para qué servicio aplica **[CONFIRMAR]**.
- Los enlaces de demo y portafolio llevan **texto descriptivo** ("Ver demo del sistema odontológico"), no "link".

## 10. Confianza y legales

- Enlazar los documentos legales reales: `/privacidad`, `/terminos`, `/cookies`, `/descargo`. El contenido lo aporta el dueño **[CONFIRMAR textos]**; mientras tanto, crear las páginas con la estructura y un aviso de contenido pendiente (no inventar cláusulas legales).
- Página `/nosotros`: historia breve y real, ubicación, forma de trabajo, tecnologías. Foto o nombre del fundador solo si el dueño lo autoriza **[autorizado]**.
- Datos de contacto visibles: WhatsApp, correo, Barquisimeto (Lara, Venezuela). Horario de atención **[confirmado]**.
- Testimonios: solo reales y con permiso. Sin testimonios, no mostrar la sección. utilizar los de google maps

---

## 11. Diseño y rendimiento

- Conservar el estilo actual (tema oscuro tecnológico, logo, tipografías) y mejorar jerarquía y espaciado donde haga falta.
- **Mobile first.** La mayoría del tráfico en Venezuela es móvil y con conexión variable: páginas ligeras, imágenes optimizadas (AVIF/WebP), sin animaciones pesadas.
- Las imágenes remotas de `googleusercontent.com` deben **descargarse y servirse localmente** (carpeta `public/` o `next/image` con archivo local) para no depender de terceros.
- Un solo estilo de iconos y botones. Componentes reutilizables: `Section`, `ServiceCard`, `CaseCard`, `FAQ`, `CTAButton`, `Breadcrumbs`.
- Presupuesto: JavaScript inicial lo más bajo posible; `"use client"` solo en los componentes interactivos.

---

## 12. Fases de trabajo

**Fase 0 — Auditoría (sin cambios).** Mapa de rutas actuales, componentes, dependencias, scripts de analítica existentes, tamaño del bundle. Entregar un resumen.

**Fase 1 — Correcciones críticas.**
- Un solo número de WhatsApp en todo el sitio, vía `config/site.ts` y `buildWhatsAppLink`.
- Eliminar todas las cifras inventadas (sección 4).
- Corregir "Kinex" → "Kinetix".
- Quitar `meta keywords` y la mención a "automatización industrial".
- Arreglar enlaces vacíos (`#`) y los textos "link".
- Metadatos únicos por página, canonical, OG, `noindex` en previews.

**Fase 2 — Estructura y contenido.**
- Crear la arquitectura de la sección 5, con redirecciones 301.
- Archivos `content/` y las 6 páginas de servicio con la plantilla.
- Nueva home según la sección 5.
- Portafolio con casos reales (los **[CONFIRMAR]** quedan ocultos o anónimos hasta que haya permiso).
- `/demos`, `/nosotros`, `/cotizar`, `/contacto`.

**Fase 3 — SEO y GEO técnico.**
- `sitemap.ts`, `robots.ts`, `llms.txt`.
- JSON-LD (sección 6), breadcrumbs, imagen OG.
- Estructura del blog con 1 o 2 borradores.
- `/desarrollo-web-barquisimeto`.

**Fase 4 — Analítica y consentimiento.**
- Banner de cookies con Consent Mode v2.
- Componente `Analytics` y eventos de la sección 8.
- UTM y origen del contacto.
- Instrucciones breves en el README para conectar Search Console y los IDs.

**Fase 5 — Legales y confianza.** Páginas legales enlazadas, `/nosotros` completo, footer final.

**Fase 6 — Rendimiento y QA.** Imágenes locales y optimizadas, Lighthouse móvil, accesibilidad, revisión de enlaces rotos, `build` y `lint` sin errores.

---

## 13. Criterios de aceptación (checklist final)

- [ ] Todas las páginas tienen `title`, `description`, canonical y OG **únicos**.
- [ ] Ninguna cifra o testimonio sin respaldo. Ningún `[CONFIRMAR]` visible para el visitante.
- [ ] Un solo número de WhatsApp en todo el sitio y en el JSON-LD.
- [ ] No quedan enlaces a `#` ni textos "link".
- [ ] Las 6 páginas de servicio existen con la plantilla completa y FAQ.
- [ ] `sitemap.xml`, `robots.txt` y `llms.txt` responden en producción.
- [ ] El JSON-LD valida sin errores en el validador de datos estructurados de Google.
- [ ] Banner de cookies funcional; ningún script de analítica carga antes del consentimiento.
- [ ] Los eventos de la sección 8 aparecen en GA4 (DebugView).
- [ ] Lighthouse móvil: Rendimiento ≥ 90, SEO = 100, Accesibilidad ≥ 95.
- [ ] `npm run build` y `npm run lint` sin errores.
- [ ] Redirecciones 301 verificadas.

---

## 14. Datos pendientes del dueño (completar antes o durante las fases)

1. Número de WhatsApp definitivo y horario de atención.
2. URLs de Instagram, TikTok y Facebook.
3. Permiso para publicar nombre, capturas y resultados de cada caso del portafolio.
4. Precios finales que se publicarán (o confirmar "desde" de la sección 4).
5. Alcance exacto de la automatización de redes sociales y del flujo de la plataforma B2B.
6. Textos legales (privacidad, términos, cookies, descargo).
7. Nombre/foto del fundador en `/nosotros` (opcional).
8. Definición de la oferta "Demo 15 días gratis" (si se mantiene).
9. Permitir o no los rastreadores de IA en `robots.txt`.
10. IDs de GA4, Clarity, Meta Pixel, TikTok Pixel (y GTM, si se usa) y verificación de Search Console.