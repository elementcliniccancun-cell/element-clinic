"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { categories, byCategory, featured } from "@/content/treatments";
import { site, waLink } from "@/content/site";
import Logo from "./Logo";

const links = [
  { href: "/nosotras", label: "Nosotras" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileTreat, setMobileTreat] = useState(true);
  const pathname = usePathname();
  const onDark = true; // barra negra en todo el sitio, como el diseño original

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const solid = open;
  const tone = solid ? "text-ink" : "text-cream";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-soft ${solid ? "bg-linen border-b border-hairline" : "bg-night"}`} style={{ height: "var(--header-h)" }}>
      <div className={`mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8 ${tone}`}>
        <Link href="/" aria-label="Element Clinic, inicio" className="flex items-center">
          <Logo />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          <div className="group/nav relative py-6">
            <Link href="/tratamientos" className="flex items-center gap-1.5 text-[15px] hover:opacity-70" aria-haspopup="true">
              Tratamientos
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
            </Link>
            <div className="mega !left-auto !right-[-220px] w-[min(92vw,900px)] pt-2" role="menu">
              <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 rounded-2xl border border-hairline bg-linen p-8 text-ink shadow-[0_24px_60px_-20px_rgba(28,21,18,.25)]">
                <div className="border-r border-hairline pr-8">
                  <p className="font-serif text-2xl leading-tight">Un protocolo diseñado para ti, no un menú.</p>
                  <p className="mt-3 text-sm text-stone">Toda aplicación inicia con una valoración médica de {site.valoracion.precio.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })}, que se abona al tratamiento.</p>
                  <Link href="/reservar" className="btn btn-primary mt-6">Agendar valoración</Link>
                </div>
                {categories.map((c) => (
                  <div key={c.id}>
                    <Link href={`/tratamientos#${c.id}`} className="font-serif text-lg hover:text-rust">{c.name}</Link>
                    <ul className="mt-3 space-y-2">
                      {byCategory(c.id).map((t) => (
                        <li key={t.slug}><Link href={`/tratamientos/${t.slug}`} className="text-[14px] text-ink/80 hover:text-rust">{t.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] hover:opacity-70">{l.label}</Link>
          ))}
          <a href={waLink("Hola, me gustaría agendar una valoración en Element Clinic.")} target="_blank" rel="noopener" className={`btn ${solid ? "btn-primary" : "btn-light"} !py-2.5`}>WhatsApp</a>
        </nav>

        {/* Botón móvil */}
        <button className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-px w-7 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }} />
          <span className="mt-[9px] block h-px w-7 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Panel móvil */}
      <div className={`fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto bg-linen px-6 pb-10 pt-4 text-ink transition-all duration-300 ease-soft md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <button className="flex w-full items-center justify-between border-b border-hairline py-4 font-serif text-2xl" onClick={() => setMobileTreat(!mobileTreat)} aria-expanded={mobileTreat}>
          Tratamientos
          <svg width="14" height="14" viewBox="0 0 10 10" className={`transition-transform ${mobileTreat ? "rotate-180" : ""}`} aria-hidden><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        </button>
        {mobileTreat && (
          <div className="space-y-5 py-4">
            {categories.map((c) => (
              <div key={c.id}>
                <p className="text-xs uppercase tracking-widest text-stone">{c.name}</p>
                <ul className="mt-2 space-y-2">
                  {byCategory(c.id).map((t) => (
                    <li key={t.slug}><Link href={`/tratamientos/${t.slug}`} className="text-lg">{t.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block border-b border-hairline py-4 font-serif text-2xl">{l.label}</Link>
        ))}
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/reservar" className="btn btn-primary">Agendar valoración</Link>
          <a href={waLink("Hola, me gustaría información sobre tratamientos en Element Clinic.")} className="btn btn-ghost" target="_blank" rel="noopener">Escribir por WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
