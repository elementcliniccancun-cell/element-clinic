# Element Clinic · sitio web

Sitio de Element Medicina de Precisión (Cancún). Next.js 14 + Tailwind, desplegado en Vercel.

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Teléfono, correo, dirección, horarios, doctoras, enlace de Cal.com | `content/site.ts` |
| Tratamientos, precios, textos de cada página | `content/treatments.ts` |
| Testimonios (la sección aparece sola cuando hay al menos uno) | `content/testimonials.ts` |
| Videos y foto/video del inicio | `content/media.ts` |
| Fotos, videos, logo | carpeta `public/media/` |
| Colores y tipografías | `tailwind.config.ts`, `app/globals.css` |

Para agregar un tratamiento: copia un bloque de `content/treatments.ts`, cambia `slug`, `name`, textos y precios. La página, el menú y el pie se generan solos.

Para agregar una foto a un tratamiento: sube `public/media/liftage.jpg` y pon `image: "/media/liftage.jpg"` en su bloque. Formato recomendado 4:5, 1200×1500 px.

## Correr en local

```
npm install
npm run dev
```

## Variables de entorno (Vercel → Settings → Environment Variables)

| Variable | Para qué |
| --- | --- |
| `RESEND_API_KEY` | Envío del formulario de contacto por correo (resend.com) |
| `CONTACT_FROM` | Remitente verificado en Resend, ej. `Element Clinic <hola@tudominio.com>` |
| `CONTACT_TO` | Correo que recibe los mensajes (por defecto el de la clínica) |

## Pendientes de fase 1

- Logo en SVG (`public/media/logo.svg`) y sustituir `components/Logo.tsx`.
- Fotos de tratamientos y de las doctoras.
- Video del inicio (`content/media.ts` → `heroVideo`).
- Cuenta de Cal.com conectada a Google Calendar → `content/site.ts` → `calcomLink`.
- Cuenta de Resend para el formulario.
- Precios tomados del Menú Element Clinic (PDF). Fuera del menú por ahora: Hollywood Peel, IPL, Celluma, Body Sculpt (se agregan si se confirman).

## Fases siguientes

2. Carrito y pagos (Stripe), facturación.
3. Medicina regenerativa y turismo médico (texto ya redactado).
