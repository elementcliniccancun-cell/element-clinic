import Link from "next/link";
import { site, waLink } from "@/content/site";
import { categories, byCategory } from "@/content/treatments";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-7" />
            <p className="mt-5 max-w-sm font-serif text-2xl leading-snug text-cream/90">{site.claim}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink("Hola, me gustaría agendar una valoración en Element Clinic.")} target="_blank" rel="noopener" className="btn btn-light !py-2.5">WhatsApp</a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost-light !py-2.5">Escribir un correo</a>
            </div>
          </div>
          {categories.map((c) => (
            <div key={c.id}>
              <p className="font-serif text-lg">{c.name}</p>
              <ul className="mt-4 space-y-2 text-[14px] text-cream/70">
                {byCategory(c.id).map((t) => (
                  <li key={t.slug}><Link href={`/tratamientos/${t.slug}`} className="hover:text-cream">{t.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 border-t border-cream/15 pt-8 text-[13px] text-cream/60 md:grid-cols-3">
          <p>{site.legalName}<br />{site.address}<br />{site.hours}</p>
          <p>{site.phoneDisplay}<br /><a href={`mailto:${site.email}`} className="hover:text-cream">{site.email}</a><br /><a href={site.instagram} target="_blank" rel="noopener" className="hover:text-cream">Instagram</a></p>
          <p>{site.license}. Responsables sanitarios: {site.doctors.map((d) => `${d.name}, Céd. Prof. ${d.cedula}`).join("; ")}. Todos los tratamientos requieren valoración médica previa; los resultados varían en cada paciente.</p>
        </div>
      </div>
    </footer>
  );
}
