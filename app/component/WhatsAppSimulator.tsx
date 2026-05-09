"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

const WhatsAppSimulator = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! 👋 ¿En qué puedo ayudarte hoy?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const MAX_MESSAGES = 10;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (userMessageCount >= MAX_MESSAGES) {
      alert("Has alcanzado el límite de 10 mensajes para esta demostración.");
      return;
    }

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      time: timeString
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    setUserMessageCount((prev) => prev + 1);

    try {
      const apiMessages = [...messages, newUserMessage].map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error en la respuesta de la API');
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Error: ${error.message}. Por favor verifica la configuración.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="py-24 px-6 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left: Copy */}
          <div className="md:col-span-6">
            <div className="badge badge-emerald mb-5">
              <span className="material-symbols-outlined text-[14px]">smart_toy</span>
              Demo Interactivo
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-5 leading-tight">
              WhatsApp{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--emerald) 0%, #00a07a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Agent
              </span>{" "}
              Simulator
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              Experimenta cómo nuestros agentes de IA personalizados gestionan consultas de clientes,
              soporte técnico y programación automatizada directamente en el ecosistema de WhatsApp.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "chat_bubble",
                  title: "Procesamiento de Lenguaje Natural",
                  desc: "Conversaciones con conciencia de contexto que se sienten humanas y eficientes.",
                },
                {
                  icon: "sync_alt",
                  title: "Integración CRM",
                  desc: "Sincronización automática de datos con tus herramientas de negocio existentes.",
                },
                {
                  icon: "schedule",
                  title: "Disponibilidad 24/7",
                  desc: "Tu negocio nunca duerme. Respuestas instantáneas a cualquier hora del día.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={icon} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-200 border border-transparent hover:border-[var(--surface-border)] group">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--emerald)]"
                    style={{ background: "var(--emerald-light)" }}
                  >
                    <span className="material-symbols-outlined text-[var(--emerald)] text-[18px] group-hover:text-white transition-colors">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">{title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute -inset-8 rounded-full -z-10 opacity-40"
                style={{
                  background: "radial-gradient(ellipse, rgba(0,199,143,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Phone frame */}
              <div className="w-[300px] h-[620px] rounded-[40px] border-[8px] border-[var(--bg-dark)] bg-[var(--bg-dark)] shadow-2xl relative overflow-hidden flex flex-col"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.1)" }}
              >
                {/* Status bar */}
                <div className="bg-[var(--bg-dark)] h-6 flex items-center justify-between px-5">
                  <span className="text-[10px] text-white/60 font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-white/60 text-[12px]">signal_cellular_alt</span>
                    <span className="material-symbols-outlined text-white/60 text-[12px]">battery_5_bar</span>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="p-4 flex items-center gap-3" style={{ background: "#075E54" }}>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#075E54] text-[18px]">smart_toy</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Kinetix AI Agent</div>
                    <div className="text-white/70 text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[var(--emerald)] rounded-full" />
                      en línea
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-white/80 text-[18px]">videocam</span>
                    <span className="material-symbols-outlined text-white/80 text-[18px]">call</span>
                  </div>
                </div>

                {/* Chat Area */}
                <div
                  ref={chatContainerRef}
                  className="flex-grow p-4 space-y-3 overflow-y-auto"
                  style={{
                    background: "#E5DDD5",
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4bdb5' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                >
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`p-2.5 rounded-xl shadow-sm max-w-[85%] ${msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm bg-white'
                          }`}
                        style={msg.role === 'user' ? { background: "#DCF8C6" } : undefined}
                      >
                        <p className="text-[11px] text-gray-800 leading-relaxed whitespace-pre-wrap">
                          {msg.content}
                        </p>
                        <div className={`flex items-center gap-1 mt-1 ${msg.role === 'user' ? 'justify-end' : 'justify-end'}`}>
                          <span className="text-[9px] text-gray-400">{msg.time}</span>
                          {msg.role === 'user' && (
                            <span className="material-symbols-outlined text-[#4FC3F7] text-[12px]">done_all</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-2.5 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
                        <div className="flex space-x-1 items-center h-4">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <div className="p-2 flex items-center gap-2 relative z-20" style={{ background: "#F0F0F0" }}>
                  {userMessageCount === 0 && inputValue.length === 0 && (
                    <div
                      className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] font-medium px-4 py-2.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] animate-bounce flex items-center gap-2 pointer-events-none whitespace-nowrap border border-white/10"
                      style={{ animationDuration: '2.5s' }}
                    >
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                      </span>
                      ¡Escribe un mensaje para probar la IA!
                      {/* Triangle pointer pointing down */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 border-b border-r border-white/10 rotate-45"></div>
                    </div>
                  )}

                  <span className="material-symbols-outlined text-gray-500 text-[20px] cursor-pointer">add_circle</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={userMessageCount >= MAX_MESSAGES || isLoading}
                    placeholder={userMessageCount >= MAX_MESSAGES ? "Límite alcanzado" : "Escribe un mensaje..."}
                    className="flex-grow bg-white rounded-full px-4 py-2 text-[11px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#25D366] disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading || userMessageCount >= MAX_MESSAGES}
                    className="w-9 h-9 flex items-center justify-center rounded-full disabled:opacity-50 transition-opacity cursor-pointer flex-shrink-0 shadow-sm"
                    style={{ background: "#25D366" }}
                  >
                    <span className="material-symbols-outlined text-white text-[16px] ml-1">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppSimulator;
