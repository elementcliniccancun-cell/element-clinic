"use client";
import { useState } from "react";
import { treatments } from "@/content/treatments";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error((await r.json()).error || "No se pudo enviar");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="rounded-2xl bg-cream p-8 font-serif text-2xl">Recibimos tu mensaje. Te respondemos el mismo día hábil.</p>;
  }

  const field = "w-full rounded-lg border border-hairline bg-white px-4 py-3 text-[15px] focus:border-rust focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[14px]">Nombre<input name="name" required className={`${field} mt-1`} /></label>
        <label className="block text-[14px]">WhatsApp o teléfono<input name="phone" required className={`${field} mt-1`} /></label>
      </div>
      <label className="block text-[14px]">Correo<input name="email" type="email" required className={`${field} mt-1`} /></label>
      <label className="block text-[14px]">Tratamiento de interés
        <select name="treatment" className={`${field} mt-1`} defaultValue="">
          <option value="">Aún no lo sé, quiero una valoración</option>
          {treatments.map((t) => <option key={t.slug} value={t.name}>{t.name}</option>)}
        </select>
      </label>
      <label className="block text-[14px]">Mensaje<textarea name="message" rows={4} className={`${field} mt-1`} /></label>
      {status === "error" && <p className="text-[14px] text-rust">{error}. También puedes escribirnos por WhatsApp.</p>}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto">{status === "sending" ? "Enviando…" : "Enviar mensaje"}</button>
    </form>
  );
}
