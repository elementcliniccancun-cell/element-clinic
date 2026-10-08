import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

const garamond = localFont({
  src: [
    { path: "../public/fonts/eb-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/eb-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/eb-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-garamond", display: "swap",
});
const jost = localFont({
  src: [
    { path: "../public/fonts/jost-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/jost-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/jost-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jost", display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name} · Medicina estética y regenerativa en Cancún`, template: `%s · ${site.name}` },
  description: "Medicina estética y regenerativa de precisión en Cancún. Toxina botulínica, bioestimuladores, ácido hialurónico, Liftage HIFU y fototerapia LED, aplicados por médicos cirujanos.",
  openGraph: { type: "website", locale: "es_MX", siteName: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${garamond.variable} ${jost.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
