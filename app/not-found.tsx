import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-32 pt-44 md:px-8">
      <h1 className="text-5xl md:text-7xl">Esta página no existe.</h1>
      <Link href="/tratamientos" className="btn btn-primary mt-8">Ver tratamientos</Link>
    </div>
  );
}
