import { NextResponse } from "next/server";
import { site } from "@/content/site";

// Envío de correo con Resend (https://resend.com). Variables en Vercel:
//   RESEND_API_KEY   clave de Resend
//   CONTACT_FROM     remitente verificado, ej. "Element Clinic <hola@elementclinic.mx>"
//   CONTACT_TO       destino (por defecto el correo de la clínica)
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body._gotcha) return NextResponse.json({ ok: true });
  const { name, phone, email, treatment, message } = body;
  if (!name || !phone || !email) return NextResponse.json({ error: "Faltan datos" }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "El envío de correo aún no está configurado" }, { status: 503 });

  const text = `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nTratamiento: ${treatment || "Valoración"}\n\n${message || ""}`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Element Clinic <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || site.email],
      reply_to: email,
      subject: `Sitio web: ${treatment || "Valoración"} · ${name}`,
      text,
    }),
  });
  if (!r.ok) return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
