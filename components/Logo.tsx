// Wordmark temporal en texto. Sustituir por el SVG del logo de Element cuando lo tengan:
// coloca el archivo en /public/media/logo.svg y cambia este componente por <img src="/media/logo.svg" ... />
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-[26px] tracking-[0.18em] ${className}`} style={{ lineHeight: 1 }}>
      ELEMENT
    </span>
  );
}
