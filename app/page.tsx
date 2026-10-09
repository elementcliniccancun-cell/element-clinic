import Link from "next/link";
import Section from "@/components/Section";
import TreatmentCard from "@/components/TreatmentCard";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import ServiceIcons from "@/components/ServiceIcons";
import { site, waLink } from "@/content/site";
import { media } from "@/content/media";
import { categories, byCategory, featured } from "@/content/treatments";

export default function Home() {
  const picks = featured();
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[86svh] md:min-h-[100svh] items-end overflow-hidden bg-espresso text-cream">
        {media.heroVideo ? (
          <video className="absolute inset-0 h-full w-full object-cover" src={media.heroVideo} poster={media.heroPoster || undefined} autoPlay muted loop playsInline aria-hidden />
        ) : media.heroPoster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.heroPoster} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_75%_20%,#8C6A5A_0%,#5A4035_45%,#2A1E19_100%)]" aria-hidden />
        )}
        <div className="hero-veil absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
          <h1 className="rise max-w-[14ch] text-[clamp(44px,8vw,112px)]">Tu mejor versión ya vive en ti.</h1>
          <p className="rise rise-2 mt-6 max-w-xl text-lg text-cream/85 md:text-xl">Medicina estética de precisión en Cancún. Protocolos diseñados y aplicados por médicos cirujanos, con tecnología certificada y resultados que se notan sin delatarse.</p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <Link href="/reservar" className="btn btn-light">Agendar valoración</Link>
            <Link href="/tratamientos" className="btn btn-ghost-light">Ver tratamientos</Link>
          </div>
        </div>
      </section>

      {/* Franja de confianza */}
      <div className="overflow-hidden border-b border-hairline bg-linen py-4 text-[14px] text-stone">
        <div className="marquee flex w-max gap-12 whitespace-nowrap px-6">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12">
              <span>Médicos cirujanos con cédula profesional</span>
              <span>Tecnología certificada FDA y COFEPRIS</span>
              <span>Valoración médica antes de cualquier aplicación</span>
              <span>{site.license}</span>
              <span>Español e inglés</span>
            </div>
          ))}
        </div>
      </div>

      <ServiceIcons />

      {/* Destacados */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[16ch] text-4xl md:text-5xl">Lo que más nos piden, hecho con criterio médico.</h2>
          <Link href="/tratamientos" className="text-[15px] underline underline-offset-4 hover:text-rust">Todos los tratamientos</Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((t) => <TreatmentCard key={t.slug} t={t} />)}
        </div>
      </Section>

      {/* Cómo trabajamos */}
      <Section dark>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl">Precisión antes que volumen.</h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">Nadie entra a cabina sin una valoración. Medimos proporciones, revisamos tu historia clínica y diseñamos un protocolo que combina lo que tu piel necesita hoy con lo que queremos prevenir mañana.</p>
          </div>
          <ol className="space-y-8 border-l border-cream/20 pl-8">
            {[
              ["Valoración", `Consulta de ${site.valoracion.precio.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })} con una de las doctoras, en clínica o por videollamada. Se abona a tu primer tratamiento.`],
              ["Protocolo", "Recibes por escrito qué, cuánto, cuándo y cuánto cuesta. Sin sorpresas en cabina."],
              ["Aplicación", "Siempre por médico cirujano, con insumos originales y trazabilidad de lote."],
              ["Seguimiento", "Revisión a los 15 días y plan de mantenimiento para que el resultado dure."],
            ].map(([t, d], i) => (
              <li key={t} className="relative">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cream font-sans text-[11px] text-espresso">{i + 1}</span>
                <p className="font-serif text-2xl">{t}</p>
                <p className="mt-1 text-cream/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Videos />
      <Testimonials />

      {/* Doctoras */}
      <Section className="bg-cream">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl">Dos médicas, un criterio.</h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed">Element nació de la convicción de que la medicina estética debe ser medicina primero. Cada protocolo lo diseñan y aplican la Dra. Brenda Serrano y la Dra. Daniela Acosta, médicos cirujanos con cédula profesional.</p>
            <Link href="/nosotras" className="btn btn-ghost mt-8">Conocer a las doctoras</Link>
          </div>
          <div>
            <div className="card-media rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/doctoras.jpg" alt="Dra. Daniela Acosta Martínez y Dra. Brenda Serrano Dávila en Element Clinic" />
            </div>
          </div>
        </div>
      </Section>

      {/* Cierre */}
      <Section>
        <div className="rounded-2xl bg-espresso px-6 py-14 text-center text-cream md:px-12 md:py-20">
          <h2 className="mx-auto max-w-[18ch] text-4xl md:text-5xl">Empieza con una valoración.</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/80">Agenda en línea o escríbenos. Te respondemos el mismo día.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/reservar" className="btn btn-light">Agendar valoración</Link>
            <a href={waLink("Hola, me gustaría agendar una valoración en Element Clinic.")} target="_blank" rel="noopener" className="btn btn-ghost-light">WhatsApp</a>
          </div>
        </div>
      </Section>
    </>
  );
}
