"use server";

import type { ContactFormState } from "@/lib/contact";

/**
 * Contact form server action.
 *
 * Validates the lead, currently logs it server-side, and returns
 * the next form state. The lead destination is the team's custom
 * CRM (in development) — not Resend, not transactional email.
 * Until the CRM ships an ingest endpoint, leads only `console.log`.
 * The simulated delay below is so the form's pending state gets
 * exercised end-to-end during dev.
 *
 * Types and the initial state live in `lib/contact.ts`. A
 * `"use server"` module can only export async functions; exporting
 * plain values from here makes them `undefined` at runtime.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const ref = String(formData.get("ref") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (message.length < 20) {
    fieldErrors.message = "A few sentences help — at least 20 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  // TODO: post to the CRM ingest endpoint once it's available.
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.log("[contact] new lead", {
    name,
    email,
    phone: phone || null,
    message,
    ref: ref || null,
  });

  return {
    status: "success",
    message: null,
    fieldErrors: {},
  };
}
