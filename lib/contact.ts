/**
 * Contact form shared types and constants.
 *
 * Lives outside the `"use server"` action file because Next.js
 * forbids exporting anything other than async functions from a
 * server-action module — exported values get stripped at runtime
 * and become `undefined`, which is what was crashing the form on
 * first render.
 *
 * Both the server action (`app/contact/actions.ts`) and the client
 * form (`app/contact/contact-form.tsx`) import from here.
 */

export type ContactFormFieldKey = "name" | "email" | "message";

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string | null;
  fieldErrors: Partial<Record<ContactFormFieldKey, string>>;
};

export const INITIAL_CONTACT_STATE: ContactFormState = {
  status: "idle",
  message: null,
  fieldErrors: {},
};
