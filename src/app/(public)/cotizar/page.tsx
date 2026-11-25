'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Section from '../../../components/ui/Section';
import { siteConfig } from '../../../config/site';
import { services } from '../../../content/services';
import { customPricingLabel, displayPrice, webPlans } from '../../../content/pricing';
import { trackEvent } from '../../../lib/analytics';
import { getAttribution } from '../../../lib/attribution';
import { buildWhatsAppLink } from '../../../lib/whatsapp';

interface QuoteFormState {
  nombre: string;
  businessType: string;
  service: string;
  budget: string;
  message: string;
  website: string;
}

type FieldErrors = Partial<Record<keyof QuoteFormState, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const emptyForm: QuoteFormState = {
  nombre: '',
  businessType: '',
  service: '',
  budget: '',
  message: '',
  website: '',
};

const inputClassName =
  'w-full rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--emerald)] focus:ring-2 focus:ring-[var(--emerald)]/20';
const labelClassName = 'block text-sm font-bold text-[var(--text-primary)]';
const errorClassName = 'mt-1.5 text-sm text-[var(--primary)]';

function validate(values: QuoteFormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.nombre.trim()) {
    errors.nombre = 'Escribe tu nombre.';
  }
  if (!values.businessType.trim()) {
    errors.businessType = 'Cuéntanos qué tipo de negocio tienes.';
  }
  if (!values.service) {
    errors.service = 'Elige el servicio que necesitas.';
  }
  if (!values.message.trim()) {
    errors.message = 'Escribe tu mensaje.';
  }

  return errors;
}

export default function CotizarPage() {
  const [form, setForm] = useState<QuoteFormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) {
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setStatusMessage('Revisa los campos marcados antes de enviar.');
      return;
    }

    setStatusMessage('');

    trackEvent('quote_form_submit', {
      service: form.service,
      business_type: form.businessType,
    });

    const details = [
      `Nombre: ${form.nombre.trim()}`,
      `Tipo de negocio: ${form.businessType.trim()}`,
      `Servicio: ${form.service}`,
      `Presupuesto aproximado: ${form.budget || 'No indicado'}`,
      `Mensaje: ${form.message.trim()}`,
    ].join('\n');
    const whatsappMessage = `Hola ${siteConfig.name}, quiero una cotización.\n${details}`;

    const link = buildWhatsAppLink({
      service: form.service,
      source: getAttribution()?.utm_source,
      message: whatsappMessage,
    });
    window.open(link, '_blank', 'noopener,noreferrer');

    setStatus('success');
    setStatusMessage('Abrimos WhatsApp con el resumen. Confirma el mensaje allí para enviarlo.');
    setForm(emptyForm);
  };

  return (
    <main className="bg-[var(--bg-base)]">
      <Section className="pt-12 md:pt-16">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Cotizar' }]} />
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Cotizar</p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
          Cuéntanos qué necesitas
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          Llena este formulario corto. Con esos datos podemos identificar el servicio que te conviene y continuar la
          conversación por WhatsApp.
        </p>
      </Section>

      <Section className="border-t border-[var(--surface-border)] bg-[var(--surface)]">
        <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--emerald)]">Precios de referencia</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {webPlans.map((plan) => (
              <li key={plan.id} className="rounded-2xl border border-[var(--surface-border)] p-4">
                <p className="text-sm font-bold text-[var(--text-primary)]">{plan.name}</p>
                <p className="mt-1 text-lg font-bold text-[var(--primary)]">{displayPrice(plan)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            Sistemas, plataformas B2B y automatizaciones: {customPricingLabel.toLowerCase()}.
          </p>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-base)] p-6 md:p-10"
        >
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Sitio web</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              disabled={status === 'submitting' || status === 'success'}
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              className={`${inputClassName} mt-2`}
              value={form.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <p id="nombre-error" role="alert" className={errorClassName}>
                {errors.nombre}
              </p>
            )}
          </div>

          <div>
            <label className={labelClassName} htmlFor="businessType">
              Tipo de negocio
            </label>
            <input
              id="businessType"
              name="businessType"
              type="text"
              autoComplete="organization"
              required
              disabled={status === 'submitting' || status === 'success'}
              aria-invalid={Boolean(errors.businessType)}
              aria-describedby={errors.businessType ? 'businessType-error' : undefined}
              className={`${inputClassName} mt-2`}
              value={form.businessType}
              onChange={handleChange}
            />
            {errors.businessType && (
              <p id="businessType-error" role="alert" className={errorClassName}>
                {errors.businessType}
              </p>
            )}
          </div>

          <div>
            <label className={labelClassName} htmlFor="service">
              Qué necesita
            </label>
            <select
              id="service"
              name="service"
              required
              disabled={status === 'submitting' || status === 'success'}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${inputClassName} mt-2`}
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              {services.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="service-error" role="alert" className={errorClassName}>
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label className={labelClassName} htmlFor="budget">
              Presupuesto aproximado
            </label>
            <select
              id="budget"
              name="budget"
              disabled={status === 'submitting' || status === 'success'}
              className={`${inputClassName} mt-2`}
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción (opcional)</option>
              <option value="Por definir">Por definir</option>
              <option value="Tengo un monto estimado">Tengo un monto estimado</option>
              <option value="Quiero una cotización">Quiero una cotización</option>
            </select>
          </div>

          <div>
            <label className={labelClassName} htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={status === 'submitting' || status === 'success'}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${inputClassName} mt-2 resize-y`}
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p id="message-error" role="alert" className={errorClassName}>
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--emerald)] px-7 py-3.5 text-sm font-bold text-[#04120c] transition-colors hover:bg-[var(--emerald-hover)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Enviando...' : 'Enviar solicitud'}
          </button>

          {statusMessage && (
            <p
              role={status === 'error' ? 'alert' : 'status'}
              className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)]"
            >
              {statusMessage}
            </p>
          )}

          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Al enviar, aceptas nuestra{' '}
            <Link href="/privacidad" className="font-semibold text-[var(--primary)] underline underline-offset-4">
              política de privacidad
            </Link>
            . También puedes escribirnos desde la{' '}
            <Link href="/contacto" className="font-semibold text-[var(--primary)] underline underline-offset-4">
              página de contacto
            </Link>
            .
          </p>
        </form>
      </Section>
    </main>
  );
}
