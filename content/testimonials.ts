// Testimonios de pacientes. La sección solo se muestra si hay al menos uno.
// Antes de publicar testimonios, confirmar redacción conforme a la normativa
// de publicidad de servicios de salud (COFEPRIS): sin promesas de resultado.
export type Testimonial = {
  name: string; // nombre o iniciales, con consentimiento por escrito
  treatment: string;
  quote: string;
  origin?: string; // ciudad o país
};

export const testimonials: Testimonial[] = [];
