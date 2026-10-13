/* =====================================================================
   CONFIGURACIÓN (lo primero que tenés que tocar)
   ===================================================================== */
const MARCA = "Djinn";
const INSTAGRAM = "djinnfragancias"; // usuario de Instagram, sin @
const IG_DM = `https://ig.me/m/${INSTAGRAM}`; // abre directo el chat con la cuenta

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
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-pink",
    nombre: "Hawas Pink - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e78eae",
    desc: "Una fragancia de estilo juvenil y llamativo, con una imagen delicada y moderna.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-diva",
    nombre: "Hawas Diva - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#b65b8a",
    desc: "Una propuesta femenina y sofisticada, pensada para destacar con una presencia elegante y segura.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-malibu",
    nombre: "Hawas Malibu - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#ed9d63",
    desc: "Una fragancia de espíritu veraniego, ideal para acompañar salidas, vacaciones y días cálidos.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-for-her",
    nombre: "Hawas For Her - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#ce7da3",
    desc: "Una fragancia femenina de estilo moderno, ideal para distintas ocasiones.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-for-her-eclat",
    nombre: "Hawas For Her Éclat - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#e8b7cb",
    desc: "Una propuesta femenina y luminosa, con una imagen elegante para el día y ocasiones especiales.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-thunder",
    nombre: "Hawas Thunder - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#596575",
    desc: "Una fragancia de imagen intensa y enérgica, ideal para quienes buscan proyectar seguridad y personalidad.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-highness",
    nombre: "Hawas Highness - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b59a65",
    desc: "Una propuesta de estilo distinguido, pensada para quienes prefieren una imagen sofisticada y exclusiva.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-london",
    nombre: "Hawas London - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#4b5369",
    desc: "Una fragancia de inspiración urbana, con una imagen clásica y contemporánea.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-lava-gold",
    nombre: "Hawas Lava Gold - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b88b32",
    desc: "Una propuesta llamativa y sofisticada, con una imagen cálida y lujosa.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-overdose",
    nombre: "Hawas Overdose - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#692c38",
    desc: "Una fragancia de presencia intensa, ideal para quienes prefieren aromas con carácter.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-exotic",
    nombre: "Hawas Exotic - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#bd7048",
    desc: "Una propuesta de estilo exótico y llamativo, pensada para quienes buscan algo diferente.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-glitz",
    nombre: "Hawas Glitz - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#c6a4d8",
    desc: "Una fragancia de imagen moderna y brillante, ideal para destacar en ocasiones especiales.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-alpha-for-him",
    nombre: "Hawas Alpha For Him - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#3b4a37",
    desc: "Una propuesta masculina de carácter decidido, ideal para quienes buscan transmitir confianza y personalidad.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-majestic",
    nombre: "Hawas Majestic - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#9b7b50",
    desc: "Una fragancia de imagen elegante y distinguida, pensada para quienes buscan una presencia sofisticada.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-love",
    nombre: "Hawas Love - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#d96c91",
    desc: "Una propuesta romántica y femenina, con una imagen dulce y delicada.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-dreams",
    nombre: "Hawas Dreams - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#8d83bd",
    desc: "Una fragancia de estilo moderno y envolvente, ideal para quienes buscan una propuesta diferente.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-chrome",
    nombre: "Hawas Chrome - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#a8b4bd",
    desc: "Una propuesta de imagen limpia y contemporánea, con un estilo moderno y versátil.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-reina",
    nombre: "Hawas Reina - Rasasi",
    genero: "Mujer",
    ml: 100,
    etiqueta: "",
    color: "#8c4774",
    desc: "Una fragancia de imagen femenina y elegante, pensada para quienes buscan destacar con personalidad.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-nautilus",
    nombre: "Hawas Nautilus - Rasasi",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    color: "#286b79",
    desc: "Una propuesta de inspiración marina, con una imagen fresca y aventurera.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-la-mer",
    nombre: "Hawas La Mer - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#4b9caa",
    desc: "Una fragancia de inspiración costera, ideal para quienes buscan una imagen fresca y relajada.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-private-terra",
    nombre: "Hawas Private Terra - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#806144",
    desc: "Una propuesta de imagen terrosa y sofisticada, pensada para quienes prefieren un estilo distinguido.",
    indicadores: [],
    acordes: [],
  },
  {
    id: "hawas-private-dulce",
    nombre: "Hawas Private Dulce - Rasasi",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    color: "#b87591",
    desc: "Una fragancia de imagen dulce y envolvente, ideal para quienes buscan un aroma con personalidad.",
    indicadores: [],
    acordes: [],
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

const imagen = (p, i, mini) =>
  `<img src="${esc(p._fotos[i] || "")}" alt="${mini ? "" : esc(p.nombre + " · " + TIPOS_FOTO[i])}" loading="lazy" data-color="${p.color}" data-i="${i}" ${mini ? "data-mini" : ""}>`;

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

let temporizador;

function aviso(msg) {
  const t = $("#toast");

  t.textContent = msg;

  try {
    if (!t.matches(":popover-open")) t.showPopover();
  } catch (e) {
    t.classList.add("on");
  }

  clearTimeout(temporizador);

  temporizador = setTimeout(() => {
    try {
      t.hidePopover();
    } catch (e) {
      t.classList.remove("on");
    }
  }, 5200);
}

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
  estaciones: new Set(),
  momentos: new Set(),
  minCuando: 50,
  orden: "destacados",
  lista: false,
};

let visibles = [],
  actual = null,
  fotoActual = 0;

/* =====================================================================
   FILTROS
   ===================================================================== */

$("#f-genero").innerHTML = ["Todos", ...generos]
  .map(
    (g, i) =>
      `<label class="pastilla"><input type="radio" name="genero" value="${g}" ${i === 0 ? "checked" : ""}><span>${g}</span></label>`,
  )
  .join("");

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

q.addEventListener("input", () => {
  estado.q = q.value;
  buscador.classList.toggle("con-texto", !!q.value);
  render();
});

$("#borrar").addEventListener("click", () => {
  q.value = "";
  q.dispatchEvent(new Event("input"));
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
  Object.assign(estado, {
    q: "",
    genero: "Todos",
  });

  estado.estaciones.clear();
  estado.momentos.clear();

  document
    .querySelectorAll("#f-estacion input, #f-momento input")
    .forEach((i) => (i.checked = false));

  estado.minCuando = 50;
  rangoMin.value = 50;
  txtMin();

  sincronizarOrden();

  q.value = "";
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

$("#abrir-filtros").addEventListener("click", (e) => {
  const ab = $("#filtros").classList.toggle("abierto");

  e.currentTarget.setAttribute("aria-expanded", ab);
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
      (estado.genero === "Todos" || p.genero === estado.genero) &&
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
  }

  return r;
}

/* =====================================================================
   CARRITO
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

/* Botón "Añadir al carrito" o selector de cantidad, según si ya está en el carrito */
function accionHTML(p) {
  const n = cant(p.id);

  return n
    ? `<div class="stepper" role="group" aria-label="Cantidad de ${esc(p.nombre)}"><button data-menos aria-label="Quitar uno">−</button><span>${n} en el carrito</span><button data-mas aria-label="Agregar uno">+</button></div>`
    : `<button class="btn-add" data-add>${BOLSA}<span>Añadir al carrito</span></button>`;
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

function mensajePedido() {
  const lineas = Object.entries(carrito)
    .map(([id, n]) => {
      const p = porId(id);

      return `• ${n} x ${p.nombre} (${p.ml} ML)`;
    })
    .join("\n");

  return `Hola ${MARCA}! Quiero hacer este pedido:\n\n${lineas}\n\nGracias!`;
}

function renderCarrito() {
  const ids = Object.keys(carrito),
    vacio = ids.length === 0;

  $("#dr-pie").hidden = vacio;

  $("#dr-lista").innerHTML = vacio
    ? `<div class="vacio-c"><h3>Tu carrito está vacío</h3><p>Añadí fragancias y armamos tu pedido por Instagram.</p></div>`
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
    const msg = mensajePedido();

    $("#dr-msg").value = msg;

    const a = $("#pedir");

    a.href = IG_DM;
    a.dataset.ig = msg;
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

$("#vaciar").addEventListener("click", () => {
  if (!confirm("¿Vaciar el carrito?")) return;

  carrito = {};

  guardar("djinn:carrito", "{}");

  actualizar();
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

function tarjeta(p) {
  return `<article class="card" data-id="${p.id}">
    <button class="media" data-abrir style="--c:${p.color}" aria-label="Ver ${esc(p.nombre)}">
      ${imagen(p, 0)}
      ${p.etiqueta ? `<span class="etiqueta">${esc(p.etiqueta)}</span>` : ""}
      <span class="vista-rapida">Ver detalle</span>
    </button>
    <button class="info" data-abrir>
      <span class="tipo">${p.genero}</span>
      <h3>${esc(p.nombre)}</h3>
      <span class="fila"><span class="ml">${p.ml} ML</span></span>
      ${afinHTML(p)}
    </button>
    <div class="accion">${accionHTML(p)}</div>
  </article>`;
}

function render() {
  const hay = seleccion().length > 0;

  $("#bloque-cuando-min").hidden = !hay;

  $('#orden [value="afinidad"]').disabled = !hay;

  visibles = filtrar();

  $("#grilla").innerHTML = visibles.length
    ? visibles.map(tarjeta).join("")
    : `
    <div class="vacio"><h3>No encontramos resultados</h3><p>${hay ? "Probá bajando el relleno mínimo o quitando alguna opción." : "Probá con otra palabra o quitá algún filtro."}</p>
    <button id="vacio-limpiar">Limpiar filtros</button></div>`;

  $("#cuenta").innerHTML =
    `<b>${visibles.length}</b> de ${PERFUMES.length} fragancias`;

  $("#limpiar").hidden = !(
    estado.q ||
    estado.genero !== "Todos" ||
    estado.estaciones.size ||
    estado.momentos.size
  );
}

$("#grilla").addEventListener("click", (e) => {
  if (e.target.closest("#vacio-limpiar")) {
    return limpiar();
  }

  const card = e.target.closest(".card");

  if (!card) return;

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

function abrir(id) {
  const p = porId(id);

  if (!p) return;

  actual = p;
  fotoActual = 0;

  $("#f-tipo").textContent = p.genero;

  $("#f-nombre").textContent = p.nombre;

  $("#f-formato").textContent = `Eau de parfum · ${p.ml} ml`;

  $("#f-desc").textContent = p.desc;

  const ig = $("#f-ig");

  ig.href = IG_DM;

  ig.dataset.ig = `Hola ${MARCA}! Quiero consultar por ${p.nombre} (${p.ml} ml).`;

  $("#f-accion").innerHTML = accionHTML(p);

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

dlg.addEventListener("close", () => (document.body.style.overflow = ""));

dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});

dlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") vecino(-1);

  if (e.key === "ArrowRight") vecino(1);
});

render();
actualizar();
