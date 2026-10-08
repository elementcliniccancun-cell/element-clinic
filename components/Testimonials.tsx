import { testimonials } from "@/content/testimonials";
import Section from "./Section";

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section className="bg-cream">
      <h2 className="text-4xl md:text-5xl">Lo que dicen nuestras pacientes</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="border-l border-clay pl-6">
            <blockquote className="font-serif text-xl leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-[14px] text-stone">{t.name}{t.origin ? `, ${t.origin}` : ""} · {t.treatment}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
