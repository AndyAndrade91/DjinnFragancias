/* =====================================================================
   CONFIGURACIÓN (lo primero que tenés que tocar)
   ===================================================================== */
const MARCA = "Djinn";
const INSTAGRAM = "djinnfragancias"; // usuario de Instagram, sin @
const IG_DM = `https://ig.me/m/${INSTAGRAM}`; // abre directo el chat con la cuenta
const WHATSAPP = "59895033403"; // +598 95 033 403 (código de país + número, sin + ni espacios)
const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`; // abre WhatsApp con el mensaje ya escrito

/* FOTOS: cada perfume usa 2 fotos dentro de la carpeta img/
     img/<id>-1.jpg  →  foto del perfume
     img/<id>-2.jpg  →  foto de las notas (salida, corazón y fondo)
   Ejemplo para "alba-citrica": img/alba-citrica-1.jpg y img/alba-citrica-2.jpg
   Si tus fotos son png o webp, cambiá FOTO_EXT. Si querés otros nombres,
   agregá al perfume:  fotos: ["img/a.jpg", "img/b.jpg"] */
const FOTO_EXT = "jpg";
const TIPOS_FOTO = ["Perfume", "Notas"];

/* Cada perfume es un bloque. Para agregar uno, copiá un bloque y cambiá los datos.
   El orden es: id, nombre, genero, ml, etiqueta, color, desc  y al final
   indicadores + acordes PEGADOS (tal cual los scrapeás de Fragantica).
   indicadores: [["invierno","8"], ...] → votos de cada estación / momento.
     El mayor valor se toma como 100% y los demás se calculan proporcionalmente.
     Acepta mayúsculas/minúsculas y strings o números.
   acordes: lista [nombre, fuerza de 0 a 100]. La barra más larga es la principal.
   etiqueta: "Nuevo", "Más vendido" o "" para ninguna. */
const PERFUMES = [
  {
    id: "mandarin-sky-100ml",
    nombre: "Odyssey Mandarin Sky 100ml - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "Más vendido",
    color: "#d8d66a",
    desc: "Una explosión fresca y dulce de mandarina, cítricos brillantes y caramelo, con un fondo amaderado que aporta elegancia y duración.",
    indicadores: [
      ["Invierno", "2700"],
      ["Primavera", "2400"],
      ["Verano", "1600"],
      ["Otoño", "2600"],
      ["Día", "2400"],
      ["Noche", "2600"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Caramelo", 74],
      ["Dulce", 72],
      ["Ámbar", 57],
      ["Aromático", 53],
      ["Avainillado", 47],
      ["Amaderado", 46],
    ],
  },
  {
    id: "mandarin-sky-200ml",
    nombre: "Odyssey Mandarin Sky 200ml - Armaf",
    genero: "Hombre",
    ml: 200,
    etiqueta: "",
    color: "#d8d66a",
    desc: "Una explosión fresca y dulce de mandarina, cítricos brillantes y caramelo, con un fondo amaderado que aporta elegancia y duración.",
    indicadores: [
      ["Invierno", "2700"],
      ["Primavera", "2400"],
      ["Verano", "1600"],
      ["Otoño", "2600"],
      ["Día", "2400"],
      ["Noche", "2600"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Caramelo", 74],
      ["Dulce", 72],
      ["Ámbar", 57],
      ["Aromático", 53],
      ["Avainillado", 47],
      ["Amaderado", 46],
    ],
  },
  {
    id: "khamrah-base",
    nombre: "Khamrah - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "Más vendido",
    color: "#d19d0d",
    desc: "Una fragancia intensa y dulce con canela, dátiles y vainilla, acompañada de notas ambaradas y especiadas que crean una presencia cálida y sofisticada.",
    indicadores: [
      ["Invierno", "21900"],
      ["Primavera", "4000"],
      ["Verano", "2500"],
      ["Otoño", "17400"],
      ["Día", "7600"],
      ["Noche", "17300"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Cálido especiado", 82],
      ["Avainillado", 80],
      ["Ámbar", 76],
      ["Canela", 68],
      ["Amaderado", 48],
      ["Fresco especiado", 48],
      ["Afrutados", 44],
    ],
  },
  {
    id: "khamrah-qahwa",
    nombre: "Khamrah Qahwa - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#5a3928",
    desc: "Una fragancia dulce y especiada que combina canela, cardamomo y jengibre en la salida, con praliné, frutas confitadas y flores blancas en el corazón, sobre una base de café, vainilla, haba tonka, benjuí y almizcle.",
    indicadores: [
      ["Invierno", "12100"],
      ["Primavera", "1900"],
      ["Verano", "758"],
      ["Otoño", "9600"],
      ["Día", "3900"],
      ["Noche", "10000"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Dulce", 87],
      ["Avainillado", 81],
      ["Canela", 64],
      ["Café", 60],
      ["Ámbar", 51],
      ["Atalcado", 45],
    ],
  },
  {
    id: "khamrah-dukhan",
    nombre: "Khamrah Dukhan - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4a3027",
    desc: "Una fragancia intensa, cálida y ahumada que abre con mandarina, pimienta de Jamaica y especias ahumadas, continúa con ládano, flor de azahar, incienso y pachulí, y termina con tabaco, ámbar, haba tonka, benjuí y praliné.",
    indicadores: [
      ["Invierno", "1900"],
      ["Primavera", "387"],
      ["Verano", "147"],
      ["Otoño", "1600"],
      ["Día", "608"],
      ["Noche", "1600"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Cálido especiado", 92],
      ["Dulce", 75],
      ["Tabaco", 51],
      ["Balsámico", 47],
      ["Avainillado", 47],
      ["Ahumado", 46],
    ],
  },
  {
    id: "khamrah-waha",
    nombre: "Khamrah Waha - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4a3027",
    desc: "Una fragancia intensa, cálida y ahumada que abre con mandarina, pimienta de Jamaica y especias ahumadas, continúa con ládano, flor de azahar, incienso y pachulí, y termina con tabaco, ámbar, haba tonka, benjuí y praliné.",
    indicadores: [
      ["Invierno", "159"],
      ["Primavera", "763"],
      ["Verano", "965"],
      ["Otoño", "335"],
      ["Día", "768"],
      ["Noche", "325"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 90],
      ["Avainillado", 88],
      ["Aromático", 80],
      ["Atalcado", 62],
      ["Amaderado", 61],
      ["Dulce", 60],
      ["Verde", 56],
      ["Ozónico", 55],
      ["Almizclado", 53],
    ],
  },
  {
    id: "fakhar-black",
    nombre: "Fakhar Black - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#1c1c24",
    desc: "Una fragancia fresca, limpia y muy masculina, con un fondo cálido. Versátil para el día a día y para la noche.",
    indicadores: [
      ["Invierno", "1800"],
      ["Primavera", "5600"],
      ["Verano", "5700"],
      ["Otoño", "3900"],
      ["Día", "5600"],
      ["Noche", "3400"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Fresco especiado", 97],
      ["Amaderado", 78],
      ["Afrutados", 73],
      ["Fresco", 65],
      ["Cítrico", 64],
      ["Lavanda", 63],
      ["Verde", 57],
      ["Herbal", 55],
      ["Ámbar", 54],
    ],
  },
  {
    id: "fakhar-rose",
    nombre: "Fakhar Rose - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e08aa3",
    desc: "La versión femenina de la línea Fakhar, con rosa búlgara y flor de cereus nocturno en el corazón. Floral y elegante.",
    indicadores: [
      ["Invierno", "982"],
      ["Primavera", "1600"],
      ["Verano", "1100"],
      ["Otoño", "1200"],
      ["Día", "1600"],
      ["Noche", "1000"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Afrutados", 54],
      ["Nardos", 54],
      ["Dulce", 47],
      ["Amaderado", 46],
      ["Animálico", 45],
    ],
  },
  {
    id: "fakhar-platin",
    nombre: "Fakhar Platin - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#aab4bf",
    desc: "Una fragancia cítrica, especiada, aromática y amaderada, fresca y elegante.",
    indicadores: [
      ["Invierno", "234"],
      ["Primavera", "562"],
      ["Verano", "550"],
      ["Otoño", "472"],
      ["Día", "560"],
      ["Noche", "365"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Amaderado", 100],
      ["Cítrico", 92],
      ["Aromático", 92],
      ["Lavanda", 91],
      ["Afrutados", 88],
      ["Cálido especiado", 84],
      ["Tropical", 74],
      ["Fresco", 72],
      ["Ámbar", 72],
    ],
  },
  {
    id: "fakhar-extrait",
    nombre: "Fakhar Extrait - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d9a441",
    desc: "Una fragancia cítrica y especiada con pomelo, pimienta rosa y cardamomo en la salida, artemisa y nardo en el corazón, sobre un fondo cálido de vetiver, cedro, haba tonka y madera de ámbar.",
    indicadores: [
      ["Invierno", "843"],
      ["Primavera", "733"],
      ["Verano", "371"],
      ["Otoño", "874"],
      ["Día", "629"],
      ["Noche", "863"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Nardos", 84],
      ["Floral blanco", 73],
      ["Animálico", 66],
      ["Almizclado", 61],
      ["Aromático", 57],
      ["Cítrico", 57],
      ["Cálido especiado", 56],
      ["Amaderado", 55],
      ["Cuero", 53],
    ],
  },
  {
    id: "fakhar-gold",
    nombre: "Fakhar Gold - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c58a2e",
    desc: "Una fragancia cálida y luminosa de la línea Fakhar, con un fondo ambarado y amaderado.",
    indicadores: [
      ["Invierno", "72"],
      ["Primavera", "18"],
      ["Verano", "5"],
      ["Otoño", "71"],
      ["Día", "30"],
      ["Noche", "72"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Amaderado", 83],
      ["Nardos", 73],
      ["Floral blanco", 65],
      ["Atalcado", 55],
      ["Almizclado", 52],
      ["Animálico", 51],
      ["Aromático", 48],
      ["Avainillado", 46],
    ],
  },
  {
    id: "hawas-for-him",
    nombre: "Hawas for Him - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "Más vendido",
    color: "#7549ad",
    desc: "Una brisa fresca y vibrante: cítricos jugosos, notas acuáticas y un toque dulce de ciruela sobre un fondo amaderado y almizclado.",
    indicadores: [
      ["Invierno", "1500"],
      ["Primavera", "7200"],
      ["Verano", "8500"],
      ["Otoño", "3100"],
      ["Día", "7500"],
      ["Noche", "3500"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cítrico", 96],
      ["Acuático", 86],
      ["Fresco", 79],
      ["Cálido especiado", 63],
      ["Dulce", 57],
      ["Ámbar", 57],
      ["Almizclado", 55],
      ["Aromático", 54],
      ["Animálico", 53],
    ],
  },
  {
    id: "hawas-tropical",
    nombre: "Hawas Tropical - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#e7a84b",
    desc: "Una fragancia vibrante y tropical, ideal para quienes buscan un aroma alegre, fresco y lleno de energía.",
    indicadores: [
      ["Invierno", "122"],
      ["Primavera", "1200"],
      ["Verano", "1500"],
      ["Otoño", "344"],
      ["Día", "1300"],
      ["Noche", "390"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Verde", 98],
      ["Coco", 93],
      ["Amaderado", 92],
      ["Avainillado", 76],
      ["Aromático", 65],
      ["Fresco", 65],
      ["Atalcado", 64],
      ["Lactónico", 64],
      ["Afrutados", 61],
    ],
  },
  {
    id: "hawas-verde",
    nombre: "Hawas Verde - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#38734b",
    desc: "Una propuesta fresca y verde, con un carácter natural y moderno para acompañarte durante el día.",
    indicadores: [
      ["Invierno", "45"],
      ["Primavera", "477"],
      ["Verano", "592"],
      ["Otoño", "135"],
      ["Día", "516"],
      ["Noche", "95"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Aromático", 85],
      ["Fresco especiado", 85],
      ["Amaderado", 76],
      ["Afrutados", 60],
      ["Verde", 59],
      ["Pachulí", 54],
      ["Conífero", 50],
      ["Fresco", 49],
      ["Ámbar", 47],
    ],
  },
  {
    id: "hawas-ice",
    nombre: "Hawas Ice - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#a8dce8",
    desc: "Una fragancia fresca y refrescante, con un estilo moderno ideal para los días cálidos.",
    indicadores: [
      ["Invierno", "1300"],
      ["Primavera", "5600"],
      ["Verano", "6700"],
      ["Otoño", "2800"],
      ["Día", "5900"],
      ["Noche", "2400"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cítrico", 92],
      ["Dulce", 56],
      ["Fresco", 53],
      ["Aromático", 52],
      ["Almizclado", 50],
      ["Atalcado", 49],
      ["Fresco especiado", 48],
      ["Verde", 47],
      ["Ámbar", 45],
    ],
  },
  {
    id: "hawas-fire",
    nombre: "Hawas Fire - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#c73527",
    desc: "Una fragancia intensa y llamativa, pensada para quienes buscan destacar con una presencia marcada.",
    indicadores: [
      ["Invierno", "1300"],
      ["Primavera", "1400"],
      ["Verano", "1100"],
      ["Otoño", "1400"],
      ["Día", "1300"],
      ["Noche", "1400"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Aromático", 84],
      ["Mineral", 65],
      ["Marino", 61],
      ["Especiado suave", 58],
      ["Animálico", 55],
      ["Floral blanco", 54],
      ["Salado", 44],
    ],
  },
  {
    id: "hawas-black",
    nombre: "Hawas Black - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#242424",
    desc: "Un aroma de carácter oscuro y sofisticado, ideal para quienes prefieren una presencia elegante y distintiva.",
    indicadores: [
      ["Invierno", "2100"],
      ["Primavera", "2500"],
      ["Verano", "2200"],
      ["Otoño", "2400"],
      ["Día", "2400"],
      ["Noche", "2300"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cítrico", 82],
      ["Musgoso", 70],
      ["Terrosos", 66],
      ["Fresco especiado", 51],
      ["Afrutados", 50],
      ["Pachulí", 49],
      ["Dulce", 48],
      ["Aromático", 45],
    ],
  },
  {
    id: "hawas-elixir",
    nombre: "Hawas Elixir - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#593a73",
    desc: "Una fragancia de carácter intenso y envolvente, ideal para destacar especialmente por la noche.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "410"],
      ["Verano", "116"],
      ["Otoño", "894"],
      ["Día", "377"],
      ["Noche", "962"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Aromático", 81],
      ["Verde", 69],
      ["Dulce", 65],
      ["Fresco especiado", 64],
      ["Cálido especiado", 59],
      ["Ámbar", 59],
      ["Chocolate", 55],
      ["Lavanda", 54],
      ["Atalcado", 51],
    ],
  },
  {
    id: "hawas-kobra",
    nombre: "Hawas Kobra - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#426b3d",
    desc: "Una fragancia audaz y llamativa para quienes buscan un aroma con personalidad.",
    indicadores: [
      ["Invierno", "431"],
      ["Primavera", "1600"],
      ["Verano", "1900"],
      ["Otoño", "986"],
      ["Día", "1700"],
      ["Noche", "744"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 85],
      ["Fresco", 67],
      ["Verde", 60],
      ["Almizclado", 53],
      ["Atalcado", 46],
      ["Amaderado", 46],
      ["Floral blanco", 44],
    ],
  },
  {
    id: "hawas-viper",
    nombre: "Hawas Viper - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#343d50",
    desc: "Una propuesta moderna y atrevida, ideal para quienes buscan un perfume con identidad propia.",
    indicadores: [
      ["Invierno", "177"],
      ["Primavera", "65"],
      ["Verano", "22"],
      ["Otoño", "134"],
      ["Día", "60"],
      ["Noche", "159"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Tabaco", 97],
      ["Cálido especiado", 95],
      ["Dulce", 88],
      ["Verde", 84],
      ["Cannabis", 71],
      ["Afrutados", 63],
      ["Café", 57],
      ["Herbal", 57],
      ["Almizclado", 55],
    ],
  },
  {
    id: "hawas-sapphire",
    nombre: "Hawas Sapphire - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#1766a8",
    desc: "Una fragancia de estilo elegante y contemporáneo, con una presencia fresca y distinguida.",
    indicadores: [
      ["Invierno", "63"],
      ["Primavera", "261"],
      ["Verano", "314"],
      ["Otoño", "102"],
      ["Día", "243"],
      ["Noche", "119"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cítrico", 76],
      ["Floral blanco", 69],
      ["Amaderado", 68],
      ["Tropical", 62],
      ["Atalcado", 61],
      ["Almizclado", 61],
      ["Animálico", 56],
      ["Ámbar", 55],
      ["Aromático", 52],
    ],
  },
  {
    id: "hawas-atlantis",
    nombre: "Hawas Atlantis - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#168b9b",
    desc: "Una propuesta de inspiración oceánica, ideal para quienes disfrutan de una estética fresca y acuática.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "166"],
      ["Verano", "168"],
      ["Otoño", "103"],
      ["Día", "166"],
      ["Noche", "84"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cítrico", 93],
      ["Acuático", 83],
      ["Afrutados", 73],
      ["Fresco", 71],
      ["Cálido especiado", 71],
      ["Ámbar", 66],
      ["Marino", 62],
      ["Animálico", 60],
      ["Pachulí", 60],
    ],
  },
  {
    id: "hawas-pink",
    nombre: "Hawas Pink - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e78eae",
    desc: "Una fragancia de estilo juvenil y llamativo, con una imagen delicada y moderna.",
    indicadores: [
      ["Invierno", "74"],
      ["Primavera", "52"],
      ["Verano", "35"],
      ["Otoño", "75"],
      ["Día", "56"],
      ["Noche", "63"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Floral blanco", 70],
      ["Avainillado", 63],
      ["Canela", 59],
      ["Atalcado", 58],
      ["Cálido especiado", 56],
      ["Nardos", 52],
      ["Caramelo", 50],
      ["Fresco especiado", 47],
    ],
  },
  {
    id: "hawas-diva",
    nombre: "Hawas Diva - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#b65b8a",
    desc: "Una propuesta femenina y sofisticada, pensada para destacar con una presencia elegante y segura.",
    indicadores: [
      ["Invierno", "158"],
      ["Primavera", "129"],
      ["Verano", "63"],
      ["Otoño", "156"],
      ["Día", "100"],
      ["Noche", "161"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Avainillado", 73],
      ["Ámbar", 68],
      ["Dulce", 61],
      ["Atalcado", 60],
      ["Rosas", 58],
      ["Almizclado", 58],
      ["Fresco", 52],
      ["Verde", 52],
      ["Aromático", 49],
    ],
  },
  {
    id: "hawas-malibu",
    nombre: "Hawas Malibu - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#ed9d63",
    desc: "Una fragancia de espíritu veraniego, ideal para acompañar salidas, vacaciones y días cálidos.",
    indicadores: [
      ["Invierno", "179"],
      ["Primavera", "671"],
      ["Verano", "741"],
      ["Otoño", "366"],
      ["Día", "674"],
      ["Noche", "455"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Ámbar", 85],
      ["Cítrico", 79],
      ["Afrutados", 76],
      ["Atalcado", 68],
      ["Avainillado", 61],
      ["Almizclado", 60],
      ["Aromático", 57],
      ["Amaderado", 57],
      ["Iris", 56],
    ],
  },
  {
    id: "hawas-for-her",
    nombre: "Hawas For Her - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#ce7da3",
    desc: "Una fragancia femenina de estilo moderno, ideal para distintas ocasiones.",
    indicadores: [
      ["Invierno", "120"],
      ["Primavera", "103"],
      ["Verano", "75"],
      ["Otoño", "121"],
      ["Día", "112"],
      ["Noche", "107"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Dulce", 87],
      ["Afrutados", 70],
      ["Terroso", 67],
      ["Pachulí", 65],
      ["Cítrico", 65],
      ["Iris", 59],
      ["Fresco especiado", 57],
      ["Fresco", 55],
      ["Floral blanco", 53],
    ],
  },
  {
    id: "hawas-for-her-eclat",
    nombre: "Hawas For Her Éclat - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e8b7cb",
    desc: "Una propuesta femenina y luminosa, con una imagen elegante para el día y ocasiones especiales.",
    indicadores: [
      ["Invierno", "78"],
      ["Primavera", "79"],
      ["Verano", "55"],
      ["Otoño", "64"],
      ["Día", "65"],
      ["Noche", "68"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Rosas", 95],
      ["Ámbar", 87],
      ["Avainillado", 75],
      ["Atalcado", 71],
      ["Almizclado", 69],
      ["Amaderado", 66],
      ["Dulce", 64],
      ["Fresco", 64],
      ["Tropical", 62],
    ],
  },
  {
    id: "hawas-thunder",
    nombre: "Hawas Thunder - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#596575",
    desc: "Una fragancia de imagen intensa y enérgica, ideal para quienes buscan proyectar seguridad y personalidad.",
    indicadores: [
      ["Invierno", "77"],
      ["Primavera", "170"],
      ["Verano", "179"],
      ["Otoño", "127"],
      ["Día", "181"],
      ["Noche", "134"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 99],
      ["Amaderado", 74],
      ["Fresco", 71],
      ["Afrutados", 69],
      ["Cálido especiado", 54],
      ["Verde", 52],
      ["Aromático", 48],
      ["Ámbar", 47],
    ],
  },
  {
    id: "hawas-highness",
    nombre: "Hawas Highness - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b59a65",
    desc: "Una propuesta de estilo distinguido, pensada para quienes prefieren una imagen sofisticada y exclusiva.",
    indicadores: [
      ["Invierno", "45"],
      ["Primavera", "206"],
      ["Verano", "208"],
      ["Otoño", "100"],
      ["Día", "194"],
      ["Noche", "92"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 97],
      ["Fresco", 72],
      ["Floral blanco", 67],
      ["Cálido especiado", 62],
      ["Atalcado", 56],
      ["Aromático", 55],
      ["Ámbar", 53],
      ["Violeta", 52],
      ["Terroso", 52],
    ],
  },
  {
    id: "hawas-london",
    nombre: "Hawas London - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#4b5369",
    desc: "Una fragancia de inspiración urbana, con una imagen clásica y contemporánea.",
    indicadores: [
      ["Invierno", "176"],
      ["Primavera", "154"],
      ["Verano", "86"],
      ["Otoño", "166"],
      ["Día", "127"],
      ["Noche", "176"],
    ],
    acordes: [
      ["Rosas", 100],
      ["Ámbar", 91],
      ["Cálido especiado", 87],
      ["Almizclado", 69],
      ["Especiado suave", 59],
      ["Metálico", 58],
      ["Floral blanco", 55],
      ["Dulce", 55],
      ["Cuero", 52],
      ["Atalcado", 51],
    ],
  },
  {
    id: "hawas-lava-gold",
    nombre: "Hawas Lava Gold - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b88b32",
    desc: "Una propuesta llamativa y sofisticada, con una imagen cálida y lujosa.",
    indicadores: [
      ["Invierno", "65"],
      ["Primavera", "30"],
      ["Verano", "14"],
      ["Otoño", "54"],
      ["Día", "35"],
      ["Noche", "66"],
    ],
    acordes: [
      ["Cuero", 100],
      ["Afrutado", 93],
      ["Dulce", 77],
      ["Cálido especiado", 73],
      ["Oud", 71],
      ["Animálico", 62],
      ["Terroso", 61],
      ["Musgoso", 57],
      ["Ámbar", 54],
      ["Pachulí", 52],
    ],
  },
  {
    id: "hawas-overdose",
    nombre: "Hawas Overdose - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#692c38",
    desc: "Una fragancia de presencia intensa, ideal para quienes prefieren aromas con carácter.",
    indicadores: [
      ["Invierno", "71"],
      ["Primavera", "20"],
      ["Verano", "8"],
      ["Otoño", "68"],
      ["Día", "51"],
      ["Noche", "66"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 94],
      ["Ámbar", 88],
      ["Cálido especiado", 74],
      ["Chocolate", 59],
      ["Floral blanco", 57],
      ["Animálico", 57],
      ["Atalcado", 54],
      ["Balsámico", 48],
    ],
  },
  {
    id: "hawas-exotic",
    nombre: "Hawas Exotic - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#bd7048",
    desc: "Una propuesta de estilo exótico y llamativo, pensada para quienes buscan algo diferente.",
    indicadores: [
      ["Invierno", "28"],
      ["Primavera", "12"],
      ["Verano", "4"],
      ["Otoño", "27"],
      ["Día", "16"],
      ["Noche", "28"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Terrosos", 98],
      ["Floral blanco", 97],
      ["Cálido especiado", 90],
      ["Ámbar", 89],
      ["Atalcado", 87],
      ["Florales", 82],
      ["Iris", 74],
      ["Coco", 68],
      ["Almizclado", 67],
    ],
  },
  {
    id: "hawas-glitz",
    nombre: "Hawas Glitz - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c6a4d8",
    desc: "Una fragancia de imagen moderna y brillante, ideal para destacar en ocasiones especiales.",
    indicadores: [
      ["Invierno", "16"],
      ["Primavera", "13"],
      ["Verano", "12"],
      ["Otoño", "14"],
      ["Día", "10"],
      ["Noche", "14"],
    ],
    acordes: [
      ["Atalcado", 100],
      ["Rosas", 72],
      ["Amaderado", 65],
      ["Cítrico", 58],
      ["Avainillado", 55],
      ["Dulce", 54],
      ["Iris", 51],
      ["Almizclado", 47],
      ["Fresco especiado", 47],
      ["Ámbar", 47],
    ],
  },
  {
    id: "hawas-alpha-for-him",
    nombre: "Hawas Alpha For Him - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#3b4a37",
    desc: "Una propuesta masculina de carácter decidido, ideal para quienes buscan transmitir confianza y personalidad.",
    indicadores: [
      ["Invierno", "2"],
      ["Primavera", "6"],
      ["Verano", "6"],
      ["Otoño", "2"],
      ["Día", "8"],
      ["Noche", "4"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 86],
      ["Pachulí", 75],
      ["Animálico", 74],
      ["Ámbar", 71],
      ["Cuero", 67],
      ["Floral blanco", 62],
      ["Amaderado", 59],
      ["Balsámico", 55],
      ["Fresco", 53],
    ],
  },
  {
    id: "hawas-majestic",
    nombre: "Hawas Majestic - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#9b7b50",
    desc: "Una fragancia de imagen elegante y distinguida, pensada para quienes buscan una presencia sofisticada.",
    indicadores: [
      ["Invierno", "20"],
      ["Primavera", "19"],
      ["Verano", "11"],
      ["Otoño", "23"],
      ["Día", "18"],
      ["Noche", "21"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Ámbar", 98],
      ["Mineral", 87],
      ["Amaderado", 83],
      ["Metálico", 67],
      ["Cítrico", 64],
      ["Animálico", 62],
      ["Cuero", 59],
      ["Almizclado", 58],
      ["Musgoso", 58],
    ],
  },
  {
    id: "hawas-love",
    nombre: "Hawas Love - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#d96c91",
    desc: "Una propuesta romántica y femenina, con una imagen dulce y delicada.",
    indicadores: [
      ["Invierno", "3"],
      ["Primavera", "0"],
      ["Verano", "0"],
      ["Otoño", "1"],
      ["Día", "0"],
      ["Noche", "0"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Floral blanco", 80],
      ["Avainillado", 73],
      ["Cítrico", 68],
      ["Cálido especiado", 60],
      ["Floral amarillo", 55],
      ["Especiado suave", 51],
      ["Aromático", 50],
      ["Ámbar", 45],
    ],
  },
  {
    id: "hawas-dreams",
    nombre: "Hawas Dreams - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#8d83bd",
    desc: "Una fragancia de estilo moderno y envolvente, ideal para quienes buscan una propuesta diferente.",
    indicadores: [
      ["Invierno", "2"],
      ["Primavera", "2"],
      ["Verano", "2"],
      ["Otoño", "0"],
      ["Día", "2"],
      ["Noche", "0"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 65],
      ["Atalcado", 61],
      ["Almizclado", 57],
      ["Iris", 53],
      ["Floral blanco", 49],
      ["Terrosos", 48],
      ["Aromático", 47],
      ["Fresco especiado", 45],
    ],
  },
  {
    id: "hawas-chrome",
    nombre: "Hawas Chrome - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#a8b4bd",
    desc: "Una propuesta de imagen limpia y contemporánea, con un estilo moderno y versátil.",
    indicadores: [
      ["Invierno", "75"],
      ["Primavera", "160"],
      ["Verano", "160"],
      ["Otoño", "120"],
      ["Día", "151"],
      ["Noche", "123"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 81],
      ["Tropical", 67],
      ["Almizclado", 55],
      ["Atalcado", 52],
      ["Ámbar", 51],
      ["Fresco", 47],
      ["Acuático", 46],
      ["Cítrico", 45],
    ],
  },
  {
    id: "hawas-reina",
    nombre: "Hawas Reina - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#8c4774",
    desc: "Una fragancia de imagen femenina y elegante, pensada para quienes buscan destacar con personalidad.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "64"],
      ["Verano", "57"],
      ["Otoño", "51"],
      ["Día", "59"],
      ["Noche", "58"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Dulce", 87],
      ["Avainillado", 81],
      ["Atalcado", 72],
      ["Florales", 72],
      ["Afrutados", 69],
      ["Tropical", 63],
      ["Lactónico", 60],
      ["Cítrico", 55],
      ["Almizclado", 51],
    ],
  },
  {
    id: "hawas-nautilus",
    nombre: "Hawas Nautilus - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#286b79",
    desc: "Una propuesta de inspiración marina, con una imagen fresca y aventurera.",
    indicadores: [
      ["Invierno", "16"],
      ["Primavera", "47"],
      ["Verano", "58"],
      ["Otoño", "36"],
      ["Día", "51"],
      ["Noche", "30"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Aromático", 79],
      ["Marino", 78],
      ["Ámbar", 64],
      ["Arena", 60],
      ["Salado", 55],
      ["Animálico", 50],
      ["Fresco especiado", 46],
    ],
  },
  {
    id: "hawas-la-mer",
    nombre: "Hawas La Mer - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4b9caa",
    desc: "Una fragancia de inspiración costera, ideal para quienes buscan una imagen fresca y relajada.",
    indicadores: [
      ["Invierno", "5"],
      ["Primavera", "34"],
      ["Verano", "43"],
      ["Otoño", "8"],
      ["Día", "33"],
      ["Noche", "13"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Verde", 96],
      ["Afrutados", 93],
      ["Aromático", 83],
      ["Fresco especiado", 76],
      ["Especiado suave", 62],
      ["Atalcado", 57],
      ["Amaderado", 54],
      ["Florales", 49],
      ["Floral blanco", 45],
    ],
  },
  {
    id: "hawas-private-terra",
    nombre: "Hawas Private Terra - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#806144",
    desc: "Una propuesta de imagen terrosa y sofisticada, pensada para quienes prefieren un estilo distinguido.",
    indicadores: [
      ["Invierno", "10"],
      ["Primavera", "4"],
      ["Verano", "3"],
      ["Otoño", "8"],
      ["Día", "5"],
      ["Noche", "9"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Terrosos", 67],
      ["Musgoso", 63],
      ["Marino", 43],
      ["Salado", 35],
    ],
  },
  {
    id: "hawas-private-dulce",
    nombre: "Hawas Private Dulce - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b87591",
    desc: "Una fragancia de imagen dulce y envolvente, ideal para quienes buscan un aroma con personalidad.",
    indicadores: [
      ["Invierno", "11"],
      ["Primavera", "3"],
      ["Verano", "1"],
      ["Otoño", "12"],
      ["Día", "8"],
      ["Noche", "8"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Nueces", 94],
      ["Cacao", 74],
      ["Cálido especiado", 71],
      ["Dulce", 64],
      ["Floral blanco", 55],
      ["Pachulí", 55],
      ["Terrosos", 55],
      ["Aromático", 51],
      ["Almizclado", 49],
    ],
  },
  {
    id: "odyssey-homme",
    nombre: "Odyssey Homme - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#000000",
    desc: "Una noche intensa y elegante: cítricos brillantes y especias se mezclan con caramelo, ámbar y madera oscura para una estela cálida y envolvente.",
    indicadores: [
      ["Invierno", "1700"],
      ["Primavera", "780"],
      ["Verano", "248"],
      ["Otoño", "1500"],
      ["Día", "737"],
      ["Noche", "1500"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cálido especiado", 75],
      ["Avainillado", 75],
      ["Cítrico", 66],
      ["Atalcado", 64],
      ["Ámbar", 64],
      ["Floral blanco", 59],
      ["Aromático", 52],
      ["Dulce", 47],
      ["Rosas", 45],
    ],
  },
  {
    id: "odyssey-homme-white",
    nombre: "Odyssey Homme White - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#ffffff",
    desc: "Una frescura luminosa y sofisticada: cítricos y notas aromáticas se unen a un corazón especiado y un fondo amaderado, limpio y ligeramente dulce.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "822"],
      ["Verano", "403"],
      ["Otoño", "1000"],
      ["Día", "861"],
      ["Noche", "978"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Aromático", 81],
      ["Avainillado", 79],
      ["Ámbar", 78],
      ["Cálido especiado", 77],
      ["Especiado suave", 64],
      ["Dulce", 52],
      ["Atalcado", 51],
      ["Marino", 46],
    ],
  },
  {
    id: "odyssey-aqua",
    nombre: "Odyssey Aqua - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#5f9913",
    desc: "Una ráfaga de frescura: cítricos jugosos y notas acuáticas se combinan con acordes aromáticos y un fondo amaderado limpio y elegante.",
    indicadores: [
      ["Invierno", "133"],
      ["Primavera", "1200"],
      ["Verano", "1300"],
      ["Otoño", "448"],
      ["Día", "1200"],
      ["Noche", "342"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Fresco especiado", 87],
      ["Cítrico", 87],
      ["Verde", 73],
      ["Amaderado", 61],
      ["Ámbar", 58],
      ["Herbal", 53],
      ["Lavanda", 51],
      ["Pachulí", 47],
      ["Almizclado", 47],
    ],
  },
  {
    id: "odyssey-spectra",
    nombre: "Odyssey Spectra - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#8d6fb3",
    desc: "Una noche especiada y envolvente: canela y manzana abren paso a una lavanda aromática, mientras la vainilla, el ámbar y el tabaco dejan una estela cálida y elegante.",
    indicadores: [
      ["Invierno", "344"],
      ["Primavera", "251"],
      ["Verano", "101"],
      ["Otoño", "320"],
      ["Día", "233"],
      ["Noche", "338"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Lavanda", 87],
      ["Cálido especiado", 87],
      ["Canela", 73],
      ["Ámbar", 61],
      ["Dulce", 58],
      ["Afrutados", 53],
      ["Aromático", 51],
      ["Fresco especiado", 47],
      ["Tabaco", 47],
    ],
  },
  {
    id: "odyssey-dubai-chocolat",
    nombre: "Odyssey Dubai Chocolat - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#6b4030",
    desc: "Un postre oriental hecho perfume: café tostado, pistacho y praliné se funden con chocolate y vainilla, sobre un fondo de caramelo, haba tonka y madera ambarada.",
    indicadores: [
      ["Invierno", "507"],
      ["Primavera", "139"],
      ["Verano", "52"],
      ["Otoño", "419"],
      ["Día", "210"],
      ["Noche", "415"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Dulce", 87],
      ["Nueces", 87],
      ["Amaderado", 73],
      ["Café", 61],
      ["Chocolate", 58],
      ["Avainillado", 53],
      ["Ámbar", 51],
      ["Caramelo", 47],
    ],
  },
  {
    id: "odyssey-candee",
    nombre: "Odyssey Candee - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e78a9e",
    desc: "Una explosión dulce y frutal: fresa, frambuesa y durazno se mezclan con caramelo y maracuyá, dejando un fondo cálido de pachulí, almizcle y ámbar.",
    indicadores: [
      ["Invierno", "109"],
      ["Primavera", "119"],
      ["Verano", "99"],
      ["Otoño", "102"],
      ["Día", "127"],
      ["Noche", "87"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 87],
      ["Pachulí", 58],
      ["Caramelo", 50],
      ["Amaderado", 47],
      ["Cálido especiado", 47],
      ["Almizclado", 46],
      ["Fresco especiado", 45],
    ],
  },
  {
    id: "odyssey-mega",
    nombre: "Odyssey Mega - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#6fae91",
    desc: "Una salida fresca y energética: limón, naranja, bergamota, jengibre y menta se unen a una piña jugosa y un corazón aromático sobre un fondo de cedro, vetiver y haba tonka.",
    indicadores: [
      ["Invierno", "353"],
      ["Primavera", "1400"],
      ["Verano", "1500"],
      ["Otoño", "780"],
      ["Día", "1400"],
      ["Noche", "568"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Aromático", 87],
      ["Fresco especiado", 58],
      ["Amaderado", 50],
      ["Dulce", 47],
      ["Fresco", 47],
      ["Verde", 46],
      ["Almizclado", 45],
      ["Afrutados", 45],
    ],
  },
  {
    id: "odyssey-limoni-fresh",
    nombre: "Odyssey Limoni Fresh - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d6d85a",
    desc: "Una ráfaga luminosa de verano: limón, naranja dulce, bergamota y mandarina se mezclan con jengibre y notas marinas, sobre un fondo limpio de ámbar, almizcle y té azul.",
    indicadores: [
      ["Invierno", "42"],
      ["Primavera", "953"],
      ["Verano", "1300"],
      ["Otoño", "125"],
      ["Día", "1200"],
      ["Noche", "107"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 46],
      ["Aromático", 45],
      ["Fresco", 43],
      ["Verde", 41],
    ],
  },
  {
    id: "odyssey-tyrant",
    nombre: "Odyssey Tyrant - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#526b78",
    desc: "Una presencia fresca y elegante: pomelo y cítricos abren la fragancia, seguidos por pimienta, lavanda y geranio, sobre un fondo profundo de vetiver, cedro y maderas ambaradas.",
    indicadores: [
      ["Invierno", "70"],
      ["Primavera", "294"],
      ["Verano", "298"],
      ["Otoño", "213"],
      ["Día", "297"],
      ["Noche", "165"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Cítrico", 96],
      ["Aromático", 91],
      ["Amaderado", 82],
      ["Ámbar", 58],
      ["Lavanda", 51],
      ["Almizclado", 47],
      ["Fresco", 45],
      ["Cálido especiado", 44],
    ],
  },
  {
    id: "odyssey-mandarin-sky-elixir",
    nombre: "Odyssey Mandarin Sky Elixir - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#c88b38",
    desc: "Una versión más intensa y magnética: mandarina y naranja se encuentran con azafrán y especias, mientras el caramelo y el haba tonka descansan sobre un fondo de vetiver, cedro y ambroxán.",
    indicadores: [
      ["Invierno", "521"],
      ["Primavera", "460"],
      ["Verano", "275"],
      ["Otoño", "508"],
      ["Día", "449"],
      ["Noche", "503"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Avainillado", 86],
      ["Dulce", 76],
      ["Caramelo", 66],
      ["Aromático", 59],
      ["Cálido especiado", 58],
      ["Ámbar", 52],
      ["Fresco especiado", 50],
      ["Balsámico", 50],
      ["Lavanda", 49],
    ],
  },
  {
    id: "odyssey-mandarin-sky-vintage-edition",
    nombre: "Odyssey Mandarin Sky Vintage Edition - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#b8873e",
    desc: "Una interpretación elegante y atemporal: mandarina y cítricos abren paso a especias y delicadas notas florales, sobre un fondo cálido de ámbar y maderas suaves.",
    indicadores: [
      ["Invierno", "57"],
      ["Primavera", "52"],
      ["Verano", "26"],
      ["Otoño", "62"],
      ["Día", "49"],
      ["Noche", "50"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 67],
      ["Ámbar", 54],
      ["Cálido especiado", 50],
      ["Floral", 50],
      ["Fresco", 44],
    ],
  },
  {
    id: "odyssey-spectra-blue-edition",
    nombre: "Odyssey Spectra Blue Edition - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#3f6fa3",
    desc: "Una noche eléctrica y especiada: canela, manzana y bergamota abren paso a una lavanda aromática, mientras el tabaco, la vainilla y el ámbar dejan una estela cálida y profunda.",
    indicadores: [
      ["Invierno", "23"],
      ["Primavera", "17"],
      ["Verano", "5"],
      ["Otoño", "21"],
      ["Día", "10"],
      ["Noche", "19"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Canela", 97],
      ["Lavanda", 85],
      ["Afrutados", 70],
      ["Dulce", 69],
      ["Ámbar", 68],
      ["Avainillado", 64],
      ["Aromático", 64],
      ["Floral blanco", 63],
      ["Tabaco", 63],
    ],
  },
  {
    id: "odyssey-artisto",
    nombre: "Odyssey Artisto - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d28a42",
    desc: "Una mezcla vibrante y tropical: bergamota y notas de nuez se encuentran con coco, frutas tropicales y canela, sobre un fondo cremoso de vainilla, haba tonka y ámbar.",
    indicadores: [
      ["Invierno", "93"],
      ["Primavera", "192"],
      ["Verano", "242"],
      ["Otoño", "169"],
      ["Día", "216"],
      ["Noche", "166"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Coco", 82],
      ["Dulce", 74],
      ["Tropical", 73],
      ["Ámbar", 68],
      ["Cítrico", 64],
      ["Nueces", 59],
      ["Aromático", 59],
      ["Cálido especiado", 52],
      ["Afrutados", 52],
    ],
  },
  {
    id: "odyssey-go-mango",
    nombre: "Odyssey Go Mango - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#e5a52e",
    desc: "Una explosión tropical de mango jugoso y luminoso, con un corazón frutal y un fondo suave de vainilla y maderas que prolonga su dulzura.",
    indicadores: [
      ["Invierno", "41"],
      ["Primavera", "291"],
      ["Verano", "397"],
      ["Otoño", "79"],
      ["Día", "359"],
      ["Noche", "93"],
    ],
    acordes: [
      ["Tropical", 100],
      ["Afrutados", 88],
      ["Dulce", 86],
      ["Amaderado", 65],
      ["Cítrico", 57],
      ["Avainillado", 54],
      ["Ámbar", 53],
      ["Terpénico", 51],
      ["Almizclado", 48],
      ["Especiado suave", 46],
    ],
  },
  {
    id: "odyssey-marshmallow",
    nombre: "Odyssey Marshmallow - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#f0c5c7",
    desc: "Un dulce abrazo de algodón: coco, manzana y limón abren una composición de fresa, frambuesa y durazno, sobre una base cremosa de malvavisco, vainilla, praliné y ámbar.",
    indicadores: [
      ["Invierno", "87"],
      ["Primavera", "90"],
      ["Verano", "69"],
      ["Otoño", "87"],
      ["Día", "104"],
      ["Noche", "60"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Afrutados", 71],
      ["Atalcado", 56],
      ["Avainillado", 53],
      ["Lactónico", 41],
    ],
  },
  {
    id: "odyssey-toffee-coffee",
    nombre: "Odyssey Toffee Coffee - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#76503b",
    desc: "Una taza de café convertida en perfume: café intenso y toffee se mezclan con flores suaves, vainilla y azúcar, dejando un fondo cálido de ámbar, madera y almizcle.",
    indicadores: [
      ["Invierno", "129"],
      ["Primavera", "32"],
      ["Verano", "8"],
      ["Otoño", "108"],
      ["Día", "62"],
      ["Noche", "105"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Café", 58],
      ["Avainillado", 55],
      ["Cálido especiado", 54],
      ["Caramelo", 47],
      ["Lactónico", 44],
    ],
  },
  {
    id: "odyssey-soda-pop",
    nombre: "Odyssey Soda Pop - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#9a5c58",
    desc: "Una gaseosa helada con un giro especiado: cola, cítricos, menta y jengibre se mezclan con té negro y canela, sobre un fondo de vainilla, tonka, maderas y almizcle.",
    indicadores: [
      ["Invierno", "47"],
      ["Primavera", "51"],
      ["Verano", "19"],
      ["Otoño", "56"],
      ["Día", "54"],
      ["Noche", "46"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Amaderado", 88],
      ["Ámbar", 86],
      ["Cálido especiado", 85],
      ["Avainillado", 78],
      ["Almizclado", 78],
      ["Atalcado", 75],
      ["Fresco", 72],
      ["Verde", 70],
      ["Cítrico", 69],
    ],
  },
  {
    id: "odyssey-aoud",
    nombre: "Odyssey Aoud - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#4f392d",
    desc: "Una composición oscura y elegante: azafrán, nuez moscada y lavanda abren paso al oud y las maderas, sobre un fondo profundo de almizcle, ámbar y pachulí.",
    indicadores: [
      ["Invierno", "179"],
      ["Primavera", "86"],
      ["Verano", "28"],
      ["Otoño", "158"],
      ["Día", "70"],
      ["Noche", "164"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Oud", 97],
      ["Almizclado", 90],
      ["Fresco especiado", 89],
      ["Cálido especiado", 89],
      ["Ámbar", 66],
      ["Lavanda", 64],
      ["Pachulí", 60],
      ["Metálico", 55],
      ["Atalcado", 52],
    ],
  },
  {
    id: "odyssey-wild-one-gold-edition",
    nombre: "Odyssey Wild One Gold Edition - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#b58a38",
    desc: "Una energía fresca y especiada: bergamota, limón, pimienta y menta se mezclan con lavanda y jengibre, sobre un fondo de pachulí, cedro, sándalo y almizcle.",
    indicadores: [
      ["Invierno", "114"],
      ["Primavera", "142"],
      ["Verano", "129"],
      ["Otoño", "140"],
      ["Día", "137"],
      ["Noche", "126"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Aromático", 79],
      ["Cítrico", 72],
      ["Amaderado", 68],
      ["Verde", 51],
      ["Cálido especiado", 51],
      ["Lavanda", 49],
      ["Almizclado", 48],
      ["Especiado suave", 47],
      ["Atalcado", 45],
    ],
  },
  {
    id: "odyssey-black-forest",
    nombre: "Odyssey Black Forest - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#59352f",
    desc: "Un postre oscuro y tentador: cereza, caramelo y canela se funden con dátiles y miel, sobre una base de praliné, vainilla, haba tonka, madera y almizcle.",
    indicadores: [
      ["Invierno", "109"],
      ["Primavera", "33"],
      ["Verano", "4"],
      ["Otoño", "92"],
      ["Día", "50"],
      ["Noche", "83"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 53],
      ["Caramelo", 51],
      ["Cereza", 50],
      ["Amielado", 45],
    ],
  },
  {
    id: "odyssey-eau-de-montagne",
    nombre: "Odyssey Eau de Montagne - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d4c4a2",
    desc: "Una escapada a la montaña: almendra cremosa, acordes lactónicos y especias abren paso a flores blancas, sobre un fondo suave de vainilla, sándalo, almizcle y cacao.",
    indicadores: [
      ["Invierno", "87"],
      ["Primavera", "69"],
      ["Verano", "27"],
      ["Otoño", "91"],
      ["Día", "62"],
      ["Noche", "74"],
    ],
    acordes: [
      ["Almendra", 100],
      ["Atalcado", 80],
      ["Avainillado", 79],
      ["Nueces", 72],
      ["Cálido especiado", 71],
      ["Amaderado", 70],
      ["Dulce", 70],
      ["Afrutados", 65],
      ["Almizclado", 60],
      ["Floral blanco", 55],
    ],
  },
  {
    id: "odyssey-revolution",
    nombre: "Odyssey Revolution - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#7e4b61",
    desc: "Una revolución dulce y frutal: piña, grosella negra y naranja sanguina se mezclan con ciruela, praliné, vainilla y cardamomo, sobre un fondo de pachulí y haba tonka.",
    indicadores: [
      ["Invierno", "81"],
      ["Primavera", "91"],
      ["Verano", "74"],
      ["Otoño", "84"],
      ["Día", "90"],
      ["Noche", "82"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 98],
      ["Avainillado", 55],
      ["Aromático", 52],
      ["Cálido especiado", 51],
      ["Tropical", 48],
      ["Pachulí", 47],
      ["Amaderado", 46],
      ["Especiado suave", 45],
    ],
  },
  {
    id: "odyssey-ba-ha-mas",
    nombre: "Odyssey BA HA MAS - Armaf",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4fa9b5",
    desc: "Una escapada tropical junto al mar: melón fresco, manzana, pera y ciruela se mezclan con notas acuáticas y saladas, sobre un fondo limpio de almizcle, ámbar y cedro.",
    indicadores: [
      ["Invierno", "29"],
      ["Primavera", "351"],
      ["Verano", "439"],
      ["Otoño", "62"],
      ["Día", "397"],
      ["Noche", "87"],
    ],
    acordes: [
      ["Marino", 100],
      ["Acuático", 95],
      ["Afrutados", 81],
      ["Salado", 67],
      ["Dulce", 65],
      ["Fresco", 65],
      ["Ozónico", 57],
      ["Aromático", 56],
      ["Ámbar", 48],
      ["Almizclado", 47],
    ],
  },
  {
    id: "odyssey-li-chi-lush",
    nombre: "Odyssey Li'chi Lush - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e49a9f",
    desc: "Un jardín frutal en plena floración: lichi, mandarina, durazno y frambuesa se encuentran con peonía, rosa, jazmín y magnolia, sobre un fondo cremoso de vainilla, caramelo, sándalo y ámbar.",
    indicadores: [
      ["Invierno", "6"],
      ["Primavera", "25"],
      ["Verano", "23"],
      ["Otoño", "10"],
      ["Día", "24"],
      ["Noche", "6"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Floral", 74],
      ["Cítrico", 70],
      ["Floral blanco", 68],
      ["Fresco", 66],
      ["Dulce", 61],
      ["Atalcado", 55],
      ["Tropical", 55],
      ["Rosas", 54],
      ["Amaderado", 52],
    ],
  },
  {
    id: "odyssey-pink-pop",
    nombre: "Odyssey Pink Pop - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e889a8",
    desc: "Una explosión floral y frutal: mandarina, durazno, frambuesa, fresa y piña abren paso a flores blancas y rosa, sobre un fondo cremoso de coco, vainilla, almizcle y ámbar.",
    indicadores: [
      ["Invierno", "5"],
      ["Primavera", "14"],
      ["Verano", "16"],
      ["Otoño", "7"],
      ["Día", "19"],
      ["Noche", "6"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Cítrico", 79],
      ["Floral", 65],
      ["Afrutados", 63],
      ["Dulce", 54],
      ["Rosas", 52],
      ["Almizclado", 45],
      ["Atalcado", 45],
      ["Animálico", 44],
    ],
  },
  {
    id: "odyssey-french-kiss",
    nombre: "Odyssey French Kiss - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#c77c9d",
    desc: "Un beso dulce y romántico: frutas jugosas y flores delicadas se funden en una composición femenina, suave y luminosa, con un fondo cálido y envolvente.",
    indicadores: [
      ["Invierno", "5"],
      ["Primavera", "9"],
      ["Verano", "9"],
      ["Otoño", "9"],
      ["Día", "11"],
      ["Noche", "9"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Ámbar", 72],
      ["Floral blanco", 66],
      ["Avainillado", 63],
      ["Rosas", 62],
      ["Cítrico", 55],
      ["Coco", 51],
      ["Afrutados", 47],
      ["Lactónico", 46],
      ["Floral", 44],
    ],
  },
  {
    id: "odyssey-femme-white-edition",
    nombre: "Odyssey Femme White Edition - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e7e1d5",
    desc: "Una elegancia luminosa y femenina: naranja y notas verdes abren paso a madreselva, nardos y jazmín, sobre un fondo delicado de vainilla, iris y sándalo.",
    indicadores: [
      ["Invierno", "3"],
      ["Primavera", "14"],
      ["Verano", "15"],
      ["Otoño", "7"],
      ["Día", "15"],
      ["Noche", "4"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Nardos", 56],
      ["Verde", 49],
      ["Afrutados", 44],
      ["Atalcado", 43],
    ],
  },
  {
    id: "club-de-nuit-intenso-fuego",
    nombre: "Club de Nuit Intenso Fuego - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#5a2520",
    desc: "Una fragancia intensa y exótica que combina maracuyá, cítricos, mango, pimienta negra y azafrán en la salida, con flores, rosa y especias en el corazón, sobre un fondo de cuero, oud, ámbar, vainilla y maderas.",
    indicadores: [
      ["Invierno", "8"],
      ["Primavera", "10"],
      ["Verano", "1"],
      ["Otoño", "7"],
      ["Día", "9"],
      ["Noche", "10"],
    ],
    acordes: [
      ["Tropical", 100],
      ["Afrutados", 88],
      ["Cuero", 80],
      ["Dulce", 78],
      ["Cítrico", 75],
      ["Fresco", 73],
      ["Fresco especiado", 72],
      ["Floral", 59],
      ["Animálico", 57],
      ["Oud", 54],
    ],
  },
  {
    id: "club-de-nuit-woman",
    nombre: "Club de Nuit Woman - Armaf",
    genero: "Mujer",
    ml: 105,
    etiqueta: "",
    color: "#d8a0a7",
    desc: "Una fragancia floral y frutal femenina que combina naranja, bergamota, pomelo y durazno en la salida, con rosa, jazmín, geranio y lichi en el corazón, sobre un fondo de pachulí, almizcle, vainilla y vetiver.",
    indicadores: [
      ["Invierno", "835"],
      ["Primavera", "1400"],
      ["Verano", "1100"],
      ["Otoño", "1200"],
      ["Día", "1400"],
      ["Noche", "941"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Pachulí", 65],
      ["Rosas", 64],
      ["Amaderado", 63],
      ["Fresco especiado", 63],
      ["Aromático", 59],
      ["Terroso", 52],
      ["Atalcado", 51],
      ["Almizclado", 50],
      ["Cálido especiado", 50],
    ],
  },
  {
    id: "club-de-nuit-untold",
    nombre: "Club de Nuit Untold - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#8b1238",
    desc: "Una fragancia profunda y envolvente que abre con azafrán y jazmín, evoluciona hacia un corazón de amberwood y ámbar gris, y termina sobre un fondo de resina de abeto y cedro.",
    indicadores: [
      ["Invierno", "2000"],
      ["Primavera", "1500"],
      ["Verano", "747"],
      ["Otoño", "1900"],
      ["Día", "1400"],
      ["Noche", "1900"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Ámbar", 98],
      ["Cálido especiado", 77],
      ["Metálico", 50],
      ["Floral blanco", 48],
      ["Animálico", 48],
      ["Cuero", 46],
      ["Fresco especiado", 45],
      ["Aromático", 45],
    ],
  },
  {
    id: "club-de-nuit-sillage",
    nombre: "Club de Nuit Sillage - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#c7cbd0",
    desc: "Una fragancia fresca y elegante que combina bergamota, limón, lima, jengibre, grosella negra y hojas de violeta, con un corazón floral de jazmín, iris y rosa, sobre un fondo de sándalo, cedro, almizcle y ambroxan.",
    indicadores: [
      ["Invierno", "708"],
      ["Primavera", "3700"],
      ["Verano", "3900"],
      ["Otoño", "2000"],
      ["Día", "3700"],
      ["Noche", "1300"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Almizclado", 60],
      ["Amaderado", 59],
      ["Fresco especiado", 55],
      ["Atalcado", 54],
      ["Aromático", 51],
      ["Ámbar", 49],
      ["Afrutados", 48],
      ["Floral", 45],
      ["Rosas", 44],
    ],
  },
  {
    id: "club-de-nuit-milestone",
    nombre: "Club de Nuit Milestone - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#b9b0a0",
    desc: "Una fragancia fresca de inspiración marina que combina bergamota, frutos rojos y acordes marinos, con violeta, sándalo y madera blanca en el corazón, sobre una base de vetiver, almizcle y ambroxan.",
    indicadores: [
      ["Invierno", "407"],
      ["Primavera", "2800"],
      ["Verano", "3200"],
      ["Otoño", "1100"],
      ["Día", "3000"],
      ["Noche", "992"],
    ],
    acordes: [
      ["Marino", 100],
      ["Aromático", 93],
      ["Amaderado", 87],
      ["Atalcado", 83],
      ["Almizclado", 80],
      ["Afrutados", 67],
      ["Violeta", 66],
      ["Cítrico", 62],
      ["Ámbar", 60],
      ["Salado", 57],
    ],
  },
  {
    id: "club-de-nuit-intense-man",
    nombre: "Club de Nuit Intense Man - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#171717",
    desc: "Una interpretación intensa y sofisticada con limón, piña, bergamota, grosella negra y manzana en la salida, seguida de abedul, jazmín y rosa, sobre un fondo de ámbar gris, almizcle, pachulí y vainilla.",
    indicadores: [
      ["Invierno", "9600"],
      ["Primavera", "16400"],
      ["Verano", "16000"],
      ["Otoño", "14300"],
      ["Día", "16200"],
      ["Noche", "14300"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Afrutados", 79],
      ["Cuero", 67],
      ["Ahumado", 59],
      ["Amaderado", 59],
      ["Aromático", 55],
      ["Dulce", 54],
      ["Fresco", 53],
      ["Almizclado", 47],
    ],
  },
  {
    id: "club-de-nuit-imperiale",
    nombre: "Club de Nuit Impériale - Armaf",
    genero: "Mujer",
    ml: 105,
    etiqueta: "",
    color: "#e8d9b6",
    desc: "Una fragancia floral y amaderada con lichi, bergamota y nuez moscada en la salida; rosa turca, peonía, almizcle y vainilla en el corazón; y una base de cashmeran, cedro, incienso y vetiver.",
    indicadores: [
      ["Invierno", "816"],
      ["Primavera", "901"],
      ["Verano", "616"],
      ["Otoño", "807"],
      ["Día", "870"],
      ["Noche", "764"],
    ],
    acordes: [
      ["Rosas", 100],
      ["Florales", 77],
      ["Atalcado", 71],
      ["Almizclado", 71],
      ["Avainillado", 66],
      ["Fresco", 65],
      ["Amaderado", 58],
      ["Afrutados", 58],
      ["Fresco especiado", 55],
      ["Tropical", 54],
    ],
  },
  {
    id: "club-de-nuit-blue-iconic",
    nombre: "Club de Nuit Blue Iconic - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#173b72",
    desc: "Una fragancia masculina fresca y especiada con pomelo, limón, menta, pimienta rosa y cilantro en la salida, jengibre, melón, jazmín y nuez moscada en el corazón, y un fondo de sándalo, ámbar, incienso, maderas, cedro, pachulí y ládano.",
    indicadores: [
      ["Invierno", "1200"],
      ["Primavera", "3300"],
      ["Verano", "3400"],
      ["Otoño", "2500"],
      ["Día", "3300"],
      ["Noche", "2200"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 93],
      ["Fresco especiado", 72],
      ["Ámbar", 67],
      ["Aromático", 65],
      ["Fresco", 51],
      ["Cálido especiado", 49],
      ["Balsámico", 46],
      ["Ahumado", 46],
      ["Verde", 46],
    ],
  },
  {
    id: "club-de-nuit-urban-elixir",
    nombre: "Club de Nuit Urban Elixir - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#25252b",
    desc: "Una fragancia masculina intensa y sofisticada que combina bergamota, pimienta rosa, flor de azahar y jazmín, con lavanda, tagetes, geranio, vetiver, elemí y azafrán, sobre un fondo de ambroxan, ámbar, pachulí, cedro y ládano.",
    indicadores: [
      ["Invierno", "2300"],
      ["Primavera", "2900"],
      ["Verano", "2800"],
      ["Otoño", "2800"],
      ["Día", "2900"],
      ["Noche", "2800"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Aromático", 82],
      ["Cítrico", 74],
      ["Fresco especiado", 73],
      ["Almizclado", 66],
      ["Amaderado", 66],
      ["Lavanda", 57],
      ["Especiado suave", 54],
      ["Cálido especiado", 46],
      ["Herbal", 45],
    ],
  },
  {
    id: "club-de-nuit-intense-man-extrait",
    nombre: "Club de Nuit Intense Man Extrait - Armaf",
    genero: "Hombre",
    ml: 70,
    etiqueta: "",
    color: "#181818",
    desc: "Una versión concentrada y potente del clásico Club de Nuit Intense Man, con piña, limón, bergamota, grosella negra y manzana en la salida, abedul, rosa y jazmín en el corazón, y pachulí, vainilla, ámbar gris y almizcle en el fondo.",
    indicadores: [
      ["Invierno", "416"],
      ["Primavera", "451"],
      ["Verano", "417"],
      ["Otoño", "443"],
      ["Día", "425"],
      ["Noche", "439"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cítrico", 96],
      ["Amaderado", 89],
      ["Cuero", 80],
      ["Pachulí", 76],
      ["Dulce", 70],
      ["Ahumado", 70],
      ["Avainillado", 63],
      ["Balsámico", 55],
      ["Aromático", 54],
    ],
  },
  {
    id: "club-de-nuit-intense-overdose",
    nombre: "Club de Nuit Intense Overdose - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#252525",
    desc: "Una interpretación más intensa del ADN de Club de Nuit Intense Man, con bergamota, mandarina, piña y cristales azules en la salida, vainilla, musgo de roble y ciruela en el corazón, sobre un fondo de pachulí, haba tonka y notas blancas empolvadas.",
    indicadores: [
      ["Invierno", "170"],
      ["Primavera", "193"],
      ["Verano", "178"],
      ["Otoño", "180"],
      ["Día", "186"],
      ["Noche", "182"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 96],
      ["Cítrico", 86],
      ["Terroso", 61],
      ["Avainillado", 61],
      ["Musgoso", 59],
      ["Amaderado", 57],
      ["Pachulí", 56],
      ["Ámbar", 56],
      ["Tropical", 55],
    ],
  },
  {
    id: "club-de-nuit-iconic-extrait-de-parfum",
    nombre: "Club de Nuit Iconic Extrait de Parfum - Armaf",
    genero: "Hombre",
    ml: 70,
    etiqueta: "",
    color: "#172d63",
    desc: "Una versión concentrada de Iconic con pomelo, limón, menta, pimienta rosa y cilantro en la salida, seguida de jengibre, melón, nuez moscada y jazmín, sobre un fondo de incienso, maderas, sándalo, ámbar, cedro, pachulí y ládano.",
    indicadores: [
      ["Invierno", "52"],
      ["Primavera", "91"],
      ["Verano", "88"],
      ["Otoño", "86"],
      ["Día", "89"],
      ["Noche", "72"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Ámbar", 84],
      ["Cítrico", 80],
      ["Fresco especiado", 70],
      ["Aromático", 65],
      ["Ahumado", 55],
      ["Cálido especiado", 55],
      ["Balsámico", 54],
      ["Especiado suave", 51],
      ["Fresco", 50],
    ],
  },
  {
    id: "club-de-nuit-precieux-iv",
    nombre: "Club de Nuit Precieux IV - Armaf",
    genero: "Mujer",
    ml: 55,
    etiqueta: "",
    color: "#d4af75",
    desc: "Una fragancia floral y gourmand que abre con bergamota, manzana y sal marina, continúa con ylang-ylang, jazmín, azucena blanca y frutos rojos, y termina con crema batida, vainilla, haba tonka, almizcle y pachulí.",
    indicadores: [
      ["Invierno", "54"],
      ["Primavera", "55"],
      ["Verano", "50"],
      ["Otoño", "51"],
      ["Día", "49"],
      ["Noche", "54"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 84],
      ["Salado", 80],
      ["Floral amarillo", 70],
      ["Afrutados", 65],
      ["Cítrico", 55],
      ["Atalcado", 55],
      ["Floral blanco", 54],
      ["Almizclado", 51],
      ["Amaderado", 50],
    ],
  },
  {
    id: "club-de-nuit-maleka",
    nombre: "Club de Nuit Maleka - Armaf",
    genero: "Mujer",
    ml: 105,
    etiqueta: "",
    color: "#c7a5b5",
    desc: "Una fragancia floral y frutal luminosa que combina lichi, bergamota y pimienta rosa en la salida, con iris en el corazón, sobre un fondo de praliné, sándalo y ambroxan.",
    indicadores: [
      ["Invierno", "244"],
      ["Primavera", "551"],
      ["Verano", "486"],
      ["Otoño", "381"],
      ["Día", "519"],
      ["Noche", "306"],
    ],
    acordes: [
      ["Iris", 100],
      ["Atalcado", 94],
      ["Afrutados", 89],
      ["Amaderado", 84],
      ["Dulce", 84],
      ["Tropical", 81],
      ["Cítrico", 79],
      ["Ámbar", 71],
      ["Fresco", 64],
      ["Almizclado", 60],
    ],
  },
  {
    id: "club-de-nuit-urban-man",
    nombre: "Club de Nuit Urban Man - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#303a32",
    desc: "Una fragancia masculina amaderada y especiada con bergamota, menta, pomelo y cardamomo en la salida, jengibre, lavanda, cedro y nuez moscada en el corazón, y vetiver, pachulí, sándalo y musgo de roble en el fondo.",
    indicadores: [
      ["Invierno", "64"],
      ["Primavera", "208"],
      ["Verano", "192"],
      ["Otoño", "153"],
      ["Día", "189"],
      ["Noche", "112"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Fresco especiado", 97],
      ["Aromático", 92],
      ["Cítrico", 81],
      ["Cálido especiado", 63],
      ["Terrosos", 61],
      ["Verde", 60],
      ["Pachulí", 51],
      ["Lavanda", 48],
      ["Atalcado", 46],
    ],
  },
  {
    id: "club-de-nuit-lionheart-man",
    nombre: "Club de Nuit Lionheart Man - Armaf",
    genero: "Hombre",
    ml: 105,
    etiqueta: "",
    color: "#5b3924",
    desc: "Una fragancia oriental fougère que combina lavanda y menta en la salida, benjuí y vainilla en el corazón, y un fondo cálido y gourmand de miel, haba tonka y tabaco.",
    indicadores: [
      ["Invierno", "576"],
      ["Primavera", "344"],
      ["Verano", "116"],
      ["Otoño", "508"],
      ["Día", "252"],
      ["Noche", "540"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Aromático", 80],
      ["Dulce", 76],
      ["Verde", 75],
      ["Ámbar", 66],
      ["Fresco especiado", 61],
      ["Amielado", 61],
      ["Lavanda", 61],
      ["Tabaco", 51],
      ["Cálido especiado", 47],
    ],
  },
  {
    id: "club-de-nuit-woman-extrait",
    nombre: "Club de Nuit Woman Extrait - Armaf",
    genero: "Mujer",
    ml: 70,
    etiqueta: "",
    color: "#c99ba2",
    desc: "Una versión más concentrada de Club de Nuit Woman que abre con naranja, durazno, pomelo y bergamota, continúa con rosa, geranio, jazmín y lichi, y termina con pachulí, vetiver, almizcle y vainilla.",
    indicadores: [
      ["Invierno", "51"],
      ["Primavera", "52"],
      ["Verano", "47"],
      ["Otoño", "50"],
      ["Día", "58"],
      ["Noche", "44"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Rosas", 89],
      ["Pachulí", 85],
      ["Terroso", 83],
      ["Aromático", 70],
      ["Cálido especiado", 59],
      ["Floral", 47],
      ["Balsámico", 46],
    ],
  },
  {
    id: "club-de-nuit-oud",
    nombre: "Club de Nuit Oud - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#35251f",
    desc: "Una fragancia oriental profunda y lujosa que combina bergamota, piña, durazno, maracuyá, pera y ciruela en la salida, con jazmín, fresia, hojas de violeta y madera de cachemira en el corazón, sobre una base intensa de oud.",
    indicadores: [
      ["Invierno", "291"],
      ["Primavera", "267"],
      ["Verano", "178"],
      ["Otoño", "280"],
      ["Día", "234"],
      ["Noche", "278"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 81],
      ["Amaderado", 79],
      ["Almizclado", 72],
      ["Atalcado", 61],
      ["Animálico", 60],
      ["Ámbar", 57],
      ["Tropical", 50],
      ["Avainillado", 49],
      ["Fresco", 49],
    ],
  },
  {
    id: "club-de-nuit-bling",
    nombre: "Club de Nuit Bling - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#c9c9c9",
    desc: "Una fragancia moderna y luminosa que abre con cítricos, evoluciona hacia un corazón de Flower Prism y Stardust, y termina con vainilla y Velvet Wood, aportando un carácter elegante y brillante.",
    indicadores: [
      ["Invierno", "96"],
      ["Primavera", "245"],
      ["Verano", "252"],
      ["Otoño", "149"],
      ["Día", "242"],
      ["Noche", "173"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco", 64],
      ["Avainillado", 55],
      ["Fresco especiado", 43],
      ["Atalcado", 37],
    ],
  },
  {
    id: "club-de-nuit-lionheart-woman",
    nombre: "Club de Nuit Lionheart Woman - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#c9a9b8",
    desc: "Una fragancia oriental avainillada que combina vainilla y lavanda en la salida, cacao y jengibre en el corazón, y un fondo cremoso de absoluto de vainilla.",
    indicadores: [
      ["Invierno", "95"],
      ["Primavera", "88"],
      ["Verano", "51"],
      ["Otoño", "104"],
      ["Día", "86"],
      ["Noche", "87"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Fresco especiado", 94],
      ["Cacao", 94],
      ["Lavanda", 79],
      ["Cálido especiado", 68],
      ["Fresco", 61],
      ["Dulce", 59],
      ["Atalcado", 50],
      ["Aromático", 49],
      ["Herbal", 46],
    ],
  },
  {
    id: "club-de-nuit-elite",
    nombre: "Club de Nuit Elite - Armaf",
    genero: "Unisex",
    ml: 105,
    etiqueta: "",
    color: "#70816d",
    desc: "Una fragancia cítrica y aromática que abre con té verde, bergamota, manzana y pimientas, continúa con rosa centifolia, geranio y grosella negra, y termina con vetiver, ámbar, cedro, almizcle y cashmeran.",
    indicadores: [
      ["Invierno", "20"],
      ["Primavera", "109"],
      ["Verano", "106"],
      ["Otoño", "74"],
      ["Día", "96"],
      ["Noche", "37"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Fresco especiado", 94],
      ["Rosas", 92],
      ["Aromático", 89],
      ["Afrutados", 77],
      ["Almizclado", 77],
      ["Cítrico", 70],
      ["Verde", 69],
      ["Terroso", 67],
      ["Atalcado", 62],
    ],
  },
  {
    id: "club-de-nuit-precieux-i",
    nombre: "Club de Nuit Précieux I - Armaf",
    genero: "Unisex",
    ml: 55,
    etiqueta: "",
    color: "#d1b06a",
    desc: "Una fragancia oriental amaderada que combina piña, limón, bergamota, caramelo, pera y pimientas en la salida, con musgo de roble, madera blanca, jazmín, lirio de los valles y anís en el corazón, sobre una base de ambroxan, almizcle blanco, cedro, pachulí, cuero, ámbar y vainilla.",
    indicadores: [
      ["Invierno", "1800"],
      ["Primavera", "1900"],
      ["Verano", "1600"],
      ["Otoño", "1900"],
      ["Día", "1800"],
      ["Noche", "1900"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Amaderado", 96],
      ["Cítrico", 93],
      ["Afrutados", 88],
      ["Ámbar", 77],
      ["Almizclado", 76],
      ["Musgoso", 63],
      ["Fresco", 63],
      ["Fresco especiado", 62],
      ["Terroso", 60],
    ],
  },
  {
    id: "club-de-nuit-intense-woman",
    nombre: "Club de Nuit Intense Woman - Armaf",
    genero: "Mujer",
    ml: 105,
    etiqueta: "",
    color: "#a85c68",
    desc: "Una fragancia chipre floral intensa que abre con rosa, azafrán y geranio, continúa con nuez moscada, pimienta, violeta y alcaravea, y termina con pachulí, oud, vainilla y ámbar.",
    indicadores: [
      ["Invierno", "1600"],
      ["Primavera", "632"],
      ["Verano", "276"],
      ["Otoño", "1500"],
      ["Día", "763"],
      ["Noche", "1600"],
    ],
    acordes: [
      ["Rosas", 100],
      ["Fresco especiado", 93],
      ["Cálido especiado", 87],
      ["Pachulí", 73],
      ["Oud", 62],
      ["Avainillado", 60],
      ["Amaderado", 57],
      ["Florales", 55],
      ["Ámbar", 53],
      ["Atalcado", 51],
    ],
  },
  {
    id: "asad",
    nombre: "Asad - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#171717",
    desc: "Una fragancia intensa y especiada que combina pimienta negra, piña y tabaco en la salida, con café, iris y pachulí en el corazón, sobre un fondo cálido de ámbar, vainilla, maderas secas, benjuí y ládano.",
    indicadores: [
      ["Invierno", "10000"],
      ["Primavera", "4600"],
      ["Verano", "1800"],
      ["Otoño", "8700"],
      ["Día", "4800"],
      ["Noche", "9000"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Fresco especiado", 91],
      ["Amaderado", 86],
      ["Cálido especiado", 83],
      ["Avainillado", 81],
      ["Dulce", 73],
      ["Tabaco", 69],
      ["Atalcado", 57],
      ["Pachulí", 52],
      ["Balsámico", 49],
    ],
  },
  {
    id: "asad-zanzibar",
    nombre: "Asad Zanzibar - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#183b5d",
    desc: "Una interpretación fresca y tropical de la familia Asad, con pimienta negra y lavanda marina en la salida, agua de coco salada e iris en el corazón, y un fondo suave de vainilla e incienso.",
    indicadores: [
      ["Invierno", "708"],
      ["Primavera", "1800"],
      ["Verano", "1800"],
      ["Otoño", "1200"],
      ["Día", "1800"],
      ["Noche", "1200"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Iris", 85],
      ["Atalcado", 84],
      ["Fresco especiado", 79],
      ["Lavanda", 77],
      ["Salado", 61],
      ["Violeta", 57],
      ["Cálido especiado", 55],
      ["Ámbar", 55],
      ["Balsámico", 54],
    ],
  },
  {
    id: "asad-bourbon",
    nombre: "Asad Bourbon - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#5a3827",
    desc: "Una fragancia cálida y gourmand que combina pimienta rosa, lavanda y ciruela mirabel en la salida, con cacao, davana y nuez moscada en el corazón, sobre un fondo de vainilla Bourbon, vetiver y ámbar.",
    indicadores: [
      ["Invierno", "4900"],
      ["Primavera", "1600"],
      ["Verano", "507"],
      ["Otoño", "4100"],
      ["Día", "2000"],
      ["Noche", "4200"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Cacao", 91],
      ["Dulce", 76],
      ["Lavanda", 76],
      ["Fresco especiado", 70],
      ["Cálido especiado", 66],
      ["Ámbar", 65],
      ["Aromático", 62],
      ["Atalcado", 59],
      ["Especiado suave", 56],
    ],
  },
  {
    id: "asad-elixir",
    nombre: "Asad Elixir - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#25211f",
    desc: "Una fragancia intensa y sofisticada que abre con pimienta rosa, azafrán y pomelo, continúa con tabaco, madera de cedro y vainilla, y termina sobre un fondo de pachulí, olíbano, cashmeran y ámbar seco.",
    indicadores: [
      ["Invierno", "1900"],
      ["Primavera", "643"],
      ["Verano", "186"],
      ["Otoño", "1600"],
      ["Día", "693"],
      ["Noche", "1700"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Amaderado", 89],
      ["Tabaco", 82],
      ["Avainillado", 68],
      ["Dulce", 67],
      ["Cálido especiado", 64],
      ["Atalcado", 60],
      ["Especiado suave", 54],
      ["Pachulí", 51],
      ["Fresco especiado", 48],
    ],
  },
  {
    id: "asad-zanzibar-limited-edition",
    nombre: "Asad Zanzibar Limited Edition - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#183b5d",
    desc: "Una fragancia fresca, marina y especiada que combina notas marinas, lavanda y pimienta rosa en la salida, con jabón, cachemira y canela en el corazón, sobre un fondo cálido de ámbar, sándalo, cedro y haba tonka.",
    indicadores: [
      ["Invierno", "48"],
      ["Primavera", "273"],
      ["Verano", "292"],
      ["Otoño", "111"],
      ["Día", "274"],
      ["Noche", "96"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Marino", 94],
      ["Jabonoso", 89],
      ["Lavanda", 87],
      ["Amaderado", 85],
      ["Ámbar", 72],
      ["Atalcado", 60],
      ["Salado", 55],
      ["Almizclado", 55],
      ["Especiado suave", 53],
    ],
  },
  {
    id: "tag-donna-di-terra",
    nombre: "Tag Donna Di Terra - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#b69b7a",
    desc: "Una fragancia femenina elegante y envolvente, con una combinación cálida y sofisticada de notas florales, frutales y amaderadas.",
    indicadores: [
      ["invierno", "8"],
      ["Primavera", "12"],
      ["verano", "8"],
      ["Otoño", "15"],
      ["Día", "15"],
      ["Noche", "9"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Pachulí", 88],
      ["Cítrico", 82],
      ["Rosas", 76],
      ["Amaderado", 65],
      ["Especiado suave", 65],
      ["Fresco", 54],
      ["Terrosos", 53],
      ["Balsámico", 47],
      ["Almizclado", 44],
    ],
  },
  {
    id: "tag-donna-colorata",
    nombre: "Tag Donna Colorata - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#d98caa",
    desc: "Una fragancia femenina luminosa y moderna, con un perfil floral y frutal que combina dulzura y frescura.",
    indicadores: [
      ["invierno", "15"],
      ["Primavera", "18"],
      ["verano", "16"],
      ["Otoño", "17"],
      ["Día", "20"],
      ["Noche", "16"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Cítrico", 86],
      ["Afrutados", 62],
      ["Avainillado", 58],
      ["Animálico", 57],
      ["Aromático", 53],
      ["Ámbar", 51],
      ["Amaderado", 50],
      ["Verde", 50],
      ["Dulce", 49],
    ],
  },

  {
    id: "tag-him-uomo-nero",
    nombre: "Tag Him Uomo Nero - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#27292b",
    desc: "Una fragancia masculina aromática y amaderada con bergamota, limón, cilantro, lavanda y pimienta negra en la salida; un corazón de hojas de violeta, muguete y rosa, y una base de pachulí, ámbar gris y vainilla.",
    indicadores: [
      ["Invierno", "24"],
      ["Primavera", "22"],
      ["Verano", "10"],
      ["Otoño", "25"],
      ["Día", "17"],
      ["Noche", "26"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Cítrico", 99],
      ["Aromático", 89],
      ["Avainillado", 69],
      ["Pachulí", 69],
      ["Ámbar", 69],
      ["Cálido especiado", 64],
      ["Lavanda", 62],
      ["Balsámico", 59],
      ["Amaderado", 58],
    ],
  },
  {
    id: "tag-him-uomo-rosso",
    nombre: "Tag Him Uomo Rosso - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#b84145",
    desc: "Un perfume masculino cálido y especiado que abre con lavanda, cardamomo y notas aromáticas, continúa con especias y pimienta negra, y termina con incienso, pachulí, vainilla y haba tonka.",
    indicadores: [
      ["Invierno", "302"],
      ["Primavera", "209"],
      ["Verano", "57"],
      ["Otoño", "284"],
      ["Día", "198"],
      ["Noche", "284"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Cálido especiado", 89],
      ["Aromático", 61],
      ["Ámbar", 60],
      ["Dulce", 54],
      ["Fresco especiado", 53],
      ["Lavanda", 52],
      ["Balsámico", 51],
    ],
  },
  {
    id: "tag-her",
    nombre: "Tag-Her - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#bb8898",
    desc: "Una fragancia femenina floral y luminosa con bergamota, neroli y pimienta rosa en la salida, un corazón de jazmín, madreselva, flor de azahar, rosa e iris, y un fondo de vainilla, almizcle, caramelo y ládano.",
    indicadores: [
      ["Invierno", "26"],
      ["Primavera", "140"],
      ["Verano", "198"],
      ["Otoño", "61"],
      ["Día", "193"],
      ["Noche", "38"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Floral blanco", 98],
      ["Almizclado", 61],
      ["Dulce", 57],
      ["Atalcado", 57],
      ["Fresco especiado", 57],
      ["Avainillado", 52],
      ["Florales", 49],
      ["Caramelo", 49],
      ["Aromático", 47],
    ],
  },
  {
    id: "tag-her-prestige",
    nombre: "Tag-Her Prestige - Armaf",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#b69a5b",
    desc: "Una fragancia femenina cálida y especiada que combina una salida de canela, un corazón de orquídea y un fondo envolvente de sándalo y vainilla.",
    indicadores: [
      ["Invierno", "57"],
      ["Primavera", "16"],
      ["Verano", "15"],
      ["Otoño", "61"],
      ["Día", "24"],
      ["Noche", "54"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Canela", 89],
      ["Amaderado", 87],
      ["Atalcado", 85],
      ["Avainillado", 77],
      ["Florales", 59],
      ["Dulce", 56],
      ["Balsámico", 48],
    ],
  },
  {
    id: "tag-him",
    nombre: "Tag-Him - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#394f62",
    desc: "Una fragancia masculina fresca, cítrica y amaderada que abre con pomelo, limón, bergamota y pimienta rosa, evoluciona con jengibre, menta, lavanda y nuez moscada, y termina con vetiver, pachulí, sándalo y cedro.",
    indicadores: [
      ["Invierno", "134"],
      ["Primavera", "460"],
      ["Verano", "482"],
      ["Otoño", "315"],
      ["Día", "496"],
      ["Noche", "273"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 86],
      ["Aromático", 75],
      ["Amaderado", 73],
      ["Verde", 50],
      ["Fresco", 46],
    ],
  },
  {
    id: "tag-him-prestige",
    nombre: "Tag-Him Prestige - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#444037",
    desc: "Un perfume masculino cítrico y especiado que combina pomelo, menta y bergamota en la salida, lavanda, naranja sanguina, canela y pimienta en el corazón, sobre un fondo de vainilla, ámbar, madera blanca y pachulí.",
    indicadores: [
      ["Invierno", "71"],
      ["Primavera", "59"],
      ["Verano", "26"],
      ["Otoño", "78"],
      ["Día", "50"],
      ["Noche", "78"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Fresco especiado", 87],
      ["Cálido especiado", 68],
      ["Lavanda", 66],
      ["Aromático", 64],
      ["Canela", 62],
      ["Avainillado", 61],
      ["Amaderado", 52],
      ["Ámbar", 51],
      ["Verde", 45],
    ],
  },

  {
    id: "atlas",
    nombre: "Atlas - Lattafa",
    genero: "Unisex",
    ml: 55,
    etiqueta: "",
    color: "#3f8fa8",
    desc: "Una fragancia marina y enérgica que abre con sal, notas de mar y limón, sigue con un corazón de iris y davana, y termina sobre un fondo cálido de ámbar gris, sándalo y musgo de roble.",
    indicadores: [
      ["Invierno", "342"],
      ["Primavera", "1800"],
      ["Verano", "2200"],
      ["Otoño", "835"],
      ["Día", "2000"],
      ["Noche", "794"],
    ],
    acordes: [
      ["Marino", 100],
      ["Salado", 91],
      ["Aromático", 73],
      ["Ámbar", 64],
      ["Musgoso", 52],
      ["Amaderado", 52],
      ["Animálico", 51],
      ["Terrosos", 49],
      ["Balsámico", 47],
      ["Cítrico", 47],
    ],
  },
  {
    id: "atlas-canyon",
    nombre: "Atlas Canyon - Lattafa",
    genero: "Unisex",
    ml: 55,
    etiqueta: "",
    color: "#b3703c",
    desc: "Una fragancia fresca, amaderada y mineral que abre con bergamota, limón y jengibre, continúa con lirio de los valles y notas marinas, y termina sobre un fondo terroso de pachulí, musgo de roble, ambroxan y almizcle.",
    indicadores: [
      ["Invierno", "1"],
      ["Primavera", "11"],
      ["Verano", "12"],
      ["Otoño", "7"],
      ["Día", "12"],
      ["Noche", "2"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Ámbar", 90],
      ["Cítrico", 87],
      ["Marino", 75],
      ["Aromático", 70],
      ["Fresco", 69],
      ["Terrosos", 63],
      ["Amaderado", 61],
      ["Pachulí", 60],
      ["Musgoso", 60],
    ],
  },
  {
    id: "atlas-glacial-valley",
    nombre: "Atlas Glacial Valley - Lattafa",
    genero: "Unisex",
    ml: 55,
    etiqueta: "",
    color: "#8fd0e0",
    desc: "Un contraste helado y tropical: piña, higo y menta en la salida, jazmín, pachulí y sal marina en el corazón, sobre un fondo suave de musgo, almizcle, vainilla y ámbar.",
    indicadores: [
      ["Invierno", "3"],
      ["Primavera", "16"],
      ["Verano", "16"],
      ["Otoño", "9"],
      ["Día", "15"],
      ["Noche", "4"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Floral blanco", 97],
      ["Dulce", 82],
      ["Verde", 72],
      ["Salado", 70],
      ["Aromático", 60],
      ["Almizclado", 55],
      ["Ámbar", 55],
      ["Fresco especiado", 51],
      ["Amaderado", 50],
    ],
  },
  {
    id: "yara-candy",
    nombre: "Yara Candy - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e86a9a",
    desc: "Una explosión dulce y juvenil: mandarina verde, grosella negra y fresa efervescente en la salida, con gardenia y frutas confitadas en el corazón, sobre un fondo de sándalo, vainilla, almizcle y ámbar.",
    indicadores: [
      ["Invierno", "480"],
      ["Primavera", "1300"],
      ["Verano", "1400"],
      ["Otoño", "572"],
      ["Día", "1400"],
      ["Noche", "421"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Afrutados", 84],
      ["Atalcado", 76],
      ["Cítrico", 71],
      ["Aromático", 65],
      ["Floral blanco", 65],
      ["Amaderado", 62],
      ["Especiado suave", 58],
      ["Almizclado", 57],
      ["Animálico", 54],
    ],
  },
  {
    id: "yara-elixir",
    nombre: "Yara Elixir - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#9c2f5a",
    desc: "Una fragancia dulce y frutal con fresa y grosella negra, jazmín y flor de naranja en el corazón, sobre un fondo cremoso de vainilla y almizcle.",
    indicadores: [
      ["Invierno", "519"],
      ["Primavera", "505"],
      ["Verano", "273"],
      ["Otoño", "532"],
      ["Día", "520"],
      ["Noche", "387"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Caramelo", 95],
      ["Dulce", 80],
      ["Floral blanco", 77],
      ["Atalcado", 71],
      ["Afrutados", 69],
      ["Ámbar", 63],
      ["Almizclado", 60],
      ["Especiado suave", 54],
      ["Animálico", 53],
    ],
  },
  {
    id: "yara-moi",
    nombre: "Yara Moi - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e9dccb",
    desc: "Una fragancia femenina, cálida y envolvente, con jazmín luminoso y un fondo dulce de pachulí y maderas suaves.",
    indicadores: [
      ["Invierno", "630"],
      ["Primavera", "976"],
      ["Verano", "636"],
      ["Otoño", "847"],
      ["Día", "1000"],
      ["Noche", "526"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Floral blanco", 98],
      ["Pachulí", 81],
      ["Cálido especiado", 71],
      ["Caramelo", 69],
      ["Atalcado", 62],
      ["Ámbar", 60],
      ["Afrutados", 59],
      ["Dulce", 58],
      ["Balsámico", 57],
    ],
  },
  {
    id: "yara-rose",
    nombre: "Yara Rose - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e8a0b4",
    desc: "Una versión floral y delicada de la línea Yara, con un perfil dulce y femenino.",
    indicadores: [
      ["Invierno", "2600"],
      ["Primavera", "5500"],
      ["Verano", "4400"],
      ["Otoño", "3000"],
      ["Día", "5800"],
      ["Noche", "1800"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 98],
      ["Atalcado", 95],
      ["Tropical", 63],
      ["Almizclado", 62],
      ["Afrutados", 61],
      ["Florales", 57],
      ["Cítrico", 47],
    ],
  },
  {
    id: "yara-tous",
    nombre: "Yara Tous - Lattafa",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#f0a850",
    desc: "Una fragancia tropical, floral y cremosa: coco, mango y maracuyá en la salida, jazmín, heliotropo y flor de azahar en el corazón, sobre un fondo de cashmeran, vainilla y almizcle.",
    indicadores: [
      ["Invierno", "272"],
      ["Primavera", "1400"],
      ["Verano", "2300"],
      ["Otoño", "515"],
      ["Día", "2100"],
      ["Noche", "464"],
    ],
    acordes: [
      ["Tropical", 100],
      ["Dulce", 95],
      ["Floral blanco", 80],
      ["Avainillado", 79],
      ["Afrutados", 79],
      ["Atalcado", 70],
      ["Coco", 63],
      ["Almizclado", 58],
      ["Amaderado", 45],
    ],
  },
  {
    id: "liquid-brun",
    nombre: "Liquid Brun - French Avenue",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#7a4a2b",
    desc: "Un ámbar gourmand cálido y refinado: canela, cardamomo, bergamota y flor de azahar en la salida, vainilla Bourbon y elemí en el corazón, sobre un fondo de praliné, almizcle, ambroxan y madera de guayaco.",
    indicadores: [
      ["Invierno", "11500"],
      ["Primavera", "2500"],
      ["Verano", "885"],
      ["Otoño", "9200"],
      ["Día", "4300"],
      ["Noche", "9400"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Cálido especiado", 99],
      ["Avainillado", 96],
      ["Canela", 79],
      ["Floral blanco", 61],
      ["Atalcado", 61],
      ["Aromático", 58],
      ["Cítrico", 57],
      ["Almizclado", 57],
      ["Ámbar", 52],
    ],
  },
  {
    id: "liquid-brun-limited-edition",
    nombre: "Liquid Brun Limited Edition - French Avenue",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#5e3720",
    desc: "Una edición limitada de Liquid Brun, de perfil ambarado, cálido y gourmand.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "432"],
      ["Verano", "83"],
      ["Otoño", "933"],
      ["Día", "544"],
      ["Noche", "981"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Ámbar", 71],
      ["Cítrico", 66],
      ["Floral blanco", 66],
      ["Dulce", 63],
      ["Cálido especiado", 62],
      ["Aromático", 61],
      ["Lavanda", 52],
      ["Atalcado", 50],
      ["Amaderado", 46],
    ],
  },
  {
    id: "vulcan-feu",
    nombre: "Vulcan Feu - French Avenue",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d9532b",
    desc: "Una fragancia intensa, frutal y especiada: mango, jengibre, limón y frutos rojos en la salida, cumarina, jazmín y cedro en el corazón, sobre un fondo de almizcle, ámbar, oud y cipriol.",
    indicadores: [
      ["Invierno", "503"],
      ["Primavera", "4400"],
      ["Verano", "5500"],
      ["Otoño", "1200"],
      ["Día", "4700"],
      ["Noche", "1500"],
    ],
    acordes: [
      ["Tropical", 100],
      ["Afrutados", 98],
      ["Dulce", 92],
      ["Cítrico", 73],
      ["Amaderado", 56],
      ["Fresco", 56],
      ["Fresco especiado", 55],
      ["Aromático", 54],
      ["Terpénico", 53],
      ["Ámbar", 51],
    ],
  },
  {
    id: "vulcan-sable",
    nombre: "Vulcan Sable - French Avenue",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#3a2a22",
    desc: "Una fragancia ahumada, especiada y amaderada: whisky, cilantro y mandarina en la salida, cashmeran, haba tonka, estoraque y anís en el corazón, sobre un fondo de vainilla, pachulí y benjuí.",
    indicadores: [
      ["Invierno", "559"],
      ["Primavera", "192"],
      ["Verano", "38"],
      ["Otoño", "511"],
      ["Día", "240"],
      ["Noche", "487"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Amaderado", 97],
      ["Ámbar", 94],
      ["Whisky", 80],
      ["Cálido especiado", 74],
      ["Cítrico", 68],
      ["Dulce", 65],
      ["Atalcado", 57],
      ["Balsámico", 55],
      ["Almizclado", 53],
    ],
  },
  {
    id: "momento",
    nombre: "Momento - Riiffs",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c9a9c0",
    desc: "Una fragancia de la línea Momento de Armaf, de perfil fresco y fácil de llevar.",
    indicadores: [
      ["Invierno", "894"],
      ["Primavera", "228"],
      ["Verano", "73"],
      ["Otoño", "747"],
      ["Día", "287"],
      ["Noche", "780"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 86],
      ["Ámbar", 80],
      ["Cálido especiado", 74],
      ["Rosas", 71],
      ["Amaderado", 61],
      ["Oud", 56],
      ["Caramelo", 55],
      ["Aromático", 48],
      ["Metálico", 45],
    ],
  },
  {
    id: "island",
    nombre: "Island - Khadlaj",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4fb3bf",
    desc: "Una fragancia de espíritu tropical y veraniego, fresca y fácil de llevar.",
    indicadores: [
      ["Invierno", "314"],
      ["Primavera", "2100"],
      ["Verano", "2600"],
      ["Otoño", "717"],
      ["Día", "2200"],
      ["Noche", "1100"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Amaderado", 92],
      ["Coco", 88],
      ["Ámbar", 73],
      ["Afrutados", 71],
      ["Avainillado", 69],
      ["Tropical", 69],
      ["Atalcado", 56],
      ["Iris", 52],
      ["Fresco", 51],
    ],
  },
  {
    id: "9am",
    nombre: "9am - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#e0a458",
    desc: "Una fragancia fresca y aromática que abre con mandarina, cardamomo y pimienta rosa, con lavanda en el corazón. Pensada para el día.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "246"],
      ["Verano", "276"],
      ["Otoño", "97"],
      ["Día", "267"],
      ["Noche", "52"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Almizclado", 64],
      ["Amaderado", 60],
      ["Aromático", 59],
      ["Cálido especiado", 54],
      ["Lavanda", 51],
      ["Musgoso", 48],
      ["Atalcado", 48],
      ["Afrutados", 48],
      ["Floral blanco", 48],
    ],
  },
  {
    id: "9am-dive",
    nombre: "9am Dive - Afnan",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#3a9ec2",
    desc: "Una fragancia aromática y acuática: menta, limón, grosella negra y pimienta rosa en la salida, con manzana, incienso y cedro en el corazón.",
    indicadores: [
      ["Invierno", "276"],
      ["Primavera", "2400"],
      ["Verano", "2900"],
      ["Otoño", "716"],
      ["Día", "2600"],
      ["Noche", "548"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Verde", 97],
      ["Amaderado", 95],
      ["Cítrico", 87],
      ["Fresco especiado", 86],
      ["Aromático", 86],
      ["Fresco", 81],
      ["Especiado suave", 55],
      ["Cálido especiado", 54],
      ["Balsámico", 49],
    ],
  },
  {
    id: "9am-pour-femme",
    nombre: "9am Pour Femme - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#f0a59a",
    desc: "Una fragancia floral y frutal, fresca y luminosa: mandarina, pomelo y bergamota en la salida, frambuesa y grosella negra en el corazón, sobre un fondo de almizcle y ámbar.",
    indicadores: [
      ["Invierno", "29"],
      ["Primavera", "160"],
      ["Verano", "172"],
      ["Otoño", "65"],
      ["Día", "169"],
      ["Noche", "48"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Afrutados", 91],
      ["Dulce", 66],
      ["Almizclado", 63],
      ["Ámbar", 59],
      ["Atalcado", 52],
      ["Fresco especiado", 50],
    ],
  },
  {
    id: "9pm",
    nombre: "9pm Clásico - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#2a2438",
    desc: "El original de la línea 9pm: una fragancia ámbar y vainilla, cálida, dulce y sensual, ideal para la noche.",
    indicadores: [
      ["Invierno", "13500"],
      ["Primavera", "7100"],
      ["Verano", "3100"],
      ["Otoño", "11400"],
      ["Día", "5600"],
      ["Noche", "12400"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Ámbar", 63],
      ["Cálido especiado", 60],
      ["Afrutados", 57],
      ["Canela", 55],
      ["Dulce", 55],
      ["Lavanda", 54],
      ["Fresco", 51],
      ["Aromático", 51],
      ["Atalcado", 50],
    ],
  },
  {
    id: "9pm-elixir",
    nombre: "9pm Elixir - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#6b2c3e",
    desc: "Una versión más intensa y sensual de 9pm, oriental y especiada, con mucha presencia.",
    indicadores: [
      ["Invierno", "1400"],
      ["Primavera", "410"],
      ["Verano", "128"],
      ["Otoño", "1200"],
      ["Día", "422"],
      ["Noche", "1300"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Avainillado", 73],
      ["Aromático", 67],
      ["Fresco especiado", 65],
      ["Cuero", 56],
      ["Lavanda", 53],
      ["Balsámico", 51],
      ["Pachulí", 49],
      ["Atalcado", 45],
      ["Amaderado", 45],
    ],
  },
  {
    id: "9pm-night-out",
    nombre: "9pm Night Out - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#3b2f5c",
    desc: "Una variante de la línea 9pm pensada para salir de noche, cálida y con presencia.",
    indicadores: [
      ["Invierno", "2100"],
      ["Primavera", "1600"],
      ["Verano", "860"],
      ["Otoño", "1700"],
      ["Día", "719"],
      ["Noche", "2100"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Afrutados", 92],
      ["Cálido especiado", 90],
      ["Dulce", 89],
      ["Tropical", 78],
      ["Aromático", 73],
      ["Lavanda", 63],
      ["Florales", 60],
      ["Avainillado", 55],
      ["Fresco especiado", 52],
    ],
  },
  {
    id: "9pm-pour-femme",
    nombre: "9pm Pour Femme - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#b5527a",
    desc: "Una fragancia ámbar floral y frutal, dulce y sensual, con frutas, flores y madera.",
    indicadores: [
      ["Invierno", "66"],
      ["Primavera", "74"],
      ["Verano", "49"],
      ["Otoño", "76"],
      ["Día", "59"],
      ["Noche", "79"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Afrutados", 77],
      ["Rosas", 76],
      ["Florales", 70],
      ["Atalcado", 65],
      ["Violeta", 65],
      ["Aromático", 64],
      ["Fresco", 60],
      ["Dulce", 59],
      ["Ámbar", 49],
    ],
  },
  {
    id: "9pm-rebel",
    nombre: "9pm Rebel - Afnan",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c2412d",
    desc: "Una versión moderna y atrevida de 9pm, frutal y amaderada, con mandarina, piña y manzana verde.",
    indicadores: [
      ["Invierno", "2100"],
      ["Primavera", "2200"],
      ["Verano", "1900"],
      ["Otoño", "2200"],
      ["Día", "2100"],
      ["Noche", "2300"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 92],
      ["Amaderado", 80],
      ["Tropical", 60],
      ["Fresco", 56],
      ["Musgoso", 53],
      ["Ámbar", 50],
      ["Caramelo", 50],
      ["Atalcado", 46],
      ["Avainillado", 46],
    ],
  },
  {
    id: "amber-oud-gold-edition",
    nombre: "Amber Oud Gold Edition - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d4a53a",
    desc: "Una fragancia ámbar frutal y cálida: bergamota y notas verdes en la salida, melón, piña y ámbar en el corazón, sobre un fondo cremoso de vainilla, almizcle y maderas.",
    indicadores: [
      ["Invierno", "2600"],
      ["Primavera", "3200"],
      ["Verano", "2900"],
      ["Otoño", "2900"],
      ["Día", "3200"],
      ["Noche", "2900"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Afrutados", 92],
      ["Ozónico", 74],
      ["Avainillado", 71],
      ["Atalcado", 71],
      ["Almizclado", 70],
      ["Fresco", 70],
      ["Acuático", 68],
      ["Ámbar", 67],
      ["Cítrico", 58],
    ],
  },
  {
    id: "amber-oud-aqua-dubai",
    nombre: "Amber Oud Aqua Dubai - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4aa8b8",
    desc: "Una versión fresca y acuática de la línea Amber Oud, inspirada en Dubai.",
    indicadores: [
      ["Invierno", "325"],
      ["Primavera", "2400"],
      ["Verano", "2900"],
      ["Otoño", "787"],
      ["Día", "2600"],
      ["Noche", "710"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Verde", 90],
      ["Almizclado", 57],
      ["Aromático", 56],
      ["Fresco especiado", 54],
      ["Afrutados", 52],
      ["Atalcado", 50],
    ],
  },
  {
    id: "amber-oud",
    nombre: "Amber Oud - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#806344",
    desc: "Una fragancia amaderada y ambarada con un perfil especiado y aromático. Combina romero, cedro, bergamota y limón en la salida, especias y maderas en el corazón, con un fondo de ámbar, resinas y almizcle.",
    indicadores: [
      ["Invierno", "186"],
      ["Primavera", "98"],
      ["Verano", "68"],
      ["Otoño", "173"],
      ["Día", "142"],
      ["Noche", "172"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Ámbar", 93],
      ["Aromático", 74],
      ["Fresco especiado", 66],
      ["Cítrico", 63],
      ["Cálido especiado", 55],
      ["Atalcado", 53],
      ["Almizclado", 47],
    ],
  },
  {
    id: "amber-oud-black-edition",
    nombre: "Amber Oud Black Edition - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#25252b",
    desc: "Una fragancia intensa y envolvente de carácter oscuro, con matices amaderados, especiados y ambarados. Su perfil está pensado para quienes buscan un aroma profundo y sofisticado.",
    indicadores: [
      ["Invierno", "159"],
      ["Primavera", "90"],
      ["Verano", "32"],
      ["Otoño", "153"],
      ["Día", "75"],
      ["Noche", "146"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Aromático", 68],
      ["Cálido especiado", 67],
      ["Amaderado", 59],
      ["Animálico", 59],
      ["Cuero", 54],
      ["Lavanda", 48],
      ["Avainillado", 45],
      ["Terrosos", 44],
    ],
  },
  {
    id: "amber-oud-bleu-edition",
    nombre: "Amber Oud Bleu Edition - Al Haramain",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#315b91",
    desc: "Una fragancia fresca y amaderada con una salida cítrica de limón, pomelo y pimienta rosa. El jengibre, el jazmín y el vetiver aportan carácter al corazón, mientras que el pachulí, el incienso y el sándalo forman un fondo elegante.",
    indicadores: [
      ["Invierno", "100"],
      ["Primavera", "231"],
      ["Verano", "231"],
      ["Otoño", "196"],
      ["Día", "235"],
      ["Noche", "141"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 93],
      ["Fresco especiado", 86],
      ["Aromático", 81],
      ["Verde", 56],
      ["Ámbar", 55],
      ["Cálido especiado", 52],
      ["Fresco", 49],
      ["Terrosos", 46],
    ],
  },
  {
    id: "amber-oud-carbon-edition",
    nombre: "Amber Oud Carbon Edition - Al Haramain",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#526b70",
    desc: "Una fragancia fresca y aromática con bergamota, lavanda y romero en la salida. El geranio, la salvia y los matices marinos aportan frescura, sobre una base de musgo, cedro, vetiver y ámbar.",
    indicadores: [
      ["Invierno", "55"],
      ["Primavera", "285"],
      ["Verano", "277"],
      ["Otoño", "188"],
      ["Día", "259"],
      ["Noche", "110"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Fresco especiado", 71],
      ["Amaderado", 58],
      ["Marino", 53],
      ["Cítrico", 53],
      ["Herbal", 49],
      ["Lavanda", 48],
    ],
  },
  {
    id: "amber-oud-dubai-night",
    nombre: "Amber Oud Dubai Night - Al Haramain",
    genero: "Hombre",
    ml: 75,
    etiqueta: "",
    color: "#24263f",
    desc: "Una fragancia nocturna de inspiración oriental, con un carácter intenso y elegante. Su perfil combina matices cálidos, ambarados y amaderados, ideal para quienes buscan un aroma con presencia para ocasiones especiales.",
    indicadores: [
      ["Invierno", "627"],
      ["Primavera", "443"],
      ["Verano", "163"],
      ["Otoño", "584"],
      ["Día", "269"],
      ["Noche", "620"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Cálido especiado", 87],
      ["Rosas", 84],
      ["Oud", 84],
      ["Aromático", 74],
      ["Cítrico", 71],
      ["Avainillado", 67],
      ["Almizclado", 65],
      ["Fresco especiado", 63],
      ["Atalcado", 58],
    ],
  },
  {
    id: "amber-oud-exclusif-emerald",
    nombre: "Amber Oud Exclusif Emerald - Al Haramain",
    genero: "Unisex",
    ml: 60,
    etiqueta: "",
    color: "#28745b",
    desc: "Una fragancia de carácter lujoso que combina matices verdes con facetas amaderadas y orientales. Su perfil busca transmitir profundidad, elegancia y una sensación envolvente.",
    indicadores: [
      ["Invierno", "2"],
      ["Primavera", "2"],
      ["Verano", "2"],
      ["Otoño", "3"],
      ["Día", "3"],
      ["Noche", "3"],
    ],
    acordes: [
      ["Lavanda", 100],
      ["Amaderado", 91],
      ["Atalcado", 83],
      ["Cálido especiado", 76],
      ["Violeta", 65],
      ["Pachulí", 65],
      ["Aromático", 60],
      ["Balsámico", 55],
      ["Florales", 48],
    ],
  },
  {
    id: "amber-oud-future-dubai",
    nombre: "Amber Oud Future Dubai - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#9d824e",
    desc: "Una fragancia moderna de la colección Amber Oud, con un perfil oriental que combina facetas cálidas, amaderadas y ambaradas. Una propuesta sofisticada para quienes buscan un aroma distintivo.",
    indicadores: [
      ["Invierno", "3"],
      ["Primavera", "18"],
      ["Verano", "18"],
      ["Otoño", "7"],
      ["Día", "17"],
      ["Noche", "7"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cítrico", 100],
      ["Dulce", 88],
      ["Tropical", 85],
      ["Floral blanco", 59],
      ["Almizclado", 59],
      ["Amaderado", 47],
      ["Terpénico", 47],
      ["Atalcado", 47],
      ["Ámbar", 45],
    ],
  },
  {
    id: "amber-oud-gold-999-9-dubai-edition",
    nombre: "Amber Oud Gold 999.9 Dubai Edition - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c5a64e",
    desc: "Una interpretación lujosa de la línea Amber Oud Gold, con un carácter dulce, cálido y oriental. Su perfil combina matices frutales y ambarados con una sensación cremosa y envolvente.",
    indicadores: [
      ["Invierno", "29"],
      ["Primavera", "47"],
      ["Verano", "43"],
      ["Otoño", "41"],
      ["Día", "47"],
      ["Noche", "35"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Dulce", 71],
      ["Ámbar", 67],
      ["Afrutados", 66],
      ["Caramelo", 65],
      ["Fresco", 61],
      ["Avainillado", 57],
      ["Acuático", 55],
      ["Aromático", 52],
      ["Cálido especiado", 51],
    ],
  },
  {
    id: "amber-oud-gold-edition-extreme",
    nombre: "Amber Oud Gold Edition Extreme - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b58a32",
    desc: "Una versión intensa de Amber Oud Gold con un perfil frutal, dulce y amaderado. Combina bergamota y notas verdes con melón, piña y matices golosos, sobre un fondo de vainilla, almizcle, maderas y resinas.",
    indicadores: [
      ["Invierno", "160"],
      ["Primavera", "177"],
      ["Verano", "126"],
      ["Otoño", "176"],
      ["Día", "171"],
      ["Noche", "171"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Amaderado", 82],
      ["Ámbar", 67],
      ["Afrutados", 60],
      ["Atalcado", 59],
      ["Almizclado", 57],
      ["Verde", 53],
      ["Avainillado", 52],
      ["Ozónico", 50],
      ["Cítrico", 50],
    ],
  },
  {
    id: "amber-oud-gold-lux",
    nombre: "Amber Oud Gold Lux - Al Haramain",
    genero: "Unisex",
    ml: 120,
    etiqueta: "",
    color: "#d6b765",
    desc: "Una propuesta de carácter elegante dentro de la familia Amber Oud, con un perfil cálido y envolvente. Sus matices dulces y ambarados se combinan con facetas amaderadas para crear una sensación sofisticada.",
    indicadores: [
      ["Invierno", "4"],
      ["Primavera", "6"],
      ["Verano", "5"],
      ["Otoño", "5"],
      ["Día", "4"],
      ["Noche", "5"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cálido especiado", 90],
      ["Floral blanco", 65],
      ["Almizclado", 65],
      ["Metálico", 65],
      ["Ámbar", 65],
      ["Almendrado", 65],
      ["Cuero", 58],
      ["Animálico", 58],
      ["Atalcado", 54],
    ],
  },
  {
    id: "amber-oud-gold-mine",
    nombre: "Amber Oud Gold Mine - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c49a38",
    desc: "Una fragancia de inspiración oriental con un carácter cálido, dulce y ambarado. Su perfil busca equilibrar una sensación golosa con matices profundos y elegantes.",
    indicadores: [
      ["Invierno", "1"],
      ["Primavera", "2"],
      ["Verano", "2"],
      ["Otoño", "2"],
      ["Día", "2"],
      ["Noche", "1"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Ámbar", 93],
      ["Dulce", 83],
      ["Atalcado", 72],
      ["Afrutados", 70],
      ["Verde", 67],
      ["Avainillado", 63],
      ["Almizclado", 63],
      ["Cítrico", 63],
      ["Ozónico", 53],
    ],
  },
  {
    id: "amber-oud-imagine-dubai",
    nombre: "Amber Oud Imagine Dubai - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b9a6c9",
    desc: "Una fragancia moderna y sofisticada de la colección Amber Oud. Presenta un perfil envolvente de inspiración oriental, pensado para quienes buscan una composición distintiva y elegante.",
    indicadores: [
      ["Invierno", "6"],
      ["Primavera", "7"],
      ["Verano", "3"],
      ["Otoño", "6"],
      ["Día", "7"],
      ["Noche", "6"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Floral blanco", 99],
      ["Atalcado", 73],
      ["Almizclado", 69],
      ["Avainillado", 67],
      ["Cítrico", 65],
      ["Animálico", 46],
      ["Rosas", 45],
    ],
  },
  {
    id: "amber-oud-private-edition",
    nombre: "Amber Oud Private Edition - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#292d32",
    desc: "Una fragancia de carácter exclusivo, con un perfil intenso y elegante. Sus facetas cálidas y amaderadas evocan el estilo oriental característico de la colección Amber Oud.",
    indicadores: [
      ["Invierno", "59"],
      ["Primavera", "55"],
      ["Verano", "36"],
      ["Otoño", "55"],
      ["Día", "46"],
      ["Noche", "55"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Dulce", 91],
      ["Amaderado", 74],
      ["Atalcado", 56],
      ["Balsámico", 56],
      ["Afrutados", 55],
      ["Avainillado", 54],
      ["Almizclado", 54],
      ["Ozónico", 52],
      ["Acuático", 49],
    ],
  },
  {
    id: "amber-oud-rouge",
    nombre: "Amber Oud Rouge - Al Haramain",
    genero: "Unisex",
    ml: 120,
    etiqueta: "",
    color: "#9d263b",
    desc: "Una fragancia dulce y ambarada con un carácter intenso y envolvente. Combina matices cálidos y sensuales con facetas almizcladas y amaderadas, creando un perfil elegante y llamativo.",
    indicadores: [
      ["Invierno", "415"],
      ["Primavera", "328"],
      ["Verano", "174"],
      ["Otoño", "405"],
      ["Día", "350"],
      ["Noche", "396"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Ámbar", 95],
      ["Almizclado", 87],
      ["Animálico", 79],
      ["Amaderado", 79],
      ["Metálico", 71],
      ["Atalcado", 68],
      ["Floral blanco", 68],
      ["Cuero", 63],
      ["Tabaco", 55],
    ],
  },
  {
    id: "amber-oud-ruby-edition",
    nombre: "Amber Oud Ruby Edition - Al Haramain",
    genero: "Mujer",
    ml: 120,
    etiqueta: "",
    color: "#a92d43",
    desc: "Una fragancia oriental y floral que combina almendra amarga y azafrán en la salida. El jazmín egipcio y el cedro forman el corazón, mientras que el ámbar gris, las notas amaderadas y el almizcle aportan profundidad al fondo.",
    indicadores: [
      ["Invierno", "422"],
      ["Primavera", "295"],
      ["Verano", "147"],
      ["Otoño", "398"],
      ["Día", "306"],
      ["Noche", "392"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cálido especiado", 86],
      ["Ámbar", 83],
      ["Almendrado", 82],
      ["Animálico", 69],
      ["Almizclado", 68],
      ["Metálico", 63],
      ["Nueces", 61],
      ["Floral blanco", 56],
      ["Cuero", 56],
    ],
  },
  {
    id: "amber-oud-smell-dubai",
    nombre: "Amber Oud Smell Dubai - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#987e58",
    desc: "Una fragancia de inspiración oriental que busca combinar calidez y sofisticación. Su perfil ambarado y amaderado encaja con el estilo intenso y elegante de la familia Amber Oud.",
    indicadores: [
      ["Invierno", "8"],
      ["Primavera", "20"],
      ["Verano", "14"],
      ["Otoño", "18"],
      ["Día", "18"],
      ["Noche", "8"],
    ],
    acordes: [
      ["Ozónico", 100],
      ["Ámbar", 91],
      ["Amaderado", 86],
      ["Acuático", 82],
      ["Animálico", 69],
      ["Iris", 63],
      ["Atalcado", 60],
      ["Terrosos", 58],
      ["Verde", 56],
      ["Balsámico", 54],
    ],
  },
  {
    id: "amber-oud-tobacco-edition",
    nombre: "Amber Oud Tobacco Edition - Al Haramain",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#75452d",
    desc: "Una fragancia cálida, especiada y envolvente que combina tabaco con matices dulces y orientales. Sus facetas ambaradas y amaderadas aportan profundidad, creando un perfil especialmente apropiado para climas frescos y salidas nocturnas.",
    indicadores: [
      ["Invierno", "2200"],
      ["Primavera", "541"],
      ["Verano", "181"],
      ["Otoño", "2000"],
      ["Día", "951"],
      ["Noche", "1900"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Dulce", 72],
      ["Avainillado", 72],
      ["Tabaco", 67],
      ["Canela", 55],
      ["Afrutados", 54],
      ["Especiado suave", 51],
      ["Anís", 49],
      ["Amaderado", 49],
      ["Atalcado", 48],
    ],
  },
  {
    id: "amber-oud-ultra-violet",
    nombre: "Amber Oud Ultra Violet - Al Haramain",
    genero: "Mujer",
    ml: 120,
    etiqueta: "",
    color: "#7950a3",
    desc: "Una fragancia femenina de carácter moderno, con un perfil elegante y envolvente. Sus matices florales se combinan con facetas cálidas y sensuales para una composición distintiva.",
    indicadores: [
      ["Invierno", "31"],
      ["Primavera", "31"],
      ["Verano", "29"],
      ["Otoño", "31"],
      ["Día", "35"],
      ["Noche", "27"],
    ],
    acordes: [
      ["Floral blanco", 100],
      ["Nardos", 68],
      ["Rosas", 50],
      ["Animálico", 47],
      ["Amaderado", 47],
    ],
  },
  {
    id: "amber-oud-white-edition",
    nombre: "Amber Oud White Edition - Al Haramain",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e8e2d5",
    desc: "Una fragancia oriental y floral con bergamota y naranja en la salida. El jazmín, la rosa y la fresia aportan un corazón floral, mientras que el almizcle, la vainilla y el pachulí forman un fondo suave y elegante.",
    indicadores: [
      ["Invierno", "16"],
      ["Primavera", "45"],
      ["Verano", "51"],
      ["Otoño", "26"],
      ["Día", "45"],
      ["Noche", "29"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Florales", 91],
      ["Floral blanco", 74],
      ["Pachulí", 74],
      ["Amaderado", 74],
      ["Rosas", 65],
      ["Terrosos", 59],
      ["Fresco especiado", 56],
      ["Aromático", 55],
      ["Almizclado", 54],
    ],
  },
  {
    id: "bharara-king-100ml",
    nombre: "King 100ml - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#e08a2e",
    desc: "Una fragancia cítrica, frutal y dulce con aire de realeza: naranja, bergamota y limón en la salida, un corazón frutal y un fondo suave de vainilla, almizcle blanco y ámbar.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "839"],
      ["Verano", "501"],
      ["Otoño", "983"],
      ["Día", "769"],
      ["Noche", "1100"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Afrutados", 81],
      ["Dulce", 74],
      ["Avainillado", 67],
      ["Atalcado", 62],
      ["Almizclado", 60],
      ["Ámbar", 55],
      ["Fresco especiado", 46],
    ],
  },
  {
    id: "bharara-king-150ml",
    nombre: "King 150ml - Bharara",
    genero: "Hombre",
    ml: 150,
    etiqueta: "",
    color: "#e08a2e",
    desc: "Una fragancia cítrica, frutal y dulce con aire de realeza: naranja, bergamota y limón en la salida, un corazón frutal y un fondo suave de vainilla, almizcle blanco y ámbar.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "839"],
      ["Verano", "501"],
      ["Otoño", "983"],
      ["Día", "769"],
      ["Noche", "1100"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Afrutados", 81],
      ["Dulce", 74],
      ["Avainillado", 67],
      ["Atalcado", 62],
      ["Almizclado", 60],
      ["Ámbar", 55],
      ["Fresco especiado", 46],
    ],
  },
  {
    id: "rey-de-reyes",
    nombre: "Rey de Reyes - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "Nuevo",
    color: "#b8a16b",
    desc: "Una fragancia aromática y amaderada con enebro, bergamota, cardamomo y pimienta rosa, acompañados de lavanda, geranio, nuez moscada, pachulí y sándalo.",
    indicadores: [
      ["Invierno", "13"],
      ["Primavera", "50"],
      ["Verano", "52"],
      ["Otoño", "33"],
      ["Día", "52"],
      ["Noche", "29"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Aromático", 96],
      ["Amaderado", 73],
      ["Cálido especiado", 66],
      ["Lavanda", 49],
      ["Cítrico", 48],
      ["Pachulí", 46],
      ["Ámbar", 46],
    ],
  },
  {
    id: "rey-de-reyes-orange",
    nombre: "Rey de Reyes Orange - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "Nuevo",
    color: "#d77b28",
    desc: "Una fragancia cítrica y especiada que combina naranja mandarína, bergamota, azafrán y pimienta, con geranio, tomillo, ámbar, haba tonka, cedro y vetiver.",
    indicadores: [
      ["Invierno", "6"],
      ["Primavera", "3"],
      ["Verano", "2"],
      ["Otoño", "7"],
      ["Día", "6"],
      ["Noche", "5"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Cálido especiado", 86],
      ["Aromático", 75],
      ["Ámbar", 63],
      ["Cítrico", 52],
      ["Metálico", 48],
      ["Avainillado", 45],
      ["Cuero", 45],
    ],
  },
  {
    id: "king-gold-edition",
    nombre: "King Gold Edition - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#c9a447",
    desc: "Una interpretación lujosa de la línea King, con un perfil intenso, cálido y elegante, pensada para quienes buscan una fragancia de gran presencia.",
    indicadores: [
      ["Invierno", "24"],
      ["Primavera", "22"],
      ["Verano", "16"],
      ["Otoño", "24"],
      ["Día", "22"],
      ["Noche", "21"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Ámbar", 96],
      ["Afrutados", 92],
      ["Dulce", 90],
      ["Cítrico", 80],
      ["Coco", 62],
      ["Atalcado", 58],
      ["Cálido especiado", 53],
    ],
  },
  {
    id: "king-soleil",
    nombre: "King Soleil - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#e8bd54",
    desc: "Una fragancia luminosa y moderna con un carácter fresco, cítrico y cálido, ideal para quienes buscan un aroma elegante y versátil.",
    indicadores: [
      ["Invierno", "25"],
      ["Primavera", "10"],
      ["Verano", "1"],
      ["Otoño", "23"],
      ["Día", "15"],
      ["Noche", "27"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Avainillado", 68],
      ["Amaderado", 68],
      ["Nueces", 62],
      ["Atalcado", 52],
      ["Dulce", 48],
      ["Fresco especiado", 48],
      ["Aromático", 48],
    ],
  },
  {
    id: "queen",
    nombre: "Queen - Bharara",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#bd7195",
    desc: "Una fragancia femenina elegante y envolvente, con un perfil dulce, floral y frutal pensado para destacar con sofisticación.",
    indicadores: [
      ["Invierno", "22"],
      ["Primavera", "19"],
      ["Verano", "9"],
      ["Otoño", "26"],
      ["Día", "24"],
      ["Noche", "20"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Floral blanco", 88],
      ["Atalcado", 83],
      ["Avainillado", 81],
      ["Caramelo", 81],
      ["Cítrico", 76],
      ["Rosas", 74],
      ["Dulce", 61],
      ["Cálido especiado", 56],
      ["Balsámico", 56],
    ],
  },
  {
    id: "don",
    nombre: "Don - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#242424",
    desc: "Una fragancia masculina de presencia marcada, con un carácter elegante, intenso y amaderado para quienes prefieren aromas con personalidad.",
    indicadores: [
      ["Invierno", "20"],
      ["Primavera", "28"],
      ["Verano", "27"],
      ["Otoño", "25"],
      ["Día", "28"],
      ["Noche", "19"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cálido especiado", 99],
      ["Dulce", 91],
      ["Fresco especiado", 90],
      ["Cítrico", 77],
      ["Amaderado", 76],
      ["Almizclado", 66],
      ["Atalcado", 66],
      ["Aromático", 61],
      ["Tropical", 56],
    ],
  },
  {
    id: "viking-kashmir",
    nombre: "Viking Kashmir - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#557b79",
    desc: "Una fragancia de la colección Viking con un perfil aromático, especiado y amaderado, de carácter profundo y envolvente.",
    indicadores: [
      ["Invierno", "33"],
      ["Primavera", "25"],
      ["Verano", "13"],
      ["Otoño", "31"],
      ["Día", "26"],
      ["Noche", "25"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cálido especiado", 77],
      ["Aromático", 60],
      ["Atalcado", 50],
      ["Ámbar", 47],
    ],
  },
  {
    id: "viking-dubai",
    nombre: "Viking Dubai - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#bd9b52",
    desc: "Una fragancia intensa y sofisticada de la colección Viking, con una personalidad cálida, especiada y amaderada.",
    indicadores: [
      ["Invierno", "26"],
      ["Primavera", "125"],
      ["Verano", "131"],
      ["Otoño", "70"],
      ["Día", "129"],
      ["Noche", "55"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Ámbar", 59],
      ["Fresco especiado", 57],
      ["Almizclado", 53],
      ["Amaderado", 48],
      ["Aromático", 46],
    ],
  },
  {
    id: "viking-cairo",
    nombre: "Viking Cairo - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#95734b",
    desc: "Una fragancia de carácter especiado y amaderado, con un estilo envolvente y elegante dentro de la colección Viking.",
    indicadores: [
      ["Invierno", "21"],
      ["Primavera", "58"],
      ["Verano", "60"],
      ["Otoño", "30"],
      ["Día", "60"],
      ["Noche", "31"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Aromático", 65],
      ["Fresco especiado", 62],
      ["Ámbar", 59],
      ["Fresco", 54],
      ["Amaderado", 53],
      ["Lavanda", 49],
      ["Terrosos", 47],
      ["Atalcado", 46],
    ],
  },
  {
    id: "viking-beirut",
    nombre: "Viking Beirut - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#454b59",
    desc: "Una fragancia de la familia Viking con un perfil sofisticado, especiado y amaderado, pensada para quienes buscan un aroma distintivo.",
    indicadores: [
      ["Invierno", "52"],
      ["Primavera", "97"],
      ["Verano", "99"],
      ["Otoño", "70"],
      ["Día", "99"],
      ["Noche", "69"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Cítrico", 77],
      ["Ozónico", 66],
      ["Fresco especiado", 65],
      ["Amaderado", 58],
      ["Terrosos", 58],
      ["Herbal", 57],
      ["Verde", 49],
      ["Pachulí", 47],
      ["Musgoso", 47],
    ],
  },
  {
    id: "viking-rio",
    nombre: "Viking Rio - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#3d8d87",
    desc: "Una fragancia moderna de la colección Viking con un perfil vibrante y versátil, que combina frescura con una base cálida.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "29"],
      ["Verano", "18"],
      ["Otoño", "43"],
      ["Día", "38"],
      ["Noche", "38"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Nueces", 88],
      ["Cacao", 84],
      ["Caramelo", 75],
      ["Dulce", 70],
      ["Cálido especiado", 62],
      ["Musgoso", 57],
      ["Ámbar", 57],
      ["Floral blanco", 52],
      ["Terrosos", 49],
    ],
  },
  {
    id: "bleu",
    nombre: "Bleu - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#254d88",
    desc: "Una fragancia masculina de estilo azul, fresca y aromática, con un carácter limpio, moderno y versátil para el uso diario.",
    indicadores: [
      ["Invierno", "77"],
      ["Primavera", "98"],
      ["Verano", "92"],
      ["Otoño", "87"],
      ["Día", "85"],
      ["Noche", "93"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Avainillado", 95],
      ["Ámbar", 80],
      ["Atalcado", 77],
      ["Afrutados", 70],
      ["Almizclado", 66],
      ["Amaderado", 57],
      ["Dulce", 55],
      ["Fresco especiado", 46],
      ["Animálico", 45],
    ],
  },
  {
    id: "double-bleu",
    nombre: "Double Bleu - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#173e70",
    desc: "Una fragancia masculina de perfil fresco y aromático, con un estilo moderno y amaderado inspirado en los perfumes azules.",
    indicadores: [
      ["Invierno", "12"],
      ["Primavera", "61"],
      ["Verano", "67"],
      ["Otoño", "24"],
      ["Día", "60"],
      ["Noche", "27"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Aromático", 97],
      ["Amaderado", 76],
      ["Afrutados", 75],
      ["Dulce", 73],
      ["Fresco especiado", 69],
      ["Fresco", 55],
      ["Floral blanco", 55],
      ["Tropical", 55],
      ["Almizclado", 50],
    ],
  },
  {
    id: "rose",
    nombre: "Rose - Bharara",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#bd637f",
    desc: "Una fragancia floral centrada en la rosa, con un carácter delicado, elegante y femenino.",
    indicadores: [
      ["Invierno", "5"],
      ["Primavera", "6"],
      ["Verano", "6"],
      ["Otoño", "6"],
      ["Día", "6"],
      ["Noche", "4"],
    ],
    acordes: [
      ["Rosas", 100],
      ["Floral blanco", 65],
      ["Ámbar", 65],
      ["Florales", 62],
      ["Atalcado", 43],
    ],
  },
  {
    id: "niche",
    nombre: "Niche - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b5a27c",
    desc: "Una fragancia de estilo sofisticado y contemporáneo, concebida para ofrecer una composición distintiva con carácter elegante.",
    indicadores: [
      ["Invierno", "41"],
      ["Primavera", "39"],
      ["Verano", "27"],
      ["Otoño", "47"],
      ["Día", "35"],
      ["Noche", "39"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Floral blanco", 73],
      ["Ámbar", 73],
      ["Fresco especiado", 66],
      ["Cálido especiado", 65],
      ["Chocolate", 65],
      ["Aromático", 64],
      ["Fresco", 62],
      ["Cítrico", 58],
      ["Musgoso", 55],
    ],
  },
  {
    id: "niche-femme",
    nombre: "Niche Femme - Bharara",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#c98aa5",
    desc: "Una fragancia femenina elegante y refinada, con un carácter floral y envolvente pensado para ocasiones especiales.",
    indicadores: [
      ["Invierno", "18"],
      ["Primavera", "21"],
      ["Verano", "11"],
      ["Otoño", "22"],
      ["Día", "24"],
      ["Noche", "21"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Rosas", 95],
      ["Ámbar", 79],
      ["Amaderado", 75],
      ["Ahumado", 74],
      ["Dulce", 71],
      ["Balsámico", 70],
      ["Cálido especiado", 68],
      ["Avainillado", 60],
      ["Atalcado", 59],
    ],
  },
  {
    id: "tonka",
    nombre: "Tonka - Bharara",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#9b7555",
    desc: "Una fragancia cálida y dulce inspirada en el haba tonka, con un carácter cremoso, ambarado y envolvente.",
    indicadores: [
      ["Invierno", "0"],
      ["Primavera", "1"],
      ["Verano", "1"],
      ["Otoño", "1"],
      ["Día", "1"],
      ["Noche", "1"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Fresco especiado", 91],
      ["Amaderado", 80],
      ["Cálido especiado", 80],
      ["Atalcado", 75],
      ["Verde", 65],
      ["Avainillado", 59],
      ["Pachulí", 59],
      ["Almizclado", 59],
      ["Lavanda", 59],
    ],
  },
  {
    id: "pharaoh-ramesses-ii",
    nombre: "Pharaoh Ramesses II - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#29201f",
    desc: "Una composición opulenta y oscura que combina cacao, azafrán y ládano en la salida, con tabaco, cuero y canela en el corazón, sobre un fondo profundo de oud, ámbar y pachulí.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "11"],
      ["Verano", "2"],
      ["Otoño", "36"],
      ["Día", "12"],
      ["Noche", "40"],
    ],
    acordes: [
      ["Cálido especiado", 100],
      ["Oud", 70],
      ["Cacao", 67],
      ["Cuero", 62],
      ["Canela", 60],
      ["Pachulí", 55],
      ["Ámbar", 53],
      ["Animálico", 48],
      ["Amaderado", 45],
    ],
  },
  {
    id: "onyx",
    nombre: "Onyx - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#171719",
    desc: "Una fragancia cítrica y especiada con bergamota y limón en la salida; manzana, cardamomo, davana, cilantro y lavanda en el corazón; y un fondo cálido de ámbar, haba tonka, tabaco, sándalo y vainilla.",
    indicadores: [
      ["Invierno", "68"],
      ["Primavera", "60"],
      ["Verano", "45"],
      ["Otoño", "76"],
      ["Día", "48"],
      ["Noche", "71"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Avainillado", 75],
      ["Florales", 66],
      ["Aromático", 64],
      ["Afrutados", 60],
      ["Cítrico", 59],
      ["Fresco especiado", 50],
      ["Fresco", 49],
      ["Almizclado", 49],
      ["Verde", 48],
    ],
  },
  {
    id: "dynamic",
    nombre: "Dynamic - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#243c49",
    desc: "Una fragancia enérgica que combina bergamota, pomelo y notas acuáticas en la salida, con nuez, caramelo y chocolate en el corazón, sobre una base de ámbar, musgo y pachulí.",
    indicadores: [
      ["Invierno", "33"],
      ["Primavera", "23"],
      ["Verano", "17"],
      ["Otoño", "26"],
      ["Día", "30"],
      ["Noche", "31"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Nueces", 86],
      ["Caramelo", 77],
      ["Ámbar", 77],
      ["Dulce", 58],
      ["Fresco especiado", 56],
      ["Terrosos", 56],
      ["Amaderado", 53],
      ["Cálido especiado", 53],
      ["Pachulí", 53],
    ],
  },
  {
    id: "rome-pour-homme",
    nombre: "Rome Pour Homme - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#303b32",
    desc: "Una fragancia aromática y amaderada con acorde fougère y geranio en la salida; especias, jengibre y salvia en el corazón; y un fondo masculino de cedro, vetiver y maderas.",
    indicadores: [
      ["Invierno", "26"],
      ["Primavera", "48"],
      ["Verano", "47"],
      ["Otoño", "35"],
      ["Día", "62"],
      ["Noche", "32"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Fresco especiado", 83],
      ["Amaderado", 78],
      ["Herbal", 69],
      ["Rosas", 54],
      ["Especiado suave", 48],
      ["Fresco", 46],
    ],
  },
  {
    id: "rome-extradose",
    nombre: "Rome Extradose - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#555c76",
    desc: "Una fragancia fougère de carácter especiado y amaderado, con notas especiadas en la salida, lavanda silvestre en el corazón y un fondo de maderas.",
    indicadores: [
      ["Invierno", "43"],
      ["Primavera", "38"],
      ["Verano", "10"],
      ["Otoño", "41"],
      ["Día", "29"],
      ["Noche", "42"],
    ],
    acordes: [
      ["Lavanda", 100],
      ["Amaderado", 63],
      ["Aromático", 58],
      ["Cálido especiado", 56],
      ["Fresco especiado", 51],
    ],
  },
  {
    id: "rome-lucky",
    nombre: "Rome Lucky - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#b8a16b",
    desc: "Una composición cítrica, dulce y amaderada con bergamota, pomelo y ciruela en la salida; avellana, miel, notas ozónicas, flor de azahar y jazmín en el corazón; y cedro, musgo, pachulí, ámbar seco y almizcle en el fondo.",
    indicadores: [
      ["Invierno", "0"],
      ["Primavera", "2"],
      ["Verano", "2"],
      ["Otoño", "2"],
      ["Día", "2"],
      ["Noche", "2"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Cítrico", 96],
      ["Nueces", 74],
      ["Pachulí", 65],
      ["Ámbar", 65],
      ["Dulce", 56],
      ["Ozónico", 56],
      ["Almizclado", 56],
      ["Fresco especiado", 56],
      ["Atalcado", 55],
    ],
  },
  {
    id: "rome-pour-homme-intense",
    nombre: "Rome Pour Homme Intense - Bharara",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#252e37",
    desc: "Una fragancia fresca y especiada con bergamota de Calabria, limón siciliano, pimienta negra y notas acuáticas en la salida; jazmín, violeta, hojas de violeta y manzana verde en el corazón; y una base de cedro, madera de cachemira, ciprés, ámbar gris y vainilla.",
    indicadores: [
      ["Invierno", "3"],
      ["Primavera", "3"],
      ["Verano", "2"],
      ["Otoño", "4"],
      ["Día", "3"],
      ["Noche", "4"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Ámbar", 73],
      ["Avainillado", 71],
      ["Atalcado", 71],
      ["Aromático", 66],
      ["Marino", 62],
      ["Violeta", 61],
      ["Balsámico", 55],
      ["Acuático", 55],
      ["Fresco especiado", 51],
    ],
  },
  {
    id: "amber-rouge",
    nombre: "Amber Rouge - Orientica",
    genero: "Unisex",
    ml: 80,
    etiqueta: "",
    color: "#a8322d",
    desc: "Una fragancia ambarada, especiada y amaderada: azafrán y jazmín en la salida, madera de ámbar y ámbar gris en el corazón, sobre un fondo de cedro y resina de abeto.",
    indicadores: [
      ["Invierno", "362"],
      ["Primavera", "249"],
      ["Verano", "136"],
      ["Otoño", "358"],
      ["Día", "249"],
      ["Noche", "375"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Amaderado", 96],
      ["Cálido especiado", 82],
      ["Metálico", 53],
      ["Animálico", 49],
      ["Floral blanco", 49],
      ["Cuero", 49],
      ["Tabaco", 44],
    ],
  },
  {
    id: "royal-amber",
    nombre: "Royal Amber - Orientica",
    genero: "Unisex",
    ml: 80,
    etiqueta: "",
    color: "#d9a23a",
    desc: "Una fragancia fresca, frutal y cálida: bergamota y notas verdes en la salida, melón, piña y ámbar en el corazón, sobre un fondo de almizcle, maderas suaves y vainilla cremosa.",
    indicadores: [
      ["Invierno", "249"],
      ["Primavera", "270"],
      ["Verano", "199"],
      ["Otoño", "288"],
      ["Día", "285"],
      ["Noche", "299"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Afrutados", 68],
      ["Almizclado", 56],
      ["Ámbar", 56],
      ["Atalcado", 55],
      ["Amaderado", 54],
      ["Ozónico", 52],
      ["Fresco", 51],
      ["Verde", 50],
      ["Avainillado", 50],
    ],
  },
  {
    id: "maahir-black",
    nombre: "Maahir Black - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#1b1b1b",
    desc: "Una fragancia oscura y especiada: pimienta negra, pimienta rosa y azafrán en la salida, labdanum y bálsamo de gurjun en el corazón, sobre un fondo de cuero, cedro, pachulí, almizcle y musgo.",
    indicadores: [
      ["Invierno", "1100"],
      ["Primavera", "331"],
      ["Verano", "139"],
      ["Otoño", "950"],
      ["Día", "367"],
      ["Noche", "954"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Fresco especiado", 66],
      ["Cuero", 58],
      ["Aromático", 52],
      ["Cálido especiado", 52],
      ["Almizclado", 47],
      ["Ámbar", 45],
    ],
  },
  {
    id: "mayar-cherry-intense",
    nombre: "Mayar Cherry Intense - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#8e1f3a",
    desc: "Una fragancia golosa y envolvente: frutilla y bergamota en la salida, mermelada de cereza y cacao en el corazón, sobre un fondo cálido de vainilla, pachulí y ámbar. Ideal para el frío y la noche.",
    indicadores: [
      ["Invierno", "527"],
      ["Primavera", "275"],
      ["Verano", "154"],
      ["Otoño", "514"],
      ["Día", "330"],
      ["Noche", "472"],
    ],
    acordes: [
      ["Cacao", 100],
      ["Dulce", 85],
      ["Cálido especiado", 82],
      ["Afrutados", 76],
      ["Avainillado", 73],
      ["Ámbar", 62],
      ["Pachulí", 50],
      ["Atalcado", 49],
    ],
  },
  {
    id: "opulent-musk",
    nombre: "Opulent Musk - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d9c5b0",
    desc: "Una fragancia almizclada y cálida de la línea Opulent de Lattafa.",
    indicadores: [
      ["Invierno", "394"],
      ["Primavera", "300"],
      ["Verano", "192"],
      ["Otoño", "395"],
      ["Día", "332"],
      ["Noche", "327"],
    ],
    acordes: [
      ["Almizclado", 100],
      ["Ámbar", 96],
      ["Amaderado", 94],
      ["Atalcado", 78],
      ["Cálido especiado", 73],
      ["Floral blanco", 70],
      ["Metálico", 55],
      ["Aromático", 54],
      ["Animálico", 53],
      ["Cuero", 50],
    ],
  },
  {
    id: "opulent-oud",
    nombre: "Opulent Oud - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#6b3f1d",
    desc: "Una fragancia ambarada y cálida: cítricos, flores y azafrán en la salida, oud, caramelo y ámbar en el corazón, sobre un fondo de resinas, maderas, vainilla, pachulí y almizcle.",
    indicadores: [
      ["Invierno", "1000"],
      ["Primavera", "276"],
      ["Verano", "122"],
      ["Otoño", "848"],
      ["Día", "368"],
      ["Noche", "872"],
    ],
    acordes: [
      ["Oud", 100],
      ["Cálido especiado", 76],
      ["Ámbar", 70],
      ["Rosas", 62],
      ["Metálico", 50],
      ["Amaderado", 46],
      ["Cuero", 46],
      ["Canela", 45],
      ["Fresco especiado", 44],
    ],
  },
  {
    id: "qaed-al-fursan-caballo-blanco",
    nombre: "Qaed Al Fursan Caballo Blanco - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#f2efe6",
    desc: "Una fragancia tropical, floral y golosa: coco, piña y cítricos en la salida, ylang-ylang, frangipani y jazmín en el corazón, sobre un fondo de vainilla, almizcle y sándalo.",
    indicadores: [
      ["Invierno", "1600"],
      ["Primavera", "4900"],
      ["Verano", "5200"],
      ["Otoño", "3300"],
      ["Día", "4900"],
      ["Noche", "3000"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 95],
      ["Amaderado", 70],
      ["Tropical", 69],
      ["Fresco", 63],
      ["Ámbar", 56],
      ["Cálido especiado", 54],
      ["Oud", 47],
      ["Fresco especiado", 45],
      ["Floral blanco", 45],
    ],
  },
  {
    id: "qimmah-for-men",
    nombre: "Qimmah For Men - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#2f4a5e",
    desc: "Una fragancia masculina de la línea Qimmah de Lattafa, pensada para el uso diario.",
    indicadores: [
      ["Invierno", "40"],
      ["Primavera", "91"],
      ["Verano", "89"],
      ["Otoño", "85"],
      ["Día", "90"],
      ["Noche", "56"],
    ],
    acordes: [
      ["Aromático", 100],
      ["Amaderado", 74],
      ["Lavanda", 73],
      ["Fresco especiado", 65],
      ["Herbal", 60],
      ["Pachulí", 59],
      ["Especiado suave", 45],
      ["Terrosos", 45],
      ["Cálido especiado", 44],
      ["Oud", 44],
    ],
  },
  {
    id: "angham",
    nombre: "Angham - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#7a4f8c",
    desc: "Una fragancia de la línea Angham de Lattafa, de perfil dulce y envolvente.",
    indicadores: [
      ["Invierno", "2800"],
      ["Primavera", "2500"],
      ["Verano", "1600"],
      ["Otoño", "3000"],
      ["Día", "2700"],
      ["Noche", "2400"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Dulce", 91],
      ["Lavanda", 84],
      ["Fresco especiado", 70],
      ["Atalcado", 65],
      ["Ámbar", 58],
      ["Almizclado", 56],
      ["Cítrico", 55],
      ["Cacao", 54],
      ["Aromático", 52],
    ],
  },
  {
    id: "angham-second-sound",
    nombre: "Angham Second Sound - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#5d3a73",
    desc: "Una segunda versión de Angham de Lattafa, con un perfil propio dentro de la misma línea.",
    indicadores: [
      ["Invierno", "125"],
      ["Primavera", "664"],
      ["Verano", "610"],
      ["Otoño", "204"],
      ["Día", "577"],
      ["Noche", "157"],
    ],
    acordes: [
      ["Florales", 100],
      ["Dulce", 77],
      ["Avainillado", 70],
      ["Fresco", 67],
      ["Cítrico", 60],
      ["Almizclado", 57],
      ["Floral blanco", 54],
      ["Ámbar", 52],
      ["Atalcado", 51],
      ["Rosas", 48],
    ],
  },
  {
    id: "badee-al-oud-honor-glory",
    nombre: "Bade'e Al Oud Honor & Glory - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b5651d",
    desc: "Una fragancia dulce, cálida y especiada: piña y crème brûlée en la salida, canela, cúrcuma, pimienta negra y benjuí en el corazón, sobre un fondo de vainilla, sándalo, cashmeran y musgo.",
    indicadores: [
      ["Invierno", "4600"],
      ["Primavera", "4200"],
      ["Verano", "3200"],
      ["Otoño", "4600"],
      ["Día", "4300"],
      ["Noche", "4200"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Cálido especiado", 76],
      ["Afrutados", 66],
      ["Avainillado", 62],
      ["Amaderado", 54],
      ["Atalcado", 51],
      ["Canela", 51],
      ["Tropical", 50],
    ],
  },
  {
    id: "dynasty",
    nombre: "Dynasty - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#a8812e",
    desc: "Una fragancia elegante y con presencia, de espíritu oriental.",
    indicadores: [
      ["Invierno", "927"],
      ["Primavera", "1800"],
      ["Verano", "1600"],
      ["Otoño", "1500"],
      ["Día", "1700"],
      ["Noche", "1100"],
    ],
    acordes: [
      ["Fresco especiado", 100],
      ["Ahumado", 93],
      ["Amaderado", 84],
      ["Cítrico", 82],
      ["Herbal", 72],
      ["Aromático", 67],
      ["Atalcado", 60],
      ["Almizclado", 58],
      ["Afrutados", 55],
      ["Cuero", 52],
    ],
  },
  {
    id: "eclaire-banoffi",
    nombre: "Eclaire Banoffi - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#d9a05b",
    desc: "Una fragancia golosa y cremosa, inspirada en el postre banoffee.",
    indicadores: [
      ["Invierno", "548"],
      ["Primavera", "355"],
      ["Verano", "183"],
      ["Otoño", "542"],
      ["Día", "515"],
      ["Noche", "242"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Avainillado", 60],
      ["Lactónico", 52],
      ["Afrutados", 51],
      ["Tropical", 44],
    ],
  },
  {
    id: "eclaire-pistacho",
    nombre: "Eclaire Pistacho - Lattafa",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#a3b87a",
    desc: "Una fragancia golosa y cremosa con el pistacho como protagonista.",
    indicadores: [
      ["Invierno", "513"],
      ["Primavera", "205"],
      ["Verano", "91"],
      ["Otoño", "486"],
      ["Día", "404"],
      ["Noche", "278"],
    ],
    acordes: [
      ["Avainillado", 100],
      ["Dulce", 84],
      ["Lactónico", 78],
      ["Cacao", 67],
      ["Amaderado", 52],
      ["Cálido especiado", 52],
      ["Nueces", 52],
      ["Atalcado", 50],
      ["Coco", 49],
      ["Almizclado", 45],
    ],
  },
  {
    id: "hayaati-al-maleky",
    nombre: "Hayaati Al Maleky - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#c2943a",
    desc: "Una fragancia masculina de la línea Hayaati de Lattafa, con aire de realeza.",
    indicadores: [
      ["Invierno", "350"],
      ["Primavera", "431"],
      ["Verano", "343"],
      ["Otoño", "409"],
      ["Día", "419"],
      ["Noche", "364"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Fresco especiado", 84],
      ["Almizclado", 77],
      ["Amaderado", 69],
      ["Cítrico", 62],
      ["Atalcado", 58],
      ["Animálico", 54],
      ["Especiado suave", 53],
      ["Balsámico", 46],
    ],
  },
  {
    id: "hayaati-negro",
    nombre: "Hayaati Negro - Lattafa",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#161616",
    desc: "Una versión oscura e intensa de la línea Hayaati de Lattafa.",
    indicadores: [
      ["Invierno", "510"],
      ["Primavera", "1500"],
      ["Verano", "1500"],
      ["Otoño", "1100"],
      ["Día", "1500"],
      ["Noche", "792"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Almizclado", 94],
      ["Canela", 92],
      ["Atalcado", 81],
      ["Cítrico", 80],
      ["Cálido especiado", 80],
      ["Amaderado", 78],
      ["Avainillado", 76],
      ["Fresco", 74],
      ["Verde", 70],
    ],
  },
  {
    id: "supremacy-collectors-edition",
    nombre: "Supremacy Collector's Edition Pour Homme - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#b89b52",
    desc: "Una fragancia frutal, ambarada y amaderada, con cítricos vibrantes, matices especiados y un fondo elegante e intenso.",
    indicadores: [
      ["Invierno", "5800"],
      ["Primavera", "6900"],
      ["Verano", "6700"],
      ["Otoño", "6500"],
      ["Día", "6800"],
      ["Noche", "6200"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Dulce", 92],
      ["Floral blanco", 86],
      ["Cítrico", 83],
      ["Ámbar", 71],
      ["Musgoso", 66],
      ["Animálico", 61],
      ["Tropical", 61],
      ["Fresco", 57],
      ["Almizclado", 56],
    ],
  },
  {
    id: "supremacy-gala",
    nombre: "Supremacy Gala - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#d5a4a8",
    desc: "Una fragancia femenina de perfil floral y dulce, con una personalidad elegante, luminosa y sofisticada.",
    indicadores: [
      ["Invierno", "15"],
      ["Primavera", "55"],
      ["Verano", "37"],
      ["Otoño", "32"],
      ["Día", "53"],
      ["Noche", "14"],
    ],
    acordes: [
      ["Dulce", 100],
      ["Floral blanco", 94],
      ["Florales", 81],
      ["Caramelo", 77],
      ["Lactónico", 72],
      ["Afrutados", 66],
      ["Pachulí", 63],
      ["Tropical", 60],
      ["Cítrico", 58],
      ["Avainillado", 51],
    ],
  },
  {
    id: "supremacy-gold",
    nombre: "Supremacy Gold - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#c9a13c",
    desc: "Una composición floral, amaderada y almizclada, con un carácter cálido y refinado.",
    indicadores: [
      ["Invierno", "114"],
      ["Primavera", "105"],
      ["Verano", "52"],
      ["Otoño", "130"],
      ["Día", "89"],
      ["Noche", "107"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Atalcado", 95],
      ["Fresco especiado", 91],
      ["Florales", 81],
      ["Violeta", 80],
      ["Avainillado", 78],
      ["Oud", 64],
      ["Iris", 64],
      ["Cálido especiado", 54],
      ["Amaderado", 54],
    ],
  },
  {
    id: "supremacy-in-heaven",
    nombre: "Supremacy In Heaven - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#83b9c9",
    desc: "Una fragancia fresca y limpia, con cítricos, notas verdes y matices almizclados y amaderados.",
    indicadores: [
      ["Invierno", "149"],
      ["Primavera", "1100"],
      ["Verano", "1100"],
      ["Otoño", "429"],
      ["Día", "1000"],
      ["Noche", "295"],
    ],
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 93],
      ["Afrutados", 76],
      ["Verde", 71],
      ["Almizclado", 64],
      ["Atalcado", 62],
      ["Fresco especiado", 60],
      ["Aromático", 53],
      ["Florales", 47],
      ["Especiado suave", 44],
    ],
  },
  {
    id: "supremacy-in-oud",
    nombre: "Supremacy In Oud - Afnan",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#49382f",
    desc: "Una fragancia intensa de inspiración oriental, con oud, especias y notas cálidas que aportan profundidad.",
    indicadores: [
      ["Invierno", "990"],
      ["Primavera", "419"],
      ["Verano", "167"],
      ["Otoño", "910"],
      ["Día", "481"],
      ["Noche", "888"],
    ],
    acordes: [
      ["Oud", 100],
      ["Cálido especiado", 98],
      ["Fresco especiado", 96],
      ["Dulce", 90],
      ["Pachulí", 64],
      ["Metálico", 60],
      ["Lavanda", 57],
      ["Almizclado", 56],
      ["Cuero", 54],
      ["Amaderado", 51],
    ],
  },
  {
    id: "supremacy-incense",
    nombre: "Supremacy Incense - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#393b40",
    desc: "Una fragancia oscura y especiada, con un perfil ahumado e incienso que transmite un carácter profundo y envolvente.",
    indicadores: [
      ["Invierno", "847"],
      ["Primavera", "299"],
      ["Verano", "116"],
      ["Otoño", "706"],
      ["Día", "317"],
      ["Noche", "739"],
    ],
    acordes: [
      ["Ámbar", 100],
      ["Ahumado", 90],
      ["Fresco especiado", 69],
      ["Amaderado", 64],
      ["Cálido especiado", 62],
      ["Oud", 59],
      ["Balsámico", 57],
      ["Aromático", 54],
      ["Cuero", 52],
      ["Pachulí", 48],
    ],
  },
  {
    id: "supremacy-noir",
    nombre: "Supremacy Noir - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#25282c",
    desc: "Una composición amaderada y especiada, con matices de cuero y almizcle que le dan un perfil sobrio e intenso.",
    indicadores: [
      ["Invierno", "292"],
      ["Primavera", "267"],
      ["Verano", "137"],
      ["Otoño", "307"],
      ["Día", "252"],
      ["Noche", "276"],
    ],
    acordes: [
      ["Amaderado", 100],
      ["Aromático", 79],
      ["Verde", 54],
      ["Cuero", 47],
      ["Conífera", 45],
    ],
  },
  {
    id: "supremacy-not-only-intense",
    nombre: "Supremacy Not Only Intense - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#34483b",
    desc: "Una fragancia frutal y ambarada que combina piña y cítricos con notas aromáticas, musgo y un fondo amaderado.",
    indicadores: [
      ["Invierno", "2400"],
      ["Primavera", "3300"],
      ["Verano", "3000"],
      ["Otoño", "3100"],
      ["Día", "3200"],
      ["Noche", "2900"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Musgoso", 87],
      ["Amaderado", 81],
      ["Terrosos", 80],
      ["Cítrico", 72],
      ["Fresco especiado", 63],
      ["Ámbar", 60],
      ["Animálico", 59],
      ["Aromático", 59],
      ["Cálido especiado", 54],
    ],
  },
  {
    id: "supremacy-pink",
    nombre: "Supremacy Pink - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e5a6bd",
    desc: "Una fragancia femenina floral y almizclada, de perfil delicado, dulce y elegante.",
    indicadores: [
      ["Invierno", "31"],
      ["Primavera", "104"],
      ["Verano", "84"],
      ["Otoño", "55"],
      ["Día", "103"],
      ["Noche", "29"],
    ],
    acordes: [
      ["Rosas", 100],
      ["Florales", 93],
      ["Fresco", 79],
      ["Almizclado", 67],
      ["Atalcado", 56],
      ["Floral blanco", 52],
    ],
  },
  {
    id: "supremacy-purple",
    nombre: "Supremacy Purple - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#79528e",
    desc: "Una composición dulce y frutal, con un carácter intenso y moderno y matices florales y almizclados.",
    indicadores: [
      ["Invierno", "81"],
      ["Primavera", "90"],
      ["Verano", "81"],
      ["Otoño", "86"],
      ["Día", "89"],
      ["Noche", "90"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Almizclado", 92],
      ["Dulce", 78],
      ["Atalcado", 76],
      ["Ámbar", 68],
      ["Cítrico", 66],
      ["Avainillado", 62],
      ["Fresco", 48],
      ["Animálico", 47],
    ],
  },
  {
    id: "supremacy-silver",
    nombre: "Supremacy Silver - Afnan",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#a9afb7",
    desc: "Una fragancia frutal y amaderada con piña, bergamota, grosella negra y manzana, acompañadas de notas ahumadas y musgosas.",
    indicadores: [
      ["Invierno", "499"],
      ["Primavera", "1300"],
      ["Verano", "1300"],
      ["Otoño", "1100"],
      ["Día", "1400"],
      ["Noche", "826"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Cuero", 69],
      ["Amaderado", 68],
      ["Dulce", 65],
      ["Ahumado", 61],
      ["Cítrico", 55],
      ["Almizclado", 53],
      ["Musgoso", 52],
      ["Tropical", 50],
      ["Terrosos", 50],
    ],
  },
  {
    id: "supremacy-tapis-rouge",
    nombre: "Supremacy Tapis Rouge - Afnan",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#8e243d",
    desc: "Una fragancia elegante de perfil dulce y frutal, con matices florales y un carácter sofisticado para ocasiones especiales.",
    indicadores: [
      ["Invierno", "52"],
      ["Primavera", "54"],
      ["Verano", "43"],
      ["Otoño", "57"],
      ["Día", "45"],
      ["Noche", "53"],
    ],
    acordes: [
      ["Afrutados", 100],
      ["Acerezado", 71],
      ["Fresco", 58],
      ["Rosas", 58],
      ["Florales", 57],
      ["Dulce", 51],
      ["Cálido especiado", 50],
      ["Tropical", 49],
      ["Floral blanco", 45],
    ],
  },
];

/* Colores de las barras de acordes (los que no estén acá usan un gris) */
const COLOR_ACORDE = {
  // PRINCIPALES
  "Especiado suave": "#a8785c",
  Nueces: "#9a6945",
  Atalcado: "#ebc9c3",
  Aldehídico: "#d7e4df",
  Ámbar: "#e58a1b",
  Animálico: "#765348",
  Acuático: "#4ebed0",
  Aromático: "#3aa88b",
  Cítrico: "#f1e441",
  Terroso: "#7c6a48",
  Floral: "#e0568f",
  Fresco: "#7fd6dc",
  "Fresco especiado": "#6ecf2c",
  Afrutados: "#ff8d4d",
  Verde: "#62bf62",
  Herbal: "#86c46e",
  Lactónico: "#e8dfcf",
  Cuero: "#6d4a39",
  Marino: "#3fb5c9",
  Musgoso: "#60744c",
  Almizclado: "#cfc3d8",
  Oud: "#4f392d",
  Ozónico: "#82d7e8",
  Pachulí: "#66533d",
  Rosas: "#e8709c",
  Salado: "#a8b9bd",
  Ahumado: "#7c7d84",
  Dulce: "#f08fa6",
  Tabaco: "#7b5236",
  Tropical: "#e5b83c",
  Avainillado: "#f2d79a",
  "Cálido especiado": "#c8432b",
  "Floral blanco": "#eee5cf",
  Amaderado: "#8f6a45",
  "Floral amarillo": "#e7cf68",
  Nardos: "#e8e0c8",

  // ESPECÍFICOS
  Almendra: "#c99b72",
  Balsámico: "#b8783a",
  "Cera de abejas": "#d9a52e",
  Amargo: "#665b42",
  Cacao: "#75452d",
  Alcanforado: "#91a89b",
  Caramelo: "#b8783a",
  Cereza: "#b52f45",
  Chocolate: "#6b3e26",
  Canela: "#a95732",
  "Coca-Cola": "#56382d",
  Coco: "#eee5cf",
  Café: "#5b3827",
  Conífero: "#486b4b",
  Amielado: "#d99a25",
  Iris: "#8e7cc3",
  Lavanda: "#a88bd0",
  Metálico: "#9da5a5",
  Mineral: "#8b9999",
  Nuez: "#9a6945",
  Ron: "#8b5b32",
  Arena: "#c8ad82",
  Jabonoso: "#d5e4e4",
  Agrio: "#b9c94c",
  Tuberosa: "#eee3bd",
  Violeta: "#9b7ac4",
  Whisky: "#a56c32",

  // MENOS COMUNES
  Alcohol: "#d9d9d9",
  Anís: "#65794c",
  Champán: "#e5d79a",
  Arcilla: "#a86f55",
  Aceitoso: "#8d8361",
  Papel: "#ddd5c4",
  Sake: "#e5e0d1",
  Vodka: "#dce7e8",
  Vino: "#713d50",

  // MUY RAROS
  Asfalto: "#4b4b4b",
  Cannabis: "#31723c",
  Tocino: "#9b6655",
  "Cinta Scotch": "#c29a5b",
  Gasolina: "#56605a",
  "Hierro caliente": "#8c5550",
  "Pegamento industrial": "#b4a66a",
  Carne: "#8c514d",
  Plástico: "#b8b8b8",
  Goma: "#454545",
  "Pelota de tenis": "#c8d63d",
  Vinilo: "#777777",
  "Yeso húmedo": "#aaa79d",

  // OTROS
  Barbacoa: "#704638",
  Boscoso: "#456b43",
  Gourmand: "#c88965",
  Lechoso: "#e8e1d2",
  Pera: "#c8d85a",
  Especia: "#a94d32",
  Terpénico: "#71875b",
  Barniz: "#9b8062",
};

/* =====================================================================
   UTILIDADES
   ===================================================================== */
const $ = (s) => document.querySelector(s);

const norm = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

const guardar = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch (e) {}
};

const leer = (k) => {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    return null;
  }
};

const porId = (id) => PERFUMES.find((p) => p.id === id);

const BOLSA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>`;

/* Nombres que Fragantica escribe distinto a las claves de COLOR_ACORDE */
const ALIAS_ACORDE = {
  Terrosos: "Terroso",
  Florales: "Floral",
};

/* Acepta "invierno", "Invierno", "otono", "Otoño", "dia", "Día", etc. */
const CLAVE_CUANDO = {
  invierno: "Invierno",
  primavera: "Primavera",
  verano: "Verano",
  otono: "Otoño",
  dia: "Día",
  noche: "Noche",
};

PERFUMES.forEach((p) => {
  p._fotos = p.fotos || [1, 2].map((n) => `img/${p.id}-${n}.${FOTO_EXT}`);

  /* La marca es lo que va después del último " - " del nombre:
     "Khamrah - Lattafa" → marca "Lattafa", nombre corto "Khamrah" */
  const partes = p.nombre.split(" - ");

  p.marca = partes.length > 1 ? partes.pop().trim() : "";
  p.corto = partes.join(" - ");

  /* indicadores: [["invierno","8"], ...]  →  { Invierno: 8, ... } */
  p._cuando = {};

  (p.indicadores || []).forEach(([k, v]) => {
    const clave = CLAVE_CUANDO[norm(k)];

    if (clave) p._cuando[clave] = Number(v) || 0;
  });

  /* corrige nombres de acordes (Terrosos → Terroso, Florales → Floral) y pasa a número */
  p.acordes = (p.acordes || []).map(([n, v]) => [
    ALIAS_ACORDE[n] || n,
    Number(v),
  ]);

  p._texto = norm(
    [p.nombre, p.genero, ...p.acordes.map((a) => a[0])].join(" "),
  );
});

/* =====================================================================
   CÁLCULO DE PORCENTAJES DE CUÁNDO USARLO
   ===================================================================== */

/* El mayor número de votos del perfume equivale a 100%.
   Los demás valores se calculan proporcionalmente. */
function porcentajeCuando(p, tipo) {
  const max = Math.max(0, ...Object.values(p._cuando));

  if (!max) return 0;

  return Math.round(((p._cuando[tipo] || 0) / max) * 100);
}

/* Frasco de ejemplo: se muestra si todavía no cargaste la foto principal */
function frasco(color) {
  return `<svg viewBox="0 0 120 170" aria-hidden="true">
    <rect x="46" y="6" width="28" height="34" rx="3" fill="#1a1f1c"/>
    <rect x="53" y="38" width="14" height="10" fill="#fff" opacity=".55"/>
    <rect x="18" y="46" width="84" height="116" rx="10" fill="#fff" fill-opacity=".55" stroke="#000" stroke-opacity=".12"/>
    <rect x="25" y="66" width="70" height="90" rx="6" fill="${color}"/>
    <rect x="29" y="52" width="4" height="104" rx="2" fill="#fff" opacity=".55"/>
    <text x="60" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="9" letter-spacing="2" fill="#000" opacity=".5">${esc(MARCA.toUpperCase())}</text>
  </svg>`;
}

/* Si una foto no existe todavía, mostramos un aviso con el nombre que tiene que tener el archivo */
document.addEventListener(
  "error",
  (e) => {
    const t = e.target;

    if (t.tagName !== "IMG" || !t.dataset.color) return;

    if (t.hasAttribute("data-mini") || t.parentElement.querySelector(".ph")) {
      t.remove();
      return;
    }

    const i = +t.dataset.i;
    const ph = document.createElement("div");

    ph.className = "ph";

    if (i === 0) {
      ph.innerHTML = frasco(t.dataset.color);
    } else {
      ph.classList.add("ph-txt");
      ph.innerHTML = `<p>Acá va tu foto de ${TIPOS_FOTO[i].toLowerCase()}</p><small>${esc(t.getAttribute("src"))}</small>`;
    }

    t.replaceWith(ph);
  },
  true,
);

/* La imagen principal visible primero tiene prioridad cuando entra en pantalla.
   Las restantes se cargan solo al acercarse; tamaño declarado y decodificación asíncrona. */
const imagen = (p, i, mini = false, prioritaria = false) =>
  `<img src="${esc(p._fotos[i] || "")}" alt="${mini ? "" : esc(p.nombre + " · " + TIPOS_FOTO[i])}" width="600" height="400" loading="lazy" decoding="async" fetchpriority="${prioritaria ? "high" : "low"}" data-color="${p.color}" data-i="${i}" ${mini ? "data-mini" : ""}>`;

/* =====================================================================
   INSTAGRAM: copiar el mensaje y abrir el chat directo
   ===================================================================== */

async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = texto;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (_) {
      return false;
    }
  }
}

// Avisos discretos. Si hay un <dialog> modal abierto, viven DENTRO de él.
// Esto evita que el fondo modal impida tocar el aviso o la X.
let temporizador;
const toastDjinn = $("#toast");

function ocultarAviso() {
  clearTimeout(temporizador);
  temporizador = undefined;
  toastDjinn.classList.remove("on");
}

function aviso(msg) {
  const dialogos = document.querySelectorAll("dialog[open]");
  const dialogoActual = dialogos[dialogos.length - 1];
  const destino = dialogoActual || document.body;
  if (toastDjinn.parentElement !== destino) destino.appendChild(toastDjinn);

  $("#toast-mensaje").textContent = msg;
  clearTimeout(temporizador);
  toastDjinn.classList.add("on");
  // Mucho menos tiempo que el aviso negro anterior (5,2 segundos).
  temporizador = setTimeout(ocultarAviso, 2600);
}

// Un toque sobre cualquier parte del aviso, o sobre la X, lo cierra al instante.
toastDjinn.addEventListener("click", ocultarAviso);
// Si se cierra el diálogo contenedor, devolvemos el aviso al body.
document.addEventListener(
  "close",
  (e) => {
    if (e.target.tagName === "DIALOG" && e.target.contains(toastDjinn)) {
      ocultarAviso();
      document.body.appendChild(toastDjinn);
    }
  },
  true,
);

/* Cualquier link con data-ig copia su mensaje y deja que el link abra Instagram */
document.addEventListener("click", async (e) => {
  const a = e.target.closest("[data-ig]");

  if (!a) return;

  const ok = await copiar(a.dataset.ig);

  aviso(
    ok
      ? "Mensaje copiado. Pegalo en el chat de Instagram y enviá."
      : "Se abrió Instagram. Escribinos tu consulta en el chat.",
  );
});

$("#wa-fab").href = waLink(`Hola ${MARCA}! Quiero hacer una consulta.`);
$("#ig-fab").href = IG_DM;
$("#ig-fab").dataset.ig = `Hola ${MARCA}! Quiero hacer una consulta.`;

/* =====================================================================
   ÍCONOS DE ESTACIONES Y MOMENTO DEL DÍA
   ===================================================================== */

const ICONOS = {
  Invierno: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.500v19M3.800 7.250l16.400 9.500M3.800 16.750l16.400-9.500M9.500 4.500L12 6.800l2.500-2.300M9.500 19.500L12 17.200l2.500 2.300"/></svg>`,

  Primavera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 4C10.500 4 5 9 5 15.500c0 1.700.4 3 1.200 4.200C7 20.400 8.500 21 10.500 21 17 21 20 14 20 4z"/><path d="M4 21C8 15 11.500 12 15 10"/></svg>`,

  Verano: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12.500a9 9 0 0118 0H3z"/><path d="M12 3.500V2M12 12.500V19a2.200 2.200 0 01-4.400 0"/></svg>`,

  Otoño: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.500l2.300 4.300 2.700-1-.9 4.600 3.900.9-3.100 3.100.9 2.800-4.300-1V21h-1V15.200l-4.300 1 .9-2.800-3.100-3.100 3.900-.9-.9-4.600 2.700 1z"/></svg>`,

  Día: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.500v2.200M12 19.300v2.200M2.500 12h2.200M19.300 12h2.200M5.300 5.300l1.600 1.600M17.100 17.100l1.600 1.600M5.300 18.700l1.600-1.600M17.100 6.900l1.600-1.600"/></svg>`,

  Noche: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.500 14.500A8.500 8.500 0 019.500 3.500a8.500 8.500 0 1011 11z"/></svg>`,
};

const ESTACIONES = ["Invierno", "Primavera", "Verano", "Otoño"];
const MOMENTOS = ["Día", "Noche"];
const CUANDO = [...ESTACIONES, ...MOMENTOS];

const COLOR_CUANDO = {
  Invierno: "#4cc3e8",
  Primavera: "#8fdc6a",
  Verano: "#f27b7b",
  Otoño: "#f5b25a",
  Día: "#f4a62a",
  Noche: "#7fa6c9",
};

/* =====================================================================
   ESTADO
   ===================================================================== */

const generos = [...new Set(PERFUMES.map((p) => p.genero))];

const marcas = [...new Set(PERFUMES.map((p) => p.marca).filter(Boolean))].sort(
  (a, b) => a.localeCompare(b, "es"),
);

let carrito = {};

try {
  carrito = JSON.parse(leer("djinn:carrito") || "{}");
} catch (e) {}

Object.keys(carrito).forEach((id) => {
  if (!porId(id)) delete carrito[id];
});

const estado = {
  q: "",
  genero: "Todos",
  marcas: new Set(),
  estaciones: new Set(),
  momentos: new Set(),
  familiaAroma: null,
  minCuando: 50,
  orden: "destacados",
  lista: false,
};

let visibles = [],
  actual = null,
  fotoActual = 0;

const movil = window.matchMedia("(max-width: 900px)");

/* =====================================================================
   FILTROS
   ===================================================================== */

$("#f-genero").innerHTML = ["Todos", ...generos]
  .map(
    (g, i) =>
      `<label class="pastilla"><input type="radio" name="genero" value="${g}" ${i === 0 ? "checked" : ""}><span>${g}</span></label>`,
  )
  .join("");

/* Vitrina de marcas: una tarjeta por marca (la que más fragancias tiene va primero).
   "Todas" es la tarjeta inicial; elegir marcas se puede combinar. */
const cuentaMarca = (m) => PERFUMES.filter((p) => p.marca === m).length;

const marcasOrden = [...marcas].sort(
  (a, b) => cuentaMarca(b) - cuentaMarca(a) || a.localeCompare(b, "es"),
);

const fraganciasTxt = (n) => `${n} ${n === 1 ? "fragancia" : "fragancias"}`;

/* Hasta 5 colores de frascos de la marca (sin blancos, que no se ven), bien repartidos */
function muestrario(lista, n = 5) {
  const colores = [];

  lista.forEach((p) => {
    if (luz(p.color) < 0.93 && !colores.includes(p.color))
      colores.push(p.color);
  });

  if (colores.length <= n) return colores;

  return Array.from(
    { length: n },
    (_, i) => colores[Math.round((i * (colores.length - 1)) / (n - 1))],
  );
}

function marcaTile(nombre, valor, n, colores) {
  return `<button type="button" class="mt" data-marca="${esc(valor)}" aria-pressed="false"><span class="mt-nombre">${esc(nombre)}</span><span class="mt-cuenta">${fraganciasTxt(n)}</span><span class="mt-dots" aria-hidden="true">${colores.map((c) => `<i style="--c:${c}"></i>`).join("")}</span></button>`;
}

function armarMarcas() {
  /* "Todas": un color de cada marca, para que se vea la variedad */
  const mezcla = marcasOrden
    .map((m) => PERFUMES.find((p) => p.marca === m && luz(p.color) < 0.93))
    .filter(Boolean)
    .map((p) => p.color);

  $("#f-marca").innerHTML =
    marcaTile("Todas", "", PERFUMES.length, mezcla.slice(0, 5)) +
    marcasOrden
      .map((m) =>
        marcaTile(
          m,
          m,
          cuentaMarca(m),
          muestrario(PERFUMES.filter((p) => p.marca === m)),
        ),
      )
      .join("");
}

function pintarMarcas() {
  document.querySelectorAll("#f-marca .mt").forEach((b) => {
    const v = b.dataset.marca;

    b.setAttribute(
      "aria-pressed",
      v === "" ? estado.marcas.size === 0 : estado.marcas.has(v),
    );
  });
}

/* Avisos de que hay más marcas para deslizar: degradé en el borde y flechita.
   Solo aparecen cuando la fila realmente se desborda (en celular). */
function marcasScroll() {
  const f = $("#f-marca"),
    c = $("#marcas-cinta"),
    max = f.scrollWidth - f.clientWidth;

  c.classList.toggle("hay-der", max > 4 && f.scrollLeft < max - 4);
  c.classList.toggle("hay-izq", f.scrollLeft > 4);
}

$("#f-marca").addEventListener("scroll", marcasScroll, { passive: true });
window.addEventListener("resize", marcasScroll);

$("#marcas-sig").addEventListener("click", () =>
  $("#f-marca").scrollBy({
    left: $("#f-marca").clientWidth * 0.7,
    behavior: "smooth",
  }),
);

/* Al entrar, la fila se mueve un poquito y vuelve, para que se note que desliza */
function empujoncito() {
  const f = $("#f-marca");

  if (
    f.scrollWidth <= f.clientWidth ||
    f.scrollLeft !== 0 ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;

  let tocada = false;

  f.addEventListener("touchstart", () => (tocada = true), { once: true });

  f.style.scrollSnapType = "none";
  f.scrollTo({ left: 80, behavior: "smooth" });

  setTimeout(() => {
    if (!tocada) f.scrollTo({ left: 0, behavior: "smooth" });

    setTimeout(() => (f.style.scrollSnapType = ""), 500);
  }, 700);
}

$("#f-marca").addEventListener("click", (e) => {
  const b = e.target.closest(".mt");

  if (!b) return;

  const v = b.dataset.marca;

  if (!v) {
    estado.marcas.clear();
  } else if (estado.marcas.has(v)) {
    estado.marcas.delete(v);
  } else {
    estado.marcas.add(v);
  }

  render();
});

const pastillasIco = (lista) =>
  lista
    .map(
      (v) =>
        `<label class="pastilla"><input type="checkbox" value="${v}"><span>${ICONOS[v]}${v}</span></label>`,
    )
    .join("");

$("#f-estacion").innerHTML = pastillasIco(ESTACIONES);
$("#f-momento").innerHTML = pastillasIco(MOMENTOS);

/* Al elegir una estación/momento se ordena por "Mejor coincidencia"; al quitarlas, vuelve a Destacados */
function sincronizarOrden() {
  const hay = estado.estaciones.size || estado.momentos.size;

  if (hay && estado.orden === "destacados") {
    estado.orden = "afinidad";
  } else if (!hay && estado.orden === "afinidad") {
    estado.orden = "destacados";
  }

  $("#orden").value = estado.orden;
}

const alternar = (set) => (e) => {
  e.target.checked ? set.add(e.target.value) : set.delete(e.target.value);

  sincronizarOrden();
  render();
};

$("#f-estacion").addEventListener("change", alternar(estado.estaciones));

$("#f-momento").addEventListener("change", alternar(estado.momentos));

const rangoMin = $("#cuando-min");

const txtMin = () => ($("#cuando-min-txt").textContent = rangoMin.value + "%");

txtMin();

rangoMin.addEventListener("input", () => {
  estado.minCuando = +rangoMin.value;
  txtMin();
  render();
});

$("#f-genero").addEventListener("change", (e) => {
  estado.genero = e.target.value;
  render();
});

$("#orden").addEventListener("change", (e) => {
  estado.orden = e.target.value;
  render();
});

const buscador = $("#buscador"),
  q = $("#q");

/* =====================================================================
   BUSCADOR INTELIGENTE
   Sugiere fragancias del catálogo, tolera errores leves y no exige servidor.
   Un pequeño retraso evita reconstruir 198 tarjetas por cada pulsación.
   ===================================================================== */
const sugerencias = $("#sugerencias");
let resultadosSugeridos = [];
let indiceSugerido = -1;
let esperaBusqueda;
let busquedaCerrada = false;

/* Distancia de edición rápida. El límite evita comparaciones caras o irrelevantes. */
function distanciaAcotada(a, b, limite) {
  if (Math.abs(a.length - b.length) > limite) return limite + 1;
  let anterior = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const fila = [i];
    let minimo = i;
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      const v = Math.min(
        fila[j - 1] + 1,
        anterior[j] + 1,
        anterior[j - 1] + costo,
      );
      fila.push(v);
      minimo = Math.min(minimo, v);
    }
    if (minimo > limite) return limite + 1;
    anterior = fila;
  }
  return anterior[b.length];
}

const indiceBusqueda = PERFUMES.map((p) => ({
  p,
  nombre: norm(p.corto),
  marca: norm(p.marca),
  texto: p._texto,
  palabras: [
    ...new Set(
      norm([p.corto, p.marca].join(" "))
        .split(/[^a-z0-9]+/)
        .filter(Boolean),
    ),
  ],
}));

function sugerirPerfumes(consulta) {
  const texto = norm(consulta.trim()).replace(/\s+/g, " ");
  if (texto.length < 2) return [];
  const partes = texto.split(" ");
  return indiceBusqueda
    .map((item) => {
      const { nombre, marca, palabras, p } = item;
      let puntos;
      if (nombre === texto) puntos = 0;
      else if (nombre.startsWith(texto)) puntos = 3;
      else if (nombre.split(" ").some((w) => w.startsWith(texto))) puntos = 12;
      else if (nombre.includes(texto)) puntos = 18;
      else if (marca.startsWith(texto)) puntos = 24;
      else if (partes.every((w) => item.texto.includes(w))) puntos = 32;
      else if (texto.length >= 4 && partes.length === 1) {
        const max = texto.length > 5 ? 2 : 1;
        const cercano = palabras.some(
          (w) => distanciaAcotada(texto, w, max) <= max,
        );
        if (!cercano) return null;
        puntos = 70;
      } else return null;
      return { p, puntos };
    })
    .filter(Boolean)
    .sort(
      (a, b) => a.puntos - b.puntos || a.p.corto.localeCompare(b.p.corto, "es"),
    )
    .slice(0, 6)
    .map((v) => v.p);
}

function cerrarSugerencias() {
  sugerencias.hidden = true;
  q.setAttribute("aria-expanded", "false");
  q.removeAttribute("aria-activedescendant");
  indiceSugerido = -1;
}

function marcarSugerencia(indice) {
  indiceSugerido = indice;
  [...sugerencias.querySelectorAll('[role="option"]')].forEach((el, i) => {
    el.setAttribute("aria-selected", String(i === indice));
  });
  const activo = indice >= 0 ? $("#sug-" + indice) : null;
  if (activo) {
    q.setAttribute("aria-activedescendant", activo.id);
    activo.scrollIntoView({ block: "nearest" });
  } else q.removeAttribute("aria-activedescendant");
}

function mostrarSugerencias() {
  if (busquedaCerrada || document.querySelector("dialog[open]"))
    return cerrarSugerencias();
  resultadosSugeridos = sugerirPerfumes(q.value);
  if (!resultadosSugeridos.length) return cerrarSugerencias();
  sugerencias.innerHTML =
    `<div class="sugerencias-titulo">${resultadosSugeridos[0] && !norm(resultadosSugeridos[0].corto).includes(norm(q.value.trim())) && !resultadosSugeridos.some((p) => norm(p.corto).includes(norm(q.value.trim()))) ? "¿Quizás buscabas...?" : "Fragancias relacionadas"}</div>` +
    resultadosSugeridos
      .map(
        (p, i) =>
          `<button type="button" role="option" aria-selected="false" id="sug-${i}" class="sugerencia" data-sug-id="${esc(p.id)}"><span class="sugerencia-foto" style="--c:${esc(p.color)}">${imagen(p, 0, true)}</span><span class="sugerencia-datos"><strong>${esc(p.corto)}</strong><small>${esc(p.marca)} · ${p.ml} ml</small></span><span class="sugerencia-flecha" aria-hidden="true">↗</span></button>`,
      )
      .join("");
  sugerencias.hidden = false;
  q.setAttribute("aria-expanded", "true");
  indiceSugerido = -1;
  q.removeAttribute("aria-activedescendant");
}

function elegirSugerencia(id) {
  const perfume = porId(id);
  if (!perfume) return;
  clearTimeout(esperaBusqueda);
  q.value = perfume.corto;
  estado.q = q.value;
  buscador.classList.add("con-texto");
  busquedaCerrada = true;
  cerrarSugerencias();
  render();
  abrir(id);
}

q.addEventListener("input", () => {
  estado.q = q.value;
  buscador.classList.toggle("con-texto", !!q.value);
  busquedaCerrada = false;
  mostrarSugerencias();
  clearTimeout(esperaBusqueda);
  esperaBusqueda = setTimeout(render, 140);
});

q.addEventListener("focus", () => {
  busquedaCerrada = false;
  mostrarSugerencias();
});

q.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !sugerencias.hidden) {
    e.preventDefault();
    busquedaCerrada = true;
    cerrarSugerencias();
  } else if (
    (e.key === "ArrowDown" || e.key === "ArrowUp") &&
    !sugerencias.hidden
  ) {
    e.preventDefault();
    const cambio = e.key === "ArrowDown" ? 1 : -1;
    marcarSugerencia(
      (indiceSugerido + cambio + resultadosSugeridos.length) %
        resultadosSugeridos.length,
    );
  } else if (
    e.key === "Enter" &&
    !sugerencias.hidden &&
    resultadosSugeridos.length
  ) {
    e.preventDefault();
    elegirSugerencia(resultadosSugeridos[Math.max(0, indiceSugerido)].id);
  }
});

sugerencias.addEventListener("click", (e) => {
  const boton = e.target.closest("[data-sug-id]");
  if (boton) elegirSugerencia(boton.dataset.sugId);
});

/* Cierra al tocar fuera, pero no interfiere con el botón de borrar ni con la ficha. */
document.addEventListener("pointerdown", (e) => {
  if (!buscador.contains(e.target)) {
    busquedaCerrada = true;
    cerrarSugerencias();
  }
});

q.addEventListener("blur", () => {
  setTimeout(() => {
    if (!buscador.contains(document.activeElement)) cerrarSugerencias();
  }, 100);
});

$("#borrar").addEventListener("click", () => {
  q.value = "";
  q.dispatchEvent(new Event("input"));
  cerrarSugerencias();
  q.focus();
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "/" &&
    !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) &&
    !document.querySelector("dialog[open]")
  ) {
    e.preventDefault();
    q.focus();
  }
});

function limpiar() {
  coleccionActiva = null;
  Object.assign(estado, {
    q: "",
    genero: "Todos",
  });

  estado.marcas.clear();
  estado.estaciones.clear();
  estado.momentos.clear();
  estado.familiaAroma = null;

  document
    .querySelectorAll("#f-estacion input, #f-momento input")
    .forEach((i) => (i.checked = false));

  estado.minCuando = 50;
  rangoMin.value = 50;
  txtMin();

  sincronizarOrden();

  q.value = "";
  clearTimeout(esperaBusqueda);
  cerrarSugerencias();
  buscador.classList.remove("con-texto");

  document.querySelector('input[name="genero"][value="Todos"]').checked = true;

  render();
}

$("#limpiar").addEventListener("click", limpiar);

$("#v-grilla").addEventListener("click", () => cambiarVista(false));

$("#v-lista").addEventListener("click", () => cambiarVista(true));

function cambiarVista(lista) {
  estado.lista = lista;

  $("#v-grilla").setAttribute("aria-pressed", !lista);
  $("#v-lista").setAttribute("aria-pressed", lista);

  $("#grilla").classList.toggle("lista", lista);
}

/* Filtros en el celular: panel que sube desde abajo, sobre un velo oscuro */
const panel = $("#filtros"),
  velo = $("#velo"),
  btnFiltros = $("#abrir-filtros");

const filtrosAbiertos = () => panel.classList.contains("abierto");

function abrirFiltros() {
  panel.classList.add("abierto");
  velo.hidden = false;
  document.body.style.overflow = "hidden";
  btnFiltros.setAttribute("aria-expanded", "true");
  $("#cerrar-filtros").focus();
}

function cerrarFiltros() {
  if (!filtrosAbiertos()) return;

  panel.classList.remove("abierto");
  velo.hidden = true;
  document.body.style.overflow = "";
  btnFiltros.setAttribute("aria-expanded", "false");
  btnFiltros.focus();
}

btnFiltros.addEventListener("click", () =>
  filtrosAbiertos() ? cerrarFiltros() : abrirFiltros(),
);

$("#cerrar-filtros").addEventListener("click", cerrarFiltros);
velo.addEventListener("click", cerrarFiltros);

$("#ver-resultados").addEventListener("click", () => {
  cerrarFiltros();
  document.querySelector(".barra").scrollIntoView({ block: "start" });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarFiltros();
});

/* Cuánto rinde un perfume en lo que se eligió.
   Vale la opción MÁS FLOJA de todas las que se marcaron: así, el "relleno mínimo"
   se le exige a cada estación / momento elegido (con las 4 estaciones marcadas,
   quedan solo los perfumes que sirven en todas). */
const seleccion = () => [...estado.estaciones, ...estado.momentos];

function afinidad(p) {
  const sel = seleccion();

  if (!sel.length) return null;

  return Math.min(...sel.map((k) => porcentajeCuando(p, k)));
}

/* Promedio de lo elegido: sirve para desempatar el orden */
function promedioElegido(p) {
  const sel = seleccion();

  return sel.reduce((a, k) => a + porcentajeCuando(p, k), 0) / sel.length;
}

function filtrar() {
  const palabras = norm(estado.q).split(/\s+/).filter(Boolean);

  const r = PERFUMES.filter(
    (p) =>
      palabras.every((w) => p._texto.includes(w)) &&
      (!estado.marcas.size || estado.marcas.has(p.marca)) &&
      (!coleccionActiva ||
        (coleccionesIndex[coleccionActiva] || []).includes(p.id)) &&
      (estado.genero === "Todos" || p.genero === estado.genero) &&
      (!estado.familiaAroma ||
        puntajeFiltroAroma(p, estado.familiaAroma) >= 55) &&
      (afinidad(p) === null || afinidad(p) >= estado.minCuando),
  );

  if (estado.orden === "afinidad" && seleccion().length) {
    r.sort(
      (a, b) =>
        afinidad(b) - afinidad(a) || promedioElegido(b) - promedioElegido(a),
    );
  }

  if (estado.orden === "nombre") {
    r.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  } else if (estado.familiaAroma && estado.orden === "destacados") {
    // Primero los perfumes cuyo acorde coincide más con la familia elegida.
    r.sort(
      (a, b) =>
        puntajeFiltroAroma(b, estado.familiaAroma) -
        puntajeFiltroAroma(a, estado.familiaAroma),
    );
  }

  return r;
}

/* =====================================================================
   MI SELECCIÓN (mantiene la misma clave de almacenamiento del carrito anterior)
   ===================================================================== */

const cant = (id) => carrito[id] || 0;

const totalUnidades = () => Object.values(carrito).reduce((a, b) => a + b, 0);

function cambiar(id, delta) {
  const n = Math.min(20, Math.max(0, cant(id) + delta));

  n ? (carrito[id] = n) : delete carrito[id];

  guardar("djinn:carrito", JSON.stringify(carrito));

  if (delta > 0) {
    const b = $("#btn-carrito");

    b.classList.remove("salta");
    void b.offsetWidth;
    b.classList.add("salta");
  }

  actualizar();
}

/* Botón para sumar perfumes a la consulta, o selector de cantidad */
function accionHTML(p) {
  const n = cant(p.id);

  return n
    ? `<div class="stepper" role="group" aria-label="Cantidad de ${esc(p.nombre)}"><button data-menos aria-label="Quitar uno">−</button><span>${n}<span class="en-carrito"> en mi selección</span></span><button data-mas aria-label="Agregar uno">+</button></div>`
    : `<button class="btn-add" data-add aria-label="Agregar ${esc(p.nombre)} a mi selección">${BOLSA}<span class="largo">Agregar a mi selección</span><span class="corto">Seleccionar</span></button>`;
}

function manejarAccion(e, id) {
  if (e.target.closest("[data-add], [data-mas]")) {
    cambiar(id, 1);
    return true;
  }

  if (e.target.closest("[data-menos]")) {
    cambiar(id, -1);
    return true;
  }

  return false;
}

function mensajeConsulta() {
  const lineas = Object.entries(carrito)
    .map(([id, n]) => {
      const p = porId(id);
      return `• ${n} x ${p.nombre}`;
    })
    .join("\n");

  return `¡Hola ${MARCA}! ¿Me decís el precio de estas fragancias?\n\n${lineas}\n\n¡Gracias!`;
}

function renderCarrito() {
  const ids = Object.keys(carrito),
    vacio = ids.length === 0;

  $("#dr-pie").hidden = vacio;

  $("#dr-lista").innerHTML = vacio
    ? `<div class="vacio-c"><h3>Tu selección está vacía</h3><p>Explorá el catálogo y agregá los perfumes que quieras consultar. Te confirmamos precio y disponibilidad por WhatsApp.</p></div>`
    : ids
        .map((id) => {
          const p = porId(id),
            n = cant(id);

          return `<div class="fila-c" data-id="${id}">
        <span class="mini" style="--c:${p.color}">${imagen(p, 0)}</span>
        <div><b>${esc(p.nombre)}</b><small>${p.ml} ML</small>
          <div class="stepper" role="group" aria-label="Cantidad de ${esc(p.nombre)}"><button data-menos aria-label="Quitar uno">−</button><span>${n}</span><button data-mas aria-label="Agregar uno">+</button></div></div>
        <div class="der"><button class="quitar" data-quitar>Eliminar</button></div>
      </div>`;
        })
        .join("");

  if (!vacio) {
    const msg = mensajeConsulta();

    const a = $("#pedir");

    a.href = waLink(msg);
  }
}

$("#dr-lista").addEventListener("click", (e) => {
  const fila = e.target.closest(".fila-c");

  if (!fila) return;

  if (e.target.closest("[data-quitar]")) {
    delete carrito[fila.dataset.id];

    guardar("djinn:carrito", JSON.stringify(carrito));

    return actualizar();
  }

  manejarAccion(e, fila.dataset.id);
});

// Diálogo propio de Djinn: no usa el confirm() nativo del navegador.
const confirmarVaciado = $("#confirmar-vaciado");

$("#vaciar").addEventListener("click", () => confirmarVaciado.showModal());
$("#cancelar-vaciado").addEventListener("click", () =>
  confirmarVaciado.close(),
);

$("#aceptar-vaciado").addEventListener("click", () => {
  carrito = {};
  guardar("djinn:carrito", "{}");
  confirmarVaciado.close();
  actualizar();
});

// Cerrar tocando el fondo oscuro; Escape también funciona automáticamente.
confirmarVaciado.addEventListener("click", (e) => {
  if (e.target === confirmarVaciado) confirmarVaciado.close();
});

/* Actualiza todo lo que depende del carrito sin redibujar las fotos */
function actualizar() {
  document.querySelectorAll(".card").forEach((c) => {
    c.querySelector(".accion").innerHTML = accionHTML(porId(c.dataset.id));
  });

  const n = totalUnidades();

  $("#n-carrito").textContent = n;
  $("#n-carrito").dataset.n = n;

  renderCarrito();

  if (actual && $("#ficha").open) {
    $("#f-accion").innerHTML = accionHTML(actual);
  }
}

const drawer = $("#carrito");

$("#btn-carrito").addEventListener("click", () => {
  renderCarrito();

  drawer.showModal();

  document.body.style.overflow = "hidden";
});

$("#cerrar-carrito").addEventListener("click", () => drawer.close());

drawer.addEventListener("close", () => (document.body.style.overflow = ""));

drawer.addEventListener("click", (e) => {
  if (e.target === drawer) drawer.close();
});

/* =====================================================================
   TARJETAS
   ===================================================================== */

/* Mini barras de rellenado para lo que se está filtrando */
function afinHTML(p) {
  const sel = seleccion();

  if (!sel.length) return "";

  return `<span class="afin">${sel
    .map((k) => {
      const porcentaje = porcentajeCuando(p, k);

      return `<span class="afin-i" style="--w:${porcentaje}%;--col:${COLOR_CUANDO[k]}" title="${k}: ${(p._cuando[k] || 0).toLocaleString("es-UY")} votos">${ICONOS[k]}<i></i><em>${porcentaje}%</em></span>`;
    })
    .join("")}</span>`;
}

/* "Armaf | Hombre" */
const tipoInterno = (p) =>
  `${p.marca ? `<b>${esc(p.marca)}</b>` : ""}<span>${esc(p.genero)}</span>`;

const tipoHTML = (p) => `<span class="tipo">${tipoInterno(p)}</span>`;

function tarjeta(p, posicion = 99) {
  return `<article class="card" data-id="${p.id}">
    <button class="media" data-abrir style="--c:${p.color}" aria-label="Ver ${esc(p.nombre)}">
      ${imagen(p, 0, false, posicion < 4)}
      ${p.etiqueta ? `<span class="etiqueta">${esc(p.etiqueta)}</span>` : ""}
      <span class="vista-rapida">Ver detalle</span>
    </button>
    <button class="info" data-abrir>
      ${tipoHTML(p)}
      <h3>${esc(p.corto)}</h3>
      <span class="fila"><span class="ml">${p.ml} ML</span></span>
      ${afinHTML(p)}
    </button>
    <div class="accion">${accionHTML(p)}</div>
    <button type="button" class="card-comparar" data-comparar aria-pressed="${comparando.includes(p.id)}">⚖ ${comparando.includes(p.id) ? "Seleccionado para comparar" : "Comparar"}</button>
  </article>`;
}

function render() {
  const hay = seleccion().length > 0;

  $("#bloque-cuando-min").hidden = !hay;

  $('#orden [value="afinidad"]').disabled = !hay;

  visibles = filtrar();

  $("#grilla").innerHTML = visibles.length
    ? visibles.map((p, i) => tarjeta(p, i)).join("")
    : `
    <div class="vacio"><h3>No encontramos resultados</h3><p>${hay ? "Probá bajando el relleno mínimo o quitando alguna opción." : "Probá con otra palabra o quitá algún filtro."}</p>
    <button id="vacio-limpiar">Limpiar filtros</button></div>`;

  pintarMarcas();
  pintarColeccionActiva();
  pintarFiltroAroma();

  $("#cuenta").innerHTML =
    `<b>${visibles.length}</b> de ${PERFUMES.length} fragancias`;

  $("#limpiar").hidden = !(
    estado.q ||
    estado.marcas.size ||
    estado.genero !== "Todos" ||
    estado.estaciones.size ||
    estado.momentos.size ||
    estado.familiaAroma ||
    coleccionActiva
  );

  /* Cantidad de filtros activos (en el botón "Filtros") y texto del botón del panel */
  const nf =
    estado.marcas.size +
    (estado.genero !== "Todos" ? 1 : 0) +
    estado.estaciones.size +
    estado.momentos.size +
    (estado.familiaAroma ? 1 : 0);

  pintarFiltrosPremium(nf);

  $("#n-filtros").textContent = nf;
  $("#n-filtros").dataset.n = nf;
  btnFiltros.classList.toggle("activo", nf > 0);

  $("#ver-resultados").textContent = visibles.length
    ? `Ver ${visibles.length} ${visibles.length === 1 ? "fragancia" : "fragancias"}`
    : "Sin resultados";
}

/* Al pasar de celular a pantalla grande, se cierra el panel de filtros */
movil.addEventListener("change", (e) => {
  if (!e.matches) cerrarFiltros();
});

$("#grilla").addEventListener("click", (e) => {
  if (e.target.closest("#vacio-limpiar")) {
    return limpiar();
  }

  const card = e.target.closest(".card");

  if (!card) return;

  if (e.target.closest("[data-comparar]")) {
    alternarComparacion(card.dataset.id);
    return;
  }

  if (manejarAccion(e, card.dataset.id)) {
    return;
  }

  if (e.target.closest("[data-abrir]")) {
    abrir(card.dataset.id);
  }
});

/* =====================================================================
   FICHA (con fotos, acordes en barras y notas)
   ===================================================================== */

const dlg = $("#ficha");

const luz = (hex) => {
  const n = parseInt(hex.slice(1), 16);

  return (
    (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
  );
};

function barras(p) {
  const ordenados = [...p.acordes].sort((a, b) => b[1] - a[1]);

  $("#f-acordes").classList.remove("ver");

  $("#f-acordes").innerHTML = ordenados
    .map(([nombre, v], k) => {
      const col = COLOR_ACORDE[nombre] || "#9aa8a4";

      const w = Math.max(32, Math.min(100, v));

      return `<div class="ac"><i style="--col:${col};--w:${w}%;--k:${k}"></i><span style="--w:${w}%;--tx:${luz(col) > 0.58 ? "#15201b" : "#fff"}">${esc(nombre)}</span></div>`;
    })
    .join("");

  /* la barra crece cuando se abre el perfume */
  requestAnimationFrame(() =>
    requestAnimationFrame(() => $("#f-acordes").classList.add("ver")),
  );
}

/* =====================================================================
   FRAGANCIAS PARECIDAS
   Se comparan los acordes (peso 80%) y las estaciones / momentos en que
   rinde cada perfume (20%). Un mismo perfume en otro tamaño no cuenta.
   ===================================================================== */

const sinTamano = (s) =>
  norm(s)
    .replace(/\d+\s*ml/g, "")
    .replace(/\s+/g, " ")
    .trim();

function coseno(a, b) {
  let punto = 0,
    na = 0,
    nb = 0;

  for (const k in a) {
    na += a[k] * a[k];

    if (k in b) punto += a[k] * b[k];
  }

  for (const k in b) nb += b[k] * b[k];

  return na && nb ? punto / Math.sqrt(na * nb) : 0;
}

function vectores(p) {
  if (!p._v) {
    p._v = {
      acordes: Object.fromEntries(p.acordes.map(([n, v]) => [n, v / 100])),
      cuando: Object.fromEntries(
        CUANDO.map((k) => [k, porcentajeCuando(p, k) / 100]),
      ),
    };
  }

  return p._v;
}

function similitud(p, q) {
  const a = vectores(p),
    b = vectores(q),
    ac = coseno(a.acordes, b.acordes),
    cu = coseno(a.cuando, b.cuando);

  /* si a alguno le faltan los votos de estación / momento, se usan solo los acordes */
  const base = cu ? ac * 0.8 + cu * 0.2 : ac;

  /* mismo género suma; Mujer con Hombre resta (Unisex va bien con todos) */
  const cruzado =
    (p.genero === "Mujer" && q.genero === "Hombre") ||
    (p.genero === "Hombre" && q.genero === "Mujer");

  return base + (p.genero === q.genero ? 0.03 : 0) - (cruzado ? 0.2 : 0);
}

function parecidos(p, n = 4) {
  const propio = sinTamano(p.corto);

  return PERFUMES.filter((q) => q.id !== p.id && sinTamano(q.corto) !== propio)
    .map((q) => ({ q, s: similitud(p, q) }))
    .sort((x, y) => y.s - x.s)
    .slice(0, n)
    .map((x) => x.q);
}

/* Los acordes más fuertes que comparten los dos perfumes */
function enComun(p, q) {
  const fuerza = new Map(q.acordes);

  return p.acordes
    .filter(([n]) => fuerza.has(n))
    .sort((x, y) => y[1] + fuerza.get(y[0]) - (x[1] + fuerza.get(x[0])))
    .slice(0, 3)
    .map(([n]) => n.toLowerCase());
}

function renderParecidos(p) {
  $("#f-parecidos").innerHTML = parecidos(p)
    .map((q) => {
      const c = enComun(p, q);

      return `<button type="button" class="par" data-id="${q.id}"><span class="par-img" style="--c:${q.color}">${imagen(q, 0)}</span><span class="par-txt"><span class="par-marca">${esc(q.marca)}</span><span class="par-nombre">${esc(q.corto)}</span>${c.length ? `<span class="par-comp">Comparten ${esc(c.join(", "))}</span>` : ""}</span></button>`;
    })
    .join("");
}

$("#f-parecidos").addEventListener("click", (e) => {
  const b = e.target.closest(".par");

  if (!b) return;

  abrir(b.dataset.id);

  /* el botón que se tocó ya no existe: el foco pasa al título de la ficha nueva */
  const t = $("#f-nombre");

  t.tabIndex = -1;
  t.focus({ preventScroll: true });
});

/* =====================================================================
   ENLACES COMPARTIBLES: cada ficha usa el ID que ya tiene PERFUMES.
   Ejemplo: https://djinnfragancias.com/#perfume=khamrah-base
   No hay archivos HTML adicionales ni configuración manual por producto.
   ===================================================================== */
const PREFIJO_PERFUME = "perfume=";

function idDeLaUrl() {
  const fragmento = window.location.hash.slice(1);
  if (!fragmento.startsWith(PREFIJO_PERFUME)) return null;
  try {
    return decodeURIComponent(fragmento.slice(PREFIJO_PERFUME.length));
  } catch (_) {
    return null;
  }
}

function urlDePerfume(id) {
  const url = new URL(window.location.href);
  url.hash = PREFIJO_PERFUME + encodeURIComponent(id);
  return url.href;
}

function actualizarUrlDePerfume(id) {
  if (idDeLaUrl() !== id) {
    // Permite que el botón «Atrás» vuelva a la ficha anterior o al catálogo.
    window.history.pushState({ djinnPerfume: id }, "", urlDePerfume(id));
  }
}

function sincronizarFichaConUrl() {
  const id = idDeLaUrl();
  const p = id ? porId(id) : null;
  if (p) {
    if (!dlg.open || actual?.id !== id) abrir(id, true);
  } else if (dlg.open) {
    dlg.close();
  }
}

window.addEventListener("popstate", sincronizarFichaConUrl);
window.addEventListener("hashchange", sincronizarFichaConUrl);

async function copiarEnlaceActual() {
  if (!actual) return;
  const enlace = urlDePerfume(actual.id);
  if (await copiar(enlace)) {
    $("#f-enlace-manual").hidden = true;
    aviso("¡Enlace copiado! Ya podés compartir esta fragancia.");
  } else {
    const campo = $("#f-enlace-manual");
    campo.value = enlace;
    campo.hidden = false;
    campo.focus();
    campo.select();
    aviso("Seleccioná el enlace y copialo manualmente.");
  }
}

$("#f-copiar-link").addEventListener("click", copiarEnlaceActual);
$("#f-compartir-link").hidden = typeof navigator.share !== "function";
$("#f-compartir-link").addEventListener("click", async () => {
  if (!actual) return;
  const datos = {
    title: `${actual.corto} | Djinn Fragancias`,
    text: `Mirá ${actual.corto} en Djinn Fragancias`,
    url: urlDePerfume(actual.id),
  };
  try {
    if (typeof navigator.share !== "function") return copiarEnlaceActual();
    await navigator.share(datos);
  } catch (error) {
    if (error?.name !== "AbortError") await copiarEnlaceActual();
  }
});

function abrir(id, desdeEnlace = false) {
  const p = porId(id);

  if (!p) return;

  actual = p;
  fotoActual = 0;
  if (!desdeEnlace) actualizarUrlDePerfume(p.id);
  $("#f-enlace-manual").hidden = true;

  $("#f-tipo").innerHTML = tipoInterno(p);

  $("#f-nombre").textContent = p.corto;

  $("#f-formato").textContent = `Eau de parfum · ${p.ml} ml`;

  $("#f-desc").textContent = p.desc;

  // Consulta sencilla: solamente el nombre del perfume y su precio.
  $("#f-wa").href = waLink(
    `¡Hola ${MARCA}! ¿Me decís el precio de ${p.nombre}? ¡Gracias!`,
  );

  $("#f-accion").innerHTML = accionHTML(p);
  $("#f-comparar").setAttribute("aria-pressed", comparando.includes(p.id));
  $("#f-comparar").textContent = comparando.includes(p.id)
    ? "✓ En comparación"
    : "⚖ Comparar";

  $("#f-mini").innerHTML = TIPOS_FOTO.map(
    (t, i) =>
      `<button data-i="${i}" aria-label="Ver foto de ${t.toLowerCase()}" aria-current="${i === 0}"><span class="th" style="--c:${p.color}">${imagen(p, i, true)}</span>${t}</button>`,
  ).join("");

  mostrarFoto(0);

  barras(p);

  $("#f-cuando").innerHTML = CUANDO.map((k) => {
    const porcentaje = porcentajeCuando(p, k);

    const votos = p._cuando[k] || 0;

    return `<div class="cu" style="--col:${COLOR_CUANDO[k]};--w:${porcentaje}%" title="${votos.toLocaleString("es-UY")} votos"><span class="cu-ico">${ICONOS[k]}</span><span class="cu-nom">${k}</span><i></i><b>${porcentaje}%</b></div>`;
  }).join("");

  renderParecidos(p);

  if (!dlg.open) {
    dlg.showModal();

    document.body.style.overflow = "hidden";
  }

  dlg.scrollTop = 0;
}

function mostrarFoto(i) {
  fotoActual = i;

  $("#f-principal").style.setProperty("--c", actual.color);

  $("#f-principal").innerHTML = imagen(actual, i);

  document
    .querySelectorAll("#f-mini button")
    .forEach((b, k) => b.setAttribute("aria-current", k === i));
}

function vecino(paso) {
  const lista = visibles.length ? visibles : PERFUMES;

  const i = lista.findIndex((p) => p.id === actual.id);

  abrir(lista[(i + paso + lista.length) % lista.length].id);
}

$("#f-mini").addEventListener("click", (e) => {
  const b = e.target.closest("button");

  if (b) {
    mostrarFoto(+b.dataset.i);
  }
});

$("#f-accion").addEventListener("click", (e) => manejarAccion(e, actual.id));

$("#f-prev").addEventListener("click", () => vecino(-1));

$("#f-next").addEventListener("click", () => vecino(1));

$("#cerrar").addEventListener("click", () => dlg.close());

dlg.addEventListener("close", () => {
  document.body.style.overflow = "";
  // Al cerrar por botón, Escape o fondo, limpiamos la URL sin recargar.
  // Si el usuario pulsó «Atrás», el fragmento ya cambió y no se modifica.
  if (idDeLaUrl()) {
    const url = new URL(window.location.href);
    url.hash = "";
    window.history.replaceState(window.history.state, "", url.href);
  }
});

dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});

dlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") vecino(-1);

  if (e.key === "ArrowRight") vecino(1);
});

/* =====================================================================
   DESCUBRIMIENTO DJINN: RECOMENDADOR, COLECCIONES, COMPARADOR
   No usa precios ni inventario. Los resultados se basan en acordes y votos
   de estaciones / momento del día: son orientativos, no promesas.
   ===================================================================== */

/* Familias resumidas a partir de los acordes reales del catálogo. */
const FAMILIAS_DJINN = {
  dulce: {
    Dulce: 1,
    Avainillado: 0.98,
    Caramelo: 0.96,
    Chocolate: 0.94,
    Cacao: 0.9,
    Amielado: 0.9,
    Almendrado: 0.74,
    Lactónico: 0.7,
    Coco: 0.57,
    Café: 0.48,
  },
  fresco: {
    Fresco: 1,
    Cítrico: 1,
    Acuático: 0.94,
    Marino: 0.92,
    Ozónico: 0.85,
    Verde: 0.75,
    "Fresco especiado": 0.68,
    Aromático: 0.62,
    Jabonoso: 0.7,
  },
  maderas: {
    Amaderado: 1,
    Oud: 1,
    Pachulí: 0.83,
    Cuero: 0.79,
    Musgoso: 0.75,
    Terroso: 0.7,
    Terrosos: 0.7,
    Conífero: 0.7,
    Boscoso: 0.8,
  },
  floral: {
    "Floral blanco": 1,
    Floral: 1,
    Florales: 1,
    "Floral amarillo": 1,
    Rosas: 0.98,
    Nardos: 0.94,
    Iris: 0.89,
    Violeta: 0.82,
    Lavanda: 0.66,
  },
  especias: {
    "Cálido especiado": 1,
    Ámbar: 0.9,
    Canela: 1,
    "Especiado suave": 0.87,
    "Fresco especiado": 0.64,
    Balsámico: 0.77,
    Tabaco: 0.77,
    Ahumado: 0.7,
    Anís: 0.72,
  },
  frutal: {
    Afrutados: 1,
    Afrutado: 1,
    Tropical: 1,
    Coco: 0.72,
    Cereza: 0.94,
    Acerezado: 0.9,
    Pera: 0.89,
    Cítrico: 0.54,
  },
};

/* Ocho familias simples para explorar el catálogo. El Genio y las colecciones
   siguen utilizando su propia clasificación; este filtro es independiente.
   Los nombres de acordes salen de los perfumes, no de botones agregados a mano. */
const GRUPOS_AROMA_FILTRO = [
  { id: "dulce", nombre: "Dulces", simbolo: "🍦", mapa: FAMILIAS_DJINN.dulce },
  {
    id: "fresco",
    nombre: "Frescos",
    simbolo: "🌊",
    mapa: {
      Fresco: 1,
      Acuático: 1,
      Marino: 1,
      Ozónico: 0.95,
      Verde: 0.8,
      Jabonoso: 0.83,
      Aromático: 0.68,
      Herbal: 0.74,
      "Fresco especiado": 0.66,
      Cítrico: 0.32,
    },
  },
  {
    id: "citrico",
    nombre: "Cítricos",
    simbolo: "🍋",
    mapa: { Cítrico: 1, Fresco: 0.28, Agrio: 0.72, Aromático: 0.21 },
  },
  {
    id: "maderas",
    nombre: "Amaderados",
    simbolo: "🌲",
    mapa: FAMILIAS_DJINN.maderas,
  },
  {
    id: "floral",
    nombre: "Florales",
    simbolo: "🌸",
    mapa: FAMILIAS_DJINN.floral,
  },
  {
    id: "especiado",
    nombre: "Especiados",
    simbolo: "🌶️",
    mapa: {
      "Cálido especiado": 1,
      "Fresco especiado": 0.9,
      Canela: 1,
      "Especiado suave": 0.95,
      Especia: 1,
      Anís: 0.75,
      Balsámico: 0.53,
      Ahumado: 0.34,
    },
  },
  {
    id: "frutal",
    nombre: "Afrutados",
    simbolo: "🍑",
    mapa: FAMILIAS_DJINN.frutal,
  },
  {
    id: "ambar",
    nombre: "Ambarados",
    simbolo: "✨",
    mapa: {
      Ámbar: 1,
      Balsámico: 0.8,
      Oud: 0.55,
      "Cálido especiado": 0.42,
      Avainillado: 0.34,
      Amaderado: 0.28,
    },
  },
];
const GRUPOS_AROMA_INDEX = Object.fromEntries(
  GRUPOS_AROMA_FILTRO.map((g) => [g.id, g]),
);
function puntajeFiltroAroma(p, id) {
  const grupo = GRUPOS_AROMA_INDEX[id];
  if (!grupo) return 0;
  const coincidencias = p.acordes
    .map(([nombre, fuerza]) => (grupo.mapa[nombre] || 0) * fuerza)
    .filter((v) => v > 0)
    .sort((a, b) => b - a);
  if (!coincidencias.length) return 0;
  return Math.min(
    100,
    coincidencias[0] * 0.78 +
      (coincidencias[1] || 0) * 0.18 +
      (coincidencias[2] || 0) * 0.09,
  );
}
function pintarFiltroAroma() {
  $("#f-aromas")
    .querySelectorAll("[data-aroma]")
    .forEach((b) => {
      b.setAttribute(
        "aria-pressed",
        String(estado.familiaAroma === b.dataset.aroma),
      );
    });
  $("#aromas-limpiar").hidden = !estado.familiaAroma;
  $("#aromas-ver-resultados").hidden = !estado.familiaAroma;
  const elegida = GRUPOS_AROMA_INDEX[estado.familiaAroma];
  $("#aromas-estado").textContent = elegida
    ? `${visibles.length} ${visibles.length === 1 ? "fragancia" : "fragancias"} con perfil ${elegida.nombre.toLowerCase()} según sus acordes. Para ver todas, tocá de nuevo el aroma.`
    : "Elegí una familia aromática para explorar sus fragancias.";
}
$("#f-aromas").innerHTML = GRUPOS_AROMA_FILTRO.map(
  (g) =>
    `<button type="button" class="aroma-chip" data-aroma="${g.id}" aria-pressed="false"><span aria-hidden="true">${g.simbolo}</span>${g.nombre}</button>`,
).join("");
$("#f-aromas").addEventListener("click", (e) => {
  const b = e.target.closest("[data-aroma]");
  if (!b) return;
  // Elegir un aroma permite salir de una colección sin borrar otros filtros.
  coleccionActiva = null;
  estado.familiaAroma =
    estado.familiaAroma === b.dataset.aroma ? null : b.dataset.aroma;
  render();
});
$("#aromas-limpiar").addEventListener("click", () => {
  estado.familiaAroma = null;
  render();
});
$("#aromas-ver-resultados").addEventListener("click", () =>
  $("#resultados-catalogo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  }),
);
$("#como-abrir-seleccion").addEventListener("click", () =>
  $("#btn-carrito").click(),
);

/* Puntaje 0..100: acorde principal y aportes de los siguientes. */
function puntajeFamilia(p, familia) {
  const pesos = FAMILIAS_DJINN[familia] || {};
  const matches = p.acordes
    .map(([nombre, fuerza]) => (pesos[nombre] || 0) * fuerza)
    .filter((v) => v > 0)
    .sort((a, b) => b - a);
  if (!matches.length) return 0;
  return Math.min(
    100,
    matches[0] * 0.78 + (matches[1] || 0) * 0.18 + (matches[2] || 0) * 0.09,
  );
}
function usoGenio(p, momento) {
  if (momento === "Ambos")
    return (porcentajeCuando(p, "Día") + porcentajeCuando(p, "Noche")) / 2;
  return porcentajeCuando(p, momento);
}
function estacionGenio(p, estacion) {
  if (estacion === "Todas")
    return (
      ESTACIONES.reduce((s, v) => s + porcentajeCuando(p, v), 0) /
      ESTACIONES.length
    );
  return porcentajeCuando(p, estacion);
}
function puntuacionGenio(p, o) {
  return (
    puntajeFamilia(p, o.aroma) * 0.62 +
    usoGenio(p, o.momento) * 0.22 +
    estacionGenio(p, o.estacion) * 0.16
  );
}

function generoGenio(p, g) {
  return g === "Todos" || p.genero === g;
}

function diferentesFrascos(lista, limite) {
  const unicos = new Set();
  return lista
    .filter((p) => {
      const base = sinTamano(p.corto);
      if (unicos.has(base)) return false;
      unicos.add(base);
      return true;
    })
    .slice(0, limite);
}
function acordesDeFamilia(p, familia) {
  const mapa = FAMILIAS_DJINN[familia];
  return p.acordes
    .filter(([nombre]) => nombre in mapa)
    .sort((a, b) => b[1] * mapa[b[0]] - a[1] * mapa[a[0]])
    .slice(0, 2)
    .map(([nombre]) => nombre.toLowerCase());
}
const genioDialog = $("#genio-dialog");
const compararDialog = $("#comparar-dialog");
function mostrarDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = "hidden";
}
function cerrarDialog(dialog) {
  if (dialog.open) dialog.close();
}
function restaurarScrollDialogs() {
  if (![genioDialog, compararDialog, dlg, drawer].some((d) => d.open))
    document.body.style.overflow = "";
}
[genioDialog, compararDialog].forEach((d) => {
  d.addEventListener("close", restaurarScrollDialogs);
  d.addEventListener("click", (e) => {
    if (e.target === d) d.close();
  });
});
$("#abrir-genio").addEventListener("click", () => mostrarDialog(genioDialog));
genioDialog
  .querySelector("[data-cerrar-genio]")
  .addEventListener("click", () => cerrarDialog(genioDialog));
$("#genio-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(e.currentTarget));
  const lista = diferentesFrascos(
    PERFUMES.filter(
      (p) =>
        generoGenio(p, datos.genero) && puntajeFamilia(p, datos.aroma) > 10,
    ).sort((a, b) => puntuacionGenio(b, datos) - puntuacionGenio(a, datos)),
    5,
  );
  const salida = $("#genio-resultados");
  salida.hidden = false;
  salida.innerHTML = `<div class="genio-res-cab"><div><span class="colecciones-eyebrow">TU SELECCIÓN PERSONALIZADA</span><h3>El Genio eligió estas fragancias</h3></div><button type="button" class="genio-rehacer" id="genio-rehacer">Cambiar respuestas</button></div>
    <p class="genio-aviso">Sugerencias orientativas según los acordes y votos de uso de cada fragancia, no garantías de rendimiento ni disponibilidad.</p>
    ${
      lista.length
        ? `<div class="genio-lista">${lista
            .map((p, i) => {
              const comunes = acordesDeFamilia(p, datos.aroma);
              const texto = comunes.length
                ? `Sus acordes ${comunes.join(" y ")} encajan con tu gusto.`
                : "Su perfil aromático encaja con tus preferencias.";
              return `<article class="genio-resultado"><span class="genio-orden">${i + 1}</span><span class="genio-foto" style="--c:${p.color}">${imagen(p, 0, true)}</span><div class="genio-detalle"><span class="genio-marca">${esc(p.marca)} · ${esc(p.genero)}</span><h4>${esc(p.corto)}</h4><p>${esc(texto)} ${esc(datos.momento === "Ambos" ? "Para uso versátil." : `Pensado para ${datos.momento.toLowerCase()}.`)}</p><button type="button" data-genio-ver="${esc(p.id)}">Ver fragancia →</button></div></article>`;
            })
            .join("")}</div>`
        : "<p>No encontramos coincidencias claras. Probá con otra familia aromática.</p>"
    }`;
  salida.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
$("#genio-resultados").addEventListener("click", (e) => {
  if (e.target.closest("#genio-rehacer")) {
    $("#genio-resultados").hidden = true;
    $("#genio-form").scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  const b = e.target.closest("[data-genio-ver]");
  if (b) {
    cerrarDialog(genioDialog);
    abrir(b.dataset.genioVer);
  }
});

/* Colecciones definidas una sola vez. Los artículos de cada una se calculan
   automáticamente a partir de PERFUMES, incluso cuando se agreguen más. */
const COLECCIONES_DJINN = [
  {
    id: "dulces-noche",
    nombre: "Dulces para la noche",
    intro: "Vainilla, caramelo y acordes cálidos.",
    icono: "✦",
    familia: "dulce",
    momento: "Noche",
    estacion: "Invierno",
    fondo: "#f5e9dc",
    tinta: "#6a412b",
  },
  {
    id: "verano-fresco",
    nombre: "Frescura de verano",
    intro: "Cítricos, acuáticos y aire fresco.",
    icono: "☀",
    familia: "fresco",
    momento: "Día",
    estacion: "Verano",
    fondo: "#e1f0e8",
    tinta: "#286456",
  },
  {
    id: "maderas",
    nombre: "Maderas con carácter",
    intro: "Aromas amaderados y envolventes.",
    icono: "♧",
    familia: "maderas",
    momento: "Noche",
    estacion: "Otoño",
    fondo: "#e6dfd5",
    tinta: "#5c493c",
  },
  {
    id: "flores",
    nombre: "Jardín floral",
    intro: "Rosas, flores blancas y delicadeza.",
    icono: "❀",
    familia: "floral",
    momento: "Día",
    estacion: "Primavera",
    fondo: "#f5e4e8",
    tinta: "#91536d",
  },
  {
    id: "ambar",
    nombre: "Ámbar y especias",
    intro: "Fragancias especiadas con presencia.",
    icono: "✧",
    familia: "especias",
    momento: "Noche",
    estacion: "Invierno",
    fondo: "#f1e4cf",
    tinta: "#805521",
  },
  {
    id: "tropical",
    nombre: "Escapada tropical",
    intro: "Frutas jugosas y toques exóticos.",
    icono: "☼",
    familia: "frutal",
    momento: "Día",
    estacion: "Verano",
    fondo: "#f4ebd6",
    tinta: "#9a7026",
  },
  {
    id: "citricos",
    nombre: "Energía para el día",
    intro: "Perfiles luminosos y vibrantes.",
    icono: "✳",
    familia: "fresco",
    momento: "Día",
    estacion: "Primavera",
    fondo: "#eaf0d8",
    tinta: "#5d7131",
  },
  {
    id: "otoño",
    nombre: "Abrigo de otoño",
    intro: "Dulces y cálidos para días frescos.",
    icono: "❧",
    familia: "dulce",
    momento: "Día",
    estacion: "Otoño",
    fondo: "#f0e6df",
    tinta: "#8c573b",
  },
];
const coleccionesIndex = {};
let coleccionActiva = null;
function prepararColecciones() {
  for (const col of COLECCIONES_DJINN) {
    const ranked = PERFUMES.filter(
      (p) => puntajeFamilia(p, col.familia) >= 36,
    ).sort(
      (a, b) =>
        puntuacionGenio(b, {
          aroma: col.familia,
          momento: col.momento,
          estacion: col.estacion,
        }) -
        puntuacionGenio(a, {
          aroma: col.familia,
          momento: col.momento,
          estacion: col.estacion,
        }),
    );
    coleccionesIndex[col.id] = diferentesFrascos(ranked, 18).map((p) => p.id);
  }
  $("#colecciones-grilla").innerHTML = COLECCIONES_DJINN.map((col) => {
    const ids = coleccionesIndex[col.id];
    const fotos = ids
      .slice(0, 3)
      .map((id) => {
        const p = porId(id);
        return `<span class="coleccion-mini" style="--c:${p.color}">${imagen(p, 0, true)}</span>`;
      })
      .join("");
    return `<button type="button" class="coleccion-tile" data-coleccion="${col.id}" aria-pressed="false" style="--col-fondo:${col.fondo};--col-tinta:${col.tinta}"><span class="coleccion-icono" aria-hidden="true">${col.icono}</span><span class="coleccion-fotos" aria-hidden="true">${fotos}</span><span class="coleccion-txt"><strong>${esc(col.nombre)}</strong><span>${esc(col.intro)}</span><small>${fraganciasTxt(ids.length)} para explorar <span aria-hidden="true">→</span></small></span></button>`;
  }).join("");
}
function pintarColeccionActiva() {
  const col = COLECCIONES_DJINN.find((c) => c.id === coleccionActiva);
  $("#coleccion-activa").hidden = !col;
  if (col) $("#coleccion-activa-txt").textContent = `Colección: ${col.nombre}`;
  document
    .querySelectorAll(".coleccion-tile")
    .forEach((b) =>
      b.setAttribute(
        "aria-pressed",
        String(b.dataset.coleccion === coleccionActiva),
      ),
    );
}
$("#colecciones-grilla").addEventListener("click", (e) => {
  const b = e.target.closest("[data-coleccion]");
  if (!b) return;
  const id = b.dataset.coleccion;
  limpiar();
  coleccionActiva = id;
  render();
  $("#resultados-catalogo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
$("#salir-coleccion").addEventListener("click", () => {
  coleccionActiva = null;
  render();
});

/* Comparador de exactamente dos perfumes, no se confunde con Mi selección. */
let comparando = [];
function alternarComparacion(id) {
  if (comparando.includes(id)) comparando = comparando.filter((x) => x !== id);
  else if (
    comparando.length &&
    sinTamano(porId(comparando[0]).corto) === sinTamano(porId(id).corto)
  ) {
    aviso(
      "Es la misma fragancia en otro tamaño. Elegí un perfume distinto para comparar.",
    );
    return;
  } else if (comparando.length < 2) comparando.push(id);
  else {
    aviso("Ya elegiste dos fragancias. Quitá una para cambiarla.");
    return;
  }
  pintarComparador();
}
function pintarComparador() {
  document.querySelectorAll("[data-comparar]").forEach((b) => {
    const id = b.closest(".card")?.dataset.id;
    b.setAttribute("aria-pressed", String(comparando.includes(id)));
    b.textContent = comparando.includes(id) ? "✓ Seleccionado" : "⚖ Comparar";
  });
  if (actual && dlg.open) {
    $("#f-comparar").setAttribute(
      "aria-pressed",
      String(comparando.includes(actual.id)),
    );
    $("#f-comparar").textContent = comparando.includes(actual.id)
      ? "✓ En comparación"
      : "⚖ Comparar";
  }
  const bandeja = $("#comparar-bandeja");
  bandeja.hidden = !comparando.length;
  document.body.classList.toggle("comparando-activo", !!comparando.length);
  if (!comparando.length) return;
  bandeja.innerHTML = `<div class="comparar-bandeja-txt"><strong>⚖ Comparar fragancias</strong><span>${comparando.length} de 2 seleccionadas</span></div>
    <div class="comparar-elegidos">${comparando
      .map((id) => {
        const p = porId(id);
        return `<span>${esc(p.corto)} <button type="button" data-quitar-comparar="${esc(id)}" aria-label="Quitar ${esc(p.corto)}">×</button></span>`;
      })
      .join("")}</div>
    <button type="button" class="comparar-ahora" id="comparar-ahora" ${comparando.length < 2 ? "disabled" : ""}>${comparando.length < 2 ? "Elegí otra fragancia" : "Comparar ahora →"}</button>`;
}
$("#comparar-bandeja").addEventListener("click", (e) => {
  const quitar = e.target.closest("[data-quitar-comparar]");
  if (quitar) {
    alternarComparacion(quitar.dataset.quitarComparar);
    return;
  }
  if (e.target.closest("#comparar-ahora") && comparando.length === 2)
    mostrarComparacion();
});
$("#f-comparar").addEventListener("click", () =>
  alternarComparacion(actual.id),
);
$("#abrir-comparador").addEventListener("click", () => {
  if (comparando.length === 2) mostrarComparacion();
  else {
    aviso("Elegí dos fragancias con el botón «Comparar» de cada tarjeta.");
    $("#resultados-catalogo").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
compararDialog
  .querySelector("[data-cerrar-comparar]")
  .addEventListener("click", () => cerrarDialog(compararDialog));
function barraComparativa(v, color) {
  return `<span class="comp-barra"><i style="width:${Math.max(0, Math.min(100, v))}%;background:${color}"></i></span>`;
}
function mostrarComparacion() {
  if (comparando.length !== 2) return;
  const [a, b] = comparando.map(porId);
  const comun = enComun(a, b);
  $("#comparar-cuerpo").innerHTML =
    `<p class="experiencia-sub">Comparación basada en acordes principales y preferencias de uso. No representa duración, precio ni disponibilidad.</p>
    <div class="comparacion-grid">${[a, b]
      .map(
        (
          p,
        ) => `<article class="comparacion-item"><span class="comp-foto" style="--c:${p.color}">${imagen(p, 0, true)}</span><span class="genio-marca">${esc(p.marca)} · ${esc(p.genero)}</span><h3>${esc(p.corto)}</h3><p class="comp-formato">${p.ml} ml</p>
    <h4>Acordes principales</h4>${[...p.acordes]
      .sort((x, y) => y[1] - x[1])
      .slice(0, 5)
      .map(
        ([nombre, v]) =>
          `<div class="comp-dato"><span>${esc(nombre)}</span>${barraComparativa(v, COLOR_ACORDE[nombre] || "#809b91")}</div>`,
      )
      .join("")}
    <h4>Cuándo usarlo</h4>${CUANDO.map((k) => `<div class="comp-dato"><span>${k} <small>${porcentajeCuando(p, k)}%</small></span>${barraComparativa(porcentajeCuando(p, k), COLOR_CUANDO[k])}</div>`).join("")}
    <button class="cta comp-consulta" type="button" data-comp-agregar="${esc(p.id)}">${cant(p.id) ? "✓ En Mi selección" : "Añadir a Mi selección"}</button><button class="comp-ver" type="button" data-comp-ver="${esc(p.id)}">Ver ficha →</button>
    </article>`,
      )
      .join("")}</div>
    <p class="comparacion-comun">${comun.length ? `<strong>En común:</strong> ${esc(comun.join(", "))}.` : "Tienen perfiles aromáticos distintos, según los acordes principales."}</p>
    <a class="cta comp-whatsapp" href="${esc(waLink(`¡Hola ${MARCA}! ¿Me decís el precio de estas dos fragancias?\n\n• ${a.nombre}\n• ${b.nombre}\n\n¡Gracias!`))}" target="_blank" rel="noopener">Consultar ambos por WhatsApp →</a>`;
  mostrarDialog(compararDialog);
}
$("#comparar-cuerpo").addEventListener("click", (e) => {
  const ag = e.target.closest("[data-comp-agregar]");
  if (ag) {
    cambiar(ag.dataset.compAgregar, 1);
    mostrarComparacion();
    aviso("Añadido a Mi selección.");
    return;
  }
  const ver = e.target.closest("[data-comp-ver]");
  if (ver) {
    cerrarDialog(compararDialog);
    abrir(ver.dataset.compVer);
  }
});
prepararColecciones();

/* ===============================================================
   DJINN — FILTROS PREMIUM
   Etiquetas activas, grupos plegables y limpieza individual accesible.
   Conserva las mismas reglas de filtrado y todos los resultados.
   =============================================================== */
function pintarFiltrosPremium(cuentaFiltros) {
  const total = document.querySelector("#filtros-total");
  total.hidden = cuentaFiltros === 0;
  total.textContent = String(cuentaFiltros);

  const grupos = [
    ["num-genero", estado.genero === "Todos" ? 0 : 1],
    ["num-estacion", estado.estaciones.size],
    ["num-momento", estado.momentos.size],
  ];
  for (const [id, cantidad] of grupos) {
    const el = document.getElementById(id);
    el.hidden = cantidad === 0;
    el.textContent = String(cantidad);
  }

  const activos = [];
  if (estado.q.trim())
    activos.push(["busqueda", "", `Buscar: ${estado.q.trim()}`]);
  if (estado.genero !== "Todos") activos.push(["genero", "", estado.genero]);
  for (const m of estado.marcas) activos.push(["marca", m, m]);
  for (const s of estado.estaciones) activos.push(["estacion", s, s]);
  for (const m of estado.momentos) activos.push(["momento", m, m]);
  const aroma = GRUPOS_AROMA_INDEX[estado.familiaAroma];
  if (aroma) activos.push(["aroma", "", aroma.nombre]);
  if (coleccionActiva) {
    const c = COLECCIONES_DJINN.find((x) => x.id === coleccionActiva);
    if (c) activos.push(["coleccion", "", c.nombre]);
  }

  const resumen = document.getElementById("filtros-resumen");
  resumen.hidden = !activos.length;
  const zona = document.getElementById("filtros-chips");
  zona.replaceChildren();
  for (const [tipo, valor, etiqueta] of activos) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "filtro-chip-activo";
    boton.dataset.tipo = tipo;
    boton.dataset.valor = valor;
    boton.setAttribute("aria-label", `Quitar filtro ${etiqueta}`);
    const titulo = document.createElement("span");
    titulo.textContent = etiqueta;
    const equis = document.createElement("span");
    equis.className = "filtro-chip-quitar";
    equis.setAttribute("aria-hidden", "true");
    equis.textContent = "×";
    boton.append(titulo, equis);
    zona.appendChild(boton);
  }
}

document.getElementById("limpiar-superior").addEventListener("click", limpiar);
document.getElementById("filtros-chips").addEventListener("click", (e) => {
  const boton = e.target.closest("[data-tipo]");
  if (!boton) return;
  const { tipo, valor } = boton.dataset;
  if (tipo === "busqueda") {
    estado.q = "";
    q.value = "";
    clearTimeout(esperaBusqueda);
    cerrarSugerencias();
    buscador.classList.remove("con-texto");
  } else if (tipo === "genero") {
    estado.genero = "Todos";
    document.querySelector('input[name="genero"][value="Todos"]').checked =
      true;
  } else if (tipo === "marca") {
    estado.marcas.delete(valor);
  } else if (tipo === "estacion" || tipo === "momento") {
    const conjunto = tipo === "estacion" ? estado.estaciones : estado.momentos;
    conjunto.delete(valor);
    const contenedor = document.getElementById(
      tipo === "estacion" ? "f-estacion" : "f-momento",
    );
    const input = [...contenedor.querySelectorAll("input")].find(
      (i) => i.value === valor,
    );
    if (input) input.checked = false;
  } else if (tipo === "aroma") {
    estado.familiaAroma = null;
  } else if (tipo === "coleccion") {
    coleccionActiva = null;
  }
  sincronizarOrden();
  render();
});

/* En móvil abrimos los grupos al desplegar los filtros para ahorrar toques. */
document.getElementById("abrir-filtros").addEventListener("click", () => {
  if (movil.matches) {
    for (const grupo of document.querySelectorAll(".filtro-grupo"))
      grupo.open = true;
  }
});

armarMarcas();
render();
actualizar();
marcasScroll();
// Abrir directamente la ficha si llegaron desde un enlace compartido.
sincronizarFichaConUrl();
setTimeout(empujoncito, 900);

/* DJINN — Paneles de descubrimiento desplegables: acceso directo al catálogo. */
(function iniciarExploracionCompacta() {
  const opciones = [
    ["atajo-aromas", "panel-aromas"],
    ["atajo-marcas", "panel-marcas"],
    ["atajo-colecciones", "panel-colecciones"],
  ];
  for (const [botonId, panelId] of opciones) {
    const boton = document.getElementById(botonId);
    const panel = document.getElementById(panelId);
    boton.addEventListener("click", () => {
      const abrir = panel.hidden;
      for (const [otroBoton, otroPanel] of opciones) {
        document.getElementById(otroPanel).hidden = true;
        document
          .getElementById(otroBoton)
          .setAttribute("aria-expanded", "false");
      }
      panel.hidden = !abrir;
      boton.setAttribute("aria-expanded", String(abrir));
      if (abrir && panelId === "panel-marcas")
        requestAnimationFrame(marcasScroll);
    });
  }
})();
