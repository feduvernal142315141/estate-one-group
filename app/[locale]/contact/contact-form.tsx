"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact } from "./actions";
import {
  INITIAL_CONTACT_STATE,
  type ContactFormFieldKey,
  type ContactFormState,
} from "@/lib/contact";

/**
 * Contact form client component.
 *
 * Uses React 19 `useActionState` to drive the submit-and-revalidate
 * flow against the server action. The form is uncontrolled — input
 * values persist across error submits via DOM state. On success the
 * form is replaced by a quiet confirmation block.
 *
 * Inputs follow DESIGN.md > Inputs (light surface boxed style).
 * Submit is the brand-red primary CTA; the only red on the page.
 */
export function ContactForm({
  refSlug,
  refTitle,
}: {
  refSlug: string | null;
  refTitle: string | null;
}) {
  const t = useTranslations("contact.form");

  const [state, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(submitContact, INITIAL_CONTACT_STATE);

  if (state.status === "success") {
    return <SuccessState refTitle={refTitle} />;
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {refTitle && (
        <div className="border border-neutral-200 bg-off-white-soft px-5 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {t("aboutResidence")}
          </p>
          <p className="mt-1.5 text-[14px] font-medium text-charcoal">
            {refTitle}
          </p>
        </div>
      )}

      <input type="hidden" name="ref" value={refSlug ?? ""} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          name="name"
          label={t("nameLabel")}
          required
          autoComplete="name"
          error={state.fieldErrors.name}
        />
        <Field
          name="email"
          type="email"
          label={t("emailLabel")}
          required
          autoComplete="email"
          error={state.fieldErrors.email}
        />
      </div>

      <Field
        name="phone"
        type="tel"
        label={t("phoneLabel")}
        autoComplete="tel"
      />

      <TextareaField
        name="message"
        label={t("messageLabel")}
        rows={6}
        required
        error={state.fieldErrors.message}
      />

      {state.status === "error" && state.message && (
        <p
          className="text-[14px] text-brand-red"
          role="alert"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 bg-brand-red px-9 py-3.5 text-[13px] font-medium tracking-[0.08em] text-brand-cream shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-px hover:bg-brand-red-deep hover:shadow-[0_16px_32px_-12px_rgba(122,0,0,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {pending ? t("sending") : t("send")}
          <span
            aria-hidden
            className="text-[12px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  error,
}: {
  name: ContactFormFieldKey | "phone";
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div>
      <div
        className={`border bg-off-white transition-colors duration-200 ${
          error
            ? "border-brand-red"
            : "border-neutral-200 focus-within:border-charcoal"
        }`}
      >
        <label
          htmlFor={name}
          className="block px-4 pt-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500"
        >
          {label}
          {required && (
            <span aria-hidden className="ml-1 text-neutral-400">
              *
            </span>
          )}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="w-full bg-transparent px-4 pb-2.5 text-[15px] text-charcoal outline-none"
        />
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-[12px] text-brand-red"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  name,
  label,
  rows,
  required = false,
  error,
}: {
  name: "message";
  label: React.ReactNode;
  rows: number;
  required?: boolean;
  error?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div>
      <div
        className={`border bg-off-white transition-colors duration-200 ${
          error
            ? "border-brand-red"
            : "border-neutral-200 focus-within:border-charcoal"
        }`}
      >
        <label
          htmlFor={name}
          className="block px-4 pt-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500"
        >
          {label}
          {required && (
            <span aria-hidden className="ml-1 text-neutral-400">
              *
            </span>
          )}
        </label>
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="w-full resize-none bg-transparent px-4 pb-2.5 text-[15px] leading-[1.55] text-charcoal outline-none"
        />
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-[12px] text-brand-red"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState({ refTitle }: { refTitle: string | null }) {
  const t = useTranslations("contact.form");

  return (
    <div
      className="border border-neutral-200 bg-off-white-soft px-8 py-12 lg:px-12 lg:py-16"
      role="status"
      aria-live="polite"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
        {t("successEyebrow")}
      </p>
      <h2 className="mt-5 text-[26px] font-light leading-[1.15] tracking-[-0.02em] text-charcoal md:text-[32px]">
        {refTitle
          ? t("successTitleWithRef", { title: refTitle })
          : t("successTitle")}
      </h2>
      <p className="mt-5 max-w-[480px] text-[15px] leading-[1.65] text-neutral-800 md:text-[16px]">
        {t("successBody")}
      </p>
    </div>
  );
}
