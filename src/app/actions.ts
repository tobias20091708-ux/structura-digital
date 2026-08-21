"use server";

import { contact } from "@/lib/data";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const fallbackErrorMessage = `Der gik noget galt. Ring os i stedet direkte på ${contact.phone}, så tager vi den derfra.`;

async function sendToFormspree(payload: Record<string, string>) {
  const formId = process.env.FORMSPREE_FORM_ID;

  if (!formId) {
    console.error(
      "FORMSPREE_FORM_ID mangler som miljøvariabel — lead blev IKKE sendt videre:",
      payload
    );
    throw new Error("missing-form-id");
  }

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`formspree-error-${res.status}`);
  }
}

export async function requestCallback(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();

  if (!name || !phone) {
    return { status: "error", message: "Udfyld navn og telefonnummer." };
  }

  try {
    await sendToFormspree({
      type: "Ring mig op",
      name,
      phone,
    });
    return { status: "success" };
  } catch {
    return { status: "error", message: fallbackErrorMessage };
  }
}

export async function submitContactForm(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim() ?? "";
  const projectType = formData.get("project_type")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Udfyld navn, email og besked." };
  }

  try {
    await sendToFormspree({
      type: "Kontaktformular",
      name,
      email,
      company,
      project_type: projectType,
      message,
    });
    return { status: "success" };
  } catch {
    return { status: "error", message: fallbackErrorMessage };
  }
}
