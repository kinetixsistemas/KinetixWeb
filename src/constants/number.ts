// config/constants.ts

export const CONTACT_INFO = {
    whatsapp: "584125353950",
    message: "Hola Kinetix Sistemas, me gustaría solicitar una consultoría.",
};

// Función útil para generar el link de WhatsApp automáticamente
export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.message)}`; ``