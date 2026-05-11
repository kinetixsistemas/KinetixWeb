
export interface Project {
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
    span: string;
    tags?: string[];
}

const projects: Project[] = [
    {
        title: "Plataforma de E-commerce Pro",
        description: "Implementación de un ecosistema de ventas escalable con integración de pasarelas de pago globales y gestión de inventario en tiempo real.",
        category: "E-commerce",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDReePHOetEzvvMlX4XU6YftbHO6p5G3WDOW1DM_HdgBot6LhlhmZlr0VIjB18G1rLodcwh-uav8WiKFNYTXPuT660XrxLRTvAM9ubUYpM4JcieNcVjORNu9BsSX5fpYPTxTNDn4ooVorFVNbXMivf8JIksFHQgTP0RBxWE9o3t4MGyAJM7levFwQcRziWTI9dphVCMvGGUtsWTXpXW7WciExLqRn--64rsuHec7nWpj-O73-7KQdktP5_rPNjnY6AS4cgtDndb9IWk",
        link: "/portfolio/ecommerce",
        span: "md:col-span-8",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
        title: "Automatización de Flujos",
        description: "Orquestación de procesos complejos para logística internacional utilizando n8n y modelos de IA para predicción de rutas.",
        category: "Logistics (n8n)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnxArVbKkgNcPfg0TqtOuq2jHkGymZzdmOO5kpO0bdO98CbSNYimvSh8cVsnZNc9z-vjR7OHLH2IHeF6m-Vy9kKS4gGOmcfXnSKSCTbtTh42ay5ijEuHThvtNWmrZNDxJI-7rn_r0Agge3fgxhWrOKMbEIruNXIkH7HUdKPTvPXY6FA1z0-BbBFz8x6eco0EvmJMEvTUyHm4tdEhlzjbjoqU7F6uU2HbZPGXNzIh5JbXDp5praPGqPATjwjPWjSAt0JbCQsBfPxZiV",
        link: "/portfolio/automation",
        span: "md:col-span-5",
        tags: ["n8n", "Python", "OpenAI"],
    },
    {
        title: "Interfaz para Servicios",
        description: "Aplicación móvil nativa diseñada para la gestión ágil de servicios en campo, con sincronización offline y geolocalización avanzada.",
        category: "Service Provider App",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3isX11qOMmk8WvFg00Bz5pKfW1y-EYaRZUFm72wae_iD1NtpbrD4wvBeioWiWEkUUfd6eMt-qlQLZ3eiYlPBmrwgy5qDWxOIf20m9_krt-G6NeEcIwrHyDnhEXuQrjnRpN6Qg5ruWNLT7g7GvPY8j7GJPRs8uSUWDt_G_1wKRPjaGZS2cnxhOlgGqKk41lmqMSCfJcgpQx1tqB3sDhQRqjQqeIwsM6nCiyqE3KrZwTkbZPe_mTewWoCKUoEyxBr8FZPWz0Xy4R_4",
        link: "/portfolio/mobile-app",
        span: "md:col-span-7",
        tags: ["React Native", "Node.js", "MongoDB"],
    }
];

export { projects }