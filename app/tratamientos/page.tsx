import type { Metadata } from "next";
import Section from "@/components/Section";
import TreatmentCard from "@/components/TreatmentCard";
import { categories, byCategory } from "@/content/treatments";

export const metadata: Metadata = { title: "Tratamientos estéticos", description: "Catálogo de medicina estética en Element Clinic Cancún: inyectables, tecnología y cabina, con precios al público." };

export default function Tratamientos() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-36 md:px-8 md:pt-44">
        <h1 className="max-w-[16ch] text-5xl md:text-7xl">Tratamientos estéticos</h1>
        <p className="mt-6 max-w-prose text-lg text-stone">Precios al público en pesos mexicanos, con IVA. Todo tratamiento inicia con una valoración médica que se abona a la primera aplicación.</p>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Categorías">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-hairline px-4 py-1.5 text-[14px] hover:border-rust hover:text-rust">{c.name}</a>
          ))}
        </nav>
      </div>
      {categories.map((c, i) => (
        <Section key={c.id} id={c.id} className={i % 2 === 1 ? "bg-cream" : ""}>
          <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
            <div className="md:sticky md:top-28 md:self-start">
              <h2 className="text-4xl">{c.name}</h2>
              <p className="mt-3 text-stone">{c.blurb}</p>
            </div>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {byCategory(c.id).map((t) => <TreatmentCard key={t.slug} t={t} />)}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
