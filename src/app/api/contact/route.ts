import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializamos Resend con la API Key guardada en variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, empresa, servicio, mensaje } = body;

        // Validación básica de campos requeridos
        if (!nombre || !servicio || !mensaje) {
            return NextResponse.json(
                { success: false, error: "Faltan campos obligatorios estructurales." },
                { status: 400 }
            );
        }

        // Enviamos el correo usando el SDK de Resend
        const data = await resend.emails.send({
            // NOTA: Mientras estés usando el dominio gratuito de prueba de Resend, 
            // solo puedes enviar correos DESDE "onboarding@resend.dev" 
            // y HACIA el correo con el que te registraste en Resend.
            from: 'Sistemas Kinetix Web <onboarding@resend.dev>',
            to: ['kinetixsistemas@gmail.com'], // Coloca aquí tu correo verificado de Resend
            subject: `🚀 Solicitud de Proyecto de ${nombre} - ${servicio}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #00193c1a; padding: 30px; border-radius: 16px; color: #00193c;">
          <h2 style="color: #00193c; border-b: 1px solid #00193c1a; padding-bottom: 10px; font-size: 20px;">
            🚀 Nuevo Lead Capturado — Sistemas Kinetix
          </h2>
          <p style="margin-top: 20px;">Un usuario ha enviado requerimientos desde el formulario de la landing page:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #5d5e63;">Nombre:</td>
              <td style="padding: 8px 0;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #5d5e63;">Empresa:</td>
              <td style="padding: 8px 0;">${empresa || 'Particular / No especificada'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #5d5e63;">Servicio:</td>
              <td style="padding: 8px 0; color: #00b171; font-weight: bold;">${servicio}</td>
            </tr>
          </table>
          
          <div style="margin-top: 25px; background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #00193c0d;">
            <p style="margin: 0; font-weight: bold; color: #5d5e63; font-size: 12px; text-transform: uppercase; tracking: 0.05em; margin-bottom: 8px;">
              Detalles del Proyecto / Mensaje:
            </p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-line;">${mensaje}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #00193c1a; margin-top: 30px; margin-bottom: 20px;" />
          <p style="font-size: 11px; color: #5d5e63; text-align: center; margin: 0;">
            Infraestructura Core de Automatización de Sistemas Kinetix • Uptime 99.9%
          </p>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error: any) {
        console.error("Error crítico procesando Resend:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}