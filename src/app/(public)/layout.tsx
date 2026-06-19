import type { Metadata } from "next";
import "../globals.css";

import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Kinetix Sistemas — IA, Automatización & Desarrollo a Medida",
  description:
    "Transformamos tu negocio con soluciones de inteligencia artificial, automatización industrial y desarrollo de software a medida. Escalabilidad y precisión sin límites.",
  keywords: ["inteligencia artificial", "automatización", "software a medida", "n8n", "chatbots IA", "WhatsApp Business API"],
  authors: [{ name: "Kinetix Sistemas" }],
  openGraph: {
    title: "Kinetix Sistemas — IA, Automatización & Desarrollo a Medida",
    description: "Transformamos tu negocio con soluciones de inteligencia artificial, automatización industrial y desarrollo de software a medida.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter + Space Grotesk */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
