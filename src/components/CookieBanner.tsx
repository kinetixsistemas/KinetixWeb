'use client';

import Link from 'next/link';
import { useEffect, useState, startTransition } from 'react';
import { CONSENT_KEY, getConsent } from '../lib/analytics';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [ configuring, setConfiguring] = useState(false);
  const [ analytics, setAnalytics] = useState(true);

  useEffect(() => {
    startTransition(() => setVisible(getConsent() === null));
  }, []);

  const save = (choice: 'accepted' | 'rejected') => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      setVisible(false);
    }
    window.dispatchEvent(new Event('kinetix-consent-change'));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 shadow-xl md:bottom-6"
    >
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        Usamos cookies para medir el tráfico y mejorar la experiencia. Ninguna herramienta de analítica se activa
        antes de tu decisión. Puedes aceptar, rechazar o configurarlas. Más información en{' '}
        <Link href="/cookies" className="font-semibold text-[var(--primary)] underline">
          Cookies
        </Link>{' '}
        y{' '}
        <Link href="/privacidad" className="font-semibold text-[var(--primary)] underline">
          Privacidad
        </Link>
        .
      </p>

      {configuring && (
        <label className="mt-4 flex items-center gap-3 text-sm text-[var(--text-primary)]">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
            className="h-4 w-4 accent-[var(--emerald)]"
          />
          Permitir cookies de analítica y medición
        </label>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => save(analytics ? 'accepted' : 'rejected')}
          className="rounded-full bg-[var(--emerald)] px-5 py-2.5 text-sm font-bold text-[#04120c] hover:bg-[var(--emerald-hover)]"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => save('rejected')}
          className="rounded-full border border-[var(--surface-border)] px-5 py-2.5 text-sm font-bold text-[var(--text-primary)] hover:border-[var(--emerald)]"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={() => setConfiguring((value) => !value)}
          className="rounded-full px-5 py-2.5 text-sm font-bold text-[var(--text-secondary)] underline"
        >
          Configurar
        </button>
      </div>
    </div>
  );
}
