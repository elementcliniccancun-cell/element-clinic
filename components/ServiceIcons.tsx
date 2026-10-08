import Link from "next/link";

// Íconos lineales en círculo, al estilo del diseño original de Wix.
const items = [
  { href: "/tratamientos/toxina-botulinica", name: "Botox", tag: "Rejuvenece tu expresión", icon: "face" },
  { href: "/tratamientos#inyectables", name: "Medicina estética", tag: "Realza tu belleza natural", icon: "profile" },
  { href: "/tratamientos/liftage", name: "Liftage HIFU", tag: "Tensa sin cirugía", icon: "waves" },
  { href: "/tratamientos/bioestimuladores", name: "Bioestimuladores", tag: "Activa tu colágeno", icon: "cells" },
  { href: "/tratamientos/celluma-led", name: "Fototerapia LED", tag: "Luz que repara", icon: "light" },
  { href: "/tratamientos#cabina", name: "Cabina y bienestar", tag: "Cuida y mantiene", icon: "leaf" },
];

function Icon({ kind }: { kind: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "face": return <svg viewBox="0 0 48 48" {...p}><path d="M14 20c0-7 4-12 10-12s10 5 10 12-4 15-10 15-10-8-10-15z" /><path d="M19 22h2M27 22h2M21 29c1.5 1.5 4.5 1.5 6 0" /><path d="M33 10l4-4M35 14l5-1" /></svg>;
    case "profile": return <svg viewBox="0 0 48 48" {...p}><path d="M26 8c-8 0-12 6-12 13 0 4 1 6 3 9l-3 6h10c6 0 10-5 10-12 0-2-1-4-1-6 2-2 2-5 1-7-2-2-5-3-8-3z" /><path d="M29 22c1-1 2-1 3 0" /><path d="M33 29h7" /></svg>;
    case "waves": return <svg viewBox="0 0 48 48" {...p}><path d="M8 18c4-4 8-4 12 0s8 4 12 0 8-4 8 0" /><path d="M8 26c4-4 8-4 12 0s8 4 12 0 8-4 8 0" /><path d="M8 34c4-4 8-4 12 0s8 4 12 0 8-4 8 0" /></svg>;
    case "cells": return <svg viewBox="0 0 48 48" {...p}><circle cx="18" cy="18" r="6" /><circle cx="31" cy="27" r="7" /><circle cx="18" cy="34" r="4" /><path d="M23 21l4 3M20 30l6-1" /></svg>;
    case "light": return <svg viewBox="0 0 48 48" {...p}><circle cx="24" cy="22" r="8" /><path d="M24 6v4M24 34v4M8 22h4M36 22h4M12 10l3 3M33 31l3 3M12 34l3-3M33 13l3-3" /></svg>;
    default: return <svg viewBox="0 0 48 48" {...p}><path d="M12 36c0-14 10-22 26-24-2 16-10 26-24 26" /><path d="M14 34c6-8 12-12 18-16" /></svg>;
  }
}

export default function ServiceIcons() {
  return (
    <section className="bg-mauve px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl rounded-sm bg-lilac px-6 py-14 md:px-16 md:py-20">
        <div className="flex items-center justify-end gap-4">
          <span className="h-px w-16 bg-ink/40" />
          <h2 className="font-sans text-[13px] font-normal uppercase tracking-[0.35em] text-ink">Nuestros servicios</h2>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <li key={it.name} className="text-center">
              <Link href={it.href} className="group block">
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-ink/50 text-ink transition-colors duration-200 group-hover:border-rust group-hover:text-rust">
                  <span className="h-14 w-14"><Icon kind={it.icon} /></span>
                </span>
                <p className="mt-5 font-serif text-xl leading-tight">{it.name}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink/70">{it.tag}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
