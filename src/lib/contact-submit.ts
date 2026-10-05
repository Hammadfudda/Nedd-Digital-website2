import emailjs from "@emailjs/browser";

export type Enquiry = { name: string; email: string; company?: string | undefined; service: string; message: string };

const serviceId = import.meta.env['VITE_EMAILJS_SERVICE_ID'] as string | undefined;
const templateId = import.meta.env['VITE_EMAILJS_TEMPLATE_ID'] as string | undefined;
const publicKey = import.meta.env['VITE_EMAILJS_PUBLIC_KEY'] as string | undefined;

export const backendReady = Boolean(serviceId && templateId && publicKey);

export async function submitEnquiry(v: Enquiry) {
  if (!backendReady) {
    return;
  }

  await emailjs.send(serviceId!, templateId!, { ...v, company: v.company || "-" }, { publicKey: publicKey! });
}
