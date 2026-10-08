import Link from "next/link";
import { mxn, type Treatment } from "@/content/treatments";

export default function TreatmentCard({ t, large = false }: { t: Treatment; large?: boolean }) {
  return (
    <Link href={`/tratamientos/${t.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-clay">
      <div className={`card-media rounded-xl ${large ? "" : ""}`}>
        {t.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.image} alt={t.name} className="transition-transform duration-700 ease-soft group-hover:scale-[1.03]" />
        ) : (
          <div className="flex h-full w-full items-end bg-gradient-to-b from-cream to-[#EFE3D7] p-6">
            <span className="font-serif text-[64px] leading-none text-rust/20">{t.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className={`${large ? "text-3xl" : "text-2xl"} group-hover:text-rust`}>{t.name}</h3>
        <span className="shrink-0 text-[14px] text-stone">{t.desde ? `desde ${mxn(t.desde)}` : "Cotización"}</span>
      </div>
      <p className="mt-1 text-[15px] text-stone">{t.short}</p>
    </Link>
  );
}
