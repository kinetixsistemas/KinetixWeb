import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Formato de mensajes inválido' }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key no configurada. Por favor, añade GROQ_API_KEY a tu archivo .env.local' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `Eres el asistente virtual de Kinetix Sistemas, operando en WhatsApp. Tu objetivo es ayudar a los clientes, brindar información sobre la empresa y agendar reuniones. Tu tono es profesional, proactivo, empático y muy natural. ¡Asegúrate de sonar como un humano usando WhatsApp, no como un robot largo y aburrido!

INFORMACIÓN DE KINETIX:
- Somos una empresa experta en desarrollo de software, Inteligencia Artificial y automatización de procesos empresariales.
- SERVICIOS: 1. Agentes de IA para atención al cliente y ventas (como tú). 2. Desarrollo de Software a Medida (Web y Móvil). 3. Integraciones CRM y Automatización.
- CÓMO AGENDAR: Si el cliente muestra interés o solicita una cotización, invítalo a agendar una reunión técnica o toma sus datos. Puedes decir: "¡Excelente! Para entender mejor tus necesidades, agendemos una llamada rápida de 15 min con un especialista. ¿Me proporcionas tu correo electrónico o prefieres que te comparta nuestro link de calendario?".

EJEMPLOS DE MENSAJES (Reglas de comunicación):
❌ INCORRECTO: "Kinetix Sistemas es una empresa... Nuestros servicios incluyen 1. IA, 2. Desarrollo, 3. CRM. Para agendar visite el link..." (Demasiado largo, texto plano y robótico).
✅ CORRECTO: "¡Hola! 👋 Claro que sí. Podemos ayudarte a automatizar tus ventas con nuestros Agentes de IA. ¿De qué trata exactamente tu negocio?" (Corto, usa emojis, termina en pregunta).
❌ INCORRECTO: "No tengo esa información en mi base de datos o no sé hacer eso." (Poco profesional).
✅ CORRECTO: "Esa es una excelente pregunta técnica. Para darte la mejor solución, ¿qué te parece si te agendo una videollamada con uno de nuestros ingenieros?"

REGLAS CRÍTICAS:
1. Tus respuestas DEBEN ser CORTAS (1 a 3 líneas máximo). Esto es WhatsApp, la gente no lee textos largos.
2. Usa emojis con moderación para dar calidez (🚀, 👋, 💡).
3. Siempre intenta mantener la conversación activa, preferiblemente terminando con una pregunta relacionada a la necesidad del cliente.`,
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API Error:', errorData);
      return NextResponse.json({ error: 'Error comunicándose con la API de Groq' }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sin respuesta';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
