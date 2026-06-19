# Sistemas Kinetix - Plataforma Web 🚀

**Sistemas Kinetix** es una agencia tecnológica especializada en Inteligencia Artificial, Automatización de Procesos y Desarrollo de Software a medida. Este repositorio contiene la plataforma web principal, construida con las últimas tecnologías para garantizar alto rendimiento, escalabilidad y un diseño de vanguardia (Engineering Precision).

## 🛠 Tecnologías Principales

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconografía:** [Lucide React](https://lucide.dev/) / Material Symbols
- **Correos Transaccionales:** [Resend](https://resend.com/)

## ✨ Características Clave

- **Diseño Moderno y Responsivo:** Implementación de un sistema de diseño propio basado en variables CSS, con efectos *Glassmorphism*, temas adaptables y micro-interacciones.
- **Formularios Dinámicos e Híbridos:** Sistema de captura de *leads* conectado a la API interna que envía notificaciones por correo electrónico a través de **Resend** y realiza redirección inteligente a WhatsApp de manera asíncrona.
- **Animaciones Fluidas:** Transiciones suaves, apariciones escalonadas y efectos de scroll potenciados por Framer Motion para una experiencia *premium*.
- **Arquitectura Escalable:** Estructura modular basada en el App Router de Next.js, separando lógica, presentación y manejo de APIs.
- **SEO Optimizado:** Metadatos avanzados configurados de forma nativa para mejorar la visibilidad orgánica.

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos

- Node.js 18.17 o superior
- npm, pnpm o yarn

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd kinetixpage
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del directorio con las siguientes credenciales (necesarias para el funcionamiento del formulario de contacto):
   ```env
   RESEND_API_KEY=tu_api_key_de_resend_aqui
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la web. Los cambios se actualizarán automáticamente.

## 📁 Estructura del Proyecto

```text
src/
├── app/                  # Enrutador principal (App Router)
│   ├── (public)/         # Grupo de rutas para páginas públicas (contacto, servicios, etc.)
│   ├── api/              # Rutas de la API de Next.js (backend serverless)
│   ├── globals.css       # Sistema de diseño base, tokens globales y Tailwind v4
│   └── layout.tsx        # Estructura principal y configuración de tipografías
├── components/           # Componentes de UI reutilizables (Navbar, Footer, Pricing, etc.)
├── constants/            # Datos estáticos de configuración (precios, FAQs, características)
└── hooks/                # Hooks personalizados de React
```

## 🌐 Despliegue

La plataforma está optimizada para ser desplegada sin fricción en [Vercel](https://vercel.com).

1. Haz push de tus cambios a la rama principal (GitHub, GitLab, etc.).
2. Importa el proyecto desde el panel de Vercel.
3. Asegúrate de añadir la variable de entorno `RESEND_API_KEY` en la configuración del proyecto.
4. Vercel se encargará de construir y desplegar la aplicación automáticamente.

## 📞 Contacto y Soporte

- **Email Oficial:** kinetixsistemas@gmail.com
- **Ubicación:** Barquisimeto, Edo. Lara, Venezuela

---
*© 2024 Sistemas Kinetix. Engineering Precision.*
