/* =====================================================================
   CONFIGURACIÓN (lo primero que tenés que tocar)
   ===================================================================== */
const MARCA = "Djinn";
const INSTAGRAM = "djinnfragancias"; // usuario de Instagram, sin @
const IG_DM = `https://ig.me/m/${INSTAGRAM}`; // abre directo el chat con la cuenta

/* FOTOS: cada perfume usa 3 fotos dentro de la carpeta img/
     img/<id>-1.jpg  →  foto linda del perfume
     img/<id>-2.jpg  →  foto de las notas
     img/<id>-3.jpg  →  foto de los acordes
   Ejemplo para "alba-citrica": img/alba-citrica-1.jpg, img/alba-citrica-2.jpg, img/alba-citrica-3.jpg
   Si tus fotos son png o webp, cambiá FOTO_EXT. Si querés otros nombres,
   agregá al perfume:  fotos: ["img/a.jpg", "img/b.jpg", "img/c.jpg"] */
const FOTO_EXT = "jpg";
const TIPOS_FOTO = ["Perfume", "Notas", "Acordes"];

/* Cada perfume es un bloque. Para agregar uno, copiá un bloque y cambiá los datos.
   acordes: lista [nombre, fuerza de 0 a 100]. La barra más larga es la principal (como en Fragantica).
   etiqueta: "Nuevo", "Más vendido" o "" para ninguna.
   cuando: cantidad de votos de cada opción, como en Fragantica.
   El mayor valor se toma como 100% y los demás se calculan proporcionalmente. */
const PERFUMES = [
  {
    id: "mandarin-sky-100ml",
    nombre: "Odyssey Mandarin Sky 100ml - Armaf",
    genero: "Hombre",
    ml: 100,
    etiqueta: "Más vendido",
    cuando: {
      Invierno: 2700,
      Primavera: 2400,
      Verano: 1600,
      Otoño: 2600,
      Día: 2400,
      Noche: 2600,
    },
    color: "#d8d66a",
    desc: "Una explosión fresca y dulce de mandarina, cítricos brillantes y caramelo, con un fondo amaderado que aporta elegancia y duración.",
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
    cuando: {
      Invierno: 2700,
      Primavera: 2400,
      Verano: 1600,
      Otoño: 2600,
      Día: 2400,
      Noche: 2600,
    },
    color: "#d8d66a",
    desc: "Una explosión fresca y dulce de mandarina, cítricos brillantes y caramelo, con un fondo amaderado que aporta elegancia y duración.",
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
    cuando: {
      Invierno: 21900,
      Primavera: 4000,
      Verano: 2500,
      Otoño: 17400,
      Día: 7600,
      Noche: 17300,
    },
    color: "#d19d0d",
    desc: "Una fragancia intensa y dulce con canela, dátiles y vainilla, acompañada de notas ambaradas y especiadas que crean una presencia cálida y sofisticada.",
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
    id: "hawas-for-him",
    nombre: "Alba Cítrica Intenso",
    genero: "Hombre",
    ml: 100,
    etiqueta: "Más vendido",
    cuando: {
      Invierno: 35,
      Primavera: 55,
      Verano: 70,
      Otoño: 90,
      Día: 50,
      Noche: 100,
    },
    color: "#b9a83a",
    desc: "La misma lima, ahora al caer la noche: más profunda, con un corazón de té negro.",
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 78],
      ["Ahumado", 58],
      ["Ámbar", 46],
      ["Terroso", 34],
    ],
  },
  {
    id: "desierto-al-ocaso",
    nombre: "Desierto al Ocaso",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    cuando: {
      Invierno: 90,
      Primavera: 15,
      Verano: 10,
      Otoño: 100,
      Día: 20,
      Noche: 100,
    },
    color: "#d18a1f",
    desc: "Arena todavía tibia y especias al último sol: un ámbar profundo para las noches largas.",
    acordes: [
      ["Ámbar", 100],
      ["Especiado", 90],
      ["Balsámico", 68],
      ["Cuero", 52],
      ["Dulce", 40],
    ],
  },
  {
    id: "jardin-de-noche",
    nombre: "Jardín de Noche",
    genero: "Mujer",
    ml: 50,
    etiqueta: "Nuevo",
    cuando: {
      Invierno: 20,
      Primavera: 90,
      Verano: 80,
      Otoño: 40,
      Día: 30,
      Noche: 100,
    },
    color: "#e58aa6",
    desc: "Flores blancas que se abren cuando baja el sol, con un toque dulce de frambuesa.",
    acordes: [
      ["Floral", 100],
      ["Frutal", 76],
      ["Dulce", 60],
      ["Almizclado", 44],
      ["Vainilla", 36],
    ],
  },
  {
    id: "cedro-y-sal",
    nombre: "Cedro y Sal",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    cuando: {
      Invierno: 25,
      Primavera: 75,
      Verano: 90,
      Otoño: 80,
      Día: 100,
      Noche: 40,
    },
    color: "#8a6a4a",
    desc: "Madera seca de playa: cedro limpio, sal y una pizca de pimienta.",
    acordes: [
      ["Amaderado", 100],
      ["Marino", 70],
      ["Especiado", 62],
      ["Fresco", 48],
      ["Aromático", 34],
    ],
  },
  {
    id: "lino-blanco",
    nombre: "Lino Blanco",
    genero: "Unisex",
    ml: 50,
    etiqueta: "",
    cuando: {
      Invierno: 15,
      Primavera: 90,
      Verano: 100,
      Otoño: 30,
      Día: 100,
      Noche: 20,
    },
    color: "#c9d5e4",
    desc: "Sábanas al sol: limpio, suave y luminoso, para todos los días.",
    acordes: [
      ["Fresco", 100],
      ["Almizclado", 84],
      ["Cítrico", 58],
      ["Polvoso", 44],
      ["Floral", 34],
    ],
  },
  {
    id: "ambar-real",
    nombre: "Ámbar Real",
    genero: "Mujer",
    ml: 100,
    etiqueta: "Más vendido",
    cuando: {
      Invierno: 100,
      Primavera: 15,
      Verano: 8,
      Otoño: 95,
      Día: 15,
      Noche: 100,
    },
    color: "#c47a2c",
    desc: "Cálido y envolvente: ámbar dorado con miel, vainilla y un toque de rosa oscura.",
    acordes: [
      ["Ámbar", 100],
      ["Dulce", 88],
      ["Vainilla", 70],
      ["Rosa", 54],
      ["Balsámico", 40],
    ],
  },
  {
    id: "bosque-humedo",
    nombre: "Bosque Húmedo",
    genero: "Unisex",
    ml: 100,
    etiqueta: "",
    cuando: {
      Invierno: 45,
      Primavera: 80,
      Verano: 35,
      Otoño: 100,
      Día: 85,
      Noche: 45,
    },
    color: "#5f8f5b",
    desc: "Tierra mojada, musgo y helechos después de la lluvia.",
    acordes: [
      ["Terroso", 100],
      ["Verde", 86],
      ["Amaderado", 72],
      ["Herbal", 54],
      ["Fresco", 38],
    ],
  },
  {
    id: "rosa-ceniza",
    nombre: "Rosa Ceniza",
    genero: "Mujer",
    ml: 50,
    etiqueta: "",
    cuando: {
      Invierno: 50,
      Primavera: 85,
      Verano: 30,
      Otoño: 90,
      Día: 70,
      Noche: 70,
    },
    color: "#d7b5b0",
    desc: "Una rosa sin espinas: empolvada, suave y con un fondo levemente ahumado.",
    acordes: [
      ["Rosa", 100],
      ["Polvoso", 82],
      ["Floral", 66],
      ["Ahumado", 44],
      ["Almizclado", 34],
    ],
  },
  {
    id: "negro-vetiver",
    nombre: "Negro Vetiver",
    genero: "Hombre",
    ml: 100,
    etiqueta: "",
    cuando: {
      Invierno: 90,
      Primavera: 20,
      Verano: 10,
      Otoño: 100,
      Día: 25,
      Noche: 100,
    },
    color: "#2f3a35",
    desc: "Oscuro y elegante: vetiver ahumado, cuero y una salida especiada.",
    acordes: [
      ["Amaderado", 100],
      ["Ahumado", 86],
      ["Cuero", 70],
      ["Especiado", 56],
      ["Terroso", 40],
    ],
  },
];

/* Colores de las barras de acordes (los que no estén acá usan un gris) */
const COLOR_ACORDE = {
  // PRINCIPALES
  Aldehídico: "#d7e4df",
  Ámbar: "#e58a1b",
  Animálico: "#765348",
  Acuático: "#4ebed0",
  Aromático: "#3aa88b",
  Cítrico: "#f1e441",
  Terroso: "#7c6a48",
  Floral: "#e0568f",
  Fresco: "#7fd6dc",
  "Fresco especiado": "#72a89a",
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
  Atalcado: "#ebc9c3",
  Rosas: "#e8709c",
  Salado: "#a8b9bd",
  Ahumado: "#7c7d84",
  "Especiado suave": "#a8785c",
  Dulce: "#f08fa6",
  Tabaco: "#7b5236",
  Tropical: "#e5b83c",
  Avainillado: "#f2d79a",
  "Cálido especiado": "#c8432b",
  "Floral blanco": "#eee5cf",
  Amaderado: "#8f6a45",
  "Floral amarillo": "#e7cf68",

  // ESPECÍFICOS
  Almendra: "#c99b72",
  Balsámico: "#b8783a",
  "Cera de abejas": "#d9a52e",
  Amargo: "#665b42",
  Cacao: "#75452d",
  Alcanforado: "#91a89b",
  Cannabis: "#5c8b55",
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
  Salado: "#a8b9bd",
  Vodka: "#dce7e8",
  Vino: "#713d50",

  // MUY RAROS
  Asfalto: "#4b4b4b",
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
  Dulce: "#f08fa6",
  "Cálido especiado": "#c8432b",
  Avainillado: "#f2d79a",
  Ámbar: "#e58a1b",
  Canela: "#a95732",
  Amaderado: "#8f6a45",
  "Fresco especiado": "#72a89a",
  Afrutados: "#ff8d4d",
};

/* =====================================================================
   UTILIDADES
   ===================================================================== */
const $ = (s) => document.querySelector(s);

const norm = (s) =>
  s
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

PERFUMES.forEach((p) => {
  p._fotos = p.fotos || [1, 2, 3].map((n) => `img/${p.id}-${n}.${FOTO_EXT}`);

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
  const votos = Object.values(p.cuando);
  const max = Math.max(...votos);

  if (!max) return 0;

  return Math.round((p.cuando[tipo] / max) * 100);
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
   Dentro de un grupo vale la mejor opción;
   entre grupos vale la más floja. */
const seleccion = () => [...estado.estaciones, ...estado.momentos];

function afinidad(p) {
  const grupos = [[...estado.estaciones], [...estado.momentos]].filter(
    (g) => g.length,
  );

  if (!grupos.length) return null;

  return Math.min(
    ...grupos.map((g) => Math.max(...g.map((k) => porcentajeCuando(p, k)))),
  );
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
    r.sort((a, b) => afinidad(b) - afinidad(a));
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

      return `<span class="afin-i" style="--w:${porcentaje}%;--col:${COLOR_CUANDO[k]}" title="${k}: ${p.cuando[k].toLocaleString("es-UY")} votos">${ICONOS[k]}<i></i><em>${porcentaje}%</em></span>`;
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
    <div class="vacio"><h3>No encontramos resultados</h3><p>Probá con otra palabra o quitá algún filtro.</p>
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

    const votos = p.cuando[k];

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
