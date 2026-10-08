/* Logo oficial (PNG con fondo transparente en /public/media). tone: "cream" para fondos oscuros, "rust" o "black" para claros. */
export default function Logo({ tone = "cream", className = "" }: { tone?: "cream" | "rust" | "black"; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/media/logo-${tone}.png`} alt="Element Clinic" width={143} height={50} className={`h-9 w-auto ${className}`} />;
}
