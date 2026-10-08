import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import TreatmentCard from "@/components/TreatmentCard";
import { treatments, bySlug, byCategory, categories, mxn } from "@/content/treatments";
import { site, waLink } from "@/content/site";

export function generateStaticParams() { return treatments.map((t) => ({ slug: t.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = bySlug(params.slug);
  return t ? { title: t.name, description: t.summary } : {};
}

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const t = bySlug(params.slug);
  if (!t) notFound();
  const cat = categories.find((c) => c.id === t.category)!;
  const related = byCategory(t.category).filter((x) => x.slug !== t.slug).slice(0, 3);
  const wa = waLink(`Hola, me interesa ${t.name} en Element Clinic. ¿Me pueden dar más información?`);

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
        <p className="text-[14px] text-stone"><Link href="/tratamientos" className="hover:text-rust">Tratamientos</Link> / <Link href={`/tratamientos#${cat.id}`} className="hover:text-rust">{cat.name}</Link></p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h1 className="text-5xl md:text-7xl">{t.name}</h1>
            <p className="mt-3 text-xl text-stone">{t.short}</p>
            <p className="mt-8 font-serif text-2xl leading-snug">{t.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noopener" className="btn btn-primary">Preguntar por WhatsApp</a>
              <Link href="/reservar" className="btn btn-ghost">Agendar valoración</Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-hairline pt-6 sm:grid-cols-3">
              {t.details.map((d) => (
                <div key={d.label}><dt className="text-[13px] text-stone">{d.label}</dt><dd className="mt-1">{d.value}</dd></div>
              ))}
            </dl>
          </div>
          <div className="card-media rounded-2xl">
            {t.video ? (
              <video src={t.video} autoPlay muted loop playsInline />
            ) : t.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.image} alt={t.name} />
            ) : (
              <div className="media-placeholder"><img src="/media/monogram-rust.png" alt="" aria-hidden /></div>
            )}
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="max-w-prose space-y-5 text-lg leading-relaxed">
            {t.description.map((p, i) => <p key={i}>{p}</p>)}
            <h2 className="pt-4 text-3xl">Para quién es</h2>
            <ul className="space-y-2 text-base">
              {t.forWhom.map((f) => <li key={f} className="flex gap-3"><span className="mt-[11px] h-px w-4 shrink-0 bg-clay" />{f}</li>)}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-cream p-8 md:sticky md:top-28">
            <h2 className="text-3xl">Inversión</h2>
            {t.prices ? (
              <dl className="mt-6 divide-y divide-hairline">
                {t.prices.map((p) => {
                  const parts = p.value.split(" · ");
                  return (
                    <div key={p.label} className="py-3">
                      <dt className="text-[15px]">{p.label}</dt>
                      {p.note && <p className="mt-0.5 text-[12px] text-stone">{p.note}</p>}
                      <dd className={`mt-1.5 ${parts.length > 1 ? "grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-3" : ""}`}>
                        {parts.map((v) => {
                          const m = v.match(/^(desde )?([A-Za-z+ ]+?) (\$[\d,]+.*)$/);
                          return m ? (
                            <span key={v} className="flex items-baseline justify-between gap-2 text-[14px] sm:block">
                              <span className="text-stone">{m[1] ? "desde " : ""}{m[2]}</span>
                              <span className="font-medium sm:ml-1">{m[3]}</span>
                            </span>
                          ) : (
                            <span key={v} className="block text-[15px] font-medium">{v}</span>
                          );
                        })}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            ) : (
              <p className="mt-6 text-stone">{t.desde ? `Desde ${mxn(t.desde)}.` : "Se cotiza en valoración."}</p>
            )}
            {t.priceNote && <p className="mt-3 text-[13px] text-stone">{t.priceNote}</p>}
            <p className="mt-6 text-[13px] text-stone">Precios en MXN con IVA. Valoración médica de {mxn(site.valoracion.precio)}, que se abona al tratamiento. La dosis y el número de sesiones se definen en consulta.</p>
            <a href={wa} target="_blank" rel="noopener" className="btn btn-primary mt-6 w-full">Cotizar por WhatsApp</a>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-cream">
          <h2 className="text-4xl">También en {cat.name.toLowerCase()}</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <TreatmentCard key={r.slug} t={r} />)}
          </div>
        </Section>
      )}
    </>
  );
}
