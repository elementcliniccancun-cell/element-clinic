// Datos generales del sitio. Edita aquí teléfonos, correos y redes.
export const site = {
  name: "Element Clinic",
  legalName: "Element Medicina de Precisión",
  tagline: "Belleza regenerativa",
  claim: "Tu mejor versión ya vive en ti. Nosotros la activamos.",
  city: "Cancún",
  address: "Plaza Nichupté, Local 21A, Cancún, Quintana Roo, C.P. 77500",
  whatsapp: "529987580138", // sin + ni espacios
  phoneDisplay: "+52 998 758 0138",
  email: "elementcliniccancun@gmail.com",
  instagram: "https://www.instagram.com/elementcliniccancun",
  hours: "Lunes a sábado, 10:00 a 19:00",
  license: "Licencia de funcionamiento 58220",
  doctors: [
    { name: "Dra. Brenda Serrano Dávila", cedula: "11813318", role: "Médico cirujano · Directora médica", photo: "/media/brenda.png" },
    { name: "Dra. Daniela Acosta Martínez", cedula: "11678074", role: "Médico cirujano · Directora médica", photo: "/media/daniela.png" },
  ],
  // Cal.com: cuando tengas la cuenta, pon aquí tu enlace (ej. "element-clinic/valoracion")
  calcomLink: "element-clinic-jchhdv/valoracion-medica",
  valoracion: { precio: 800, anticipo: 300 },
  // Link de Mercado Pago para el anticipo de la valoración
  anticipoLink: "https://mpago.la/1VEog1K",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
