export default function Section({ children, className = "", id, dark = false }: { children: React.ReactNode; className?: string; id?: string; dark?: boolean }) {
  return (
    <section id={id} className={`${dark ? "bg-espresso text-cream" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  );
}
