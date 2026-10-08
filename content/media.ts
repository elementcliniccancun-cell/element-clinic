// Videos y fotos del sitio. Sube archivos a /public/media o usa enlaces de YouTube/Vimeo "no listado".
// heroVideo: archivo mp4 corto (15 a 30 s, sin audio) para el fondo del inicio. Déjalo vacío para usar la imagen.
export const media = {
  heroVideo: "", // ej. "/media/hero.mp4"
  heroPoster: "", // ej. "/media/hero.jpg"
  gallery: [] as { src: string; alt: string }[],
  videos: [] as { title: string; url: string; caption?: string }[], // url de YouTube/Vimeo embed o mp4
};
