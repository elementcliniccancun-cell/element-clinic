import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = { title: "Contacto", description: "Escríbenos por WhatsApp, correo o visítanos en Plaza Nichupté, Cancún." };

export default function Contacto() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
        <h1 className="text-5xl md:text-7xl">Hablemos.</h1>
      </div>
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div className="space-y-8">
            <div>
              <p className="text-[13px] text-stone">WhatsApp</p>
              <a href={waLink("Hola, me gustaría información sobre tratamientos en Element Clinic.")} target="_blank" rel="noopener" className="font-serif text-3xl hover:text-rust">{site.phoneDisplay}</a>
            </div>
            <div>
              <p className="text-[13px] text-stone">Correo</p>
              <a href={`mailto:${site.email}`} className="font-serif text-2xl hover:text-rust">{site.email}</a>
            </div>
            <div>
              <p className="text-[13px] text-stone">Clínica</p>
              <p className="font-serif text-2xl">{site.address}</p>
              <p className="mt-1 text-stone">{site.hours}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Plaza Nichupté Local 21A Cancún")}`} target="_blank" rel="noopener" className="mt-3 inline-block text-[15px] underline underline-offset-4 hover:text-rust">Abrir en Google Maps</a>
            </div>
            <div>
              <p className="text-[13px] text-stone">Instagram</p>
              <a href={site.instagram} target="_blank" rel="noopener" className="font-serif text-2xl hover:text-rust">@elementcliniccancun</a>
            </div>
          </div>
          <div>
            <h2 className="text-3xl">Déjanos un mensaje</h2>
            <p className="mb-6 mt-2 text-stone">Te respondemos el mismo día hábil.</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
