// Catálogo de servicios. Fuente: Menú Element Clinic (PDF). Precios al público en MXN.
// Para agregar o cambiar un servicio edita este archivo; páginas, menú y pie se generan solos.
// Si un precio no está confirmado, deja `desde` en null y se mostrará "Cotización".

export type Category = "inyectables" | "piel" | "tecnologia" | "cabina" | "wellness";

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  category: Category;
  desde: number | null;
  priceNote?: string;
  summary: string;
  description: string[];
  forWhom: string[];
  details: { label: string; value: string }[];
  prices?: { label: string; value: string; note?: string }[];
  image?: string;
  video?: string;
  featured?: boolean;
};

export const categories: { id: Category; name: string; blurb: string }[] = [
  { id: "inyectables", name: "Inyectables", blurb: "Toxina botulínica, ácido hialurónico, bioestimuladores y lipoenzimas aplicados por médicos cirujanos." },
  { id: "piel", name: "Calidad de piel", blurb: "Skinboosters y microneedling con activos de grado médico para hidratar, unificar y regenerar." },
  { id: "tecnologia", name: "Tecnología", blurb: "Liftage HIFU y fototerapia Celluma LED: tecnología certificada sin agujas ni incapacidad." },
  { id: "cabina", name: "Faciales y masajes", blurb: "Faciales médicos y masajes terapéuticos para completar y mantener cada protocolo." },
  { id: "wellness", name: "IV Therapy y suplementación", blurb: "Infusiones médicas y fórmulas orales que potencian los resultados desde el interior." },
];

export const treatments: Treatment[] = [
  // ───────────── INYECTABLES ─────────────
  {
    slug: "toxina-botulinica",
    name: "Toxina botulínica",
    short: "Rejuvenece tu expresión",
    category: "inyectables",
    desde: 1500,
    featured: true,
    summary: "Relaja los músculos que marcan líneas de expresión y corrige sonrisa gingival, bruxismo o hiperhidrosis, con la marca ideal para cada paciente.",
    description: [
      "La toxina botulínica relaja de forma temporal los músculos que forman las líneas de expresión. Aplicada en la dosis y los puntos correctos, el rostro se ve descansado sin perder movimiento.",
      "Trabajamos con Xeomeen, Dysport y Botox; la marca ideal se determina en la valoración médica. El efecto se empieza a ver al tercer día y es definitivo a los 7 días.",
    ],
    forWhom: ["Frente, entrecejo, patas de gallo y líneas de la nariz", "Sonrisa gingival, bunny lines, chin lines y foxy eyes", "Bruxismo y dolor mandibular", "Hiperhidrosis en axilas, palmas o plantas", "Nefertiti lift y Trap Tox (cuello y trapecio)"],
    details: [
      { label: "Duración", value: "20 a 30 min" },
      { label: "Resultado", value: "Al 3er día, final a los 7; dura 3 a 6 meses" },
      { label: "Retoque", value: "$90 por unidad hasta 15 días después" },
    ],
    prices: [
      { label: "Zona antifaz", value: "Xeomeen $4,800 · Dysport $5,000 · Botox $5,200", note: "Frente, entrecejo, patas de gallo y nariz" },
      { label: "Beginner Tox", value: "Xeomeen $3,800 · Dysport $4,000 · Botox $4,500", note: "Media dosis en zona antifaz, 3 meses aprox." },
      { label: "Full face", value: "Xeomeen $5,500 · Dysport $6,500 · Botox $7,200", note: "Antifaz, mentón, sonrisa gingival o lip lift, comisuras y foxy eyes" },
      { label: "Sonrisa gingival", value: "Xeomeen $1,500 · Dysport $1,800 · Botox $2,000" },
      { label: "Bruxismo", value: "Xeomeen $5,000 · Dysport $5,500 · Botox $5,900" },
      { label: "Hiperhidrosis (por zona)", value: "Xeomeen $5,000 · Dysport $5,700 · Botox $6,200" },
      { label: "Nefertiti lift", value: "Xeomeen $5,600 · Dysport $6,600 · Botox $7,000" },
      { label: "Bunny lines", value: "Xeomeen $2,500 · Dysport $2,900 · Botox $3,300" },
      { label: "Chin lines", value: "Xeomeen $1,800 · Dysport $2,300 · Botox $2,600" },
      { label: "Foxy eyes (por zona)", value: "Xeomeen $2,500 · Dysport $3,000 · Botox $3,400" },
      { label: "Trap Tox", value: "Xeomeen $6,000 · Dysport $6,900 · Botox $7,500" },
    ],
    priceNote: "Retoques no incluidos. Todas las aplicaciones requieren valoración médica previa, donde se determina la marca ideal por paciente.",
  },
  {
    slug: "acido-hialuronico",
    name: "Ácido hialurónico",
    short: "Volumen y definición con proporción",
    category: "inyectables",
    desde: 5500,
    featured: true,
    summary: "Repone volumen, perfila y proyecta temporales, pómulos, labios, mentón y línea mandibular. Resultado inmediato de 8 a 12 meses.",
    description: [
      "El ácido hialurónico es una molécula que ya existe en tu piel. Inyectada en puntos estratégicos, restituye volumen perdido, define contornos y mejora la hidratación profunda.",
      "Trabajamos con Aliaxin, Restylane y Stylage, e incluimos bloqueo anestésico en cada aplicación. La valoración de proporciones faciales se hace antes de aplicar: el objetivo es armonía, no cambio.",
    ],
    forWhom: ["Labios: hidratar, definir, perfilar o voluminizar", "Pómulos y fosa temporal con pérdida de volumen", "Mentón con poca proyección", "Marcaje mandibular", "Disolución de rellenos previos con hialuronidasa"],
    details: [
      { label: "Duración", value: "30 a 45 min" },
      { label: "Resultado", value: "Inmediato, mejora a los 3 días; dura 8 a 12 meses" },
      { label: "Incluye", value: "Bloqueo anestésico" },
    ],
    prices: [
      { label: "Temporal", value: "Aliaxin $5,800 · Restylane $6,900" },
      { label: "Pómulos", value: "desde Aliaxin $5,500 · Restylane $6,900" },
      { label: "Labios", value: "Aliaxin $5,800 · Restylane $6,900 · Stylage $8,000" },
      { label: "Mentón", value: "Aliaxin $5,500 · Restylane $6,900 · Radiesse+ $7,900" },
      { label: "Marcaje mandibular (3 jeringas)", value: "Aliaxin $17,000 · Restylane $20,000 · Radiesse+ $23,000" },
      { label: "Corrección de fillers (hialuronidasa)", value: "$3,500" },
    ],
    priceNote: "Costo por jeringa, excepto marcaje mandibular. Segunda jeringa en adelante con descuento.",
  },
  {
    slug: "bioestimuladores",
    name: "Bioestimuladores de colágeno",
    short: "Radiesse, Sculptra y Lanluma",
    category: "inyectables",
    desde: 7500,
    featured: true,
    summary: "Estimulan tu propio colágeno, elastina y proteoglicanos. Lifting progresivo sin aportar volumen, con efecto de 1 a 2 años.",
    description: [
      "A diferencia de un relleno, un bioestimulador no aporta volumen de inmediato: activa a los fibroblastos para que produzcan colágeno nuevo. El resultado es una piel más firme, densa y luminosa que se construye con el tiempo.",
      "Radiesse (hidroxiapatita de calcio) y Sculptra (ácido poli-L-láctico) se aplican con cánula en rostro o cuerpo, una sesión mensual por 3 meses. Lanluma V se indica para rostro y cuello, y Lanluma X, con doble dosis, para abdomen o glúteos aportando volumen natural.",
    ],
    forWhom: ["Flacidez facial y pérdida de densidad", "Cicatrices de acné (Radiesse)", "Cuello y escote", "Abdomen y glúteos: firmeza y volumen natural (Lanluma X)"],
    details: [
      { label: "Duración", value: "45 min" },
      { label: "Resultado", value: "Progresivo; dura 1 a 2 años" },
      { label: "Sesiones", value: "1 mensual por 2 a 3 meses" },
    ],
    prices: [
      { label: "Radiesse", value: "desde $7,500" },
      { label: "Sculptra", value: "desde $13,500" },
      { label: "Lanluma V (rostro y cuello)", value: "$17,000" },
      { label: "Lanluma X (cuerpo, doble dosis)", value: "$27,000" },
    ],
    priceNote: "Costo por jeringa o frasco; la dosis depende de la valoración médica.",
  },
  {
    slug: "lipoenzimas",
    name: "Lipoenzimas",
    short: "Grasa localizada sin cirugía",
    category: "inyectables",
    desde: 3800,
    summary: "Enzimas recombinantes (lipasa, colagenasa y hialuronidasa) que degradan la grasa localizada para drenarse en los 21 días siguientes.",
    description: [
      "Las lipoenzimas se aplican directamente en el depósito de grasa que no responde a dieta ni ejercicio. Desencadenan una reacción en cadena de degradación de grasa que el cuerpo drena de forma natural durante los siguientes 21 días.",
      "También se usan para celulitis, cicatrices y fibrosis. Es un procedimiento ambulatorio que se combina bien con Liftage o masaje Detox Drain.",
    ],
    forWhom: ["Perfilado facial y cuello posterior", "Brazos, bra-roll y abdomen", "Celulitis en glúteos y muslos", "Cicatrices y fibrosis"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Resultado", value: "A las 3 semanas" },
      { label: "Sesiones", value: "Según zona, con 3 semanas de separación" },
    ],
    prices: [
      { label: "Perfilado facial", value: "desde $3,800" },
      { label: "Cuello posterior", value: "desde $3,800" },
      { label: "Brazos (1 kit por brazo)", value: "$6,000 por sesión" },
      { label: "Bra-roll (1 kit por lado)", value: "desde $6,000" },
      { label: "Abdomen frontal (2 kits)", value: "desde $6,000" },
      { label: "Abdomen flancos (2 kits)", value: "desde $6,000" },
      { label: "Celulitis en glúteos (2 kits)", value: "$6,000 por sesión" },
      { label: "Celulitis en muslos (2 kits)", value: "desde $6,000" },
      { label: "Cicatrices", value: "desde $3,800" },
      { label: "Fibrosis", value: "desde $3,800" },
    ],
  },

  // ───────────── CALIDAD DE PIEL ─────────────
  {
    slug: "skinboosters",
    name: "Skinboosters",
    short: "PDRN, NCTF, Profhilo y Pink Glow",
    category: "piel",
    desde: 3000,
    featured: true,
    summary: "Microinyecciones de activos que hidratan, iluminan y dan firmeza desde dentro: polinucleótidos, complejos revitalizantes y ácido hialurónico ultrapuro.",
    description: [
      "Un skinbooster no aporta volumen: mejora la calidad de la piel. Cada fórmula tiene un objetivo distinto y se elige en valoración según lo que tu piel necesita.",
      "PDRN de salmón repara con polinucleótidos de máxima biocompatibilidad. NCTF combina ácido hialurónico, vitaminas, glutatión, péptidos y antioxidantes; es el protocolo líder para revitalización facial y de ojera. Profhilo, con una de las concentraciones más altas de ácido hialurónico ultrapuro, da efecto tensor y firmeza global desde la primera sesión. Pink Glow es un cóctel mesoterapéutico para pieles apagadas, deshidratadas o con pigmentación irregular.",
    ],
    forWhom: ["Piel deshidratada, apagada o con textura irregular", "Ojeras y arrugas finas", "Pérdida de firmeza global", "Mantenimiento entre bioestimuladores"],
    details: [
      { label: "Duración", value: "30 min" },
      { label: "Sesiones", value: "Mínimo 4 cada 21 días (Profhilo: 2)" },
      { label: "Recuperación", value: "Pápulas leves 24 a 48 h" },
    ],
    prices: [
      { label: "PDRN salmón", value: "desde $3,800 · 4 sesiones $12,000" },
      { label: "NCTF facial", value: "$5,500 · 4 sesiones $16,800" },
      { label: "NCTF ojera", value: "4 sesiones $12,000" },
      { label: "Profhilo", value: "$8,500 · 2 sesiones $15,500" },
      { label: "Pink Glow", value: "$3,000 · 4 sesiones $11,200" },
    ],
    priceNote: "Costo por dosis, dependiente de la valoración médica.",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    short: "Reparación y activos de grado médico",
    category: "piel",
    desde: 2100,
    summary: "Microlesiones controladas que activan la reparación de la piel y abren canales para introducir activos: hidratación, despigmentación, cicatrices de acné o exosomas.",
    description: [
      "El microneedling actúa con dos mecanismos: crea microlesiones controladas que desencadenan un estímulo de reparación en la piel, y abre microcanales por donde entran activos de grado médico. Se aplica en rostro, cuello o manos cada 21 días.",
      "El protocolo con exosomas y factores de crecimiento usa extractos proteicos de células madre mesenquimales placentarias que activan colágeno, elastina y nuevos vasos sanguíneos; mejora cicatrices y manchas y optimiza la reparación cutánea.",
    ],
    forWhom: ["Piel deshidratada (ácido hialurónico, glicerol)", "Manchas y tono desigual (vitamina C, glutatión, ácido tranexámico)", "Cicatrices de acné", "Regeneración avanzada con exosomas"],
    details: [
      { label: "Duración", value: "45 min" },
      { label: "Sesiones", value: "4 a 5, cada 21 días" },
      { label: "Recuperación", value: "Enrojecimiento 24 a 48 h" },
    ],
    prices: [
      { label: "Hidratante", value: "$2,100 · 4 sesiones $7,800" },
      { label: "Despigmentante", value: "desde $2,100 · 5 sesiones $9,000" },
      { label: "Remodelado de cicatrices de acné", value: "$2,300 · 5 sesiones $9,000" },
      { label: "Exosomas + factores de crecimiento", value: "$3,500 · 4 sesiones $10,500" },
    ],
  },

  // ───────────── TECNOLOGÍA ─────────────
  {
    slug: "liftage",
    name: "Liftage HIFU",
    short: "Rejuvenecimiento profundo sin bisturí",
    category: "tecnologia",
    desde: 4400,
    featured: true,
    summary: "Ultrasonido focalizado de alta intensidad que actúa hasta el SMAS, el mismo plano que trata una cirugía de lifting. Sin agujas, sin incapacidad.",
    description: [
      "Liftage HIFU (High-Intensity Focused Ultrasound) es la tecnología más avanzada en lifting facial no quirúrgico. Utiliza energía ultrasónica de alta precisión que actúa en las capas más profundas de la piel, incluso en el SMAS (sistema musculoaponeurótico superficial).",
      "Trabaja en doble profundidad con disparos precisos para tensar sin volumen ni flacidez residual. El resultado se construye durante 3 meses; se recomiendan 3 a 4 sesiones al año.",
    ],
    forWhom: ["Flacidez global, pómulos caídos y mandíbula poco definida", "Mejillas y surcos nasogenianos", "Cuello y platisma", "Papada y ángulo mandibular", "Escote fotoexpuesto"],
    details: [
      { label: "Duración", value: "30 a 90 min según zona" },
      { label: "Resultado", value: "Progresivo hasta 3 meses" },
      { label: "Sesiones", value: "3 a 4 al año" },
    ],
    prices: [
      { label: "Rostro completo (no incluye papada)", value: "desde $7,500" },
      { label: "Medio rostro", value: "desde $5,100" },
      { label: "Cuello", value: "desde $6,100" },
      { label: "Papada", value: "desde $4,400" },
      { label: "Escote", value: "desde $4,900" },
    ],
  },

  {
    slug: "celluma-led",
    name: "Fototerapia Celluma LED",
    short: "Luz médica para piel, cabello y dolor",
    category: "tecnologia",
    desde: 900,
    image: "/media/celluma.jpg",
    summary: "Fotobiomodulación con longitudes de onda específicas que actúan en la actividad mitocondrial para optimizar la energía celular y la respuesta del tejido.",
    description: [
      "No todas las terapias de luz son iguales. Celluma PRO emite luz azul, roja e infrarroja en longitudes de onda que las células absorben para producir más energía: reduce inflamación, acelera la reparación y estimula colágeno.",
      "Sin calor, sin dolor y seguro en embarazo y lactancia. Se usa solo, en protocolos de varias sesiones, o como complemento de casi todos nuestros tratamientos.",
    ],
    forWhom: ["Acné activo", "Líneas finas y pérdida de firmeza", "Rosácea y piel sensible", "Caída de cabello", "Dolor muscular y articular"],
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

  // ───────────── FACIALES Y MASAJES ─────────────
  {
    slug: "faciales",
    name: "Faciales médicos",
    short: "Hydro deluxe, Pore-perfect, Age Element, Sense spa",
    category: "cabina",
    desde: 1250,
    summary: "Faciales de grado médico con activos específicos: hidratación, purificación, rejuvenecimiento epigenético o calma para pieles sensibles.",
    description: [
      "Nuestros faciales son la base de mantenimiento de cualquier protocolo. Cada uno combina limpieza, activos de grado médico y una técnica distinta según el objetivo.",
      "Age Element, de la línea Age Element® de Mesoestetic, estimula los mecanismos de regeneración celular y protección del ADN; es apto en embarazo y lactancia y el complemento ideal de bioestimuladores y skinboosters.",
    ],
    forWhom: ["Piel deshidratada o tras procedimientos (Hydro deluxe)", "Piel grasa o congestionada (Pore-perfect)", "Líneas finas y pérdida de firmeza (Age Element)", "Rosácea, dermatitis o hipersensibilidad (Sense spa)"],
    details: [
      { label: "Duración", value: "60 a 75 min" },
      { label: "Frecuencia", value: "Cada 3 a 4 semanas; Age Element 5 sesiones, 1 semanal" },
    ],
    prices: [
      { label: "Hydro deluxe", value: "$1,250" },
      { label: "Sense spa", value: "$1,250" },
      { label: "Pore-perfect", value: "desde $1,350" },
      { label: "Age Element", value: "$2,800 · 5 sesiones $9,800" },
    ],
  },
  {
    slug: "masajes",
    name: "Masajes terapéuticos",
    short: "Relaxing, Libera, Detox Drain, Leg Rest, Head Rest",
    category: "cabina",
    desde: 650,
    summary: "Masajes médico-estéticos para relajar, liberar contracturas, drenar o reactivar la circulación. Dos de ellos se agregan a cualquier facial.",
    description: [
      "Un espacio de descanso dentro de la clínica. Relaxing armoniza cuerpo y mente con movimientos suaves y rítmicos; Libera trabaja puntos de tensión con presión controlada para liberar contracturas; Detox Drain estimula el sistema linfático y es el complemento ideal tras tratamientos corporales.",
      "Leg Rest y Head Rest son sesiones de 30 minutos que puedes agregar a tu facial.",
    ],
    forWhom: ["Estrés y mala calidad del descanso", "Contracturas y sobrecarga postural", "Retención de líquidos y post-tratamiento corporal", "Piernas pesadas tras viajes o jornadas largas"],
    details: [
      { label: "Duración", value: "30 a 80 min" },
    ],
    prices: [
      { label: "Relaxing", value: "50 min $850 · 80 min $1,150" },
      { label: "Libera", value: "50 min $950 · 80 min $1,250" },
      { label: "Detox Drain", value: "45 min $850 · 3 sesiones $2,400" },
      { label: "Leg Rest", value: "30 min $650 · agrégalo a tu facial" },
      { label: "Head Rest", value: "30 min $650 · agrégalo a tu facial" },
    ],
  },

  // ───────────── IV THERAPY Y SUPLEMENTACIÓN ─────────────
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    short: "Infusiones médicas con enfoque wellness",
    category: "wellness",
    desde: 1500,
    featured: true,
    summary: "Sueros intravenosos formulados por las doctoras: detox, luminosidad, rendimiento deportivo, metabolismo, sueño reparador o recuperación tras una noche de exceso.",
    description: [
      "Cada infusión combina micronutrientes, antioxidantes y cofactores en dosis médicas para un objetivo concreto. Se aplican en clínica bajo supervisión y se recomiendan en series de 3 a 5 sesiones cada 15 días.",
      "Super Detox (glutatión y magnesio) para reinicio celular y luminosidad. NutriGlow (glutatión y vitamina C) para piel, cabello y uñas. Sports Enhancer (complejo B, zinc y magnesio) para recuperación y rendimiento. Lipolytic para activar el metabolismo y la eliminación de grasa. Deep Sleep & Glow (magnesio, GABA, taurina, glicina) para descanso profundo. Hangover Fix para rehidratar y recuperar en menos de una hora.",
    ],
    forWhom: ["Fatiga, estrés oxidativo y piel apagada", "Atletas y personas activas", "Apoyo en protocolos de composición corporal", "Insomnio y descanso de mala calidad", "Resaca y deshidratación"],
    details: [
      { label: "Duración", value: "45 a 60 min" },
      { label: "Sesiones", value: "3 a 5, cada 15 días" },
      { label: "Complemento", value: "Suplementación oral Neovitamins" },
    ],
    prices: [
      { label: "Super Detox", value: "$2,500 · 3 sesiones $7,000" },
      { label: "NutriGlow", value: "$1,800 · 3 sesiones $5,000" },
      { label: "Sports Enhancer", value: "$2,000 · 3 sesiones $5,600" },
      { label: "Lipolytic", value: "$2,500 · 3 sesiones $7,000" },
      { label: "Deep Sleep & Glow", value: "$2,500 · 4 sesiones $8,000" },
      { label: "Hangover Fix", value: "$1,500" },
    ],
  },
  {
    slug: "suplementacion",
    name: "Suplementación oral",
    short: "Neovitamins y fórmulas dermatológicas",
    category: "wellness",
    desde: 750,
    summary: "Formulaciones médicas y nutracéuticos que potencian los resultados de los tratamientos estéticos y regenerativos.",
    description: [
      "Protocolos Neovitamins desarrollados para optimizar la función mitocondrial, reducir el estrés oxidativo y favorecer la recuperación metabólica: Glutatión, NAD+, Sleep & Relax y Adrenal Support.",
      "Fórmulas capilares y dermatológicas bajo prescripción, y Protegold, suplemento proteico de alto valor biológico para recuperación tisular y aumento de masa magra.",
    ],
    forWhom: ["Complemento de IV Therapy y protocolos regenerativos", "Caída de cabello (bajo valoración)", "Fotoprotección oral", "Recuperación post-procedimiento"],
    details: [
      { label: "Requiere", value: "Valoración médica previa" },
    ],
    prices: [
      { label: "Suplementos Neovitamins", value: "$1,600 c/u" },
      { label: "Minoxidil cápsulas", value: "$750" },
      { label: "Dutasteride cápsulas", value: "$750" },
      { label: "Heliocare cápsulas", value: "$862" },
      { label: "Protegold", value: "$1,680" },
    ],
  },
];

export const bySlug = (slug: string) => treatments.find((t) => t.slug === slug);
export const byCategory = (c: Category) => treatments.filter((t) => t.category === c);
export const featured = () => treatments.filter((t) => t.featured);

export const mxn = (n: number) => `$${n.toLocaleString("es-MX")}`;
