import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Nosotras", description: "Las doctoras detrás de Element Clinic, medicina estética y regenerativa de precisión en Cancún." };

export default function Nosotras() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
        <h1 className="max-w-[18ch] text-5xl md:text-7xl">La medicina estética debe ser medicina primero.</h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed">Element Medicina de Precisión abrió en Cancún con una idea sencilla: que cada aplicación la decida y la haga un médico, con una valoración real antes y un seguimiento real después. Sin menús de promociones, sin cabinas sin supervisión.</p>
      </div>
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {site.doctors.map((d) => (
            <article key={d.cedula}>
              <div className="card-media rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.photo} alt={d.name} />
              </div>
              <h2 className="mt-6 text-3xl">{d.name}</h2>
              <p className="mt-1 text-stone">{d.role}</p>
              <p className="text-[13px] text-stone">Cédula profesional {d.cedula}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section dark>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["Criterio médico", "Cada protocolo se diseña por diagnóstico, no por catálogo. Si un tratamiento no te conviene, te lo decimos."],
            ["Insumos originales", "Trabajamos con marcas con registro sanitario y conservamos la trazabilidad de cada lote aplicado."],
            ["Resultados discretos", "Buscamos que te veas descansada y proporcionada. Nadie debería notar qué te hiciste."],
          ].map(([t, d]) => (
            <div key={t}><h2 className="text-3xl">{t}</h2><p className="mt-3 text-cream/75">{d}</p></div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-serif text-3xl">{site.address}</p>
          <Link href="/contacto" className="btn btn-primary">Cómo llegar y contacto</Link>
        </div>
      </Section>
    </>
  );
}
