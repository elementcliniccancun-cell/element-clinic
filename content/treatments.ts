// Catálogo de tratamientos estéticos. Precios al público en MXN, con IVA.
// Para agregar un tratamiento: copia un bloque y cambia slug, nombre y textos.
// Si un precio no está confirmado, deja `desde` en null y se mostrará "Cotización por WhatsApp".

export type Category = "inyectables" | "tecnologia" | "cabina";

export type Treatment = {
  slug: string;
  name: string;
  short: string; // etiqueta corta bajo el nombre
  category: Category;
  desde: number | null;
  priceNote?: string;
  summary: string; // una o dos frases para la tarjeta
  description: string[]; // párrafos de la página del tratamiento
  forWhom: string[];
  details: { label: string; value: string }[];
  prices?: { label: string; value: string }[];
  image?: string; // ruta en /public/media
  video?: string; // URL de YouTube/Vimeo no listado o archivo en /public/media
  featured?: boolean;
};

export const categories: { id: Category; name: string; blurb: string }[] = [
  { id: "inyectables", name: "Inyectables", blurb: "Toxina, bioestimuladores, ácido hialurónico y enzimas aplicados por médicos cirujanos." },
  { id: "tecnologia", name: "Tecnología", blurb: "HIFU, luz pulsada, láser y fototerapia LED sin agujas ni incapacidad." },
  { id: "cabina", name: "Cabina y bienestar", blurb: "Faciales médicos, masajes y moldeado corporal para completar cada protocolo." },
];

export const treatments: Treatment[] = [
  {
    slug: "toxina-botulinica",
    name: "Toxina botulínica",
    short: "Expresión natural, sin líneas marcadas",
    category: "inyectables",
    desde: 2750,
    priceNote: "$110 por unidad",
    featured: true,
    summary: "Suaviza líneas de expresión en frente, entrecejo y patas de gallo conservando el movimiento natural del rostro.",
    description: [
      "La toxina botulínica relaja de forma temporal los músculos que forman las líneas de expresión. Aplicada en la dosis correcta y en los puntos correctos, el resultado es un rostro descansado que sigue expresando.",
      "En Element la aplican únicamente médicos cirujanos, con marcaje previo y dosis calculada por zona. La sesión dura 20 minutos y no requiere incapacidad.",
    ],
    forWhom: ["Líneas en frente, entrecejo y contorno de ojos", "Prevención en pacientes jóvenes (baby botox)", "Bruxismo y sonrisa gingival, bajo valoración"],
    details: [
      { label: "Duración", value: "20 min" },
      { label: "Resultado", value: "Visible a los 7 a 14 días, dura 4 a 6 meses" },
      { label: "Recuperación", value: "Inmediata" },
    ],
    prices: [
      { label: "Por unidad", value: "$110" },
      { label: "Baby botox (25 u)", value: "$2,750" },
      { label: "Rostro completo (50 u)", value: "$5,500" },
    ],
  },
  {
    slug: "acido-hialuronico",
    name: "Ácido hialurónico",
    short: "Armonización facial y labios",
    category: "inyectables",
    desde: 7000,
    featured: true,
    summary: "Volumen, definición e hidratación en labios, pómulos, mentón y línea mandibular con resultados proporcionados.",
    description: [
      "El ácido hialurónico es una molécula que ya existe en tu piel. Inyectada en puntos estratégicos, restituye volumen perdido, define contornos y mejora la hidratación profunda.",
      "Trabajamos con una valoración de proporciones faciales antes de aplicar. El objetivo es armonía, no cambio: que nadie sepa qué te hiciste, solo que te ves mejor.",
    ],
    forWhom: ["Labios con poca definición o volumen", "Pérdida de volumen en pómulos y mejillas", "Mentón y línea mandibular poco definidos", "Ojeras por surco profundo"],
    details: [
      { label: "Duración", value: "30 a 45 min" },
      { label: "Resultado", value: "Inmediato, dura 9 a 18 meses según zona" },
      { label: "Recuperación", value: "Posible inflamación leve 24 a 48 h" },
    ],
    prices: [
      { label: "Labios", value: "$7,000" },
      { label: "Armonización facial", value: "desde $8,000" },
    ],
  },
  {
    slug: "bioestimuladores",
    name: "Bioestimuladores de colágeno",
    short: "Sculptra, Radiesse y Lanluma",
    category: "inyectables",
    desde: 9000,
    featured: true,
    summary: "Estimulan que tu piel produzca su propio colágeno. El efecto se construye durante meses y dura hasta dos años.",
    description: [
      "A diferencia de un relleno, un bioestimulador no aporta volumen de inmediato: activa a los fibroblastos para que produzcan colágeno nuevo. El resultado es una piel más firme, densa y luminosa que se nota de forma progresiva.",
      "Sculptra (ácido poli-L-láctico) y Radiesse (hidroxiapatita de calcio) se usan en rostro, cuello y manos. Lanluma se indica para glúteos y zonas corporales amplias.",
    ],
    forWhom: ["Flacidez facial inicial o moderada", "Pérdida de densidad en mejillas y sienes", "Cuello, escote y manos envejecidos", "Glúteos: volumen y firmeza sin cirugía"],
    details: [
      { label: "Duración", value: "45 min" },
      { label: "Resultado", value: "Progresivo a partir de la semana 6, dura 18 a 24 meses" },
      { label: "Sesiones", value: "1 a 3 según indicación" },
    ],
    prices: [
      { label: "Radiesse", value: "$9,000" },
      { label: "Sculptra", value: "$15,000" },
      { label: "Lanluma glúteos", value: "desde $42,976" },
    ],
  },
  {
    slug: "lipoenzimas",
    name: "Lipoenzimas",
    short: "Grasa localizada sin cirugía",
    category: "inyectables",
    desde: 4800,
    summary: "Enzimas que disuelven depósitos de grasa en papada, abdomen, brazos o rodillas.",
    description: [
      "Las lipoenzimas se aplican directamente en el depósito de grasa que no responde a dieta ni ejercicio. Degradan las células adiposas y el cuerpo las elimina de forma natural en las semanas siguientes.",
      "Es un procedimiento ambulatorio que se combina bien con Liftage o Body Sculpt para tensar la piel de la zona tratada.",
    ],
    forWhom: ["Papada", "Abdomen bajo y flancos", "Brazos, rodillas y espalda"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Resultado", value: "Visible a las 3 a 4 semanas" },
      { label: "Sesiones", value: "2 a 4, con 3 semanas de separación" },
    ],
    prices: [{ label: "Por sesión", value: "$4,800" }],
  },
  {
    slug: "pdrn",
    name: "PDRN",
    short: "Regeneración de piel con polinucleótidos",
    category: "inyectables",
    desde: 4900,
    summary: "Polinucleótidos que reparan la piel desde dentro: textura, elasticidad y luminosidad.",
    description: [
      "El PDRN (polidesoxirribonucleótido) es un fragmento de ADN que estimula la reparación celular y la producción de colágeno y elastina. Se aplica en microinyecciones en rostro, cuello, ojeras o cuero cabelludo.",
      "Es el tratamiento de elección cuando el objetivo es calidad de piel, no volumen: poros, textura, ojeras y pieles apagadas.",
    ],
    forWhom: ["Piel apagada o con textura irregular", "Ojeras y párpados finos", "Cicatrices de acné", "Caída de cabello, en protocolo capilar"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Sesiones", value: "3, con 2 a 3 semanas de separación" },
      { label: "Recuperación", value: "Pequeñas pápulas 24 a 48 h" },
    ],
    prices: [{ label: "Por sesión", value: "$4,900" }],
  },
  {
    slug: "liftage",
    name: "Liftage",
    short: "HIFU de alta precisión",
    category: "tecnologia",
    desde: 3800,
    featured: true,
    summary: "Ultrasonido focalizado que tensa la piel desde la capa profunda, sin agujas, sin incapacidad y con resultados de 12 a 18 meses.",
    description: [
      "Liftage es HIFU de alta precisión: ultrasonido focalizado que calienta puntos exactos de la capa SMAS (la misma que trabaja un cirujano en un lifting) y provoca contracción y producción de colágeno nuevo.",
      "Una sesión ambulatoria de 30 a 90 minutos. Sin agujas, sin incapacidad, y con resultado que se construye durante 3 meses y se mantiene 12 a 18.",
    ],
    forWhom: ["Flacidez en mejillas y línea mandibular", "Papada y cuello", "Cejas caídas y párpado superior pesado", "Efecto glow y tensado preventivo"],
    details: [
      { label: "Duración", value: "30 a 90 min según zona" },
      { label: "Resultado", value: "Progresivo hasta 3 meses, dura 12 a 18 meses" },
      { label: "Recuperación", value: "Inmediata; sensibilidad leve 2 a 3 días" },
    ],
    prices: [
      { label: "Efecto glow y tensado", value: "$3,800" },
      { label: "Mentón y papada", value: "$7,000" },
      { label: "Mejillas y marcaje mandibular", value: "$7,500" },
      { label: "Rostro completo", value: "$10,000" },
    ],
  },
  {
    slug: "hollywood-peel",
    name: "Hollywood Peel",
    short: "Láser de carbón para luminosidad inmediata",
    category: "tecnologia",
    desde: 1850,
    summary: "Láser con máscara de carbón que limpia poros, unifica tono y deja la piel luminosa el mismo día.",
    description: [
      "Se aplica una fina capa de carbón activado que penetra en los poros; el láser la vaporiza arrastrando impurezas y estimulando colágeno superficial. Sin dolor, sin recuperación.",
      "Es el tratamiento previo a un evento: luminosidad inmediata y poros cerrados.",
    ],
    forWhom: ["Poros abiertos y piel grasa", "Tono apagado o desigual", "Antes de un evento"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Resultado", value: "Inmediato" },
      { label: "Recuperación", value: "Ninguna" },
    ],
    prices: [
      { label: "Single laser", value: "$1,850" },
      { label: "Facial Laser Experience", value: "$2,890" },
    ],
  },
  {
    slug: "ipl",
    name: "Luz pulsada IPL",
    short: "Manchas, rojeces y fotoenvejecimiento",
    category: "tecnologia",
    desde: 3500,
    summary: "Luz pulsada intensa para manchas solares, rojeces y vasos finos, en programas de 5 o 7 sesiones.",
    description: [
      "La IPL emite pulsos de luz que son absorbidos por la melanina de las manchas y por la hemoglobina de los vasos finos, eliminándolos de forma selectiva sin dañar la piel sana.",
      "Se trabaja en programa: cada sesión aclara y unifica un poco más.",
    ],
    forWhom: ["Manchas solares y léntigos", "Rojeces difusas y rosácea leve", "Fotoenvejecimiento en rostro, escote y manos"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Sesiones", value: "5 o 7, cada 3 a 4 semanas" },
      { label: "Cuidado", value: "Protector solar estricto durante el programa" },
    ],
    prices: [
      { label: "Programa 5 sesiones", value: "$3,500" },
      { label: "Programa 7 sesiones", value: "$4,800" },
    ],
  },
  {
    slug: "celluma-led",
    name: "Fototerapia Celluma LED",
    short: "Luz médica para acné, antiedad, rosácea y dolor",
    category: "tecnologia",
    desde: 900,
    summary: "Fototerapia LED con certificación FDA y COFEPRIS. Protocolos para acné, antiedad, rosácea, caída de cabello y dolor.",
    description: [
      "Celluma PRO emite luz azul, roja e infrarroja en longitudes de onda que las células absorben para producir más energía. Reduce inflamación, acelera la reparación y estimula colágeno.",
      "Sin calor, sin dolor y seguro en embarazo y lactancia. Se usa solo o como complemento de casi todos nuestros protocolos.",
    ],
    forWhom: ["Acné activo", "Líneas finas y pérdida de firmeza", "Rosácea", "Caída de cabello", "Dolor muscular y articular"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Sesiones", value: "2 a 3 por semana según protocolo" },
      { label: "Certificación", value: "FDA y COFEPRIS Clase II" },
    ],
    prices: [
      { label: "Sesión suelta", value: "$900" },
      { label: "Protocolo dolor", value: "$5,800" },
      { label: "Protocolo rosácea", value: "$6,200" },
      { label: "Protocolo antiedad", value: "$6,800" },
      { label: "Protocolo acné o capilar", value: "$7,200" },
    ],
  },
  {
    slug: "faciales-medicos",
    name: "Faciales médicos",
    short: "Age Element, Skin Infusion y más",
    category: "cabina",
    desde: 1150,
    summary: "Faciales con principios activos de grado médico, diseñados por las doctoras y aplicados en cabina.",
    description: [
      "Nuestros faciales no son un lujo aislado: son la base de mantenimiento de cualquier protocolo. Cada uno combina limpieza profunda, activos de grado médico y fototerapia LED.",
      "Age Element de mesoestetic es el programa antiedad de cabina más completo: incluye Celluma, reflexología y Hollywood Peel, y es seguro en embarazo y lactancia.",
    ],
    forWhom: ["Mantenimiento entre tratamientos médicos", "Piel deshidratada, apagada o congestionada", "Embarazo y lactancia (Age Element, Skin Wellness)"],
    details: [
      { label: "Duración", value: "60 a 90 min" },
      { label: "Frecuencia", value: "Cada 4 a 6 semanas" },
    ],
    prices: [
      { label: "Face Yoga", value: "$1,150" },
      { label: "Skin Wellness", value: "$2,000" },
      { label: "Detox Facial", value: "$2,249" },
      { label: "Age Element (sesión)", value: "$2,959" },
      { label: "Skin Infusion", value: "$3,400" },
      { label: "Age Element programa de 5", value: "$12,000" },
    ],
  },
  {
    slug: "masajes",
    name: "Masajes terapéuticos",
    short: "Aromaterapia, descontracturante, piedras calientes",
    category: "cabina",
    desde: 1000,
    summary: "Masajes de 50 y 80 minutos para descanso, recuperación muscular y embarazo.",
    description: [
      "Un espacio de descanso dentro de la clínica. Masajes con aceites esenciales, técnica descontracturante profunda, piedras volcánicas y un protocolo específico para embarazo (Mom to Be).",
    ],
    forWhom: ["Estrés y tensión acumulada", "Contracturas de cuello y espalda", "Embarazo a partir del segundo trimestre"],
    details: [
      { label: "Duración", value: "50 u 80 min" },
    ],
    prices: [
      { label: "Aromaterapia 50 / 80 min", value: "$1,000 / $1,350" },
      { label: "Descontracturante 50 / 80 min", value: "$1,200 / $1,499" },
      { label: "Mom to Be 50 min", value: "$1,300" },
      { label: "Piedras calientes 80 min", value: "$1,399" },
    ],
  },
  {
    slug: "body-sculpt",
    name: "Body Sculpt",
    short: "Moldeado corporal en programa",
    category: "cabina",
    desde: 1350,
    summary: "Programas de moldeado corporal que combinan tecnología y masaje para reducir medidas y tensar.",
    description: [
      "Body Sculpt trabaja grasa localizada, retención de líquidos y flacidez en sesiones de cabina. Se contrata por programa para que el resultado sea medible: tomamos medidas y composición corporal al inicio y al final.",
    ],
    forWhom: ["Reducción de medidas en abdomen, cintura y piernas", "Celulitis y retención de líquidos", "Complemento de lipoenzimas"],
    details: [
      { label: "Duración", value: "60 min por sesión" },
      { label: "Frecuencia", value: "1 a 2 por semana" },
    ],
    prices: [
      { label: "Signature (sesión)", value: "$1,350" },
      { label: "Pro (6 sesiones)", value: "$6,900" },
      { label: "Premium (10 sesiones)", value: "$10,000" },
    ],
  },
];

export const bySlug = (slug: string) => treatments.find((t) => t.slug === slug);
export const byCategory = (c: Category) => treatments.filter((t) => t.category === c);
export const featured = () => treatments.filter((t) => t.featured);

export const mxn = (n: number) => `$${n.toLocaleString("es-MX")}`;
