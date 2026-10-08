import type { Metadata } from "next";
import Section from "@/components/Section";
import CalEmbed from "@/components/CalEmbed";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = { title: "Agendar valoración", description: "Reserva tu valoración médica en Element Clinic Cancún." };

export default function Reservar() {
  const cal = site.calcomLink;
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
        <h1 className="max-w-[14ch] text-5xl md:text-7xl">Agenda tu valoración.</h1>
        <p className="mt-6 max-w-prose text-lg text-stone">Consulta de {site.valoracion.precio.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })} con una de las doctoras, en clínica o por videollamada. Se abona a tu primer tratamiento. Para reservar el horario se solicita un anticipo de {site.valoracion.anticipo.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })}.</p>
      </div>
      <Section>
        <div className="mb-10 flex flex-col gap-4 rounded-2xl bg-cream p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="font-serif text-2xl">Cómo reservar</p>
            <p className="mt-1 max-w-prose text-stone">1. Elige tu horario en el calendario. 2. Paga el anticipo de {site.valoracion.anticipo.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })} con Mercado Pago (tarjeta, OXXO o SPEI). 3. Recibes confirmación por correo y WhatsApp.</p>
          </div>
          <a href={site.anticipoLink} target="_blank" rel="noopener" className="btn btn-primary shrink-0">Pagar anticipo</a>
        </div>
        {cal ? (
          <CalEmbed calLink={cal} />
        ) : (
          <div className="rounded-2xl bg-cream p-8 md:p-12">
            <p className="font-serif text-3xl">Por ahora agendamos por WhatsApp.</p>
            <p className="mt-3 max-w-prose text-stone">Escríbenos con el tratamiento que te interesa y el horario que prefieres; te confirmamos disponibilidad el mismo día.</p>
            <a href={waLink("Hola, quiero agendar una valoración. ¿Qué horarios tienen disponibles?")} target="_blank" rel="noopener" className="btn btn-primary mt-8">Agendar por WhatsApp</a>
          </div>
        )}
      </Section>
    </>
  );
}
