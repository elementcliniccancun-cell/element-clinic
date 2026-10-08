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
